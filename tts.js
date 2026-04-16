/* ===== TTS Engine — Web Speech API + 在线音频回退 ===== */
const TTS = (function(){
  const synth = window.speechSynthesis || null;
  let enVoice = null;
  let rate = 0.8;
  let speaking = false;
  let currentBtn = null;

  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

  function dbg(msg){
    console.log('[TTS]', msg);
    var t = document.getElementById('tts-toast');
    if(t){
      t.style.opacity = '1';
      t.innerHTML += '<br>' + msg;
    }
  }
  dbg('v12 init: mobile=' + isMobile + ', synth=' + !!synth);

  /* ── Pick best English voice (desktop only) ── */
  function pickVoice(){
    if(!synth) return;
    try {
      var voices = synth.getVoices();
      if(!voices.length) return;
      var prefs = [
        function(v){ return /jenny/i.test(v.name) && v.lang.startsWith('en'); },
        function(v){ return /guy/i.test(v.name) && v.lang.startsWith('en'); },
        function(v){ return /aria/i.test(v.name) && v.lang.startsWith('en'); },
        function(v){ return /microsoft.*online/i.test(v.name) && v.lang.startsWith('en'); },
        function(v){ return /google us english/i.test(v.name); },
        function(v){ return /google uk english female/i.test(v.name); },
        function(v){ return v.lang === 'en-US'; },
        function(v){ return v.lang.startsWith('en'); },
      ];
      for(var p = 0; p < prefs.length; p++){
        var found = voices.find(prefs[p]);
        if(found){ enVoice = found; break; }
      }
    } catch(e){}
  }

  if(!isMobile && synth){
    try {
      if(synth.getVoices().length) pickVoice();
      synth.addEventListener('voiceschanged', pickVoice);
    } catch(e){}
  }

  /* ── TTS URL providers ── */
  function baiduUrl(text, spd){
    return 'https://fanyi.baidu.com/gettts?lan=en&text=' + encodeURIComponent(text) + '&spd=' + (spd||3) + '&source=web';
  }
  function youdaoUrl(text){
    return 'https://dict.youdao.com/dictvoice?audio=' + encodeURIComponent(text) + '&type=2';
  }

  function clearState(){
    speaking = false;
    if(currentBtn) currentBtn.classList.remove('tts-playing');
    currentBtn = null;
  }

  function baiduSpd(){
    return rate <= 0.6 ? 2 : rate <= 0.8 ? 3 : rate <= 1 ? 4 : 5;
  }

  /* ── Create audio element attached to DOM (some mobile browsers require this) ── */
  function makeAudio(){
    var a = document.createElement('audio');
    a.preload = 'auto';
    a.style.cssText = 'position:fixed;bottom:-100px;left:0;width:1px;height:1px;';
    document.body.appendChild(a);
    return a;
  }

  /* ── Cleanup audio element ── */
  function destroyAudio(a){
    try {
      a.pause();
      a.removeAttribute('src');
      a.load();
      if(a.parentNode) a.parentNode.removeChild(a);
    } catch(e){}
  }

  /* ── Try playing a URL, with timeout ── */
  function tryPlay(url, onOk, onFail){
    dbg('try: ' + url.slice(0, 65));
    var audio = makeAudio();
    var done = false;
    var timer = null;

    function finish(success){
      if(done) return;
      done = true;
      if(timer) clearTimeout(timer);
      if(success){
        // Don't destroy until playback ends
        audio.onended = function(){
          destroyAudio(audio);
          onOk();
        };
      } else {
        destroyAudio(audio);
        onFail();
      }
    }

    // Timeout: if nothing happens in 5s, treat as failure
    timer = setTimeout(function(){
      dbg('timeout 5s');
      finish(false);
    }, 5000);

    audio.onloadeddata = function(){
      dbg('loaded dur=' + audio.duration);
      if(audio.duration === 0){
        dbg('empty audio');
        finish(false);
      }
    };
    audio.onerror = function(){
      var code = audio.error ? audio.error.code : '?';
      dbg('err=' + code);
      finish(false);
    };

    // Use <source> element instead of src attribute (better compat with some browsers)
    var source = document.createElement('source');
    source.src = url;
    source.type = 'audio/mpeg';
    audio.appendChild(source);

    try {
      var p = audio.play();
      if(p && p.then){
        p.then(function(){
          dbg('playing!');
          // Clear timeout since audio started
          if(timer){ clearTimeout(timer); timer = null; }
          // Set up end handler
          audio.onended = function(){
            dbg('ended OK');
            destroyAudio(audio);
            if(!done){ done = true; onOk(); }
          };
        }).catch(function(e){
          dbg('play blocked: ' + e.message);
          finish(false);
        });
      }
    } catch(e){
      dbg('play exception');
      finish(false);
    }
  }

  /* ── Try fetch+blob approach (bypasses some browser restrictions) ── */
  function tryFetchPlay(url, onOk, onFail){
    if(typeof fetch === 'undefined'){ onFail(); return; }
    dbg('fetch: ' + url.slice(0, 50));
    fetch(url, { mode: 'cors', referrerPolicy: 'no-referrer' })
      .then(function(r){
        if(!r.ok) throw new Error('HTTP ' + r.status);
        return r.blob();
      })
      .then(function(blob){
        dbg('blob size=' + blob.size + ' type=' + blob.type);
        if(blob.size < 100){
          dbg('blob too small');
          onFail();
          return;
        }
        var blobUrl = URL.createObjectURL(blob);
        var audio = makeAudio();
        audio.src = blobUrl;
        audio.onended = function(){
          dbg('blob ended OK');
          destroyAudio(audio);
          URL.revokeObjectURL(blobUrl);
          onOk();
        };
        audio.onerror = function(){
          dbg('blob play err');
          destroyAudio(audio);
          URL.revokeObjectURL(blobUrl);
          onFail();
        };
        audio.play().then(function(){
          dbg('blob playing!');
        }).catch(function(e){
          dbg('blob play blocked: ' + e.message);
          destroyAudio(audio);
          URL.revokeObjectURL(blobUrl);
          onFail();
        });
      })
      .catch(function(e){
        dbg('fetch fail: ' + e.message);
        onFail();
      });
  }

  /* ── Master play: try direct play → fetch+blob → fallback URL ── */
  function playAudio(text, btn, onEnd){
    var shortText = text.length > 200 ? text.slice(0, 200) : text;

    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');

    var url1 = baiduUrl(shortText, baiduSpd());
    var url2 = youdaoUrl(shortText);

    // Strategy 1: direct Baidu
    tryPlay(url1,
      function(){ clearState(); if(onEnd) onEnd(); },
      function(){
        // Strategy 2: fetch Baidu as blob
        tryFetchPlay(url1,
          function(){ clearState(); if(onEnd) onEnd(); },
          function(){
            // Strategy 3: direct Youdao
            tryPlay(url2,
              function(){ clearState(); if(onEnd) onEnd(); },
              function(){
                // Strategy 4: fetch Youdao as blob
                tryFetchPlay(url2,
                  function(){ clearState(); if(onEnd) onEnd(); },
                  function(){
                    dbg('ALL 4 strategies failed');
                    clearState();
                  }
                );
              }
            );
          }
        );
      }
    );
  }

  /* ── Web Speech playback (desktop) ── */
  function playSpeech(text, btn, onEnd){
    try { synth.cancel(); } catch(e){}

    var utter = new SpeechSynthesisUtterance(text);
    if(enVoice) utter.voice = enVoice;
    utter.lang = 'en-US';
    utter.rate = rate;
    utter.pitch = 1;

    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');

    utter.onend = function(){ clearState(); if(onEnd) onEnd(); };
    utter.onerror = function(){ clearState(); };

    try { synth.speak(utter); } catch(e){ clearState(); }

    if(/chrome/i.test(navigator.userAgent) && !/edg/i.test(navigator.userAgent)){
      var keepAlive = setInterval(function(){
        if(!synth.speaking){ clearInterval(keepAlive); return; }
        try { synth.pause(); synth.resume(); } catch(e){ clearInterval(keepAlive); }
      }, 10000);
    }
  }

  /* ── Main speak ── */
  function speak(text, btn, onEnd){
    dbg('speak: "' + (text||'').slice(0,30) + '"');
    if(speaking && currentBtn === btn){ stop(); return; }
    if(speaking) stop();

    if(isMobile || !synth){
      playAudio(text, btn, onEnd);
    } else {
      playSpeech(text, btn, onEnd);
    }
  }

  /* ── Speak long text ── */
  function speakLong(text, btn){
    dbg('speakLong len=' + text.length);
    if(speaking && currentBtn === btn){ stop(); return; }
    if(speaking) stop();

    var chunks = splitText(text, 180);
    dbg(chunks.length + ' chunks');
    var idx = 0;
    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');

    function next(){
      if(idx >= chunks.length || !speaking){
        dbg('all done');
        clearState();
        return;
      }
      var chunk = chunks[idx].trim();
      dbg('chunk ' + (idx+1) + '/' + chunks.length);
      idx++;

      if(isMobile || !synth){
        var url = baiduUrl(chunk, baiduSpd());
        tryPlay(url, next, function(){
          tryFetchPlay(url, next, function(){
            var url2 = youdaoUrl(chunk);
            tryPlay(url2, next, function(){
              tryFetchPlay(url2, next, function(){
                dbg('chunk failed all');
                clearState();
              });
            });
          });
        });
      } else {
        var utter = new SpeechSynthesisUtterance(chunk);
        if(enVoice) utter.voice = enVoice;
        utter.lang = 'en-US';
        utter.rate = rate;
        utter.pitch = 1;
        utter.onend = next;
        utter.onerror = function(){ clearState(); };
        try { synth.speak(utter); } catch(e){ clearState(); }
      }
    }
    next();
  }

  function splitText(text, maxLen){
    var result = [];
    var parts = text.match(/[^.!?]+[.!?]*/g) || [text];
    var chunk = '';
    for(var j = 0; j < parts.length; j++){
      var s = parts[j];
      if((chunk + s).length > maxLen && chunk){
        result.push(chunk.trim());
        chunk = '';
      }
      chunk += s;
    }
    if(chunk.trim()) result.push(chunk.trim());
    return result;
  }

  function setRate(r){ rate = r; }
  function getRate(){ return rate; }

  function stop(){
    if(synth) try { synth.cancel(); } catch(e){}
    // Stop all audio elements we may have created
    document.querySelectorAll('audio').forEach(function(a){
      try { a.pause(); } catch(e){}
    });
    clearState();
  }

  function isSpeaking(){ return speaking; }

  return { speak, speakLong, setRate, getRate, stop, isSpeaking, supported: true };
})();

if(typeof window !== 'undefined') window.TTS = TTS;

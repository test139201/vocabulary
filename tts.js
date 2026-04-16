/* ===== TTS Engine — Web Speech API + Baidu/Youdao fetch+blob 回退 ===== */
const TTS = (function(){
  const synth = window.speechSynthesis || null;
  let enVoice = null;
  let rate = 0.8;
  let speaking = false;
  let currentBtn = null;

  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

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

  /* ── Create audio element attached to DOM ── */
  function makeAudio(){
    var a = document.createElement('audio');
    a.preload = 'auto';
    a.style.cssText = 'position:fixed;bottom:-100px;left:0;width:1px;height:1px;';
    document.body.appendChild(a);
    return a;
  }

  function destroyAudio(a){
    try {
      a.pause();
      a.removeAttribute('src');
      a.load();
      if(a.parentNode) a.parentNode.removeChild(a);
    } catch(e){}
  }

  /* ── Try direct <source> play with timeout ── */
  function tryPlay(url, onOk, onFail){
    var audio = makeAudio();
    var done = false;
    var timer = null;

    function finish(success){
      if(done) return;
      done = true;
      if(timer) clearTimeout(timer);
      if(success){
        audio.onended = function(){ destroyAudio(audio); onOk(); };
      } else {
        destroyAudio(audio);
        onFail();
      }
    }

    timer = setTimeout(function(){ finish(false); }, 5000);

    audio.onloadeddata = function(){
      if(audio.duration === 0) finish(false);
    };
    audio.onerror = function(){ finish(false); };

    var source = document.createElement('source');
    source.src = url;
    source.type = 'audio/mpeg';
    audio.appendChild(source);

    try {
      var p = audio.play();
      if(p && p.then){
        p.then(function(){
          if(timer){ clearTimeout(timer); timer = null; }
          audio.onended = function(){
            destroyAudio(audio);
            if(!done){ done = true; onOk(); }
          };
        }).catch(function(){ finish(false); });
      }
    } catch(e){ finish(false); }
  }

  /* ── Fetch as blob then play (bypasses mobile browser audio restrictions) ── */
  function tryFetchPlay(url, onOk, onFail){
    if(typeof fetch === 'undefined'){ onFail(); return; }
    fetch(url, { mode: 'cors', referrerPolicy: 'no-referrer' })
      .then(function(r){
        if(!r.ok) throw new Error('HTTP ' + r.status);
        return r.blob();
      })
      .then(function(blob){
        if(blob.size < 100){ onFail(); return; }
        var blobUrl = URL.createObjectURL(blob);
        var audio = makeAudio();
        audio.src = blobUrl;
        audio.onended = function(){
          destroyAudio(audio);
          URL.revokeObjectURL(blobUrl);
          onOk();
        };
        audio.onerror = function(){
          destroyAudio(audio);
          URL.revokeObjectURL(blobUrl);
          onFail();
        };
        audio.play().catch(function(){
          destroyAudio(audio);
          URL.revokeObjectURL(blobUrl);
          onFail();
        });
      })
      .catch(function(){ onFail(); });
  }

  /* ── 4-tier fallback: direct Baidu → blob Baidu → direct Youdao → blob Youdao ── */
  function playAudio(text, btn, onEnd){
    var shortText = text.length > 200 ? text.slice(0, 200) : text;

    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');

    var url1 = baiduUrl(shortText, baiduSpd());
    var url2 = youdaoUrl(shortText);

    tryPlay(url1,
      function(){ clearState(); if(onEnd) onEnd(); },
      function(){
        tryFetchPlay(url1,
          function(){ clearState(); if(onEnd) onEnd(); },
          function(){
            tryPlay(url2,
              function(){ clearState(); if(onEnd) onEnd(); },
              function(){
                tryFetchPlay(url2,
                  function(){ clearState(); if(onEnd) onEnd(); },
                  function(){ clearState(); }
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
    if(speaking && currentBtn === btn){ stop(); return; }
    if(speaking) stop();

    if(isMobile || !synth){
      playAudio(text, btn, onEnd);
    } else {
      playSpeech(text, btn, onEnd);
    }
  }

  /* ── Speak long text (story chapters) ── */
  function speakLong(text, btn){
    if(speaking && currentBtn === btn){ stop(); return; }
    if(speaking) stop();

    var chunks = splitText(text, 180);
    var idx = 0;
    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');

    function next(){
      if(idx >= chunks.length || !speaking){
        clearState();
        return;
      }
      var chunk = chunks[idx].trim();
      idx++;

      if(isMobile || !synth){
        var u1 = baiduUrl(chunk, baiduSpd());
        var u2 = youdaoUrl(chunk);
        tryPlay(u1, next, function(){
          tryFetchPlay(u1, next, function(){
            tryPlay(u2, next, function(){
              tryFetchPlay(u2, next, function(){ clearState(); });
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
    document.querySelectorAll('audio').forEach(function(a){
      try {
        a.pause();
        var src = a.src || '';
        a.removeAttribute('src');
        a.load();
        if(a.parentNode) a.parentNode.removeChild(a);
        if(src.indexOf('blob:') === 0) URL.revokeObjectURL(src);
      } catch(e){}
    });
    clearState();
  }

  function isSpeaking(){ return speaking; }

  return { speak, speakLong, setRate, getRate, stop, isSpeaking, supported: true };
})();

if(typeof window !== 'undefined') window.TTS = TTS;

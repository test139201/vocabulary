/* ===== TTS Engine — Web Speech API + Baidu/Youdao fetch+blob 回退 ===== */
const TTS = (function(){
  const synth = window.speechSynthesis || null;
  let enVoice = null;
  let rate = 0.8;
  let speaking = false;
  let currentBtn = null;

  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  const useSpeech = !isMobile && !!synth;

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

  if(useSpeech){
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

  function baiduSpd(){
    return rate <= 0.6 ? 2 : rate <= 0.8 ? 3 : rate <= 1 ? 4 : 5;
  }

  function clearState(){
    speaking = false;
    if(currentBtn) currentBtn.classList.remove('tts-playing');
    currentBtn = null;
  }

  /* ── Audio helpers ── */
  function makeAudio(){
    var a = document.createElement('audio');
    a.preload = 'auto';
    a.style.cssText = 'position:fixed;bottom:-100px;left:0;width:1px;height:1px;';
    document.body.appendChild(a);
    return a;
  }

  function destroyAudio(a){
    try {
      a.onended = null; a.onerror = null; a.onloadeddata = null;
      a.pause();
      a.removeAttribute('src');
      a.load();
      if(a.parentNode) a.parentNode.removeChild(a);
    } catch(e){}
  }

  /* ── Try direct <source> play with timeout (word-level) ── */
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
    audio.onloadeddata = function(){ if(audio.duration === 0) finish(false); };
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

  /* ── Fetch as blob then play (word-level) ── */
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

  /* ── 4-tier fallback (word-level) ── */
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

  /* ── Web Speech playback (word-level) ── */
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

  /* ── Main speak (word-level) ── */
  function speak(text, btn, onEnd){
    if(ch.state !== 'idle') chapterStop();
    if(speaking && currentBtn === btn){ stopWord(); return; }
    if(speaking) stopWord();

    if(!useSpeech) playAudio(text, btn, onEnd);
    else playSpeech(text, btn, onEnd);
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

  /* ══════════════════════════════════════
     Chapter Player — play/pause/resume/stop
     ══════════════════════════════════════ */
  var ch = {
    state: 'idle',
    lines: [],
    lineIdx: 0,
    btn: null,
    audio: null,
    blobUrl: null,
    onEvent: null
  };
  var chGen = 0;

  function chFire(evt){
    if(ch.onEvent) ch.onEvent(evt, ch.lineIdx, ch.lines.length);
  }

  function chCleanAudio(){
    if(ch.audio){
      try { destroyAudio(ch.audio); } catch(e){}
      if(ch.blobUrl){ try { URL.revokeObjectURL(ch.blobUrl); } catch(e){} ch.blobUrl = null; }
      ch.audio = null;
    }
  }

  function chReset(){
    chCleanAudio();
    if(useSpeech) try { synth.cancel(); } catch(e){}
    if(ch.btn) ch.btn.classList.remove('tts-playing');
    ch.state = 'idle';
    ch.lines = [];
    ch.lineIdx = 0;
    ch.btn = null;
    ch.onEvent = null;
    speaking = false;
    currentBtn = null;
  }

  /* ── Chapter audio fallback (with audio ref tracking) ── */
  function chPlayChunkAudio(gen, text, onOk, onFail){
    var chunk = text.length > 200 ? text.slice(0, 200) : text;
    var u1 = baiduUrl(chunk, baiduSpd());
    var u2 = youdaoUrl(chunk);
    chTryPlay(gen, u1, onOk, function(){
      chTryFetchPlay(gen, u1, onOk, function(){
        chTryPlay(gen, u2, onOk, function(){
          chTryFetchPlay(gen, u2, onOk, onFail);
        });
      });
    });
  }

  function chTryPlay(gen, url, onOk, onFail){
    if(gen !== chGen) return;
    var audio = makeAudio();
    var done = false;
    var timer = null;

    function finish(success){
      if(done) return;
      done = true;
      if(timer) clearTimeout(timer);
      if(!success){
        destroyAudio(audio);
        if(gen === chGen) onFail();
        return;
      }
      if(gen !== chGen){ destroyAudio(audio); return; }
      ch.audio = audio;
      if(ch.state === 'paused') try { audio.pause(); } catch(e){}
      audio.onended = function(){
        ch.audio = null;
        destroyAudio(audio);
        if(gen === chGen) onOk();
      };
    }

    timer = setTimeout(function(){ finish(false); }, 5000);
    audio.onloadeddata = function(){ if(audio.duration === 0) finish(false); };
    audio.onerror = function(){ finish(false); };

    var source = document.createElement('source');
    source.src = url;
    source.type = 'audio/mpeg';
    audio.appendChild(source);

    try {
      var p = audio.play();
      if(p && p.then){
        p.then(function(){
          if(gen !== chGen){ destroyAudio(audio); return; }
          if(timer){ clearTimeout(timer); timer = null; }
          ch.audio = audio;
          if(ch.state === 'paused') try { audio.pause(); } catch(e){}
          audio.onended = function(){
            ch.audio = null;
            destroyAudio(audio);
            if(!done && gen === chGen){ done = true; onOk(); }
          };
        }).catch(function(){ finish(false); });
      }
    } catch(e){ finish(false); }
  }

  function chTryFetchPlay(gen, url, onOk, onFail){
    if(gen !== chGen) return;
    if(typeof fetch === 'undefined'){ onFail(); return; }
    fetch(url, { mode:'cors', referrerPolicy:'no-referrer' })
      .then(function(r){
        if(!r.ok) throw new Error('HTTP ' + r.status);
        return r.blob();
      })
      .then(function(blob){
        if(gen !== chGen) return;
        if(blob.size < 100){ onFail(); return; }
        var blobUrl = URL.createObjectURL(blob);
        var audio = makeAudio();
        audio.src = blobUrl;
        ch.audio = audio;
        ch.blobUrl = blobUrl;
        audio.onended = function(){
          ch.audio = null;
          ch.blobUrl = null;
          destroyAudio(audio);
          URL.revokeObjectURL(blobUrl);
          if(gen === chGen) onOk();
        };
        audio.onerror = function(){
          ch.audio = null;
          ch.blobUrl = null;
          destroyAudio(audio);
          URL.revokeObjectURL(blobUrl);
          if(gen === chGen) onFail();
        };
        audio.play()
          .then(function(){
            if(gen !== chGen){ destroyAudio(audio); URL.revokeObjectURL(blobUrl); return; }
            if(ch.state === 'paused') try { audio.pause(); } catch(e){}
          })
          .catch(function(){
            ch.audio = null;
            ch.blobUrl = null;
            destroyAudio(audio);
            URL.revokeObjectURL(blobUrl);
            if(gen === chGen) onFail();
          });
      })
      .catch(function(){ if(gen === chGen) onFail(); });
  }

  /* ── Chapter play control ── */
  function chapterPlay(lines, startIdx, btn, onEvent){
    if(ch.state !== 'idle') chapterStop();
    if(speaking) stopWord();

    chGen++;
    var gen = chGen;

    ch.lines = lines;
    ch.lineIdx = startIdx || 0;
    ch.btn = btn;
    ch.onEvent = onEvent;
    ch.state = 'playing';
    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');

    chNextLine(gen);
  }

  function chNextLine(gen){
    if(gen !== chGen) return;
    if(ch.state === 'idle') return;
    if(ch.state === 'paused') return;

    if(ch.lineIdx >= ch.lines.length){
      chFire('finish');
      chReset();
      return;
    }

    var line = ch.lines[ch.lineIdx].trim();
    chFire('line');

    if(!line){ ch.lineIdx++; chNextLine(gen); return; }

    var chunks = splitText(line, 180);
    var ci = 0;

    function nextChunk(){
      if(gen !== chGen) return;
      if(ch.state === 'idle') return;
      if(ch.state === 'paused') return;
      if(ci >= chunks.length){
        ch.lineIdx++;
        chNextLine(gen);
        return;
      }
      var text = chunks[ci].trim();
      ci++;

      if(!useSpeech){
        chPlayChunkAudio(gen, text, nextChunk, function(){
          if(gen !== chGen) return;
          ch.lineIdx++;
          chNextLine(gen);
        });
      } else {
        var utter = new SpeechSynthesisUtterance(text);
        if(enVoice) utter.voice = enVoice;
        utter.lang = 'en-US';
        utter.rate = rate;
        utter.pitch = 1;
        utter.onend = function(){ if(gen === chGen) nextChunk(); };
        utter.onerror = function(){
          if(gen !== chGen) return;
          ch.lineIdx++;
          chNextLine(gen);
        };
        try { synth.speak(utter); } catch(e){
          ch.lineIdx++;
          chNextLine(gen);
        }
        if(/chrome/i.test(navigator.userAgent) && !/edg/i.test(navigator.userAgent)){
          var keepAlive = setInterval(function(){
            if(gen !== chGen){ clearInterval(keepAlive); return; }
            if(!synth.speaking){ clearInterval(keepAlive); return; }
            if(ch.state !== 'playing') return;
            try { synth.pause(); synth.resume(); } catch(e){ clearInterval(keepAlive); }
          }, 10000);
        }
      }
    }
    nextChunk();
  }

  function chapterPause(){
    if(ch.state !== 'playing') return;
    ch.state = 'paused';

    if(!useSpeech){
      if(ch.audio) try { ch.audio.pause(); } catch(e){}
    } else {
      try { synth.pause(); } catch(e){}
    }
    if(ch.btn) ch.btn.classList.remove('tts-playing');
    chFire('pause');
  }

  function chapterResume(){
    if(ch.state !== 'paused') return;
    ch.state = 'playing';
    var gen = chGen;

    if(!useSpeech){
      if(ch.audio){
        try { ch.audio.play(); } catch(e){}
      } else {
        chNextLine(gen);
      }
    } else {
      try { synth.resume(); } catch(e){}
      setTimeout(function(){
        if(gen !== chGen || ch.state !== 'playing') return;
        if(!synth.speaking && !synth.pending){
          chNextLine(gen);
        }
      }, 150);
    }
    if(ch.btn) ch.btn.classList.add('tts-playing');
    chFire('resume');
  }

  function chapterStop(){
    if(ch.state === 'idle') return;
    chFire('stop');
    chGen++;
    chReset();
  }

  function chapterState(){ return ch.state; }
  function chapterActiveBtn(){ return ch.btn; }

  /* ── Stop word-level only (does not affect chapter) ── */
  function stopWord(){
    if(useSpeech) try { synth.cancel(); } catch(e){}
    document.querySelectorAll('audio').forEach(function(a){
      if(a === ch.audio) return;
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

  /* ── Stop everything ── */
  function stop(){
    if(ch.state !== 'idle') chapterStop();
    stopWord();
  }

  function setRate(r){ rate = r; }
  function getRate(){ return rate; }
  function isSpeaking(){ return speaking || ch.state !== 'idle'; }

  return {
    speak: speak,
    chapterPlay: chapterPlay,
    chapterPause: chapterPause,
    chapterResume: chapterResume,
    chapterStop: chapterStop,
    chapterState: chapterState,
    chapterActiveBtn: chapterActiveBtn,
    setRate: setRate,
    getRate: getRate,
    stop: stop,
    isSpeaking: isSpeaking,
    supported: true
  };
})();

if(typeof window !== 'undefined') window.TTS = TTS;

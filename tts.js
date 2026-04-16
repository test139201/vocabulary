/* ===== TTS Engine — Web Speech API + Baidu/Youdao 音频回退 ===== */
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
  dbg('v11 init: mobile=' + isMobile + ', synth=' + !!synth);

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
        function(v){ return /enhanced|premium|neural|natural/i.test(v.name) && v.lang.startsWith('en'); },
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

  /* ── Create a fresh audio element each time (avoids reuse bugs on mobile) ── */
  function makeAudio(){
    var a = new Audio();
    a.crossOrigin = 'anonymous';
    a.preload = 'auto';
    return a;
  }

  /* ── Get Baidu speed from our rate ── */
  function baiduSpd(){
    return rate <= 0.6 ? 2 : rate <= 0.8 ? 3 : rate <= 1 ? 4 : 5;
  }

  /* ── Play a URL, call onOk on success or onFail on error ── */
  function tryPlay(audio, url, onOk, onFail){
    dbg('try: ' + url.slice(0, 70));
    audio.src = url;
    audio.onloadeddata = function(){
      dbg('loaded dur=' + audio.duration);
      if(audio.duration === 0){
        dbg('empty audio!');
        audio.onended = null;
        audio.onerror = null;
        onFail();
        return;
      }
    };
    audio.onended = function(){
      dbg('ended OK');
      onOk();
    };
    audio.onerror = function(){
      var code = audio.error ? audio.error.code : '?';
      dbg('err code=' + code);
      onFail();
    };
    try {
      var p = audio.play();
      if(p && p.then){
        p.then(function(){
          dbg('play started');
        }).catch(function(e){
          dbg('play BLOCKED: ' + e.message);
          onFail();
        });
      }
    } catch(e){
      dbg('play exception: ' + e.message);
      onFail();
    }
  }

  /* ── Play text with Baidu → Youdao fallback ── */
  function playAudio(text, btn, onEnd){
    var shortText = text.length > 200 ? text.slice(0, 200) : text;

    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');

    var audio1 = makeAudio();
    tryPlay(audio1, baiduUrl(shortText, baiduSpd()),
      function(){
        // Baidu success
        clearState();
        if(onEnd) onEnd();
      },
      function(){
        // Baidu failed → try Youdao with a NEW audio element
        dbg('Baidu fail → Youdao');
        audio1.src = '';
        var audio2 = makeAudio();
        tryPlay(audio2, youdaoUrl(shortText),
          function(){
            clearState();
            if(onEnd) onEnd();
          },
          function(){
            dbg('ALL TTS failed');
            clearState();
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

  /* ── Main speak: single text ── */
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

  /* ── Speak long text (story chapters) ── */
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
      dbg('chunk ' + (idx+1) + '/' + chunks.length + ': "' + chunk.slice(0,35) + '"');
      idx++;

      if(isMobile || !synth){
        var audio1 = makeAudio();
        tryPlay(audio1, baiduUrl(chunk, baiduSpd()),
          function(){ next(); },
          function(){
            dbg('chunk Baidu fail → Youdao');
            audio1.src = '';
            var audio2 = makeAudio();
            tryPlay(audio2, youdaoUrl(chunk), next, function(){
              dbg('chunk ALL failed');
              clearState();
            });
          }
        );
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
    clearState();
  }

  function isSpeaking(){ return speaking; }

  return { speak, speakLong, setRate, getRate, stop, isSpeaking, supported: true };
})();

if(typeof window !== 'undefined') window.TTS = TTS;

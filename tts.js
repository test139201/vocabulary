/* ===== TTS Engine — Web Speech API + 有道词典音频回退 ===== */
const TTS = (function(){
  const synth = window.speechSynthesis || null;
  let enVoice = null;
  let rate = 0.8;
  let speaking = false;
  let currentBtn = null;

  // Detect mobile: on mobile, skip Web Speech entirely → use audio directly
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

  // Debug: append messages to on-screen log (never disappears)
  function dbg(msg){
    console.log('[TTS]', msg);
    var t = document.getElementById('tts-toast');
    if(t){
      t.style.opacity = '1';
      t.innerHTML += '<br>' + msg;
    }
  }
  dbg('init: mobile=' + isMobile + ', synth=' + !!synth);

  // Audio element for playback — create eagerly so we can unlock it
  let audioEl = null;
  let audioUnlocked = false;
  function getAudio(){
    if(!audioEl){
      audioEl = new Audio();
      audioEl.preload = 'auto';
      dbg('audio element created');
    }
    return audioEl;
  }

  /* ── Unlock audio on first user tap (mobile requirement) ── */
  function unlockAudio(){
    if(audioUnlocked) return;
    var a = getAudio();
    // Play a tiny silent data URI to unlock the audio context
    try {
      a.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAABhgC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAAAAAAAAAAAAYYoRwmHAAAAAAD/+1DEAAAHAAGf9AAAIgAANIAAAARMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7UMQbA8AAAaQAAAAAAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==';
      var p = a.play();
      if(p && p.then){
        p.then(function(){
          audioUnlocked = true;
          a.pause();
          dbg('audio UNLOCKED ok');
        }).catch(function(e){
          dbg('audio unlock failed: ' + e.message);
        });
      }
    } catch(e){
      dbg('audio unlock error: ' + e.message);
    }
  }

  // Try to unlock on any user interaction
  if(isMobile){
    var unlockEvents = ['touchstart','touchend','click'];
    function onFirstInteraction(){
      unlockAudio();
      unlockEvents.forEach(function(ev){ document.removeEventListener(ev, onFirstInteraction, true); });
    }
    unlockEvents.forEach(function(ev){ document.addEventListener(ev, onFirstInteraction, true); });
  }

  /* ── Pick best English voice (desktop only) ── */
  function pickVoice(){
    if(!synth) return;
    try {
      const voices = synth.getVoices();
      if(!voices.length) return;
      const prefs = [
        v => /jenny/i.test(v.name) && v.lang.startsWith('en'),
        v => /guy/i.test(v.name) && v.lang.startsWith('en'),
        v => /aria/i.test(v.name) && v.lang.startsWith('en'),
        v => /microsoft.*online/i.test(v.name) && v.lang.startsWith('en'),
        v => /google us english/i.test(v.name),
        v => /google uk english female/i.test(v.name),
        v => /enhanced|premium|neural|natural/i.test(v.name) && v.lang.startsWith('en'),
        v => v.lang === 'en-US',
        v => v.lang.startsWith('en'),
      ];
      for(const test of prefs){
        const found = voices.find(test);
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

  /* ── 有道词典 TTS ── */
  function youdaoUrl(text){
    return 'https://dict.youdao.com/dictvoice?audio=' + encodeURIComponent(text) + '&type=2';
  }

  function clearState(){
    speaking = false;
    if(currentBtn) currentBtn.classList.remove('tts-playing');
    currentBtn = null;
  }

  /* ── Audio playback (有道) ── */
  function playAudio(text, btn, onEnd){
    var audio = getAudio();
    // Stop any current playback
    audio.pause();
    audio.currentTime = 0;

    var shortText = text.length > 300 ? text.slice(0, 300) : text;
    var url = youdaoUrl(shortText);
    dbg('playAudio url=' + url.slice(0, 80) + '...');
    audio.src = url;

    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');

    audio.onloadeddata = function(){
      dbg('audio loaded, duration=' + audio.duration);
    };
    audio.onended = function(){
      dbg('audio ended OK');
      clearState();
      if(onEnd) onEnd();
    };
    audio.onerror = function(e){
      var code = audio.error ? audio.error.code : '?';
      var msg = audio.error ? audio.error.message : 'unknown';
      dbg('audio error: code=' + code + ' msg=' + msg);
      clearState();
    };
    audio.play().then(function(){
      dbg('audio play started!');
    }).catch(function(e){
      dbg('audio play BLOCKED: ' + e.message);
      clearState();
    });
  }

  /* ── Web Speech playback (desktop) ── */
  function playSpeech(text, btn, onEnd){
    try { synth.cancel(); } catch(e){}

    const utter = new SpeechSynthesisUtterance(text);
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

    // Chrome long utterance hack
    if(/chrome/i.test(navigator.userAgent) && !/edg/i.test(navigator.userAgent)){
      const keepAlive = setInterval(()=>{
        if(!synth.speaking){ clearInterval(keepAlive); return; }
        try { synth.pause(); synth.resume(); } catch(e){ clearInterval(keepAlive); }
      }, 10000);
    }
  }

  /* ── Main speak: single text ── */
  function speak(text, btn, onEnd){
    dbg('speak called, text="' + (text||'').slice(0,30) + '"');
    // Toggle off if clicking same button
    if(speaking && currentBtn === btn){ stop(); return; }
    if(speaking) stop();

    if(isMobile || !synth){
      dbg('→ audio path (youdao)');
      playAudio(text, btn, onEnd);
    } else {
      dbg('→ Web Speech path');
      playSpeech(text, btn, onEnd);
    }
  }

  /* ── Speak long text (story chapters) ── */
  function speakLong(text, btn){
    dbg('speakLong called, len=' + text.length);
    if(speaking && currentBtn === btn){ stop(); return; }
    if(speaking) stop();

    var chunks = splitText(text, 250);
    dbg('speakLong: ' + chunks.length + ' chunks');
    var i = 0;
    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');

    function next(){
      if(i >= chunks.length || !speaking){
        dbg('speakLong: all chunks done');
        clearState();
        return;
      }
      var chunk = chunks[i].trim();
      dbg('speakLong chunk #' + (i+1) + '/' + chunks.length + ': "' + chunk.slice(0,40) + '..."');
      i++;

      if(isMobile || !synth){
        // Mobile: use audio element
        var audio = getAudio();
        audio.pause();
        audio.currentTime = 0;
        audio.src = youdaoUrl(chunk);
        audio.onloadeddata = function(){
          dbg('chunk loaded, dur=' + audio.duration);
        };
        audio.onended = function(){
          dbg('chunk ended OK, next...');
          next();
        };
        audio.onerror = function(){
          var code = audio.error ? audio.error.code : '?';
          dbg('chunk error: code=' + code);
          clearState();
        };
        audio.play().then(function(){
          dbg('chunk playing!');
        }).catch(function(e){
          dbg('chunk play BLOCKED: ' + e.message);
          clearState();
        });
      } else {
        // Desktop: Web Speech chain
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
    if(audioEl){ audioEl.pause(); audioEl.currentTime = 0; }
    clearState();
  }

  function isSpeaking(){ return speaking; }

  return { speak, speakLong, setRate, getRate, stop, isSpeaking, supported: true };
})();

if(typeof window !== 'undefined') window.TTS = TTS;

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

  // Audio element for playback
  let audioEl = null;
  function getAudio(){
    if(!audioEl){
      audioEl = document.createElement('audio');
      audioEl.style.display = 'none';
      document.body.appendChild(audioEl);
    }
    return audioEl;
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
    const audio = getAudio();
    // Stop any current playback
    audio.pause();
    audio.currentTime = 0;

    const shortText = text.length > 300 ? text.slice(0, 300) : text;
    audio.src = youdaoUrl(shortText);

    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');

    audio.onended = function(){
      dbg('audio ended OK');
      clearState();
      if(onEnd) onEnd();
    };
    audio.onerror = function(e){
      dbg('audio error: ' + (e.message||'unknown'));
      clearState();
    };
    audio.play().then(function(){
      dbg('audio play started');
    }).catch(function(e){
      dbg('audio play blocked: ' + e.message);
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
    dbg('speak called, text=' + (text||'').slice(0,30));
    // Toggle off if clicking same button
    if(speaking && currentBtn === btn){ stop(); return; }
    if(speaking) stop();

    if(isMobile || !synth){
      dbg('using audio fallback (youdao)');
      playAudio(text, btn, onEnd);
    } else {
      dbg('using Web Speech');
      playSpeech(text, btn, onEnd);
    }
  }

  /* ── Speak long text (story chapters) ── */
  function speakLong(text, btn){
    if(speaking && currentBtn === btn){ stop(); return; }
    if(speaking) stop();

    const chunks = splitText(text, 250);
    let i = 0;
    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');

    function next(){
      if(i >= chunks.length || !speaking){ clearState(); return; }
      const chunk = chunks[i].trim();
      i++;

      if(isMobile || !synth){
        // Audio chain
        const audio = getAudio();
        audio.pause();
        audio.src = youdaoUrl(chunk);
        audio.onended = next;
        audio.onerror = function(){ clearState(); };
        audio.play().catch(function(){ clearState(); });
      } else {
        // Web Speech chain
        const utter = new SpeechSynthesisUtterance(chunk);
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
    const result = [];
    const parts = text.match(/[^.!?]+[.!?]*/g) || [text];
    let chunk = '';
    for(const s of parts){
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

/* ===== TTS Engine — Web Speech API + audio fallback ===== */
const TTS = (function(){
  const synth = window.speechSynthesis || null;
  let enVoice = null;
  let rate = 0.8;
  let speaking = false;
  let currentBtn = null;
  let webSpeechWorks = null; // null = untested, true/false after first attempt

  // Hidden audio element for fallback
  let audioEl = null;
  function getAudio(){
    if(!audioEl){
      audioEl = document.createElement('audio');
      audioEl.style.display = 'none';
      document.body.appendChild(audioEl);
    }
    return audioEl;
  }

  /* ── Pick the best English voice ── */
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
      if(enVoice) console.log('TTS voice:', enVoice.name, enVoice.lang);
    } catch(e){ /* ignore */ }
  }

  if(synth){
    try {
      if(synth.getVoices().length) pickVoice();
      synth.addEventListener('voiceschanged', pickVoice);
    } catch(e){}
  }

  /* ── Audio fallback: use free TTS endpoint ── */
  function speakAudioFallback(text, btn, onEnd){
    const audio = getAudio();
    // Trim to max ~200 chars per request for URL length safety
    const shortText = text.length > 200 ? text.slice(0, 200) : text;
    const encoded = encodeURIComponent(shortText);
    // Google Translate TTS — widely compatible, no API key needed
    audio.src = 'https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=' + encoded;
    audio.playbackRate = rate > 0.9 ? rate : 1; // audio fallback doesn't support very slow, keep >=1

    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');

    audio.onended = function(){
      speaking = false;
      if(btn) btn.classList.remove('tts-playing');
      currentBtn = null;
      if(onEnd) onEnd();
    };
    audio.onerror = function(){
      speaking = false;
      if(btn) btn.classList.remove('tts-playing');
      currentBtn = null;
    };

    audio.play().catch(function(){
      speaking = false;
      if(btn) btn.classList.remove('tts-playing');
      currentBtn = null;
    });
  }

  /* ── Stop helper ── */
  function clearState(){
    speaking = false;
    if(currentBtn) currentBtn.classList.remove('tts-playing');
    currentBtn = null;
  }

  /* ── Main speak function ── */
  function speak(text, btn, onEnd){
    // Stop any current speech
    if(speaking){
      stop();
      if(currentBtn === btn){ return; } // toggle off
    }

    // If we already know Web Speech doesn't work, go straight to fallback
    if(webSpeechWorks === false || !synth){
      speakAudioFallback(text, btn, onEnd);
      return;
    }

    // Try Web Speech API first
    try {
      synth.cancel();
    } catch(e){}

    const utter = new SpeechSynthesisUtterance(text);
    if(enVoice) utter.voice = enVoice;
    utter.lang = 'en-US';
    utter.rate = rate;
    utter.pitch = 1;

    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');

    // Detect if Web Speech actually produces sound
    // If onend fires within ~300ms of start, it probably didn't really speak
    let started = false;
    let startTime = Date.now();

    utter.onstart = function(){ started = true; };

    utter.onend = function(){
      // If it ended too quickly (< 500ms) and text is non-trivial, Web Speech probably failed silently
      if(!started || (Date.now() - startTime < 500 && text.length > 5)){
        webSpeechWorks = false;
        clearState();
        speakAudioFallback(text, btn, onEnd);
        return;
      }
      webSpeechWorks = true;
      speaking = false;
      if(btn) btn.classList.remove('tts-playing');
      currentBtn = null;
      if(onEnd) onEnd();
    };

    utter.onerror = function(){
      webSpeechWorks = false;
      clearState();
      speakAudioFallback(text, btn, onEnd);
    };

    try {
      synth.speak(utter);
    } catch(e){
      webSpeechWorks = false;
      clearState();
      speakAudioFallback(text, btn, onEnd);
      return;
    }

    // Safety: if nothing happens after 2 seconds, fall back
    setTimeout(function(){
      if(speaking && !started){
        try { synth.cancel(); } catch(e){}
        webSpeechWorks = false;
        clearState();
        speakAudioFallback(text, btn, onEnd);
      }
    }, 2000);

    // Chrome pause/resume hack for long utterances
    if(/chrome/i.test(navigator.userAgent) && !/edg/i.test(navigator.userAgent)){
      const keepAlive = setInterval(()=>{
        if(!synth.speaking){ clearInterval(keepAlive); return; }
        try { synth.pause(); synth.resume(); } catch(e){ clearInterval(keepAlive); }
      }, 10000);
    }
  }

  /* ── Speak long text ── */
  function speakLong(text, btn){
    if(speaking){
      stop();
      if(currentBtn === btn) return;
    }

    // For audio fallback, split into chunks (max ~200 chars)
    if(webSpeechWorks === false || !synth){
      const chunks = splitText(text, 200);
      let i = 0;
      speaking = true;
      currentBtn = btn;
      if(btn) btn.classList.add('tts-playing');
      function nextChunk(){
        if(i >= chunks.length || !speaking){ clearState(); return; }
        speakAudioFallback(chunks[i], null, function(){ i++; nextChunk(); });
      }
      nextChunk();
      return;
    }

    // Web Speech: split by sentences
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    let i = 0;
    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');

    function next(){
      if(i >= sentences.length || !speaking){ clearState(); return; }
      const utter = new SpeechSynthesisUtterance(sentences[i].trim());
      if(enVoice) utter.voice = enVoice;
      utter.lang = 'en-US';
      utter.rate = rate;
      utter.pitch = 1;
      utter.onend = function(){ i++; next(); };
      utter.onerror = function(){ clearState(); };
      try { synth.speak(utter); } catch(e){ clearState(); }
    }
    next();
  }

  /* ── Utility: split text into chunks ── */
  function splitText(text, maxLen){
    const result = [];
    const sentences = text.match(/[^.!?,;]+[.!?,;]*/g) || [text];
    let chunk = '';
    for(const s of sentences){
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

  // Always report as supported — we have fallback now
  return { speak, speakLong, setRate, getRate, stop, isSpeaking, supported: true };
})();

if(typeof window !== 'undefined') window.TTS = TTS;

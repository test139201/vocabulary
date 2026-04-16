/* ===== TTS Engine — Web Speech API + 有道词典音频回退 ===== */
const TTS = (function(){
  const synth = window.speechSynthesis || null;
  let enVoice = null;
  let rate = 0.8;
  let speaking = false;
  let currentBtn = null;
  let webSpeechWorks = null; // null=untested, true/false after first try

  // Audio element for fallback
  let audioEl = null;
  function getAudio(){
    if(!audioEl){
      audioEl = document.createElement('audio');
      audioEl.style.display = 'none';
      document.body.appendChild(audioEl);
    }
    return audioEl;
  }

  /* ── Pick best English voice ── */
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
    } catch(e){}
  }

  if(synth){
    try {
      if(synth.getVoices().length) pickVoice();
      synth.addEventListener('voiceschanged', pickVoice);
    } catch(e){}
  }

  /* ── 有道词典 TTS (国内可用，美式发音) ── */
  function youdaoUrl(text){
    return 'https://dict.youdao.com/dictvoice?audio=' + encodeURIComponent(text) + '&type=2';
  }

  function speakFallback(text, btn, onEnd){
    const audio = getAudio();
    // 有道对长文本也能处理，但太长会失败，截取前段
    const shortText = text.length > 300 ? text.slice(0, 300) : text;
    audio.src = youdaoUrl(shortText);

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

  function clearState(){
    speaking = false;
    if(currentBtn) currentBtn.classList.remove('tts-playing');
    currentBtn = null;
  }

  /* ── Main speak ── */
  function speak(text, btn, onEnd){
    if(speaking){
      stop();
      // Toggle off if same button
      if(currentBtn === btn) return;
    }

    // Already know Web Speech doesn't work → fallback
    if(webSpeechWorks === false || !synth){
      speakFallback(text, btn, onEnd);
      return;
    }

    // Try Web Speech API
    try { synth.cancel(); } catch(e){}

    const utter = new SpeechSynthesisUtterance(text);
    if(enVoice) utter.voice = enVoice;
    utter.lang = 'en-US';
    utter.rate = rate;
    utter.pitch = 1;

    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');

    let started = false;
    let startTime = Date.now();

    utter.onstart = function(){ started = true; };

    utter.onend = function(){
      // Too fast & didn't really start → silent fail
      if(!started || (Date.now() - startTime < 500 && text.length > 3)){
        webSpeechWorks = false;
        clearState();
        speakFallback(text, btn, onEnd);
        return;
      }
      webSpeechWorks = true;
      clearState();
      if(onEnd) onEnd();
    };

    utter.onerror = function(){
      webSpeechWorks = false;
      clearState();
      speakFallback(text, btn, onEnd);
    };

    try { synth.speak(utter); } catch(e){
      webSpeechWorks = false;
      clearState();
      speakFallback(text, btn, onEnd);
      return;
    }

    // 2s safety timeout
    setTimeout(function(){
      if(speaking && !started){
        try { synth.cancel(); } catch(e){}
        webSpeechWorks = false;
        clearState();
        speakFallback(text, btn, onEnd);
      }
    }, 2000);

    // Chrome long utterance hack
    if(/chrome/i.test(navigator.userAgent) && !/edg/i.test(navigator.userAgent)){
      const keepAlive = setInterval(()=>{
        if(!synth.speaking){ clearInterval(keepAlive); return; }
        try { synth.pause(); synth.resume(); } catch(e){ clearInterval(keepAlive); }
      }, 10000);
    }
  }

  /* ── Speak long text (story chapters) ── */
  function speakLong(text, btn){
    if(speaking){
      stop();
      if(currentBtn === btn) return;
    }

    // Split into sentence chunks
    const chunks = splitText(text, 250);
    let i = 0;
    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');

    function next(){
      if(i >= chunks.length || !speaking){ clearState(); return; }

      if(webSpeechWorks === false || !synth){
        // Fallback path: chain audio playback
        speakFallbackChain(chunks, i, btn);
        return;
      }

      // Web Speech path
      const utter = new SpeechSynthesisUtterance(chunks[i].trim());
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

  function speakFallbackChain(chunks, startIdx, btn){
    let i = startIdx;
    function next(){
      if(i >= chunks.length || !speaking){ clearState(); return; }
      speakFallback(chunks[i], null, function(){ i++; next(); });
    }
    // Keep btn state on the chapter button
    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');
    next();
  }

  function splitText(text, maxLen){
    const result = [];
    // Split by sentence-ending punctuation
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

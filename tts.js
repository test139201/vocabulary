/* ===== TTS Engine — Natural text-to-speech using Web Speech API ===== */
/* Gracefully degrades: if browser has no SpeechSynthesis, TTS.supported = false */
const TTS = (function(){
  const synth = window.speechSynthesis || null;
  const supported = !!synth;

  let enVoice = null;
  let rate = 0.8;
  let speaking = false;
  let currentBtn = null;

  /* ── Pick the best English voice ── */
  function pickVoice(){
    if(!synth) return;
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
  }

  if(synth){
    try {
      if(synth.getVoices().length) pickVoice();
      synth.addEventListener('voiceschanged', pickVoice);
    } catch(e){ /* ignore */ }
  }

  /* ── Speak text ── */
  function speak(text, btn, onEnd){
    if(!synth) return;

    if(speaking){
      synth.cancel();
      if(currentBtn) currentBtn.classList.remove('tts-playing');
      if(currentBtn === btn){ speaking = false; currentBtn = null; return; }
    }

    const utter = new SpeechSynthesisUtterance(text);
    if(enVoice) utter.voice = enVoice;
    utter.lang = 'en-US';
    utter.rate = rate;
    utter.pitch = 1;

    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');

    utter.onend = function(){
      speaking = false;
      if(btn) btn.classList.remove('tts-playing');
      currentBtn = null;
      if(onEnd) onEnd();
    };
    utter.onerror = function(){
      speaking = false;
      if(btn) btn.classList.remove('tts-playing');
      currentBtn = null;
    };

    synth.speak(utter);

    // Chrome pause/resume hack for long utterances
    if(/chrome/i.test(navigator.userAgent) && !/edg/i.test(navigator.userAgent)){
      const keepAlive = setInterval(()=>{
        if(!synth.speaking){ clearInterval(keepAlive); return; }
        synth.pause();
        synth.resume();
      }, 10000);
      utter.onend = function(){
        clearInterval(keepAlive);
        speaking = false;
        if(btn) btn.classList.remove('tts-playing');
        currentBtn = null;
        if(onEnd) onEnd();
      };
    }
  }

  /* ── Speak long text by splitting into sentences ── */
  function speakLong(text, btn){
    if(!synth) return;
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    let i = 0;

    function next(){
      if(i >= sentences.length || !speaking){
        speaking = false;
        if(btn) btn.classList.remove('tts-playing');
        currentBtn = null;
        return;
      }
      const utter = new SpeechSynthesisUtterance(sentences[i].trim());
      if(enVoice) utter.voice = enVoice;
      utter.lang = 'en-US';
      utter.rate = rate;
      utter.pitch = 1;
      utter.onend = function(){ i++; next(); };
      utter.onerror = function(){
        speaking = false;
        if(btn) btn.classList.remove('tts-playing');
        currentBtn = null;
      };
      synth.speak(utter);
    }

    if(speaking){
      synth.cancel();
      if(currentBtn) currentBtn.classList.remove('tts-playing');
      if(currentBtn === btn){ speaking = false; currentBtn = null; return; }
    }

    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');
    next();
  }

  function setRate(r){ rate = r; }
  function getRate(){ return rate; }

  function stop(){
    if(!synth) return;
    synth.cancel();
    speaking = false;
    if(currentBtn) currentBtn.classList.remove('tts-playing');
    currentBtn = null;
  }

  function isSpeaking(){ return speaking; }

  return { speak, speakLong, setRate, getRate, stop, isSpeaking, supported };
})();

if(typeof window !== 'undefined') window.TTS = TTS;

/* ===== TTS Engine — Web Speech API + Baidu TTS 音频回退 ===== */
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
  dbg('v10 init: mobile=' + isMobile + ', synth=' + !!synth);

  // Audio element for playback
  let audioEl = null;
  function getAudio(){
    if(!audioEl){
      audioEl = new Audio();
      audioEl.preload = 'auto';
      dbg('audio element created');
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

  /* ── TTS audio URL providers ── */
  // Baidu Translate TTS — returns MP3, supports sentences, works in China
  function baiduUrl(text, spd){
    spd = spd || 3;
    return 'https://fanyi.baidu.com/gettts?lan=en&text=' + encodeURIComponent(text) + '&spd=' + spd + '&source=web';
  }

  // Youdao as backup — only good for single words
  function youdaoUrl(text){
    return 'https://dict.youdao.com/dictvoice?audio=' + encodeURIComponent(text) + '&type=2';
  }

  function clearState(){
    speaking = false;
    if(currentBtn) currentBtn.classList.remove('tts-playing');
    currentBtn = null;
  }

  /* ── Core audio playback with fallback chain ── */
  function playWithUrl(url, audio, onOk, onFail){
    audio.src = url;
    audio.onloadeddata = function(){
      dbg('loaded dur=' + audio.duration);
    };
    audio.onended = function(){
      dbg('ended OK');
      onOk();
    };
    audio.onerror = function(){
      var code = audio.error ? audio.error.code : '?';
      var msg = audio.error ? audio.error.message : '';
      dbg('error code=' + code + ' ' + msg);
      onFail();
    };
    audio.play().then(function(){
      dbg('playing!');
    }).catch(function(e){
      dbg('play BLOCKED: ' + e.message);
      onFail();
    });
  }

  /* ── Audio playback: try Baidu → Youdao fallback ── */
  function playAudio(text, btn, onEnd){
    var audio = getAudio();
    audio.pause();
    audio.currentTime = 0;

    var shortText = text.length > 200 ? text.slice(0, 200) : text;

    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');

    // Speed mapping: our rate 0.6-1.2 → Baidu spd 2-5
    var spd = rate <= 0.6 ? 2 : rate <= 0.8 ? 3 : rate <= 1 ? 4 : 5;

    dbg('try Baidu: "' + shortText.slice(0,30) + '..."');
    playWithUrl(baiduUrl(shortText, spd), audio,
      function(){
        // Success
        clearState();
        if(onEnd) onEnd();
      },
      function(){
        // Baidu failed → try Youdao (only for short text / single words)
        dbg('Baidu failed, try Youdao...');
        audio.pause();
        audio.currentTime = 0;
        playWithUrl(youdaoUrl(shortText), audio,
          function(){
            clearState();
            if(onEnd) onEnd();
          },
          function(){
            dbg('both Baidu & Youdao failed');
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

    // Chrome long utterance hack
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

    // Baidu TTS handles up to ~200 chars well, split into sentence chunks
    var chunks = splitText(text, 180);
    dbg(chunks.length + ' chunks');
    var idx = 0;
    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');

    function next(){
      if(idx >= chunks.length || !speaking){
        dbg('all chunks done');
        clearState();
        return;
      }
      var chunk = chunks[idx].trim();
      dbg('chunk ' + (idx+1) + '/' + chunks.length + ': "' + chunk.slice(0,35) + '..."');
      idx++;

      if(isMobile || !synth){
        var audio = getAudio();
        audio.pause();
        audio.currentTime = 0;
        var spd = rate <= 0.6 ? 2 : rate <= 0.8 ? 3 : rate <= 1 ? 4 : 5;
        playWithUrl(baiduUrl(chunk, spd), audio, next, function(){
          // Baidu failed → try Youdao for this chunk
          dbg('chunk Baidu fail, try Youdao');
          audio.pause();
          audio.currentTime = 0;
          playWithUrl(youdaoUrl(chunk), audio, next, function(){
            dbg('chunk both failed, stopping');
            clearState();
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
    if(audioEl){ audioEl.pause(); audioEl.currentTime = 0; }
    clearState();
  }

  function isSpeaking(){ return speaking; }

  return { speak, speakLong, setRate, getRate, stop, isSpeaking, supported: true };
})();

if(typeof window !== 'undefined') window.TTS = TTS;

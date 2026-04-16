/* ===== TTS Engine — 多音源选择 + Web Speech API + fetch+blob 回退 ===== */
const TTS = (function(){
  const synth = window.speechSynthesis || null;
  let rate = 0.8;
  let speaking = false;
  let currentBtn = null;

  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

  /* ── Voice definitions ── */
  // Online audio voices (work everywhere via fetch+blob)
  var onlineVoices = [
    { id: 'baidu-3', label: '百度女声 (标准)', provider: 'baidu', spd: 3 },
    { id: 'baidu-2', label: '百度女声 (慢速)', provider: 'baidu', spd: 2 },
    { id: 'baidu-4', label: '百度女声 (快速)', provider: 'baidu', spd: 4 },
    { id: 'youdao-us', label: '有道美式', provider: 'youdao', type: 1 },
  ];

  // Web Speech voices (desktop only, populated dynamically)
  var speechVoices = [];
  var allVoices = [];

  // Current voice selection
  var currentVoiceId = 'baidu-3';

  function rebuildVoiceList(){
    allVoices = onlineVoices.slice();
    if(!isMobile && synth){
      try {
        var sv = synth.getVoices();
        speechVoices = [];
        var seen = {};
        for(var i = 0; i < sv.length; i++){
          var v = sv[i];
          if(!v.lang.startsWith('en')) continue;
          // Deduplicate by name
          if(seen[v.name]) continue;
          seen[v.name] = true;
          // Create friendly label
          var label = v.name.replace(/Microsoft\s+/i, '').replace(/Online \(Natural\)/i, '').trim();
          var tag = v.lang.indexOf('GB') >= 0 ? '英式' : v.lang.indexOf('AU') >= 0 ? '澳式' : v.lang.indexOf('IN') >= 0 ? '印式' : '美式';
          label = label + ' (' + tag + ')';
          speechVoices.push({
            id: 'speech-' + i,
            label: label,
            provider: 'speech',
            voice: v
          });
        }
        // Sort: prefer Online/Neural voices first
        speechVoices.sort(function(a, b){
          var aOnline = /online|neural|natural/i.test(a.voice.name) ? 0 : 1;
          var bOnline = /online|neural|natural/i.test(b.voice.name) ? 0 : 1;
          return aOnline - bOnline;
        });
        // Limit to 15 to keep the list manageable
        if(speechVoices.length > 15) speechVoices = speechVoices.slice(0, 15);
        allVoices = allVoices.concat(speechVoices);
      } catch(e){}
    }
    // Notify UI to rebuild dropdowns
    updateVoiceSelectors();
  }

  if(!isMobile && synth){
    try {
      rebuildVoiceList();
      synth.addEventListener('voiceschanged', rebuildVoiceList);
    } catch(e){}
  } else {
    rebuildVoiceList();
  }

  /* ── Voice selector UI management ── */
  var voiceSelectors = [];

  function registerVoiceSelector(sel){
    voiceSelectors.push(sel);
    populateSelector(sel);
  }

  function populateSelector(sel){
    var val = sel.value || currentVoiceId;
    sel.innerHTML = '';
    // Online voices
    for(var i = 0; i < onlineVoices.length; i++){
      var opt = document.createElement('option');
      opt.value = onlineVoices[i].id;
      opt.textContent = onlineVoices[i].label;
      if(onlineVoices[i].id === val) opt.selected = true;
      sel.appendChild(opt);
    }
    // System voices (desktop only) — add a separator
    if(speechVoices.length > 0){
      var sep = document.createElement('option');
      sep.disabled = true;
      sep.textContent = '\u2500\u2500 \u7CFB\u7EDF\u8BED\u97F3 \u2500\u2500';
      sel.appendChild(sep);
      for(var j = 0; j < speechVoices.length; j++){
        var opt2 = document.createElement('option');
        opt2.value = speechVoices[j].id;
        opt2.textContent = speechVoices[j].label;
        if(speechVoices[j].id === val) opt2.selected = true;
        sel.appendChild(opt2);
      }
    }
  }

  function updateVoiceSelectors(){
    for(var i = 0; i < voiceSelectors.length; i++){
      populateSelector(voiceSelectors[i]);
    }
  }

  function setVoice(id){
    currentVoiceId = id;
    // Sync all selectors
    for(var i = 0; i < voiceSelectors.length; i++){
      voiceSelectors[i].value = id;
    }
  }

  function getVoiceById(id){
    for(var i = 0; i < allVoices.length; i++){
      if(allVoices[i].id === id) return allVoices[i];
    }
    return onlineVoices[0]; // fallback
  }

  /* ── TTS URL builders ── */
  function baiduUrl(text, spd){
    return 'https://fanyi.baidu.com/gettts?lan=en&text=' + encodeURIComponent(text) + '&spd=' + (spd||3) + '&source=web';
  }
  function youdaoUrl(text, type){
    return 'https://dict.youdao.com/dictvoice?audio=' + encodeURIComponent(text) + '&type=' + (type||1);
  }

  function clearState(){
    speaking = false;
    if(currentBtn) currentBtn.classList.remove('tts-playing');
    currentBtn = null;
  }

  /* ── Audio element helpers ── */
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

  /* ── Direct <source> play with timeout ── */
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

  /* ── Fetch+blob play ── */
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

  /* ── Build URL for a voice+text combination ── */
  function voiceUrl(voice, text){
    if(voice.provider === 'baidu'){
      // Map our rate to baidu spd, offset from voice's base spd
      var spd = voice.spd;
      if(rate <= 0.6) spd = Math.max(1, spd - 1);
      else if(rate >= 1.2) spd = Math.min(5, spd + 1);
      return baiduUrl(text, spd);
    }
    if(voice.provider === 'youdao'){
      return youdaoUrl(text, voice.type || 1);
    }
    return null;
  }

  /* ── Play online audio with fallback ── */
  function playOnlineAudio(text, voice, onOk, onFail){
    var shortText = text.length > 200 ? text.slice(0, 200) : text;
    var url = voiceUrl(voice, shortText);
    if(!url){ onFail(); return; }

    tryPlay(url, onOk, function(){
      tryFetchPlay(url, onOk, onFail);
    });
  }

  /* ── Master play for online voices: selected voice → fallback voices ── */
  function playAudio(text, btn, onEnd){
    speaking = true;
    currentBtn = btn;
    if(btn) btn.classList.add('tts-playing');

    var voice = getVoiceById(currentVoiceId);

    // If selected voice is online, try it then fallback to others
    playOnlineAudio(text, voice,
      function(){ clearState(); if(onEnd) onEnd(); },
      function(){
        // Fallback: try other online voices
        var fallbacks = onlineVoices.filter(function(v){ return v.id !== voice.id; });
        tryFallbacks(text, fallbacks, 0,
          function(){ clearState(); if(onEnd) onEnd(); },
          function(){ clearState(); }
        );
      }
    );
  }

  function tryFallbacks(text, voices, idx, onOk, onFail){
    if(idx >= voices.length){ onFail(); return; }
    playOnlineAudio(text, voices[idx], onOk, function(){
      tryFallbacks(text, voices, idx + 1, onOk, onFail);
    });
  }

  /* ── Web Speech playback (desktop) ── */
  function playSpeech(text, voice, btn, onEnd){
    try { synth.cancel(); } catch(e){}

    var utter = new SpeechSynthesisUtterance(text);
    if(voice && voice.voice) utter.voice = voice.voice;
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

    var voice = getVoiceById(currentVoiceId);
    if(voice.provider === 'speech' && synth){
      playSpeech(text, voice, btn, onEnd);
    } else {
      playAudio(text, btn, onEnd);
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

    var voice = getVoiceById(currentVoiceId);

    function next(){
      if(idx >= chunks.length || !speaking){
        clearState();
        return;
      }
      var chunk = chunks[idx].trim();
      idx++;

      if(voice.provider === 'speech' && synth){
        var utter = new SpeechSynthesisUtterance(chunk);
        if(voice.voice) utter.voice = voice.voice;
        utter.lang = 'en-US';
        utter.rate = rate;
        utter.pitch = 1;
        utter.onend = next;
        utter.onerror = function(){ clearState(); };
        try { synth.speak(utter); } catch(e){ clearState(); }
      } else {
        playOnlineAudio(chunk, voice, next, function(){
          // Fallback to other online voices for this chunk
          var fallbacks = onlineVoices.filter(function(v){ return v.id !== voice.id; });
          tryFallbacks(chunk, fallbacks, 0, next, function(){ clearState(); });
        });
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

  return {
    speak: speak,
    speakLong: speakLong,
    setRate: setRate,
    getRate: getRate,
    setVoice: setVoice,
    registerVoiceSelector: registerVoiceSelector,
    stop: stop,
    isSpeaking: isSpeaking,
    supported: true
  };
})();

if(typeof window !== 'undefined') window.TTS = TTS;

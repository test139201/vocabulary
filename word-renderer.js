/* ===== Word Renderer — renders vocabulary cards with multi-dimensional analysis ===== */
const WordRenderer = (function(){
  const POS_LABELS = {
    n:'名词',v:'动词',adj:'形容词',adv:'副词',
    prep:'介词',pron:'代词',conj:'连词',num:'数词',interj:'感叹词'
  };

  /* ── render one word card ── */
  function renderWord(w, idx){
    const posKey = w.posClass || 'n';
    // Build TTS text: word, then example sentences
    const ttsText = w.word + '. ' + (w.sentences||[]).map(s=>s.en).join('. ');

    const header = `
      <div class="wc-header pos-${posKey}">
        <button class="tts-btn" data-tts="${ttsText.replace(/"/g,'&quot;')}" title="朗读单词和例句">\u{1F50A}</button>
        <span class="wc-word">${w.word}</span>
        <span class="wc-phonetic">${w.phonetic}</span>
        <span class="wc-pos">${POS_LABELS[posKey]||w.pos}</span>
        <span class="wc-meaning">${w.meaning}</span>
      </div>`;

    /* Root / Etymology */
    let rootHtml = '';
    if(w.root){
      let parts = '';
      if(w.root.parts && w.root.parts.length){
        parts = '<div style="margin-bottom:.4rem">';
        w.root.parts.forEach(p=>{
          const cls = p.type==='prefix'?'rp-prefix':p.type==='suffix'?'rp-suffix':'rp-root';
          parts += `<span class="root-part ${cls}">${p.text} ${p.label}</span>`;
        });
        parts += '</div>';
      }
      rootHtml = `
        <div class="dim-panel dp-root">
          <div class="dim-title"><span class="dim-icon">\u{1F333}</span> 词源探秘</div>
          ${parts}
          <p>${w.root.explain}</p>
        </div>`;
    }

    /* Memory trick */
    let memoryHtml = '';
    if(w.memory){
      memoryHtml = `
        <div class="dim-panel dp-memory">
          <div class="dim-title"><span class="dim-icon">\u{1F9E0}</span> 记忆妙招</div>
          <p>${w.memory}</p>
        </div>`;
    }

    /* Word family */
    let familyHtml = '';
    if(w.family && w.family.length){
      familyHtml = `
        <div class="dim-panel dp-family">
          <div class="dim-title"><span class="dim-icon">\u{1F46A}</span> 词汇家族</div>
          <div>${w.family.map(f=>`<span class="word-tag">${f}</span>`).join('')}</div>
        </div>`;
    }

    /* Synonyms */
    let synHtml = '';
    if(w.synonyms && w.synonyms.length){
      synHtml = `
        <div class="dim-panel dp-syn">
          <div class="dim-title"><span class="dim-icon">\u{1F91D}</span> 近义词</div>
          <div>${w.synonyms.map(s=>`<span class="word-tag">${s}</span>`).join('')}</div>
        </div>`;
    }

    /* Antonyms */
    let antHtml = '';
    if(w.antonyms && w.antonyms.length){
      antHtml = `
        <div class="dim-panel dp-ant">
          <div class="dim-title"><span class="dim-icon">\u{26A1}</span> 反义词</div>
          <div>${w.antonyms.map(a=>`<span class="word-tag">${a}</span>`).join('')}</div>
        </div>`;
    }

    /* Example sentences */
    let sentHtml = '';
    if(w.sentences && w.sentences.length){
      sentHtml = `
        <div class="dim-panel dp-sentence">
          <div class="dim-title"><span class="dim-icon">\u{1F4DD}</span> 例句</div>
          <ul>${w.sentences.map(s=>`<li><span class="example-en">${s.en}</span><br><span class="example-zh">${s.zh}</span></li>`).join('')}</ul>
        </div>`;
    }

    /* Fun fact */
    let funHtml = '';
    if(w.fun){
      funHtml = `
        <div class="dim-panel dp-fun">
          <div class="dim-title"><span class="dim-icon">\u{1F4A1}</span> 趣味知识</div>
          <p>${w.fun}</p>
        </div>`;
    }

    /* Usage tips */
    let usageHtml = '';
    if(w.usage){
      usageHtml = `
        <div class="dim-panel dp-usage">
          <div class="dim-title"><span class="dim-icon">\u{1F4AC}</span> 用法提示</div>
          <p>${w.usage}</p>
        </div>`;
    }

    /* Visual imagination */
    let visualHtml = '';
    if(w.visual){
      visualHtml = `
        <div class="dim-panel dp-visual">
          <div class="dim-title"><span class="dim-icon">\u{1F3A8}</span> 联想画面</div>
          <p>${w.visual}</p>
        </div>`;
    }

    /* Confusable words */
    let confuseHtml = '';
    if(w.confuse){
      confuseHtml = `
        <div class="dim-panel dp-confuse">
          <div class="dim-title"><span class="dim-icon">\u{26A0}\u{FE0F}</span> 易混辨析</div>
          <p>${w.confuse}</p>
        </div>`;
    }

    /* Mnemonic rhyme */
    let rhymeHtml = '';
    if(w.rhyme){
      rhymeHtml = `
        <div class="dim-panel dp-rhyme">
          <div class="dim-title"><span class="dim-icon">\u{1F3B6}</span> 速记口诀</div>
          <p>${w.rhyme}</p>
        </div>`;
    }

    /* Scene cluster */
    let sceneHtml = '';
    if(w.scene){
      sceneHtml = `
        <div class="dim-panel dp-scene">
          <div class="dim-title"><span class="dim-icon">\u{1F30D}</span> 同类串记</div>
          <p>${w.scene}</p>
        </div>`;
    }

    return `
      <div class="word-card" id="word-${w.word}" data-pos="${posKey}" data-word="${w.word.toLowerCase()}">
        ${header}
        <div class="wc-body">
          ${sentHtml}${rootHtml}${memoryHtml}${visualHtml}${rhymeHtml}${sceneHtml}
        </div>
        <div class="wc-full">
          ${familyHtml}${synHtml}${antHtml}${confuseHtml}${funHtml}${usageHtml}
        </div>
      </div>`;
  }

  /* ── render the full unit page ── */
  function renderUnit(unit, rootEl){
    if(!unit||!rootEl) return;

    /* Nav */
    const nav = `<div class="nav"><a href="index.html">\u{1F3E0} \u9996\u9875</a><span class="sep">/</span><span>Module ${unit.id}</span></div>`;

    /* Cover */
    const cover = `
      <div class="cover" style="--accent-c:${unit.color}">
        <h1>Module ${unit.id}: ${unit.title}</h1>
        <div class="cover-sub">${unit.theme}</div>
        <div class="cover-meta">
          <span>\u{1F4DA} ${unit.words.length} \u4E2A\u5355\u8BCD</span>
          <span>\u{1F3AF} \u5916\u7814\u7248\u4E03\u5E74\u7EA7\u4E0B\u518C</span>
        </div>
      </div>`;

    /* POS stats */
    const posCounts = {};
    unit.words.forEach(w=>{ const k=w.posClass||'n'; posCounts[k]=(posCounts[k]||0)+1; });
    let statsHtml = '';
    const posColors = {n:'sc-noun',v:'sc-verb',adj:'sc-adj'};
    for(const [k,v] of Object.entries(posCounts)){
      const cls = posColors[k]||'';
      statsHtml += `<div class="stat-card ${cls}"><div class="stat-num">${v}</div><div class="stat-label">${POS_LABELS[k]||k}</div></div>`;
    }
    statsHtml = `<div class="stats-bar">${statsHtml}</div>`;

    /* Filter bar */
    const posTypes = Object.keys(posCounts);
    let filterHtml = `<div class="filter-bar"><label>\u{1F50D} \u7B5B\u9009\uFF1A</label>
      <button class="fbtn active" data-filter="all">\u5168\u90E8</button>`;
    posTypes.forEach(p=>{
      filterHtml += `<button class="fbtn" data-filter="${p}">${POS_LABELS[p]||p}</button>`;
    });
    filterHtml += `<span style="margin-left:auto;display:flex;align-items:center;gap:.5rem">
      <span style="font-size:.75rem;color:var(--text3)">\u{1F3A4} \u8BED\u901F:</span>
      <select class="tts-speed">
        <option value="0.6">\u8F83\u6162</option>
        <option value="0.8" selected>\u9002\u4E2D</option>
        <option value="1">\u6B63\u5E38</option>
        <option value="1.2">\u8F83\u5FEB</option>
      </select>
      <button class="fbtn" data-action="quiz" style="background:#8b5cf6;color:#fff;border-color:#8b5cf6">\u{1F3AE} \u8D76\u5FEB\u6D4B\u8BD5</button>
    </span></div>`;

    /* Search */
    const searchHtml = `<div class="search-wrap" style="margin-bottom:1.5rem">
      <span class="search-icon">\u{1F50E}</span>
      <input type="text" id="unit-search" placeholder="\u641C\u7D22\u672C\u5355\u5143\u5355\u8BCD..." autocomplete="off">
    </div>`;

    /* Words */
    const wordsHtml = `<div class="word-list" id="word-list">${unit.words.map((w,i)=>renderWord(w,i)).join('')}</div>`;

    /* Quiz overlay */
    const quizHtml = `
      <div class="quiz-overlay" id="quiz-overlay">
        <div class="quiz-box" style="position:relative">
          <button class="quiz-close" id="quiz-close">&times;</button>
          <div class="quiz-score" id="quiz-score"></div>
          <div class="quiz-word" id="quiz-word"></div>
          <div class="quiz-phonetic" id="quiz-phonetic"></div>
          <div class="quiz-options" id="quiz-options"></div>
          <button class="quiz-next" id="quiz-next">\u4E0B\u4E00\u9898 \u2192</button>
        </div>
      </div>`;

    /* Footer */
    const footer = `<div class="footer">\u5916\u7814\u7248\u4E03\u5E74\u7EA7\u4E0B\u518C\u82F1\u8BED\u8BCD\u6C47\u591A\u7EF4\u5EA6\u5206\u6790 &mdash; Module ${unit.id}</div>`;

    rootEl.innerHTML = nav + cover + statsHtml + filterHtml + searchHtml + wordsHtml + quizHtml + footer;

    /* ── Interactivity ── */
    // Filter
    rootEl.querySelectorAll('.fbtn[data-filter]').forEach(btn=>{
      btn.addEventListener('click', function(){
        rootEl.querySelectorAll('.fbtn[data-filter]').forEach(b=>b.classList.remove('active'));
        this.classList.add('active');
        const f = this.dataset.filter;
        rootEl.querySelectorAll('.word-card').forEach(c=>{
          c.style.display = (f==='all'||c.dataset.pos===f)?'':'none';
        });
      });
    });

    // Search
    const searchInput = rootEl.querySelector('#unit-search');
    if(searchInput){
      searchInput.addEventListener('input', function(){
        const q = this.value.toLowerCase().trim();
        rootEl.querySelectorAll('.word-card').forEach(c=>{
          if(!q){ c.style.display=''; return; }
          const text = c.textContent.toLowerCase();
          c.style.display = text.includes(q)?'':'none';
        });
      });
    }

    // Quiz
    initQuiz(unit, rootEl);

    // TTS buttons on word cards
    initTTS(rootEl);
  }

  /* ── Quiz Mode ── */
  function initQuiz(unit, rootEl){
    const overlay = rootEl.querySelector('#quiz-overlay');
    const wordEl = rootEl.querySelector('#quiz-word');
    const phoneticEl = rootEl.querySelector('#quiz-phonetic');
    const optionsEl = rootEl.querySelector('#quiz-options');
    const scoreEl = rootEl.querySelector('#quiz-score');
    const nextBtn = rootEl.querySelector('#quiz-next');
    const closeBtn = rootEl.querySelector('#quiz-close');

    let score=0, total=0, current=null, answered=false;
    const words = [...unit.words];

    function shuffle(arr){ for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]]; } return arr; }

    function nextQuestion(){
      answered = false;
      total++;
      current = words[Math.floor(Math.random()*words.length)];
      wordEl.textContent = current.word;
      phoneticEl.textContent = current.phonetic;
      scoreEl.textContent = `\u5F97\u5206: ${score}/${total-1}`;

      // Generate options
      let opts = [current.meaning];
      const others = words.filter(w=>w.word!==current.word);
      shuffle(others);
      for(let i=0;i<3&&i<others.length;i++) opts.push(others[i].meaning);
      shuffle(opts);

      optionsEl.innerHTML = '';
      opts.forEach(o=>{
        const btn = document.createElement('button');
        btn.className = 'quiz-opt';
        btn.textContent = o;
        btn.addEventListener('click', function(){
          if(answered) return;
          answered = true;
          if(o===current.meaning){
            this.classList.add('correct');
            score++;
          } else {
            this.classList.add('wrong');
            // highlight correct
            optionsEl.querySelectorAll('.quiz-opt').forEach(b=>{
              if(b.textContent===current.meaning) b.classList.add('correct');
            });
          }
          scoreEl.textContent = `\u5F97\u5206: ${score}/${total}`;
        });
        optionsEl.appendChild(btn);
      });
    }

    // Quiz button
    const quizBtn = rootEl.querySelector('[data-action="quiz"]');
    if(quizBtn){
      quizBtn.addEventListener('click', function(){
        score=0; total=0;
        overlay.classList.add('active');
        nextQuestion();
      });
    }
    if(nextBtn) nextBtn.addEventListener('click', nextQuestion);
    if(closeBtn) closeBtn.addEventListener('click', function(){ overlay.classList.remove('active'); });
    overlay.addEventListener('click', function(e){ if(e.target===overlay) overlay.classList.remove('active'); });
  }

  /* ── TTS init: bind all .tts-btn and .tts-chapter-btn ── */
  function initTTS(rootEl){
    const allBtns = rootEl.querySelectorAll('.tts-btn, .tts-chapter-btn');
    const allSpeed = rootEl.querySelectorAll('.tts-speed');

    // If TTS not available at all, dim buttons and show hint
    if(typeof TTS === 'undefined' || !TTS.supported){
      allBtns.forEach(btn=>{
        btn.style.opacity = '0.3';
        btn.title = '\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u6717\u8BFB\uFF0C\u8BF7\u4F7F\u7528 Chrome \u6216 Edge';
        btn.style.cursor = 'not-allowed';
      });
      return;
    }

    // Word-level TTS buttons
    rootEl.querySelectorAll('.tts-btn').forEach(btn=>{
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        this.style.background = '#dbeafe';
        const b = this;
        setTimeout(function(){ b.style.background = ''; }, 300);
        TTS.speak(this.dataset.tts, this);
      });
    });

    /* ── Chapter progress bar + play/pause/stop + click-to-seek ── */

    function getChapterLineEls(chapter){
      const enEls = chapter.querySelectorAll('.story-en');
      if(enEls.length) return Array.from(enEls);
      return Array.from(chapter.querySelectorAll('.story-block-en p'));
    }

    // Track which chapter is active so we can clear highlights properly
    var activeChapter = null;

    function clearHighlights(){
      if(!activeChapter) return;
      activeChapter.querySelectorAll('.story-line-playing').forEach(function(el){
        el.classList.remove('story-line-playing');
      });
    }

    function updateProgressBar(chapter, lineIdx, total, state){
      var bar = chapter.querySelector('.ch-progress');
      if(!bar) return;
      var fill = bar.querySelector('.ch-progress-fill');
      var text = bar.querySelector('.ch-progress-text');
      var playBtn = bar.querySelector('.ch-play-btn');
      var stopBtn = bar.querySelector('.ch-stop-btn');

      if(state === 'idle' || state === 'stop' || state === 'finish'){
        bar.style.display = 'none';
        playBtn.textContent = '\u25B6';
        playBtn.title = '\u64AD\u653E';
        return;
      }
      bar.style.display = '';
      var pct = total > 0 ? Math.round(((lineIdx) / total) * 100) : 0;
      fill.style.width = pct + '%';
      text.textContent = (lineIdx) + ' / ' + total;
      if(state === 'paused'){
        playBtn.textContent = '\u25B6';
        playBtn.title = '\u7EE7\u7EED\u64AD\u653E';
      } else {
        playBtn.textContent = '\u23F8';
        playBtn.title = '\u6682\u505C';
      }
    }

    function playChapterFrom(chapter, lineIdx, btn){
      if(!btn) btn = chapter.querySelector('.tts-chapter-btn');
      var lineEls = getChapterLineEls(chapter);
      var lines = lineEls.map(function(el){ return el.textContent; });
      if(!lines.length) return;

      clearHighlights();
      activeChapter = chapter;

      TTS.chapterPlay(lines, lineIdx, btn, function(evt, idx, total){
        // Highlight current line
        lineEls.forEach(function(el, i){
          if(evt === 'line' && i === idx) el.classList.add('story-line-playing');
          else el.classList.remove('story-line-playing');
        });

        if(evt === 'line'){
          updateProgressBar(chapter, idx + 1, total, 'playing');
          // Scroll playing line into view
          var playing = lineEls[idx];
          if(playing && playing.scrollIntoView){
            playing.scrollIntoView({behavior:'smooth', block:'nearest'});
          }
        } else if(evt === 'pause'){
          updateProgressBar(chapter, idx, total, 'paused');
        } else if(evt === 'resume'){
          updateProgressBar(chapter, idx, total, 'playing');
        } else if(evt === 'finish' || evt === 'stop'){
          clearHighlights();
          updateProgressBar(chapter, 0, total, 'idle');
          activeChapter = null;
        }
      });

      updateProgressBar(chapter, lineIdx, lines.length, 'playing');
    }

    // Insert progress bar HTML after each chapter title
    rootEl.querySelectorAll('.story-chapter').forEach(function(chapter){
      var title = chapter.querySelector('.story-chapter-title');
      if(!title) return;
      var bar = document.createElement('div');
      bar.className = 'ch-progress';
      bar.style.display = 'none';
      bar.innerHTML =
        '<div class="ch-progress-controls">' +
          '<button class="ch-play-btn" title="\u6682\u505C">\u23F8</button>' +
          '<button class="ch-stop-btn" title="\u505C\u6B62">\u25A0</button>' +
        '</div>' +
        '<div class="ch-progress-track">' +
          '<div class="ch-progress-fill"></div>' +
        '</div>' +
        '<span class="ch-progress-text">0 / 0</span>';
      title.after(bar);

      // Progress bar play/pause button
      bar.querySelector('.ch-play-btn').addEventListener('click', function(e){
        e.stopPropagation();
        var st = TTS.chapterState();
        if(st === 'playing') TTS.chapterPause();
        else if(st === 'paused') TTS.chapterResume();
      });

      // Progress bar stop button
      bar.querySelector('.ch-stop-btn').addEventListener('click', function(e){
        e.stopPropagation();
        TTS.chapterStop();
      });

      // Click on progress track to seek
      var track = bar.querySelector('.ch-progress-track');
      track.addEventListener('click', function(e){
        var rect = track.getBoundingClientRect();
        var pct = (e.clientX - rect.left) / rect.width;
        var lineEls = getChapterLineEls(chapter);
        var seekIdx = Math.floor(pct * lineEls.length);
        if(seekIdx < 0) seekIdx = 0;
        if(seekIdx >= lineEls.length) seekIdx = lineEls.length - 1;
        playChapterFrom(chapter, seekIdx, null);
      });
    });

    // Chapter button: toggle play/pause, or start from beginning
    rootEl.querySelectorAll('.tts-chapter-btn').forEach(function(btn){
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        var chapter = this.closest('.story-chapter');
        var st = TTS.chapterState();

        if(st === 'playing' && TTS.chapterActiveBtn() === this){
          TTS.chapterPause();
          return;
        }
        if(st === 'paused' && TTS.chapterActiveBtn() === this){
          TTS.chapterResume();
          return;
        }
        playChapterFrom(chapter, 0, this);
      });
    });

    // Click on a story line: only works when this chapter is active
    rootEl.querySelectorAll('.story-chapter').forEach(function(chapter){
      var lineEls = getChapterLineEls(chapter);
      lineEls.forEach(function(el, idx){
        el.style.cursor = 'pointer';
        el.addEventListener('click', function(e){
          if(e.target.closest('a')) return;
          var st = TTS.chapterState();
          if(st === 'idle') return;
          if(activeChapter !== chapter) return;
          // Clicking the line currently being read: toggle pause/resume
          if(el.classList.contains('story-line-playing')){
            if(st === 'playing') TTS.chapterPause();
            else if(st === 'paused') TTS.chapterResume();
            return;
          }
          // Jump to a different line
          playChapterFrom(chapter, idx, null);
        });
      });
    });

    // Speed control
    allSpeed.forEach(sel=>{
      sel.addEventListener('change', function(){
        TTS.setRate(parseFloat(this.value));
      });
    });
  }

  /* ── Render Index Page ── */
  function renderIndex(units, rootEl){
    /* Cover */
    const cover = `
      <div class="cover">
        <h1>\u{1F4D6} \u5916\u7814\u7248\u4E03\u5E74\u7EA7\u4E0B\u518C\u82F1\u8BED\u8BCD\u6C47\u591A\u7EF4\u5EA6\u5206\u6790</h1>
        <div class="cover-sub">词源探秘 · 记忆妙招 · 联想画面 · 速记口诀 · 近反义词 · 易混辨析 · 同类串记 · 趣味知识 · 用法提示</div>
        <div class="cover-meta">
          <span>\u{1F3AF} ${units.reduce((s,u)=>s+u.words.length,0)} \u4E2A\u6838\u5FC3\u8BCD\u6C47</span>
          <span>\u{1F4DA} ${units.length} \u4E2A\u6A21\u5757</span>
          <span>\u{1F9E0} \u591A\u7EF4\u5EA6\u8BB0\u5FC6\u6CD5</span>
        </div>
      </div>`;

    /* Global stats */
    let totalWords=0, nounCount=0, verbCount=0, adjCount=0;
    units.forEach(u=>{
      u.words.forEach(w=>{
        totalWords++;
        if(w.posClass==='n') nounCount++;
        else if(w.posClass==='v') verbCount++;
        else if(w.posClass==='adj') adjCount++;
      });
    });
    const stats = `
      <div class="stats-bar">
        <div class="stat-card sc-total"><div class="stat-num">${totalWords}</div><div class="stat-label">\u603B\u8BCD\u6C47\u91CF</div></div>
        <div class="stat-card sc-noun"><div class="stat-num">${nounCount}</div><div class="stat-label">\u540D\u8BCD</div></div>
        <div class="stat-card sc-verb"><div class="stat-num">${verbCount}</div><div class="stat-label">\u52A8\u8BCD</div></div>
        <div class="stat-card sc-adj"><div class="stat-num">${adjCount}</div><div class="stat-label">\u5F62\u5BB9\u8BCD</div></div>
      </div>`;

    /* Global search */
    const search = `
      <div class="search-wrap">
        <span class="search-icon">\u{1F50E}</span>
        <input type="text" id="global-search" placeholder="\u641C\u7D22\u4EFB\u610F\u5355\u8BCD\uFF08\u82F1\u6587\u6216\u4E2D\u6587\uFF09..." autocomplete="off">
        <div class="search-results" id="search-results"></div>
      </div>`;

    /* Unit grid */
    const ucColors = ['uc-1','uc-2','uc-3','uc-4','uc-5','uc-6','uc-7','uc-8','uc-9','uc-10','uc-11','uc-12'];
    let unitGrid = '<h2>\u{1F4DA} \u6A21\u5757\u5BFC\u822A</h2><div class="unit-grid">';
    units.forEach((u,i)=>{
      const posMap = {};
      u.words.forEach(w=>{ const k=w.posClass||'n'; posMap[k]=(posMap[k]||0)+1; });
      const tags = Object.entries(posMap).map(([k,v])=>{
        const bg = k==='n'?'tag-noun':k==='v'?'tag-verb':k==='adj'?'tag-adj':'tag-adv';
        return `<span class="unit-tag ${bg}">${POS_LABELS[k]||k} ${v}</span>`;
      }).join('');

      unitGrid += `
        <a class="unit-card ${ucColors[i%12]}" href="unit${u.id}.html">
          <span class="unit-num">MODULE ${u.id}</span>
          <span class="unit-count">${u.words.length} \u8BCD</span>
          <div class="unit-title">${u.title}</div>
          <div class="unit-desc">${u.theme}</div>
          <div class="unit-tags">${tags}</div>
        </a>`;
    });
    unitGrid += '</div>';

    /* Word root highlight section */
    const roots = [
      { root:'inter-', meaning:'\u5728\u2026\u4E4B\u95F4/\u4E92\u76F8', examples:'internet, international, interview' },
      { root:'e-/ex-', meaning:'\u51FA/\u5411\u5916/\u7535\u5B50', examples:'email, eraser, exchange, exciting' },
      { root:'re-', meaning:'\u518D\u6B21/\u56DE', examples:'return, receive, relax, restart' },
      { root:'-er/-or', meaning:'\u505A\u2026\u7684\u4EBA/\u7269', examples:'eraser, visitor, musician, monitor' },
      { root:'cycl-', meaning:'\u5706/\u8F6E', examples:'cycling, bicycle, recycle' },
      { root:'-ward', meaning:'\u671D\u5411', examples:'forward, backward, toward(s)' },
      { root:'-able', meaning:'\u53EF\u4EE5\u2026\u7684', examples:'able, comfortable, fashionable' },
      { root:'-ful/-less', meaning:'\u5145\u6EE1/\u6CA1\u6709', examples:'successful↔naughty, wonderful↔noisy, beautiful↔common' },
    ];
    let rootSection = '<h2>\u{1F333} \u6838\u5FC3\u8BCD\u6839\u901F\u67E5</h2><div class="unit-grid">';
    roots.forEach(r=>{
      rootSection += `
        <div class="unit-card" style="border-left-color:#f59e0b;cursor:default">
          <div class="unit-title" style="color:#d97706">${r.root}</div>
          <div class="unit-desc" style="font-weight:600;color:#1e293b;margin-bottom:.2rem">${r.meaning}</div>
          <div class="unit-desc">${r.examples}</div>
        </div>`;
    });
    rootSection += '</div>';

    /* ── Fun Story with all words ── */
    // Build word→unit lookup
    const wordMap = {};
    units.forEach(u=>{
      u.words.forEach(w=>{ wordMap[w.word.toLowerCase()] = u.id; });
    });

    // Build a lowercase→original-word map for correct anchor IDs
    const wordOriginal = {};
    units.forEach(u=>{
      u.words.forEach(w=>{ wordOriginal[w.word.toLowerCase()] = w.word; });
    });

    function wl(word, display){
      // word link helper: returns an <a> pointing to the unit page + anchor
      const key = word.toLowerCase();
      const uid = wordMap[key];
      if(!uid) return `<b>${display||word}</b>`;
      const anchor = wordOriginal[key] || key;
      return `<a class="story-word" href="unit${uid}.html#word-${anchor}" title="点击查看 ${word} 的详细分析">${display||word}</a>`;
    }

    // Helper: one bilingual line = English on top, Chinese below
    function ln(en, zh){
      return `<div class="story-line"><div class="story-en">${en}</div><div class="story-zh">${zh}</div></div>`;
    }

    const storyHtml = `
      <h2>\u{1F4D6} A Story With All the Words</h2>
      <div class="story-hint">
        \u{1F4A1} \u70B9\u51FB\u9AD8\u4EAE\u5355\u8BCD\u8DF3\u8F6C\u8BE6\u7EC6\u5206\u6790 | \u70B9\u51FB \u{1F50A} \u6309\u94AE\u6717\u8BFB\u6574\u7AE0
        <span style="margin-left:1rem">\u{1F3A4} \u8BED\u901F:
          <select class="tts-speed">
            <option value="0.6">\u8F83\u6162</option>
            <option value="0.8" selected>\u9002\u4E2D</option>
            <option value="1">\u6B63\u5E38</option>
            <option value="1.2">\u8F83\u5FEB</option>
          </select>
        </span>
      </div>
      <div class="story-card">

        <div class="story-chapter">
          <div class="story-chapter-title"><button class="tts-chapter-btn" title="\u6717\u8BFB\u672C\u7AE0">\u{1F50A}</button> Chapter 1 \xB7 Lost and Found</div>
          ${ln(
            `${wl('whose','Whose')} ${wl('crayon','crayon')} is this? And ${wl('whose','whose')} ${wl('glove','glove')}s are ${wl('those','those')}? It is Monday morning, and there are ${wl('strange','strange')} things at the ${wl('lost and found','lost and found')} office.`,
            `\u8FD9\u652F\u8721\u7B14\u662F\u8C01\u7684\uFF1F\u90A3\u4E9B\u624B\u5957\u662F\u8C01\u7684\uFF1F\u661F\u671F\u4E00\u65E9\u4E0A\uFF0C\u5931\u7269\u62DB\u9886\u5904\u6709\u4E00\u4E9B\u5947\u602A\u7684\u4E1C\u897F\u3002`
          )}
          ${ln(
            `${wl('first of all','First of all')}, there is a ${wl('purple','purple')} ${wl('wallet','wallet')} with a ${wl('hundred','hundred')} pounds inside. A ${wl('watch','watch')}, a ${wl('camera','camera')}, and a ${wl('mobile phone','mobile phone')} are on the table too.`,
            `\u9996\u5148\uFF0C\u6709\u4E00\u4E2A\u7D2B\u8272\u7684\u94B1\u5305\uFF0C\u91CC\u9762\u6709\u4E00\u767E\u82F1\u955C\u3002\u684C\u5B50\u4E0A\u8FD8\u6709\u4E00\u5757\u624B\u8868\u3001\u4E00\u90E8\u76F8\u673A\u548C\u4E00\u90E8\u624B\u673A\u3002`
          )}
          ${ln(
            `"Is this ${wl('eraser','eraser')} ${wl('yours','yours')}?" asks the teacher. "No, it is not ${wl('mine','mine')}. Maybe it is ${wl('hers','hers')}," I say.`,
            `\u201C\u8FD9\u5757\u6A61\u76AE\u662F\u4F60\u7684\u5417\uFF1F\u201D\u8001\u5E08\u95EE\u3002\u201C\u4E0D\uFF0C\u4E0D\u662F\u6211\u7684\u3002\u4E5F\u8BB8\u662F\u5979\u7684\uFF0C\u201D\u6211\u8BF4\u3002`
          )}
          ${ln(
            `Someone ${wl('lost','lost')} a ${wl('tape','tape')} and a toy ${wl('duck','duck')}. Someone even ${wl('found','found')} a ${wl('pig','pig')} and a ${wl('sausage','sausage')} \u2014 a ${wl('thousand','thousand')} ${wl('strange','strange')} things come here every year! What a ${wl('boat','boat')}load of stuff!`,
            `\u6709\u4EBA\u4E22\u4E86\u4E00\u5377\u78C1\u5E26\u548C\u4E00\u53EA\u73A9\u5177\u9E2D\u3002\u6709\u4EBA\u751A\u81F3\u627E\u5230\u4E86\u4E00\u53EA\u732A\u548C\u4E00\u6839\u9999\u80A0\u2014\u2014\u6BCF\u5E74\u6709\u4E00\u5343\u4EF6\u5947\u602A\u7684\u4E1C\u897F\u88AB\u9001\u5230\u8FD9\u91CC\uFF01\u771F\u662F\u6EE1\u6EE1\u4E00\u8239\u7684\u4E1C\u897F\uFF01`
          )}
        </div>

        <div class="story-chapter">
          <div class="story-chapter-title"><button class="tts-chapter-btn" title="\u6717\u8BFB\u672C\u7AE0">\u{1F50A}</button> Chapter 2 \xB7 School Life and Plans</div>
          ${ln(
            `This ${wl('term','term')}, I ${wl('would like','would like')} to ${wl('join','join')} the ${wl('music','music')} ${wl('club','club')}. I can ${wl('play','play')} the ${wl('piano','piano')} and ${wl('ride','ride')} a bike ${wl('well','well')}.`,
            `\u8FD9\u4E2A\u5B66\u671F\uFF0C\u6211\u60F3\u52A0\u5165\u97F3\u4E50\u4FF1\u4E50\u90E8\u3002\u6211\u4F1A\u5F39\u94A2\u7434\uFF0C\u4E5F\u80FD\u9A91\u81EA\u884C\u8F66\u3002`
          )}
          ${ln(
            `The ${wl('monitor','monitor')} says we should ${wl('start','start')} to ${wl('get on well with','get on well with')} everyone and be ${wl('ready','ready')} for the new ${wl('term','term')}.`,
            `\u73ED\u957F\u8BF4\u6211\u4EEC\u5E94\u8BE5\u5F00\u59CB\u548C\u6BCF\u4E2A\u4EBA\u76F8\u5904\u878D\u6D3D\uFF0C\u4E3A\u65B0\u5B66\u671F\u505A\u597D\u51C6\u5907\u3002`
          )}
          ${ln(
            `"Don't ${wl('worry','worry')}!" says our ${wl('teach','teach')}er. "I can ${wl('teach','teach')} you. ${wl('then','Then')} you ${wl('will','will')} do ${wl('well','well')}. ${wl("that's all","That's all")} for today."`,
            `\u201C\u522B\u62C5\u5FC3\uFF01\u201D\u8001\u5E08\u8BF4\u3002\u201C\u6211\u53EF\u4EE5\u6559\u4F60\u4EEC\u3002\u90A3\u4F60\u4EEC\u5C31\u4F1A\u505A\u5F97\u5F88\u597D\u3002\u4ECA\u5929\u5C31\u5230\u8FD9\u91CC\u3002\u201D`
          )}
          ${ln(
            `I ${wl('worry about','worry about')} the ${wl('board','board')} exam, but I also look ${wl('forward','forward')} to the ${wl('holiday','holiday')}. We ${wl('plan','plan')} to ${wl('travel','travel')} and go ${wl('sightseeing','sightseeing')}.`,
            `\u6211\u62C5\u5FC3\u5E03\u544A\u680F\u4E0A\u7684\u8003\u8BD5\uFF0C\u4F46\u6211\u4E5F\u671F\u76FC\u5047\u671F\u3002\u6211\u4EEC\u8BA1\u5212\u53BB\u65C5\u884C\u548C\u89C2\u5149\u3002`
          )}
          ${ln(
            `${wl('look forward to','Looking forward to')} the break, we ${wl('check','check')} our ${wl('email','email')} for trip details. We might ${wl('go camping','go camping')}, ${wl('take a walk','take a walk')}, or ${wl('go fishing','go fishing')}.`,
            `\u671F\u76FC\u7740\u5047\u671F\uFF0C\u6211\u4EEC\u67E5\u770B\u90AE\u4EF6\u4E86\u89E3\u65C5\u884C\u8BE6\u60C5\u3002\u6211\u4EEC\u53EF\u80FD\u53BB\u9732\u8425\u3001\u6563\u6B65\u6216\u8005\u53BB\u9493\u9C7C\u3002`
          )}
          ${ln(
            `We will ${wl('do some sightseeing','do some sightseeing')} and have a ${wl('picnic','picnic')} too. ${wl('walk','Walk')}ing in the fresh air and ${wl('cycling','cycling')} by the lake sounds great!`,
            `\u6211\u4EEC\u8FD8\u4F1A\u53BB\u89C2\u5149\uFF0C\u4E5F\u4F1A\u53BB\u91CE\u9910\u3002\u5728\u65B0\u9C9C\u7A7A\u6C14\u4E2D\u6563\u6B65\u3001\u5728\u6E56\u8FB9\u9A91\u8F66\u542C\u8D77\u6765\u68D2\u6781\u4E86\uFF01`
          )}
          ${ln(
            `Some friends want to go ${wl('abroad','abroad')} and learn about different ${wl('culture','culture')}s at a summer ${wl('camp','camp')}. We will ${wl('go over','go over')} our lessons and enjoy the ${wl('fishing','fishing')} too.`,
            `\u6709\u4E9B\u670B\u53CB\u60F3\u51FA\u56FD\uFF0C\u5728\u590F\u4EE4\u8425\u4E2D\u4E86\u89E3\u4E0D\u540C\u7684\u6587\u5316\u3002\u6211\u4EEC\u4F1A\u590D\u4E60\u529F\u8BFE\uFF0C\u4E5F\u4EAB\u53D7\u9493\u9C7C\u7684\u4E50\u8DA3\u3002`
          )}
        </div>

        <div class="story-chapter">
          <div class="story-chapter-title"><button class="tts-chapter-btn" title="\u6717\u8BFB\u672C\u7AE0">\u{1F50A}</button> Chapter 3 \xB7 The Future and the City</div>
          ${ln(
            `In the ${wl('future','future')}, ${wl('everything','everything')} ${wl('will','will')} ${wl('change','change')}. ${wl('maybe','Maybe')} we won't ${wl('need','need')} ${wl('chalk','chalk')} or a ${wl('ruler','ruler')} in class.`,
            `\u5728\u5C06\u6765\uFF0C\u4E00\u5207\u90FD\u4F1A\u6539\u53D8\u3002\u4E5F\u8BB8\u6211\u4EEC\u4E0A\u8BFE\u4E0D\u518D\u9700\u8981\u7C89\u7B14\u548C\u5C3A\u5B50\u3002`
          )}
          ${ln(
            `${wl('in the future','In the future')}, ${wl('robot','robot')}s and ${wl('machine','machine')}s will do ${wl('more','more')} ${wl('job','job')}s. Books will be ${wl('light','light')}, not ${wl('heavy','heavy')}.`,
            `\u5728\u5C06\u6765\uFF0C\u673A\u5668\u4EBA\u548C\u673A\u5668\u4F1A\u505A\u66F4\u591A\u7684\u5DE5\u4F5C\u3002\u4E66\u672C\u4F1A\u53D8\u8F7B\uFF0C\u4E0D\u518D\u6C89\u91CD\u3002`
          )}
          ${ln(
            `We will ${wl('be able to','be able to')} ${wl('ask','ask')} ${wl('question','question')}s at any ${wl('level','level')}. ${wl('able','Able')} students will study ${wl('free','free')}ly on the ${wl('internet','internet')}.`,
            `\u6211\u4EEC\u5C06\u80FD\u591F\u63D0\u51FA\u4EFB\u4F55\u7EA7\u522B\u7684\u95EE\u9898\u3002\u6709\u80FD\u529B\u7684\u5B66\u751F\u5C06\u5728\u4E92\u8054\u7F51\u4E0A\u81EA\u7531\u5B66\u4E60\u3002`
          )}
          ${ln(
            `The ${wl('weather','weather')} may bring ${wl('rain','rain')} and ${wl('wind','wind')}, but the ${wl('traffic','traffic')} will be ${wl('short','short')} \u2014 only an ${wl('hour','hour')} for a ${wl('long','long')} trip! Dreams will ${wl('come true','come true')} if we believe they are ${wl('true','true')}.`,
            `\u5929\u6C14\u53EF\u80FD\u4F1A\u5E26\u6765\u96E8\u548C\u98CE\uFF0C\u4F46\u4EA4\u901A\u5C06\u53D8\u5F97\u5F88\u77ED\u2014\u2014\u5F88\u957F\u7684\u8DEF\u7A0B\u53EA\u9700\u4E00\u5C0F\u65F6\uFF01\u5982\u679C\u6211\u4EEC\u76F8\u4FE1\u68A6\u60F3\u662F\u771F\u7684\uFF0C\u5B83\u4EEC\u5C31\u4F1A\u5B9E\u73B0\u3002`
          )}
          ${ln(
            `Now let me tell you about the city. The ${wl('bank','bank')} is ${wl('opposite','opposite')} the ${wl('restaurant','restaurant')}. ${wl('walk','Walk')} ${wl('along','along')} the ${wl('street','street')}, ${wl('turn','turn')} ${wl('right','right')}, and go ${wl('straight','straight')} ${wl('past','past')} the ${wl('square','square')}.`,
            `\u73B0\u5728\u8BA9\u6211\u7ED9\u4F60\u8BB2\u8BB2\u8FD9\u5EA7\u57CE\u5E02\u3002\u94F6\u884C\u5728\u9910\u9986\u5BF9\u9762\u3002\u6CBF\u7740\u8857\u9053\u8D70\uFF0C\u5411\u53F3\u62D0\uFF0C\u7B14\u76F4\u8D70\u8FC7\u5E7F\u573A\u3002`
          )}
          ${ln(
            `The ${wl('tour','tour')} guide points ${wl('left','left')}: "${wl('across','Across')} the ${wl('bridge','bridge')}, you can see a ${wl('clear','clear')} ${wl('ground','ground')}." We ${wl('cross','cross')} the road ${wl('towards','towards')} a ${wl('famous','famous')} ${wl('painting','painting')} ${wl('above','above')} the ${wl('middle','middle')} gate.`,
            `\u5BFC\u6E38\u6307\u5411\u5DE6\u8FB9\uFF1A\u201C\u8D70\u8FC7\u6865\uFF0C\u4F60\u53EF\u4EE5\u770B\u5230\u4E00\u5757\u5E72\u51C0\u7684\u7A7A\u5730\u3002\u201D\u6211\u4EEC\u7A7F\u8FC7\u9A6C\u8DEF\uFF0C\u671D\u7740\u4E2D\u95E8\u4E0A\u65B9\u4E00\u5E45\u8457\u540D\u7684\u753B\u4F5C\u8D70\u53BB\u3002`
          )}
          ${ln(
            `${wl('later','Later')}, we go to the ${wl('market','market')} and the ${wl('supermarket','supermarket')}. ${wl('strawberry','Strawberry')} ${wl('price','price')}s look good. I ${wl('try on','try on')} a shirt \u2014 the ${wl('size','size')} is just right!`,
            `\u540E\u6765\uFF0C\u6211\u4EEC\u53BB\u4E86\u5E02\u573A\u548C\u8D85\u5E02\u3002\u8349\u8393\u7684\u4EF7\u683C\u770B\u8D77\u6765\u4E0D\u9519\u3002\u6211\u8BD5\u7A7F\u4E86\u4E00\u4EF6\u886C\u886B\u2014\u2014\u5C3A\u7801\u521A\u521A\u597D\uFF01`
          )}
          ${ln(
            `"Can I ${wl('take','take')} this?" I ask. "${wl('certainly','Certainly')}! Please ${wl('wait','wait')} ${wl('a moment','a moment')}, it is on ${wl('sale','sale')} \u2014 ${wl('on sale','on sale')} at ${wl('half','half')} ${wl('half price','price')}!" the shopkeeper says.`,
            `\u201C\u6211\u53EF\u4EE5\u62FF\u8FD9\u4EF6\u5417\uFF1F\u201D\u6211\u95EE\u3002\u201C\u5F53\u7136\uFF01\u8BF7\u7B49\u4E00\u4E0B\uFF0C\u5B83\u6B63\u5728\u6253\u6298\u2014\u2014\u534A\u4EF7\u4F18\u60E0\uFF01\u201D\u5E97\u5458\u8BF4\u3002`
          )}
          ${ln(
            `I ${wl('pay','pay')} ${wl('by','by')} card and ${wl('receive','receive')} a ${wl('fresh','fresh')} ${wl('strawberry','strawberry')} as a gift. "${wl("what's the matter","What's the matter")}?" asks my friend. "Nothing \u2014 the ${wl('matter','matter')} is this ${wl('product','product')} is great!"`,
            `\u6211\u7528\u5361\u4ED8\u6B3E\uFF0C\u8FD8\u6536\u5230\u4E86\u4E00\u9897\u65B0\u9C9C\u8349\u8393\u4F5C\u4E3A\u793C\u7269\u3002\u201C\u600E\u4E48\u4E86\uFF1F\u201D\u670B\u53CB\u95EE\u3002\u201C\u6CA1\u4E8B\u2014\u2014\u5173\u952E\u662F\u8FD9\u4E2A\u4EA7\u54C1\u592A\u68D2\u4E86\uFF01\u201D`
          )}
          ${ln(
            `The ${wl('advantage','advantage')} of shopping here is you can ${wl('compare','compare')} ${wl('product','product')}s ${wl('anywhere','anywhere')}. I will ${wl('post','post')} a review. ${wl('almost','Almost')} ${wl('over','over')} with shopping, we head home happily.`,
            `\u5728\u8FD9\u91CC\u8D2D\u7269\u7684\u4F18\u52BF\u662F\u4F60\u53EF\u4EE5\u5728\u4EFB\u4F55\u5730\u65B9\u6BD4\u8F83\u4EA7\u54C1\u3002\u6211\u4F1A\u53D1\u5E03\u4E00\u6761\u8BC4\u4EF7\u3002\u8D2D\u7269\u5DEE\u4E0D\u591A\u7ED3\u675F\u4E86\uFF0C\u6211\u4EEC\u5F00\u5FC3\u5730\u56DE\u5BB6\u3002`
          )}
        </div>

        <div class="story-chapter">
          <div class="story-chapter-title"><button class="tts-chapter-btn" title="\u6717\u8BFB\u672C\u7AE0">\u{1F50A}</button> Chapter 4 \xB7 Past and Stories</div>
          ${ln(
            `I ${wl('was','was')} ${wl('born','born')} in a small ${wl('town','town')} with a ${wl('nice','nice')} ${wl('village','village')} nearby. My ${wl('primary school','primary school')} ${wl('was','was')} ${wl('strict','strict')} but ${wl('friendly','friendly')}.`,
            `\u6211\u51FA\u751F\u5728\u4E00\u4E2A\u5C0F\u9547\uFF0C\u9644\u8FD1\u6709\u4E00\u4E2A\u6F02\u4EAE\u7684\u6751\u5E84\u3002\u6211\u7684\u5C0F\u5B66\u5F88\u4E25\u683C\u4F46\u53CB\u597D\u3002`
          )}
          ${ln(
            `${wl('hey','Hey')}! In the ${wl('US','US')}, my pen pal had a different ${wl('character','character')}. ${wl('were','Were')} you ${wl('naughty','naughty')} or ${wl('bored','bored')} ${wl('ago','ago')}?`,
            `\u563F\uFF01\u5728\u7F8E\u56FD\uFF0C\u6211\u7684\u7B14\u53CB\u6027\u683C\u4E0D\u540C\u3002\u4F60\u4EE5\u524D\u662F\u8C03\u76AE\u7684\u8FD8\u662F\u65E0\u804A\u7684\uFF1F`
          )}
          ${ln(
            `Our old house had a ${wl('bedroom','bedroom')}, a ${wl('bathroom','bathroom')}, a ${wl('kitchen','kitchen')}, and a ${wl('living room','living room')}. There ${wl('was','was')} a lovely ${wl('garden','garden')} with a ${wl('pond','pond')} in the ${wl('back','back')}.`,
            `\u6211\u4EEC\u7684\u8001\u623F\u5B50\u6709\u4E00\u95F4\u5367\u5BA4\u3001\u4E00\u4E2A\u6D74\u5BA4\u3001\u4E00\u95F4\u53A8\u623F\u548C\u4E00\u95F4\u5BA2\u5385\u3002\u540E\u9762\u6709\u4E00\u4E2A\u53EF\u7231\u7684\u82B1\u56ED\uFF0C\u82B1\u56ED\u91CC\u6709\u4E00\u4E2A\u6C60\u5858\u3002`
          )}
          ${ln(
            `There ${wl('was','was')} also a ${wl('store','store')} and a ${wl('movie theater','movie theater')} in town. Now let me tell you a ${wl('once upon a time','once upon a time')} story.`,
            `\u9547\u4E0A\u8FD8\u6709\u4E00\u5BB6\u5546\u5E97\u548C\u4E00\u5BB6\u7535\u5F71\u9662\u3002\u73B0\u5728\u8BA9\u6211\u7ED9\u4F60\u8BB2\u4E00\u4E2A\u5F88\u4E45\u5F88\u4E45\u4EE5\u524D\u7684\u6545\u4E8B\u3002`
          )}
          ${ln(
            `${wl('once','Once')} ${wl('upon','upon')} a time, a girl ${wl('begin','begin')}s to ${wl('walk','walk')} into a ${wl('dark','dark')} forest. She ${wl('notice','notice')}s a small house, ${wl('all alone','all alone')}.`,
            `\u4ECE\u524D\uFF0C\u4E00\u4E2A\u5973\u5B69\u5F00\u59CB\u8D70\u8FDB\u4E00\u7247\u9ED1\u6697\u7684\u68EE\u6797\u3002\u5979\u6CE8\u610F\u5230\u4E00\u95F4\u5C0F\u5C4B\uFF0C\u5B64\u96F6\u96F6\u5730\u7ACB\u5728\u90A3\u91CC\u3002`
          )}
          ${ln(
            `She ${wl('pick','pick')}s up a ${wl('basket','basket')} and ${wl('hurry','hurry')}s to the ${wl('door','door')}. ${wl('without','Without')} a ${wl('knock','knock')}, she ${wl('enter','enter')}s.`,
            `\u5979\u6361\u8D77\u4E00\u4E2A\u7BEE\u5B50\uFF0C\u6025\u5FD9\u8D70\u5411\u95E8\u53E3\u3002\u6CA1\u6709\u6572\u95E8\uFF0C\u5979\u5C31\u8D70\u4E86\u8FDB\u53BB\u3002`
          )}
          ${ln(
            `She ${wl('decide','decide')}s to look around. There is a ${wl('bowl','bowl')} of soup. She is ${wl('hungry','hungry')}, so she eats and ${wl('finish','finish')}es it. "${wl('either','Either')} this ${wl('piece','piece')} of bread or nothing," she thinks.`,
            `\u5979\u51B3\u5B9A\u56DB\u5904\u770B\u770B\u3002\u90A3\u91CC\u6709\u4E00\u7897\u6C64\u3002\u5979\u5F88\u997F\uFF0C\u4E8E\u662F\u5403\u5B8C\u4E86\u3002\u201C\u8981\u4E48\u5403\u8FD9\u5757\u9762\u5305\uFF0C\u8981\u4E48\u4EC0\u4E48\u90FD\u6CA1\u6709\uFF0C\u201D\u5979\u60F3\u3002`
          )}
          ${ln(
            `Suddenly, a big ${wl('bear','bear')} ${wl('rush','rush')}es in! She ${wl('cry','cry')}s out. The bear ${wl('try','try')}s to ${wl('destroy','destroy')} the table! She is ${wl('asleep','asleep')} \u2014 no, she wakes up!`,
            `\u7A81\u7136\uFF0C\u4E00\u53EA\u5927\u718A\u51B2\u4E86\u8FDB\u6765\uFF01\u5979\u5927\u53EB\u3002\u718A\u8BD5\u56FE\u7834\u574F\u684C\u5B50\uFF01\u5979\u7761\u7740\u4E86\u2014\u2014\u4E0D\uFF0C\u5979\u9192\u4E86\uFF01`
          )}
          ${ln(
            `She ${wl('return','return')}s to the ${wl('door','door')}, ${wl('point','point')}s at the bear, ${wl('shout','shout')}s, ${wl('jump','jump')}s out the window, and ${wl('escape','escape')}s! ${wl('pick up','Picking up')} her basket, she runs home.`,
            `\u5979\u56DE\u5230\u95E8\u53E3\uFF0C\u6307\u7740\u718A\uFF0C\u5927\u53EB\u4E00\u58F0\uFF0C\u4ECE\u7A97\u6237\u8DF3\u51FA\u53BB\uFF0C\u9003\u8DD1\u4E86\uFF01\u5979\u6361\u8D77\u7BEE\u5B50\uFF0C\u8DD1\u56DE\u4E86\u5BB6\u3002`
          )}
        </div>

        <div class="story-chapter">
          <div class="story-chapter-title"><button class="tts-chapter-btn" title="\u6717\u8BFB\u672C\u7AE0">\u{1F50A}</button> Chapter 5 \xB7 Life, Travel and Music</div>
          ${ln(
            `My grandmother's life is a ${wl('successful','successful')} story. At the ${wl('age','age')} of 16, she read the ${wl('newspaper','newspaper')} every day and wrote ${wl('poem','poem')}s.`,
            `\u6211\u5976\u5976\u7684\u4E00\u751F\u662F\u4E00\u4E2A\u6210\u529F\u7684\u6545\u4E8B\u3002\u5341\u516D\u5C81\u65F6\uFF0C\u5979\u6BCF\u5929\u770B\u62A5\u7EB8\u5E76\u5199\u8BD7\u3002`
          )}
          ${ln(
            `She ${wl('marry','marry')}ed my grandfather and they ${wl('become','become')} a happy couple. They ${wl('move','move')}d to the city and ${wl('join','join')}ed the ${wl('national','national')} team. On ${wl("Women's Day","Women's Day")}, she gave a ${wl('performance','performance')} at the ${wl('exact','exact')} moment everyone ${wl('finish','finish')}ed dinner.`,
            `\u5979\u5AC1\u7ED9\u4E86\u6211\u7237\u7237\uFF0C\u4ED6\u4EEC\u6210\u4E3A\u5E78\u798F\u7684\u4F34\u4FA3\u3002\u4ED6\u4EEC\u642C\u5230\u4E86\u57CE\u5E02\uFF0C\u52A0\u5165\u4E86\u56FD\u5BB6\u961F\u3002\u5987\u5973\u8282\u90A3\u5929\uFF0C\u5979\u5728\u5927\u5BB6\u521A\u5403\u5B8C\u665A\u996D\u7684\u65F6\u5019\u8868\u6F14\u4E86\u8282\u76EE\u3002`
          )}
          ${ln(
            `Last summer, we took a ${wl('holiday','holiday')} to the ${wl('Pacific','Pacific')}. We ${wl('arrive','arrive')}d and ${wl('relax','relax')}ed on the beach. It was ${wl('exciting','exciting')}!`,
            `\u53BB\u5E74\u590F\u5929\uFF0C\u6211\u4EEC\u53BB\u592A\u5E73\u6D0B\u5EA6\u5047\u3002\u6211\u4EEC\u5230\u8FBE\u540E\u5728\u6D77\u6EE9\u4E0A\u653E\u677E\u3002\u592A\u5174\u594B\u4E86\uFF01`
          )}
          ${ln(
            `I ${wl('already','already')} ${wl('hope','hope')} to go back. We ate ${wl('Italian','Italian')} food \u2014 ${wl('delicious','delicious')} ${wl('pizza','pizza')} and ${wl('sandwich','sandwich')}es. The ${wl('special','special')} dish was ${wl('cheap','cheap')} and ${wl('lovely','lovely')}.`,
            `\u6211\u5DF2\u7ECF\u5E0C\u671B\u518D\u56DE\u53BB\u3002\u6211\u4EEC\u5403\u4E86\u610F\u5927\u5229\u98DF\u7269\u2014\u2014\u7F8E\u5473\u7684\u62AB\u8428\u548C\u4E09\u660E\u6CBB\u3002\u7279\u8272\u83DC\u4FBF\u5B9C\u53C8\u53EF\u7231\u3002`
          )}
          ${ln(
            `A ${wl('musician','musician')} on the ${wl('street','street')} played ${wl('all kinds of','all kinds of')} ${wl('kind','kind')} ${wl('song','song')}s. The ${wl('sell','sell')}er nearby ${wl('try','tried')} to sell ${wl('expensive','expensive')} souvenirs, but we just listened.`,
            `\u8857\u4E0A\u4E00\u4E2A\u97F3\u4E50\u5BB6\u6F14\u594F\u5404\u79CD\u5584\u826F\u7684\u6B4C\u66F2\u3002\u65C1\u8FB9\u7684\u5356\u5BB6\u8BD5\u56FE\u5356\u6602\u8D35\u7684\u7EAA\u5FF5\u54C1\uFF0C\u4F46\u6211\u4EEC\u53EA\u662F\u5728\u542C\u3002`
          )}
          ${ln(
            `Now, ${wl('body language','body language')} is important everywhere. A ${wl('polite','polite')} ${wl('visitor','visitor')} from a ${wl('foreign','foreign')} country may ${wl('bow','bow')}, while a friend may ${wl('kiss','kiss')} or ${wl('shake hands','shake hands')}.`,
            `\u73B0\u5728\uFF0C\u8EAB\u4F53\u8BED\u8A00\u5728\u4EFB\u4F55\u5730\u65B9\u90FD\u5F88\u91CD\u8981\u3002\u4E00\u4E2A\u793C\u8C8C\u7684\u5916\u56FD\u6E38\u5BA2\u53EF\u80FD\u4F1A\u9F1E\u8EAC\uFF0C\u800C\u670B\u53CB\u53EF\u80FD\u4F1A\u4EB2\u543B\u6216\u63E1\u624B\u3002`
          )}
          ${ln(
            `A ${wl('nod','nod')} means yes, a ${wl('shake','shake')} of the ${wl('head','head')} means no. A ${wl('smile','smile')} is understood everywhere. You can ${wl('touch','touch')} a friend's ${wl('arm','arm')} or ${wl('hold','hold')} their hand.`,
            `\u70B9\u5934\u8868\u793A\u540C\u610F\uFF0C\u6447\u5934\u8868\u793A\u4E0D\u540C\u610F\u3002\u5FAE\u7B11\u5728\u4EFB\u4F55\u5730\u65B9\u90FD\u80FD\u88AB\u7406\u89E3\u3002\u4F60\u53EF\u4EE5\u78B0\u78B0\u670B\u53CB\u7684\u80F3\u818A\u6216\u62C9\u4F4F\u4ED6\u4EEC\u7684\u624B\u3002`
          )}
          ${ln(
            `It is ${wl('personal','personal')}, but in a ${wl('film','film')} I saw ${wl('somewhere','somewhere')}, people ${wl('wave','wave')} with their ${wl('finger','finger')}s. That is ${wl('not...at all','not strange at all')}! In ${wl('fact','fact')}, ${wl('in fact','in fact')}, it happens in ${wl('move','move')}ing moments.`,
            `\u8FD9\u662F\u79C1\u4EBA\u7684\uFF0C\u4F46\u6211\u5728\u67D0\u90E8\u7535\u5F71\u91CC\u770B\u5230\u4EBA\u4EEC\u7528\u624B\u6307\u6325\u624B\u3002\u8FD9\u4E00\u70B9\u4E5F\u4E0D\u5947\u602A\uFF01\u4E8B\u5B9E\u4E0A\uFF0C\u8FD9\u53D1\u751F\u5728\u611F\u4EBA\u7684\u65F6\u523B\u3002`
          )}
          ${ln(
            `Speaking of ${wl('music','music')}, ${wl('Western','Western')} ${wl('instrument','instrument')}s like the ${wl('drum','drum')}, ${wl('guitar','guitar')}, ${wl('organ','organ')}, and ${wl('violin','violin')} are popular with ${wl('elder','elder')} and young alike.`,
            `\u8BF4\u5230\u97F3\u4E50\uFF0C\u897F\u65B9\u4E50\u5668\u5982\u9F13\u3001\u5409\u4ED6\u3001\u7BA1\u98CE\u7434\u548C\u5C0F\u63D0\u7434\u6DF1\u53D7\u8001\u5E7C\u559C\u7231\u3002`
          )}
          ${ln(
            `From ${wl('blues','blues')} to ${wl('pop music','pop music')}, from ${wl('rock music','rock music')} to ${wl('classical music','classical music')} \u2014 over the ${wl('century','century')}, ${wl('European','European')} ${wl('type','type')}s of ${wl('loud','loud')}, ${wl('exciting','exciting')} ${wl('voice','voice')}s have spread.`,
            `\u4ECE\u84DD\u8C03\u5230\u6D41\u884C\u97F3\u4E50\uFF0C\u4ECE\u6447\u6EDA\u5230\u53E4\u5178\u97F3\u4E50\u2014\u2014\u8FD9\u4E2A\u4E16\u7EAA\u4EE5\u6765\uFF0C\u6B27\u6D32\u98CE\u683C\u7684\u54CD\u4EAE\u3001\u6FC0\u52A8\u7684\u58F0\u97F3\u5DF2\u7ECF\u4F20\u904D\u4E16\u754C\u3002`
          )}
          ${ln(
            `The ${wl('rest','rest')} of us are just ${wl('fan','fan')}s. The ${wl('wonderful','wonderful')} beats ${wl('make','make')} us dance ${wl('fast','fast')}! ${wl('add','Add')} some ${wl('beautiful','beautiful')} lyrics, and the ${wl('song','song')} becomes ${wl('common','common')} but not ${wl('noisy','noisy')}.`,
            `\u6211\u4EEC\u5176\u4F59\u7684\u4EBA\u53EA\u662F\u7C89\u4E1D\u3002\u7F8E\u5999\u7684\u8282\u62CD\u8BA9\u6211\u4EEC\u5FEB\u901F\u8DF3\u821E\uFF01\u52A0\u4E0A\u4E00\u4E9B\u4F18\u7F8E\u7684\u6B4C\u8BCD\uFF0C\u6B4C\u66F2\u53D8\u5F97\u6D41\u884C\u4F46\u4E0D\u5435\u95F9\u3002`
          )}
        </div>

        <div class="story-chapter">
          <div class="story-chapter-title"><button class="tts-chapter-btn" title="\u6717\u8BFB\u672C\u7AE0">\u{1F50A}</button> Chapter 6 \xB7 A Letter to My Future Self</div>
          <div class="story-block-en">
            <p>Dear Future Me,</p>
            <p>${wl('whose','Whose')} story is this? It is ${wl('mine','mine')}. I am writing from a small ${wl('town','town')} where I ${wl('was','was')} ${wl('born','born')}. My ${wl('primary school','primary school')} days ${wl('were','were')} ${wl('strict','strict')} but ${wl('friendly','friendly')}. I was sometimes ${wl('naughty','naughty')} and often ${wl('bored','bored')}, but ${wl('hey','hey')}, that was my ${wl('character','character')}. Our house had a ${wl('bedroom','bedroom')}, a ${wl('bathroom','bathroom')}, a ${wl('kitchen','kitchen')}, a ${wl('living room','living room')}, and a ${wl('garden','garden')} with a ${wl('pond','pond')} in the ${wl('back','back')}. There was a ${wl('movie theater','movie theater')} in the ${wl('village','village')} and a ${wl('store','store')} not far ${wl('ago','ago')}. Even in the ${wl('US','US')}, my pen pal told ${wl('nice','nice')} stories.</p>
            <p>This ${wl('term','term')}, I ${wl('would like','would like')} to ${wl('play','play')} the ${wl('piano','piano')} and ${wl('ride','ride')} bikes with the ${wl('club','club')}. The ${wl('monitor','monitor')} says ${wl('start','start')} the new ${wl('term','term')} ${wl('ready','ready')} and ${wl('get on well with','get on well with')} everyone. Our ${wl('teach','teach')}er says don't ${wl('worry','worry')} and don't ${wl('worry about','worry about')} mistakes \u2014 ${wl('then','then')} you will do ${wl('well','well')}. ${wl("that's all","That's all")} the advice we ${wl('need','need')}. I write it on the ${wl('board','board')}.</p>
            <p>For the ${wl('holiday','holiday')}, we ${wl('plan','plan')} to ${wl('travel','travel')} and ${wl('look forward to','look forward to')} seeing new places. We will ${wl('check','check')} ${wl('email','email')}s, ${wl('go camping','go camping')}, ${wl('take a walk','take a walk')}, and ${wl('go fishing','go fishing')} by the lake. ${wl('cycling','Cycling')} through the countryside, we ${wl('do some sightseeing','do some sightseeing')} and have a ${wl('picnic','picnic')}. Some friends want to go ${wl('abroad','abroad')} to explore new ${wl('culture','culture')}s at a summer ${wl('camp','camp')}. We ${wl('go over','go over')} our notes and enjoy the ${wl('walk','walk')} ${wl('forward','forward')}.</p>
            <p>${wl('in the future','In the future')}, ${wl('everything','everything')} ${wl('will','will')} ${wl('change','change')}. ${wl('maybe','Maybe')} ${wl('chalk','chalk')} and ${wl('ruler','ruler')}s will disappear. ${wl('robot','Robot')}s and ${wl('machine','machine')}s will do ${wl('more','more')} ${wl('job','job')}s. Books will be ${wl('light','light')}, not ${wl('heavy','heavy')}. We will ${wl('be able to','be able to')} ${wl('ask','ask')} any ${wl('question','question')} at any ${wl('level','level')}. ${wl('free','Free')} classes on the ${wl('internet','internet')} will help ${wl('able','able')} students. The ${wl('weather','weather')} may bring ${wl('rain','rain')} and ${wl('wind','wind')}, but ${wl('traffic','traffic')} will be ${wl('short','short')} \u2014 a ${wl('long','long')} trip in just an ${wl('hour','hour')}. Dreams ${wl('come true','come true')} when they are ${wl('true','true')}.</p>
            <p>The ${wl('bank','bank')} stands ${wl('opposite','opposite')} the ${wl('restaurant','restaurant')}. ${wl('walk','Walk')} ${wl('along','along')} the ${wl('street','street')}, ${wl('turn','turn')} ${wl('right','right')}, go ${wl('straight','straight')} ${wl('past','past')} the ${wl('square','square')}. A ${wl('tour','tour')} guide points ${wl('left','left')}: ${wl('across','across')} the ${wl('bridge','bridge')} is a ${wl('clear','clear')} ${wl('ground','ground')}. ${wl('cross','Cross')} ${wl('towards','towards')} the ${wl('famous','famous')} ${wl('painting','painting')} ${wl('above','above')} the ${wl('middle','middle')} gate. ${wl('later','Later')}, at the ${wl('market','market')} and ${wl('supermarket','supermarket')}, ${wl('strawberry','strawberry')} ${wl('price','price')}s are good. ${wl('try on','Try on')} a shirt \u2014 the ${wl('size','size')} fits! "${wl('certainly','Certainly')}!" says the shopkeeper. "${wl('wait','Wait')} ${wl('a moment','a moment')} \u2014 ${wl('on sale','on sale')} at ${wl('half price','half price')}!" I ${wl('pay','pay')} ${wl('by','by')} card and ${wl('receive','receive')} a ${wl('fresh','fresh')} gift. The ${wl('advantage','advantage')} is you can ${wl('compare','compare')} ${wl('product','product')}s ${wl('anywhere','anywhere')}. I ${wl('post','post')} a review \u2014 ${wl('almost','almost')} ${wl('over','over')} now!</p>
            <p>I remember the fairy tale. ${wl('once upon a time','Once upon a time')}, a girl ${wl('begin','begin')}s to ${wl('walk','walk')} in the ${wl('dark','dark')}. She ${wl('notice','notice')}s a house, ${wl('all alone','all alone')}. She ${wl('pick','pick')}s up a ${wl('basket','basket')} and ${wl('hurry','hurry')}s ${wl('without','without')} a ${wl('knock','knock')} through the ${wl('door','door')}. She ${wl('enter','enter')}s, finds a ${wl('bowl','bowl')}, and eats \u2014 she is ${wl('hungry','hungry')}. ${wl('either','Either')} a ${wl('piece','piece')} of bread or nothing! A ${wl('bear','bear')} ${wl('rush','rush')}es in \u2014 she ${wl('cry','cry')}s, it ${wl('try','try')}s to ${wl('destroy','destroy')} the room. But she is not ${wl('asleep','asleep')}! She ${wl('return','return')}s to the door, ${wl('point','point')}s, ${wl('shout','shout')}s, ${wl('jump','jump')}s, and ${wl('escape','escape')}s.</p>
            <p>Grandma's ${wl('exact','exact')} story: she read the ${wl('newspaper','newspaper')}, ${wl('marry','married')} Grandpa, and ${wl('become','became')} a star. They ${wl('move','move')}d to the city, ${wl('join','join')}ed the ${wl('national','national')} team, and on ${wl("Women's Day","Women's Day")} she gave a ${wl('performance','performance')}. ${wl('at the age of','At the age of')} 20 she wrote ${wl('poem','poem')}s. Her life was ${wl('successful','successful')}.</p>
            <p>Last summer by the ${wl('Pacific','Pacific')} we ${wl('arrive','arrive')}d, ${wl('relax','relax')}ed, and felt ${wl('exciting','excited')}. I ${wl('already','already')} ${wl('hope','hope')} to return. We ate ${wl('Italian','Italian')} ${wl('pizza','pizza')} and ${wl('sandwich','sandwich')}es \u2014 ${wl('delicious','delicious')}! The ${wl('special','special')} dish was ${wl('cheap','cheap')} and ${wl('lovely','lovely')}. A ${wl('musician','musician')} played ${wl('all kinds of','all kinds of')} ${wl('song','song')}s. The ${wl('sell','sell')}er ${wl('try','tried')} to sell ${wl('expensive','expensive')} gifts, but we just ${wl('smile','smile')}d.</p>
            <p>${wl('body language','Body language')} matters. A ${wl('polite','polite')} ${wl('foreign','foreign')} ${wl('visitor','visitor')} may ${wl('bow','bow')}; friends ${wl('kiss','kiss')} or ${wl('shake hands','shake hands')}. A ${wl('nod','nod')} says yes, a ${wl('shake','shake')} of the ${wl('head','head')} says no. A ${wl('smile','smile')} needs no words. ${wl('touch','Touch')} an ${wl('arm','arm')}, ${wl('hold','hold')} a hand, ${wl('wave','wave')} a ${wl('finger','finger')} \u2014 it is ${wl('personal','personal')} but ${wl('not...at all','not strange at all')}. I saw it in a ${wl('film','film')} ${wl('somewhere','somewhere')}. ${wl('in fact','In fact')}, ${wl('body','body')} signals ${wl('move','move')} hearts.</p>
            <p>${wl('Western','Western')} ${wl('music','music')} fills my ears. ${wl('instrument','Instrument')}s like the ${wl('drum','drum')}, ${wl('guitar','guitar')}, ${wl('organ','organ')}, and ${wl('violin','violin')} bring joy. My ${wl('elder','elder')} sister loves ${wl('blues','blues')} and ${wl('classical music','classical music')}. I prefer ${wl('pop music','pop music')} and ${wl('rock music','rock music')}. Over the ${wl('century','century')}, ${wl('European','European')} ${wl('type','type')}s of ${wl('loud','loud')} ${wl('voice','voice')}s have spread. The ${wl('rest','rest')} of us are ${wl('fan','fan')}s who dance ${wl('fast','fast')} to ${wl('wonderful','wonderful')} beats. ${wl('add','Add')} ${wl('beautiful','beautiful')} lyrics and a ${wl('common','common')} ${wl('song','song')} becomes magic \u2014 never ${wl('noisy','noisy')}, always ${wl('exciting','exciting')}.</p>
            <p>Future me, ${wl('in the future','in the future')} remember: every ${wl('crayon','crayon')}, every ${wl('glove','glove')}, every ${wl('lost and found','lost and found')} ${wl('wallet','wallet')} holds a story. Life is a ${wl('boat','boat')} on a wide sea \u2014 ${wl('make','make')} it ${wl('wonderful','wonderful')}, and let your dreams ${wl('come true','come true')}!</p>
            <p>Yours,<br>Li Ming</p>
          </div>
          <div class="story-block-divider">\u2014\u2014 \u4EE5\u4E0B\u662F\u5168\u6587\u7FFB\u8BD1 \u2014\u2014</div>
          <div class="story-block-zh">
            <p>\u4EB2\u7231\u7684\u672A\u6765\u7684\u6211\uFF1A</p>
            <p>\u8FD9\u662F\u8C01\u7684\u6545\u4E8B\uFF1F\u662F\u6211\u7684\u3002\u6211\u5728\u6211\u51FA\u751F\u7684\u5C0F\u9547\u4E0A\u7ED9\u4F60\u5199\u4FE1\u3002\u6211\u7684\u5C0F\u5B66\u65F6\u5149\u5F88\u4E25\u683C\u4F46\u53CB\u597D\u3002\u6211\u6709\u65F6\u6DD8\u6C14\uFF0C\u7ECF\u5E38\u89C9\u5F97\u65E0\u804A\uFF0C\u4F46\u561F\uFF0C\u90A3\u5C31\u662F\u6211\u7684\u6027\u683C\u3002\u6211\u4EEC\u7684\u8001\u623F\u5B50\u6709\u5367\u5BA4\u3001\u6D74\u5BA4\u3001\u53A8\u623F\u3001\u5BA2\u5385\uFF0C\u540E\u9762\u8FD8\u6709\u4E2A\u5E26\u6C60\u5858\u7684\u82B1\u56ED\u3002\u6751\u91CC\u6709\u4E2A\u7535\u5F71\u9662\u548C\u4E00\u5BB6\u5546\u5E97\u3002\u751A\u81F3\u5728\u7F8E\u56FD\uFF0C\u6211\u7684\u7B14\u53CB\u4E5F\u8BB2\u4E86\u5F88\u597D\u7684\u6545\u4E8B\u3002</p>
            <p>\u8FD9\u4E2A\u5B66\u671F\uFF0C\u6211\u60F3\u5F39\u94A2\u7434\u3001\u548C\u4FF1\u4E50\u90E8\u7684\u540C\u5B66\u4E00\u8D77\u9A91\u8F66\u3002\u73ED\u957F\u8BF4\u8981\u505A\u597D\u51C6\u5907\u8FCE\u63A5\u65B0\u5B66\u671F\uFF0C\u548C\u6BCF\u4E2A\u4EBA\u76F8\u5904\u878D\u6D3D\u3002\u8001\u5E08\u8BF4\u522B\u62C5\u5FC3\uFF0C\u4E0D\u8981\u62C5\u5FC3\u72AF\u9519\u2014\u2014\u90A3\u4F60\u5C31\u4F1A\u505A\u5F97\u5F88\u597D\u3002\u8FD9\u5C31\u662F\u6211\u4EEC\u9700\u8981\u7684\u5168\u90E8\u5EFA\u8BAE\u3002\u6211\u628A\u5B83\u5199\u5728\u5E03\u544A\u677F\u4E0A\u3002</p>
            <p>\u5047\u671F\u91CC\uFF0C\u6211\u4EEC\u8BA1\u5212\u53BB\u65C5\u884C\uFF0C\u671F\u76FC\u770B\u5230\u65B0\u7684\u5730\u65B9\u3002\u6211\u4EEC\u4F1A\u67E5\u90AE\u4EF6\uFF0C\u53BB\u9732\u8425\uFF0C\u53BB\u6563\u6B65\uFF0C\u53BB\u6E56\u8FB9\u9493\u9C7C\u3002\u9A91\u8F66\u7A7F\u8FC7\u4E61\u6751\uFF0C\u6211\u4EEC\u89C2\u5149\u3001\u91CE\u9910\u3002\u6709\u4E9B\u670B\u53CB\u60F3\u51FA\u56FD\u53BB\u590F\u4EE4\u8425\u63A2\u7D22\u65B0\u7684\u6587\u5316\u3002\u6211\u4EEC\u590D\u4E60\u7B14\u8BB0\uFF0C\u4EAB\u53D7\u5411\u524D\u8D70\u7684\u611F\u89C9\u3002</p>
            <p>\u5728\u5C06\u6765\uFF0C\u4E00\u5207\u90FD\u4F1A\u6539\u53D8\u3002\u4E5F\u8BB8\u7C89\u7B14\u548C\u5C3A\u5B50\u4F1A\u6D88\u5931\u3002\u673A\u5668\u4EBA\u548C\u673A\u5668\u4F1A\u505A\u66F4\u591A\u7684\u5DE5\u4F5C\u3002\u4E66\u672C\u4F1A\u53D8\u8F7B\uFF0C\u4E0D\u518D\u6C89\u91CD\u3002\u6211\u4EEC\u5C06\u80FD\u63D0\u51FA\u4EFB\u4F55\u7EA7\u522B\u7684\u95EE\u9898\u3002\u4E92\u8054\u7F51\u4E0A\u7684\u514D\u8D39\u8BFE\u7A0B\u4F1A\u5E2E\u52A9\u6709\u80FD\u529B\u7684\u5B66\u751F\u3002\u5929\u6C14\u53EF\u80FD\u6709\u96E8\u6709\u98CE\uFF0C\u4F46\u4EA4\u901A\u4F1A\u53D8\u5F97\u5F88\u77ED\u2014\u2014\u5F88\u8FDC\u7684\u8DEF\u7A0B\u53EA\u8981\u4E00\u5C0F\u65F6\u3002\u68A6\u60F3\u662F\u771F\u7684\uFF0C\u5B83\u4EEC\u5C31\u4F1A\u5B9E\u73B0\u3002</p>
            <p>\u94F6\u884C\u5728\u9910\u9986\u5BF9\u9762\u3002\u6CBF\u7740\u8857\u9053\u8D70\uFF0C\u5411\u53F3\u62D0\uFF0C\u7B14\u76F4\u8D70\u8FC7\u5E7F\u573A\u3002\u5BFC\u6E38\u6307\u5411\u5DE6\u8FB9\uFF1A\u8FC7\u6865\u5C31\u662F\u4E00\u5757\u5E72\u51C0\u7684\u7A7A\u5730\u3002\u7A7F\u8FC7\u9A6C\u8DEF\uFF0C\u671D\u7740\u4E2D\u95E8\u4E0A\u65B9\u90A3\u5E45\u8457\u540D\u7684\u753B\u8D70\u53BB\u3002\u540E\u6765\u5728\u5E02\u573A\u548C\u8D85\u5E02\uFF0C\u8349\u8393\u4EF7\u683C\u5F88\u597D\u3002\u8BD5\u7A7F\u4E00\u4EF6\u886C\u886B\u2014\u2014\u5C3A\u7801\u5408\u9002\uFF01\u201C\u5F53\u7136\uFF01\u201D\u5E97\u5458\u8BF4\u3002\u201C\u8BF7\u7B49\u4E00\u4E0B\u2014\u2014\u6253\u6298\u534A\u4EF7\uFF01\u201D\u6211\u5237\u5361\u4ED8\u6B3E\uFF0C\u6536\u5230\u4E86\u4E00\u4EFD\u65B0\u9C9C\u793C\u7269\u3002\u4F18\u52BF\u662F\u4F60\u53EF\u4EE5\u5728\u4EFB\u4F55\u5730\u65B9\u6BD4\u8F83\u4EA7\u54C1\u3002\u6211\u53D1\u5E03\u4E86\u8BC4\u4EF7\u2014\u2014\u5DEE\u4E0D\u591A\u7ED3\u675F\u4E86\uFF01</p>
            <p>\u6211\u8BB0\u5F97\u90A3\u4E2A\u7AE5\u8BDD\u6545\u4E8B\u3002\u4ECE\u524D\uFF0C\u4E00\u4E2A\u5973\u5B69\u5F00\u59CB\u5728\u9ED1\u6697\u4E2D\u884C\u8D70\u3002\u5979\u6CE8\u610F\u5230\u4E00\u5EA7\u5B64\u96F6\u96F6\u7684\u5C0F\u5C4B\u3002\u5979\u6361\u8D77\u7BEE\u5B50\uFF0C\u6CA1\u6709\u6572\u95E8\u5C31\u6025\u5FD9\u8FDB\u4E86\u95E8\u3002\u5979\u8D70\u8FDB\u53BB\uFF0C\u53D1\u73B0\u4E00\u4E2A\u7897\uFF0C\u5403\u4E86\u8D77\u6765\u2014\u2014\u5979\u5F88\u997F\u3002\u8981\u4E48\u4E00\u5757\u9762\u5305\uFF0C\u8981\u4E48\u4EC0\u4E48\u90FD\u6CA1\u6709\uFF01\u4E00\u53EA\u718A\u51B2\u4E86\u8FDB\u6765\u2014\u2014\u5979\u5927\u53EB\uFF0C\u718A\u8BD5\u56FE\u7834\u574F\u623F\u95F4\u3002\u4F46\u5979\u6CA1\u6709\u7761\u7740\uFF01\u5979\u56DE\u5230\u95E8\u53E3\uFF0C\u624B\u6307\u4E00\u6307\uFF0C\u5927\u558A\u4E00\u58F0\uFF0C\u7EB5\u8EAB\u4E00\u8DF3\uFF0C\u9003\u8DD1\u4E86\u3002</p>
            <p>\u5976\u5976\u7684\u771F\u5B9E\u6545\u4E8B\uFF1A\u5979\u770B\u62A5\u7EB8\uFF0C\u5AC1\u7ED9\u7237\u7237\uFF0C\u6210\u4E3A\u660E\u661F\u3002\u4ED6\u4EEC\u642C\u5230\u57CE\u5E02\uFF0C\u52A0\u5165\u56FD\u5BB6\u961F\uFF0C\u5987\u5973\u8282\u90A3\u5929\u5979\u8868\u6F14\u4E86\u8282\u76EE\u3002\u4E8C\u5341\u5C81\u65F6\u5979\u5199\u8BD7\u3002\u5979\u7684\u4E00\u751F\u5F88\u6210\u529F\u3002</p>
            <p>\u53BB\u5E74\u590F\u5929\u5728\u592A\u5E73\u6D0B\u8FB9\uFF0C\u6211\u4EEC\u5230\u8FBE\u540E\u653E\u677E\uFF0C\u5F88\u5174\u594B\u3002\u6211\u5DF2\u7ECF\u5E0C\u671B\u518D\u56DE\u53BB\u3002\u6211\u4EEC\u5403\u4E86\u610F\u5927\u5229\u62AB\u8428\u548C\u4E09\u660E\u6CBB\u2014\u2014\u7F8E\u5473\uFF01\u7279\u8272\u83DC\u4FBF\u5B9C\u53C8\u53EF\u7231\u3002\u4E00\u4E2A\u97F3\u4E50\u5BB6\u6F14\u594F\u5404\u79CD\u6B4C\u66F2\u3002\u5356\u5BB6\u8BD5\u56FE\u5356\u6602\u8D35\u7684\u793C\u7269\uFF0C\u4F46\u6211\u4EEC\u53EA\u662F\u5FAE\u7B11\u3002</p>
            <p>\u8EAB\u4F53\u8BED\u8A00\u5F88\u91CD\u8981\u3002\u793C\u8C8C\u7684\u5916\u56FD\u6E38\u5BA2\u53EF\u80FD\u9F1E\u8EAC\uFF1B\u670B\u53CB\u4EB2\u543B\u6216\u63E1\u624B\u3002\u70B9\u5934\u8868\u793A\u662F\uFF0C\u6447\u5934\u8868\u793A\u4E0D\u3002\u5FAE\u7B11\u4E0D\u9700\u8981\u8BED\u8A00\u3002\u78B0\u78B0\u80F3\u818A\uFF0C\u62C9\u62C9\u624B\uFF0C\u6325\u6325\u624B\u6307\u2014\u2014\u8FD9\u5F88\u79C1\u4EBA\u4F46\u4E00\u70B9\u4E5F\u4E0D\u5947\u602A\u3002\u6211\u5728\u67D0\u90E8\u7535\u5F71\u91CC\u770B\u8FC7\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u8EAB\u4F53\u4FE1\u53F7\u80FD\u6253\u52A8\u4EBA\u5FC3\u3002</p>
            <p>\u897F\u65B9\u97F3\u4E50\u5145\u76C8\u6211\u7684\u8033\u6735\u3002\u9F13\u3001\u5409\u4ED6\u3001\u7BA1\u98CE\u7434\u3001\u5C0F\u63D0\u7434\u8FD9\u4E9B\u4E50\u5668\u5E26\u6765\u5FEB\u4E50\u3002\u59D0\u59D0\u559C\u6B22\u84DD\u8C03\u548C\u53E4\u5178\u97F3\u4E50\u3002\u6211\u66F4\u559C\u6B22\u6D41\u884C\u97F3\u4E50\u548C\u6447\u6EDA\u3002\u8FD9\u4E2A\u4E16\u7EAA\u4EE5\u6765\uFF0C\u6B27\u6D32\u98CE\u683C\u7684\u54CD\u4EAE\u58F0\u97F3\u5DF2\u7ECF\u4F20\u904D\u4E16\u754C\u3002\u6211\u4EEC\u5176\u4F59\u7684\u4EBA\u90FD\u662F\u7C89\u4E1D\uFF0C\u968F\u7740\u7F8E\u5999\u7684\u8282\u62CD\u5FEB\u901F\u8DF3\u821E\u3002\u52A0\u4E0A\u4F18\u7F8E\u7684\u6B4C\u8BCD\uFF0C\u4E00\u9996\u666E\u901A\u7684\u6B4C\u5C31\u53D8\u6210\u4E86\u9B54\u6CD5\u2014\u2014\u6C38\u8FDC\u4E0D\u5435\u95F9\uFF0C\u6C38\u8FDC\u6FC0\u52A8\u4EBA\u5FC3\u3002</p>
            <p>\u672A\u6765\u7684\u6211\uFF0C\u8BB0\u4F4F\uFF1A\u6BCF\u4E00\u652F\u8721\u7B14\u3001\u6BCF\u4E00\u53EA\u624B\u5957\u3001\u6BCF\u4E00\u4E2A\u5931\u7269\u62DB\u9886\u7684\u94B1\u5305\u90FD\u85CF\u7740\u4E00\u4E2A\u6545\u4E8B\u3002\u4EBA\u751F\u5C31\u50CF\u4E00\u6761\u5728\u5BBD\u9614\u5927\u6D77\u4E0A\u7684\u5C0F\u8239\u2014\u2014\u8BA9\u5B83\u7CBE\u5F69\uFF0C\u8BA9\u68A6\u60F3\u6210\u771F\uFF01</p>
            <p>\u4F60\u7684\uFF0C<br>\u674E\u660E</p>
          </div>
        </div>

      </div>`;

    const footer = `<div class="footer">外研版七年级下册英语词汇多维度分析 &mdash; 让每个单词都有故事</div>`;

    rootEl.innerHTML = cover + stats + search + storyHtml + unitGrid + rootSection + footer;

    /* ── Global search ── */
    const allWords = [];
    units.forEach(u=>{
      u.words.forEach(w=>{
        allWords.push({...w, unitId: u.id, unitTitle: u.title});
      });
    });

    const searchInput = rootEl.querySelector('#global-search');
    const resultsEl = rootEl.querySelector('#search-results');

    searchInput.addEventListener('input', function(){
      const q = this.value.toLowerCase().trim();
      if(!q){ resultsEl.classList.remove('active'); resultsEl.innerHTML=''; return; }

      const matches = allWords.filter(w=>
        w.word.toLowerCase().includes(q) ||
        w.meaning.includes(q) ||
        (w.phonetic && w.phonetic.toLowerCase().includes(q))
      ).slice(0,10);

      if(!matches.length){
        resultsEl.innerHTML = '<div class="search-item"><span class="si-meaning">\u672A\u627E\u5230\u5339\u914D\u7ED3\u679C</span></div>';
      } else {
        resultsEl.innerHTML = matches.map(m=>`
          <a class="search-item" href="unit${m.unitId}.html#word-${m.word}" style="text-decoration:none;color:inherit">
            <span class="si-word">${m.word}</span>
            <span class="si-phonetic">${m.phonetic}</span>
            <span class="si-meaning">${m.meaning}</span>
            <span class="si-unit">Module ${m.unitId}</span>
          </a>`).join('');
      }
      resultsEl.classList.add('active');
    });

    // Close search on click outside
    document.addEventListener('click', function(e){
      if(!e.target.closest('.search-wrap')) resultsEl.classList.remove('active');
    });

    // TTS for story chapters
    initTTS(rootEl);
  }

  return { renderWord, renderUnit, renderIndex };
})();

if(typeof window!=='undefined') window.WordRenderer = WordRenderer;

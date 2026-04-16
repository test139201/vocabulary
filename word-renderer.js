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

    return `
      <div class="word-card" id="word-${w.word}" data-pos="${posKey}" data-word="${w.word.toLowerCase()}">
        ${header}
        <div class="wc-body">
          ${rootHtml}${memoryHtml}
        </div>
        <div class="wc-full">
          ${familyHtml}${synHtml}${antHtml}${sentHtml}${funHtml}${usageHtml}
        </div>
      </div>`;
  }

  /* ── render the full unit page ── */
  function renderUnit(unit, rootEl){
    if(!unit||!rootEl) return;

    /* Nav */
    const nav = `<div class="nav"><a href="index.html">\u{1F3E0} \u9996\u9875</a><span class="sep">/</span><span>Unit ${unit.id}</span></div>`;

    /* Cover */
    const cover = `
      <div class="cover" style="--accent-c:${unit.color}">
        <h1>Unit ${unit.id}: ${unit.title}</h1>
        <div class="cover-sub">${unit.theme}</div>
        <div class="cover-meta">
          <span>\u{1F4DA} ${unit.words.length} \u4E2A\u5355\u8BCD</span>
          <span>\u{1F3AF} \u4EBA\u6559\u7248\u4E03\u5E74\u7EA7\u4E0A\u518C</span>
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
    const footer = `<div class="footer">\u5317\u4EAC\u4EBA\u6559\u7248\u4E03\u5E74\u7EA7\u82F1\u8BED\u8BCD\u6C47\u591A\u7EF4\u5EA6\u5206\u6790 &mdash; Unit ${unit.id}</div>`;

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
        TTS.speak(this.dataset.tts, this);
      });
    });

    // Chapter-level TTS buttons (story)
    rootEl.querySelectorAll('.tts-chapter-btn').forEach(btn=>{
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        const chapter = this.closest('.story-chapter');
        let text = '';
        chapter.querySelectorAll('.story-en').forEach(el=>{ text += el.textContent + ' '; });
        chapter.querySelectorAll('.story-block-en p').forEach(el=>{ text += el.textContent + ' '; });
        if(text.trim()) TTS.speakLong(text.trim(), this);
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
        <h1>\u{1F4D6} \u5317\u4EAC\u4EBA\u6559\u7248\u4E03\u5E74\u7EA7\u82F1\u8BED\u8BCD\u6C47\u591A\u7EF4\u5EA6\u5206\u6790</h1>
        <div class="cover-sub">词源探秘 · 记忆妙招 · 近反义词 · 趣味知识 · 用法提示</div>
        <div class="cover-meta">
          <span>\u{1F3AF} ${units.reduce((s,u)=>s+u.words.length,0)} \u4E2A\u6838\u5FC3\u8BCD\u6C47</span>
          <span>\u{1F4DA} ${units.length} \u4E2A\u5355\u5143</span>
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
    let unitGrid = '<h2>\u{1F4DA} \u5355\u5143\u5BFC\u822A</h2><div class="unit-grid">';
    units.forEach((u,i)=>{
      const posMap = {};
      u.words.forEach(w=>{ const k=w.posClass||'n'; posMap[k]=(posMap[k]||0)+1; });
      const tags = Object.entries(posMap).map(([k,v])=>{
        const bg = k==='n'?'tag-noun':k==='v'?'tag-verb':k==='adj'?'tag-adj':'tag-adv';
        return `<span class="unit-tag ${bg}">${POS_LABELS[k]||k} ${v}</span>`;
      }).join('');

      unitGrid += `
        <a class="unit-card ${ucColors[i%12]}" href="unit${u.id}.html">
          <span class="unit-num">UNIT ${u.id}</span>
          <span class="unit-count">${u.words.length} \u8BCD</span>
          <div class="unit-title">${u.title}</div>
          <div class="unit-desc">${u.theme}</div>
          <div class="unit-tags">${tags}</div>
        </a>`;
    });
    unitGrid += '</div>';

    /* Word root highlight section */
    const roots = [
      { root:'tele-', meaning:'\u8FDC\u7684', examples:'telephone, television, telescope' },
      { root:'photo-', meaning:'\u5149', examples:'photo, photograph, photosynthesis' },
      { root:'-ject', meaning:'\u6254/\u629B', examples:'subject, project, reject, inject' },
      { root:'dict-', meaning:'\u8BF4', examples:'dictionary, dictate, predict' },
      { root:'fin-', meaning:'\u7ED3\u675F/\u8FB9\u754C', examples:'finish, final, define, infinite' },
      { root:'sci-', meaning:'\u77E5\u9053', examples:'science, conscience, conscious' },
      { root:'-ful/-less', meaning:'\u5145\u6EE1/\u6CA1\u6709', examples:'useful↔useless, hopeful↔hopeless' },
      { root:'under-', meaning:'\u5728\u4E0B\u9762/\u4E0D\u8DB3', examples:'under, understand, underground' },
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
          <div class="story-chapter-title"><button class="tts-chapter-btn" title="朗读本章">\u{1F50A}</button> Chapter 1 \xB7 A Busy Morning</div>
          ${ln(
            `${wl('hello','Hello')}! My ${wl('name','name')} is Li Ming. I am a ${wl('nice','nice')} boy from ${wl('china','China')}.`,
            `\u4F60\u597D\uFF01\u6211\u7684\u540D\u5B57\u53EB\u674E\u660E\u3002\u6211\u662F\u4E00\u4E2A\u6765\u81EA\u4E2D\u56FD\u7684\u53CB\u5584\u7537\u5B69\u3002`
          )}
          ${ln(
            `Today is the ${wl('first','first')} day of ${wl('school','school')}, and I am very ${wl('happy','happy')}!`,
            `\u4ECA\u5929\u662F\u5F00\u5B66\u7B2C\u4E00\u5929\uFF0C\u6211\u975E\u5E38\u5F00\u5FC3\uFF01`
          )}
          ${ln(
            `Early in the morning, everyone in my ${wl('family','family')} is busy.`,
            `\u4E00\u5927\u65E9\uFF0C\u5BB6\u91CC\u6BCF\u4E2A\u4EBA\u90FD\u5F88\u5FD9\u788C\u3002`
          )}
          ${ln(
            `My ${wl('grandmother','grandmother')} is making ${wl('breakfast','breakfast')} \u2014 ${wl('chicken','chicken')}, ${wl('rice','rice')}, and ${wl('vegetable','vegetable')}s.`,
            `\u5976\u5976\u5728\u505A\u65E9\u9910\u2014\u2014\u6709\u9E21\u8089\u3001\u7C73\u996D\u548C\u852C\u83DC\u3002`
          )}
          ${ln(
            `My ${wl('grandfather','grandfather')} is sitting on the ${wl('sofa','sofa')} reading a newspaper.`,
            `\u7237\u7237\u5750\u5728\u6C99\u53D1\u4E0A\u770B\u62A5\u7EB8\u3002`
          )}
          ${ln(
            `My ${wl('parent','parent')}s say: "Eat ${wl('healthy','healthy')} ${wl('fruit','fruit')}, not ${wl('hamburger','hamburger')}s and ${wl('banana','banana')}s all day!"`,
            `\u7236\u6BCD\u8BF4\uFF1A\u201C\u8981\u5403\u5065\u5EB7\u7684\u6C34\u679C\uFF0C\u522B\u6574\u5929\u60F3\u7740\u6C49\u5821\u548C\u9999\u8549\uFF01\u201D`
          )}
          ${ln(
            `I also pack my ${wl('lunch','lunch')} box. Then I run to my ${wl('room','room')}.`,
            `\u6211\u8FD8\u6253\u5305\u597D\u4E86\u5348\u9910\u76D2\u3002\u7136\u540E\u6211\u8DD1\u8FDB\u81EA\u5DF1\u7684\u623F\u95F4\u3002`
          )}
          ${ln(
            `My room is very ${wl('tidy','tidy')}. The ${wl('bed','bed')} is neat. On the ${wl('table','table')} there are ${wl('book','book')}s and a ${wl('pencil','pencil')}.`,
            `\u6211\u7684\u623F\u95F4\u5F88\u6574\u6D01\u3002\u5E8A\u94FA\u5F97\u5F88\u6574\u9F50\u3002\u684C\u5B50\u4E0A\u6709\u4E66\u548C\u94C5\u7B14\u3002`
          )}
          ${ln(
            `But \u2014 ${wl('where','where')} is my schoolbag?! I ${wl('think','think')} for a moment.`,
            `\u4F46\u662F\u2014\u2014\u6211\u7684\u4E66\u5305\u5728\u54EA\u91CC\uFF1F\uFF01\u6211\u60F3\u4E86\u60F3\u3002`
          )}
          ${ln(
            `I look ${wl('under','under')} the ${wl('chair','chair')}... Found it!`,
            `\u6211\u770B\u4E86\u770B\u6905\u5B50\u4E0B\u9762\u2026\u2026\u627E\u5230\u4E86\uFF01`
          )}
        </div>

        <div class="story-chapter">
          <div class="story-chapter-title"><button class="tts-chapter-btn" title="朗读本章">\u{1F50A}</button> Chapter 2 \xB7 New Friends at School</div>
          ${ln(
            `I walk into the ${wl('school','school')} ${wl('classroom','classroom')} and see a new girl.`,
            `\u6211\u8D70\u8FDB\u5B66\u6821\u7684\u6559\u5BA4\uFF0C\u770B\u5230\u4E00\u4E2A\u65B0\u6765\u7684\u5973\u5B69\u3002`
          )}
          ${ln(
            `"${wl('excuse','Excuse')} me, what's your ${wl('name','name')}?" I ask.`,
            `\u201C\u6253\u6270\u4E00\u4E0B\uFF0C\u4F60\u53EB\u4EC0\u4E48\u540D\u5B57\uFF1F\u201D\u6211\u95EE\u9053\u3002`
          )}
          ${ln(
            `"My name is Gina. ${wl('nice','Nice')} to ${wl('meet','meet')} you!" she says with a smile.`,
            `\u201C\u6211\u53EB Gina\u3002\u5F88\u9AD8\u5174\u8BA4\u8BC6\u4F60\uFF01\u201D\u5979\u7B11\u7740\u8BF4\u3002`
          )}
          ${ln(
            `"${wl('here','Here')} is my ${wl('family','family')} ${wl('photo','photo')}," she shows me.`,
            `\u201C\u8FD9\u662F\u6211\u7684\u5168\u5BB6\u798F\uFF0C\u201D\u5979\u7ED9\u6211\u770B\u3002`
          )}
          ${ln(
            `"This is my ${wl('brother','brother')} Tom, and ${wl('those','those')} are my ${wl('sister','sister')} and ${wl('cousin','cousin')}."`,
            `\u201C\u8FD9\u662F\u6211\u5F1F\u5F1F Tom\uFF0C\u90A3\u4E9B\u662F\u6211\u59D0\u59D0\u548C\u8868\u59B9\u3002\u201D`
          )}
          ${ln(
            `She points to the photo: "That is my ${wl('parent','parent')}s' ${wl('daughter','daughter')} \u2014 me! And that ${wl('small','small')} ${wl('son','son')} is ${wl('dear','dear')} Tom. He is only five years ${wl('old','old')}."`,
            `\u5979\u6307\u7740\u7167\u7247\u8BF4\uFF1A\u201C\u90A3\u662F\u6211\u7236\u6BCD\u7684\u5973\u513F\u2014\u2014\u5C31\u662F\u6211\uFF01\u90A3\u4E2A\u5C0F\u7684\u662F\u4EB2\u7231\u7684 Tom\u3002\u4ED6\u624D\u4E94\u5C81\u3002\u201D`
          )}
          ${ln(
            `The ${wl('teacher','teacher')} ${wl('come','come')}s in. "Please share your ${wl('telephone','telephone')} ${wl('number','number')}s."`,
            `\u8001\u5E08\u8D70\u8FDB\u6765\u3002\u201C\u8BF7\u4EA4\u6362\u4F60\u4EEC\u7684\u7535\u8BDD\u53F7\u7801\u3002\u201D`
          )}
          ${ln(
            `"You can also send me an ${wl('email','email')}!" says Gina. "Our ${wl('last','last')} ${wl('name','name')}s are different, but we can be ${wl('friend','friend')}s!"`,
            `\u201C\u4F60\u4E5F\u53EF\u4EE5\u53D1\u90AE\u4EF6\u7ED9\u6211\uFF01\u201DGina \u8BF4\u3002\u201C\u6211\u4EEC\u59D3\u4E0D\u4E00\u6837\uFF0C\u4F46\u53EF\u4EE5\u505A\u670B\u53CB\uFF01\u201D`
          )}
        </div>

        <div class="story-chapter">
          <div class="story-chapter-title"><button class="tts-chapter-btn" title="朗读本章">\u{1F50A}</button> Chapter 3 \xB7 A Day of Lessons</div>
          ${ln(
            `My ${wl('favorite','favorite')} ${wl('subject','subject')} is ${wl('science','science')}. The teacher says today's class will be very ${wl('interesting','interesting')}.`,
            `\u6211\u6700\u559C\u6B22\u7684\u79D1\u76EE\u662F\u79D1\u5B66\u3002\u8001\u5E08\u8BF4\u4ECA\u5929\u7684\u8BFE\u4F1A\u5F88\u6709\u8DA3\u3002`
          )}
          ${ln(
            `She asks us to open the ${wl('dictionary','dictionary')} and look up some words, then go to the ${wl('library','library')}.`,
            `\u5979\u8BA9\u6211\u4EEC\u6253\u5F00\u8BCD\u5178\u67E5\u51E0\u4E2A\u8BCD\uFF0C\u7136\u540E\u53BB\u56FE\u4E66\u9986\u3002`
          )}
          ${ln(
            `${wl('math','Math')} class is not so ${wl('fun','fun')} \u2014 ${wl('those','those')} ${wl('number','number')}s are really ${wl('difficult','difficult')}!`,
            `\u6570\u5B66\u8BFE\u5C31\u6CA1\u90A3\u4E48\u6709\u8DA3\u4E86\u2014\u2014\u90A3\u4E9B\u6570\u5B57\u771F\u7684\u597D\u96BE\uFF01`
          )}
          ${ln(
            `But ${wl('music','music')} class makes everyone ${wl('happy','happy')} again.`,
            `\u4F46\u97F3\u4E50\u8BFE\u8BA9\u5927\u5BB6\u53C8\u5F00\u5FC3\u8D77\u6765\u3002`
          )}
          ${ln(
            `In ${wl('chinese','Chinese')} class, the teacher asks why we like it.`,
            `\u8BED\u6587\u8BFE\u4E0A\uFF0C\u8001\u5E08\u95EE\u6211\u4EEC\u4E3A\u4EC0\u4E48\u559C\u6B22\u8BED\u6587\u3002`
          )}
          ${ln(
            `I say: "${wl('because','Because')} ${wl('chinese','Chinese')} is very ${wl('useful','useful')}!" The teacher nods: "Good! Now please ${wl('finish','finish')} the reading."`,
            `\u6211\u8BF4\uFF1A\u201C\u56E0\u4E3A\u8BED\u6587\u975E\u5E38\u6709\u7528\uFF01\u201D\u8001\u5E08\u70B9\u5934\uFF1A\u201C\u5F88\u597D\uFF01\u73B0\u5728\u8BF7\u5B8C\u6210\u9605\u8BFB\u3002\u201D`
          )}
          ${ln(
            `After class, I ${wl('find','find')} that I ${wl('lost','lost')} my ${wl('eraser','eraser')}. ${wl('where','Where')} is it?`,
            `\u4E0B\u8BFE\u540E\uFF0C\u6211\u53D1\u73B0\u6211\u7684\u6A61\u76AE\u4E22\u4E86\u3002\u5B83\u5728\u54EA\u91CC\uFF1F`
          )}
          ${ln(
            `I ${wl('find','find')} it ${wl('under','under')} the ${wl('teacher','teacher')}'s desk in the ${wl('classroom','classroom')}. ${wl('thank','Thank')} goodness!`,
            `\u6211\u5728\u6559\u5BA4\u8BB2\u53F0\u4E0B\u9762\u627E\u5230\u4E86\u5B83\u3002\u8C22\u5929\u8C22\u5730\uFF01`
          )}
        </div>

        <div class="story-chapter">
          <div class="story-chapter-title"><button class="tts-chapter-btn" title="朗读本章">\u{1F50A}</button> Chapter 4 \xB7 Sports and Shopping</div>
          ${ln(
            `After ${wl('school','school')}, ${wl('come','come')} on! Let's play ${wl('sport','sport')}s!`,
            `\u653E\u5B66\u540E\uFF0C\u52A0\u6CB9\uFF01\u6211\u4EEC\u53BB\u8FD0\u52A8\u5427\uFF01`
          )}
          ${ln(
            `"Do you have a ${wl('soccer','soccer')} ball?" asks Tom.`,
            `\u201C\u4F60\u6709\u8DB3\u7403\u5417\uFF1F\u201DTom \u95EE\u3002`
          )}
          ${ln(
            `"Let's play ${wl('basketball','basketball')}!" Gina says. ${wl('volleyball','volleyball')} and ${wl('tennis','tennis')} are also ${wl('easy','easy')} and ${wl('fun','fun')}.`,
            `\u201C\u6211\u4EEC\u6253\u7BEE\u7403\u5427\uFF01\u201DGina \u8BF4\u3002\u6392\u7403\u548C\u7F51\u7403\u4E5F\u5F88\u7B80\u5355\u6709\u8DA3\u3002`
          )}
          ${ln(
            `I ${wl('think','think')} sitting all day is ${wl('boring','boring')}. Playing is much more ${wl('interesting','interesting')}!`,
            `\u6211\u89C9\u5F97\u6574\u5929\u5750\u7740\u5F88\u65E0\u804A\u3002\u8FD0\u52A8\u6709\u8DA3\u591A\u4E86\uFF01`
          )}
          ${ln(
            `I ${wl('know','know')} a secret: the ${wl('store','store')} near the playground is ${wl('sell','sell')}ing ${wl('sport','sport')}s gear at a great ${wl('price','price')}!`,
            `\u6211\u77E5\u9053\u4E00\u4E2A\u79D8\u5BC6\uFF1A\u64CD\u573A\u65C1\u7684\u5546\u5E97\u6B63\u5728\u4EE5\u5F88\u597D\u7684\u4EF7\u683C\u5356\u8FD0\u52A8\u88C5\u5907\uFF01`
          )}
          ${ln(
            `"How ${wl('much','much')} are those shoes?" I ask.`,
            `\u201C\u90A3\u53CC\u978B\u5B50\u591A\u5C11\u94B1\uFF1F\u201D\u6211\u95EE\u3002`
          )}
          ${ln(
            `I decide to ${wl('buy','buy')} a new pair and some ${wl('clothes','clothes')}. They are not ${wl('big','big')}, not ${wl('small','small')} \u2014 just right!`,
            `\u6211\u51B3\u5B9A\u4E70\u4E00\u53CC\u65B0\u978B\u548C\u4E00\u4E9B\u8863\u670D\u3002\u4E0D\u5927\u4E0D\u5C0F\u2014\u2014\u521A\u521A\u597D\uFF01`
          )}
          ${ln(
            `A ${wl('sport','sport')}s ${wl('star','star')}'s dream starts with good gear!`,
            `\u8FD0\u52A8\u660E\u661F\u7684\u68A6\u60F3\u4ECE\u597D\u88C5\u5907\u5F00\u59CB\uFF01`
          )}
        </div>

        <div class="story-chapter">
          <div class="story-chapter-title"><button class="tts-chapter-btn" title="朗读本章">\u{1F50A}</button> Chapter 5 \xB7 The Birthday Surprise</div>
          ${ln(
            `${wl('when','When')} is your birthday? Is it in ${wl('January','January')} or ${wl('february','February')}?`,
            `\u4F60\u7684\u751F\u65E5\u662F\u4EC0\u4E48\u65F6\u5019\uFF1F\u662F\u4E00\u6708\u8FD8\u662F\u4E8C\u6708\uFF1F`
          )}
          ${ln(
            `This ${wl('month','month')} is Gina's birthday! We plan a ${wl('party','party')} for her.`,
            `\u8FD9\u4E2A\u6708\u662F Gina \u7684\u751F\u65E5\uFF01\u6211\u4EEC\u7ED9\u5979\u7B56\u5212\u4E86\u4E00\u4E2A\u6D3E\u5BF9\u3002`
          )}
          ${ln(
            `Everyone is ${wl('happy','happy')}, but the ${wl('test','test')} tomorrow makes us a little nervous.`,
            `\u5927\u5BB6\u90FD\u5F88\u5F00\u5FC3\uFF0C\u4F46\u660E\u5929\u7684\u8003\u8BD5\u8BA9\u6211\u4EEC\u6709\u70B9\u7D27\u5F20\u3002`
          )}
          ${ln(
            `"${wl('happy','Happy')} birthday, ${wl('dear','dear')} Gina!" we all shout together.`,
            `\u201C\u751F\u65E5\u5FEB\u4E50\uFF0C\u4EB2\u7231\u7684 Gina\uFF01\u201D\u6211\u4EEC\u9F50\u58F0\u558A\u9053\u3002`
          )}
          ${ln(
            `Gina makes a wish: she wants to ${wl('finish','finish')} all her homework and go on a ${wl('trip','trip')}.`,
            `Gina \u8BB8\u4E86\u4E2A\u613F\uFF1A\u5979\u60F3\u5B8C\u6210\u6240\u6709\u529F\u8BFE\uFF0C\u7136\u540E\u53BB\u65C5\u884C\u3002`
          )}
          ${ln(
            `"How ${wl('old','old')} are you now?" asks Tom. "Thirteen! I'm not ${wl('small','small')} anymore!" Gina laughs.`,
            `\u201C\u4F60\u73B0\u5728\u591A\u5927\u4E86\uFF1F\u201DTom \u95EE\u3002\u201C\u5341\u4E09\u5C81\uFF01\u6211\u4E0D\u5C0F\u4E86\uFF01\u201DGina \u7B11\u7740\u8BF4\u3002`
          )}
          ${ln(
            `This is the story of my ${wl('first','first')} semester. New ${wl('friend','friend')}s, a new ${wl('school','school')}, new ${wl('subject','subject')}s \u2014 everything is so ${wl('nice','nice')}.`,
            `\u8FD9\u5C31\u662F\u6211\u7B2C\u4E00\u4E2A\u5B66\u671F\u7684\u6545\u4E8B\u3002\u65B0\u670B\u53CB\u3001\u65B0\u5B66\u6821\u3001\u65B0\u79D1\u76EE\u2014\u2014\u4E00\u5207\u90FD\u90A3\u4E48\u7F8E\u597D\u3002`
          )}
          ${ln(
            `I ${wl('know','know')} this is just the beginning, ${wl('because','because')} the best is yet to ${wl('come','come')}!`,
            `\u6211\u77E5\u9053\u8FD9\u53EA\u662F\u5F00\u59CB\uFF0C\u56E0\u4E3A\u6700\u597D\u7684\u8FD8\u5728\u540E\u9762\uFF01`
          )}
        </div>

        <div class="story-chapter">
          <div class="story-chapter-title"><button class="tts-chapter-btn" title="朗读本章">\u{1F50A}</button> Chapter 6 \xB7 A Letter to My Future Self</div>
          <div class="story-block-en">
            <p>${wl('dear','Dear')} Future Me,</p>
            <p>${wl('hello','Hello')}! My ${wl('name','name')} is Li Ming. I am writing this letter at ${wl('school','school')} in ${wl('china','China')}, sitting on a ${wl('chair','chair')} in the ${wl('classroom','classroom')}. It is ${wl('january','January')} now, the ${wl('first','first')} ${wl('month','month')} of the new year, and I am very ${wl('happy','happy')}.</p>
            <p>Let me tell you about my ${wl('family','family')}. My ${wl('grandfather','grandfather')} and ${wl('grandmother','grandmother')} are ${wl('old','old')} but ${wl('healthy','healthy')}. My ${wl('parent','parent')}s work hard every day. I have a ${wl('brother','brother')} and a ${wl('sister','sister')}. My brother is the ${wl('son','son')} my ${wl('parent','parent')}s are most proud of, and my sister is their ${wl('dear','dear')}est ${wl('daughter','daughter')}. My ${wl('cousin','cousin')} often visits us too. ${wl('here','Here')} is a ${wl('family','family')} ${wl('photo','photo')} \u2014 look at ${wl('those','those')} ${wl('nice','nice')} faces!</p>
            <p>Every morning I eat ${wl('breakfast','breakfast')} \u2014 usually ${wl('rice','rice')}, ${wl('chicken','chicken')}, and ${wl('vegetable','vegetable')}s. My grandmother says ${wl('fruit','fruit')} is better than ${wl('banana','banana')}s and ${wl('hamburger','hamburger')}s. I also pack my ${wl('lunch','lunch')} box. My ${wl('room','room')} is very ${wl('tidy','tidy')}: ${wl('book','book')}s on the ${wl('table','table')}, a ${wl('pencil','pencil')} next to my ${wl('dictionary','dictionary')}, and my ${wl('eraser','eraser')} ${wl('under','under')} the ${wl('bed','bed')}. My ${wl('grandfather','grandfather')} reads on the ${wl('sofa','sofa')}.</p>
            <p>At school, I ${wl('meet','meet')} my ${wl('friend','friend')}s. "${wl('excuse','Excuse')} me, ${wl('where','where')} is the ${wl('library','library')}?" a new student asks. I say, "${wl('come','Come')} with me!" The ${wl('teacher','teacher')} asks us to share our ${wl('telephone','telephone')} ${wl('number','number')}s and ${wl('email','email')} addresses. Our ${wl('last','last')} names are all different, but we ${wl('know','know')} we are ${wl('friend','friend')}s.</p>
            <p>My ${wl('favorite','favorite')} ${wl('subject','subject')} is ${wl('science','science')} ${wl('because','because')} it is so ${wl('interesting','interesting')}! ${wl('math','Math')} is ${wl('difficult','difficult')}, and ${wl('those','those')} ${wl('number','number')}s make me ${wl('think','think')} hard. But ${wl('music','music')} class is pure ${wl('fun','fun')}. ${wl('chinese','Chinese')} class is very ${wl('useful','useful')}. I try to ${wl('finish','finish')} all my homework ${wl('because','because')} I want to be a ${wl('star','star')} student.</p>
            <p>After school, we play ${wl('sport','sport')}s. ${wl('soccer','soccer')}, ${wl('basketball','basketball')}, ${wl('volleyball','volleyball')}, ${wl('tennis','tennis')} \u2014 none of them are ${wl('boring','boring')}! They are all ${wl('easy','easy')} to learn and ${wl('fun','fun')} to play. I ${wl('find','find')} that I ${wl('lost','lost')} my ${wl('eraser','eraser')} again \u2014 ${wl('thank','thank')} goodness I always ${wl('find','find')} it!</p>
            <p>On the weekend, I go to the ${wl('store','store')} to ${wl('buy','buy')} new ${wl('clothes','clothes')}. "How ${wl('much','much')} are these?" I ask. The ${wl('price','price')} is not ${wl('big','big')} at all \u2014 a ${wl('small','small')} amount! I ${wl('sell','sell')} my old ${wl('book','book')}s to a second-hand shop.</p>
            <p>${wl('when','When')} is the best day of this ${wl('month','month')}? The ${wl('party','party')}! ${wl('february','February')} brings my ${wl('friend','friend')}'s birthday. We shout "${wl('happy','Happy')} birthday!" and eat cake. Before the ${wl('test','test')} next week, we plan a ${wl('trip','trip')} together.</p>
            <p>Future me, I hope you still ${wl('know','know')} how ${wl('nice','nice')} this ${wl('first','first')} year was. ${wl('because','Because')} the best is yet to ${wl('come','come')}!</p>
            <p>Your ${wl('friend','friend')},<br>Li Ming</p>
          </div>
          <div class="story-block-divider">\u2014\u2014 \u4EE5\u4E0B\u662F\u5168\u6587\u7FFB\u8BD1 \u2014\u2014</div>
          <div class="story-block-zh">
            <p>\u4EB2\u7231\u7684\u672A\u6765\u7684\u6211\uFF1A</p>
            <p>\u4F60\u597D\uFF01\u6211\u53EB\u674E\u660E\u3002\u6211\u6B63\u5728\u4E2D\u56FD\u7684\u5B66\u6821\u91CC\u5199\u8FD9\u5C01\u4FE1\uFF0C\u5750\u5728\u6559\u5BA4\u7684\u4E00\u628A\u6905\u5B50\u4E0A\u3002\u73B0\u5728\u662F\u4E00\u6708\uFF0C\u65B0\u5E74\u7684\u7B2C\u4E00\u4E2A\u6708\uFF0C\u6211\u975E\u5E38\u5F00\u5FC3\u3002</p>
            <p>\u8BA9\u6211\u7ED9\u4F60\u8BB2\u8BB2\u6211\u7684\u5BB6\u4EBA\u3002\u7237\u7237\u548C\u5976\u5976\u5E74\u7EAA\u5927\u4E86\uFF0C\u4F46\u5F88\u5065\u5EB7\u3002\u7236\u6BCD\u6BCF\u5929\u90FD\u5F88\u52AA\u529B\u5DE5\u4F5C\u3002\u6211\u6709\u4E00\u4E2A\u54E5\u54E5\u548C\u4E00\u4E2A\u59D0\u59D0\u3002\u54E5\u54E5\u662F\u7236\u6BCD\u6700\u9A84\u50B2\u7684\u513F\u5B50\uFF0C\u59D0\u59D0\u662F\u4ED6\u4EEC\u6700\u4EB2\u7231\u7684\u5973\u513F\u3002\u6211\u7684\u8868\u54E5\u4E5F\u7ECF\u5E38\u6765\u770B\u6211\u4EEC\u3002\u8FD9\u662F\u4E00\u5F20\u5168\u5BB6\u798F\u2014\u2014\u770B\u770B\u90A3\u4E9B\u7F8E\u597D\u7684\u9762\u5B54\uFF01</p>
            <p>\u6BCF\u5929\u65E9\u4E0A\u6211\u5403\u65E9\u9910\u2014\u2014\u901A\u5E38\u662F\u7C73\u996D\u3001\u9E21\u8089\u548C\u852C\u83DC\u3002\u5976\u5976\u8BF4\u6C34\u679C\u6BD4\u9999\u8549\u548C\u6C49\u5821\u5305\u597D\u3002\u6211\u8FD8\u4F1A\u6253\u5305\u5348\u9910\u76D2\u3002\u6211\u7684\u623F\u95F4\u5F88\u6574\u6D01\uFF1A\u4E66\u5728\u684C\u5B50\u4E0A\uFF0C\u94C5\u7B14\u5728\u8BCD\u5178\u65C1\u8FB9\uFF0C\u6A61\u76AE\u5728\u5E8A\u4E0B\u9762\u3002\u7237\u7237\u5750\u5728\u6C99\u53D1\u4E0A\u770B\u4E66\u3002</p>
            <p>\u5728\u5B66\u6821\uFF0C\u6211\u89C1\u5230\u6211\u7684\u670B\u53CB\u4EEC\u3002\u201C\u6253\u6270\u4E00\u4E0B\uFF0C\u56FE\u4E66\u9986\u5728\u54EA\u91CC\uFF1F\u201D\u4E00\u4E2A\u65B0\u540C\u5B66\u95EE\u3002\u6211\u8BF4\uFF1A\u201C\u8DDF\u6211\u6765\uFF01\u201D\u8001\u5E08\u8BA9\u6211\u4EEC\u4EA4\u6362\u7535\u8BDD\u53F7\u7801\u548C\u90AE\u7BB1\u5730\u5740\u3002\u6211\u4EEC\u7684\u59D3\u90FD\u4E0D\u4E00\u6837\uFF0C\u4F46\u6211\u4EEC\u77E5\u9053\u5F7C\u6B64\u662F\u670B\u53CB\u3002</p>
            <p>\u6211\u6700\u559C\u6B22\u7684\u79D1\u76EE\u662F\u79D1\u5B66\uFF0C\u56E0\u4E3A\u5B83\u592A\u6709\u8DA3\u4E86\uFF01\u6570\u5B66\u5F88\u96BE\uFF0C\u90A3\u4E9B\u6570\u5B57\u8BA9\u6211\u60F3\u5F97\u5F88\u8F9B\u82E6\u3002\u4F46\u97F3\u4E50\u8BFE\u7EAF\u7CB9\u662F\u4EAB\u53D7\u3002\u8BED\u6587\u8BFE\u975E\u5E38\u6709\u7528\u3002\u6211\u52AA\u529B\u5B8C\u6210\u6240\u6709\u4F5C\u4E1A\uFF0C\u56E0\u4E3A\u6211\u60F3\u6210\u4E3A\u660E\u661F\u5B66\u751F\u3002</p>
            <p>\u653E\u5B66\u540E\u6211\u4EEC\u505A\u8FD0\u52A8\u3002\u8DB3\u7403\u3001\u7BEE\u7403\u3001\u6392\u7403\u3001\u7F51\u7403\u2014\u2014\u6CA1\u6709\u4E00\u4E2A\u662F\u65E0\u804A\u7684\uFF01\u5B83\u4EEC\u90FD\u5F88\u5BB9\u6613\u5B66\uFF0C\u73A9\u8D77\u6765\u5F88\u6709\u8DA3\u3002\u6211\u53D1\u73B0\u6211\u53C8\u628A\u6A61\u76AE\u5F04\u4E22\u4E86\u2014\u2014\u8C22\u5929\u8C22\u5730\u6211\u603B\u80FD\u627E\u5230\u5B83\uFF01</p>
            <p>\u5468\u672B\u6211\u53BB\u5546\u5E97\u4E70\u65B0\u8863\u670D\u3002\u201C\u8FD9\u4E9B\u591A\u5C11\u94B1\uFF1F\u201D\u6211\u95EE\u3002\u4EF7\u683C\u4E00\u70B9\u90FD\u4E0D\u8D35\u2014\u2014\u5C0F\u5C0F\u7684\u4E00\u7B14\uFF01\u6211\u8FD8\u628A\u65E7\u4E66\u5356\u7ED9\u4E86\u4E8C\u624B\u5E97\u3002</p>
            <p>\u8FD9\u4E2A\u6708\u6700\u597D\u7684\u65E5\u5B50\u662F\u4EC0\u4E48\u65F6\u5019\uFF1F\u6D3E\u5BF9\uFF01\u4E8C\u6708\u8FE8\u6765\u4E86\u670B\u53CB\u7684\u751F\u65E5\u3002\u6211\u4EEC\u9F50\u58F0\u558A\u201C\u751F\u65E5\u5FEB\u4E50\uFF01\u201D\u7136\u540E\u5403\u86CB\u7CD5\u3002\u4E0B\u5468\u8003\u8BD5\u524D\uFF0C\u6211\u4EEC\u8BA1\u5212\u4E86\u4E00\u6B21\u65C5\u884C\u3002</p>
            <p>\u672A\u6765\u7684\u6211\uFF0C\u5E0C\u671B\u4F60\u8FD8\u8BB0\u5F97\u7B2C\u4E00\u5E74\u6709\u591A\u7F8E\u597D\u3002\u56E0\u4E3A\u6700\u597D\u7684\u8FD8\u5728\u540E\u9762\uFF01</p>
            <p>\u4F60\u7684\u670B\u53CB\uFF0C<br>\u674E\u660E</p>
          </div>
        </div>

      </div>`;

    const footer = `<div class="footer">北京人教版七年级英语词汇多维度分析 &mdash; 让每个单词都有故事</div>`;

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
            <span class="si-unit">Unit ${m.unitId}</span>
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

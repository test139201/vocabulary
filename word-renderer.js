/* ===== Word Renderer — renders vocabulary cards with multi-dimensional analysis ===== */
const WordRenderer = (function(){
  const POS_LABELS = {
    n:'名词',v:'动词',adj:'形容词',adv:'副词',
    prep:'介词',pron:'代词',conj:'连词',num:'数词',interj:'感叹词'
  };

  /* ── render one word card ── */
  function renderWord(w, idx){
    const posKey = w.posClass || 'n';
    const header = `
      <div class="wc-header pos-${posKey}">
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
    filterHtml += `<button class="fbtn" data-action="quiz" style="margin-left:auto;background:#8b5cf6;color:#fff;border-color:#8b5cf6">\u{1F3AE} \u8D76\u5FEB\u6D4B\u8BD5</button></div>`;

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

    const storyHtml = `
      <h2>📖 一个包含所有单词的奇妙故事</h2>
      <div class="story-hint">💡 点击高亮单词可以跳转到对应的详细分析页面</div>
      <div class="story-card">
        <div class="story-chapter">
          <div class="story-chapter-title">Chapter 1 · 新学期的早晨</div>
          <p>
            ${wl('hello','Hello')}! 我叫李明，是一个来自 ${wl('china','China')} 的 ${wl('friend','friend')}ly 男孩。
            今天是开学 ${wl('first','first')} 天，我特别 ${wl('happy','happy')}！
            一大早，${wl('family','family')} 里的每个人都在忙碌：${wl('grandmother','grandmother')} 在厨房准备
            ${wl('breakfast','breakfast')}——有 ${wl('chicken','chicken')}、${wl('rice','rice')} 和
            ${wl('vegetable','vegetable')}s；${wl('grandfather','grandfather')} 坐在 ${wl('sofa','sofa')} 上看报纸。
            ${wl('parent','parent')}s 叮嘱我："要吃 ${wl('healthy','healthy')} 的 ${wl('fruit','fruit')}，
            别老想着 ${wl('hamburger','hamburger')} 和 ${wl('banana','banana')}！"
          </p>
          <p>
            我匆匆吃完 ${wl('lunch','lunch')} 盒里准备好的食物——哦不，是早餐才对——然后跑进自己的 ${wl('room','room')}。
            我的房间很 ${wl('tidy','tidy')}，${wl('bed','bed')} 铺得整整齐齐，${wl('table','table')} 上放着
            ${wl('book','book')}s 和 ${wl('pencil','pencil')}。但是——${wl('where','Where')} is my schoolbag?!
            我 ${wl('think','think')} 了一下，看看 ${wl('chair','chair')} ${wl('under','under')} 面……找到了！
          </p>
        </div>

        <div class="story-chapter">
          <div class="story-chapter-title">Chapter 2 · 校园初相识</div>
          <p>
            走进 ${wl('school','school')} 的 ${wl('classroom','classroom')}，我看到一个陌生的女孩。
            "${wl('excuse','Excuse')} me, what's your ${wl('name','name')}?" 我问道。
            "My name is Gina. ${wl('nice','Nice')} to ${wl('meet','meet')} you!" 她笑着回答。
            "${wl('nice','Nice')} to meet you too! I'm Li Ming."
          </p>
          <p>
            Gina 指着身边的人向我介绍：
            "This is my ${wl('brother','brother')} Tom, and ${wl('those','those')} are my ${wl('sister','sister')}
            and ${wl('cousin','cousin')}." ${wl('here','Here')} 是她的 ${wl('family','family')}
            ${wl('photo','photo')}——一个 ${wl('big','big')} family！
            她的 ${wl('daughter','daughter')}……不对，她才初一，她指着照片说那是她的妈妈和
            ${wl('son','son')}——她的弟弟。"${wl('dear','Dear')} Tom 才 5 岁，" 她笑着说。
          </p>
          <p>
            ${wl('teacher','teacher')} 走进来，让我们交换 ${wl('telephone','telephone')} ${wl('number','number')}。
            "你也可以发 ${wl('email','email')} 给我，" Gina 说。
            "我们的 ${wl('last','last')} name 不一样，但可以做 ${wl('friend','friend')}s！"
          </p>
        </div>

        <div class="story-chapter">
          <div class="story-chapter-title">Chapter 3 · 课堂风云</div>
          <p>
            上午的 ${wl('favorite','favorite')} ${wl('subject','subject')} 来了——${wl('science','science')}！
            ${wl('teacher','Teacher')} 说今天的课会很 ${wl('interesting','interesting')}。
            她让我们打开 ${wl('dictionary','dictionary')} 查几个词，然后去 ${wl('library','library')} 做实验报告。
            ${wl('math','Math')} 课就没那么 ${wl('fun','fun')} 了——那些 ${wl('number','number')}s 好
            ${wl('difficult','difficult')}！不过 ${wl('music','music')} 课让大家重新开心起来。
          </p>
          <p>
            ${wl('chinese','Chinese')} 课上，老师问我们 ${wl('because','because')} 什么喜欢语文。
            我说："${wl('because','Because')} 语文很 ${wl('useful','useful')}，学好它才能读懂世界！"
            老师点头说："说得好！现在请大家 ${wl('finish','finish')} 这篇阅读。"
          </p>
          <p>
            下课后我发现自己 ${wl('lost','lost')} 了 ${wl('eraser','eraser')}。
            到处 ${wl('find','find')} 不到，最后在 ${wl('classroom','classroom')} 的
            讲台 ${wl('under','under')} 面 ${wl('find','find')} 到了它。${wl('thank','Thank')} goodness!
          </p>
        </div>

        <div class="story-chapter">
          <div class="story-chapter-title">Chapter 4 · 运动时光</div>
          <p>
            放学后，${wl('come','Come')} on! 大家去操场做 ${wl('sport','sport')}s！
            Tom 问："Do you have a ${wl('soccer','soccer')} ball?"
            "Let's play ${wl('basketball','basketball')}!" Gina 更想打篮球。
            ${wl('volleyball','volleyball')} 也不错，${wl('tennis','tennis')} 也很 ${wl('easy','easy')} 上手。
            我觉得坐着不动才是最 ${wl('boring','boring')} 的事——运动总是很 ${wl('fun','fun')}！
          </p>
          <p>
            我 ${wl('know','know')} 一个秘密：操场边的 ${wl('store','store')} 今天在 ${wl('sell','sell')}
            运动装备，${wl('price','price')} 特别便宜！
            "How ${wl('much','much')} are ${wl('those','those')} shoes?" 我问店员。
            "很 ${wl('small','small')} 的价格！" 他笑着说。
            我决定 ${wl('buy','buy')} 一双新球鞋和一套 ${wl('clothes','clothes')}。
            运动 ${wl('star','star')} 的梦想，从装备开始！
          </p>
        </div>

        <div class="story-chapter">
          <div class="story-chapter-title">Chapter 5 · 生日惊喜</div>
          <p>
            ${wl('when','When')} is your birthday? ${wl('January','January')} 还是 ${wl('february','February')}？
            这个 ${wl('month','month')} 竟然是 Gina 的生日！
            我们决定办一个 ${wl('party','party')}。
            大家都很 ${wl('happy','happy')}——除了要准备明天的 ${wl('test','test')} 让人有点紧张。
          </p>
          <p>
            "${wl('happy','Happy')} birthday, ${wl('dear','dear')} Gina!" 我们齐声喊道。
            Gina 许了个愿望：希望这学期能 ${wl('finish','finish')} 所有功课，然后来一次 ${wl('trip','trip')}。
            "How ${wl('old','old')} are you now?" Tom 问。
            "十三岁！" Gina 说，"我已经不 ${wl('small','small')} 了！"
          </p>
          <p>
            这就是我 ${wl('first','first')} 个学期的故事。新的 ${wl('friend','friend')}s、新的
            ${wl('school','school')}、新的 ${wl('subject','subject')}s——一切都那么 ${wl('nice','nice')}。
            我 ${wl('know','know')}，这只是开始。
            ${wl('because','Because')} the best is yet to ${wl('come','come')}!
          </p>
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
  }

  return { renderWord, renderUnit, renderIndex };
})();

if(typeof window!=='undefined') window.WordRenderer = WordRenderer;

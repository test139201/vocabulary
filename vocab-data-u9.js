// Unit 9: My favorite subject is science.
const UNIT9 = {
  id: 9,
  title: "My favorite subject is science",
  theme: "学校科目与偏好",
  color: "#6366f1",
  words: [
    {
      word: "favorite",
      phonetic: "/ˈfeɪvərɪt/",
      pos: "adj./n.",
      posClass: "adj",
      meaning: "特别喜爱的；最喜欢的人/物",
      root: {
        parts: [{ text: "favor", type: "root", label: "拉丁语 favor = 好意、偏爱" }],
        explain: "favor（偏爱）+ -ite（形容词/名词后缀）= 被偏爱的 = 最喜欢的。favour 是英式拼写。"
      },
      memory: "favorite = favor（喜爱）+ ite——被特别喜爱的！American = favorite, British = favourite（多一个 u）。",
      family: ["favor（偏爱/恩惠）", "favorable（有利的）", "unfavorable（不利的）"],
      synonyms: ["preferred（首选的）", "beloved（心爱的）"],
      antonyms: ["least favorite（最不喜欢的）"],
      sentences: [
        { en: "What's your favorite subject?", zh: "你最喜欢的科目是什么？" },
        { en: "Blue is my favorite color.", zh: "蓝色是我最喜欢的颜色。" }
      ],
      fun: "美式拼写 favorite，英式拼写 favourite——多一个 u。类似的美英拼写差异：color/colour, honor/honour, humor/humour。美国人觉得 u 多余就去掉了！",
      usage: "What's your favorite...? 是万能提问句型，可以接任何名词。"
    },
    {
      word: "subject",
      phonetic: "/ˈsʌbdʒɪkt/",
      pos: "n.",
      posClass: "n",
      meaning: "学科；主题",
      root: {
        parts: [
          { text: "sub-", type: "prefix", label: "在下面" },
          { text: "ject", type: "root", label: "拉丁语 jacere = 投/扔" }
        ],
        explain: "sub（在下面）+ ject（扔）= 被扔在下面的 = 被支配的 → 臣民 → 主题（被讨论的对象）→ 学科。"
      },
      memory: "subject = sub(下) + ject(扔)。同根词家族：project = pro(向前) + ject(扔) = 把计划扔出去 = 项目。inject = in + ject = 扔进去 = 注射！",
      family: ["project（项目=向前扔）", "inject（注射=向里扔）", "reject（拒绝=向回扔）", "object（反对=向前扔/物体）"],
      synonyms: ["topic（话题）", "course（课程）"],
      antonyms: [],
      sentences: [
        { en: "What's your favorite subject?", zh: "你最喜欢的学科是什么？" },
        { en: "Math is a difficult subject.", zh: "数学是一门困难的学科。" }
      ],
      fun: "-ject 家族是词根学习的金矿：eject（弹出=向外扔）、object（物体/反对=扔到对面）、reject（拒绝=扔回去）、project（项目=向前扔）、inject（注射=扔进去）。掌握 ject = 扔，就能猜出大量单词！",
      usage: "change the subject = 转移话题。"
    },
    {
      word: "science",
      phonetic: "/ˈsaɪəns/",
      pos: "n.",
      posClass: "n",
      meaning: "科学；理科",
      root: {
        parts: [{ text: "sci-", type: "root", label: "拉丁语 scire = 知道" }],
        explain: "来自拉丁语 scientia = 知识。sci-（知道）是一个超强词根！conscience = con + sci = 共同知道 = 良心（大家都知道什么是对错）。"
      },
      memory: "science = sci(知道) + ence(名词后缀)——科学就是'求知'！scientist = 求知的人。",
      family: ["scientist（科学家）", "scientific（科学的）", "conscience（良心=共同知道）", "conscious（有意识的）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "I love science.", zh: "我喜爱科学。" },
        { en: "Science is interesting.", zh: "理科很有趣。" }
      ],
      fun: "sci- 词根 = 知道：science（科学=知识）、conscience（良心=大家都知道的是非）、conscious（有意识的=自己知道）、omniscient（全知的=全都知道）。一个'知道'走天下！",
      usage: "science fiction (sci-fi) = 科幻小说/电影。rocket science = 高深的学问（It's not rocket science = 又不是什么高深的事）。"
    },
    {
      word: "music",
      phonetic: "/ˈmjuːzɪk/",
      pos: "n.",
      posClass: "n",
      meaning: "音乐",
      root: { parts: [], explain: "来自希腊语 mousikē（缪斯女神的艺术）。Muse（缪斯）是希腊神话中掌管艺术的九位女神。music = 缪斯女神赐予的艺术！" },
      memory: "music 来自 Muse（缪斯女神）——音乐是女神赐予人类的礼物！museum（博物馆）也来自 Muse = 缪斯女神的殿堂。",
      family: ["musician（音乐家）", "musical（音乐的/音乐剧）", "museum（博物馆=缪斯的殿堂）"],
      synonyms: ["melody（旋律）", "tune（曲调）"],
      antonyms: [],
      sentences: [
        { en: "I like music very much.", zh: "我非常喜欢音乐。" },
        { en: "She plays music every day.", zh: "她每天演奏音乐。" }
      ],
      fun: "Muse（缪斯）家族词：music（音乐）、museum（博物馆）、amuse（使娱乐）。希腊九位缪斯女神分别掌管史诗、抒情诗、喜剧、悲剧、舞蹈、历史、天文、颂歌和合唱——古人认为一切艺术灵感都来自缪斯。",
      usage: "music 是不可数名词。a piece of music = 一首曲子。face the music = 承担后果。"
    },
    {
      word: "math",
      phonetic: "/mæθ/",
      pos: "n.",
      posClass: "n",
      meaning: "数学",
      root: { parts: [], explain: "mathematics 的缩写。来自希腊语 mathēma = '被学习的东西'。古希腊人认为数学是最值得学习的知识！" },
      memory: "math 是 mathematics 的缩写。美式说 math，英式说 maths（加了 s）。",
      family: ["mathematics（数学全称）", "mathematician（数学家）", "mathematical（数学的）"],
      synonyms: ["mathematics（数学）", "arithmetic（算术）"],
      antonyms: [],
      sentences: [
        { en: "Math is my favorite subject.", zh: "数学是我最喜欢的学科。" },
        { en: "I'm good at math.", zh: "我擅长数学。" }
      ],
      fun: "美国人说 math（单数），英国人说 maths（复数）——为什么？因为 mathematics 词尾是 -s，英国人保留了这个 s，美国人嫌多余就去掉了。两种说法都对！",
      usage: "do math = 做数学题。math class = 数学课。"
    },
    {
      word: "Chinese",
      phonetic: "/ˌtʃaɪˈniːz/",
      pos: "n./adj.",
      posClass: "n",
      meaning: "语文；中文；中国人；中国的",
      root: { parts: [], explain: "China + -ese（来自某地的人/语言后缀）。类似：Japan → Japanese, Portugal → Portuguese。" },
      memory: "-ese 后缀表示'某国的'：Chinese, Japanese, Portuguese, Vietnamese。但不是所有国家都用 -ese——American, British, French 各有自己的方式。",
      family: [],
      synonyms: ["Mandarin（普通话）"],
      antonyms: [],
      sentences: [
        { en: "I like Chinese class.", zh: "我喜欢语文课。" },
        { en: "She can speak Chinese.", zh: "她会说中文。" }
      ],
      fun: "Chinese 一个词 = 中国人 + 中文 + 中国的。单复数同形：one Chinese, two Chinese（不加 s）。类似的还有 Japanese、Swiss。",
      usage: "Chinese 做'语文课'讲时首字母大写。Mandarin Chinese = 普通话。"
    },
    {
      word: "because",
      phonetic: "/bɪˈkɒz/",
      pos: "conj.",
      posClass: "conj",
      meaning: "因为",
      root: {
        parts: [
          { text: "be-", type: "prefix", label: "通过" },
          { text: "cause", type: "root", label: "原因" }
        ],
        explain: "by + cause = 因为有原因 = 因为。because 就是'by the cause of'（由于这个原因）的缩写。"
      },
      memory: "because = be + cause（原因）——有了原因(cause)就有了'因为'(because)！",
      family: ["cause（原因/导致）"],
      synonyms: ["since（因为）", "as（因为）", "due to（由于）"],
      antonyms: [],
      sentences: [
        { en: "I like math because it's fun.", zh: "我喜欢数学因为它有趣。" },
        { en: "Because it's Monday, I'm tired.", zh: "因为今天是周一，我很累。" }
      ],
      fun: "because 在网络语言中常被缩写为 'cuz' 或 'bc'。2013年 because 甚至被美国方言学会评为'年度词汇'——因为网上出现了'because + 名词'的新用法：I can't even because Monday.（我不行了因为周一）。",
      usage: "because + 句子。because of + 名词/短语。Why? Because...（为什么？因为……）。"
    },
    {
      word: "useful",
      phonetic: "/ˈjuːsfl/",
      pos: "adj.",
      posClass: "adj",
      meaning: "有用的",
      root: {
        parts: [
          { text: "use", type: "root", label: "使用" },
          { text: "-ful", type: "suffix", label: "充满……的" }
        ],
        explain: "use（使用）+ -ful（充满）= 充满用处的 = 有用的。"
      },
      memory: "-ful 表示'充满'：useful = 充满用处，beautiful = 充满美丽，wonderful = 充满奇迹，colorful = 充满色彩。",
      family: ["use（使用）", "useless（无用的）", "user（用户）", "used（二手的/习惯的）"],
      synonyms: ["helpful（有帮助的）", "practical（实用的）"],
      antonyms: ["useless（无用的）"],
      sentences: [
        { en: "English is very useful.", zh: "英语非常有用。" },
        { en: "This is a useful tool.", zh: "这是一个有用的工具。" }
      ],
      fun: "-ful 和 -less 是天生的反义后缀对：useful↔useless, helpful↔helpless, careful↔careless, hopeful↔hopeless。掌握这对后缀等于词汇量翻倍！",
      usage: "-ful 加在名词后变成形容词：hope→hopeful, care→careful, thank→thankful, power→powerful。"
    },
    {
      word: "finish",
      phonetic: "/ˈfɪnɪʃ/",
      pos: "v.",
      posClass: "v",
      meaning: "完成；结束",
      root: {
        parts: [{ text: "fin-", type: "root", label: "拉丁语 finis = 结束/边界" }],
        explain: "来自拉丁语 finire（结束）。fin-（结束）是超常见词根：final（最终的）、finish（完成）、finance（金融=结清账目）、fine（罚款=了结/好的）。"
      },
      memory: "finish 里有 fin（鱼鳍）——鱼游到终点(finish)用鱼鳍(fin)！fin- = 结束：final（最终的）、finite（有限的）、infinite（无限的）。",
      family: ["final（最终的）", "finally（终于）", "finite（有限的）", "infinite（无限的）", "define（定义=划定边界）"],
      synonyms: ["complete（完成）", "end（结束）"],
      antonyms: ["begin（开始）", "start（开始）"],
      sentences: [
        { en: "I finish class at 4:30.", zh: "我4:30下课。" },
        { en: "Have you finished your homework?", zh: "你做完作业了吗？" }
      ],
      fun: "fin- 家族太庞大了：finish（完成）、final（最终）、fine（好的/罚款）、finance（金融=结清）、define（定义=划定界限）、confine（限制=一起划边界）、infinite（无限=没有边界）。",
      usage: "finish doing sth. = 做完某事（后接动名词，不接 to do）。finish line = 终点线。"
    }
  ]
};

if(typeof window!=='undefined'){window.UNIT9=UNIT9;}

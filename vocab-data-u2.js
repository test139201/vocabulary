// Unit 2: This is my sister.
const UNIT2 = {
  id: 2,
  title: "This is my sister",
  theme: "家庭成员与介绍他人",
  color: "#ef4444",
  words: [
    {
      word: "sister",
      phonetic: "/ˈsɪstə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "姐；妹",
      root: { parts: [], explain: "古英语 sweostor，与拉丁语 soror、梵语 svasar 同源。全世界很多语言里'姐妹'的发音都很像——这说明它是人类最古老的词之一！" },
      memory: "sister 里有 'sit'——姐妹们经常 sit（坐）在一起聊天！",
      family: ["sisterhood（姐妹情谊）", "sissy（胆小鬼，源自对姐妹的刻板印象，现已不推荐使用）"],
      synonyms: ["sibling（兄弟姐妹）", "sis（口语：姐/妹）"],
      antonyms: ["brother（兄弟）"],
      sentences: [
        { en: "This is my sister Kate.", zh: "这是我姐姐凯特。" },
        { en: "I have two sisters.", zh: "我有两个姐妹。" }
      ],
      fun: "英语不区分'姐姐'和'妹妹'，都是 sister。要区分就说 elder/older sister（姐姐）或 younger sister（妹妹）。中文的细致让外国人很头疼！",
      usage: "big sister = 姐姐（口语），little sister = 妹妹（口语）。"
    },
    {
      word: "brother",
      phonetic: "/ˈbrʌðə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "兄；弟",
      root: { parts: [], explain: "古英语 brōþor，这也是一个超古老的词！与拉丁语 frater（兄弟会 fraternity 就来自这里）同源。" },
      memory: "brother 里有 'other'——兄弟就是另一个(other)自己！",
      family: ["brotherhood（兄弟情谊）", "brotherly（兄弟般的）"],
      synonyms: ["sibling（兄弟姐妹）", "bro（口语：兄弟）"],
      antonyms: ["sister（姐妹）"],
      sentences: [
        { en: "Is this your brother?", zh: "这是你哥哥/弟弟吗？" },
        { en: "My brother is a student.", zh: "我哥哥是学生。" }
      ],
      fun: "bro 是 brother 的口语缩写，现在年轻人之间打招呼也常说 'Hey bro!' 不管是不是真的兄弟。",
      usage: "同样不分大小，要区分用 elder brother（哥哥）/ younger brother（弟弟）。"
    },
    {
      word: "parent",
      phonetic: "/ˈpeərənt/",
      pos: "n.",
      posClass: "n",
      meaning: "父亲或母亲",
      root: {
        parts: [{ text: "par-", type: "root", label: "拉丁语 parere = 生育" }],
        explain: "来自拉丁语 parens（生育者）。同根词 prepare = pre（提前）+ pare（准备/生育），父母总是在'提前准备'！"
      },
      memory: "parent = pa + rent——爸爸(pa)付房租(rent)的人就是家长！",
      family: ["parents（父母双亲）", "parental（父母的）", "grandparent（祖父母）"],
      synonyms: ["guardian（监护人）", "caretaker（看护者）"],
      antonyms: ["child（孩子）", "kid（小孩）"],
      sentences: [
        { en: "These are my parents.", zh: "这是我的父母。" },
        { en: "My parents love me.", zh: "我的父母爱我。" }
      ],
      fun: "parent 的复数 parents 才是'父母'的意思。单数 parent 只指爸爸或妈妈其中一个。",
      usage: "parents' meeting = 家长会。parent company = 母公司。"
    },
    {
      word: "grandmother",
      phonetic: "/ˈɡrænmʌðə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "（外）祖母；奶奶；姥姥",
      root: {
        parts: [
          { text: "grand-", type: "prefix", label: "大的、隔一辈的" },
          { text: "mother", type: "root", label: "母亲" }
        ],
        explain: "grand（大的）+ mother（母亲）= 大妈妈 = 祖母。grand- 用来表示隔一代的亲属关系。"
      },
      memory: "grandmother = grand + mother，比 mother 更 grand（更伟大）的人——奶奶！",
      family: ["grandma（口语：奶奶）", "grandfather（祖父）", "grandparent（祖父母）", "grandchild（孙子/孙女）"],
      synonyms: ["grandma（奶奶）", "granny（奶奶）", "nana（外婆）"],
      antonyms: [],
      sentences: [
        { en: "My grandmother is 70 years old.", zh: "我奶奶70岁了。" }
      ],
      fun: "grand- 家族：grandparent（祖父母）、grandchild（孙辈）、great-grandmother（曾祖母）。每加一个 great- 就再往上一辈！",
      usage: "口语中 grandma 远比 grandmother 常用。"
    },
    {
      word: "grandfather",
      phonetic: "/ˈɡrænfɑːðə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "（外）祖父；爷爷；姥爷",
      root: {
        parts: [
          { text: "grand-", type: "prefix", label: "大的、隔一辈的" },
          { text: "father", type: "root", label: "父亲" }
        ],
        explain: "grand（大的）+ father（父亲）= 祖父。注意发音：grand 后面的 d 通常弱化。"
      },
      memory: "grandfather clock = 落地大摆钟——因为钟又高又古老，像爷爷一样！",
      family: ["grandpa（口语：爷爷）", "granddad（口语：爷爷）", "great-grandfather（曾祖父）"],
      synonyms: ["grandpa（爷爷）", "granddad（爷爷）"],
      antonyms: [],
      sentences: [
        { en: "This is a photo of my grandfather.", zh: "这是我爷爷的照片。" }
      ],
      fun: "grandfather clause（祖父条款）是法律术语，指旧规则对老用户仍然有效。因为你爷爷那时候的规矩还管用！",
      usage: "口语中 grandpa 远比 grandfather 常用。"
    },
    {
      word: "those",
      phonetic: "/ðəʊz/",
      pos: "pron.",
      posClass: "pron",
      meaning: "那些",
      root: { parts: [], explain: "that 的复数形式。this→these（这些），that→those（那些）。一近一远，一单一复，排列得很整齐。" },
      memory: "this-these, that-those——th 开头的指示代词四兄弟！近处用 this/these，远处用 that/those。",
      family: [],
      synonyms: [],
      antonyms: ["these（这些）"],
      sentences: [
        { en: "Those are my friends.", zh: "那些是我的朋友。" },
        { en: "Who are those people?", zh: "那些人是谁？" }
      ],
      fun: "this/that/these/those 被称为'指示代词'四天王。记住口诀：this 近单，these 近复，that 远单，those 远复！",
      usage: "those 既可以做代词（Those are mine）也可以做形容词（those books）。"
    },
    {
      word: "photo",
      phonetic: "/ˈfəʊtəʊ/",
      pos: "n.",
      posClass: "n",
      meaning: "照片",
      root: {
        parts: [{ text: "photo-", type: "prefix", label: "希腊语 phōs = 光" }],
        explain: "来自 photograph = photo（光）+ graph（画）= 用光画画 = 照片！photo 是它的缩写。"
      },
      memory: "photo = 光的艺术。拍照就是'捕捉光线'！",
      family: ["photograph（照片）", "photographer（摄影师）", "photography（摄影术）", "photocopy（复印）"],
      synonyms: ["picture（图片）", "image（图像）"],
      antonyms: [],
      sentences: [
        { en: "Here is a photo of my family.", zh: "这是一张我家人的照片。" },
        { en: "Can I take a photo?", zh: "我能拍张照吗？" }
      ],
      fun: "photo- 词根家族超大：photosynthesis（光合作用=光+合成）、photon（光子）。认识 photo-（光）就能猜出很多科学词汇！",
      usage: "photo 的复数是 photos（不是 photoes）。take a photo = 拍照。"
    },
    {
      word: "here",
      phonetic: "/hɪə(r)/",
      pos: "adv.",
      posClass: "adv",
      meaning: "这里",
      root: { parts: [], explain: "古英语 hēr，与 he（他）有关。最初指'在这个地方'。" },
      memory: "here 和 hear（听到）只差一个字母的位置！Here, hear me!（在这里，听我说！）",
      family: ["hereafter（此后）", "hereby（据此）", "herein（在此中）"],
      synonyms: ["over here（在这边）"],
      antonyms: ["there（那里）"],
      sentences: [
        { en: "Here is my family photo.", zh: "这是我的全家福。" },
        { en: "Come here, please.", zh: "请过来。" }
      ],
      fun: "here 和 there 是一对好CP：here（这里）there（那里），here and there = 到处。",
      usage: "Here you are! = 给你！（递东西时说）。Here we go! = 开始了！"
    },
    {
      word: "daughter",
      phonetic: "/ˈdɔːtə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "女儿",
      root: { parts: [], explain: "古英语 dohtor，与德语 Tochter、希腊语 thugatēr 同源。又一个人类语言中最古老的词！" },
      memory: "daughter 拼写超难！记住：d-a-u-g-h-t-e-r，里面藏着 'aught'（零/任何东西）——女儿是父母的一切(everything)！",
      family: ["daughter-in-law（儿媳妇）"],
      synonyms: ["girl（女孩）"],
      antonyms: ["son（儿子）"],
      sentences: [
        { en: "She is their daughter.", zh: "她是他们的女儿。" }
      ],
      fun: "daughter 这个词的拼写让很多英语学习者崩溃：gh 不发音，au 发 /ɔː/。类似的还有 laugh（笑）里 gh 发 /f/——英语拼写就是这么任性！",
      usage: "stepdaughter = 继女。goddaughter = 教女。"
    },
    {
      word: "son",
      phonetic: "/sʌn/",
      pos: "n.",
      posClass: "n",
      meaning: "儿子",
      root: { parts: [], explain: "古英语 sunu。与 sun（太阳）发音完全相同！但意义毫无关系。" },
      memory: "son 和 sun（太阳）同音——儿子是家里的小太阳！",
      family: ["son-in-law（女婿）", "grandson（孙子）"],
      synonyms: ["boy（男孩）"],
      antonyms: ["daughter（女儿）"],
      sentences: [
        { en: "He is their son.", zh: "他是他们的儿子。" },
        { en: "They have two sons.", zh: "他们有两个儿子。" }
      ],
      fun: "很多英文姓氏来自 son：Johnson = John 的儿子，Jackson = Jack 的儿子，Wilson = Will 的儿子。-son 结尾的姓氏超级多！",
      usage: "son 的复数直接加 s：sons。"
    },
    {
      word: "cousin",
      phonetic: "/ˈkʌzn/",
      pos: "n.",
      posClass: "n",
      meaning: "堂/表兄弟姐妹",
      root: { parts: [], explain: "来自拉丁语 consobrinus = con（一起）+ sobrinus（姨妈的孩子）。原来只指表亲，后来扩展到堂亲也用。" },
      memory: "cousin 发音像'卡真'——你的堂兄弟来了，卡住了真（不知道该叫堂哥还是表弟）！",
      family: ["first cousin（嫡堂/表兄弟姐妹）", "second cousin（远房堂/表兄弟姐妹）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "These are my cousins.", zh: "这些是我的堂/表兄弟姐妹。" }
      ],
      fun: "cousin 在英语里不分男女、不分堂表、不分大小——一个词全包了。中文要分出堂哥、表妹、堂姐、表弟……外国人学中文时被这些亲属称谓逼疯！",
      usage: "cousin 可以指男也可以指女。不需要区分是堂还是表。"
    },
    {
      word: "dear",
      phonetic: "/dɪə(r)/",
      pos: "adj.",
      posClass: "adj",
      meaning: "亲爱的",
      root: { parts: [], explain: "古英语 dēore（珍贵的、昂贵的）。dear 的双重含义：亲爱的+昂贵的。因为你珍爱(dear)的人/东西对你来说是最贵(dear)的！" },
      memory: "dear 和 deer（鹿）同音——亲爱的小鹿！",
      family: ["dearly（深深地）", "dearest（最亲爱的）"],
      synonyms: ["beloved（心爱的）", "darling（亲爱的）"],
      antonyms: [],
      sentences: [
        { en: "Dear Jenny, ...", zh: "亲爱的珍妮，……" },
        { en: "She is my dear friend.", zh: "她是我亲爱的朋友。" }
      ],
      fun: "写信开头用 Dear 是固定格式，即使写给不太熟的人也用 Dear Mr./Ms.。这不代表你真的觉得对方'亲爱'——只是礼貌用法！",
      usage: "Oh dear! = 天哪！（表示惊讶）。dear 在英式英语里还可以表示'贵的'。"
    }
  ]
};

if(typeof window!=='undefined'){window.UNIT2=UNIT2;}

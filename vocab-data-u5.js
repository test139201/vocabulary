// Unit 5: Do you have a soccer ball?
const UNIT5 = {
  id: 5,
  title: "Do you have a soccer ball?",
  theme: "运动与爱好",
  color: "#06b6d4",
  words: [
    {
      word: "soccer",
      phonetic: "/ˈsɒkə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "英式足球",
      root: { parts: [], explain: "来自 Association Football（协会足球）的缩写 assoc. 加上 -er 后缀 → soccer。牛津大学学生19世纪时喜欢在词后加 -er 作为俚语。" },
      memory: "soccer 来自 asSOCiation 的 soc + er。美国人说 soccer，英国人说 football——同一个运动两个名字！",
      family: ["soccer ball（足球）", "soccer player（足球运动员）"],
      synonyms: ["football（足球，英式用法）"],
      antonyms: [],
      sentences: [
        { en: "Do you have a soccer ball?", zh: "你有足球吗？" },
        { en: "Let's play soccer!", zh: "我们去踢足球吧！" }
      ],
      fun: "美国人说 soccer，全世界其他地方说 football。但 football 在美国指的是橄榄球（American football）——一个词在两个国家指完全不同的运动！",
      usage: "美式英语用 soccer，英式英语用 football。play soccer = 踢足球。"
    },
    {
      word: "tennis",
      phonetic: "/ˈtenɪs/",
      pos: "n.",
      posClass: "n",
      meaning: "网球",
      root: { parts: [], explain: "来自法语 tenez!（接着！hold!）——发球时喊的口令！14世纪法国贵族打球时喊'接着！'，这个喊声就变成了运动的名字。" },
      memory: "tennis 来自法语'接着！'(tenez)——打网球时把球'接着'打回去！ten + nis = 十(ten)分有趣(nice)的运动！",
      family: ["tennis court（网球场）", "tennis racket（网球拍）", "table tennis（乒乓球）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "She plays tennis very well.", zh: "她网球打得很好。" },
        { en: "Do you like tennis?", zh: "你喜欢网球吗？" }
      ],
      fun: "网球计分方式超奇怪：0-15-30-40。为什么0分叫 'love'？因为法语里 l'oeuf（鸡蛋）= 0（鸡蛋形状像0），传到英语变成了 love！",
      usage: "play tennis（不加 the）。tennis shoes = 网球鞋/运动鞋。"
    },
    {
      word: "volleyball",
      phonetic: "/ˈvɒlibɔːl/",
      pos: "n.",
      posClass: "n",
      meaning: "排球",
      root: {
        parts: [
          { text: "volley", type: "root", label: "截击、齐射" },
          { text: "ball", type: "root", label: "球" }
        ],
        explain: "volley（在球落地前击球）+ ball（球）= 球不能落地的运动 = 排球！volley 来自拉丁语 volare（飞），和 fly 有远亲关系。"
      },
      memory: "volleyball = volley + ball——球在空中飞来飞去不能落地的运动！",
      family: ["volley（截击）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "We play volleyball after school.", zh: "我们放学后打排球。" }
      ],
      fun: "排球最初叫 'Mintonette'，1895年由美国人 William Morgan 发明。因为球不断在网上 volley（截击），就改名为 volleyball。",
      usage: "play volleyball（不加 the）。beach volleyball = 沙滩排球。"
    },
    {
      word: "basketball",
      phonetic: "/ˈbɑːskɪtbɔːl/",
      pos: "n.",
      posClass: "n",
      meaning: "篮球",
      root: {
        parts: [
          { text: "basket", type: "root", label: "篮子" },
          { text: "ball", type: "root", label: "球" }
        ],
        explain: "basket（篮子）+ ball（球）= 往篮子里投球的运动 = 篮球！最初的球筐就是真正的桃子篮子。"
      },
      memory: "basketball = basket + ball——把球投进篮子里！最早真的是用桃子篮子当球筐，每次进球还要爬梯子取球！",
      family: ["basket（篮子）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "Let's play basketball.", zh: "我们去打篮球吧。" },
        { en: "Basketball is my favorite sport.", zh: "篮球是我最喜欢的运动。" }
      ],
      fun: "篮球是1891年加拿大人 James Naismith 在美国发明的，最初用的是桃子篮子和足球。直到有人觉得每次进球都要爬梯子取球太蠢了，才把篮子底部剪掉。",
      usage: "play basketball（球类运动前不加 the）。NBA = National Basketball Association。"
    },
    {
      word: "boring",
      phonetic: "/ˈbɔːrɪŋ/",
      pos: "adj.",
      posClass: "adj",
      meaning: "没趣的；令人厌倦的",
      root: { parts: [], explain: "bore（使厌烦）+ -ing = 令人厌烦的。bore 的另一个意思是'钻孔'——无聊就像被一个洞慢慢钻空了一样！" },
      memory: "boring 里有 'bore'（钻孔）——无聊到像被人在脑子上钻孔一样痛苦！",
      family: ["bore（使厌烦）", "bored（感到无聊的）", "boredom（无聊）"],
      synonyms: ["dull（枯燥的）", "tedious（乏味的）"],
      antonyms: ["interesting（有趣的）", "exciting（令人兴奋的）", "fun（有趣的）"],
      sentences: [
        { en: "The movie is boring.", zh: "这部电影很无聊。" },
        { en: "That sounds boring.", zh: "那听起来很没意思。" }
      ],
      fun: "boring vs bored 是经典易错点！boring = 令人无聊的（形容事物），bored = 感到无聊的（形容人）。The class is boring, so I am bored. 绝不能说 I am boring（那意思是'我这个人很无聊'）！",
      usage: "-ing 形容事物：exciting, interesting, boring。-ed 形容人的感受：excited, interested, bored。"
    },
    {
      word: "interesting",
      phonetic: "/ˈɪntrəstɪŋ/",
      pos: "adj.",
      posClass: "adj",
      meaning: "有趣的；引起兴趣的",
      root: {
        parts: [
          { text: "inter-", type: "prefix", label: "在……之间" },
          { text: "est", type: "root", label: "存在/是" },
          { text: "-ing", type: "suffix", label: "令人……的" }
        ],
        explain: "interest 来自拉丁语 interesse = inter（在中间）+ esse（存在）= '存在于其中' = 有关系的、重要的 → 引起兴趣的。"
      },
      memory: "interesting = interest（兴趣）+ -ing。interest 里有 'rest'（休息）——做有趣的事情时你不需要 rest！",
      family: ["interest（兴趣/利息）", "interested（感兴趣的）", "uninteresting（无趣的）"],
      synonyms: ["fascinating（迷人的）", "engaging（吸引人的）"],
      antonyms: ["boring（无聊的）", "dull（枯燥的）"],
      sentences: [
        { en: "This book is very interesting.", zh: "这本书非常有趣。" },
        { en: "How interesting!", zh: "多有趣啊！" }
      ],
      fun: "interest 还有'利息'的意思——银行对你的存款'感兴趣'，所以付你利息(interest)！一个词连接了'兴趣'和'金融'。",
      usage: "be interested in = 对……感兴趣。interesting 形容事物，interested 形容人。"
    },
    {
      word: "difficult",
      phonetic: "/ˈdɪfɪkəlt/",
      pos: "adj.",
      posClass: "adj",
      meaning: "困难的",
      root: {
        parts: [
          { text: "dif-", type: "prefix", label: "不、相反（= dis-）" },
          { text: "ficult", type: "root", label: "拉丁语 facilis = 容易做的" }
        ],
        explain: "dif-（不）+ ficult（容易做的）= 不容易做的 = 困难的。facile（容易的）、facility（设施=方便做事的地方）都是亲戚。"
      },
      memory: "difficult = dif(不) + ficult(容易)——不容易的 = 困难的！和 easy 是反义词，和 simple 也是反义词。",
      family: ["difficulty（困难）", "difficultly（困难地，罕用）"],
      synonyms: ["hard（困难的）", "tough（艰难的）", "challenging（有挑战性的）"],
      antonyms: ["easy（容易的）", "simple（简单的）"],
      sentences: [
        { en: "Math is difficult for me.", zh: "数学对我来说很难。" },
        { en: "It's a difficult question.", zh: "这是一个困难的问题。" }
      ],
      fun: "difficult 和 hard 的区别：difficult 更正式，hard 更口语。但 hard 还有'硬的'意思——hard rock = 硬摇滚/硬石头，意思完全不同！",
      usage: "It's difficult to do sth. = 做某事很困难。have difficulty (in) doing sth."
    },
    {
      word: "fun",
      phonetic: "/fʌn/",
      pos: "n./adj.",
      posClass: "adj",
      meaning: "乐趣；有趣的",
      root: { parts: [], explain: "可能来自中古英语 fon（傻瓜/愚蠢）。最初'找乐子'带有'傻乎乎地玩'的含义，后来贬义消失了。" },
      memory: "fun 只有三个字母却充满了快乐！f-u-n = 'For Us Now!'（为了我们现在的快乐！）",
      family: ["funny（好笑的）", "funfair（游乐场）"],
      synonyms: ["enjoyment（享受）", "pleasure（快乐）", "amusement（娱乐）"],
      antonyms: ["boredom（无聊）"],
      sentences: [
        { en: "Swimming is fun.", zh: "游泳很有趣。" },
        { en: "We had a lot of fun.", zh: "我们玩得很开心。" }
      ],
      fun: "fun vs funny：fun = 有趣好玩的（The game is fun），funny = 好笑的（The joke is funny）。一个是开心，一个是搞笑——别搞混了！",
      usage: "have fun = 玩得开心。for fun = 为了好玩。It's fun to... = 做……很有趣。"
    },
    {
      word: "easy",
      phonetic: "/ˈiːzi/",
      pos: "adj.",
      posClass: "adj",
      meaning: "容易的",
      root: { parts: [], explain: "来自古法语 aisié（舒适的），与 ease（轻松）同源。easy 的核心义是'不费力的'。" },
      memory: "easy 里有 'ease'（轻松）——easy 就是让你感到 ease 的事！",
      family: ["easily（容易地）", "ease（轻松；缓解）", "uneasy（不安的）"],
      synonyms: ["simple（简单的）", "effortless（毫不费力的）"],
      antonyms: ["difficult（困难的）", "hard（困难的）"],
      sentences: [
        { en: "English is easy.", zh: "英语很简单。" },
        { en: "It's easy to learn.", zh: "它很容易学。" }
      ],
      fun: "Easy come, easy go.（来得容易去得快）——关于钱的经典谚语。Take it easy! = 别紧张！/慢慢来！这是美国人的口头禅。",
      usage: "take it easy = 放轻松。easy-going = 随和的。easier said than done = 说起来容易做起来难。"
    },
    {
      word: "sport",
      phonetic: "/spɔːt/",
      pos: "n.",
      posClass: "n",
      meaning: "运动；体育",
      root: { parts: [], explain: "来自古法语 desport = des-（away）+ port（carry）= '把（烦恼）带走' = 消遣娱乐 → 运动。运动的本质就是'把烦恼带走'！" },
      memory: "sport 来自 'disport'（消遣），把 dis 去掉就是 sport——运动让你把烦恼'dis'掉！",
      family: ["sports（运动，常用复数）", "sportsman（运动员）", "sportsmanship（体育精神）", "sporty（爱运动的）"],
      synonyms: ["exercise（锻炼）", "athletics（体育运动）"],
      antonyms: [],
      sentences: [
        { en: "What sport do you like?", zh: "你喜欢什么运动？" },
        { en: "He is good at sports.", zh: "他擅长运动。" }
      ],
      fun: "good sport = 好说话的人/输得起的人。be a good sport! = 别那么小气！这和'体育精神'有关——能接受输赢的人才是真正的运动家。",
      usage: "sports 常用复数形式。do sports = 做运动。a sports car = 跑车。"
    }
  ]
};

if(typeof window!=='undefined'){window.UNIT5=UNIT5;}

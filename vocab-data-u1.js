// Unit 1: My name's Gina. (Starter + Unit 1)
const UNIT1 = {
  id: 1,
  title: "My name's Gina",
  theme: "打招呼与自我介绍",
  color: "#3b82f6",
  words: [
    {
      word: "name",
      phonetic: "/neɪm/",
      pos: "n.",
      posClass: "n",
      meaning: "名字",
      root: {
        parts: [],
        explain: "来自古英语 nama，与德语 Name、拉丁语 nomen 同源。想想'no men without names'——没有名字就不是人！"
      },
      memory: "name 和 'fame'（名声）押韵——有了名字(name)才能有名声(fame)！",
      family: ["名词 name → 动词 name（命名）→ 形容词 nameless（无名的）→ namely（即，也就是说）"],
      synonyms: ["title（头衔）", "label（标签）"],
      antonyms: [],
      sentences: [
        { en: "My name is Gina.", zh: "我的名字叫吉娜。" },
        { en: "What's your name?", zh: "你叫什么名字？" }
      ],
      fun: "在古代文化中，名字被认为有魔力。在《千与千寻》中，忘记自己的名字就会永远被困在神灵世界！",
      usage: "first name = 名，last name / family name = 姓。中国人姓在前名在后，英语恰好相反。"
    },
    {
      word: "nice",
      phonetic: "/naɪs/",
      pos: "adj.",
      posClass: "adj",
      meaning: "令人愉快的；好的",
      root: {
        parts: [],
        explain: "这个词的身世超反转！来自拉丁语 nescius = 'not knowing'（无知的）。中世纪时从'愚蠢的'→'挑剔的'→'精致的'→ 最后变成了'好的'。一个词用了800年从贬义变成褒义！"
      },
      memory: "nice 里藏着 'ice'（冰）——好人给你冰淇淋吃，所以是 nice！",
      family: ["nicely（副词：很好地）", "niceness（名词：友好）"],
      synonyms: ["pleasant（令人愉快的）", "kind（善良的）", "lovely（可爱的）"],
      antonyms: ["mean（刻薄的）", "nasty（讨厌的）"],
      sentences: [
        { en: "Nice to meet you!", zh: "很高兴认识你！" },
        { en: "She is a nice girl.", zh: "她是个好女孩。" }
      ],
      fun: "nice 是英语中最'偷懒'的形容词——当你想不到更好的词时就说 nice。英语老师们常说：'Stop using nice, find a better word!'",
      usage: "Nice to meet you! 是初次见面必说句。回答可以说 Nice to meet you, too!"
    },
    {
      word: "meet",
      phonetic: "/miːt/",
      pos: "v.",
      posClass: "v",
      meaning: "遇见；相识",
      root: {
        parts: [],
        explain: "古英语 metan，原义是'碰到、找到'。与 meeting（会议）同根——会议就是一群人'碰'在一起。"
      },
      memory: "meet 的两个 e 像两个人面对面站着，马上就要 meet（见面）了！",
      family: ["meeting（会议）", "met（过去式）"],
      synonyms: ["encounter（偶遇）", "greet（问候）"],
      antonyms: ["part（分离）", "leave（离开）"],
      sentences: [
        { en: "Nice to meet you!", zh: "很高兴认识你！" },
        { en: "Let's meet at three o'clock.", zh: "我们三点见面吧。" }
      ],
      fun: "英语里 meet 和 meat（肉）发音一模一样！所以有个冷笑话：Where do cows meet? At the meat market!",
      usage: "meet 初次见面用；see 是已经认识后的'见面'。"
    },
    {
      word: "hello",
      phonetic: "/həˈləʊ/",
      pos: "interj.",
      posClass: "interj",
      meaning: "你好",
      root: {
        parts: [],
        explain: "19世纪才出现的词！来自古法语 holà（'停！'的意思）。爱迪生发明电话后推广了 hello 作为接电话用语——在此之前人们说的是 'ahoy'！"
      },
      memory: "hello = hell + o，想象你从地狱(hell)里爬出来第一句话就是 'O! Hello!'",
      family: ["hi（更随意的你好）", "hey（嘿）"],
      synonyms: ["hi（嗨）", "hey（嘿）", "greetings（问候）"],
      antonyms: ["goodbye（再见）", "bye（拜拜）"],
      sentences: [
        { en: "Hello! How are you?", zh: "你好！你怎么样？" },
        { en: "Hello, I'm Bob.", zh: "你好，我是鲍勃。" }
      ],
      fun: "电话发明者贝尔其实想让大家用 'Ahoy!' 接电话，但爱迪生觉得 'Hello' 更好——爱迪生赢了这场'接电话第一句'之战。",
      usage: "正式场合用 Hello，朋友之间用 Hi 或 Hey。打电话必说 Hello。"
    },
    {
      word: "first",
      phonetic: "/fɜːst/",
      pos: "adj./adv.",
      posClass: "adj",
      meaning: "第一的；首先",
      root: {
        parts: [],
        explain: "来自古英语 fyrst，与 'fore'（前面）同源。First = 最前面的那个。"
      },
      memory: "first 里有 'fist'（拳头）——比赛中举起拳头的是第一名！",
      family: ["firstly（首先）", "first-class（一流的）", "first-hand（第一手的）"],
      synonyms: ["initial（最初的）", "primary（主要的）"],
      antonyms: ["last（最后的）", "final（最终的）"],
      sentences: [
        { en: "What's your first name?", zh: "你的名字叫什么？" },
        { en: "She was first in the race.", zh: "她在比赛中得了第一。" }
      ],
      fun: "first lady（第一夫人）指的是总统的妻子。first floor 在英国是二楼，在美国才是一楼——同一个词两个国家理解不同！",
      usage: "first name = 名字，last name = 姓氏。at first = 起初。"
    },
    {
      word: "last",
      phonetic: "/lɑːst/",
      pos: "adj.",
      posClass: "adj",
      meaning: "最后的；上一个的",
      root: {
        parts: [],
        explain: "古英语 latost，是 late（晚的）的最高级。最晚到达的 = 最后的。"
      },
      memory: "last 倒过来读接近 'tsal'——最后(last)一个到的人总是最紧张(tense)的！",
      family: ["lastly（最后）", "lasting（持久的）", "everlasting（永恒的）"],
      synonyms: ["final（最终的）", "ultimate（终极的）"],
      antonyms: ["first（第一的）", "initial（最初的）"],
      sentences: [
        { en: "What's your last name?", zh: "你姓什么？" },
        { en: "This is the last bus.", zh: "这是最后一班公交车。" }
      ],
      fun: "last 有'持续'的意思：The movie lasted 2 hours. 也有'最后'的意思。一词多义是英语的魅力所在。",
      usage: "last name = 姓氏。last night = 昨晚。at last = 终于。"
    },
    {
      word: "friend",
      phonetic: "/frend/",
      pos: "n.",
      posClass: "n",
      meaning: "朋友",
      root: {
        parts: [],
        explain: "古英语 frēond，原义是'爱的人'，来自动词 frēon（去爱）。朋友的本意就是'你爱的人'。"
      },
      memory: "friend 的拼写陷阱！记住：fri-END——一个真正的朋友会陪你到 END（最后）！",
      family: ["friendly（友好的）", "friendship（友谊）", "friendless（没有朋友的）", "unfriendly（不友好的）"],
      synonyms: ["pal（伙伴）", "buddy（哥们）", "mate（伙伴）"],
      antonyms: ["enemy（敌人）", "foe（敌人）", "stranger（陌生人）"],
      sentences: [
        { en: "She is my friend.", zh: "她是我的朋友。" },
        { en: "We are good friends.", zh: "我们是好朋友。" }
      ],
      fun: "friend 这个词拼写非常容易出错！有个经典记忆法：I will be your friEND till the END. 注意 i 在 e 前面！",
      usage: "make friends with sb. = 和某人交朋友。best friend = 最好的朋友（BFF = Best Friends Forever）。"
    },
    {
      word: "China",
      phonetic: "/ˈtʃaɪnə/",
      pos: "n.",
      posClass: "n",
      meaning: "中国",
      root: {
        parts: [],
        explain: "来自秦朝的'秦'(Qin)！经过波斯语和梵语的传播，Qin → Chin → China。china（小写）= 瓷器，因为中国是瓷器的故乡。"
      },
      memory: "China = CHI + NA，'吃哪'——中国人见面爱问'吃了吗'！",
      family: ["Chinese（中国人/中文/中国的）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "I'm from China.", zh: "我来自中国。" },
        { en: "China is a great country.", zh: "中国是一个伟大的国家。" }
      ],
      fun: "英语 china（小写c）意思是'瓷器'。所以 a china shop 是瓷器店，'a bull in a china shop' 形容莽撞的人——公牛进了瓷器店！",
      usage: "国家名首字母大写 China；瓷器小写 china。in China = 在中国。"
    },
    {
      word: "school",
      phonetic: "/skuːl/",
      pos: "n.",
      posClass: "n",
      meaning: "学校",
      root: {
        parts: [],
        explain: "来自希腊语 scholē，原义竟然是'闲暇、休闲'！古希腊人认为只有有闲暇的人才能学习。从'休闲'变成'学校'——讽刺满满。"
      },
      memory: "school 里藏着 'cool'——酷酷的学校！",
      family: ["schoolmate（同学）", "schoolwork（功课）", "preschool（学前班）", "high school（高中）"],
      synonyms: ["academy（学院）", "institute（学院）"],
      antonyms: [],
      sentences: [
        { en: "I go to school every day.", zh: "我每天去上学。" },
        { en: "Our school is very big.", zh: "我们的学校很大。" }
      ],
      fun: "a school of fish 指'一群鱼'——和学校没有任何关系！这是因为来自另一个古荷兰语词 schole（群体）。",
      usage: "go to school = 去上学（不加 the）；go to the school = 去学校那个地方（不一定是上学）。冠词的有无很关键！"
    },
    {
      word: "number",
      phonetic: "/ˈnʌmbə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "号码；数字",
      root: {
        parts: [
          { text: "numer-", type: "root", label: "拉丁语 numerus = 数" }
        ],
        explain: "来自拉丁语 numerus（数目）。numb = 麻木的——手指冻麻了就数不了数(number)了！"
      },
      memory: "number 里有 numb（麻木）——做太多数学题手都麻了！",
      family: ["numerous（许多的）", "numeral（数字的）", "outnumber（数量超过）"],
      synonyms: ["figure（数字）", "digit（位数）"],
      antonyms: [],
      sentences: [
        { en: "What's your phone number?", zh: "你的电话号码是多少？" },
        { en: "Number five is my lucky number.", zh: "5号是我的幸运数字。" }
      ],
      fun: "number 缩写是 No. 或 #。为什么用 No.？因为来自拉丁语 numero 的缩写！",
      usage: "phone number = 电话号码。a number of = 许多（后接复数名词）。"
    },
    {
      word: "telephone",
      phonetic: "/ˈtelɪfəʊn/",
      pos: "n.",
      posClass: "n",
      meaning: "电话",
      root: {
        parts: [
          { text: "tele-", type: "prefix", label: "远的" },
          { text: "phone", type: "root", label: "声音" }
        ],
        explain: "tele（远）+ phone（声音）= 远距离的声音 = 电话！认识了这两个词根，很多词就秒懂了。"
      },
      memory: "tele + phone：把声音传到远方的工具！television = tele + vision（远方的画面）。",
      family: ["phone（电话，简写）", "telephone call（电话通话）"],
      synonyms: ["phone（电话）", "cellphone（手机）"],
      antonyms: [],
      sentences: [
        { en: "What's your telephone number?", zh: "你的电话号码是多少？" }
      ],
      fun: "tele- 家族超庞大：television（电视=远+看）、telegram（电报=远+写）、telescope（望远镜=远+看）。掌握 tele- 就等于认识了一大堆词！",
      usage: "口语中一般直接说 phone。on the phone = 在打电话。"
    },
    {
      word: "family",
      phonetic: "/ˈfæməli/",
      pos: "n.",
      posClass: "n",
      meaning: "家庭；家人",
      root: {
        parts: [],
        explain: "来自拉丁语 familia，原义是'一家的仆人们'，后来才变成'家庭'的意思。"
      },
      memory: "网上流传的解释：Family = Father And Mother I Love You（爸爸妈妈我爱你们）。虽然是后人编的，但很好记！",
      family: ["familiar（熟悉的）", "family tree（家谱）"],
      synonyms: ["household（家庭）", "relatives（亲戚）"],
      antonyms: [],
      sentences: [
        { en: "This is my family.", zh: "这是我的家人。" },
        { en: "My family is big.", zh: "我家人很多。" }
      ],
      fun: "family 做主语时，当整体看用单数动词（My family is happy），当成员看用复数动词（My family are all teachers）。",
      usage: "family name = 姓氏（= last name）。family photo = 全家福。"
    }
  ]
};

if(typeof window!=='undefined'){window.UNIT1=UNIT1;}

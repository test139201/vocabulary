// Module 1: Lost and found (外研版七年级下册)
const UNIT1 = {
  id: 1,
  title: "Lost and found",
  theme: "丢失和找到",
  color: "#3b82f6",
  words: [
    {
      word: "crayon",
      phonetic: "/ˈkreɪən/",
      pos: "n.",
      posClass: "n",
      meaning: "蜡笔",
      root: {
        parts: [],
        explain: "来自法语 craie（粉笔）+ -on（小后缀）。法语 craie 又来自拉丁语 creta（白垩土），就是那种画画用的白色石头。蜡笔就是'小粉笔'进化版！"
      },
      memory: "crayon 谐音'克雷永'——一个叫克雷的人永远在画画，用的就是蜡笔！",
      family: ["crayon drawing（蜡笔画）"],
      synonyms: ["wax pencil（蜡笔）"],
      antonyms: [],
      sentences: [
        { en: "Is this your crayon?", zh: "这是你的蜡笔吗？" },
        { en: "I have a box of crayons in many colours.", zh: "我有一盒好多颜色的蜡笔。" }
      ],
      fun: "世界上最大的蜡笔品牌 Crayola 在美国，他们的工厂每天生产1200万支蜡笔！如果把一年生产的蜡笔排成一排，能绕地球好几圈。",
      usage: "crayon 通常指蜡笔，和 colored pencil（彩色铅笔）不同。a box of crayons = 一盒蜡笔。"
    },
    {
      word: "eraser",
      phonetic: "/ɪˈreɪzə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "橡皮擦",
      root: {
        parts: [
          { text: "e-", type: "prefix", label: "出、去掉" },
          { text: "ras", type: "root", label: "拉丁语 radere = 刮、擦" },
          { text: "-er", type: "suffix", label: "表示工具/做...的东西" }
        ],
        explain: "erase（擦掉）+ -r = 擦掉东西的工具。拉丁语 radere 是'刮'的意思，还衍生出了 razor（剃刀）——都是'刮掉'！"
      },
      memory: "eraser 里有 erase（擦除），加上 -r 变成了'擦除器'，就是橡皮擦！想象用橡皮擦把错误 erase（擦除）掉。",
      family: ["erase（动词：擦掉）", "erasable（形容词：可擦除的）"],
      synonyms: ["rubber（橡皮，英式用法）"],
      antonyms: [],
      sentences: [
        { en: "Can I borrow your eraser?", zh: "我能借你的橡皮擦吗？" },
        { en: "There is an eraser on the desk.", zh: "桌子上有一块橡皮擦。" }
      ],
      fun: "在英国，橡皮擦叫 rubber，但在美国 rubber 指橡胶或雨鞋。所以在美国千万别说'Can I have your rubber?'，会引起误会的！",
      usage: "美式英语用 eraser，英式英语用 rubber。考试中建议写 eraser，更通用。"
    },
    {
      word: "glove",
      phonetic: "/ɡlʌv/",
      pos: "n.",
      posClass: "n",
      meaning: "手套",
      root: {
        parts: [],
        explain: "来自古英语 glōf，可能与 lōf（手掌）有关。维京人戴手套是为了防寒，英国人戴手套是为了礼仪——同一个东西，不同的风格！"
      },
      memory: "glove 谐音'格拉芙'——网球明星格拉芙(Graf)打球要戴手套(glove)！或者把 glove 拆成 g + love，爱(love)的人给你戴上手套(glove)。",
      family: ["gloves（复数：一副手套）", "glovebox（手套箱，汽车里的储物格）"],
      synonyms: ["mitten（连指手套）"],
      antonyms: [],
      sentences: [
        { en: "Whose gloves are these?", zh: "这些是谁的手套？" },
        { en: "It's cold outside. Don't forget your gloves.", zh: "外面很冷，别忘了你的手套。" }
      ],
      fun: "棒球手套叫 baseball glove，拳击手套叫 boxing glove。英语有个说法'fit like a glove'（像手套一样合适），意思是非常合适。",
      usage: "手套通常成对出现，所以常用复数 gloves。a pair of gloves = 一副手套。"
    },
    {
      word: "wallet",
      phonetic: "/ˈwɒlɪt/",
      pos: "n.",
      posClass: "n",
      meaning: "钱包",
      root: {
        parts: [],
        explain: "来自古法语 walet，原义是'旅行包、背包'。中世纪时钱包还是个大袋子挂在腰上，后来才缩小成现在放口袋里的样子。"
      },
      memory: "wallet 谐音'我来它'——'我来'掏'它'付钱！wallet 就是你掏出来付钱的钱包。",
      family: ["e-wallet（电子钱包）"],
      synonyms: ["purse（女式钱包/手提包）"],
      antonyms: [],
      sentences: [
        { en: "I lost my wallet on the bus.", zh: "我把钱包丢在公交车上了。" },
        { en: "Is this wallet yours?", zh: "这个钱包是你的吗？" }
      ],
      fun: "现在很多人用手机支付，wallet 越来越薄了。但 Apple Wallet、Google Wallet 这些电子钱包又让 wallet 这个词火了起来！",
      usage: "wallet 一般指男式折叠钱包；purse 在美式英语中指女式手提包，在英式英语中指小钱包。"
    },
    {
      word: "watch",
      phonetic: "/wɒtʃ/",
      pos: "n.",
      posClass: "n",
      meaning: "手表",
      root: {
        parts: [],
        explain: "来自古英语 wæcce（守夜、看守）。最早的手表是给守夜人用来看时间的工具，所以叫 watch（看守用的东西）。从'看守'变成'看时间的工具'，很有趣吧！"
      },
      memory: "watch 既是'看'也是'手表'——你'看(watch)'手腕上的'手表(watch)'来知道时间！一个词两个意思，完美关联。",
      family: ["watchmaker（钟表匠）", "wristwatch（腕表）", "stopwatch（秒表）"],
      synonyms: ["timepiece（钟表）", "clock（时钟，指大的挂钟/台钟）"],
      antonyms: [],
      sentences: [
        { en: "Whose watch is this?", zh: "这是谁的手表？" },
        { en: "My watch says it's three o'clock.", zh: "我的手表显示三点了。" }
      ],
      fun: "世界上最贵的手表是百达翡丽 Grandmaster Chime，拍卖价超过3100万美元！而现在最流行的 watch 是 Apple Watch 智能手表。",
      usage: "watch 做名词是'手表'，做动词是'观看'。watch TV = 看电视，watch a film = 看电影。注意区分 watch（小的、戴在手上的）和 clock（大的、挂墙上或放桌上的）。"
    },
    {
      word: "whose",
      phonetic: "/huːz/",
      pos: "pron.",
      posClass: "pron",
      meaning: "谁的",
      root: {
        parts: [],
        explain: "来自古英语 hwæs，是 who（谁）的所有格形式。就像 I → my，he → his 一样，who → whose。"
      },
      memory: "whose = who + se，'谁(who)的？'——就是问东西属于哪个人。注意别和 who's（who is 的缩写）搞混！",
      family: ["who（谁）", "whom（谁，宾格）", "whoever（无论谁）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "Whose bag is this?", zh: "这是谁的书包？" },
        { en: "Whose crayons are those on the desk?", zh: "桌上那些蜡笔是谁的？" }
      ],
      fun: "whose 和 who's 发音一模一样，但意思完全不同！whose = 谁的，who's = who is（谁是）。这是英语考试最爱考的易混点之一。",
      usage: "Whose + 名词 + is this/are these? 是失物招领的经典句型。比如：Whose pen is this? 这支笔是谁的？"
    },
    {
      word: "first of all",
      phonetic: "/ˌfɜːst əv ˈɔːl/",
      pos: "adv.",
      posClass: "adv",
      meaning: "首先",
      root: {
        parts: [],
        explain: "first（第一）+ of all（在所有之中）= 在所有事情中第一个 = 首先。是一个非常常用的表达顺序的短语。"
      },
      memory: "first of all = 第一(first) + 所有(all)——在所有事情里排第一的，当然就是'首先'！",
      family: ["first（首先）", "secondly（其次）", "finally（最后）", "above all（最重要的是）"],
      synonyms: ["firstly（首先）", "to begin with（首先）"],
      antonyms: ["lastly（最后）", "finally（最终）"],
      sentences: [
        { en: "First of all, write your name on the paper.", zh: "首先，在纸上写下你的名字。" },
        { en: "First of all, let me welcome everyone.", zh: "首先，让我欢迎大家。" }
      ],
      fun: "英语演讲和作文中最爱用的开头词之一。用了 first of all，听众就知道你接下来还有 second、third 要说——这是一种很好的逻辑信号词！",
      usage: "first of all 用在句首，后面用逗号隔开。通常和 then（然后）、finally（最后）搭配使用，让表达更有条理。"
    },
    {
      word: "lost and found",
      phonetic: "/ˌlɒst ənd ˈfaʊnd/",
      pos: "n.",
      posClass: "n",
      meaning: "失物招领",
      root: {
        parts: [],
        explain: "lost（丢失的）+ and + found（找到的）= 丢了又找到的 = 失物招领。这个词组本身就讲了一个完整的故事：先丢(lost)后找(found)！"
      },
      memory: "lost and found 直译就是'丢了和找到了'——丢了东西去那里找(found)就对了！",
      family: ["lost（丢失的）", "found（找到的）", "lost and found box（失物招领箱）"],
      synonyms: ["lost property（失物招领处，英式用法）"],
      antonyms: [],
      sentences: [
        { en: "Please go to the lost and found office.", zh: "请去失物招领处。" },
        { en: "There are many things in the lost and found box.", zh: "失物招领箱里有很多东西。" }
      ],
      fun: "世界上最大的失物招领中心在日本东京！日本人丢了东西，找回的概率非常高，因为日本人拾金不昧的传统非常强。",
      usage: "lost and found 可以做名词短语用，指失物招领处或失物招领箱。the lost and found office = 失物招领处。"
    },
    {
      word: "mine",
      phonetic: "/maɪn/",
      pos: "pron.",
      posClass: "pron",
      meaning: "我的（名词性物主代词）",
      root: {
        parts: [],
        explain: "来自古英语 mīn，和 my 同源。my 后面要跟名词（my book），mine 单独使用代替'my + 名词'。"
      },
      memory: "mine 和 my 只差一个字母——my 是跟班（后面必须跟名词），mine 是独行侠（自己就能用）！mine 还有'矿'的意思——这个矿是'我的(mine)'！",
      family: ["my（形容词性物主代词：我的）", "myself（反身代词：我自己）"],
      synonyms: [],
      antonyms: ["yours（你的）", "theirs（他们的）"],
      sentences: [
        { en: "This crayon is mine.", zh: "这支蜡笔是我的。" },
        { en: "Is this wallet yours or mine?", zh: "这个钱包是你的还是我的？" }
      ],
      fun: "mine 除了'我的'，还有'矿山、地雷'的意思！Minecraft（我的世界）这个游戏名就是 mine（挖矿）+ craft（技艺）。",
      usage: "mine = my + 名词。比如 This is my book. = This book is mine. 不能说 This is mine book.（错误）"
    },
    {
      word: "yours",
      phonetic: "/jɔːz/",
      pos: "pron.",
      posClass: "pron",
      meaning: "你的；你们的（名词性物主代词）",
      root: {
        parts: [],
        explain: "your（你的）+ -s = yours。英语的名词性物主代词大多在形容词性物主代词后加 -s：her → hers, our → ours, their → theirs。"
      },
      memory: "yours = your + s，your 加了个's'尾巴就能独立使用了！就像小动物长大了不用妈妈带着。",
      family: ["your（你的/你们的）", "yourself（你自己）", "yourselves（你们自己）"],
      synonyms: [],
      antonyms: ["mine（我的）"],
      sentences: [
        { en: "Is this eraser yours?", zh: "这块橡皮擦是你的吗？" },
        { en: "My bag is blue. Yours is red.", zh: "我的书包是蓝色的。你的是红色的。" }
      ],
      fun: "英语书信结尾常写 Yours sincerely（您真诚的）或 Yours faithfully（您忠实的），这里的 yours 是一种礼貌用法。",
      usage: "yours = your + 名词。例如：Is this your pen? → Is this pen yours? 写信时 Yours, ... 是固定结尾格式。"
    },
    {
      word: "hers",
      phonetic: "/hɜːz/",
      pos: "pron.",
      posClass: "pron",
      meaning: "她的（名词性物主代词）",
      root: {
        parts: [],
        explain: "her（她的）+ -s = hers。和 yours 一样的规律，加 -s 就从'跟班'变成'独行侠'。注意 his 比较特殊，形容词性和名词性一样都是 his。"
      },
      memory: "hers = her + s，但注意不是 her's（没有撇号）！这是很多同学容易写错的地方。",
      family: ["her（她的/她）", "herself（她自己）"],
      synonyms: [],
      antonyms: ["his（他的）"],
      sentences: [
        { en: "This purple bag is hers.", zh: "这个紫色的书包是她的。" },
        { en: "My camera is old, but hers is new.", zh: "我的相机旧了，但她的是新的。" }
      ],
      fun: "英语所有名词性物主代词：mine, yours, his, hers, its, ours, theirs。注意 his 不变化，its 也不加 s（因为它本身就是 it + s）。",
      usage: "hers 绝对不能写成 her's！名词性物主代词都没有撇号：mine, yours, his, hers, ours, theirs。"
    },
    {
      word: "tape",
      phonetic: "/teɪp/",
      pos: "n.",
      posClass: "n",
      meaning: "磁带；胶带",
      root: {
        parts: [],
        explain: "来自古英语 tæppa（带子、条状物）。最早指布条或纸条，后来随着科技发展，先有了录音磁带(tape)，又有了胶带(tape)。"
      },
      memory: "tape 谐音'忒跑'——磁带在录音机里忒能跑(转圈)了！或者想象用胶带(tape)把东西粘住不让它'跑'。",
      family: ["tape recorder（录音机）", "tape measure（卷尺）", "videotape（录像带）", "scotch tape（透明胶带）"],
      synonyms: ["ribbon（丝带）", "adhesive tape（胶带）"],
      antonyms: [],
      sentences: [
        { en: "Is this tape yours?", zh: "这卷磁带是你的吗？" },
        { en: "I need some tape to wrap the gift.", zh: "我需要一些胶带来包礼物。" }
      ],
      fun: "磁带虽然几乎被淘汰了，但tape这个词在科技圈依然很常用——backup tape（备份磁带）在数据中心里仍然在工作！有些音乐爱好者也在收藏磁带。",
      usage: "tape 做名词有两个常见意思：磁带（cassette tape）和胶带（sticky tape/adhesive tape）。做动词时表示'录音'或'用胶带粘'。"
    },
    {
      word: "purple",
      phonetic: "/ˈpɜːpl/",
      pos: "adj.",
      posClass: "adj",
      meaning: "紫色的",
      root: {
        parts: [],
        explain: "来自拉丁语 purpura，最初指一种从海螺中提取的紫色染料。在古罗马，只有皇帝才能穿紫色衣服，因为紫色染料太贵了！"
      },
      memory: "purple 谐音'噗噗'——想象一个紫色的泡泡'噗噗'地冒出来！或者 purple 里有'pur'像'漂亮'的谐音，紫色确实很漂亮。",
      family: ["purplish（略带紫色的）"],
      synonyms: ["violet（紫罗兰色的）", "lavender（薰衣草色的，浅紫）"],
      antonyms: [],
      sentences: [
        { en: "She has a purple schoolbag.", zh: "她有一个紫色的书包。" },
        { en: "My favourite colour is purple.", zh: "我最喜欢的颜色是紫色。" }
      ],
      fun: "古罗马时期，制作1克紫色染料需要大约1万只海螺！所以紫色成了皇权的象征。直到今天，英国女王的加冕礼还要穿紫色长袍。",
      usage: "purple 既是形容词（紫色的）也是名词（紫色）。in purple = 穿着紫色衣服。"
    },
    {
      word: "camera",
      phonetic: "/ˈkæmərə/",
      pos: "n.",
      posClass: "n",
      meaning: "照相机",
      root: {
        parts: [],
        explain: "来自拉丁语 camera obscura（暗室）。最早的相机原理就是一个黑暗的房间(camera)，光线从小孔进入，在墙上投出倒影。camera 的本义竟然是'房间'！"
      },
      memory: "camera 谐音'卡美拉'——怪兽卡美拉（Gamera）被照相机(camera)拍下来了！",
      family: ["cameraman（摄影师）", "camera lens（相机镜头）", "camera phone（拍照手机）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "Don't forget to bring your camera.", zh: "别忘了带你的照相机。" },
        { en: "There is a camera in the lost and found box.", zh: "失物招领箱里有一部照相机。" }
      ],
      fun: "世界上第一张照片拍摄于1826年，曝光时间长达8个小时！现在手机一秒就能拍无数张。从 camera obscura（暗箱）到手机摄影，人类用了将近200年。",
      usage: "digital camera = 数码相机。take a photo/picture with a camera = 用照相机拍照。注意是 take a photo，不是 make a photo。"
    },
    {
      word: "mobile phone",
      phonetic: "/ˌməʊbaɪl ˈfəʊn/",
      pos: "n.",
      posClass: "n",
      meaning: "移动电话；手机",
      root: {
        parts: [
          { text: "mobile", type: "root", label: "拉丁语 mobilis = 可移动的" },
          { text: "phone", type: "root", label: "希腊语 phonē = 声音" }
        ],
        explain: "mobile（可移动的）+ phone（电话）= 可以移动的电话 = 手机。phone 来自希腊语'声音'，还衍生出 microphone（麦克风）、telephone（电话）等词。"
      },
      memory: "mobile phone = 移动(mobile)的电话(phone)——可以拿着到处走的电话就是手机！",
      family: ["mobile（可移动的）", "phone（电话）", "smartphone（智能手机）", "cellphone（手机，美式）"],
      synonyms: ["cellphone（手机，美式）", "cell（口语：手机）"],
      antonyms: ["landline（座机）"],
      sentences: [
        { en: "Is this your mobile phone?", zh: "这是你的手机吗？" },
        { en: "Students shouldn't use mobile phones in class.", zh: "学生不应该在课堂上使用手机。" }
      ],
      fun: "世界上第一部手机是1983年的 Motorola DynaTAC 8000X，重达1公斤，像一块砖头。现在的智能手机功能比当年送人上月球的计算机还强大！",
      usage: "英式英语说 mobile phone 或简称 mobile，美式英语说 cellphone 或 cell。在学校通常要求 turn off your mobile phone（关掉手机）。"
    },
    {
      word: "lost",
      phonetic: "/lɒst/",
      pos: "adj.",
      posClass: "adj",
      meaning: "丢失的",
      root: {
        parts: [],
        explain: "是 lose（丢失）的过去分词形式，也用作形容词。来自古英语 losian（毁灭、丢失）。"
      },
      memory: "lost 谐音'老死他'——东西老找不到（lost），要'老死'了也找不着！或者想到迷路了(lost)的感觉。",
      family: ["lose（动词：丢失）", "loser（名词：失败者）", "loss（名词：损失）"],
      synonyms: ["missing（丢失的）", "misplaced（放错地方的）"],
      antonyms: ["found（找到的）"],
      sentences: [
        { en: "I'm looking for my lost watch.", zh: "我在找我丢失的手表。" },
        { en: "The lost boy was crying in the street.", zh: "那个走失的男孩在街上哭。" }
      ],
      fun: "美剧《迷失》(Lost)讲的就是一群人在荒岛上迷路的故事，红遍全球！get lost 除了'迷路'还有'滚开'的粗鲁意思，千万别随便对人说。",
      usage: "get lost = 迷路。I'm lost. = 我迷路了。lost 也可以表示'困惑的'，比如 I'm lost.（我听不懂/我搞不清了）。"
    },
    {
      word: "found",
      phonetic: "/faʊnd/",
      pos: "v.",
      posClass: "v",
      meaning: "找到（find的过去式）",
      root: {
        parts: [],
        explain: "是 find（找到）的过去式和过去分词。find 来自古英语 findan。注意：found 还有另一个意思——'建立、创立'，比如 found a school（创办学校），和 find 的过去式是两个不同的词！"
      },
      memory: "found 谐音'放的'——找到(found)了！原来是放(found)在这里的！",
      family: ["find（动词原形：找到）", "finder（发现者）", "finding（发现/调查结果）"],
      synonyms: ["discovered（发现了）", "located（找到位置了）"],
      antonyms: ["lost（丢失了）"],
      sentences: [
        { en: "I found a wallet on the playground.", zh: "我在操场上捡到了一个钱包。" },
        { en: "Have you found your eraser?", zh: "你找到你的橡皮擦了吗？" }
      ],
      fun: "found 有两个完全不同的来源：① find 的过去式（找到）；② 来自拉丁语 fundare（建立），如 foundation（基金会/地基）。考试时要根据上下文判断是哪个意思！",
      usage: "find-found-found 是不规则动词变化。found 做'建立'讲时是规则动词：found-founded-founded。"
    },
    {
      word: "hundred",
      phonetic: "/ˈhʌndrəd/",
      pos: "num.",
      posClass: "num",
      meaning: "百",
      root: {
        parts: [],
        explain: "来自古英语 hundred，与拉丁语 centum（百）和希腊语 hekaton（百）有远亲关系。cent（分）、century（世纪=100年）、percent（百分之）都来自拉丁语的'百'。"
      },
      memory: "hundred 谐音'杭拽的'——杭州有好几百(hundred)个景点，真拽的！",
      family: ["hundreds of（数百个）", "hundredth（第一百）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "There are about two hundred students in our school.", zh: "我们学校大约有两百名学生。" },
        { en: "Hundreds of people come to the lost and found office every day.", zh: "每天有数百人来失物招领处。" }
      ],
      fun: "在英语中，100分不说 one hundred points，考试满分一般说 full marks 或 a perfect score。a hundred percent（百分之百）表示完全同意。",
      usage: "具体数字时 hundred 不加 s：two hundred（两百）。表示'数百'时加 s 加 of：hundreds of（数以百计的）。"
    },
    {
      word: "thousand",
      phonetic: "/ˈθaʊznd/",
      pos: "num.",
      posClass: "num",
      meaning: "千",
      root: {
        parts: [],
        explain: "来自古英语 þūsend，可能和'膨胀、大量'有关。在古代人们很少数到千，所以 thousand 也常用来表示'非常多'的意思。"
      },
      memory: "thousand 谐音'扫人的'——一千(thousand)人的大扫除，扫人的场面！注意 th 的发音要咬舌头。",
      family: ["thousands of（数千个）", "thousandth（第一千）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "There are over a thousand books in our library.", zh: "我们图书馆里有一千多本书。" },
        { en: "Thousands of things are lost on buses every year.", zh: "每年有数千件物品在公交车上遗失。" }
      ],
      fun: "英语写大数时用逗号分隔：1,000（一千），1,000,000（一百万）。而中文用万来分：1万=10,000。这个差异经常让中国学生头疼！",
      usage: "和 hundred 一样：three thousand（三千），但 thousands of（成千上万的）。th 的发音 /θ/ 要把舌尖放在上下牙之间。"
    },
    {
      word: "strange",
      phonetic: "/streɪndʒ/",
      pos: "adj.",
      posClass: "adj",
      meaning: "奇怪的",
      root: {
        parts: [],
        explain: "来自古法语 estrange，原义是'外来的、陌生的'。和 stranger（陌生人）同根——陌生的东西总让人觉得'奇怪'！"
      },
      memory: "strange 里有 'range'（范围）——超出正常范围(range)的事情就是奇怪的(strange)！",
      family: ["stranger（陌生人）", "strangely（奇怪地）", "strangeness（奇怪）"],
      synonyms: ["odd（古怪的）", "weird（怪异的）", "unusual（不寻常的）"],
      antonyms: ["normal（正常的）", "ordinary（普通的）"],
      sentences: [
        { en: "There are some strange things in the lost and found office.", zh: "失物招领处有一些奇怪的东西。" },
        { en: "That's strange! My pen was here a moment ago.", zh: "真奇怪！我的笔刚才还在这里。" }
      ],
      fun: "Doctor Strange（奇异博士）是漫威超级英雄，他的名字就来自 strange（奇异的）。他本来是个外科医生，后来成了掌握神秘魔法的至尊法师！",
      usage: "strange 强调'出乎意料的奇怪'；weird 更强调'怪异、让人不舒服'。It's strange that...（奇怪的是...）是常用句型。"
    },
    {
      word: "boat",
      phonetic: "/bəʊt/",
      pos: "n.",
      posClass: "n",
      meaning: "船",
      root: {
        parts: [],
        explain: "来自古英语 bāt，和古挪威语 bátr 同源。维京人是航海民族，这个词传遍了整个北欧。boat 一般指小船，大船用 ship。"
      },
      memory: "boat 里有个'oat'（燕麦）——在小船(boat)上吃燕麦(oat)！或者 b + oat = boat。",
      family: ["boating（划船）", "motorboat（摩托艇）", "sailboat（帆船）", "rowboat（划艇）"],
      synonyms: ["vessel（船只）", "craft（船）"],
      antonyms: [],
      sentences: [
        { en: "There is a boat on the river.", zh: "河上有一条船。" },
        { en: "Someone left a toy boat at the lost and found office.", zh: "有人在失物招领处留下了一条玩具船。" }
      ],
      fun: "英语有个说法'We're all in the same boat'（我们都在同一条船上），意思是大家处境相同，要同舟共济。和中文的'同舟共济'意思很像！",
      usage: "boat 指小船，ship 指大船（如轮船、货船）。by boat = 乘船。go boating = 去划船。"
    },
    {
      word: "duck",
      phonetic: "/dʌk/",
      pos: "n.",
      posClass: "n",
      meaning: "鸭",
      root: {
        parts: [],
        explain: "来自古英语 dūce（潜水者），因为鸭子喜欢把头扎进水里觅食。duck 做动词也有'低头、躲避'的意思，和鸭子低头钻水的动作一模一样！"
      },
      memory: "duck 谐音'大颗'——鸭子(duck)下了一个大颗(duck)的蛋！",
      family: ["duckling（小鸭子）", "ducky（可爱的，口语）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "There are some ducks on the lake.", zh: "湖上有一些鸭子。" },
        { en: "A rubber duck was found in the lost and found box.", zh: "失物招领箱里发现了一只橡皮鸭。" }
      ],
      fun: "《丑小鸭》(The Ugly Duckling)是安徒生最著名的童话之一。英语中 duck 做动词是'低头躲避'——想象鸭子把头低下去钻进水里的样子！在板球中，得零分叫 a duck（鸭蛋）。",
      usage: "duck 做动词时是'低头、躲避'。Donald Duck = 唐老鸭。rubber duck = 橡皮鸭（泡澡玩具）。"
    },
    {
      word: "pig",
      phonetic: "/pɪɡ/",
      pos: "n.",
      posClass: "n",
      meaning: "猪",
      root: {
        parts: [],
        explain: "来自古英语 picga，词源不太确定。有趣的是，活着的动物叫 pig（日耳曼语），做成肉后叫 pork（来自法语 porc）。这是因为1066年诺曼征服后，说法语的贵族吃肉，说英语的农民养猪！"
      },
      memory: "pig 谐音'屁哥'——猪就是那个爱放屁的哥们儿！小猪佩奇(Peppa Pig)大家都认识吧。",
      family: ["piggy（小猪）", "pigsty（猪圈）", "piglet（猪崽）", "pigtail（辫子）"],
      synonyms: ["hog（肥猪）", "swine（猪，正式用法）"],
      antonyms: [],
      sentences: [
        { en: "The pig is very cute.", zh: "这只猪非常可爱。" },
        { en: "There is a toy pig in the lost and found box.", zh: "失物招领箱里有一只玩具猪。" }
      ],
      fun: "英语中 pig 常有贬义，说人 pig 是说他脏或贪吃。但在中文里猪还有'可爱、幸福'的含义。Peppa Pig（小猪佩奇）让全世界孩子都爱上了猪！piggy bank = 猪形储蓄罐。",
      usage: "pig 在英语中常有负面含义：eat like a pig（吃相难看）。pigtail（猪尾巴）在英语中指辫子。guinea pig = 豚鼠（也指实验对象）。"
    },
    {
      word: "sausage",
      phonetic: "/ˈsɒsɪdʒ/",
      pos: "n.",
      posClass: "n",
      meaning: "香肠",
      root: {
        parts: [],
        explain: "来自拉丁语 salsus（加了盐的），通过古法语 saussiche 传入英语。香肠就是'加了盐腌制的肉'，这完美描述了香肠的制作过程！同源词 sauce（酱汁）和 salad（沙拉）也和'盐'有关。"
      },
      memory: "sausage 谐音'烧死它'——把香肠(sausage)放在火上'烧'，烤香肠太好吃了！",
      family: ["sausage roll（香肠卷）", "sausage dog（腊肠犬，口语）"],
      synonyms: ["frankfurter（法兰克福香肠）", "hot dog（热狗）"],
      antonyms: [],
      sentences: [
        { en: "Would you like a sausage for breakfast?", zh: "你早餐想来一根香肠吗？" },
        { en: "There are fifteen kilos of sausages at the New York lost and found office!", zh: "纽约失物招领处有十五公斤香肠！" }
      ],
      fun: "德国是世界香肠之国，有超过1500种香肠！英式早餐(English breakfast)里必须有香肠。sausage dog（腊肠犬）就是因为身体长得像香肠而得名。",
      usage: "sausage 可数名词：a sausage, two sausages。hot dog 其实就是夹了香肠的面包。silly sausage（傻香肠）是英国人对小孩的亲切称呼。"
    }
  ]
};

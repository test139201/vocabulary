// Unit 6: Around town (Module 6 外研版七年级下册)
const UNIT6 = {
  id: 6,
  title: "Around town",
  theme: "环游城镇",
  color: "#ec4899",
  words: [
    {
      word: "bank",
      phonetic: "/bæŋk/",
      pos: "n.",
      posClass: "n",
      meaning: "银行",
      root: {
        parts: [],
        explain: "来自意大利语 banca（长凳、柜台）。中世纪意大利的钱商们在大街上摆一张长凳做生意，这张长凳就叫 banca。后来长凳变成了银行！如果钱商破产了，人们就把他的长凳砸了——这就是 bankrupt（破产）的来源：banca + rotta（破碎的）！"
      },
      memory: "bank 谐音'办客'——银行是'办理客户'业务的地方！也可以记：bank 还有'河岸'的意思，河岸和银行都是'边'。",
      family: ["banker（银行家）", "banking（银行业）", "bankrupt（破产的）", "bank account（银行账户）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "The bank is opposite the supermarket.", zh: "银行在超市对面。" },
        { en: "My father works in a bank.", zh: "我父亲在银行工作。" }
      ],
      fun: "bank 有两个完全不同的意思：银行和河岸。这两个意思来自不同的语言！'银行'来自意大利语，'河岸'来自古北欧语。英语中这种长得一样但来源不同的词叫'同形异源词'(homonym)。",
      usage: "go to the bank = 去银行。bank 还指'河岸'：on the bank of the river = 在河岸上。blood bank = 血库。"
    },
    {
      word: "restaurant",
      phonetic: "/ˈrestrɒnt/",
      pos: "n.",
      posClass: "n",
      meaning: "餐馆",
      root: {
        parts: [],
        explain: "来自法语 restaurer（恢复精力）。1765年巴黎一位汤店老板在门口挂了个牌子：'来这里恢复(restaurer)你疲惫的胃吧！'这就是世界上第一家'餐馆'(restaurant)。所以餐馆的原义是'恢复体力的地方'。"
      },
      memory: "restaurant 拼写较长，拆开记：rest（休息）+ au + rant——在餐馆里休息(rest)一下，别抱怨(rant)了，吃饭吧！",
      family: ["restaurateur（餐馆老板）"],
      synonyms: ["eatery（餐馆）", "diner（小餐馆）", "café（咖啡馆）"],
      antonyms: [],
      sentences: [
        { en: "Is there a restaurant near here?", zh: "这附近有餐馆吗？" },
        { en: "Let's have lunch at that Chinese restaurant.", zh: "我们去那家中餐馆吃午饭吧。" }
      ],
      fun: "restaurant 是中国学生最容易拼错的单词之一！注意中间是 -tau-，不是 -tua-。小窍门：记住法语发音就不会拼错了。全世界米其林三星餐厅最多的城市是东京，不是巴黎！",
      usage: "at a restaurant = 在餐馆。go to a restaurant = 去餐馆吃饭。restaurant 的拼写是难点，注意 -au- 的位置！fast food restaurant = 快餐店。"
    },
    {
      word: "opposite",
      phonetic: "/ˈɒpəzɪt/",
      pos: "prep.",
      posClass: "prep",
      meaning: "在...对面",
      root: {
        parts: ["op-（=ob-，朝向）", "posite（放置）"],
        explain: "ob-（朝向）+ posite（放置，来自拉丁语 ponere）= 放在对面 = 在对面。同根词有 position（位置=放置的地方）、deposit（存款=放下去）、compose（作曲=放在一起）。"
      },
      memory: "opposite 里有 'oppo'——'对对'碰！两样东西面对面就是 opposite（对面的）。",
      family: ["opposition（反对；对面）", "oppose（反对）", "opposed（反对的）"],
      synonyms: ["across from（在...对面）", "facing（面对）"],
      antonyms: ["beside（在旁边）", "next to（紧挨着）"],
      sentences: [
        { en: "The bank is opposite the park.", zh: "银行在公园对面。" },
        { en: "She sat opposite me on the bus.", zh: "她在公交车上坐在我对面。" }
      ],
      fun: "opposite 还可以作形容词和名词！形容词：opposite direction（相反方向）。名词：Hot is the opposite of cold.（热是冷的反义词。）一个词三种词性，是不是很'对面'——完全不同！",
      usage: "作介词：opposite the school = 在学校对面。作形容词：the opposite side = 对面那边。作名词：the opposite of... = ...的反义词。"
    },
    {
      word: "between",
      phonetic: "/bɪˈtwiːn/",
      pos: "prep.",
      posClass: "prep",
      meaning: "在...之间",
      root: {
        parts: ["be-（在）", "tween（=twain，两者）"],
        explain: "be-（在）+ tween（两者，和 two/twin 同源）= 在两者之间。tween 和 two（二）、twin（双胞胎）、twice（两次）都是亲戚——都跟'二'有关。"
      },
      memory: "be + tween = be（在）+ two（二）的变形 = 在两者之间！between 里藏着 'two'(二) 的影子。",
      family: ["in-between（中间的）"],
      synonyms: ["amid（在...之中）"],
      antonyms: ["outside（在...外面）"],
      sentences: [
        { en: "The bookshop is between the bank and the restaurant.", zh: "书店在银行和餐馆之间。" },
        { en: "There is a garden between the two buildings.", zh: "两栋楼之间有一个花园。" }
      ],
      fun: "between 用于两者之间，among 用于三者或三者以上之间——但实际上现代英语中这个界限已经很模糊了。不过考试中还是要按传统用法来！between you and me = 就我们俩之间说（保密的意思）。",
      usage: "between A and B = 在A和B之间。注意 between 一般用于两者之间，三者以上用 among。between you and me = 你我之间（表示保密）。"
    },
    {
      word: "along",
      phonetic: "/əˈlɒŋ/",
      pos: "prep.",
      posClass: "prep",
      meaning: "沿着",
      root: {
        parts: ["a-（在）", "long（长的）"],
        explain: "a-（在）+ long（长的）= 沿着长的方向走 = 沿着。这个词的构造非常直观：沿着一条'长'路走就是 along。"
      },
      memory: "a + long（长的）——沿着(along)一条长长的(long)路走！这个记忆法太简单了。",
      family: ["alongside（在旁边）", "all along（一直）"],
      synonyms: ["down（沿着）"],
      antonyms: [],
      sentences: [
        { en: "Walk along the street and you'll see the bank.", zh: "沿着这条街走你就会看到银行。" },
        { en: "There are many trees along the river.", zh: "河边有很多树。" }
      ],
      fun: "come along = 一起来/跟上。get along with = 和...相处融洽。all along = 一直、始终。along 的搭配非常丰富！电影里常听到：'Come along!' = '快跟上！'",
      usage: "walk along the road = 沿着路走。along 还用在短语中：get along with sb = 和某人相处融洽。come along = 跟来/一起来。"
    },
    {
      word: "turn",
      phonetic: "/tɜːn/",
      pos: "v.",
      posClass: "v",
      meaning: "转向；转弯",
      root: {
        parts: [],
        explain: "来自拉丁语 tornare（用车床加工），车床就是把东西'转'着削。后来引申为一切'转动、转向'的动作。和 tornado（龙卷风）同源——龙卷风就是一直在'转'！"
      },
      memory: "turn 谐音'特恩'——特别恩爱的情侣转弯(turn)时会手牵手！也可以记：U-turn = U型转弯，开车时常见。",
      family: ["turning（转弯处）", "return（返回）", "overturn（推翻）"],
      synonyms: ["rotate（旋转）", "spin（旋转）"],
      antonyms: [],
      sentences: [
        { en: "Turn left at the traffic lights.", zh: "在红绿灯处左转。" },
        { en: "Turn right and you'll see the cinema.", zh: "右转你就会看到电影院。" }
      ],
      fun: "英语里 turn 有很多有趣的搭配：turn on/off（开/关）、turn up/down（调大/调小）、turn into（变成）。灰姑娘的南瓜马车到了12点就 turn into（变回）南瓜了！It's my turn. = 轮到我了。",
      usage: "turn left/right = 左转/右转。turn 还有'轮次'的意思：It's your turn. = 轮到你了。take turns = 轮流。"
    },
    {
      word: "across",
      phonetic: "/əˈkrɒs/",
      pos: "prep.",
      posClass: "prep",
      meaning: "穿过",
      root: {
        parts: ["a-（在）", "cross（十字；交叉）"],
        explain: "a-（在）+ cross（十字形地）= 交叉穿过。想象你在一个十字路口(cross)从这边走到那边，就是 across。表示在平面上'横穿'。"
      },
      memory: "a + cross（十字/穿过）——从十字路口的一边到另一边就是穿过(across)！across 里就藏着 cross。",
      family: ["cross（穿过；十字）", "crossing（十字路口）", "crossroad（十字路口）"],
      synonyms: ["through（穿过）", "over（越过）"],
      antonyms: [],
      sentences: [
        { en: "Walk across the bridge.", zh: "走过这座桥。" },
        { en: "The school is across the road.", zh: "学校在马路对面。" }
      ],
      fun: "across 和 through 都是'穿过'，但有区别！across 是在表面上穿过（如过马路、过桥），through 是从内部穿过（如穿过森林、隧道）。想象 across 是2D的穿越，through 是3D的穿越！",
      usage: "across 表示从一边到另一边穿过表面：walk across the street = 穿过街道。across from = 在对面，等于 opposite。注意区分 across（表面穿过）和 through（内部穿过）。"
    },
    {
      word: "cross",
      phonetic: "/krɒs/",
      pos: "v.",
      posClass: "v",
      meaning: "穿过",
      root: {
        parts: [],
        explain: "来自拉丁语 crux（十字架），基督教的十字架形状代表'交叉'。从'交叉'引申出'穿过'——穿过马路就是与马路形成一个交叉(cross)。"
      },
      memory: "cross 就是'十字'——红十字会(Red Cross)的标志就是十字。穿过(cross)马路就像在路上画了一个十字。",
      family: ["crossing（十字路口；人行横道）", "crosswalk（人行横道）", "across（穿过）", "crossword（填字游戏）"],
      synonyms: ["go across（穿过）", "traverse（穿越）"],
      antonyms: [],
      sentences: [
        { en: "Be careful when you cross the road.", zh: "过马路时要小心。" },
        { en: "We crossed the river by boat.", zh: "我们乘船渡过了河。" }
      ],
      fun: "cross 除了'穿过'还有'生气的'意思！Don't be cross with me! = 别生我的气！另外，crossword puzzle（填字游戏）是因为格子呈十字交叉(cross)排列。中国学生最爱的 cross out = 划掉/删除。",
      usage: "cross the road/river/bridge = 穿过马路/河/桥。cross 作动词时和 across 作介词意思相近：cross the road = walk across the road。"
    },
    {
      word: "towards",
      phonetic: "/təˈwɔːdz/",
      pos: "prep.",
      posClass: "prep",
      meaning: "朝；向；朝着",
      root: {
        parts: ["to（向）", "-ward(s)（方向）"],
        explain: "to（向）+ -ward（方向后缀）+ -s = 朝着某个方向。-ward 是一个表示方向的古老后缀：forward（向前）、backward（向后）、upward（向上）、downward（向下）。"
      },
      memory: "to（向）+ wards（方向）= towards（朝着）。记住 -ward(s) 是方向后缀就好：towards = 朝向！",
      family: ["toward（朝向，美式拼写）", "forward（向前）", "backward（向后）", "inward（向内）", "outward（向外）"],
      synonyms: ["to（向）", "in the direction of（朝...方向）"],
      antonyms: ["away from（远离）"],
      sentences: [
        { en: "Walk towards the park and turn left.", zh: "朝公园方向走然后左转。" },
        { en: "The cat ran towards me.", zh: "猫朝我跑过来了。" }
      ],
      fun: "towards 是英式拼写，toward 是美式拼写——多一个 s 少一个 s 都可以。类似的还有 forwards/forward、backwards/backward。英式英语喜欢加 s，美式英语喜欢省掉。",
      usage: "towards 表示方向，不一定到达目的地：walk towards the school（朝学校走去，可能没走到）。towards 还可以表示态度：attitude towards = 对...的态度。"
    },
    {
      word: "tour",
      phonetic: "/tʊə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "旅行；旅游",
      root: {
        parts: [],
        explain: "来自拉丁语 tornus（车床的转盘），经法语 tour（转圈）进入英语。旅行就是'转一圈'回来——出发、游览、回家，像转了一个圈。tour 和 turn（转）是同源词！"
      },
      memory: "tour 谐音'途儿'——旅途(tour)中走的路！也可以联想 tourist（游客）——旅游(tour)的人(ist)。",
      family: ["tourist（游客）", "tourism（旅游业）", "tour guide（导游）"],
      synonyms: ["trip（旅行）", "journey（旅程）", "travel（旅行）"],
      antonyms: [],
      sentences: [
        { en: "We went on a tour of the old town.", zh: "我们游览了老城区。" },
        { en: "The tour guide showed us around the museum.", zh: "导游带我们参观了博物馆。" }
      ],
      fun: "Grand Tour（大旅行）是17-18世纪欧洲贵族子弟的'毕业旅行'——他们会花一两年时间游遍法国、意大利等国。这是现代旅游业的起源！现在 tour 也指乐队巡演：The band is on a world tour.（乐队正在世界巡演。）",
      usage: "go on a tour = 去旅行。a tour of... = 游览...。tour guide = 导游。注意 tour/trip/journey/travel 的区别：tour 强调'游览'，trip 强调'短途往返'，journey 强调'长途旅程'。"
    },
    {
      word: "square",
      phonetic: "/skweə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "广场",
      root: {
        parts: [],
        explain: "来自拉丁语 exquadra（使成方形），ex-（使...）+ quadra（四方形）。广场通常是四方形的空地，所以叫 square。quadra 和 four（四）、quarter（四分之一）都有关。"
      },
      memory: "square = 正方形 = 广场。城市里的广场通常就是一块'方形'(square)的空地！天安门广场 = Tian'anmen Square。",
      family: ["squared（平方的）", "squarely（直接地）"],
      synonyms: ["plaza（广场）", "piazza（意式广场）"],
      antonyms: [],
      sentences: [
        { en: "Let's meet at the square.", zh: "我们在广场见面吧。" },
        { en: "Tian'anmen Square is very large.", zh: "天安门广场非常大。" }
      ],
      fun: "全世界著名的广场：Times Square（时代广场，纽约）、Tian'anmen Square（天安门广场，北京）、Red Square（红场，莫斯科）、Trafalgar Square（特拉法加广场，伦敦）。在数学中 square 还指'平方'：3 squared = 9。",
      usage: "square 作名词表示广场或正方形。square 还是数学术语：square = 平方，3² = three squared。Times Square 不加 the，但 the Red Square 要加 the。"
    },
    {
      word: "right",
      phonetic: "/raɪt/",
      pos: "adv.",
      posClass: "adv",
      meaning: "右边；右方",
      root: {
        parts: [],
        explain: "来自古英语 riht（直的、正确的），因为古人认为右手是'正确的'手。在很多文化中，右边被视为吉利的一方。所以 right 既有'右边'又有'正确'的意思。"
      },
      memory: "right = 右边 = 正确。古人认为右手是'对的'(right)手！所以 right 一个词两个意思。",
      family: ["right-hand（右手的）", "right-wing（右翼的）", "rightly（正当地）"],
      synonyms: [],
      antonyms: ["left（左边）", "wrong（错误的）"],
      sentences: [
        { en: "Turn right at the corner.", zh: "在拐角处右转。" },
        { en: "The cinema is on your right.", zh: "电影院在你右边。" }
      ],
      fun: "为什么 right 既表示'右边'又表示'正确'？因为历史上大多数人是右撇子，右手被认为是'灵巧的、正确的'。而 left 来自古英语'虚弱的'——左撇子在古代受到了不公正的歧视！",
      usage: "turn right = 右转。on the right = 在右边。right 还有'正确'的意思：That's right! = 没错！all right = 好的。human rights = 人权。"
    },
    {
      word: "left",
      phonetic: "/left/",
      pos: "adj.",
      posClass: "adj",
      meaning: "左边的；左方的",
      root: {
        parts: [],
        explain: "来自古英语 lyft（虚弱的、无用的）。古代人认为左手不如右手灵巧，所以'左'就和'弱'联系在一起。这种偏见在很多语言中都有体现——拉丁语的'左'是 sinister，现在指'邪恶的'！"
      },
      memory: "left = 左边 = leave 的过去式（离开了）。可以这样记：向左(left)转，把过去(left)抛在身后！",
      family: ["left-hand（左手的）", "left-wing（左翼的）", "lefty（左撇子）"],
      synonyms: [],
      antonyms: ["right（右边的）"],
      sentences: [
        { en: "Turn left and go straight.", zh: "左转然后直走。" },
        { en: "The library is on your left.", zh: "图书馆在你左边。" }
      ],
      fun: "left 还是 leave（离开）的过去式！'I left' = 我离开了。世界上大约10%的人是左撇子(left-handed)。有趣的是，在网球和拳击中，左撇子往往有优势，因为对手不习惯他们的角度！",
      usage: "on the left = 在左边。turn left = 左转。注意 left 还是 leave 的过去式：I left my book at school.（我把书忘在学校了。）"
    },
    {
      word: "street",
      phonetic: "/striːt/",
      pos: "n.",
      posClass: "n",
      meaning: "街道",
      root: {
        parts: [],
        explain: "来自拉丁语 strata（铺过的路），via strata = 铺好的道路。古罗马人是修路高手，他们铺的路(strata)穿越整个欧洲，很多至今还在使用！英语的 street 就从这些罗马大道传承而来。"
      },
      memory: "street 里有 'tree'（树）——街道(street)两旁种满了树(tree)！",
      family: ["streetlight（路灯）", "streetcar（有轨电车）"],
      synonyms: ["road（道路）", "avenue（大道）", "lane（小巷）"],
      antonyms: [],
      sentences: [
        { en: "Go along this street and turn left.", zh: "沿着这条街走然后左转。" },
        { en: "There are many shops on both sides of the street.", zh: "街道两边有很多商店。" }
      ],
      fun: "street 和 road 有区别吗？一般来说 street 是城市里两旁有建筑的道路，road 是连接两地之间的道路。Wall Street（华尔街）是世界金融中心，因为17世纪荷兰人在那里建了一面墙(wall)。",
      usage: "in the street = 在街上（英式）。on the street = 在街上（美式）。street 通常指城市里两旁有建筑的道路，road 指较大的或城外的道路。"
    },
    {
      word: "straight",
      phonetic: "/streɪt/",
      pos: "adv.",
      posClass: "adv",
      meaning: "一直地",
      root: {
        parts: [],
        explain: "来自古英语 streht，是 stretch（伸展）的过去分词形式——'被拉直的'就是'直的'。stretch → straight，拉伸到极致就是笔直！"
      },
      memory: "str + eight——8个人站成一条直线(straight)！也可以记 straight 里有 'right'(正确)——走正确的路就是直走(go straight)！",
      family: ["straighten（弄直）", "straightforward（直接的；简单的）"],
      synonyms: ["directly（直接地）"],
      antonyms: ["crooked（弯曲的）", "curved（弯曲的）"],
      sentences: [
        { en: "Go straight ahead and you'll find the post office.", zh: "一直往前走你就会找到邮局。" },
        { en: "The road goes straight through the town.", zh: "这条路径直穿过小镇。" }
      ],
      fun: "straight 和 street 长得很像但发音不同！straight /streɪt/，street /striːt/。straight A student = 全A学生（成绩全是A）。straight face = 面无表情（强忍着不笑）。",
      usage: "go straight = 直走。go straight ahead = 一直往前走。straight 还作形容词表示'直的、连续的'：a straight line（直线）、three straight wins（三连胜）。"
    },
    {
      word: "middle",
      phonetic: "/ˈmɪdl/",
      pos: "n.",
      posClass: "n",
      meaning: "中间；中部",
      root: {
        parts: [],
        explain: "来自古英语 middel，和 mid（中间的）同源。与德语 Mittel 同源。middle 就是 mid（中间）+ -le（小后缀），指'正中间的位置'。"
      },
      memory: "middle 里有 'mid'（中间）——middle 就是'中间'！middle school = 中学 = 在小学和高中'中间'的学校。",
      family: ["mid（中间的）", "midnight（午夜）", "midday（正午）", "midterm（期中）"],
      synonyms: ["center（中心）", "centre（中心，英式）"],
      antonyms: ["edge（边缘）", "side（侧面）"],
      sentences: [
        { en: "There is a fountain in the middle of the square.", zh: "广场中间有一个喷泉。" },
        { en: "I sit in the middle of the classroom.", zh: "我坐在教室中间。" }
      ],
      fun: "Middle Ages = 中世纪（约5-15世纪），因为它在古代(ancient times)和近代(modern times)的'中间'。Middle East = 中东，因为从欧洲看，它在'远东'(Far East)和欧洲的中间。",
      usage: "in the middle of = 在...中间。middle school = 中学。middle name = 中间名（西方人名字中的中间部分）。注意 in the middle of 后面可以接时间：in the middle of the night（在半夜）。"
    },
    {
      word: "past",
      phonetic: "/pɑːst/",
      pos: "prep.",
      posClass: "prep",
      meaning: "经过",
      root: {
        parts: [],
        explain: "past 是 pass（经过）的古老形式。pass 来自拉丁语 passus（步伐），走过一步就是'经过'。past 作介词表示'经过'，作名词表示'过去'——已经'走过'的时间。"
      },
      memory: "past 和 pass（经过）是一家人！past = pass + t。走过(pass)的时间就是过去(past)！",
      family: ["pass（经过）", "passage（通道）", "passenger（乘客）", "passport（护照）"],
      synonyms: ["by（经过）", "beyond（超过）"],
      antonyms: [],
      sentences: [
        { en: "Walk past the bank and you'll see the cinema.", zh: "走过银行你就会看到电影院。" },
        { en: "It's half past seven.", zh: "现在是七点半。" }
      ],
      fun: "half past seven = 七点半——half past 是英式说时间的方式。past 作名词指'过去'：in the past = 在过去。past tense = 过去时态——英语语法课上的老朋友！",
      usage: "walk/go past = 走过/经过。half past + 数字 = ...点半（英式时间表达）。past 作名词 = 过去：in the past（在过去）。past 作形容词 = 过去的：past experience（过去的经验）。"
    },
    {
      word: "later",
      phonetic: "/ˈleɪtə(r)/",
      pos: "adv.",
      posClass: "adv",
      meaning: "以后；后来",
      root: {
        parts: ["late（晚的）", "-er（比较级后缀）"],
        explain: "late（晚的）+ -er（比较级后缀）= 更晚的/以后的。later 就是 late 的比较级——比现在更晚的时间就是'以后'。"
      },
      memory: "late（迟的）+ r = later（更迟 = 以后）。See you later! = 回头见！——以后(later)再见面。",
      family: ["late（晚的）", "latest（最新的）", "lately（近来）", "latter（后者）"],
      synonyms: ["afterwards（后来）", "subsequently（随后）"],
      antonyms: ["earlier（更早）", "before（以前）"],
      sentences: [
        { en: "See you later!", zh: "回头见！" },
        { en: "I'll tell you later.", zh: "我以后再告诉你。" }
      ],
      fun: "'See you later, alligator!' 是一句经典的英语俏皮话，回答是 'After a while, crocodile!'（过一会儿见，鳄鱼！）这是1950年代一首流行歌曲里的歌词，至今美国人还在用。",
      usage: "later 表示'以后'：See you later!（回头见！）later 还可以表示'后来'：Later, he became a teacher.（后来他成了老师。）sooner or later = 迟早。"
    },
    {
      word: "painting",
      phonetic: "/ˈpeɪntɪŋ/",
      pos: "n.",
      posClass: "n",
      meaning: "油画；绘画",
      root: {
        parts: ["paint（画；涂）", "-ing（名词后缀）"],
        explain: "paint（画、涂颜料）+ -ing（名词后缀）= 画出来的作品 = 绘画。paint 来自拉丁语 pingere（描绘），和 picture（图片）是同源词！"
      },
      memory: "paint（涂画）+ ing = painting（画作）。paint 是动作'画'，painting 是结果'画作'。",
      family: ["paint（v.画；涂色）", "painter（画家）", "repaint（重新粉刷）"],
      synonyms: ["picture（画）", "drawing（素描）", "artwork（艺术作品）"],
      antonyms: [],
      sentences: [
        { en: "There are many famous paintings in the museum.", zh: "博物馆里有很多著名的画作。" },
        { en: "This painting is over 500 years old.", zh: "这幅画有500多年历史了。" }
      ],
      fun: "世界上最著名的 painting 是达·芬奇的《蒙娜丽莎》(Mona Lisa)，挂在巴黎卢浮宫。它只有77×53厘米——比很多人想象的小得多！每年有超过1000万人去看它，大多数人只能在人群中远远瞥一眼。",
      usage: "painting 指油画或水彩画（有颜料的画），drawing 指素描或线条画（用笔画的）。a painting of... = 一幅...的画。oil painting = 油画。"
    },
    {
      word: "famous",
      phonetic: "/ˈfeɪməs/",
      pos: "adj.",
      posClass: "adj",
      meaning: "著名的",
      root: {
        parts: ["fam（=fame，名声）", "-ous（形容词后缀）"],
        explain: "fame（名声）+ -ous（形容词后缀）= 有名声的 = 著名的。fame 来自拉丁语 fama（传言、声誉）。和 family（家庭）没有词源关系——别搞混了！"
      },
      memory: "fame（名声）+ ous（形容词后缀）= famous（有名的）。有了名声(fame)就出名(famous)了！",
      family: ["fame（名声）", "infamous（臭名昭著的）", "famously（众所周知地）"],
      synonyms: ["well-known（著名的）", "celebrated（著名的）", "renowned（有名望的）"],
      antonyms: ["unknown（不为人知的）", "obscure（默默无闻的）"],
      sentences: [
        { en: "Beijing is famous for the Great Wall.", zh: "北京以长城闻名。" },
        { en: "He wants to be a famous painter.", zh: "他想成为一个著名的画家。" }
      ],
      fun: "infamous 不是'不出名'的意思，而是'臭名昭著的'——因为坏事太出名了！in- 在这里不表示否定，而是表示'因为'。所以 infamous 比 famous 更'出名'，只不过是坏名声。",
      usage: "be famous for = 因...而出名。be famous as = 作为...而出名。Beijing is famous for the Great Wall.（北京因长城而出名。）She is famous as a singer.（她作为歌手而出名。）"
    },
    {
      word: "above",
      phonetic: "/əˈbʌv/",
      pos: "prep.",
      posClass: "prep",
      meaning: "在...上方",
      root: {
        parts: ["a-（在）", "bove（=buf，上面）"],
        explain: "来自古英语 abufan（在上面），a-（在）+ bufan（上面）。和 over（在上方）意思接近，但 above 更强调'高于某个水平面'，而 over 可以表示'正上方'或'越过'。"
      },
      memory: "a + bove，bove 像 bow（弓）——弓箭(bow)射到天上就在上方(above)了！也可以记：above 里有 'ove'，和 over 像亲兄弟。",
      family: ["above-mentioned（上述的）"],
      synonyms: ["over（在...上方）", "higher than（高于）"],
      antonyms: ["below（在...下方）", "under（在...下面）", "beneath（在...下面）"],
      sentences: [
        { en: "There is a clock above the door.", zh: "门上方有一个钟。" },
        { en: "The plane flew above the clouds.", zh: "飞机在云层上方飞行。" }
      ],
      fun: "above 和 over 都可以表示'在上方'，但有微妙区别：above 强调位置更高（不一定正上方），over 强调正上方或覆盖。比如温度 above zero（零度以上）用 above 不用 over。",
      usage: "above = 在...上方（不接触）。above 还可以表示'超过'：above average（高于平均水平）。above all = 最重要的是。注意区分：above（在上方不接触）vs on（在上面接触）。"
    },
    {
      word: "bridge",
      phonetic: "/brɪdʒ/",
      pos: "n.",
      posClass: "n",
      meaning: "桥",
      root: {
        parts: [],
        explain: "来自古英语 brycg（桥），与德语 Brücke 同源。桥是人类最早的工程发明之一——把一根木头搭在河两岸上，世界上第一座桥就诞生了。"
      },
      memory: "bridge 谐音'不理解'——这座桥(bridge)的设计让人不理解，太厉害了！也可以记：br + idge（像 ridge 山脊）——山脊上架的路就是桥。",
      family: ["drawbridge（吊桥）", "footbridge（人行桥）"],
      synonyms: ["overpass（天桥；立交桥）"],
      antonyms: [],
      sentences: [
        { en: "Walk across the bridge and you'll see the museum.", zh: "走过桥你就会看到博物馆。" },
        { en: "There is an old stone bridge over the river.", zh: "河上有一座古老的石桥。" }
      ],
      fun: "Cambridge（剑桥）的意思就是 Cam（剑河）上的 bridge（桥）！Oxford（牛津）的意思是 ox（牛）过河的 ford（浅滩）。英国很多城市名字都和地理特征有关。桥牌游戏也叫 bridge，但和桥没什么关系！",
      usage: "cross a bridge = 过桥。bridge 也可以比喻'桥梁、纽带'：a bridge between two cultures（两种文化之间的桥梁）。Cambridge = Cam河上的桥 = 剑桥。"
    },
    {
      word: "boat",
      phonetic: "/bəʊt/",
      pos: "n.",
      posClass: "n",
      meaning: "小船",
      root: {
        parts: [],
        explain: "来自古英语 bāt（船），与古北欧语 bátr 同源。boat 一般指小船，ship 指大船。古英语时期，维京人乘坐他们的 boats 入侵英格兰，把这个词带进了英语。"
      },
      memory: "boat 谐音'波特'——哈利·波特(Harry Potter)坐小船(boat)去霍格沃茨！《哈利波特》第一部里新生确实是坐小船过湖的。",
      family: ["boating（划船）", "motorboat（摩托艇）", "sailboat（帆船）", "rowboat（划艇）"],
      synonyms: ["vessel（船只）", "craft（船；飞行器）"],
      antonyms: [],
      sentences: [
        { en: "We took a boat tour on the river.", zh: "我们在河上乘船游览。" },
        { en: "There are many boats on the lake.", zh: "湖面上有很多小船。" }
      ],
      fun: "in the same boat = 在同一条船上 = 处境相同。miss the boat = 错过了船 = 错过了机会。rock the boat = 摇船 = 捣乱/惹麻烦。英语里有很多和 boat 有关的习语！",
      usage: "by boat = 乘船。boat 指小船，ship 指大船。go boating = 去划船。注意习语：in the same boat = 同舟共济/处境相同。"
    },
    {
      word: "clear",
      phonetic: "/klɪə(r)/",
      pos: "adj.",
      posClass: "adj",
      meaning: "晴朗的",
      root: {
        parts: [],
        explain: "来自拉丁语 clarus（明亮的、响亮的、著名的）。Clare、Clara 这些英文名字都来自同一个词根，意思是'明亮的人'。clear 从'明亮的'引申出'晴朗的、清楚的、透明的'等含义。"
      },
      memory: "clear 谐音'克利尔'——天气克利尔(clear)了，雨停了，天晴了！也可以记：clear 和 clean 都以 cle 开头——干净(clean)才清楚(clear)。",
      family: ["clearly（清楚地）", "clearance（清仓；净空）", "unclear（不清楚的）"],
      synonyms: ["sunny（晴朗的）", "fine（好天气的）", "bright（明亮的）"],
      antonyms: ["cloudy（多云的）", "foggy（有雾的）", "unclear（不清楚的）"],
      sentences: [
        { en: "It's a clear day today.", zh: "今天天气晴朗。" },
        { en: "The water in the lake is very clear.", zh: "湖水非常清澈。" }
      ],
      fun: "clear 有一个有趣的口语用法：'Clear!' 在电视剧里的医疗急救场景中经常听到——医生使用除颤器前会喊 'Clear!'（离开！），让所有人退后。在军事片里 'All clear!' 表示'安全了'。",
      usage: "clear 可以形容天气（晴朗的）、水（清澈的）、解释（清楚的）。clear sky = 晴空。make it clear = 说清楚。clear 作动词 = 清除：clear the table = 收拾桌子。"
    },
    {
      word: "ground",
      phonetic: "/ɡraʊnd/",
      pos: "n.",
      posClass: "n",
      meaning: "地面",
      root: {
        parts: [],
        explain: "来自古英语 grund（底部、基础），与德语 Grund（地面、原因）同源。ground 最初指'最底部'——地面就是我们脚下最底部的东西。有趣的是，ground 也是 grind（磨碎）的过去式——把东西磨碎到最底部。"
      },
      memory: "ground 谐音'跪绑的'——被绑在地上(ground)跪着！也可以记：ground 里有 round（圆的）——地面(ground)上画了一个圆(round)圈。",
      family: ["underground（地下的；地铁）", "background（背景）", "playground（操场）", "grounded（接地的；被禁足的）"],
      synonyms: ["floor（地板）", "earth（土地）", "surface（表面）"],
      antonyms: ["sky（天空）", "ceiling（天花板）"],
      sentences: [
        { en: "Don't sit on the ground — it's dirty.", zh: "别坐在地上——很脏。" },
        { en: "The leaves fell to the ground.", zh: "树叶落到了地面上。" }
      ],
      fun: "ground floor 在英式英语中是'一楼'（等于美式英语的 first floor）。英式的 first floor 反而是中国人说的'二楼'！去英国坐电梯时千万注意这个区别。playground = 操场 = play（玩）+ ground（场地）。",
      usage: "on the ground = 在地面上。ground 和 floor 的区别：ground 指室外地面，floor 指室内地板。ground floor = 一楼（英式）。underground = 地铁（英式）= subway（美式）。"
    }
  ]
};

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
      usage: "crayon 通常指蜡笔，和 colored pencil（彩色铅笔）不同。a box of crayons = 一盒蜡笔。",
      visual: "想象一条巨大的彩色蜡笔龙在天空画出一道彩虹，蜡笔碎屑像雪花一样飘落下来！全班同学仰头张嘴接蜡笔雪花。",
      confuse: "crayon（蜡笔）vs colored pencil（彩色铅笔）：crayon 是蜡做的，画出来粗粗的、油油的；colored pencil 是木头铅笔芯，画出来细细的。别混用！",
      rhyme: "crayon 谐音克雷永，克雷永远画不停；蜡笔五颜六色亮，画出彩虹挂天上！",
      scene: "🎨 文具串记：crayon（蜡笔）+ eraser（橡皮擦）+ tape（胶带）—— 画错用 eraser 擦，撕裂用 tape 粘，三件文具好搭档！"
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
      usage: "美式英语用 eraser，英式英语用 rubber。考试中建议写 eraser，更通用。",
      visual: "想象一块巨大的橡皮擦长了腿，追着你的错别字满教室跑，擦过的地方闪闪发光，错别字吓得尖叫逃跑！",
      confuse: "eraser（橡皮擦）vs rubber（橡胶/橡皮，英式）：美式说 eraser，英式说 rubber。注意 rubber 在美式英语中主要指橡胶材料，别搞混！",
      rhyme: "erase 擦擦擦，eraser 是橡皮；写错字别害怕，橡皮帮你擦干净！",
      scene: "✏️ 文具串记：eraser（橡皮擦）+ crayon（蜡笔）+ tape（胶带）—— 蜡笔画错用橡皮擦，纸撕了用胶带粘，文具三兄弟互相帮忙！"
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
      usage: "手套通常成对出现，所以常用复数 gloves。a pair of gloves = 一副手套。",
      visual: "想象一只巨大的手套自己飞起来，像超人一样在校园上空巡逻，专门抓那些冬天不戴手套的同学，硬往他们手上套！",
      confuse: "glove（手套）vs mitten（连指手套）：glove 五个手指分开，mitten 只有大拇指分开，其他四指连在一起。滑雪常用 mitten，日常常用 glove。",
      rhyme: "g 加 love，爱的手套暖心窝；出门别忘 glove，温暖一整冬！",
      scene: "🧣 随身物品串记：glove（手套）+ wallet（钱包）+ watch（手表）+ mobile phone（手机）—— 冬天出门四件套，少一样都不行！"
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
      usage: "wallet 一般指男式折叠钱包；purse 在美式英语中指女式手提包，在英式英语中指小钱包。",
      visual: "想象一个钱包自己张开嘴巴大喊'我饿了！'，主人不停往里面塞钱，钱包越吃越胖，最后胖到合不上嘴，钞票从嘴角溢出来！",
      confuse: "wallet（钱包）vs purse（女式手提包/小钱包）：wallet 通常是男式对折钱包，放口袋里；purse 在美式英语里指女式手提包，在英式英语里指小零钱包。",
      rhyme: "wall 是墙，wallet 是钱包；钱包像面小墙壁，保护钱币不乱跑！",
      scene: "💰 随身物品串记：wallet（钱包）+ watch（手表）+ mobile phone（手机）+ camera（相机）—— 出门四件套，丢了赶紧去 lost and found！"
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
      usage: "watch 做名词是'手表'，做动词是'观看'。watch TV = 看电视，watch a film = 看电影。注意区分 watch（小的、戴在手上的）和 clock（大的、挂墙上或放桌上的）。",
      visual: "想象你的手表突然长出一只大眼睛，一直盯着你看(watch)，还不停催你：'快点快点，要迟到了！'你吓得拔腿就跑！",
      confuse: "watch（手表/手腕上的）vs clock（挂钟/台钟/大的）：戴在手上的是 watch，挂在墙上或放在桌上的大钟是 clock。千万不能说 hand clock！",
      rhyme: "watch watch 看一看，手腕上面转圈圈；既能看来又是表，一词两意记心间！",
      scene: "⌚ 随身物品串记：watch（手表）+ wallet（钱包）+ mobile phone（手机）+ camera（相机）—— 出门摸摸四个口袋，手表钱包手机相机全带齐！"
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
      usage: "Whose + 名词 + is this/are these? 是失物招领的经典句型。比如：Whose pen is this? 这支笔是谁的？",
      visual: "想象失物招领处的老师举着一只巨大的手套，扯着嗓子喊'WHOSE?! WHOSE?!'，全校同学排队过来认领，场面像拍卖会一样热闹！",
      confuse: "whose（谁的）vs who's（who is 谁是）：发音一模一样！whose 问归属，who's 问身份。Whose bag is this?（这是谁的包？）vs Who's that?（那是谁？）考试必考！",
      rhyme: "whose whose 谁的谁的，东西找不到主人；who's who's 谁是谁是，认人得问 who is！",
      scene: "❓ 失物招领句型串记：Whose glove is this?（这是谁的手套？）—— 在 lost and found 里，用 whose 来问 crayon、eraser、wallet、watch 都是谁的！"
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
      usage: "first of all 用在句首，后面用逗号隔开。通常和 then（然后）、finally（最后）搭配使用，让表达更有条理。",
      visual: "想象一个同学站在讲台上，伸出一根巨大的食指，指着天花板大喊'First of all！'，天花板上掉下来一个金灿灿的大'1'砸在桌上！",
      confuse: "first of all（首先，较正式）vs at first（起初、一开始）：first of all 表示列举顺序'第一点'，at first 强调'一开始是这样，后来变了'。At first I was scared, then I was brave.（一开始我害怕，后来我勇敢了。）",
      rhyme: "first of all 排第一，说话作文有条理；首先其次加最后，逻辑清楚人人夸！",
      scene: "📝 表达顺序串记：first of all（首先）→ then（然后）→ finally（最后）—— 在 lost and found 描述事情经过：First of all, I lost my wallet. Then I went to the lost and found office. Finally, I found it!"
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
      usage: "lost and found 可以做名词短语用，指失物招领处或失物招领箱。the lost and found office = 失物招领处。",
      visual: "想象一个神奇的大箱子，里面什么都有：glove、wallet、camera、甚至还有一只 duck！箱子上写着大大的'LOST AND FOUND'，东西们在里面开派对等主人来接。",
      confuse: "lost and found（失物招领，美式）vs lost property（失物招领，英式）：意思一样，美国人说 lost and found，英国人说 lost property。考试一般用 lost and found。",
      rhyme: "丢了东西别着急，lost and found 来帮你；失物招领柜里找，钱包手表都在里！",
      scene: "🏫 失物招领大串记：去 lost and found 找什么？——crayon（蜡笔）、eraser（橡皮擦）、glove（手套）、wallet（钱包）、watch（手表）、camera（相机）、mobile phone（手机），全在这里等你认领！"
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
      usage: "mine = my + 名词。比如 This is my book. = This book is mine. 不能说 This is mine book.（错误）",
      visual: "想象一个同学抱着一大堆东西——crayon、wallet、watch——大喊'Mine! Mine! Mine!'，像海底总动员里的海鸥一样疯狂，所有东西都是'我的'！",
      confuse: "mine（我的，名词性物主代词）vs my（我的，形容词性物主代词）：my 后面必须跟名词（my book），mine 单独使用（This is mine.）。千万不能说 This is mine book！",
      rhyme: "my 后面跟名词，mine 自己能独立；my book 等于 it is mine，两种说法都可以！",
      scene: "👆 物主代词对对碰：mine（我的）vs yours（你的）vs hers（她的）—— Whose watch is this? It's mine! No, it's yours! 在 lost and found 大家都说是自己的！"
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
      usage: "yours = your + 名词。例如：Is this your pen? → Is this pen yours? 写信时 Yours, ... 是固定结尾格式。",
      visual: "想象考试卷子发下来，你看到上面写着别人的名字，你指着卷子问同桌：'Is this yours?' 同桌一看是100分，立刻点头大喊'Yes! Mine!'",
      confuse: "yours（你的，名词性物主代词）vs your's（不存在！错误写法！）：名词性物主代词绝对不加撇号！yours, mine, hers, his, ours, theirs 都没有撇号。",
      rhyme: "your 后面要跟名，yours 自己撑场面；Is this yours 来问你，回答 yes 或 no 就行！",
      scene: "👆 物主代词全家福：mine（我的）、yours（你的）、his（他的）、hers（她的）—— 在 lost and found 里 Whose wallet is this? 每人都用不同的代词回答！"
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
      usage: "hers 绝对不能写成 her's！名词性物主代词都没有撇号：mine, yours, his, hers, ours, theirs。",
      visual: "想象一个女生的书包突然变成紫色大气球飞上天，全班指着天空喊'Hers! Hers!'，女生追着气球满操场跑！",
      confuse: "hers（她的，名词性）vs her's（错误！不存在！）vs his（他的）：hers 和 his 是一对，hers 有 s，但 his 本身就以 s 结尾所以不变。绝对不要写 her's！",
      rhyme: "hers 没有小撇号，her 加 s 就够了；她的东西用 hers 说，千万别把撇号加！",
      scene: "👆 物主代词配对记：mine（我的）→ yours（你的）→ his（他的）→ hers（她的）—— This purple bag is hers, that wallet is his, and the camera is mine!"
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
      usage: "tape 做名词有两个常见意思：磁带（cassette tape）和胶带（sticky tape/adhesive tape）。做动词时表示'录音'或'用胶带粘'。",
      visual: "想象一卷巨型胶带长了手脚，见人就粘，把全班同学粘成一串糖葫芦！同学们像磁带一样被卷起来转圈圈。",
      confuse: "tape（胶带/磁带）vs type（打字/类型）：两个词长得像但完全不同！tape /teɪp/ 是胶带，type /taɪp/ 是打字。注意中间的字母 a 和 y 别看混。",
      rhyme: "tape tape 粘粘粘，胶带磁带都算它；粘东西用 tape，录音也用 tape！",
      scene: "🎒 文具串记：tape（胶带）+ crayon（蜡笔）+ eraser（橡皮擦）—— 三件文具放书包，画画擦擦粘粘贴，手工课上少不了！"
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
      usage: "purple 既是形容词（紫色的）也是名词（紫色）。in purple = 穿着紫色衣服。",
      visual: "想象整个教室突然变成紫色——紫色的墙、紫色的桌子、紫色的老师！同学们尖叫着发现自己的头发也变成了 purple，像一群紫色的海葵在教室里飘来飘去！",
      confuse: "purple（紫色）vs violet（紫罗兰色）：purple 颜色偏红紫，violet 偏蓝紫。日常生活中说紫色一般用 purple，violet 更文艺。彩虹七色里的紫色是 violet。",
      rhyme: "purple purple 紫又紫，皇帝专用高贵色；紫色书包紫色笔，我是紫色小公主！",
      scene: "🎨 颜色串记：purple（紫色的）描述 lost and found 里的物品 —— a purple bag is hers（紫色书包是她的），搭配 whose 和 hers 一起用！"
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
      usage: "digital camera = 数码相机。take a photo/picture with a camera = 用照相机拍照。注意是 take a photo，不是 make a photo。",
      visual: "想象一台相机长出了翅膀，满校园飞来飞去偷拍同学们的搞笑瞬间，'咔嚓咔嚓'闪光灯闪个不停，最后把照片全贴在失物招领墙上！",
      confuse: "camera（照相机）vs video（录像/视频）：camera 是拍照的设备，video 是视频内容。不过 video camera 就是摄像机。注意 take a photo 不说 make a photo！",
      rhyme: "camera 卡美拉，咔嚓咔嚓拍照片；出门旅游带相机，美好瞬间全留下！",
      scene: "📷 随身物品串记：camera（相机）+ mobile phone（手机）+ wallet（钱包）+ watch（手表）—— 出门旅游四件宝，丢了就去 lost and found 找！"
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
      usage: "英式英语说 mobile phone 或简称 mobile，美式英语说 cellphone 或 cell。在学校通常要求 turn off your mobile phone（关掉手机）。",
      visual: "想象一部手机在课堂上突然响起，铃声巨大，老师变成巨人一把抓住手机扔进 lost and found 箱子里，手机在箱子里委屈地哭泣！",
      confuse: "mobile phone（手机，英式）vs cellphone（手机，美式）vs telephone（电话，泛指）：英式说 mobile phone，美式说 cellphone。telephone 是总称，包括座机。考试写 mobile phone 最安全。",
      rhyme: "mobile 能移动，phone 是电话机；合在一起手机叫，随身携带不忘记！",
      scene: "📱 电子产品串记：mobile phone（手机）+ camera（相机）+ watch（手表）—— 现在智能手机能拍照能看时间，camera 和 watch 的功能都有了！但考试还是要分开记。"
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
      usage: "get lost = 迷路。I'm lost. = 我迷路了。lost 也可以表示'困惑的'，比如 I'm lost.（我听不懂/我搞不清了）。",
      visual: "想象你的书包长了腿偷偷溜走了，你满校园找，书包藏在树上朝你做鬼脸！你大喊'My bag is lost!'，书包吓了一跳掉下来。",
      confuse: "lost（丢失的，形容词/lose的过去式）vs lose（丢失，动词原形）vs loose（松的）：lost 是 lose 的过去式，注意 lose 只有一个 o，loose 有两个 o 意思完全不同！",
      rhyme: "lose 丢了变 lost，丢三落四真糟糕；东西 lost 去哪找？lost and found 就是好！",
      scene: "🔍 丢与找串记：lost（丢失的）↔ found（找到的）—— 东西 lost 了就去 lost and found，用 whose 问是谁的，用 mine/yours/hers 来回答！"
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
      usage: "find-found-found 是不规则动词变化。found 做'建立'讲时是规则动词：found-founded-founded。",
      visual: "想象你在 lost and found 箱子里翻啊翻，突然找到(found)了一堆宝贝——wallet、watch、camera 全在里面！你像中了大奖一样跳起来欢呼。",
      confuse: "found（find 的过去式，找到）vs found（建立，另一个词）：I found my wallet.（我找到了钱包。）vs He founded a school.（他创办了学校。）同形不同义，看上下文判断！",
      rhyme: "find found found，找到找到找到了；丢了东西别灰心，lost and found 准能找到(found)！",
      scene: "🔍 丢与找串记：lost（丢失的）↔ found（找到的）—— I lost my glove, but I found it in the lost and found box. 这就是完整的丢和找的故事！"
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
      usage: "具体数字时 hundred 不加 s：two hundred（两百）。表示'数百'时加 s 加 of：hundreds of（数以百计的）。",
      visual: "想象 lost and found 箱子里堆了一百件东西，箱子被撑爆了！东西像喷泉一样飞出来——glove、wallet、camera 满天飞，管理员崩溃大哭。",
      confuse: "hundred（百）数字用法易错点：two hundred（两百，不加s）vs hundreds of（数百，加s加of）。具体数字不加 s，模糊数量加 s + of。thousand 也是同样规则！",
      rhyme: "hundred 是一百，前面有数不加 s；要说数百怎么办？hundreds of 不能忘！",
      scene: "🔢 数字串记：hundred（百）+ thousand（千）—— Hundreds of things are lost every year, and thousands of people come to the lost and found office! 数字搭配 lost and found 场景记忆。"
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
      usage: "和 hundred 一样：three thousand（三千），但 thousands of（成千上万的）。th 的发音 /θ/ 要把舌尖放在上下牙之间。",
      visual: "想象一千只 duck（鸭子）排成方阵走进 lost and found 办公室，每只鸭子嘴里叼着一样丢失的东西，场面壮观得像阅兵式！",
      confuse: "thousand（千）和 hundred（百）用法完全一样：three thousand（三千，不加s），thousands of（数千，加s加of）。记住规则：有具体数字不加 s，没有具体数字加 s + of。",
      rhyme: "thousand 是一千，th 发音咬舌尖；前面有数不加 s，thousands of 表很多！",
      scene: "🔢 数字串记：hundred（百）+ thousand（千）—— Two hundred students lost thousands of things! 两百个学生丢了数千样东西！数字兄弟要一起记。"
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
      usage: "strange 强调'出乎意料的奇怪'；weird 更强调'怪异、让人不舒服'。It's strange that...（奇怪的是...）是常用句型。",
      visual: "想象 lost and found 箱子里突然爬出一只会说话的 duck，头上戴着 glove 当帽子，脖子上挂着 camera 在自拍，嘴里叼着 sausage——太 strange 了！",
      confuse: "strange（奇怪的，偏中性）vs weird（怪异的，偏负面）vs odd（古怪的）：strange 最常用、最安全；weird 语气更重，暗示'让人不舒服'；odd 比较书面。考试用 strange 就对了。",
      rhyme: "strange strange 真奇怪，range 范围超出来；超出正常就奇怪，strange 用法记起来！",
      scene: "😲 奇怪物品串记：There are some strange things in the lost and found box —— a boat（船）、a duck（鸭子）、a pig（猪）、sausages（香肠）！谁会把这些丢在公交车上？"
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
      usage: "boat 指小船，ship 指大船（如轮船、货船）。by boat = 乘船。go boating = 去划船。",
      visual: "想象一条小船出现在 lost and found 办公室的柜台上，管理员目瞪口呆：'谁把一条 boat 丢在公交车上了?!'船上还坐着一只 duck 在悠闲地吃 sausage！",
      confuse: "boat（小船）vs ship（大船）：boat 是小船（划的、钓鱼的），ship 是大船（轮船、货船）。不能把航空母舰叫 boat！by boat = 乘小船，by ship = 乘大船。",
      rhyme: "boat boat 小小船，河上湖上随处见；b 加 oat 就是船，记住 boat 不用翻！",
      scene: "😲 奇怪失物串记：boat（船）+ duck（鸭子）+ pig（猪）+ sausage（香肠）—— These are strange things in the lost and found! 这些奇怪的东西居然都在失物招领处！"
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
      usage: "duck 做动词时是'低头、躲避'。Donald Duck = 唐老鸭。rubber duck = 橡皮鸭（泡澡玩具）。",
      visual: "想象一只 duck 穿着小西装，戴着 watch，夹着 wallet，大摇大摆走进 lost and found 办公室，用翅膀敲桌子说：'我要找我丢的 sausage！'",
      confuse: "duck（鸭子）vs dock（码头）：发音很像！duck /dʌk/ 是鸭子，dock /dɒk/ 是码头。鸭子(duck)在码头(dock)上晒太阳——用场景把两个词一起记住！",
      rhyme: "duck duck 嘎嘎叫，扁扁嘴巴水里泡；duck 还能当动词，低头躲避弯下腰！",
      scene: "😲 奇怪失物串记：duck（鸭子）+ pig（猪）+ boat（船）+ sausage（香肠）—— 在 lost and found 里发现这些 strange things，课文里最搞笑的部分！"
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
      usage: "pig 在英语中常有负面含义：eat like a pig（吃相难看）。pigtail（猪尾巴）在英语中指辫子。guinea pig = 豚鼠（也指实验对象）。",
      visual: "想象一头粉色的 pig 坐在 lost and found 箱子里，嘴里叼着一根 sausage，旁边还有一只 duck。管理员问'Whose pig is this?'全校没人敢认领！",
      confuse: "pig（猪）vs peg（木钉/衣夹）：两个词就差中间一个字母！pig /pɪɡ/ 是猪，peg /peɡ/ 是木钉。把衣服用 peg（衣夹）夹起来晾干，别让 pig（猪）拱翻了。",
      rhyme: "pig pig 胖嘟嘟，Peppa Pig 大家都爱看；pig 做人不太好，吃相难看像猪猪！",
      scene: "🐷 农场动物串记：pig（猪）+ duck（鸭子）—— 这两个动物竟然出现在 lost and found 里，truly strange! 课文里最意想不到的失物！"
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
      usage: "sausage 可数名词：a sausage, two sausages。hot dog 其实就是夹了香肠的面包。silly sausage（傻香肠）是英国人对小孩的亲切称呼。",
      visual: "想象 lost and found 办公室里堆了十五公斤 sausage，整个房间飘着香肠味！一只 duck 和一头 pig 闻着味跑来，上演一场'谁才是 sausage 真正的主人'大战！",
      confuse: "sausage（香肠）vs sandwich（三明治）：两个都是 s 开头的食物词。sausage 是香肠（圆柱形），sandwich 是三明治（方片形）。hot dog 里面夹的就是 sausage！",
      rhyme: "sausage 烧死它，香肠烤了喷喷香；早餐来根 sausage，配上面包味道棒！",
      scene: "😲 奇怪失物串记：sausage（香肠）+ boat（船）+ duck（鸭子）+ pig（猪）—— Hundreds and thousands of strange things at the lost and found! 谁会把香肠丢在公交车上？太 strange 了！"
    }
  ]
};

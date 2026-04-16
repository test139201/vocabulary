// Unit 4: Where's my schoolbag?
const UNIT4 = {
  id: 4,
  title: "Where's my schoolbag?",
  theme: "物品位置与房间布局",
  color: "#8b5cf6",
  words: [
    {
      word: "where",
      phonetic: "/weə(r)/",
      pos: "adv.",
      posClass: "adv",
      meaning: "在哪里",
      root: { parts: [], explain: "古英语 hwǣr。英语的疑问词 wh- 家族：what, when, where, which, who, why, how（h跑到前面了）——全是从古英语 hw- 演变来的。" },
      memory: "wh- 疑问词全家福：what（什么）where（哪里）when（何时）who（谁）why（为什么）which（哪个）how（如何）——7个疑问词走遍天下！",
      family: ["wherever（无论哪里）", "whereabouts（下落）", "whereas（然而）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "Where is my schoolbag?", zh: "我的书包在哪里？" },
        { en: "Where are you from?", zh: "你来自哪里？" }
      ],
      fun: "where、wear（穿）、ware（商品）——三个词发音完全一样！Where do you wear your wares?（你在哪里穿你的商品？）",
      usage: "where 引导疑问句和地点状语从句。Where there is a will, there is a way.（有志者事竟成）"
    },
    {
      word: "table",
      phonetic: "/ˈteɪbl/",
      pos: "n.",
      posClass: "n",
      meaning: "桌子",
      root: { parts: [], explain: "来自拉丁语 tabula（平板）。最初就是一块平板——在平板上吃饭就成了桌子。tablet（平板电脑）也来自同一个词根！" },
      memory: "table = 一块 'able'（能用的）平板 T——T 形的腿撑起一块板就是桌子！",
      family: ["tablet（平板电脑/药片）", "tabletop（桌面）", "timetable（时间表）", "table tennis（乒乓球）"],
      synonyms: ["desk（书桌）"],
      antonyms: [],
      sentences: [
        { en: "The book is on the table.", zh: "书在桌子上。" },
        { en: "Please set the table.", zh: "请摆好餐桌。" }
      ],
      fun: "table 和 desk 有区别：table 是通用的桌子（餐桌等），desk 是有抽屉的书桌/办公桌。table tennis = 桌上网球 = 乒乓球！",
      usage: "on the table = 在桌上（也比喻'正在讨论中'）。under the table = 桌下（也比喻'私下交易'）。"
    },
    {
      word: "bed",
      phonetic: "/bed/",
      pos: "n.",
      posClass: "n",
      meaning: "床",
      root: { parts: [], explain: "古英语 bedd，最初指的是'睡觉用的地方'，不一定是家具。garden bed（花坛）就保留了'一块平地'的原义。" },
      memory: "bed 这个词本身就像一张床！b 和 d 是两个床头板，e 是睡在上面的人！",
      family: ["bedroom（卧室）", "bedtime（就寝时间）", "bedside（床边）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "The cat is under the bed.", zh: "猫在床下。" },
        { en: "Time for bed!", zh: "该睡觉了！" }
      ],
      fun: "bed 的形状真的像一张床——这是英语里最形象的单词之一！b 是床头，d 是床尾，e 是中间的床垫。下次看到 bed 就想象一下。",
      usage: "go to bed = 去睡觉（不加 the）。in bed = 在床上。make the bed = 铺床/整理床铺。"
    },
    {
      word: "sofa",
      phonetic: "/ˈsəʊfə/",
      pos: "n.",
      posClass: "n",
      meaning: "沙发",
      root: { parts: [], explain: "来自阿拉伯语 ṣuffa（石凳/垫子）。这个词经由土耳其语传入欧洲。沙发是中东客厅文化的产物！" },
      memory: "sofa 直接音译成中文就是'沙发'——so + fa，'so 舒服啊'！",
      family: ["sofa bed（沙发床）"],
      synonyms: ["couch（长沙发）", "settee（双人沙发）"],
      antonyms: [],
      sentences: [
        { en: "The dog is on the sofa.", zh: "狗在沙发上。" }
      ],
      fun: "sofa 和 couch 有微妙区别：sofa 通常更正式，couch 更随意。couch potato = 沙发土豆 = 懒人（整天窝在沙发上看电视的人）。",
      usage: "couch potato = 沙发土豆/电视迷。sofa 是中文'沙发'的来源。"
    },
    {
      word: "chair",
      phonetic: "/tʃeə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "椅子",
      root: { parts: [], explain: "来自希腊语 kathedra = kata（向下）+ hedra（坐）= 坐下来的地方。cathedral（大教堂）也来自同一个词——因为主教的'椅子'（宝座）在教堂里！" },
      memory: "chair 和 'air'（空气）押韵——坐在椅子(chair)上享受空气(air)！",
      family: ["chairman（主席）", "chairperson（主席）", "armchair（扶手椅）", "wheelchair（轮椅）"],
      synonyms: ["seat（座位）"],
      antonyms: [],
      sentences: [
        { en: "Please sit on the chair.", zh: "请坐在椅子上。" },
        { en: "There are four chairs in the room.", zh: "房间里有四把椅子。" }
      ],
      fun: "chairman = chair + man = '椅子人'？其实是'坐在主座上的人'= 主席。现在为了性别平等，更多用 chairperson 或直接用 chair（动词：主持）。",
      usage: "chair 做动词 = 主持会议。wheelchair = 轮椅（wheel + chair）。"
    },
    {
      word: "under",
      phonetic: "/ˈʌndə(r)/",
      pos: "prep.",
      posClass: "prep",
      meaning: "在……下面",
      root: { parts: [], explain: "古英语 under，与拉丁语 inter（在……之间）远古同源。under 强调'在下方'。" },
      memory: "under = '暗的'——在东西下面是暗的！under the table, under the bed, underground（地下的）。",
      family: ["underground（地下的）", "understand（理解）", "underwear（内衣）", "underline（下划线）", "underestimate（低估）"],
      synonyms: ["below（在下面）", "beneath（在下面）"],
      antonyms: ["over（在上面）", "above（在上面）"],
      sentences: [
        { en: "The ball is under the table.", zh: "球在桌子下面。" },
        { en: "The cat is sleeping under the bed.", zh: "猫在床底下睡觉。" }
      ],
      fun: "understand（理解）= under + stand？站在下面就能理解？其实古英语里 under 有'在……之间'的意思，stand among things = 站在事物中间 = 理解。",
      usage: "under- 前缀表示'不够、低于'：underweight（体重不足）、underage（未成年）、underdog（弱者）。"
    },
    {
      word: "know",
      phonetic: "/nəʊ/",
      pos: "v.",
      posClass: "v",
      meaning: "知道；了解",
      root: { parts: [], explain: "古英语 cnāwan，与拉丁语 gnoscere（认知）同源。knowledge（知识）和 recognize（认出）都来自同一个印欧语根。开头的 k 不发音！" },
      memory: "know 的 k 不发音！类似的：knife（刀）、knee（膝盖）、knock（敲）——kn 开头的词 k 统统不发音，这是英语的'沉默的 k'规则。",
      family: ["knowledge（知识）", "known（已知的）", "unknown（未知的）"],
      synonyms: ["understand（理解）", "realize（意识到）"],
      antonyms: [],
      sentences: [
        { en: "I know her name.", zh: "我知道她的名字。" },
        { en: "Do you know the answer?", zh: "你知道答案吗？" }
      ],
      fun: "沉默的 k 家族：knife, knee, kneel, knight, knit, knock, knob, knot, know, knack。这些词在古英语时代 k 是发音的——经过几百年，k 偷偷沉默了。",
      usage: "know about = 了解。you know = 你知道的（口语中的填充词）。"
    },
    {
      word: "come",
      phonetic: "/kʌm/",
      pos: "v.",
      posClass: "v",
      meaning: "来",
      root: { parts: [], explain: "古英语 cuman，最基本的运动词之一。come 表示'朝说话人的方向移动'，go 则表示'离开说话人'。" },
      memory: "come 和 home 押韵——Come home!（回家来！）",
      family: ["come on（加油/快点）", "come back（回来）", "become（成为）", "welcome（欢迎）", "outcome（结果）"],
      synonyms: ["arrive（到达）", "approach（接近）"],
      antonyms: ["go（去）", "leave（离开）"],
      sentences: [
        { en: "Come and have a look.", zh: "来看一看。" },
        { en: "Please come here.", zh: "请过来。" }
      ],
      fun: "come 的短语超级多：come in（进来）、come out（出来/出版）、come on（加油/快点）、come true（实现）、come across（偶遇）。学好 come 的短语就等于学了十几个新词！",
      usage: "come 和 go 的区别：朝我来 = come，离我去 = go。Welcome = well + come = 来得好 = 欢迎！"
    },
    {
      word: "think",
      phonetic: "/θɪŋk/",
      pos: "v.",
      posClass: "v",
      meaning: "认为；想",
      root: { parts: [], explain: "古英语 þencan，与 thank（感谢）同源。思考和感恩共享同一个词根——因为'感恩'就是'想到别人的好'。" },
      memory: "think 的 th 发 /θ/，舌尖要伸出来！think、thank、this、that、the——th 是英语里最有特色的发音。",
      family: ["thought（想法；过去式）", "thinking（思考；思维）", "thinker（思想家）", "rethink（重新思考）"],
      synonyms: ["believe（相信）", "consider（考虑）", "suppose（假设）"],
      antonyms: [],
      sentences: [
        { en: "I think it's in your schoolbag.", zh: "我想它在你的书包里。" },
        { en: "What do you think?", zh: "你怎么想？" }
      ],
      fun: "I think, therefore I am.（我思故我在）——笛卡尔的名言，哲学史上最有名的一句话。think 的过去式 thought 拼写大变身！",
      usage: "I think so. = 我也这么认为。I don't think so. = 我不这么认为。think about = 考虑。think of = 想到。"
    },
    {
      word: "room",
      phonetic: "/ruːm/",
      pos: "n.",
      posClass: "n",
      meaning: "房间",
      root: { parts: [], explain: "古英语 rūm，原义是'空间、空地'，后来才变成'房间'。make room for = 给……腾出空间，保留了最初的意思。" },
      memory: "room 里有两个 o，像房间里的两扇窗户！",
      family: ["bedroom（卧室）", "bathroom（浴室）", "classroom（教室）", "roommate（室友）", "living room（客厅）"],
      synonyms: ["chamber（室）", "space（空间）"],
      antonyms: [],
      sentences: [
        { en: "My room is tidy.", zh: "我的房间很整洁。" },
        { en: "There's no room for the desk.", zh: "没有放桌子的空间了。" }
      ],
      fun: "room 做不可数名词时 = 空间/余地：There's no room for error（没有犯错的余地）。做可数名词时 = 房间。一个词，数不数得过来，意思都不一样！",
      usage: "-room 是超强合成词素：bedroom, bathroom, classroom, mushroom（蘑菇屋→蘑菇！）"
    },
    {
      word: "tidy",
      phonetic: "/ˈtaɪdi/",
      pos: "adj.",
      posClass: "adj",
      meaning: "整洁的；井井有条的",
      root: { parts: [], explain: "来自中古英语 tidy = tide（时间/潮汐）+ -y。原义是'及时的、合时宜的'→ '有条理的' → '整洁的'。" },
      memory: "tidy 里有 'tidy'——读起来就像'太地'（太干净了地板都发光）！",
      family: ["tidy up（收拾整理）", "untidy（不整洁的）", "tidiness（整洁）"],
      synonyms: ["neat（整齐的）", "clean（干净的）", "orderly（有序的）"],
      antonyms: ["messy（凌乱的）", "untidy（不整洁的）"],
      sentences: [
        { en: "Please keep your room tidy.", zh: "请保持你的房间整洁。" },
        { en: "She is a tidy person.", zh: "她是个爱整洁的人。" }
      ],
      fun: "英式英语超爱用 tidy！在威尔士俚语里 'tidy' 甚至可以表示'很棒'：'That meal was tidy!' = 那顿饭太棒了！",
      usage: "tidy up = 收拾整理。a tidy sum = 一笔不小的钱（口语）。"
    }
  ]
};

if(typeof window!=='undefined'){window.UNIT4=UNIT4;}

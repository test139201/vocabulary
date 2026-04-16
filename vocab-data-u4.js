// Unit 4: Life in the future (Module 4 外研版七年级下册)
const UNIT4 = {
  id: 4,
  title: "Life in the future",
  theme: "未来的生活",
  color: "#8b5cf6",
  words: [
    {
      word: "chalk",
      phonetic: "/tʃɔːk/",
      pos: "n.",
      posClass: "n",
      meaning: "粉笔",
      root: {
        parts: [{ text: "chalk", type: "root", label: "拉丁语 calx = 石灰石" }],
        explain: "来自拉丁语 calx（石灰石）。粉笔的主要成分就是碳酸钙（calcium carbonate）。calcium（钙）也来自同一个词根。英语中的 l 不发音：/tʃɔːk/，和 walk、talk 一样。"
      },
      memory: "chalk 中的 l 不发音，读 /tʃɔːk/。联想：'超酷'——老师用粉笔写出超酷的板书！",
      family: ["chalky（粉笔似的/白色的）", "chalkboard（黑板）", "chalk dust（粉笔灰）"],
      synonyms: ["crayon（蜡笔）"],
      antonyms: [],
      sentences: [
        { en: "The teacher writes on the blackboard with chalk.", zh: "老师用粉笔在黑板上写字。" },
        { en: "In the future, will we still use chalk in class?", zh: "在未来，我们上课还会用粉笔吗？" }
      ],
      fun: "随着科技发展，很多学校已经用电子白板取代了黑板和粉笔。但在英国的多佛(Dover)海峡，有著名的白色悬崖(White Cliffs of Dover)——它们就是由chalk（白垩/石灰岩）构成的！",
      usage: "a piece of chalk = 一支粉笔（chalk 是不可数名词，不能说 a chalk）。chalk and cheese = 天差地别（英式俚语：粉笔和奶酪看着像但完全不同）。"
    },
    {
      word: "ruler",
      phonetic: "/ˈruːlə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "直尺",
      root: {
        parts: [
          { text: "rul-", type: "root", label: "拉丁语 regula = 直条/规则" },
          { text: "-er", type: "suffix", label: "做……的东西/人" }
        ],
        explain: "来自 rule（规则/画线）+ -er。ruler 有两个意思：①直尺（用来画直线的工具）②统治者（制定规则的人）。同根词 rule 本身就来自拉丁语 regula（直棒/规则）——用直棒画线就是制定规则！"
      },
      memory: "ruler = rule（规则/画线）+ -er → 画线的工具 = 直尺；制定规则的人 = 统治者。一个词两个身份！",
      family: ["rule（规则/统治）", "ruling（裁决/统治的）", "unruly（不守规矩的）", "regulate（调节）"],
      synonyms: ["straightedge（直尺）"],
      antonyms: [],
      sentences: [
        { en: "Can I borrow your ruler?", zh: "我能借你的直尺吗？" },
        { en: "Use a ruler to draw a straight line.", zh: "用直尺画一条直线。" }
      ],
      fun: "ruler 这个词完美体现了英语的一词多义：The ruler used a ruler to rule a line under the rule.（统治者用尺子在规则下面画了一条线。）一句话用了四个 rule/ruler，四个不同意思！",
      usage: "ruler 做'直尺'是可数名词。注意和 rule 区分：ruler = 工具/人，rule = 规则/动词（统治、画线）。"
    },
    {
      word: "change",
      phonetic: "/tʃeɪndʒ/",
      pos: "v.",
      posClass: "v",
      meaning: "改变；变化",
      root: {
        parts: [{ text: "change", type: "root", label: "拉丁语 cambiare = 交换" }],
        explain: "来自拉丁语 cambiare（交换）。change 最初的意思就是'交换'，后来引申为'改变'——因为交换了就不一样了，就改变了。exchange（交流）= ex（出）+ change（交换）= 互相交换。"
      },
      memory: "change = '产生'变化——世界每天都在 change！也可以记：chan(产) + ge(革) = 变革 = 改变！",
      family: ["change（n. 变化/零钱）", "changeable（易变的）", "exchange（交换）", "unchanged（未改变的）"],
      synonyms: ["alter（改变）", "transform（转变）", "vary（变化）"],
      antonyms: ["remain（保持不变）", "stay（保持）"],
      sentences: [
        { en: "Technology will change our life in the future.", zh: "技术将在未来改变我们的生活。" },
        { en: "The weather changes quickly in spring.", zh: "春天天气变化很快。" }
      ],
      fun: "change 做名词时还有'零钱'的意思：Keep the change.（不用找零了。）这是西方文化中给小费的常见说法。另外，'a change of pace'（换换节奏）是很地道的表达。",
      usage: "change 既是动词也是名词。change one's mind = 改变主意。change clothes = 换衣服。make a change = 做出改变。for a change = 换换口味/偶尔。"
    },
    {
      word: "future",
      phonetic: "/ˈfjuːtʃə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "将来；未来",
      root: {
        parts: [{ text: "futur-", type: "root", label: "拉丁语 futurus = 将要成为的" }],
        explain: "来自拉丁语 futurus，是 esse（存在/成为）的未来分词，意思是'将要成为的'。英语中表示时间的三个关键词：past（过去）、present（现在）、future（未来）。"
      },
      memory: "future = 'few + ture'——未来只有少数(few)人能看透(ture≈true)！",
      family: ["future（adj. 未来的）", "futuristic（未来主义的/超前的）", "futurism（未来主义）"],
      synonyms: ["tomorrow（明天/未来）", "prospect（前景）"],
      antonyms: ["past（过去）", "history（历史）"],
      sentences: [
        { en: "What will life be like in the future?", zh: "未来的生活会是什么样子？" },
        { en: "We should study hard for our future.", zh: "我们应该为了我们的未来努力学习。" }
      ],
      fun: "科幻电影里的 future 总是充满飞行汽车和机器人。《回到未来》(Back to the Future)预言2015年会有飞行滑板和自动系鞋带的鞋子——飞行滑板没实现，但耐克真的做出了自动系鞋带的鞋！",
      usage: "in the future = 在将来（泛指未来某个时间）。in future = 今后（从现在开始，英式用法）。the future = 未来（加 the 特指）。"
    },
    {
      word: "in the future",
      phonetic: "/ɪn ðə ˈfjuːtʃə(r)/",
      pos: "adv.",
      posClass: "adv",
      meaning: "在将来",
      root: {
        parts: [
          { text: "in", type: "root", label: "在……中" },
          { text: "the future", type: "root", label: "未来" }
        ],
        explain: "in（在……里）+ the future（未来）= 在未来中 = 在将来。注意区分：in the future（在将来的某个时候，泛指）和 in future（从今以后，英式英语）。"
      },
      memory: "in the future = 在未来——想象自己站在时间线上，'in'（在）'the future'（未来那段）里。",
      family: ["in the past（在过去）", "at present（目前）", "from now on（从现在起）"],
      synonyms: ["someday（有一天）", "one day（将来某天）", "later（以后）"],
      antonyms: ["in the past（在过去）"],
      sentences: [
        { en: "In the future, robots will help us do housework.", zh: "在将来，机器人将帮我们做家务。" },
        { en: "What do you want to be in the future?", zh: "你将来想成为什么？" }
      ],
      fun: "对未来的畅想是人类永恒的话题。100年前人们幻想的未来包括：人住在月球上、食物变成药片、每个人都有飞行器。虽然很多没有实现，但智能手机的出现超越了所有人的想象！",
      usage: "in the future 常与 will 连用，表示对未来的预测或计划。这是描述未来的标配短语，写作文时用它开头很加分：'In the future, I want to...'。"
    },
    {
      word: "need",
      phonetic: "/niːd/",
      pos: "v.",
      posClass: "v",
      meaning: "需要",
      root: {
        parts: [],
        explain: "古英语 nēodian，来自 nēod（需要/必要）。这是一个很古老的基础词汇。need 可以做实义动词（I need water）也可以做情态动词（Need I go?），后一种用法在考试中经常出现。"
      },
      memory: "need 和 'knee'd（跪着的）'谐音——跪下来求你，我太需要了！",
      family: ["need（n. 需要）", "needful（必要的）", "needless（不必要的）", "needy（贫穷的/需要帮助的）"],
      synonyms: ["require（需要）", "want（需要，口语）", "demand（需求）"],
      antonyms: [],
      sentences: [
        { en: "We need to study hard.", zh: "我们需要努力学习。" },
        { en: "Will students need books in the future?", zh: "未来学生还需要书本吗？" }
      ],
      fun: "马斯洛需求层次理论（Maslow's hierarchy of needs）把人的需求分为五个层次：生理需求、安全需求、社交需求、尊重需求和自我实现。这是心理学最著名的理论之一。",
      usage: "need to do sth. = 需要做某事。need doing = 需要被做（= need to be done）。needn't = 不必（情态动词用法）。A friend in need is a friend indeed.（患难见真情。）"
    },
    {
      word: "will",
      phonetic: "/wɪl/",
      pos: "v.",
      posClass: "v",
      meaning: "将；将要",
      root: {
        parts: [],
        explain: "古英语 willan（想要/愿意）。will 最初的意思是'意愿'，后来才变成表示将来时的助动词。名词 will = 意志/遗嘱，还保留着原始含义。Where there is a will, there is a way.（有志者事竟成。）"
      },
      memory: "will = 'we ill'（我们会）——我们会做到的！will 表示将来要发生的事。",
      family: ["will（n. 意志/遗嘱）", "willing（愿意的）", "unwilling（不情愿的）", "willpower（意志力）", "goodwill（善意）"],
      synonyms: ["shall（将要）", "be going to（将要）"],
      antonyms: ["won't（将不会）"],
      sentences: [
        { en: "Life will be very different in the future.", zh: "未来的生活将会大不相同。" },
        { en: "Will students use computers in class?", zh: "学生们将会在课堂上使用电脑吗？" }
      ],
      fun: "will 和 be going to 都表示将来，但有细微区别：will 用于临时决定或预测（It will rain tomorrow. 明天会下雨），be going to 用于已计划好的事（I'm going to visit my grandma. 我打算去看奶奶）。考试常考这个区别！",
      usage: "will + 动词原形 构成一般将来时。否定形式：will not = won't。疑问句：Will you...? 缩写：I'll, you'll, he'll, she'll, we'll, they'll。"
    },
    {
      word: "maybe",
      phonetic: "/ˈmeɪbi/",
      pos: "adv.",
      posClass: "adv",
      meaning: "也许；可能",
      root: {
        parts: [
          { text: "may", type: "root", label: "可能" },
          { text: "be", type: "root", label: "是" }
        ],
        explain: "may（可能）+ be（是）= 可能是 = 也许。这是两个词合并而成的。注意区分：maybe（副词，一个词）和 may be（情态动词+动词，两个词）。He maybe late.（错误）He may be late.（正确）Maybe he is late.（正确）"
      },
      memory: "maybe = may + be——'可能是'的意思！记住它是一个词，放在句首。",
      family: ["may（可能）", "perhaps（也许）", "possibly（可能地）"],
      synonyms: ["perhaps（也许）", "possibly（可能）", "probably（大概）"],
      antonyms: ["certainly（肯定地）", "definitely（一定）"],
      sentences: [
        { en: "Maybe we will have robots at home in the future.", zh: "也许将来我们家里会有机器人。" },
        { en: "Maybe it will rain tomorrow.", zh: "明天也许会下雨。" }
      ],
      fun: "maybe、perhaps 和 probably 有程度区别：able probably（大概70-80%可能）> maybe/perhaps（大概50%可能）。所以当别人问你要不要去玩，回答 maybe 基本等于'看情况再说'（很可能不去）。",
      usage: "maybe 通常放在句首：Maybe he is right. 而 may be 是'可能是'：He may be right. 这是常见的易混点！"
    },
    {
      word: "ask",
      phonetic: "/ɑːsk/",
      pos: "v.",
      posClass: "v",
      meaning: "问；询问",
      root: {
        parts: [],
        explain: "古英语 āscian（询问/请求）。这是一个非常古老的英语本土词汇。ask 有两层意思：①问（ask a question）②请求（ask for help）。"
      },
      memory: "ask 发音像'阿斯克'——'啊，谁可（以告诉我）'——所以就要去问(ask)！",
      family: ["ask for（请求/要求）", "ask about（询问关于）", "asking（n. 询问）"],
      synonyms: ["inquire（询问）", "question（质问）", "request（请求）"],
      antonyms: ["answer（回答）", "reply（回复）"],
      sentences: [
        { en: "Can I ask you a question?", zh: "我能问你一个问题吗？" },
        { en: "Don't be afraid to ask questions in class.", zh: "不要害怕在课堂上提问。" }
      ],
      fun: "英语有句话：'There's no such thing as a stupid question.'（没有愚蠢的问题。）西方课堂鼓励学生大胆提问，老师会说：'Any questions? Don't be shy, just ask!' 这和中国课堂的风格有所不同。",
      usage: "ask sb. sth. = 问某人某事。ask sb. to do sth. = 请求某人做某事。ask for = 请求/要求。ask about = 询问关于。"
    },
    {
      word: "question",
      phonetic: "/ˈkwestʃən/",
      pos: "n.",
      posClass: "n",
      meaning: "问题",
      root: {
        parts: [
          { text: "quest-", type: "root", label: "拉丁语 quaerere = 寻找/询问" },
          { text: "-ion", type: "suffix", label: "名词后缀" }
        ],
        explain: "来自拉丁语 quaestionem（寻找/审问）。quest（探索/寻求）是同根词——提问就是一种对知识的寻求。request（请求）= re（再）+ quest（寻求）= 再次寻求。"
      },
      memory: "question = quest（探索）+ ion——提问就是一种探索！有问题说明你在思考。",
      family: ["quest（探索）", "request（请求）", "questionable（可疑的）", "questionnaire（问卷）"],
      synonyms: ["query（疑问）", "problem（问题/难题）"],
      antonyms: ["answer（答案）", "solution（解决方案）"],
      sentences: [
        { en: "Who can answer this question?", zh: "谁能回答这个问题？" },
        { en: "I have a question about the future.", zh: "我有一个关于未来的问题。" }
      ],
      fun: "question 和 problem 有区别：question 是需要回答的问题（answer a question），problem 是需要解决的问题/难题（solve a problem）。考试卷上的'题目'用 question，数学难题用 problem。",
      usage: "ask a question = 提问。answer a question = 回答问题。out of the question = 不可能的。no question = 毫无疑问。"
    },
    {
      word: "level",
      phonetic: "/ˈlevl/",
      pos: "n.",
      posClass: "n",
      meaning: "水平；层次",
      root: {
        parts: [{ text: "level", type: "root", label: "拉丁语 libella = 水平仪" }],
        explain: "来自拉丁语 libella（水平仪），是 libra（天平/秤）的小称形式。level 最初指'水平的、平坦的'，引申为'水平/层次'。Libra（天秤座）也来自同一个词根。"
      },
      memory: "level 正着读和倒着读都是 level——它是一个回文词！水平如镜，左右对称，和 level 的拼写一样对称。",
      family: ["level（adj. 平的/v. 使平坦）", "level up（升级）", "sea level（海平面）", "multilevel（多层的）"],
      synonyms: ["standard（标准）", "grade（等级）", "degree（程度）"],
      antonyms: [],
      sentences: [
        { en: "What level is your English?", zh: "你的英语是什么水平？" },
        { en: "We need to improve our reading level.", zh: "我们需要提高阅读水平。" }
      ],
      fun: "level 是英语中为数不多的回文词（palindrome）之一——正着读倒着读都一样！其他回文词还有：noon（中午）、eye（眼睛）、madam（女士）、racecar（赛车）。在游戏里 level up = 升级，是玩家最开心的时刻！",
      usage: "at the same level = 在同一水平。sea level = 海平面。level 做形容词表示'平的'：level ground（平地）。"
    },
    {
      word: "able",
      phonetic: "/ˈeɪbl/",
      pos: "adj.",
      posClass: "adj",
      meaning: "能够",
      root: {
        parts: [{ text: "able", type: "root", label: "拉丁语 habilis = 易于处理的" }],
        explain: "来自拉丁语 habilis（方便的/能干的），与 have 同源。-able 作为后缀出现在大量形容词中：readable（可读的）、washable（可洗的）、comfortable（舒适的）。掌握 -able 就能理解几百个英语形容词！"
      },
      memory: "able = a（一个）+ ble（不了）？不对！able = 有能力的。记住：be able to = can = 能够做。",
      family: ["ability（能力）", "unable（不能的）", "disable（使残疾）", "enable（使能够）", "capable（有能力的）"],
      synonyms: ["capable（有能力的）", "competent（胜任的）"],
      antonyms: ["unable（不能的）", "incapable（无能力的）"],
      sentences: [
        { en: "Will we be able to fly to the moon one day?", zh: "我们有一天能飞上月球吗？" },
        { en: "She is able to speak three languages.", zh: "她能说三种语言。" }
      ],
      fun: "-able 后缀是英语里的'超级明星'：enjoyable（令人愉快的）、comfortable（舒适的）、fashionable（时尚的）、unbelievable（难以置信的）。看到一个新词如果结尾是 -able，它大概率表示'可以……的'。",
      usage: "be able to = can（能够），但 be able to 可以用于各种时态（will be able to, was able to），而 can 只有现在时和过去时（can, could）。这是 be able to 的优势！"
    },
    {
      word: "be able to",
      phonetic: "/biː ˈeɪbl tuː/",
      pos: "v.",
      posClass: "v",
      meaning: "能够",
      root: {
        parts: [
          { text: "be", type: "root", label: "是" },
          { text: "able", type: "root", label: "有能力的" },
          { text: "to", type: "root", label: "去做" }
        ],
        explain: "be（是）+ able（有能力的）+ to（做某事）= 有能力去做某事 = 能够。be able to 和 can 意思相近，但 be able to 更灵活，可以用在 will 后面表示将来的能力：will be able to。"
      },
      memory: "be able to = be（是）able（有能力的）to（去做）——'你是有能力的去做的'= 你能够做！",
      family: ["can（能够）", "could（能够，过去式）", "be capable of（有能力做）"],
      synonyms: ["can（能够）", "be capable of（有能力做）", "manage to（设法做到）"],
      antonyms: ["be unable to（不能够）"],
      sentences: [
        { en: "In the future, everyone will be able to travel to space.", zh: "在未来，每个人都将能够去太空旅行。" },
        { en: "I hope I'll be able to speak English well.", zh: "我希望我能说一口流利的英语。" }
      ],
      fun: "can 和 be able to 有一个微妙区别：说过去成功做到了某件具体的事，用 was/were able to 比 could 更准确。例如：'After hours of trying, I was able to fix the computer.'（经过几个小时的尝试，我终于修好了电脑。）用 could 则暗示'有能力但不一定做了'。",
      usage: "will be able to = 将能够（将来时，can 不能直接跟 will）。was/were able to = 过去能够。have been able to = 一直能够。be able to 弥补了 can 没有将来时和完成时的不足。"
    },
    {
      word: "more",
      phonetic: "/mɔː(r)/",
      pos: "adj.",
      posClass: "adj",
      meaning: "更多的",
      root: {
        parts: [],
        explain: "古英语 māra（更大的）。more 是 many/much 的比较级。英语的比较级有两种方式：短词加 -er（bigger），长词前面加 more（more beautiful）。more 本身就是一个比较级！"
      },
      memory: "more 的发音像'摸'——想要更多(more)就伸手去摸！也可以记：more = mo(没) + re(了) → 还没够？要更多！",
      family: ["more（adv. 更多地）", "moreover（而且）", "furthermore（此外）", "anymore（不再）"],
      synonyms: ["additional（额外的）", "extra（另外的）", "further（更多的）"],
      antonyms: ["less（更少的）", "fewer（更少的）"],
      sentences: [
        { en: "We need more time to finish the project.", zh: "我们需要更多时间来完成这个项目。" },
        { en: "Will there be more robots in the future?", zh: "未来会有更多机器人吗？" }
      ],
      fun: "英语里有个经典广告语：'More is more!'（越多越好！）但也有人说 'Less is more.'（少即是多。）到底哪个对呢？看情况：吃冰淇淋时 more is more，做作业时 less is more！",
      usage: "more + 多音节形容词 = 比较级：more beautiful, more interesting。more and more = 越来越多。no more = 不再。what's more = 而且。"
    },
    {
      word: "free",
      phonetic: "/friː/",
      pos: "adj.",
      posClass: "adj",
      meaning: "免费的；自由的",
      root: {
        parts: [],
        explain: "古英语 frēo（自由的/不受约束的）。与德语 frei、friend（朋友）同源。古代'自由人'是指部落中有亲友关系的人——朋友(friend)就是自由的(free)人。"
      },
      memory: "free = '飞'——像鸟一样自由地飞翔！free 有两个意思：自由的、免费的。免费 = 不受金钱约束 = 自由。",
      family: ["freedom（自由）", "freely（自由地）", "free（v. 释放）", "carefree（无忧无虑的）", "freelance（自由职业者）"],
      synonyms: ["free of charge（免费的）", "complimentary（赠送的）", "independent（独立的/自由的）"],
      antonyms: ["expensive（昂贵的）", "imprisoned（被囚禁的）"],
      sentences: [
        { en: "In the future, education might be free for everyone.", zh: "在未来，教育可能对所有人免费。" },
        { en: "Are you free this afternoon?", zh: "你今天下午有空吗？" }
      ],
      fun: "free 有三个常用意思：①免费的（free WiFi）②自由的（free country）③有空的（Are you free?）。注意区分 free 和 for free：The ticket is free. = I got the ticket for free.（票是免费的。）",
      usage: "free 做'有空的'也很常用：Are you free?（你有空吗？）= Do you have time? feel free to = 随意做某事（礼貌用语）。"
    },
    {
      word: "heavy",
      phonetic: "/ˈhevi/",
      pos: "adj.",
      posClass: "adj",
      meaning: "沉的；重的",
      root: {
        parts: [],
        explain: "古英语 hefig（重的），与 heave（举起）同源。heavy 的东西需要用力 heave（举起）——因为太重了！"
      },
      memory: "heavy 发音像'嘿唯'——嘿，唯一搬得动这么重的东西的人是大力士！",
      family: ["heavily（沉重地）", "heaviness（沉重）", "heavyweight（重量级）", "heavy-duty（重型的）"],
      synonyms: ["weighty（重的）", "hefty（沉甸甸的）"],
      antonyms: ["light（轻的）", "lightweight（轻量的）"],
      sentences: [
        { en: "This schoolbag is too heavy.", zh: "这个书包太重了。" },
        { en: "In the future, computers will not be so heavy.", zh: "在未来，电脑不会这么重了。" }
      ],
      fun: "heavy 不只是形容重量！heavy rain = 大雨，heavy traffic = 交通拥堵，heavy smoker = 烟鬼，heavy sleeper = 睡得很沉的人。heavy metal = 重金属（音乐类型）——因为这种音乐'重'得像金属！",
      usage: "heavy 的引申义很多：heavy rain（大雨）、heavy traffic（拥堵的交通）、heavy heart（沉重的心情）。考试中 heavy 的反义词 light 也是高频考点。"
    },
    {
      word: "light",
      phonetic: "/laɪt/",
      pos: "adj.",
      posClass: "adj",
      meaning: "轻的",
      root: {
        parts: [],
        explain: "古英语 lēoht/līht，一个是'光/明亮'，一个是'轻的'——两个不同的词长得一样！light 作'光'来自印欧语根 leuk-（发光），作'轻的'来自另一个词根 legwh-（轻的）。"
      },
      memory: "light = 轻的/光。轻的东西会'飞起来'，飞到有光(light)的天上！light 是个一词多义冠军。",
      family: ["light（n. 光/灯 v. 点燃）", "lighten（减轻/照亮）", "lighter（打火机/更轻的）", "lightning（闪电）", "lightweight（轻量的）"],
      synonyms: ["lightweight（轻的）", "feathery（轻如羽毛的）"],
      antonyms: ["heavy（重的）", "dark（暗的）"],
      sentences: [
        { en: "This bag is very light. I can carry it easily.", zh: "这个包很轻。我可以轻松地拎着它。" },
        { en: "In the future, schoolbags will be lighter.", zh: "在未来，书包会更轻。" }
      ],
      fun: "light 可能是英语里意思最多的单词之一：①光②灯③轻的④浅色的⑤点燃。light a fire（点火）、light blue（浅蓝色）、light meal（简餐）、light reading（轻松读物）——全都是同一个词！",
      usage: "light 做'轻的'时比较级是 lighter，最高级是 lightest。light 做'点燃'时过去式可以是 lit 或 lighted。"
    },
    {
      word: "machine",
      phonetic: "/məˈʃiːn/",
      pos: "n.",
      posClass: "n",
      meaning: "机器",
      root: {
        parts: [{ text: "machin-", type: "root", label: "希腊语 mēkhanē = 装置/巧妙的发明" }],
        explain: "来自希腊语 mēkhanē（装置/巧妙的发明）→ 拉丁语 machina → 法语 machine。同根词 mechanic（机械师）、mechanism（机制）、mechanical（机械的）。"
      },
      memory: "machine 发音 /məˈʃiːn/，注意重音在第二个音节。联想'马+sheen（光泽）'——闪闪发光的机器！",
      family: ["machinery（机械/机器总称）", "mechanic（机械师）", "mechanical（机械的）", "mechanism（机制）"],
      synonyms: ["device（装置）", "apparatus（设备）", "equipment（设备）"],
      antonyms: [],
      sentences: [
        { en: "Machines will do a lot of work for us in the future.", zh: "在未来，机器将为我们做很多工作。" },
        { en: "This is a washing machine.", zh: "这是一台洗衣机。" }
      ],
      fun: "machine learning（机器学习）是当今最热门的技术之一，它让计算机能像人一样'学习'。你每天用的手机人脸解锁、语音助手、短视频推荐，背后都是 machine learning 在工作！",
      usage: "washing machine = 洗衣机。vending machine = 自动售货机。time machine = 时光机。machine 常与 use, operate, run 搭配。"
    },
    {
      word: "robot",
      phonetic: "/ˈrəʊbɒt/",
      pos: "n.",
      posClass: "n",
      meaning: "机器人",
      root: {
        parts: [{ text: "robot", type: "root", label: "捷克语 robota = 苦力/强迫劳动" }],
        explain: "来自捷克语 robota（苦力/强迫劳动）。1920年捷克作家恰佩克在科幻剧本《罗素姆万能机器人》中首创了这个词。robot 本义就是'被迫干活的苦力'——对机器人来说还挺准确的！"
      },
      memory: "robot 音译就是'罗伯特'——想象一个叫罗伯特的机器人在帮你做家务！",
      family: ["robotics（机器人学）", "robotic（机器人的/机械的）", "android（仿人机器人）"],
      synonyms: ["android（仿人机器人）", "automaton（自动机）", "bot（机器人程序）"],
      antonyms: [],
      sentences: [
        { en: "In the future, robots will help us clean the house.", zh: "在未来，机器人将帮助我们打扫房子。" },
        { en: "Would you like to have a robot at home?", zh: "你想在家里拥有一个机器人吗？" }
      ],
      fun: "世界上第一个'公民'机器人叫索菲亚(Sophia)，她在2017年获得了沙特阿拉伯的公民身份。日本是机器人最多的国家，他们甚至有机器人酒店——从入住到退房全由机器人服务！",
      usage: "robot 是可数名词。注意 robot 和 bot 的区别：robot 通常指实体机器人，bot 指网络上的软件机器人（如聊天机器人 chatbot）。"
    },
    {
      word: "everything",
      phonetic: "/ˈevriθɪŋ/",
      pos: "pron.",
      posClass: "pron",
      meaning: "每样东西；所有事物",
      root: {
        parts: [
          { text: "every", type: "root", label: "每一个" },
          { text: "thing", type: "root", label: "东西" }
        ],
        explain: "every（每一个）+ thing（东西）= 每一样东西 = 所有事物。类似的合成代词：everyone（每个人）、everywhere（到处）、everybody（每个人）、everyday（每天的）。"
      },
      memory: "everything = every + thing = 每样东西。记住这个'every-'家族：everyone（每人）、everything（每物）、everywhere（每处）。",
      family: ["everyone（每个人）", "everybody（每个人）", "everywhere（到处）", "everyday（每天的）"],
      synonyms: ["all（全部）", "all things（所有事物）"],
      antonyms: ["nothing（什么也没有）"],
      sentences: [
        { en: "Everything will change in the future.", zh: "未来一切都会改变。" },
        { en: "Is everything OK?", zh: "一切都好吗？" }
      ],
      fun: "爱因斯坦说过：'Everything should be made as simple as possible, but not simpler.'（一切都应该尽可能简单，但不要过于简单。）这句话本身就是对 everything 最好的诠释！",
      usage: "everything 是单数代词，谓语动词用单数：Everything is ready.（一切就绪。）Money isn't everything.（钱不是万能的。）——但没有钱是万万不能的！"
    },
    {
      word: "long",
      phonetic: "/lɒŋ/",
      pos: "adj.",
      posClass: "adj",
      meaning: "长的；远的",
      root: {
        parts: [],
        explain: "古英语 lang/long（长的）。这是一个非常基础的日耳曼语词汇。long 做形容词表示'长的'，做副词表示'长久地'，做动词表示'渴望'（long for = 渴望）。"
      },
      memory: "long 的 o 发长音 /ɒ/，正好和它的意思'长'相配——发音长，意思也是长！",
      family: ["long（adv. 长久地 v. 渴望）", "length（长度）", "lengthen（加长）", "belong（属于）", "along（沿着）", "prolong（延长）"],
      synonyms: ["lengthy（冗长的）", "extended（延长的）"],
      antonyms: ["short（短的）", "brief（短暂的）"],
      sentences: [
        { en: "It's a long way from my home to school.", zh: "从我家到学校路很远。" },
        { en: "How long will it take to get there?", zh: "到那里要多长时间？" }
      ],
      fun: "long 做动词是'渴望'的意思：I long for the summer holiday.（我渴望暑假。）这个用法很文学、很浪漫。最长的英语单词之一是 pneumonoultramicroscopicsilicovolcanoconiosis（45个字母，一种肺病）——真的很 long！",
      usage: "how long = 多长/多久。long time no see = 好久不见（这实际上是从中文'好久不见'直译的！）。as long as = 只要。before long = 不久之后。"
    },
    {
      word: "hour",
      phonetic: "/ˈaʊə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "小时",
      root: {
        parts: [{ text: "hour", type: "root", label: "希腊语 hōra = 季节/时间" }],
        explain: "来自希腊语 hōra（季节/时间段），拉丁语 hora。h 不发音！/ˈaʊə(r)/。同根词 horoscope（星座运势）= horo（时间）+ scope（观察）= 观察时间/星象。"
      },
      memory: "hour 的 h 不发音！读 /ˈaʊə/，和 'our'（我们的）发音一样。所以要说 'an hour' 不是 'a hour'！",
      family: ["hourly（每小时的）", "hours（营业时间）", "after hours（下班后）", "rush hour（高峰期）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "There are twenty-four hours in a day.", zh: "一天有二十四小时。" },
        { en: "It takes about one hour to get to school.", zh: "到学校大约需要一个小时。" }
      ],
      fun: "为什么一小时是60分钟而不是100分钟？因为这个60进制来自古巴比伦人！他们用60进制计算，就像我们用10进制一样。60的好处是它能被2、3、4、5、6、10、12、15、20、30整除，方便分割时间。",
      usage: "注意冠词：an hour（h不发音，所以用an不用a）。half an hour = 半小时。rush hour = 高峰期。office hours = 办公时间。"
    },
    {
      word: "short",
      phonetic: "/ʃɔːt/",
      pos: "adj.",
      posClass: "adj",
      meaning: "短的；矮的",
      root: {
        parts: [],
        explain: "古英语 sceort/scort（短的）。与 shirt（衬衫）和 skirt（裙子）可能同源——它们都是'截短的'衣服。short 既可以形容物体（短的），也可以形容人（矮的）。"
      },
      memory: "short 里有 'or't——'或者'短——东西要么长(long)要么短(short)！short 和 shirt、skirt 像一家人，都和'短'有关。",
      family: ["short（n. 短裤 adv. 缺少地）", "shortage（短缺）", "shorten（缩短）", "shortcut（捷径）", "shortly（不久）", "shorts（短裤）"],
      synonyms: ["brief（短暂的）", "little（矮小的）"],
      antonyms: ["long（长的）", "tall（高的）"],
      sentences: [
        { en: "In the future, working hours will be shorter.", zh: "在未来，工作时间会更短。" },
        { en: "It's only a short walk to the park.", zh: "到公园只需走一小段路。" }
      ],
      fun: "shortcut = short + cut = 抄近路 = 捷径。电脑上的键盘快捷键也叫 shortcut：Ctrl+C 是复制的 shortcut，Ctrl+V 是粘贴的 shortcut。short story = 短篇小说；short film = 短片。",
      usage: "short 形容人时表示'矮'（不太礼貌）。be short of = 缺少。in short = 简而言之。for short = 简称（His name is Robert, Bob for short.）"
    },
    {
      word: "job",
      phonetic: "/dʒɒb/",
      pos: "n.",
      posClass: "n",
      meaning: "工作",
      root: {
        parts: [],
        explain: "中古英语 jobbe（一块/一堆），原义可能是'一件活儿/一堆要做的事'。job 强调具体的一份工作（可数），而 work 强调工作这个概念（不可数）。"
      },
      memory: "job = '交不'——交不了差就要丢 job（工作）！也可以记 job 和 'jab'（戳）谐音——工作就像被戳着往前走。",
      family: ["jobless（失业的）", "job hunting（求职）", "odd jobs（零工）"],
      synonyms: ["work（工作）", "occupation（职业）", "career（事业）", "profession（专业工作）"],
      antonyms: [],
      sentences: [
        { en: "What job do you want to do in the future?", zh: "你将来想做什么工作？" },
        { en: "Robots may take over some jobs.", zh: "机器人可能会取代一些工作。" }
      ],
      fun: "job 和 work 有什么区别？job 是可数名词，指具体一份工作（I have a job.）；work 是不可数名词，指工作的行为（I have a lot of work.）。不能说 'I have a work'！Steve Jobs（乔布斯）姓 Jobs——苹果公司创始人的姓就是'工作们'。",
      usage: "job 是可数名词：a job, two jobs。Good job! = 干得好！do a good job = 干得漂亮。out of a job = 失业了。"
    },
    {
      word: "rain",
      phonetic: "/reɪn/",
      pos: "n.&v.",
      posClass: "n",
      meaning: "雨；下雨",
      root: {
        parts: [],
        explain: "古英语 regn/rēn（雨）。与德语 Regen 同源。rain 是英语中最基础的天气词汇之一。它的同音词很多：reign（统治）、rein（缰绳）——三个词发音完全一样！"
      },
      memory: "rain 和 train（火车）押韵——在 rain（雨）中坐 train（火车）！记住同音词：rain（雨）= reign（统治）= rein（缰绳）。",
      family: ["rainy（下雨的）", "rainbow（彩虹）", "raincoat（雨衣）", "rainfall（降雨量）", "rainforest（雨林）"],
      synonyms: ["shower（阵雨）", "downpour（倾盆大雨）", "drizzle（毛毛雨）"],
      antonyms: ["sunshine（阳光）", "drought（干旱）"],
      sentences: [
        { en: "Will it rain tomorrow?", zh: "明天会下雨吗？" },
        { en: "Don't forget your umbrella. It's going to rain.", zh: "别忘了带伞。要下雨了。" }
      ],
      fun: "rainbow = rain + bow（弓）= 雨后的弓形彩带 = 彩虹！英语里关于雨的表达超丰富：It's raining cats and dogs.（倾盆大雨，直译：在下猫和狗）——这个说法的来源众说纷纭，但画面感满分！",
      usage: "rain 做动词时是无人称用法：It rains. / It's raining. 做名词时通常加 the：in the rain（在雨中）。rainy day 也可以比喻'困难时期'：save money for a rainy day（未雨绸缪）。"
    },
    {
      word: "weather",
      phonetic: "/ˈweðə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "天气",
      root: {
        parts: [],
        explain: "古英语 weder（天气/风暴）。和 wind（风）同源——天气最初就是指'风'带来的变化。weather 是英国人最爱聊的话题——因为英国天气变化太频繁了！"
      },
      memory: "weather = we(我们) + a + ther(there那里) → 我们那里的天气！或者记：weather 和 whether（是否）发音一样但拼写不同。",
      family: ["weather forecast（天气预报）", "weatherman（气象员）", "weather-beaten（风吹日晒的）"],
      synonyms: ["climate（气候）"],
      antonyms: [],
      sentences: [
        { en: "What will the weather be like in the future?", zh: "未来的天气会是什么样的？" },
        { en: "The weather is very hot today.", zh: "今天天气很热。" }
      ],
      fun: "英国人最爱聊天气！'Nice weather, isn't it?' 是经典的英式寒暄。这不是因为英国人无聊，而是因为英国天气真的太多变了——一天之内可能经历晴天、阴天、下雨、冰雹！weather 和 climate 有区别：weather 是短期天气，climate 是长期气候。",
      usage: "weather 是不可数名词。What's the weather like? = How's the weather?（天气怎么样？）under the weather = 身体不舒服（英语俚语）。"
    },
    {
      word: "true",
      phonetic: "/truː/",
      pos: "adj.",
      posClass: "adj",
      meaning: "真的；真实的",
      root: {
        parts: [],
        explain: "古英语 trēowe（忠实的/可信的），与 trust（信任）、tree（树）远古同源！为什么和'树'有关？因为古人认为树是坚定不移的，就像真理一样。true → trust → tree，真理像大树一样稳固。"
      },
      memory: "true 和 tree（树）同源——真理像大树一样不会动摇！true = 'T + rule' → 真理就是规则。",
      family: ["truly（真正地）", "truth（真相）", "untrue（不真实的）", "trust（信任）", "trustworthy（值得信赖的）"],
      synonyms: ["real（真实的）", "genuine（真正的）", "actual（实际的）"],
      antonyms: ["false（假的）", "untrue（不真实的）", "fake（伪造的）"],
      sentences: [
        { en: "Is it true that robots will do all the work?", zh: "机器人会做所有的工作是真的吗？" },
        { en: "I hope my dream will come true.", zh: "我希望我的梦想会实现。" }
      ],
      fun: "True or False（判断对错）是英语考试中最常见的题型之一。True story = 真实故事。在网上 'too good to be true' = 好得不像是真的——通常意味着这件事确实是假的！",
      usage: "come true = 实现（梦想成真）。It's true that... = ……是真的。true love = 真爱。注意：true 的副词形式是 truly（去掉 e 加 -ly）。"
    },
    {
      word: "come true",
      phonetic: "/kʌm truː/",
      pos: "v.",
      posClass: "v",
      meaning: "实现",
      root: {
        parts: [
          { text: "come", type: "root", label: "来/变成" },
          { text: "true", type: "root", label: "真实的" }
        ],
        explain: "come（变成）+ true（真实的）= 变成真实的 = 实现。come 在这里不是'来'，而是'变成'的意思（和 come alive 变得生动 类似）。梦想从虚幻'走来'变成了现实——come true！"
      },
      memory: "come true = 梦想走过来(come)变成了真的(true)！像童话里说的：Dreams come true!（梦想成真！）",
      family: ["dream come true（梦想成真）", "realize（实现）", "achieve（达成）", "fulfill（实现）"],
      synonyms: ["be realized（被实现）", "be fulfilled（被实现）", "materialize（实现）"],
      antonyms: ["fall through（落空）"],
      sentences: [
        { en: "I believe my dream will come true one day.", zh: "我相信我的梦想有一天会实现。" },
        { en: "With hard work, anything can come true.", zh: "通过努力，任何事情都能实现。" }
      ],
      fun: "迪士尼的经典名言就是：'Dreams come true!'（梦想成真！）几乎每部迪士尼电影都在传递这个信息。Walt Disney 本人说过：'All our dreams can come true, if we have the courage to pursue them.'（只要有勇气去追求，所有梦想都能实现。）",
      usage: "come true 的主语通常是 dream、wish、hope 等词，不能用人做主语。I come true.（错误）→ My dream comes true.（正确）。注意：不能说 come truly 或 become true。"
    },
    {
      word: "wind",
      phonetic: "/wɪnd/",
      pos: "n.",
      posClass: "n",
      meaning: "风",
      root: {
        parts: [],
        explain: "古英语 wind（风），与 weather（天气）同源。有趣的是 wind 有两个完全不同的读音和意思：/wɪnd/（名词：风）和 /waɪnd/（动词：蜿蜒/上发条）。"
      },
      memory: "wind /wɪnd/ = 风。注意和 wind /waɪnd/（缠绕/蜿蜒）区分！发音不同意思完全不同。风——'温的'风轻轻吹来。",
      family: ["windy（有风的）", "windmill（风车）", "window（窗户=风眼）", "windshield（挡风玻璃）"],
      synonyms: ["breeze（微风）", "gale（大风）", "gust（阵风）"],
      antonyms: ["calm（无风的/平静）"],
      sentences: [
        { en: "The wind is very strong today.", zh: "今天的风很大。" },
        { en: "Will we use wind power in the future?", zh: "未来我们会使用风力发电吗？" }
      ],
      fun: "window = wind（风）+ ow（眼）= 风之眼 = 窗户！古代北欧人的房子墙上开个洞让风吹进来通气，这个洞就叫'风眼'，后来变成了 window（窗户）。风力发电（wind power）是重要的清洁能源。",
      usage: "wind /wɪnd/ 做名词是'风'，wind /waɪnd/ 做动词是'蜿蜒/上发条'。it's windy = 外面有风。wind energy/power = 风能。in the wind = 即将发生。"
    },
    {
      word: "internet",
      phonetic: "/ˈɪntənet/",
      pos: "n.",
      posClass: "n",
      meaning: "互联网",
      root: {
        parts: [
          { text: "inter-", type: "prefix", label: "在……之间/互相" },
          { text: "net", type: "root", label: "网/网络" }
        ],
        explain: "inter-（互相）+ net（网络）= 互相连接的网 = 互联网。中文'互联网'就是对 internet 的完美翻译：互相（inter-）联接的网（net）。前身是1960年代美国军方的 ARPANET。"
      },
      memory: "internet = inter（互相）+ net（网）= 互联网。中文翻译和英文结构完美对应！",
      family: ["net（网/网络）", "network（网络）", "intranet（内网）", "online（在线的）", "offline（离线的）"],
      synonyms: ["the web（网络）", "cyberspace（网络空间）", "the net（网络）"],
      antonyms: [],
      sentences: [
        { en: "The internet will be even faster in the future.", zh: "在未来，互联网会更加快速。" },
        { en: "We can learn many things on the internet.", zh: "我们可以在互联网上学到很多东西。" }
      ],
      fun: "互联网的前身 ARPANET 最初只连接了4台电脑！如今全球有超过50亿人使用互联网。WiFi 这个词其实并不代表什么——它不是 'Wireless Fidelity' 的缩写，只是一个听起来像 Hi-Fi（高保真）的品牌名。",
      usage: "the internet 通常加 the（因为只有一个互联网）。on the internet = 在互联网上。surf the internet = 上网冲浪。注意：internet 以前首字母大写 Internet，现在越来越多人小写 internet。"
    },
    {
      word: "traffic",
      phonetic: "/ˈtræfɪk/",
      pos: "n.",
      posClass: "n",
      meaning: "交通",
      root: {
        parts: [{ text: "traffic", type: "root", label: "意大利语 traffico = 贸易/运输" }],
        explain: "来自意大利语 traffico（贸易/运输），可能与阿拉伯语 tafriq（分配）有关。最初指商品的运输和贸易，后来专指道路上的车辆往来。traffic 的本质就是'来来往往的流动'。"
      },
      memory: "traffic 读起来像'踹飞客'——交通太堵了，让人想踹飞前面的车！也可以记：tra(踏) + ffic(非常疯狂) = 踏上非常疯狂的路 = 交通。",
      family: ["traffic jam（交通堵塞）", "traffic light（交通灯）", "traffic rules（交通规则）", "traffic police（交警）"],
      synonyms: ["transport（运输）", "vehicles（车辆）"],
      antonyms: [],
      sentences: [
        { en: "There will be less traffic in the future.", zh: "未来交通将不会那么拥堵。" },
        { en: "The traffic is very heavy this morning.", zh: "今天早上交通非常拥堵。" }
      ],
      fun: "traffic light（红绿灯）为什么是红黄绿三色？红色代表危险（停），绿色代表安全（行），黄色代表警告（注意）。世界上第一个交通灯在1868年安装在伦敦议会大厦前——不过它是用煤气灯的，后来还爆炸了！",
      usage: "traffic 是不可数名词，不能说 a traffic / many traffics。heavy traffic = 交通拥堵。light traffic = 交通通畅。traffic jam = 堵车（jam = 果酱/堵塞，车像果酱一样黏在一起！）"
    }
  ]
};

if(typeof window!=='undefined'){window.UNIT4=UNIT4;}

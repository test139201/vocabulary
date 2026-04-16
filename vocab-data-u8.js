// Unit 8: When is your birthday?
const UNIT8 = {
  id: 8,
  title: "When is your birthday?",
  theme: "日期与生日",
  color: "#f97316",
  words: [
    {
      word: "when",
      phonetic: "/wen/",
      pos: "adv.",
      posClass: "adv",
      meaning: "什么时候",
      root: { parts: [], explain: "古英语 hwenne。wh- 疑问词家族的时间成员：when = what + time。注意：when 的 wh 不发 /hw/，直接读 /w/。" },
      memory: "when 和 hen（母鸡）押韵——When does the hen lay eggs?（母鸡什么时候下蛋？）",
      family: ["whenever（无论何时）", "when 还可以做连词（当……的时候）"],
      synonyms: ["what time（什么时候）"],
      antonyms: [],
      sentences: [
        { en: "When is your birthday?", zh: "你的生日是什么时候？" },
        { en: "When do you get up?", zh: "你什么时候起床？" }
      ],
      fun: "when 做连词时引导时间从句：When I was young...（当我年轻时……）。这是讲故事的经典开头，相当于中文的'当年……'。",
      usage: "when 做疑问词（When is it?）也做连词（When I grow up...）。since when = 从什么时候开始。"
    },
    {
      word: "month",
      phonetic: "/mʌnθ/",
      pos: "n.",
      posClass: "n",
      meaning: "月；月份",
      root: { parts: [], explain: "古英语 mōnað，与 moon（月亮）同源！一个月 = 一个月亮周期（29.5天）。全世界很多语言中'月份'和'月亮'都是同一个词。" },
      memory: "month 来自 moon（月亮）——月亮转一圈就是一个月！moon → month，一目了然。",
      family: ["monthly（每月的）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "There are twelve months in a year.", zh: "一年有十二个月。" },
        { en: "What month is it?", zh: "现在是几月？" }
      ],
      fun: "月份名称的故事：January（一月）来自罗马门神 Janus（有两张脸，一张看过去一张看未来）；March（三月）来自战神 Mars；July（七月）= Julius Caesar（凯撒大帝）；August（八月）= Augustus（奥古斯都大帝）。",
      usage: "in January/February... = 在一月/二月。months 的 th 发 /θ/，但 months 连读时很难发——可以简化为 /mʌns/。"
    },
    {
      word: "January",
      phonetic: "/ˈdʒænjuəri/",
      pos: "n.",
      posClass: "n",
      meaning: "一月",
      root: { parts: [], explain: "来自罗马门神 Janus——他有两张脸，一张朝前看（新年），一张朝后看（旧年）。一月是新旧交替之月！" },
      memory: "January = Janus（双面门神）+ ary。一月站在新旧年的门口，一面看去年，一面看今年。",
      family: [],
      synonyms: [],
      antonyms: [],
      sentences: [{ en: "My birthday is in January.", zh: "我的生日在一月。" }],
      fun: "Janus 是罗马神话中的门神，掌管开始和结束、过去和未来。他有两张脸，所以 'two-faced'（两面派的）和 Janus 有关。",
      usage: "月份首字母必须大写！in January（在一月），不需要加 the。"
    },
    {
      word: "February",
      phonetic: "/ˈfebruəri/",
      pos: "n.",
      posClass: "n",
      meaning: "二月",
      root: { parts: [], explain: "来自拉丁语 februum（净化仪式）。二月在古罗马是举行净化仪式的月份，为新年做准备。" },
      memory: "February 的第一个 r 常被省略读成 'Febuary'——但正式拼写有两个 r！Feb-ru-ary。",
      family: [],
      synonyms: [],
      antonyms: [],
      sentences: [{ en: "February has 28 or 29 days.", zh: "二月有28或29天。" }],
      fun: "二月为什么只有28天？因为罗马帝国的 Augustus（八月皇帝）嫉妒 Julius（七月皇帝）的月份有31天，就从二月借了一天给八月——于是二月就只剩28天了！",
      usage: "February 拼写注意：不要漏掉第一个 r。"
    },
    {
      word: "happy",
      phonetic: "/ˈhæpi/",
      pos: "adj.",
      posClass: "adj",
      meaning: "高兴的；幸福的",
      root: { parts: [], explain: "来自中古英语 hap（运气）+ -y。happy 的本义是'有好运的'——有好运当然就幸福了！happen（发生）也来自 hap（碰巧）。" },
      memory: "happy 来自 hap（运气）——Happy = 有好运 = 幸福！happen = hap + pen = 碰巧发生。perhaps = per + haps = 通过运气 = 也许。",
      family: ["happiness（幸福）", "happily（幸福地）", "unhappy（不幸的）", "happen（发生）", "perhaps（也许）"],
      synonyms: ["glad（高兴的）", "joyful（快乐的）", "cheerful（愉快的）"],
      antonyms: ["sad（悲伤的）", "unhappy（不幸的）", "miserable（痛苦的）"],
      sentences: [
        { en: "Happy birthday!", zh: "生日快乐！" },
        { en: "I'm so happy today.", zh: "我今天好开心。" }
      ],
      fun: "Happy 是七个小矮人之一的名字（快乐蛋）。happy 还衍生出 happy hour（快乐时光=酒吧打折时段）、happy ending（大团圆结局）。",
      usage: "Happy Birthday / Happy New Year / Happy Valentine's Day — happy 是祝福万能词！"
    },
    {
      word: "old",
      phonetic: "/əʊld/",
      pos: "adj.",
      posClass: "adj",
      meaning: "年老的；旧的",
      root: { parts: [], explain: "古英语 eald/ald。与 elder（年长的）和 alderman（市议员=年长者=长老）同源。" },
      memory: "How old are you? 直译是'你有多老？'但中文说'你多大了？'——同样的意思，角度不同。",
      family: ["older（更老的）", "oldest（最老的）", "elder（年长的）"],
      synonyms: ["aged（年老的）", "elderly（年长的）", "ancient（古老的）"],
      antonyms: ["young（年轻的）", "new（新的）"],
      sentences: [
        { en: "How old are you?", zh: "你多大了？" },
        { en: "I'm thirteen years old.", zh: "我十三岁了。" }
      ],
      fun: "old 的比较级有两个：older（更老的，通用）和 elder（年长的，只用于人，且只做定语：my elder brother）。elder 不能用于 than 之后。",
      usage: "How old...? = 多大年纪？years old = ……岁。old-fashioned = 过时的。"
    },
    {
      word: "party",
      phonetic: "/ˈpɑːti/",
      pos: "n.",
      posClass: "n",
      meaning: "聚会；晚会",
      root: { parts: [], explain: "来自法语 partie = part（部分）的延伸。party 的本义是'一部分人'→'一群人聚在一起'→'聚会'。政党也叫 party——一部分人组成的团体。" },
      memory: "party 来自 part（部分）——一部分人聚到一起就是 party！",
      family: ["birthday party（生日派对）", "party animal（社交达人）"],
      synonyms: ["celebration（庆祝）", "gathering（聚会）"],
      antonyms: [],
      sentences: [
        { en: "Happy birthday! Come to my party.", zh: "生日快乐！来参加我的派对。" },
        { en: "We had a great party.", zh: "我们举办了一个很棒的聚会。" }
      ],
      fun: "party 在法律用语中 = 当事方（both parties = 双方）。在政治中 = 政党（the Democratic Party = 民主党）。同一个词在不同场景意思差别巨大！",
      usage: "birthday party = 生日派对。party animal = 超爱社交的人。third party = 第三方。"
    },
    {
      word: "test",
      phonetic: "/test/",
      pos: "n./v.",
      posClass: "n",
      meaning: "测验；检测",
      root: { parts: [], explain: "来自拉丁语 testum（陶罐）。古代用陶罐来检验金属是否纯金——把金属放在陶罐里烧来'测试'。容器 → 检验 → 测试。" },
      memory: "test 来自拉丁语'陶罐'——古人用陶罐烧炼金属来测试纯度。考试就是'用火来炼'你的知识！",
      family: ["testing（测试中的）", "tester（测试者）", "contest（竞赛=一起测试）", "protest（抗议=在前面作证）"],
      synonyms: ["exam（考试）", "quiz（小测验）"],
      antonyms: [],
      sentences: [
        { en: "We have a math test today.", zh: "我们今天有数学测验。" },
        { en: "The teacher is testing us.", zh: "老师在测试我们。" }
      ],
      fun: "test、exam、quiz 的区别：quiz 最短最轻松（小测验），test 中等正式（单元测验），exam 最正式（期末考试）。test 还可以做动词：test the water = 试水/探情况。",
      usage: "take a test = 参加测试。pass a test = 通过测试。fail a test = 测试不及格。"
    },
    {
      word: "trip",
      phonetic: "/trɪp/",
      pos: "n.",
      posClass: "n",
      meaning: "旅行；旅程",
      root: { parts: [], explain: "来自古法语 triper（跳舞/旅行），最初带有'轻快地走'的意味。trip 的另一个意思'绊倒'来自同一个词——走得太快就绊倒了！" },
      memory: "trip 既是'旅行'也是'绊倒'——出去旅行(trip)时小心别绊倒(trip)了！",
      family: ["road trip（公路旅行）", "field trip（实地考察/郊游）"],
      synonyms: ["journey（旅程）", "travel（旅行）", "tour（游览）"],
      antonyms: [],
      sentences: [
        { en: "We have a school trip next week.", zh: "我们下周有学校旅行。" },
        { en: "Have a nice trip!", zh: "旅途愉快！" }
      ],
      fun: "trip/journey/travel/tour 都是'旅行'但有区别：trip = 短途（a day trip），journey = 长途，travel = 泛指旅行（不可数），tour = 游览多个地点。",
      usage: "school trip = 学校旅行。business trip = 出差。a round trip = 往返旅程。"
    }
  ]
};

if(typeof window!=='undefined'){window.UNIT8=UNIT8;}

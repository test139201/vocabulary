// Unit 7: My past life (外研版七年级下册 Module 7)
const UNIT7 = {
  id: 7,
  title: "My past life",
  theme: "我的过去生活",
  color: "#14b8a6",
  words: [
    {
      word: "born",
      phonetic: "/bɔːn/",
      pos: "v.",
      posClass: "v",
      meaning: "出生",
      root: { parts: [], explain: "来自古英语 beran（承载/生育）的过去分词。bear 的本义是'承载'，母亲承载孩子十个月，然后 born（出生）。同根词：bear（熊/承受）。" },
      memory: "born 谐音'搬'——宝宝从妈妈肚子里'搬'出来就是出生了！be born 永远用被动语态，因为没有人能主动出生自己。",
      family: ["birth（出生）", "newborn（新生儿）", "reborn（重生的）", "bear（承受/生育）"],
      synonyms: ["delivered（分娩的）"],
      antonyms: ["die（死亡）"],
      sentences: [
        { en: "I was born in Beijing in 2012.", zh: "我2012年出生在北京。" },
        { en: "Where were you born?", zh: "你在哪里出生的？" }
      ],
      fun: "be born 永远是被动语态！没有人说 'I born'——因为没人能自己把自己生出来。born 和 borne 都是 bear 的过去分词，但 born 专指出生，borne 指承受。",
      usage: "be born in + 地点/年份。be born on + 具体日期。was/were born 是固定搭配，永远用过去时被动语态。"
    },
    {
      word: "strict",
      phonetic: "/strɪkt/",
      pos: "adj.",
      posClass: "adj",
      meaning: "严格的；严厉的",
      root: { parts: [], explain: "来自拉丁语 strictus（拉紧的/绷紧的），是 stringere（拉紧）的过去分词。想象一条绳子被拉得很紧——规则'绷'得紧就是严格。同根词：string（绳子）。" },
      memory: "strict 里有 'str'（拉紧）——严格的老师把规则拉得像弦(string)一样紧！谐音'死追课特'——老师死追课堂特别严格。",
      family: ["strictly（严格地）", "strictness（严格）"],
      synonyms: ["stern（严厉的）", "tough（严格的）"],
      antonyms: ["gentle（温和的）", "lenient（宽容的）"],
      sentences: [
        { en: "Our head teacher was very strict.", zh: "我们的班主任非常严格。" },
        { en: "My parents are strict with me about homework.", zh: "我父母对我的作业要求很严格。" }
      ],
      fun: "be strict with sb. = 对某人严格。英语有句谚语：Strict parents raise responsible children.（严格的父母养出有责任心的孩子。）和中文'严师出高徒'异曲同工！",
      usage: "be strict with sb. = 对某人严格。be strict about/in sth. = 在某事上严格。注意介词搭配不能搞混。"
    },
    {
      word: "friendly",
      phonetic: "/ˈfrendli/",
      pos: "adj.",
      posClass: "adj",
      meaning: "友好的",
      root: { parts: [], explain: "friend（朋友）+ -ly（形容词后缀）= 像朋友一样的 = 友好的。注意：-ly 通常构成副词，但 friendly 是形容词！类似的还有 lovely、lonely、lively。" },
      memory: "friendly = friend + ly。像朋友(friend)一样对待别人就是友好的(friendly)！注意：friendly 虽然以 -ly 结尾，但它是形容词不是副词。",
      family: ["friend（朋友）", "friendship（友谊）", "unfriendly（不友好的）", "befriend（与……交朋友）"],
      synonyms: ["kind（善良的）", "warm（热情的）", "nice（友好的）"],
      antonyms: ["unfriendly（不友好的）", "hostile（敌对的）", "cold（冷淡的）"],
      sentences: [
        { en: "The people in my hometown are very friendly.", zh: "我家乡的人非常友好。" },
        { en: "She gave me a friendly smile.", zh: "她给了我一个友好的微笑。" }
      ],
      fun: "以 -ly 结尾但不是副词的形容词还有：lovely（可爱的）、lonely（孤独的）、lively（活泼的）、ugly（丑的）、silly（傻的）。不要被 -ly 骗了！",
      usage: "be friendly to/towards sb. = 对某人友好。friendly 没有副词形式，要说 in a friendly way/manner。user-friendly = 用户友好的。"
    },
    {
      word: "primary",
      phonetic: "/ˈpraɪməri/",
      pos: "adj.",
      posClass: "adj",
      meaning: "初等的；初级的",
      root: { parts: [], explain: "来自拉丁语 primarius（第一的/首要的），源自 primus（第一）。primary = 最初的/第一位的。同根词：prime（首要的）、prince（王子=第一人）、primitive（原始的）。" },
      memory: "primary 里有 'prim'（第一）——primary school 就是人生中的'第一所'学校！prince（王子）也是'prim'开头——王子是第一重要的人。",
      family: ["primarily（主要地）", "prime（首要的）", "primitive（原始的）"],
      synonyms: ["elementary（初级的）", "basic（基本的）"],
      antonyms: ["secondary（中等的/次要的）", "advanced（高级的）"],
      sentences: [
        { en: "I was a good student at primary school.", zh: "我在小学时是个好学生。" },
        { en: "Reading is a primary skill for students.", zh: "阅读是学生的基本技能。" }
      ],
      fun: "primary school（小学）在美国叫 elementary school。primary 在美国政治中还指'初选'（primary election）——选举的'第一轮'。primary colors（三原色）= 红黄蓝，一切颜色的'起源'。",
      usage: "primary school = 小学。primary 强调'最初的、首要的'。primary concern = 首要关切。"
    },
    {
      word: "primary school",
      phonetic: "/ˈpraɪməri skuːl/",
      pos: "n.",
      posClass: "n",
      meaning: "小学",
      root: { parts: [], explain: "primary（初级的）+ school（学校）= 初级学校 = 小学。这是人一生中上的第一所正式学校，所以叫'初级的'学校。" },
      memory: "primary school = 第一所学校 = 小学。从 primary school 到 secondary school（中学），就像从第一级(primary)升到第二级(secondary)。",
      family: ["secondary school（中学）", "high school（高中）", "elementary school（小学，美式）"],
      synonyms: ["elementary school（小学，美式）"],
      antonyms: ["secondary school（中学）"],
      sentences: [
        { en: "I was at Yucai Primary School.", zh: "我曾在育才小学上学。" },
        { en: "My primary school was near my home.", zh: "我的小学离我家很近。" }
      ],
      fun: "英式英语说 primary school，美式英语说 elementary school。英国的小学通常是5-11岁，中国是6-12岁。你还记得你的小学叫什么名字吗？",
      usage: "at primary school = 在上小学（英式）。in elementary school = 在上小学（美式）。注意英式用 at，美式用 in。"
    },
    {
      word: "town",
      phonetic: "/taʊn/",
      pos: "n.",
      posClass: "n",
      meaning: "城镇",
      root: { parts: [], explain: "来自古英语 tūn，原义是'围起来的地方/农场'。人们围住一块地建房子，慢慢就发展成了城镇。同根词：downtown（市中心）。" },
      memory: "town 和 down 押韵——go downtown = 去城镇中心！town 比 city 小，比 village 大，刚好在中间。",
      family: ["downtown（市中心）", "township（乡镇）", "hometown（家乡）"],
      synonyms: ["small city（小城市）"],
      antonyms: ["countryside（乡下）", "city（大城市）"],
      sentences: [
        { en: "I was born in a small town.", zh: "我出生在一个小镇上。" },
        { en: "Our town has a beautiful park.", zh: "我们镇上有一个美丽的公园。" }
      ],
      fun: "英语中大小排序：village（村庄）< town（城镇）< city（城市）< metropolis（大都市）。go to town 有个俚语意思 = 大干一场/全力以赴！",
      usage: "in town = 在城里。out of town = 出城了/不在。go to town = 进城/全力以赴。hometown = 家乡。"
    },
    {
      word: "village",
      phonetic: "/ˈvɪlɪdʒ/",
      pos: "n.",
      posClass: "n",
      meaning: "村庄",
      root: { parts: [], explain: "来自拉丁语 villa（庄园/乡间别墅）+ -age（名词后缀）。villa 是罗马贵族的乡间大宅，周围的居民聚集区就是 village（村庄）。" },
      memory: "village 里有 villa（别墅）——古罗马别墅周围住的人多了，就形成了 village（村庄）！",
      family: ["villager（村民）", "villa（别墅）"],
      synonyms: ["hamlet（小村庄）"],
      antonyms: ["city（城市）", "metropolis（大都市）"],
      sentences: [
        { en: "My grandparents live in a village.", zh: "我的祖父母住在一个村庄里。" },
        { en: "There were lots of trees in the village.", zh: "村庄里有很多树。" }
      ],
      fun: "莎士比亚笔下最著名的角色 Hamlet（哈姆雷特）的名字和 hamlet（小村庄）拼写一样！Global Village（地球村）是指互联网让世界变得像一个村庄一样紧密相连。",
      usage: "in a/the village = 在村子里。village 通常比 town 小。fishing village = 渔村。global village = 地球村。"
    },
    {
      word: "nice",
      phonetic: "/naɪs/",
      pos: "adj.",
      posClass: "adj",
      meaning: "友好的；令人愉快的",
      root: { parts: [], explain: "来自拉丁语 nescius（无知的），从'无知的'→'胆小的'→'挑剔的'→'精致的'→'令人愉快的'，nice 的含义经历了戏剧性的变化，是英语中词义变化最大的词之一！" },
      memory: "nice 原来的意思居然是'愚蠢的'！经过几百年的演变才变成了'好的'。英语就是这么奇妙——一个词的意思可以完全翻转。",
      family: ["nicely（友好地）", "niceness（美好）"],
      synonyms: ["pleasant（令人愉快的）", "lovely（可爱的）", "kind（善良的）"],
      antonyms: ["nasty（讨厌的）", "unpleasant（令人不愉快的）"],
      sentences: [
        { en: "It's nice to meet you.", zh: "很高兴认识你。" },
        { en: "She is a very nice teacher.", zh: "她是一位非常好的老师。" }
      ],
      fun: "nice 是英语中最'万能'也最'空洞'的形容词——什么都能说 nice，但什么都说得不够具体。英语老师常说：Don't just say 'nice'! 尝试用 wonderful, fantastic, brilliant 等更精确的词。",
      usage: "Nice to meet you. = 很高兴认识你。It's nice of you to... = 你真好……。have a nice day = 祝你有美好的一天。"
    },
    {
      word: "US",
      phonetic: "/juː es/",
      pos: "n.",
      posClass: "n",
      meaning: "美国",
      root: { parts: [], explain: "US = United States（联合的州）的缩写。完整写法是 the United States of America（美利坚合众国）= USA。50个州联合在一起组成一个国家。" },
      memory: "US = United States。注意区分：us（我们，小写，代词）和 US（美国，大写，专有名词）。大小写不同，意思完全不同！",
      family: ["USA（美利坚合众国）", "American（美国的/美国人）", "the States（美国，口语）"],
      synonyms: ["USA（美国）", "America（美国）", "the States（美国）"],
      antonyms: [],
      sentences: [
        { en: "He was born in the US.", zh: "他出生在美国。" },
        { en: "The US is a big country.", zh: "美国是一个大国。" }
      ],
      fun: "美国有50个州（states），每个州都有自己的法律，就像50个'小国家'联合在一起。美国国旗上的50颗星代表50个州，13条红白条纹代表最初的13个殖民地。",
      usage: "the US / the USA 前面要加 the。American 既指'美国的'也指'美国人'。注意：America 还可以指整个美洲大陆。"
    },
    {
      word: "hey",
      phonetic: "/heɪ/",
      pos: "interj.",
      posClass: "interj",
      meaning: "嘿",
      root: { parts: [], explain: "自然感叹词，模仿人引起注意时发出的声音。几乎每种语言都有类似的感叹词：中文'嘿'、日语'ねえ'、韩语'야'。" },
      memory: "hey 就是中文的'嘿'！发音和意思都一样——这可能是最容易记住的英语单词了。",
      family: ["hi（嗨）", "hello（你好）", "yo（哟）"],
      synonyms: ["hi（嗨）", "hello（你好）"],
      antonyms: [],
      sentences: [
        { en: "Hey, Tony! How are you?", zh: "嘿，托尼！你好吗？" },
        { en: "Hey, look at this!", zh: "嘿，看看这个！" }
      ],
      fun: "hey 是非常口语化的打招呼方式，适合朋友之间使用。对老师或长辈不要用 hey，要用 hello 或 excuse me。The Beatles（甲壳虫乐队）有一首经典歌曲叫 'Hey Jude'。",
      usage: "hey 用于非正式场合打招呼或引起注意。正式场合用 hello/excuse me。hey 也可以表示惊讶：Hey! What happened?（嘿！怎么了？）"
    },
    {
      word: "character",
      phonetic: "/ˈkærəktə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "人物；角色",
      root: { parts: [], explain: "来自希腊语 kharaktēr（刻印工具/印记），原指在硬物上刻下的标记。一个人的'标记'就是他的特征/性格，故事中的'角色'也是被作者'刻画'出来的。" },
      memory: "character = 刻印出来的标记 → 人物特征 → 角色。Chinese characters（汉字）也是'刻出来的符号'！一词多义：角色/性格/汉字。",
      family: ["characteristic（特征/特点）", "characterize（描述特征）"],
      synonyms: ["role（角色）", "figure（人物）", "personality（个性）"],
      antonyms: [],
      sentences: [
        { en: "Who is your favourite character?", zh: "你最喜欢的角色是谁？" },
        { en: "The main character in this story is a boy.", zh: "这个故事的主角是一个男孩。" }
      ],
      fun: "character 的三个常见意思：1. 人物/角色（story character）；2. 性格/品格（good character）；3. 文字/符号（Chinese characters = 汉字）。同一个词，三种完全不同的用法！",
      usage: "main character = 主角。in character = 符合角色/本性。out of character = 不合常理。Chinese characters = 汉字。"
    },
    {
      word: "was",
      phonetic: "/wɒz/",
      pos: "v.",
      posClass: "v",
      meaning: "是（am/is的过去式）",
      root: { parts: [], explain: "来自古英语 wæs，是 be 动词的过去式。英语的 be 动词变化是最不规则的：am/is/are → was/were → been。这是因为它融合了三个不同的古英语动词。" },
      memory: "I was, he/she/it was（单数用 was）；we/you/they were（复数用 were）。口诀：'单was复were'，铁打的规则！",
      family: ["were（复数过去式）", "been（过去分词）", "being（现在分词）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "I was very happy yesterday.", zh: "我昨天非常开心。" },
        { en: "She was a teacher before.", zh: "她以前是一位老师。" }
      ],
      fun: "英语的 be 动词有8种形式：be, am, is, are, was, were, been, being——它是英语中变化最多的动词！其他语言也类似：法语的 être 有超过20种变化形式。",
      usage: "I/he/she/it + was。There was + 单数名词。was 用于一般过去时，表示过去的状态。wasn't = was not。"
    },
    {
      word: "were",
      phonetic: "/wɜː(r)/",
      pos: "v.",
      posClass: "v",
      meaning: "是（are的过去式）",
      root: { parts: [], explain: "来自古英语 wǣron，是 be 动词复数的过去式。were 和 was 搭档：was 管单数，were 管复数，分工明确。" },
      memory: "were 和 where（哪里）发音几乎一样！Where were you?（你在哪里？）——两个发音一样的词连在一起，练习发音的好句子。",
      family: ["was（单数过去式）", "been（过去分词）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "We were good friends at primary school.", zh: "我们在小学时是好朋友。" },
        { en: "Where were you yesterday?", zh: "你昨天在哪里？" }
      ],
      fun: "虚拟语气中，不管主语是单数还是复数，都用 were：If I were you...（如果我是你的话……）。这是语法中的特殊规则，表示与事实相反的假设。",
      usage: "we/you/they + were。There were + 复数名词。If I were you = 如果我是你（虚拟语气）。weren't = were not。"
    },
    {
      word: "bedroom",
      phonetic: "/ˈbedruːm/",
      pos: "n.",
      posClass: "n",
      meaning: "卧室",
      root: { parts: [], explain: "bed（床）+ room（房间）= 放床的房间 = 卧室。英语中很多房间名称都是这样直接组合的：bathroom（浴室）、classroom（教室）、living room（客厅）。" },
      memory: "bedroom = bed（床）+ room（房间）——有床的房间就是卧室！英语的复合词经常这么直白。",
      family: ["bed（床）", "room（房间）", "bedtime（就寝时间）", "bedside（床边）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "My bedroom is small but comfortable.", zh: "我的卧室很小但很舒适。" },
        { en: "There were three bedrooms in our old house.", zh: "我们的老房子里有三间卧室。" }
      ],
      fun: "英语房间名称大多是'功能+room'：bedroom（睡觉的房间）、bathroom（洗澡的房间）、classroom（上课的房间）、mushroom……等等，mushroom 是蘑菇，不是房间！",
      usage: "a two-bedroom apartment = 两居室公寓。master bedroom = 主卧。spare bedroom = 客房。"
    },
    {
      word: "bathroom",
      phonetic: "/ˈbɑːθruːm/",
      pos: "n.",
      posClass: "n",
      meaning: "浴室",
      root: { parts: [], explain: "bath（沐浴）+ room（房间）= 洗澡的房间 = 浴室。在美式英语中，bathroom 也指厕所——美国人不好意思直接说 toilet，就用 bathroom 来代替。" },
      memory: "bathroom = bath（洗澡）+ room（房间）。在美国，说 'I need to use the bathroom' 其实是想上厕所——这是美国人的委婉说法！",
      family: ["bath（沐浴）", "bathtub（浴缸）", "bathe（沐浴，动词）"],
      synonyms: ["restroom（洗手间，美式）", "washroom（盥洗室）", "toilet（厕所，英式）"],
      antonyms: [],
      sentences: [
        { en: "The bathroom is next to the bedroom.", zh: "浴室在卧室旁边。" },
        { en: "Can I use the bathroom?", zh: "我可以用一下洗手间吗？" }
      ],
      fun: "英美对'厕所'的说法大不同：英国人说 toilet/loo，美国人说 bathroom/restroom。在美国说 toilet 会让人觉得太直白。而 WC（water closet）主要在欧洲大陆使用。",
      usage: "bathroom 在美式英语中 = 厕所/洗手间。go to the bathroom = 上厕所（委婉说法）。"
    },
    {
      word: "garden",
      phonetic: "/ˈɡɑːdn/",
      pos: "n.",
      posClass: "n",
      meaning: "花园",
      root: { parts: [], explain: "来自古法语 gardin，源自日耳曼语 gardo（围起来的地方）。花园就是一块'围起来'种花草的地方。同源词：yard（院子）也是围起来的地方。" },
      memory: "garden 里有 'guard'（保卫）的影子——花园是被围墙保卫(guard)起来的美丽空间。kindergarten（幼儿园）= kinder（儿童）+ garten（花园）= 儿童的花园！",
      family: ["gardener（园丁）", "gardening（园艺）", "kindergarten（幼儿园）"],
      synonyms: ["yard（院子）", "park（公园）"],
      antonyms: [],
      sentences: [
        { en: "There was a big garden behind the house.", zh: "房子后面有一个大花园。" },
        { en: "My grandmother loves working in the garden.", zh: "我奶奶喜欢在花园里劳作。" }
      ],
      fun: "kindergarten（幼儿园）是德语借词：Kinder（孩子们）+ Garten（花园）= 孩子们的花园。这个名字是德国教育家福禄贝尔发明的——他认为孩子就像花园里的花朵，需要精心培育。",
      usage: "in the garden = 在花园里。garden party = 花园聚会。beer garden = 露天啤酒屋。"
    },
    {
      word: "pond",
      phonetic: "/pɒnd/",
      pos: "n.",
      posClass: "n",
      meaning: "池塘",
      root: { parts: [], explain: "来自古英语 pund（围栏），与 pound（围栏/磅）同源。池塘就是一个被'围'起来的水域。有趣的是，英国人幽默地管大西洋叫 'the pond'——海洋大池塘！" },
      memory: "pond 谐音'胖的'——一个胖胖的、圆圆的水塘就是 pond！pond 比 lake（湖）小得多。",
      family: ["lake（湖）", "pool（水池）"],
      synonyms: ["pool（水池）"],
      antonyms: [],
      sentences: [
        { en: "There was a pond with fish in the garden.", zh: "花园里有一个养鱼的池塘。" },
        { en: "Ducks were swimming in the pond.", zh: "鸭子在池塘里游泳。" }
      ],
      fun: "across the pond = 大西洋对面——英国人和美国人互相说对方在'池塘对面'。把大西洋说成'池塘'，这是英式幽默的典型！",
      usage: "fish pond = 鱼塘。pond 比 lake 小，比 puddle（水坑）大。across the pond = 大西洋对岸（英式幽默）。"
    },
    {
      word: "living room",
      phonetic: "/ˈlɪvɪŋ ruːm/",
      pos: "n.",
      posClass: "n",
      meaning: "客厅",
      root: { parts: [], explain: "living（生活的）+ room（房间）= 日常生活活动的房间 = 客厅。以前叫 parlour（会客室），后来人们觉得客厅不只是会客用的，更是'生活'的空间，就改叫 living room 了。" },
      memory: "living room = 生活(living)的房间(room) = 客厅。一家人一起看电视、聊天的地方就是'生活的房间'。",
      family: ["dining room（餐厅）", "sitting room（起居室）", "drawing room（客厅，英式正式）"],
      synonyms: ["sitting room（起居室）", "lounge（休息室）"],
      antonyms: [],
      sentences: [
        { en: "We watched TV in the living room.", zh: "我们在客厅里看电视。" },
        { en: "The living room was very large.", zh: "客厅非常大。" }
      ],
      fun: "living room 这个叫法是20世纪才流行的。以前英国人叫它 drawing room（缩自 withdrawing room，意为'退席后休息的房间'）。美国人则叫它 den（兽穴！因为是全家人窝着的地方）。",
      usage: "in the living room = 在客厅。living room 是两个词，不要写成一个词。"
    },
    {
      word: "kitchen",
      phonetic: "/ˈkɪtʃɪn/",
      pos: "n.",
      posClass: "n",
      meaning: "厨房",
      root: { parts: [], explain: "来自古英语 cycene，源自拉丁语 coquina（烹饪的地方），与 cook（烹饪）同源。cook → kitchen，做饭的人(cook)在厨房(kitchen)里。" },
      memory: "kitchen 和 chicken（鸡）长得像——在 kitchen（厨房）里做 chicken（鸡肉）！kitchen 里的 'k' 不发音？不，这里 k 发音，是 kn- 开头时 k 才不发音（如 knife）。",
      family: ["cook（烹饪/厨师）", "kitchenware（厨具）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "My mum is cooking in the kitchen.", zh: "我妈妈在厨房里做饭。" },
        { en: "The kitchen was small but clean.", zh: "厨房很小但很干净。" }
      ],
      fun: "kitchen sink = 厨房水槽。everything but the kitchen sink = 除了厨房水槽以外的所有东西 = 能带的都带了（形容打包太多东西）。这是一个很有画面感的英语习语！",
      usage: "in the kitchen = 在厨房里。kitchen garden = 菜园。kitchenware = 厨具。"
    },
    {
      word: "back",
      phonetic: "/bæk/",
      pos: "adv.",
      posClass: "adv",
      meaning: "回",
      root: { parts: [], explain: "来自古英语 bæc（背部）。'背部'→'后面'→'往回'，一个词从身体部位扩展到方向和动作。back 是英语中用法最多的小词之一。" },
      memory: "back 本义是'背'——转过身去(back)就是'回去'。come back = 回来，go back = 回去，give back = 还回去——back 让所有动词都有了'回'的意思！",
      family: ["background（背景）", "backpack（背包）", "backward（向后的）", "feedback（反馈）"],
      synonyms: ["return（返回）"],
      antonyms: ["forward（向前）", "away（离开）"],
      sentences: [
        { en: "Welcome back to school!", zh: "欢迎回到学校！" },
        { en: "I want to go back to my hometown.", zh: "我想回到我的家乡。" }
      ],
      fun: "back 组成的短语超级多：come back（回来）、look back（回顾）、pay back（还钱/报复）、fight back（反击）、call back（回电话）。掌握 back 就掌握了几十个短语动词！",
      usage: "come back = 回来。go back = 回去。give back = 归还。back and forth = 来回地。"
    },
    {
      word: "ago",
      phonetic: "/əˈɡəʊ/",
      pos: "adv.",
      posClass: "adv",
      meaning: "以前",
      root: { parts: [], explain: "来自古英语 āgān（过去的/走了的），由 ā-（离开）+ gān（走）构成。ago = 已经走了的时间 = 以前。时间'走过去'了，就是'以前'。" },
      memory: "ago 要放在时间后面：two years ago（两年前），不能说 ago two years。口诀：'时间在前 ago 在后'，和中文的'……前'一样。",
      family: ["long ago（很久以前）"],
      synonyms: ["before（以前）", "previously（先前）"],
      antonyms: ["later（之后）", "from now（从现在起）"],
      sentences: [
        { en: "I moved here two years ago.", zh: "我两年前搬到这里。" },
        { en: "Long ago, there was a beautiful village.", zh: "很久以前，有一个美丽的村庄。" }
      ],
      fun: "ago 只能和一般过去时搭配，不能用于完成时。不能说 'I have come here two years ago'（错误！），要说 'I came here two years ago'。这是考试常见陷阱！",
      usage: "时间段 + ago = ……以前。ago 只用于一般过去时。long long ago = 很久很久以前（讲故事开头）。"
    },
    {
      word: "store",
      phonetic: "/stɔː(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "商店",
      root: { parts: [], explain: "来自拉丁语 instaurare（恢复/储备）。store 的本义是'储存'，引申为'存放商品的地方'= 商店。" },
      memory: "store = 商店（美式）= shop（英式）。store 还有'储存'的意思——商店就是储存(store)商品的地方(store)！一个词双重身份。",
      family: ["storage（储存）", "restore（恢复）", "bookstore（书店）"],
      synonyms: ["shop（商店）"],
      antonyms: [],
      sentences: [
        { en: "There was no store in the village.", zh: "村庄里没有商店。" },
        { en: "We went to the store to buy food.", zh: "我们去商店买食物。" }
      ],
      fun: "美式英语说 store，英式英语说 shop。但 department store（百货商店）两边通用。App Store = 应用商店——连苹果公司也用 store！",
      usage: "in store = 即将来临。store up = 储存。convenience store = 便利店。department store = 百货商店。"
    },
    {
      word: "movie theater",
      phonetic: "/ˈmuːvi ˈθɪətə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "电影院",
      root: { parts: [], explain: "movie（电影）来自 move（移动），因为电影是'会动的画面'。theater 来自希腊语 theatron（观看的地方），源自 thea（看）。电影院 = 看会动画面的地方。" },
      memory: "movie = move（动）的变体——电影就是'动起来的'画面！theater = thea（看）+ ter（地方）= 看东西的地方。合在一起：看动画面的地方 = 电影院。",
      family: ["movie（电影）", "theater（剧院）", "cinema（电影院，英式）"],
      synonyms: ["cinema（电影院，英式）"],
      antonyms: [],
      sentences: [
        { en: "There was no movie theater in our town.", zh: "我们镇上没有电影院。" },
        { en: "Let's go to the movie theater this weekend.", zh: "这个周末我们去电影院吧。" }
      ],
      fun: "美国说 movie theater，英国说 cinema。movie 是美式用法，英式英语更常说 film。好莱坞（Hollywood）是全球电影工业的中心，名字的意思是'冬青树林'。",
      usage: "movie theater（美式）= cinema（英式）。go to the movies = 去看电影。movie star = 电影明星。"
    },
    {
      word: "bored",
      phonetic: "/bɔːd/",
      pos: "adj.",
      posClass: "adj",
      meaning: "无聊的",
      root: { parts: [], explain: "来自 bore（使厌烦）+ -ed。bore 的原义是'钻孔'——一直重复钻孔的动作让人感到无聊。所以 boring = 令人无聊的，bored = 感到无聊的。" },
      memory: "bored 和 boring 是一对：I am bored（我感到无聊）because the class is boring（因为课很无聊）。-ed 修饰人的感受，-ing 修饰事物的特点。这个区别超级重要！",
      family: ["boring（令人无聊的）", "bore（使厌烦）", "boredom（无聊）"],
      synonyms: ["fed up（厌烦的）", "tired of（厌倦的）"],
      antonyms: ["interested（感兴趣的）", "excited（兴奋的）"],
      sentences: [
        { en: "I was bored because there was nothing to do.", zh: "我很无聊因为无事可做。" },
        { en: "Are you bored with this game?", zh: "你对这个游戏感到无聊了吗？" }
      ],
      fun: "-ed 和 -ing 形容词的区别是中国学生的经典易错点：excited/exciting, interested/interesting, surprised/surprising... 记住：人的感受用 -ed，事物的特点用 -ing！",
      usage: "be bored with sth. = 对某事感到无聊。bored to death = 无聊死了。bored 描述人的感受，boring 描述事物的特征。"
    },
    {
      word: "naughty",
      phonetic: "/ˈnɔːti/",
      pos: "adj.",
      posClass: "adj",
      meaning: "淘气的",
      root: { parts: [], explain: "来自中古英语 naughti，由 naught（零/无）+ -y 构成。原义是'一无所有的/贫穷的'，后来演变为'品行不好的'→'淘气的'。从'一无所有'到'调皮'，词义变化真奇妙！" },
      memory: "naughty 谐音'闹踢'——淘气的孩子又闹又踢，就是 naughty！naughty 来自 naught（零分）——淘气的孩子考零分。",
      family: ["naughtily（淘气地）", "naughtiness（淘气）"],
      synonyms: ["mischievous（顽皮的）", "playful（爱玩的）"],
      antonyms: ["well-behaved（表现好的）", "obedient（听话的）", "good（乖的）"],
      sentences: [
        { en: "He was a naughty boy at school.", zh: "他在学校是个淘气的男孩。" },
        { en: "Don't be naughty!", zh: "别淘气了！" }
      ],
      fun: "在西方圣诞传统中，圣诞老人有一份 naughty list（淘气名单）和 nice list（乖孩子名单）。淘气的孩子只能得到一块煤炭作为圣诞礼物！",
      usage: "naughty 在英式英语中比较常用，语气不太重。naughty boy/girl = 淘气包。a naughty word = 脏话/不雅的词。"
    }
  ]
};

if(typeof window!=='undefined'){window.UNIT7=UNIT7;}

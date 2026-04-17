// Unit 11: Body language (身体语言)
const UNIT11 = {
  id: 11,
  title: "Body language",
  theme: "身体语言",
  color: "#a855f7",
  words: [
    {
      word: "body",
      phonetic: "/ˈbɒdi/",
      pos: "n.",
      posClass: "n",
      meaning: "身体",
      root: {
        parts: [],
        explain: "来自古英语 bodig，原意是'躯干、身体'。这个词非常古老，没有拉丁或希腊词根，是纯正的日耳曼词汇，跟德语 Körper 是远亲。"
      },
      memory: "body 发音像'巴蒂'——想象一个叫巴蒂的人特别爱健身，天天锻炼 body（身体）！",
      family: ["bodyguard（保镖=身体+守卫）", "somebody（某人=某个身体）", "nobody（没有人）", "everybody（每个人）", "bodily（身体的）"],
      synonyms: ["figure（身材）", "physique（体格）"],
      antonyms: ["mind（心灵）", "soul（灵魂）"],
      sentences: [
        { en: "Exercise is good for your body.", zh: "锻炼对你的身体有好处。" },
        { en: "She has a healthy body because she runs every day.", zh: "她每天跑步，所以身体很健康。" }
      ],
      fun: "英语里 body 的用法特别广：anybody = 任何人，somebody = 某人，nobody = 没有人——每个'人'都是一个 body！bodyguard（保镖）字面意思是'守护身体的人'。",
      usage: "body 既可以指'身体'，也可以指'尸体'（dead body）。body language = 身体语言，是本单元的核心概念！",
      visual: "想象一个巨大的充气人偶在广场上跳舞，它的每个部位——head、arm、finger——都在疯狂摇晃，路人全被逗乐了！这个巨型 body 就是行走的身体语言教科书。",
      confuse: "body vs. buddy：body 是身体，buddy 是好伙伴。发音很像，但意思完全不同！别把'我的身体'说成'我的哥们儿'。",
      rhyme: "body body 是身体，everybody 每个人，somebody 是某人，nobody 没有人。",
      scene: "身体部位大集合：body（身体）、head（头）、arm（手臂）、finger（手指）——从整体到局部，认识你的 body！"
    },
    {
      word: "body language",
      phonetic: "/ˈbɒdi ˈlæŋɡwɪdʒ/",
      pos: "n.",
      posClass: "n",
      meaning: "身体语言",
      root: {
        parts: [
          { text: "body", type: "root", label: "身体" },
          { text: "language", type: "root", label: "语言" }
        ],
        explain: "body（身体）+ language（语言）= 用身体说话！language 来自拉丁语 lingua = 舌头，语言最初就是'舌头的活动'。"
      },
      memory: "身体（body）就是一种语言（language）——不用张嘴，用动作也能'说话'！点头、摇头、微笑，都是 body language。",
      family: ["sign language（手语）", "body（身体）", "language（语言）"],
      synonyms: ["gesture（手势）", "nonverbal communication（非语言交流）"],
      antonyms: [],
      sentences: [
        { en: "Body language is important in communication.", zh: "身体语言在交流中很重要。" },
        { en: "Different countries have different body language.", zh: "不同国家有不同的身体语言。" }
      ],
      fun: "研究表明，人与人交流时，55% 的信息来自 body language（身体语言），38% 来自语调，只有 7% 来自说话内容！所以有时候你'怎么说'比'说什么'更重要。",
      usage: "body language 是不可数名词，不加 a，也不加 s。注意是 body language，不是 body's language。",
      visual: "想象一个外星人来到地球，完全不会说任何语言，但它靠疯狂比手势、点头、摇头、鞠躬，竟然在餐厅成功点了一桌菜！这就是 body language 的超能力。",
      confuse: "body language vs. sign language：body language 是无意识的身体动作传递信息，sign language（手语）是一套完整的语言系统，有语法有词汇，别搞混！",
      rhyme: "不张嘴，也能说，body language 用身做；点头yes摇头no，身体会说各种话。",
      scene: "交流方式系列：body language（身体语言）、smile（微笑）、nod（点头）、wave（挥手）、bow（鞠躬）——不用开口也能聊天！"
    },
    {
      word: "touch",
      phonetic: "/tʌtʃ/",
      pos: "v.",
      posClass: "v",
      meaning: "触摸；碰",
      root: {
        parts: [],
        explain: "来自古法语 tochier（触摸），可能模仿敲门的声音'tock, tock'。touch 就像手指轻轻敲在物体上的感觉。"
      },
      memory: "touch 发音像'踏起'——脚踏到地面，就是 touch（触碰）到了地面！",
      family: ["touching（感人的）", "touchscreen（触摸屏）", "untouchable（不可触碰的）", "touchy（敏感的）"],
      synonyms: ["feel（触摸）", "contact（接触）"],
      antonyms: ["avoid（避开）", "release（放开）"],
      sentences: [
        { en: "Don't touch the paintings in the museum.", zh: "不要触摸博物馆里的画。" },
        { en: "The story touched my heart.", zh: "这个故事触动了我的心。" }
      ],
      fun: "你的手机是 touchscreen（触摸屏）——screen 你可以 touch！keep in touch 意思是'保持联系'，朋友分别时常说这句话。Touch 还能表示'感动'：I'm touched = 我很感动。",
      usage: "touch 既是动词也是名词。keep in touch = 保持联系；get in touch with = 与……取得联系。Don't touch! = 别碰！",
      visual: "想象博物馆里一个调皮鬼伸手去摸名画，突然警报大响，画上的蒙娜丽莎活过来一把拍掉他的手说'Don't touch me!'，全场爆笑。",
      confuse: "touch vs. tough：touch /tʌtʃ/ 是触摸，tough /tʌf/ 是坚韧的。一个字母之差，意思天差地别！touch 是温柔的摸，tough 是硬汉的硬。",
      rhyme: "touch 轻轻碰一碰，touchscreen 手机用；keep in touch 保联系，别碰名画 Don't touch!",
      scene: "身体接触动作：touch（触摸）、hold（握住）、shake hands（握手）、kiss（亲吻）——从轻碰到紧握，不同程度的接触。"
    },
    {
      word: "bow",
      phonetic: "/baʊ/",
      pos: "v.",
      posClass: "v",
      meaning: "鞠躬",
      root: {
        parts: [],
        explain: "来自古英语 būgan（弯曲）。鞠躬就是把身体弯下去！注意：bow 还有另一个发音 /bəʊ/，意思是'弓'（射箭的弓）和'蝴蝶结'。"
      },
      memory: "bow /baʊ/ 发音像'鲍'——想象一个姓鲍的人特别有礼貌，见人就鞠躬（bow）！",
      family: ["bow（n.弓/蝴蝶结，读/bəʊ/）", "elbow（胳膊肘=手臂的弯曲处）", "rainbow（彩虹=雨后的弓）"],
      synonyms: ["bend（弯腰）", "nod（点头）"],
      antonyms: ["stand straight（站直）"],
      sentences: [
        { en: "In Japan, people bow to each other when they meet.", zh: "在日本，人们见面时互相鞠躬。" },
        { en: "The actor bowed to the audience after the show.", zh: "演出结束后，演员向观众鞠躬。" }
      ],
      fun: "bow 是个'变色龙'单词！读 /baʊ/ = 鞠躬；读 /bəʊ/ = 弓、蝴蝶结。rainbow（彩虹）= rain（雨）+ bow（弓）= 雨后的弓！elbow（胳膊肘）= el（手臂）+ bow（弯曲）= 手臂弯曲的地方。",
      usage: "bow to sb. = 向某人鞠躬。注意发音：鞠躬读 /baʊ/（和 cow 押韵），弓和蝴蝶结读 /bəʊ/（和 go 押韵）。",
      visual: "想象一个日本武士走进教室，对着老师深深鞠躬，结果弯腰太猛头上的蝴蝶结（也叫 bow！）掉到了地上，全班哄堂大笑。一个 bow 引出两个意思！",
      confuse: "bow /baʊ/ vs. bow /bəʊ/：同一个拼写两个读音！/baʊ/ 是鞠躬（和 cow 押韵），/bəʊ/ 是弓/蝴蝶结（和 go 押韵）。读错了意思完全不同哦！",
      rhyme: "bow bow 鞠个躬，读音像 cow 牛哞哞；换个音读成 go，变成弓箭蝴蝶结。",
      scene: "见面礼仪大比拼：bow（鞠躬）、shake hands（握手）、kiss（亲吻）、nod（点头）、wave（挥手）——各国人民见面方式大不同！"
    },
    {
      word: "kiss",
      phonetic: "/kɪs/",
      pos: "v.&n.",
      posClass: "v",
      meaning: "亲吻",
      root: {
        parts: [],
        explain: "来自古英语 cyssan，是一个拟声词，模仿亲吻时'嘶'的声音。几乎所有日耳曼语言中这个词都很相似：德语 küssen，荷兰语 kussen。"
      },
      memory: "kiss 发音就像亲吻的声音'嘁斯'——轻轻一吻，kiss！",
      family: ["kisser（接吻的人/嘴巴，口语）", "kissing（亲吻，动名词）"],
      synonyms: ["peck（轻吻）"],
      antonyms: [],
      sentences: [
        { en: "In some countries, people kiss on the cheek when they meet.", zh: "在一些国家，人们见面时亲吻脸颊。" },
        { en: "The mother kissed her baby goodnight.", zh: "妈妈亲吻宝宝道晚安。" }
      ],
      fun: "在法国，朋友见面时要贴面吻（faire la bise），不同地区次数不同：巴黎两次，有的地方三次甚至四次！而在中国和日本，公开场合通常不 kiss，这就是文化差异。",
      usage: "kiss sb. on the cheek = 亲某人的脸颊。注意介词搭配：kiss on the cheek（脸颊），kiss on the forehead（额头）。",
      visual: "想象一个法国奶奶见到孙子，左脸亲一下、右脸亲一下、再来一下，孙子脸上全是口红印，像个花猫一样跑出门，邻居都笑翻了！",
      confuse: "kiss vs. miss：kiss /kɪs/ 是亲吻，miss /mɪs/ 是想念/错过。一个是嘴唇碰一下，一个是心里想一下。kiss 你爱的人，miss 你远方的人！",
      rhyme: "亲一下叫做 kiss，法国见面亲脸皮；中国日本不兴这个，文化不同要注意。",
      scene: "表达情感的动作：kiss（亲吻）、smile（微笑）、wave（挥手）、nod（点头）——从热情到含蓄，表达方式各不同。"
    },
    {
      word: "nod",
      phonetic: "/nɒd/",
      pos: "v.",
      posClass: "v",
      meaning: "点头",
      root: {
        parts: [],
        explain: "来自中古英语 nodden，可能跟'打瞌睡时头一点一点'有关。nod 最初就是'头往下点'的动作。"
      },
      memory: "nod 发音像'闹的'——上课闹了被老师叫起来回答问题，只能点头（nod）说'对对对'！",
      family: ["nod off（打盹=头一点一点地睡着了）"],
      synonyms: ["agree（同意）"],
      antonyms: ["shake one's head（摇头）"],
      sentences: [
        { en: "She nodded and said 'yes'.", zh: "她点头说'是的'。" },
        { en: "He nodded to me when I came in.", zh: "我进来时他向我点了点头。" }
      ],
      fun: "在大多数国家，点头（nod）表示同意，摇头表示不同意。但在保加利亚和希腊的部分地区，完全相反——点头表示'不'，摇头表示'是'！去那里旅游千万别搞混了！",
      usage: "nod 双写 d 再加 -ed/-ing：nodded, nodding。nod off = 打瞌睡（头一点一点就睡着了）。nod to sb. = 向某人点头示意。",
      visual: "想象上课时一个同学边听课边打瞌睡，头像小鸡啄米一样不停地一点一点（nod），老师以为他在疯狂点头赞同，还表扬他'听得真认真！'全班笑喷。",
      confuse: "nod vs. knock：nod /nɒd/ 是点头，knock /nɒk/ 是敲门。nod 是头的动作，knock 是手的动作。上课打瞌睡 nod off，回家敲门 knock knock！",
      rhyme: "nod nod 点点头，表示同意 yes yes yes；nod off 打瞌睡，上课千万别 nod off！",
      scene: "头部动作系列：nod（点头）、shake one's head（摇头）、bow（鞠躬）——你的 head 能做这么多 body language！"
    },
    {
      word: "shake",
      phonetic: "/ʃeɪk/",
      pos: "v.",
      posClass: "v",
      meaning: "摇；握",
      root: {
        parts: [],
        explain: "来自古英语 sceacan（摇动），是一个很古老的日耳曼词汇。shake 的过去式是不规则的：shake-shook-shaken。"
      },
      memory: "shake 发音像'血可'——地震来了，大地 shake（摇动），吓得人'血都可以凝固'！或者想象 shake = 'sh（嘘）+ ake（疼）'——握手太用力，嘘，手疼！",
      family: ["shaker（摇动器）", "milkshake（奶昔=摇出来的牛奶）", "shaky（摇晃的；不稳的）", "handshake（握手）"],
      synonyms: ["tremble（颤抖）", "vibrate（振动）"],
      antonyms: ["still（静止）", "steady（稳定）"],
      sentences: [
        { en: "Shake the bottle before you drink.", zh: "喝之前摇一摇瓶子。" },
        { en: "People often shake hands when they meet.", zh: "人们见面时常常握手。" }
      ],
      fun: "milkshake（奶昔）= milk（牛奶）+ shake（摇）= 摇出来的牛奶饮料！Shakespeare（莎士比亚）= shake（摇）+ speare（矛）= 挥舞长矛的人！世界上最伟大的作家名字竟然是'摇矛哥'！",
      usage: "shake 是不规则动词：shake-shook-shaken。shake hands with sb. = 和某人握手（注意 hands 要加 s）。shake one's head = 摇头。",
      visual: "想象一个大力士跟你握手，shake 得太用力，把你整个人都摇得像拨浪鼓一样左右晃，最后你头晕眼花，身边的奶昔（milkshake）都被震飞了！",
      confuse: "shake vs. share：shake /ʃeɪk/ 是摇动/握手，share /ʃeə/ 是分享。shake hands 是握手，share ideas 是分享想法。一个是动手，一个是动心！",
      rhyme: "shake shake 摇一摇，shake hands 来握手；shake head 摇摇头，milkshake 奶昔好好喝。",
      scene: "手部动作合集：shake（摇/握）、touch（触摸）、hold（握住）、wave（挥手）——手是最忙碌的 body language 工具！"
    },
    {
      word: "shake hands",
      phonetic: "/ʃeɪk hændz/",
      pos: "v.",
      posClass: "v",
      meaning: "握手",
      root: {
        parts: [
          { text: "shake", type: "root", label: "摇动" },
          { text: "hands", type: "root", label: "手（复数）" }
        ],
        explain: "shake（摇动）+ hands（手）= 两个人的手互相摇动 = 握手。握手时两只手上下摇动，所以叫 shake hands！"
      },
      memory: "握手就是两个人的 hands（手）一起 shake（摇），shake hands！想象两个人见面，手握在一起上下摇晃。",
      family: ["handshake（n.握手）", "shake（摇动）", "hand（手）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "Let's shake hands and be friends.", zh: "我们握手做朋友吧。" },
        { en: "In business, people usually shake hands when they first meet.", zh: "在商务场合，人们初次见面时通常会握手。" }
      ],
      fun: "握手的习惯可能源于古代：伸出右手表示手里没有武器，是和平的意思。最初握手是为了证明'我没有拿刀'！现在变成了友好的问候方式。",
      usage: "shake hands with sb. = 和某人握手。注意 hands 要用复数（因为两只手），不能说 shake hand。名词形式是一个词：handshake。",
      visual: "想象两个古代骑士在战场上相遇，互相掏出右手使劲上下摇晃，摇得盔甲都哗哗响，就是为了证明'看！我手里没刀！'——这就是 shake hands 的起源！",
      confuse: "shake hands vs. hold hands：shake hands 是握手问候（上下摇），hold hands 是牵手（不摇，一直握着）。商务场合 shake hands，和好朋友散步 hold hands！",
      rhyme: "shake hands 来握手，hands 一定要复数；两只手儿摇一摇，友好问候打招呼。",
      scene: "见面问候方式：shake hands（握手）、bow（鞠躬）、kiss（亲吻）、nod（点头）、wave（挥手）——世界各地的见面礼。"
    },
    {
      word: "smile",
      phonetic: "/smaɪl/",
      pos: "v.",
      posClass: "v",
      meaning: "微笑",
      root: {
        parts: [],
        explain: "来自中古英语 smilen，可能跟斯堪的纳维亚语有关（瑞典语 smila = 微笑）。有趣的是，smile 和 smirk（假笑）可能是同源词。"
      },
      memory: "smile 里藏着 mile（英里）——微笑的力量能传递一英里远！smile = s + mile，一个微笑传千里！",
      family: ["smiley（笑脸符号）", "smiling（微笑的）"],
      synonyms: ["grin（咧嘴笑）", "beam（眉开眼笑）"],
      antonyms: ["frown（皱眉）", "cry（哭）"],
      sentences: [
        { en: "She smiled at me and I felt happy.", zh: "她对我微笑，我感到很开心。" },
        { en: "Keep smiling and you'll make more friends.", zh: "保持微笑，你会交到更多朋友。" }
      ],
      fun: "科学研究发现，即使你心情不好，强迫自己做出微笑的表情，大脑也会释放快乐的化学物质，让你真的变开心！这叫'面部反馈假说'。所以 fake it till you make it——先假笑，后真笑！",
      usage: "smile at sb. = 对某人微笑（注意介词用 at）。smile 是温和的微笑；laugh 是大笑出声；grin 是咧嘴露齿笑。",
      visual: "想象蒙娜丽莎从画里探出头来，对全班同学微微一笑（smile），她那神秘的微笑传了一 mile（英里）远，连隔壁学校的人都感受到了快乐！",
      confuse: "smile vs. smell：smile /smaɪl/ 是微笑，smell /smel/ 是闻/气味。一个用嘴巴，一个用鼻子！smile 让人开心，smell 可能让人捂鼻子。",
      rhyme: "smile 藏着一个 mile，微笑力量传千里；smile at 对人笑，朋友多多心情好。",
      scene: "面部表情系列：smile（微笑）、nod（点头）、kiss（亲吻）——你的脸就是最好的 body language 舞台！"
    },
    {
      word: "polite",
      phonetic: "/pəˈlaɪt/",
      pos: "adj.",
      posClass: "adj",
      meaning: "有礼貌的",
      root: {
        parts: [{ text: "polit-", type: "root", label: "拉丁语 politus = 打磨过的" }],
        explain: "来自拉丁语 politus（打磨过的、抛光的）。一个人被'打磨'过，就变得有教养、有礼貌了！跟 polish（抛光）是近亲。"
      },
      memory: "polite = po + lite（光）——一个人'发光'（lite），是因为有礼貌（polite），让人觉得闪闪发光！",
      family: ["politely（有礼貌地）", "politeness（礼貌）", "impolite（不礼貌的）", "polish（抛光=打磨）"],
      synonyms: ["courteous（彬彬有礼的）", "well-mannered（有教养的）"],
      antonyms: ["impolite（不礼貌的）", "rude（粗鲁的）"],
      sentences: [
        { en: "It's polite to say 'thank you' when someone helps you.", zh: "别人帮助你时说'谢谢'是有礼貌的。" },
        { en: "He is a polite boy and everyone likes him.", zh: "他是个有礼貌的男孩，大家都喜欢他。" }
      ],
      fun: "polite 和 politics（政治）竟然有关系！它们都来自拉丁语/希腊语中'城邦'的概念。一个有教养的人就像城邦中的好公民——polite！",
      usage: "It's polite to do sth. = 做某事是有礼貌的。反义词 impolite 或 rude。be polite to sb. = 对某人有礼貌。",
      visual: "想象一个小男孩浑身发光（polite 里有 lite=光），走到哪里都说'请、谢谢、对不起'，人人都夸他是'发光少年'，走路自带闪闪光芒！",
      confuse: "polite vs. police：polite /pəˈlaɪt/ 是有礼貌的，police /pəˈliːs/ 是警察。一个让你变优雅，一个让你守规矩！拼写只差最后几个字母。",
      rhyme: "polite 有礼貌，impolite 没教养；见人要 smile，说话要 polite。",
      scene: "礼貌社交场景：polite（有礼貌的）、smile（微笑）、bow（鞠躬）、nod（点头）——做个 polite 的 visitor！"
    },
    {
      word: "visitor",
      phonetic: "/ˈvɪzɪtə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "参观者；访问者",
      root: {
        parts: [
          { text: "visit", type: "root", label: "参观；拜访" },
          { text: "-or", type: "suffix", label: "做……的人" }
        ],
        explain: "visit（参观）+ -or（人）= 参观的人。visit 来自拉丁语 visitare = 去看。-or 是'做某事的人'的后缀，和 -er 功能类似。"
      },
      memory: "visitor = visit（参观）+ or（人）——去参观的人就是 visitor！记住 -or 和 -er 都表示'人'：visitor, actor, teacher, singer。",
      family: ["visit（v.参观；n.拜访）", "visiting（adj.来访的）"],
      synonyms: ["guest（客人）", "tourist（游客）"],
      antonyms: ["host（主人）", "resident（居民）"],
      sentences: [
        { en: "The museum had many visitors last weekend.", zh: "上周末博物馆有很多参观者。" },
        { en: "We should be friendly to foreign visitors.", zh: "我们应该对外国访客友好。" }
      ],
      fun: "-or 和 -er 都表示'做某事的人'，但有时候有细微区别：-or 更常见于拉丁词根的单词（visitor, actor, doctor），-er 更常见于日耳曼词根的单词（teacher, singer, player）。",
      usage: "visitor 用 -or 结尾而不是 -er，要注意拼写！visitor to a place = 某地的访客。",
      visual: "想象一群外星人 visitor 来参观地球学校，他们用各种奇怪的 body language 打招呼——有的 bow，有的 shake hands，有的 kiss，校长看得目瞪口呆！",
      confuse: "visitor vs. tourist：visitor 是参观者/访客（去任何地方都算），tourist 是游客（专门去旅游的人）。所有 tourist 都是 visitor，但不是所有 visitor 都是 tourist。",
      rhyme: "visit 加上 or，变成参观者；-or -er 表示人，visitor 用 or 写。",
      scene: "来访场景：visitor（参观者）、foreign（外国的）、polite（有礼貌的）——foreign visitor 来做客，我们要 polite 待客人！"
    },
    {
      word: "foreign",
      phonetic: "/ˈfɒrən/",
      pos: "adj.",
      posClass: "adj",
      meaning: "外国的",
      root: {
        parts: [{ text: "for-", type: "root", label: "拉丁语 foris = 外面" }],
        explain: "来自拉丁语 foris（在外面）。foreign = 从外面来的 = 外国的。同源词 forest（森林）——在城市外面的地方！"
      },
      memory: "foreign 里有 for + eign——'为了'(for) 另一个'国家'，就是外国的！注意 eign 不发音为'恩'，而是 /ən/。",
      family: ["foreigner（外国人）", "forest（森林=城外之地）"],
      synonyms: ["overseas（海外的）", "international（国际的）"],
      antonyms: ["domestic（国内的）", "native（本土的）", "local（当地的）"],
      sentences: [
        { en: "She can speak three foreign languages.", zh: "她会说三门外语。" },
        { en: "There are many foreign visitors in Beijing.", zh: "北京有很多外国游客。" }
      ],
      fun: "foreign 的拼写是英语中最容易拼错的单词之一！很多人会写成 foriegn（把 ei 写成 ie）。记住口诀：foreign 里的 reign（统治）——外国有外国的统治者！",
      usage: "foreign country = 外国；foreign language = 外语。注意拼写：ei 不是 ie！foreigner = 外国人（注意不要用带贬义的语气）。",
      visual: "想象一个老外来到中国，看到大家用筷子吃饭，他 nod 表示佩服，然后用 fork（叉子）吃饺子，结果饺子飞了满桌——foreign 朋友学用筷子的搞笑场面！",
      confuse: "foreign vs. foreigner：foreign 是形容词（外国的），foreigner 是名词（外国人）。foreign language 外语，a foreigner 一个外国人。别把形容词和名词搞混！",
      rhyme: "foreign 外国的，拼写别写错；e-i 不是 i-e，reign 藏在里面呢。",
      scene: "跨文化交流：foreign（外国的）、visitor（参观者）、body language（身体语言）、polite（有礼貌的）——了解 foreign 文化，做个好 host！"
    },
    {
      word: "personal",
      phonetic: "/ˈpɜːsənl/",
      pos: "adj.",
      posClass: "adj",
      meaning: "个人的；私人的",
      root: {
        parts: [
          { text: "person", type: "root", label: "人" },
          { text: "-al", type: "suffix", label: "形容词后缀" }
        ],
        explain: "person（人）+ -al（形容词后缀）= 属于个人的。person 来自拉丁语 persona = 面具（演员戴的面具）→ 角色 → 人。"
      },
      memory: "personal = person（人）+ al——属于一个人（person）的，就是个人的（personal）！",
      family: ["person（人）", "personality（个性；性格）", "personally（就个人而言）", "personnel（全体人员）"],
      synonyms: ["private（私人的）", "individual（个人的）"],
      antonyms: ["public（公共的）", "shared（共享的）"],
      sentences: [
        { en: "This is my personal phone. Don't use it.", zh: "这是我的私人电话，不要用。" },
        { en: "Everyone has their own personal space.", zh: "每个人都有自己的个人空间。" }
      ],
      fun: "person 来自拉丁语 persona（面具）——古罗马演员戴面具表演，每个面具代表一个角色（人）。所以'人'这个词最初的意思是'面具'！personality（个性）= 你戴着什么样的面具。",
      usage: "personal space = 个人空间，在身体语言中很重要。不同文化对个人空间的距离要求不同。personal information = 个人信息，要注意保护隐私！",
      visual: "想象每个人身边都有一个透明的大泡泡，这就是 personal space！有人靠太近，泡泡就会发出警报'滴滴滴——请保持距离！'不同国家泡泡大小还不一样呢！",
      confuse: "personal vs. personnel：personal /ˈpɜːsənl/ 是个人的（形容词），personnel /ˌpɜːsəˈnel/ 是全体人员（名词）。重音不同，意思不同！personal phone 私人电话，personnel department 人事部。",
      rhyme: "person 加上 al，个人的 personal；personal space 个人圈，别人靠近要当心。",
      scene: "身体语言与空间：personal（个人的）、touch（触摸）、arm（手臂）、move（移动）——personal space 里的 body language 学问大！"
    },
    {
      word: "arm",
      phonetic: "/ɑːm/",
      pos: "n.",
      posClass: "n",
      meaning: "手臂",
      root: {
        parts: [],
        explain: "来自古英语 earm（手臂），是一个古老的日耳曼词。有趣的是，arm 还有'武器'的意思（来自拉丁语 arma），所以 army（军队）和 arm（手臂）其实是不同来源的同形词！"
      },
      memory: "arm 发音像'啊母'——妈妈（母）张开双臂（arm）说'啊'，拥抱你！",
      family: ["army（军队=武装力量）", "armchair（扶手椅=有手臂的椅子）", "armour/armor（盔甲=保护手臂的装备）", "arms（武器）"],
      synonyms: ["limb（肢体）"],
      antonyms: [],
      sentences: [
        { en: "She held the baby in her arms.", zh: "她把婴儿抱在怀里。" },
        { en: "He put his arm around my shoulder.", zh: "他把手臂搭在我的肩上。" }
      ],
      fun: "armchair（扶手椅）= arm（手臂）+ chair（椅子）= 有地方放手臂的椅子！army（军队）也跟 arm 有关——armed（武装的）forces = 军队。但身体的 arm 和武器的 arm 其实是不同来源的词，只是长得一样！",
      usage: "arm in arm = 手挽手。arms（复数）= 武器。with open arms = 张开双臂（热情欢迎）。",
      visual: "想象一把超大的扶手椅（armchair），两个扶手就是两条巨大的 arm，你坐上去，它的 arm 会自动 hold 住你，像妈妈的拥抱一样温暖！",
      confuse: "arm vs. harm：arm /ɑːm/ 是手臂，harm /hɑːm/ 是伤害。只多了一个 h，意思完全不同！arm 保护你，harm 伤害你。",
      rhyme: "arm arm 是手臂，armchair 扶手椅；arm in arm 手挽手，open arms 欢迎你。",
      scene: "身体部位系列：arm（手臂）、head（头）、finger（手指）、body（身体）——认识你身上的每个零件，它们都在说 body language！"
    },
    {
      word: "hold",
      phonetic: "/həʊld/",
      pos: "v.",
      posClass: "v",
      meaning: "握；拿",
      root: {
        parts: [],
        explain: "来自古英语 healdan（握住、保持），是一个核心日耳曼词汇。hold 的含义很广：握住、举办、容纳、认为，都有'保持、维持'的核心含义。"
      },
      memory: "hold 发音像'厚的'——握（hold）一个厚的东西，需要用力！",
      family: ["holder（持有者；支架）", "household（家庭=管家的）", "hold on（坚持住；别挂电话）", "behold（注视）"],
      synonyms: ["grasp（抓住）", "grip（紧握）", "carry（携带）"],
      antonyms: ["release（释放）", "drop（放下）", "let go（松手）"],
      sentences: [
        { en: "Please hold my bag for a moment.", zh: "请帮我拿一下包。" },
        { en: "She held his hand and walked across the road.", zh: "她拉着他的手走过马路。" }
      ],
      fun: "hold 是个超级多义词！hold a meeting = 举办会议；hold on = 坚持/别挂电话；hold your breath = 屏住呼吸；hold the door = 帮忙扶着门。一个 hold 走天下！",
      usage: "hold 是不规则动词：hold-held-held。hold on = 等一下（打电话时）/ 坚持住。hold one's hand = 牵某人的手。",
      visual: "想象一个小朋友两只手 hold 了十个冰淇淋，摇摇晃晃走在街上，路人都看呆了——他还能 hold 住吗？突然一阵风，冰淇淋全飞了，只好 let go！",
      confuse: "hold vs. hole：hold /həʊld/ 是握住，hole /həʊl/ 是洞。发音几乎一样！hold the ball 握住球，fall in a hole 掉进洞。别把'握住'写成'洞'！",
      rhyme: "hold hold 握住它，held held 过去式；hold on 别挂电话，hold hands 手拉手。",
      scene: "握与牵的场景：hold（握住）、shake hands（握手）、touch（触摸）、arm（手臂）——用你的 arm 和 hand 去 hold 和 touch 这个世界！"
    },
    {
      word: "move",
      phonetic: "/muːv/",
      pos: "v.",
      posClass: "v",
      meaning: "移动",
      root: {
        parts: [{ text: "mov-", type: "root", label: "拉丁语 movēre = 移动" }],
        explain: "来自拉丁语 movēre（移动）。mov- 是一个重要词根：movie = 移动的画面 = 电影！remote = re（远）+ mot（移动）= 遥远的/遥控器。"
      },
      memory: "move 发音像'木屋'——把木屋 move（移动）到另一个地方！或者记：movie（电影）就是 move 的名词形式，电影 = 会动的画面。",
      family: ["movie（电影=移动的画面）", "movement（运动；移动）", "remove（移除=移走）", "remote（遥远的=移到远处）"],
      synonyms: ["shift（移动）", "transfer（转移）"],
      antonyms: ["stay（停留）", "remain（保持不动）", "stop（停下）"],
      sentences: [
        { en: "Don't move! Stay right there.", zh: "别动！就待在那里。" },
        { en: "We moved to a new house last year.", zh: "去年我们搬到了新房子。" }
      ],
      fun: "movie（电影）就是 moving picture（移动的画面）的缩写！最早的电影就是一系列快速移动的图片，让人眼产生'动起来'的错觉。所以 movie = move + ie！",
      usage: "move to = 搬到某地；move house = 搬家（英式英语）。move 还可以表示'感动'：The story moved me to tears. = 这个故事让我感动落泪。",
      visual: "想象你对着电视喊'Don't move!'，结果电视里的人真的全部定格不动了——movie（电影）的本质就是 move（移动）的画面，不 move 就没有 movie！",
      confuse: "move vs. movie：move /muːv/ 是动词'移动'，movie /ˈmuːvi/ 是名词'电影'。movie 就是 move 加个 ie！会移动的画面就是电影。",
      rhyme: "move move 动起来，movie 就是会动的画；move to 搬新家，Don't move 别动啊。",
      scene: "动作与电影：move（移动）、film（电影）、wave（挥手）、nod（点头）——所有 body language 都是 move 的艺术！"
    },
    {
      word: "film",
      phonetic: "/fɪlm/",
      pos: "n.",
      posClass: "n",
      meaning: "电影",
      root: {
        parts: [],
        explain: "来自古英语 filmen（薄膜）。最早的电影是拍在胶片（film = 薄膜）上的，所以 film 从'薄膜'引申为'电影'。"
      },
      memory: "film 发音像'菲林'——以前照相用的胶卷就叫'菲林'（film 的音译），拍电影也用胶卷，所以 film = 电影！",
      family: ["filmmaker（电影制作人）", "filming（拍摄）", "film star（电影明星）"],
      synonyms: ["movie（电影，美式）", "motion picture（电影，正式）"],
      antonyms: [],
      sentences: [
        { en: "Let's watch a film tonight.", zh: "今晚我们看场电影吧。" },
        { en: "This film is about body language in different countries.", zh: "这部电影讲的是不同国家的身体语言。" }
      ],
      fun: "film 是英式英语，movie 是美式英语，都表示'电影'。英国人说 go to the cinema，美国人说 go to the movies。在中国，'菲林'（film）这个词曾经专指照相胶卷。",
      usage: "film 在英式英语中更常用，美式英语更爱用 movie。film 还可以做动词：film a movie = 拍电影。",
      visual: "想象一卷长长的胶片（film）从放映机里飞出来，绕了整个教室一圈，上面每一格都在播放不同国家的人用不同 body language 打招呼的画面——这就是 film 的魅力！",
      confuse: "film vs. movie：film 是英式英语的'电影'，movie 是美式英语的'电影'。在英国说 film，在美国说 movie，都对！film 还有'胶片/薄膜'的意思，movie 没有。",
      rhyme: "film 电影菲林卷，英国人最爱用；movie 美国说，意思都一样。",
      scene: "娱乐与文化：film（电影）、move（移动）、somewhere（某处）——看一场 film，move 到 somewhere 新的世界！"
    },
    {
      word: "somewhere",
      phonetic: "/ˈsʌmweə(r)/",
      pos: "adv.",
      posClass: "adv",
      meaning: "在某处",
      root: {
        parts: [
          { text: "some-", type: "prefix", label: "某个" },
          { text: "where", type: "root", label: "在哪里" }
        ],
        explain: "some（某个）+ where（哪里）= 在某个地方。英语中 some- 家族很整齐：somebody, someone, something, somewhere, sometime。"
      },
      memory: "somewhere = some（某个）+ where（哪里）——在某个（some）地方（where）！记住 some- 家族：somebody（某人）、something（某物）、somewhere（某处）。",
      family: ["anywhere（任何地方）", "everywhere（到处）", "nowhere（无处）", "somebody（某人）", "something（某物）"],
      synonyms: ["someplace（某处，美式口语）"],
      antonyms: ["nowhere（无处）", "everywhere（到处）"],
      sentences: [
        { en: "I want to go somewhere interesting this weekend.", zh: "这个周末我想去一个有趣的地方。" },
        { en: "I've seen him somewhere before.", zh: "我以前在某处见过他。" }
      ],
      fun: "some-/any-/every-/no- 可以和 -body/-one/-thing/-where 自由组合，形成16个词！像搭积木一样：something, anything, everything, nothing; somewhere, anywhere, everywhere, nowhere...",
      usage: "somewhere 用于肯定句，anywhere 用于否定句和疑问句。somewhere 后面可以直接加形容词：somewhere quiet（安静的某处）。",
      visual: "想象你站在一个巨大的十字路口，四面八方都有路，你闭眼转三圈，手指随便一指——'我要去 somewhere！'结果一睁眼发现指向了南极，企鹅们在那里 wave 欢迎你！",
      confuse: "somewhere vs. anywhere：somewhere 用在肯定句（I want to go somewhere），anywhere 用在否定句和疑问句（I don't want to go anywhere / Do you want to go anywhere?）。这是最容易搞混的一对！",
      rhyme: "some 加 where 某个地方，somewhere 用在肯定句；否定疑问用 anywhere，everywhere 到处跑。",
      scene: "地点与方位：somewhere（某处）、move（移动）、foreign（外国的）——move to somewhere foreign，去外国的某个地方探索新的 body language！"
    },
    {
      word: "not...at all",
      phonetic: "/nɒt ... æt ɔːl/",
      pos: "adv.",
      posClass: "adv",
      meaning: "根本不",
      root: {
        parts: [
          { text: "not", type: "root", label: "不" },
          { text: "at all", type: "root", label: "完全；一点" }
        ],
        explain: "not（不）+ at all（一点儿）= 一点也不 = 根本不。at all 起强调作用，加强否定的语气。"
      },
      memory: "not at all = 一点（at all）也不（not）！想象你问朋友：'累吗？'朋友摇摇头说：Not at all!（一点也不累！）",
      family: ["at all（完全，用于否定/疑问）", "not at all（一点也不/别客气）"],
      synonyms: ["not in the least（一点也不）", "by no means（绝不）"],
      antonyms: ["very much（非常）", "extremely（极其）"],
      sentences: [
        { en: "I don't like this movie at all.", zh: "我根本不喜欢这部电影。" },
        { en: "—Thank you! —Not at all.", zh: "——谢谢！——不用客气。" }
      ],
      fun: "Not at all 有两个意思：1. 根本不（I don't mind at all = 我根本不介意）；2. 不用客气（= You're welcome）。当别人说 Thank you 时，你可以回答 Not at all! 显得非常绅士/淑女！",
      usage: "not...at all 中 at all 放在句末，加强否定语气。Not at all 单独使用时 = 不用客气。Do you mind? — Not at all.（你介意吗？——完全不介意。）",
      visual: "想象一个人被问'你怕蟑螂吗？'他淡定地摇头说'Not at all!'，结果一只蟑螂飞到他脸上，他吓得跳起三米高——嘴上说 not at all，身体很诚实！",
      confuse: "not...at all vs. after all：not...at all 是'根本不'（加强否定），after all 是'毕竟'（表示转折）。I don't mind at all（我根本不介意）vs. After all, he is just a kid（毕竟他只是个孩子）。",
      rhyme: "not at all 根本不，at all 放句尾；别人谢你说 Not at all，听着特别有礼貌。",
      scene: "表达态度的短语：not...at all（根本不）、in fact（事实上）、polite（有礼貌的）——用这些词让你的表达更有力！"
    },
    {
      word: "wave",
      phonetic: "/weɪv/",
      pos: "v.",
      posClass: "v",
      meaning: "挥手",
      root: {
        parts: [],
        explain: "来自古英语 wafian（挥动），跟海浪（wave）是同一个词！手挥动的样子就像海浪一样一波一波的。"
      },
      memory: "wave 和'微'谐音——wave（挥手）打个'微'招呼！或者想象：挥手（wave）的动作就像海浪（wave）一样起伏。",
      family: ["wave（n.海浪；波浪）", "microwave（微波=小波浪）", "waveform（波形）"],
      synonyms: ["signal（示意）", "gesture（做手势）"],
      antonyms: [],
      sentences: [
        { en: "She waved goodbye to her friends.", zh: "她向朋友们挥手告别。" },
        { en: "The students waved at the teacher.", zh: "学生们向老师挥手。" }
      ],
      fun: "wave 既是'挥手'也是'波浪'——手的挥动就像波浪！microwave（微波炉）= micro（微小）+ wave（波）= 用微小的波加热食物。Wi-Fi 也是一种 wave（无线电波）！",
      usage: "wave to/at sb. = 向某人挥手。wave goodbye = 挥手告别。wave 做名词时还可以指'浪潮'：a wave of excitement = 一阵兴奋。",
      visual: "想象你站在海边，一边对朋友 wave（挥手），海里的巨浪也跟着你的节奏一起 wave（翻涌），好像大海也在跟你的朋友说再见！手和海浪同步挥动，画面超壮观。",
      confuse: "wave vs. waive：wave /weɪv/ 是挥手/波浪，waive /weɪv/ 是放弃（权利）。发音完全一样，但拼写和意思不同！wave goodbye 挥手告别，waive the fee 免除费用。",
      rhyme: "wave wave 挥挥手，像海浪一样走；wave goodbye 说再见，microwave 热饭用。",
      scene: "告别场景：wave（挥手）、smile（微笑）、nod（点头）、bow（鞠躬）——离别时的 body language，温暖又动人。"
    },
    {
      word: "fact",
      phonetic: "/fækt/",
      pos: "n.",
      posClass: "n",
      meaning: "事实",
      root: {
        parts: [{ text: "fact-", type: "root", label: "拉丁语 facere = 做" }],
        explain: "来自拉丁语 factum = 做过的事。fact-/fac- 是超级重要的词根'做'：factory = 做东西的地方 = 工厂；manufacture = 用手做 = 制造。"
      },
      memory: "fact 发音像'发课特'——上课时老师说的知识都是事实（fact），要认真记！或者记：fact = 'f(发)a(啊)ct(确实)'——发啊确实，这是事实！",
      family: ["factory（工厂=做东西的地方）", "factor（因素=做事的要素）", "manufacture（制造=用手做）", "factual（事实的）"],
      synonyms: ["truth（真相）", "reality（现实）"],
      antonyms: ["fiction（虚构）", "lie（谎言）"],
      sentences: [
        { en: "It's a fact that body language is different around the world.", zh: "世界各地的身体语言不同，这是一个事实。" },
        { en: "In fact, he is very friendly.", zh: "事实上，他非常友好。" }
      ],
      fun: "fact 词根 = 做：factory（工厂=做东西的地方）、benefit（好处=做好事）、perfect（完美=完全做好）、effect（效果=做出来的结果）。掌握 fact-/fac- = 做，就打开了一扇大门！",
      usage: "in fact = 事实上（常用于转折或强调）。as a matter of fact = 事实上（更正式）。fun fact = 趣味小知识。",
      visual: "想象一个法官拿着大锤子敲桌子，喊道'Fact! Fact! Fact!'——每敲一下，一个真相就从地里冒出来，假话像泡泡一样啪啪破掉，全场鼓掌！",
      confuse: "fact vs. fiction：fact /fækt/ 是事实（真的），fiction /ˈfɪkʃn/ 是虚构（假的/小说）。fact is stranger than fiction = 事实比小说还离奇！这对反义词一定要记住。",
      rhyme: "fact fact 是事实，in fact 事实上；factory 是工厂，fact 词根是'做'。",
      scene: "表达观点：fact（事实）、in fact（事实上）、not...at all（根本不）——用事实说话，让你的观点更有说服力！"
    },
    {
      word: "in fact",
      phonetic: "/ɪn fækt/",
      pos: "adv.",
      posClass: "adv",
      meaning: "事实上",
      root: {
        parts: [
          { text: "in", type: "root", label: "在……之中" },
          { text: "fact", type: "root", label: "事实" }
        ],
        explain: "in（在……中）+ fact（事实）= 在事实中 = 事实上。用来引出真实情况，常带有'你可能不知道，但其实……'的意味。"
      },
      memory: "in fact = 在（in）事实（fact）中——让我们走进事实看看真相是什么！常用于补充说明或纠正误解。",
      family: ["as a matter of fact（事实上）", "actually（实际上）", "in reality（实际上）"],
      synonyms: ["actually（实际上）", "as a matter of fact（事实上）"],
      antonyms: [],
      sentences: [
        { en: "He looks young, but in fact he is 40 years old.", zh: "他看起来年轻，但事实上他已经40岁了。" },
        { en: "In fact, not all body language means the same thing everywhere.", zh: "事实上，并非所有身体语言在各地都表示相同的意思。" }
      ],
      fun: "in fact 通常用在句首或句中，表示'你以为是这样，但实际上……'。它是写作中很好用的过渡词，能让你的文章更有说服力！",
      usage: "in fact 常放在句首，后面加逗号：In fact, ... 也可以放在句中。它比 actually 更书面化一些。",
      visual: "想象一个魔术师说'这只是普通的帽子'，然后翻转说'but in fact...'从帽子里拉出一只兔子、一条蛇和一架钢琴！in fact 就是揭开真相的魔法词！",
      confuse: "in fact vs. in the fact：in fact（事实上）是固定短语，千万别加 the！不能说 in the fact。同样，actually 也表示'事实上'，但更口语化。",
      rhyme: "in fact 事实上，放在句首加逗号；看似这样其实那样，in fact 来揭晓。",
      scene: "写作过渡词：in fact（事实上）、not...at all（根本不）、fact（事实）——让你的作文逻辑更清晰，表达更有力。"
    },
    {
      word: "head",
      phonetic: "/hed/",
      pos: "n.",
      posClass: "n",
      meaning: "头",
      root: {
        parts: [],
        explain: "来自古英语 hēafod（头），是日耳曼语族的核心词汇，跟德语 Haupt（头/首要的）同源。head 从'头'引申出'首领、首要'等含义。"
      },
      memory: "head 发音像'黑的'——你的 head（头）上有一头黑的头发！",
      family: ["headache（头痛=头+疼）", "headline（标题=头条）", "headmaster（校长=首领）", "ahead（在前面=在头的方向）"],
      synonyms: [],
      antonyms: ["tail（尾巴）", "foot（脚）"],
      sentences: [
        { en: "She shook her head and said no.", zh: "她摇了摇头说不。" },
        { en: "Use your head and think about it.", zh: "动动脑子想一想。" }
      ],
      fun: "head 有超多搭配：headphone（耳机=头上的电话）、headline（头条新闻=头上的线）、headquarters（总部=头的住所）。heads or tails?（正面还是反面？）= 抛硬币时说的话，因为硬币一面有人头！",
      usage: "nod one's head = 点头；shake one's head = 摇头。Use your head! = 动动脑子！head 还可以做动词：head for = 朝……方向走。",
      visual: "想象一个人的 head 上顶着一个巨大的灯泡，每次他 nod（点头），灯泡就亮一下；每次 shake head（摇头），灯泡就灭一下——他的 head 就是一个人形红绿灯！",
      confuse: "head vs. heat：head /hed/ 是头，heat /hiːt/ 是热量。拼写只差一个字母！nod your head（点你的头），feel the heat（感受热量）。别搞混了！",
      rhyme: "head head 是脑袋，nod head 点点头；shake head 摇摇头，Use your head 动脑筋。",
      scene: "头部动作全集：head（头）、nod（点头）、shake head（摇头）、bow（鞠躬）——你的 head 是 body language 的总指挥！"
    },
    {
      word: "finger",
      phonetic: "/ˈfɪŋɡə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "手指",
      root: {
        parts: [],
        explain: "来自古英语 finger，可能跟'五'(five) 有关——five fingers（五根手指）！这个词在所有日耳曼语言中都存在：德语 Finger、荷兰语 vinger。"
      },
      memory: "finger 发音像'分割'——五根 finger（手指）把手掌分割成几部分！",
      family: ["fingertip（指尖）", "fingerprint（指纹=手指的印记）", "fingernail（指甲）", "forefinger（食指=前面的手指）"],
      synonyms: ["digit（手指/数字）"],
      antonyms: [],
      sentences: [
        { en: "She pointed her finger at the map.", zh: "她用手指指着地图。" },
        { en: "In some countries, it's rude to point your finger at people.", zh: "在一些国家，用手指指人是不礼貌的。" }
      ],
      fun: "每根手指都有英文名：thumb（大拇指）、index finger（食指=指示手指）、middle finger（中指）、ring finger（无名指=戴戒指的手指）、little finger/pinky（小指）。fingerprint（指纹）全世界没有两个人是一样的！",
      usage: "用手指指人（point a finger at sb.）在很多文化中都被认为不礼貌。cross one's fingers = 交叉手指（祈求好运）。",
      visual: "想象一只巨大的手从天而降，五根 finger 分别戴着不同国家的帽子——大拇指戴牛仔帽，食指戴贝雷帽，中指戴高帽——它们在争论'用 finger 指人到底礼不礼貌'，吵得不可开交！",
      confuse: "finger vs. singer：finger /ˈfɪŋɡə/ 是手指，singer /ˈsɪŋə/ 是歌手。长得有点像但完全不同！finger 在手上，singer 在舞台上。注意 finger 里的 g 要发音！",
      rhyme: "finger finger 手指头，五根finger五兄弟；fingerprint 是指纹，point finger 不礼貌。",
      scene: "手部细节：finger（手指）、arm（手臂）、touch（触摸）、hold（握住）、wave（挥手）——从 arm 到 finger，手上的 body language 最丰富！"
    }
  ]
};

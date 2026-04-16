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
      usage: "body 既可以指'身体'，也可以指'尸体'（dead body）。body language = 身体语言，是本单元的核心概念！"
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
      usage: "body language 是不可数名词，不加 a，也不加 s。注意是 body language，不是 body's language。"
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
      usage: "touch 既是动词也是名词。keep in touch = 保持联系；get in touch with = 与……取得联系。Don't touch! = 别碰！"
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
      usage: "bow to sb. = 向某人鞠躬。注意发音：鞠躬读 /baʊ/（和 cow 押韵），弓和蝴蝶结读 /bəʊ/（和 go 押韵）。"
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
      usage: "kiss sb. on the cheek = 亲某人的脸颊。注意介词搭配：kiss on the cheek（脸颊），kiss on the forehead（额头）。"
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
      usage: "nod 双写 d 再加 -ed/-ing：nodded, nodding。nod off = 打瞌睡（头一点一点就睡着了）。nod to sb. = 向某人点头示意。"
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
      usage: "shake 是不规则动词：shake-shook-shaken。shake hands with sb. = 和某人握手（注意 hands 要加 s）。shake one's head = 摇头。"
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
      usage: "shake hands with sb. = 和某人握手。注意 hands 要用复数（因为两只手），不能说 shake hand。名词形式是一个词：handshake。"
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
      usage: "smile at sb. = 对某人微笑（注意介词用 at）。smile 是温和的微笑；laugh 是大笑出声；grin 是咧嘴露齿笑。"
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
      usage: "It's polite to do sth. = 做某事是有礼貌的。反义词 impolite 或 rude。be polite to sb. = 对某人有礼貌。"
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
      usage: "visitor 用 -or 结尾而不是 -er，要注意拼写！visitor to a place = 某地的访客。"
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
      usage: "foreign country = 外国；foreign language = 外语。注意拼写：ei 不是 ie！foreigner = 外国人（注意不要用带贬义的语气）。"
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
      usage: "personal space = 个人空间，在身体语言中很重要。不同文化对个人空间的距离要求不同。personal information = 个人信息，要注意保护隐私！"
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
      usage: "arm in arm = 手挽手。arms（复数）= 武器。with open arms = 张开双臂（热情欢迎）。"
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
      usage: "hold 是不规则动词：hold-held-held。hold on = 等一下（打电话时）/ 坚持住。hold one's hand = 牵某人的手。"
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
      usage: "move to = 搬到某地；move house = 搬家（英式英语）。move 还可以表示'感动'：The story moved me to tears. = 这个故事让我感动落泪。"
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
      usage: "film 在英式英语中更常用，美式英语更爱用 movie。film 还可以做动词：film a movie = 拍电影。"
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
      usage: "somewhere 用于肯定句，anywhere 用于否定句和疑问句。somewhere 后面可以直接加形容词：somewhere quiet（安静的某处）。"
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
      usage: "not...at all 中 at all 放在句末，加强否定语气。Not at all 单独使用时 = 不用客气。Do you mind? — Not at all.（你介意吗？——完全不介意。）"
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
      usage: "wave to/at sb. = 向某人挥手。wave goodbye = 挥手告别。wave 做名词时还可以指'浪潮'：a wave of excitement = 一阵兴奋。"
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
      usage: "in fact = 事实上（常用于转折或强调）。as a matter of fact = 事实上（更正式）。fun fact = 趣味小知识。"
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
      usage: "in fact 常放在句首，后面加逗号：In fact, ... 也可以放在句中。它比 actually 更书面化一些。"
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
      usage: "nod one's head = 点头；shake one's head = 摇头。Use your head! = 动动脑子！head 还可以做动词：head for = 朝……方向走。"
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
      usage: "用手指指人（point a finger at sb.）在很多文化中都被认为不礼貌。cross one's fingers = 交叉手指（祈求好运）。"
    }
  ]
};

// Unit 3: Making plans (Module 3 外研版七年级下册)
const UNIT3 = {
  id: 3,
  title: "Making plans",
  theme: "制定计划",
  color: "#f59e0b",
  words: [
    {
      word: "check",
      phonetic: "/tʃek/",
      pos: "v.",
      posClass: "v",
      meaning: "核实；检查",
      root: {
        parts: [{ text: "check", type: "root", label: "源自波斯语 shāh = 国王" }],
        explain: "来自国际象棋术语！波斯语 shāh（国王）→ 阿拉伯语 → 古法语 eschec → 英语 check。下棋时喊 'check' 就是'将军'，意思是'你的国王被威胁了，赶快检查一下'。从此 check 就有了'检查、核实'的意思。"
      },
      memory: "check 发音像'切克'——切开来看看，仔细检查！想象你用放大镜检查作业有没有错误。",
      family: ["check in（登记入住）", "check out（结账离开）", "checkout（收银台）", "double-check（再次核实）"],
      synonyms: ["examine（检查）", "inspect（检验）", "verify（核实）"],
      antonyms: ["ignore（忽视）", "overlook（忽略）"],
      sentences: [
        { en: "Let me check my email first.", zh: "让我先检查一下我的电子邮件。" },
        { en: "Please check your answers before you hand in the paper.", zh: "交卷前请检查你的答案。" }
      ],
      fun: "check 在美式英语里还有'支票'和'账单'的意思。在美国餐厅吃完饭说 'Check, please!' 就是'买单！'。而英式英语里支票拼作 cheque，账单用 bill。",
      usage: "check 是万能动词：check email（查邮件）、check the time（看时间）、check the weather（查天气）。考试时老师常说 'Check your work!'（检查你的作业！）",
      visual: "想象一个超级严格的老奶奶戴着巨大的放大镜，把你的试卷放大了100倍，每个字都要翻过来看一遍，连标点符号都不放过，旁边还有一只警犬在帮忙嗅错别字！",
      confuse: "check vs. cheek（脸颊）：check 是检查，cheek 是脸蛋。别把'检查'写成'脸蛋'了！另外 check 和 chalk（粉笔）也容易混，一个是检查，一个是老师手里的武器。",
      rhyme: "check check 仔细查，邮件作业都不怕；考试之前 check 一遍，粗心错误全跑光！",
      scene: "考试场景：考试前要 go over（复习）功课，考完要 check（检查）答案，然后 look forward to（期盼）放假！相关词：email, plan。"
    },
    {
      word: "email",
      phonetic: "/ˈiːmeɪl/",
      pos: "n.",
      posClass: "n",
      meaning: "电子邮件",
      root: {
        parts: [
          { text: "e-", type: "prefix", label: "electronic 电子的" },
          { text: "mail", type: "root", label: "邮件" }
        ],
        explain: "e-（electronic 电子的）+ mail（邮件）= 电子邮件。1971年，工程师 Ray Tomlinson 发出了世界上第一封电子邮件，他选择了 @ 符号来分隔用户名和主机名，从此 @ 成了电子邮件的标志。"
      },
      memory: "e-mail = electronic mail，电子邮件。记住 e- 代表电子的：e-book（电子书）、e-commerce（电子商务）、e-sports（电子竞技）。",
      family: ["mail（邮件）", "mailbox（邮箱）", "e-book（电子书）", "e-card（电子贺卡）"],
      synonyms: ["message（消息）", "letter（信件）"],
      antonyms: [],
      sentences: [
        { en: "I got an email from my pen pal in England.", zh: "我收到了一封来自英国笔友的电子邮件。" },
        { en: "Can you send me an email about the holiday plan?", zh: "你能发一封关于假期计划的电子邮件给我吗？" }
      ],
      fun: "@ 这个符号在不同语言里有超萌的名字：德语叫'蜘蛛猴'（Klammeraffe），意大利语叫'小蜗牛'（chiocciola），韩语叫'骨头蜗牛'。只有中文和英语比较实在，叫'at'。",
      usage: "email 既是名词也是动词。send an email = 发邮件；email sb. = 给某人发邮件。注意不说 'send an email to sb.'（虽然也对，但口语更常说 email sb. 直接做动词）。",
      visual: "想象一封巨大的信封长了翅膀，嗖的一声从你的电脑屏幕里飞出去，穿过云层、越过大海，一秒钟就钻进了地球另一端朋友的电脑里，信封上还骄傲地戴着一顶 @ 帽子！",
      confuse: "email vs. mail：email 是电子邮件（秒达），mail 是传统邮件（可能要好几天）。注意 email 可以不加连字符直接写，不用写成 e-mail。",
      rhyme: "e 是电子 mail 是信，合在一起飞得快；写封 email 问声好，地球两端一秒到！",
      scene: "假期联络场景：先 check（检查）email（邮件），看看朋友发来的 holiday（假期）plan（计划），然后 look forward to（期盼）一起 travel（旅行）！"
    },
    {
      word: "travel",
      phonetic: "/ˈtrævl/",
      pos: "n.",
      posClass: "n",
      meaning: "旅行",
      root: {
        parts: [],
        explain: "来自古法语 travail（辛苦劳动），而 travail 来自拉丁语 tripalium——一种三脚刑具！在古代，旅行 = 受苦受罪，因为路途遥远又危险。如今旅行变成了享受，但这个词记录了古人的辛酸。"
      },
      memory: "travel 里有 'avel'，联想'啊，玩了'——travel 就是出去玩！或者记住：tra（踏）+ vel（路）= 踏上旅途。",
      family: ["traveller/traveler（旅行者）", "travelling/traveling（旅行的）", "travel agency（旅行社）"],
      synonyms: ["journey（旅程）", "trip（短途旅行）", "tour（旅游）"],
      antonyms: ["stay（留下）"],
      sentences: [
        { en: "I want to travel around China during the summer holiday.", zh: "我想在暑假期间环游中国。" },
        { en: "Travel is a good way to learn about different cultures.", zh: "旅行是了解不同文化的好方式。" }
      ],
      fun: "travel、trip、journey、tour 有什么区别？travel 是泛指'旅行'这个活动；trip 强调短途往返；journey 强调长途过程；tour 是到多个地方的游览。所以环球旅行用 travel，周末出游用 trip，西天取经用 journey，跟团游用 tour！",
      usage: "travel 做不可数名词时泛指旅行（Travel broadens the mind. 旅行开阔视野）。做可数名词的复数 travels 指多次旅行经历。",
      visual: "想象你背着一个比人还大的背包，背包上插满了各国小旗子，脚踩一双会飞的运动鞋，从长城一步跨到埃菲尔铁塔，再一步蹦到自由女神像头上自拍！",
      confuse: "travel vs. trip vs. journey：travel 是泛指旅行活动，trip 是短途往返（a trip to the zoo），journey 是强调路途过程。注意 travel 不要拼成 travle！双写 l：travelling。",
      rhyme: "travel travel 去旅行，背上书包就出行；看看 culture 学文化，abroad 世界任我行！",
      scene: "假期出行场景：制定 plan（计划），去 abroad（国外）travel（旅行），体验不同 culture（文化），顺便 do some sightseeing（观光），多精彩！"
    },
    {
      word: "plan",
      phonetic: "/plæn/",
      pos: "n.",
      posClass: "n",
      meaning: "计划",
      root: {
        parts: [],
        explain: "来自法语 plan（平面图），最初指建筑图纸。拉丁语 planum = 平面。做计划就像画图纸——先在纸上铺开(plan out)，再按图施工。同源词：plane（飞机/平面）、plain（平原）、planet（行星=平面上移动的星星）。"
      },
      memory: "plan = '扑蓝'——计划像一张蓝图(blueprint)展开在你面前！",
      family: ["plan（v. 计划）", "planning（n. 规划）", "planner（n. 计划者/记事本）", "planned（adj. 有计划的）"],
      synonyms: ["scheme（方案）", "arrangement（安排）", "design（设计）"],
      antonyms: [],
      sentences: [
        { en: "What's your plan for the weekend?", zh: "你周末有什么计划？" },
        { en: "We need to make a plan for the school trip.", zh: "我们需要为学校旅行制定一个计划。" }
      ],
      fun: "英语有句话：'If you fail to plan, you plan to fail.'（如果你没有计划，你就是在计划失败。）这句话经常被老师挂在嘴边。Plan B 指的是备选方案——A 计划失败了就用 B 计划！",
      usage: "plan to do sth. = 计划做某事。make a plan = 制定计划。plan 既是名词也是动词，用法很灵活。",
      visual: "想象一个小学生拿着一张超级长的卷轴地图，从教室一直铺到操场外面，上面画满了假期每一天的安排：周一钓鱼、周二露营、周三观光……计划表比人还长！",
      confuse: "plan vs. plain vs. plane：plan 是计划，plain 是平原/朴素的，plane 是飞机/平面。三个词长得像，意思完全不同！记住：plan 有计划，plane 能飞天，plain 是平原。",
      rhyme: "做事之前先 plan plan，holiday 安排提前算；plan to do 加动原，考试碰到不犯难！",
      scene: "假期规划场景：先写 email（邮件）讨论 plan（计划），决定是 go camping（露营）还是 go fishing（钓鱼），或者去 abroad（国外）travel（旅行），大家都 look forward to（期盼）假期！"
    },
    {
      word: "holiday",
      phonetic: "/ˈhɒlədeɪ/",
      pos: "n.",
      posClass: "n",
      meaning: "假日；假期",
      root: {
        parts: [
          { text: "holi-", type: "root", label: "holy 神圣的" },
          { text: "-day", type: "root", label: "日子" }
        ],
        explain: "holy（神圣的）+ day（日子）= 神圣的日子 = 假日！古代的假日都是宗教节日，人们不工作去教堂礼拜。后来 holy day 连在一起念快了就变成了 holiday。"
      },
      memory: "holiday = holy + day = 神圣的日子！假期当然是最神圣的日子啦——每个学生都这么觉得！",
      family: ["holidays（假期，常用复数）", "on holiday（在度假）", "holiday maker（度假者）"],
      synonyms: ["vacation（假期，美式）", "break（休息/假期）", "day off（休息日）"],
      antonyms: ["workday（工作日）", "school day（上学日）"],
      sentences: [
        { en: "The summer holiday is coming soon.", zh: "暑假快要到了。" },
        { en: "Where are you going on holiday?", zh: "你假期打算去哪里？" }
      ],
      fun: "英式英语用 holiday，美式英语用 vacation。但特定节日都叫 holiday：Christmas holiday, national holiday。bank holiday 是英国独有的说法，指公共假期——因为银行放假了，大家也就放假了。",
      usage: "on holiday = 在度假（英式）。on vacation = 在度假（美式）。have a holiday = 放假。注意：holiday 在英式英语中可以等于美式的 vacation。",
      visual: "想象教室的日历上，holiday 那天的格子突然爆炸了，里面蹦出烟花、气球和糖果，全班同学都从座位上弹起来欢呼，书包自己飞到角落里，课本委屈地哭了！",
      confuse: "holiday vs. vacation：英式英语用 holiday，美式英语用 vacation，意思一样。注意 holiday 不要拼成 holliday（只有一个 l）。另外 holiday 和 holy day 长得像因为它们本就是同一个词！",
      rhyme: "holy day 变 holiday，神圣日子放大假；plan 一个好计划，travel abroad 笑哈哈！",
      scene: "假期活动场景：holiday（假期）到了，赶紧制定 plan（计划）！可以 have a picnic（野餐）、go camping（露营）、go sightseeing（观光）、go fishing（钓鱼），或者去 abroad（国外）旅行！"
    },
    {
      word: "forward",
      phonetic: "/ˈfɔːwəd/",
      pos: "adv.",
      posClass: "adv",
      meaning: "向前",
      root: {
        parts: [
          { text: "fore-", type: "prefix", label: "前面" },
          { text: "-ward", type: "suffix", label: "朝向" }
        ],
        explain: "fore（前面）+ -ward（朝着……方向）= 朝前面的方向 = 向前。-ward 是表示方向的后缀：backward（向后）、upward（向上）、downward（向下）、inward（向内）。"
      },
      memory: "forward = 'for + ward'——为了(for)保护(ward)目标，必须向前冲！",
      family: ["forward（adj. 前面的）", "forwards（adv. 向前）", "fast-forward（快进）", "straightforward（直截了当的）"],
      synonyms: ["ahead（向前）", "onward（向前）"],
      antonyms: ["backward（向后）", "back（向后）"],
      sentences: [
        { en: "Take a step forward, please.", zh: "请向前走一步。" },
        { en: "I look forward to the holiday.", zh: "我期盼假期的到来。" }
      ],
      fun: "-ward 家族很有趣：forward（向前）、backward（向后）、upward（向上）、downward（向下）、inward（向内）、outward（向外）、afterward（之后）。记住 -ward = 朝某个方向，就能猜出一大堆词的意思！",
      usage: "look forward to 是重点短语，to 后面接名词或动名词（doing），不接动词原形！I look forward to seeing you.（不是 to see）",
      visual: "想象一个勇敢的小战士，头上绑着写着'forward'的头带，大喊一声冲向前方，身后是 backward、upward、downward 几个兄弟在不同方向跑，场面特别混乱又搞笑！",
      confuse: "forward vs. foreword：forward 是向前（方向），foreword 是前言（书的开头部分）。两个发音很像但拼写和意思完全不同！记住：forward 有 ward（方向），foreword 有 word（文字）。",
      rhyme: "forward 向前不回头，look forward to 盼个够；to 后面跟 doing，语法考点要记牢！",
      scene: "方向与期盼场景：向 forward（前方）走去，look forward to（期盼）holiday（假期），plan（计划）一场 travel（旅行），take a walk（散步）在美丽的风景中！"
    },
    {
      word: "look forward to",
      phonetic: "/lʊk ˈfɔːwəd tuː/",
      pos: "v.",
      posClass: "v",
      meaning: "期盼",
      root: {
        parts: [
          { text: "look", type: "root", label: "看" },
          { text: "forward", type: "root", label: "向前" },
          { text: "to", type: "root", label: "朝向" }
        ],
        explain: "look（看）+ forward（向前）+ to（朝向）= 向前看向某件事 = 期盼。想象你站在时间线上，向前看着未来的美好事情，就是 look forward to 的画面感！"
      },
      memory: "look forward to = 向前看——眼睛往前看，就是期盼未来的好事！注意这里的 to 是介词，后面要接名词或 -ing 形式。",
      family: ["look back on（回顾）", "look up to（尊敬）", "look down on（看不起）"],
      synonyms: ["expect（期待）", "anticipate（期盼）", "long for（渴望）"],
      antonyms: ["dread（害怕/担忧）"],
      sentences: [
        { en: "I'm looking forward to the summer holiday.", zh: "我正期盼着暑假的到来。" },
        { en: "We look forward to hearing from you.", zh: "我们期待收到你的回复。" }
      ],
      fun: "look forward to 是英语邮件里的'万能结尾'。写正式邮件时，结尾几乎都会写：'I look forward to hearing from you.'（期待您的回复。）学会这个短语，写英语邮件就不愁了！",
      usage: "最重要的考点：to 后面接动名词（-ing），不接动词原形！look forward to doing sth.（正确）vs. look forward to do sth.（错误）。这是考试的超高频考点！",
      visual: "想象你站在时间隧道里，脖子伸得像长颈鹿一样长，眼睛瞪得像铜铃，拼命往前看——前方闪闪发光的就是暑假！你口水都流下来了，这就是 look forward to 的感觉！",
      confuse: "look forward to vs. look forward：look forward to 后面必须接名词或 doing（介词 to），而不是动词原形。很多同学错写成 look forward to do，记住：这个 to 是介词不是不定式！",
      rhyme: "look forward to 向前看，期盼好事在眼前；to 是介词接 doing，千万别把 do 来填！",
      scene: "期盼假期场景：同学们都 look forward to（期盼）holiday（假期），plan（计划）着去 travel（旅行），有人想 go camping（露营），有人想 go sightseeing（观光），大家发 email（邮件）讨论计划！"
    },
    {
      word: "picnic",
      phonetic: "/ˈpɪknɪk/",
      pos: "n.",
      posClass: "n",
      meaning: "野餐",
      root: {
        parts: [],
        explain: "来自法语 pique-nique。pique = 捡起/挑选，nique = 小东西。原义是'每人带一点小东西来聚餐'，即 AA 制聚餐。17世纪从法国传入英国后，逐渐变成了户外聚餐的意思。"
      },
      memory: "picnic = pick（挑选）+ nic（nice 好吃的）——挑选好吃的食物去户外吃！",
      family: ["picnic basket（野餐篮）", "picnic blanket（野餐毯）", "have a picnic（去野餐）"],
      synonyms: ["outing（郊游）", "cookout（户外烧烤聚餐）"],
      antonyms: [],
      sentences: [
        { en: "Let's have a picnic in the park this Sunday.", zh: "这个星期天我们去公园野餐吧。" },
        { en: "Mum is preparing food for the picnic.", zh: "妈妈正在为野餐准备食物。" }
      ],
      fun: "英语里说 'It's no picnic' 意思是'这可不轻松'——既然野餐代表轻松愉快，'不是野餐'就表示困难重重。比如：Learning English is no picnic!（学英语可不容易！）",
      usage: "have a picnic = go for a picnic = go on a picnic = 去野餐。注意 picnic 的现在分词要双写 k：picnicking。",
      visual: "想象一群蚂蚁组成了一支军队，扛着比它们大一百倍的三明治和西瓜，浩浩荡荡地爬上你的野餐毯。你刚想吃一口面包，发现面包已经被蚂蚁插上了小旗子，宣布占领了！",
      confuse: "picnic vs. panic：picnic 是野餐（开心的事），panic 是恐慌（害怕的事）。一字之差，天壤之别！野餐时看到蜜蜂，picnic 就变成 panic 了！注意 picnicking 要双写 k。",
      rhyme: "picnic picnic 去野餐，公园草地铺毯毯；三明治和果汁水，开开心心一整天！",
      scene: "户外活动场景：holiday（假期）到了，plan（计划）去公园 have a picnic（野餐），顺便 take a walk（散步），还可以 go cycling（骑车），在草地上 camp（扎营）过夜！"
    },
    {
      word: "walk",
      phonetic: "/wɔːk/",
      pos: "n.",
      posClass: "n",
      meaning: "走；步行",
      root: {
        parts: [],
        explain: "古英语 wealcan，原义竟然是'滚动、翻滚'！从'翻滚'→'来回移动'→'行走'，意思逐渐变化。l 不发音，和 talk（说话）一样——walk 和 talk 这对好朋友都有沉默的 l。"
      },
      memory: "walk 和 talk 是一对好兄弟：边走(walk)边聊(talk)！两个词的 l 都不发音：/wɔːk/ 和 /tɔːk/。",
      family: ["walk（v. 走路）", "walker（步行者）", "walking（步行/散步）", "walkway（步行道）", "sidewalk（人行道）"],
      synonyms: ["stroll（漫步）", "hike（远足）", "march（行进）"],
      antonyms: ["run（跑）", "drive（开车）"],
      sentences: [
        { en: "I usually walk to school.", zh: "我通常走路上学。" },
        { en: "Shall we go for a walk after dinner?", zh: "晚饭后我们去散步好吗？" }
      ],
      fun: "walk of life = 行业/职业（人生的'行走路线'）。people from all walks of life = 各行各业的人。moonwalk = 太空步，迈克尔·杰克逊的标志性舞步，看起来像在月球上走路！",
      usage: "walk 既是名词也是动词。go for a walk / take a walk = 散步。walk the dog = 遛狗。",
      visual: "想象一个人悠闲地在公园里走路，突然他的影子活了过来，跟他比赛谁走得慢！两人越走越慢，最后慢到蜗牛都超过了他们，蜗牛回头说：'你们也太 walk 了吧！'",
      confuse: "walk vs. work：walk /wɔːk/ 是走路，work /wɜːk/ 是工作。发音很像但元音不同！walk 的 l 不发音，千万别读成 /wɔːlk/。另外 walk 和 woke（醒来）也别搞混。",
      rhyme: "walk walk 去散步，l 不发音要记住；和 talk 是好朋友，边走边聊乐悠悠！",
      scene: "饭后散步场景：晚饭后 take a walk（散步），在公园里 walk（步行），看到别人在 cycling（骑车）、fishing（钓鱼），还有人在 camp（营地）旁 have a picnic（野餐）。"
    },
    {
      word: "take a walk",
      phonetic: "/teɪk ə wɔːk/",
      pos: "v.",
      posClass: "v",
      meaning: "散步",
      root: {
        parts: [
          { text: "take", type: "root", label: "进行/做" },
          { text: "a walk", type: "root", label: "一次步行" }
        ],
        explain: "take 在这里不是'拿'，而是'进行'的意思。take + a + 动作名词 是英语里非常常见的结构：take a walk（散步）、take a look（看一看）、take a rest（休息一下）、take a shower（洗澡）。"
      },
      memory: "take a walk = 'take'（带上）你自己去 walk（走走）——把自己带出去溜达溜达！",
      family: ["take a look（看一看）", "take a rest（休息）", "take a shower（洗澡）", "take a photo（拍照）", "take a break（休息一下）"],
      synonyms: ["go for a walk（去散步）", "have a walk（散步）", "stroll（漫步）"],
      antonyms: [],
      sentences: [
        { en: "Let's take a walk in the park.", zh: "我们去公园散散步吧。" },
        { en: "My grandparents take a walk every evening.", zh: "我的爷爷奶奶每天晚上都去散步。" }
      ],
      fun: "take a walk 和 go for a walk 意思一样，但语气稍有不同。take a walk 更随意，go for a walk 更有目的性。不过在日常交流中完全可以互换使用。",
      usage: "'take a + 名词' 结构非常好用：take a bath（洗澡）、take a nap（小睡）、take a seat（请坐）、take a chance（冒险一试）。掌握这个结构可以表达很多意思！",
      visual: "想象爷爷奶奶手牵手在夕阳下散步，身后跟着一条金毛狗和三只小猫，旁边的花朵都弯腰给他们让路，天上的云彩变成了一双大脚丫在天空中跟着一起走！",
      confuse: "take a walk vs. take a talk：walk 是散步，talk 是谈话。不过我们通常不说 take a talk，而是说 have a talk。take a walk 是固定搭配，别和其他搭配搞混了。",
      rhyme: "take a walk 去溜达，公园小路鲜花开；爷爷奶奶手拉手，傍晚散步好自在！",
      scene: "休闲活动场景：holiday（假期）时光，先 take a walk（散步），再 have a picnic（野餐），下午 go cycling（骑车），晚上计划明天 go camping（露营）或 go fishing（钓鱼）！"
    },
    {
      word: "go over",
      phonetic: "/ɡəʊ ˈəʊvə/",
      pos: "v.",
      posClass: "v",
      meaning: "复习",
      root: {
        parts: [
          { text: "go", type: "root", label: "走/进行" },
          { text: "over", type: "root", label: "翻过/再一次" }
        ],
        explain: "go（走）+ over（再一次/遍）= 再走一遍 = 复习。想象你沿着一条路走过去，然后又从头走一遍——这就是复习的过程：把学过的内容再过一遍。"
      },
      memory: "go over = 'go'（走）'over'（一遍又一遍）——把知识走一遍又一遍就是复习！",
      family: ["go through（经历/仔细检查）", "go ahead（前进/开始吧）", "go on（继续）"],
      synonyms: ["review（复习）", "revise（复习，英式）"],
      antonyms: [],
      sentences: [
        { en: "I need to go over my lessons before the exam.", zh: "考试前我需要复习功课。" },
        { en: "Let's go over the new words together.", zh: "我们一起复习新单词吧。" }
      ],
      fun: "go over 除了'复习'还有'仔细检查'的意思。老师批改作业就是 go over students' homework。而 go over well 表示'受到好评'——你的表演 went over well = 表演很成功！",
      usage: "go over = 复习/检查。区分：go over（复习）、go through（经历/仔细看）、go on（继续）。考试前说 'I need to go over my notes'（我要复习笔记）。",
      visual: "想象你的课本变成了一条跑道，你穿着运动鞋在上面跑了一圈又一圈，每跑一圈知识就往脑子里多塞一点。跑到第十圈的时候，脑袋已经鼓得像气球一样大了！",
      confuse: "go over vs. go through vs. go on：go over 是复习/检查，go through 是经历/仔细审查，go on 是继续。三个都是 go 开头但意思差别很大！考试常考 go over = review（复习）。",
      rhyme: "go over 复习走一遍，考试之前翻一翻；单词课文都过关，轻轻松松拿高分！",
      scene: "学习场景：考试前要 go over（复习）功课，check（检查）笔记，发 email（邮件）问同学题目，然后 look forward to（期盼）考完后的 holiday（假期）！"
    },
    {
      word: "culture",
      phonetic: "/ˈkʌltʃə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "文化",
      root: {
        parts: [{ text: "cult-", type: "root", label: "拉丁语 colere = 耕种/培育" }],
        explain: "来自拉丁语 cultura（耕种）。最初 culture 就是'种地'的意思！后来引申为'培育精神'→'文化'。agriculture（农业）= agri（田地）+ culture（耕种）。种地种出了文化，多么诗意的词源！"
      },
      memory: "culture = cult（培养）+ ure（名词后缀）——文化就是人类长期培养出来的精神成果！",
      family: ["cultural（文化的）", "cultivate（培养/耕种）", "agriculture（农业）", "multicultural（多元文化的）"],
      synonyms: ["civilization（文明）", "heritage（遗产）"],
      antonyms: [],
      sentences: [
        { en: "Chinese culture has a long history.", zh: "中国文化有着悠久的历史。" },
        { en: "Learning a language helps you understand its culture.", zh: "学习一门语言有助于你了解它的文化。" }
      ],
      fun: "culture shock（文化冲击）是指到了一个新的文化环境时感到不适应。比如中国学生到英国可能会惊讶：英国人竟然在薯条上浇醋！而英国人到中国可能会震惊：中国人竟然喝热水！",
      usage: "culture 是不可数名词，表示整体'文化'；但表示不同的文化类型时可用复数 cultures：different cultures（不同文化）。",
      visual: "想象一棵巨大的树，树根是古代的甲骨文，树干是万里长城，树枝上挂满了京剧脸谱、饺子、灯笼和毛笔字，树顶上还有一条龙在盘旋——这棵树就叫 culture！",
      confuse: "culture vs. vulture：culture /ˈkʌltʃə/ 是文化，vulture /ˈvʌltʃə/ 是秃鹫。一个字母之差，一个高雅一个……吃腐肉。记住：c 开头的 culture 是 cultivate（培养）出来的好东西。",
      rhyme: "culture 文化博大精，travel abroad 去体验；中国 culture 五千年，世界闻名传得远！",
      scene: "旅行学习场景：去 abroad（国外）travel（旅行），体验不同 culture（文化），do some sightseeing（观光），了解当地风俗。旅行是学习 culture 的最好方式！"
    },
    {
      word: "cycling",
      phonetic: "/ˈsaɪklɪŋ/",
      pos: "n.",
      posClass: "n",
      meaning: "骑自行车",
      root: {
        parts: [
          { text: "cycl-", type: "root", label: "希腊语 kyklos = 圆/轮" },
          { text: "-ing", type: "suffix", label: "正在做/……活动" }
        ],
        explain: "cycle（圆圈/循环）+ -ing = 骑自行车。自行车叫 bicycle = bi（两个）+ cycle（轮子）= 两个轮子的东西。同根词：tricycle（三轮车）= tri（三）+ cycle；recycle（回收）= re（再）+ cycle（循环）。"
      },
      memory: "cycling = cycle（自行车）+ ing——骑自行车的活动！cycle 的核心含义是'圆'，自行车轮子就是圆的。",
      family: ["cycle（自行车/循环）", "bicycle（自行车）", "cyclist（骑自行车的人）", "recycle（回收利用）"],
      synonyms: ["biking（骑车）", "riding（骑行）"],
      antonyms: [],
      sentences: [
        { en: "Cycling is good exercise.", zh: "骑自行车是很好的运动。" },
        { en: "I go cycling with my friends on weekends.", zh: "周末我和朋友们一起骑自行车。" }
      ],
      fun: "中国被称为'自行车王国'（Kingdom of Bicycles）。而现在共享单车（shared bikes）让中国再次成为世界骑行大国。环法自行车赛（Tour de France）是世界上最著名的自行车比赛，全程约3500公里！",
      usage: "go cycling = 去骑自行车。cycling 是不可数名词。注意：ride a bike = 骑自行车（具体动作），cycling = 骑自行车这项活动/运动。",
      visual: "想象一辆自行车的两个轮子变成了甜甜圈，你骑着甜甜圈自行车飞速前进，身后留下一道巧克力酱的痕迹，路过的小狗都追着你跑想舔甜甜圈轮子！",
      confuse: "cycling vs. recycling：cycling 是骑自行车，recycling 是回收利用。加了 re-（再次）意思就完全不同了。另外 cycling 和 circling（盘旋）也别搞混——虽然都和'圆'有关。",
      rhyme: "cycling cycling 骑单车，cycle 圆圈轮子转；go cycling 周末去，锻炼身体又好玩！",
      scene: "户外运动场景：周末 go cycling（骑车）去公园，到了之后 have a picnic（野餐），然后 take a walk（散步），也可以 go fishing（钓鱼）或 go camping（露营），多棒的 holiday（假期）！"
    },
    {
      word: "camp",
      phonetic: "/kæmp/",
      pos: "n.",
      posClass: "n",
      meaning: "营地；帐篷",
      root: {
        parts: [{ text: "camp-", type: "root", label: "拉丁语 campus = 平地/场地" }],
        explain: "来自拉丁语 campus（平地/场地）。古罗马军队在平地上扎营，campus 就变成了 camp（营地）。大学校园 campus 也来自同一个词——校园就是一块平地！champion（冠军）也同源：在 campus 上比赛的优胜者。"
      },
      memory: "camp 发音像'坎坷'——在坎坷的野外搭建营地！想象在山脚下的平地上搭帐篷。",
      family: ["camping（露营）", "campfire（篝火）", "campsite（营地）", "campus（校园）", "camper（露营者）"],
      synonyms: ["campsite（营地）", "encampment（营地）"],
      antonyms: [],
      sentences: [
        { en: "We set up camp near the river.", zh: "我们在河边搭建了营地。" },
        { en: "The summer camp starts next week.", zh: "夏令营下周开始。" }
      ],
      fun: "summer camp（夏令营）在欧美国家非常流行，几乎是每个孩子暑假的必备活动。哈利·波特的魁地奇世界杯就是在一个巨大的 camp 里举办的！",
      usage: "camp 做名词是营地，做动词是露营。go camping = 去露营。summer camp = 夏令营。",
      visual: "想象一顶帐篷突然变得超级大，大到能装下一整个班的同学，里面有篝火、烤棉花糖、还有一只闯进来的小熊在睡袋里呼呼大睡，大家吓得四处乱跑！",
      confuse: "camp vs. lamp：camp /kæmp/ 是营地，lamp /læmp/ 是灯。露营（camp）时一定需要灯（lamp）！另外 camp 和 champ（冠军的缩写）也容易混，不过冠军需要在营地里训练嘛。",
      rhyme: "camp camp 搭帐篷，河边山脚找块平；campfire 篝火暖洋洋，summer camp 最开心！",
      scene: "露营场景：找一块好的 camp（营地），go camping（去露营），白天 go cycling（骑车）和 go fishing（钓鱼），中午 have a picnic（野餐），晚上围着篝火 take a walk（散步）看星星！"
    },
    {
      word: "go camping",
      phonetic: "/ɡəʊ ˈkæmpɪŋ/",
      pos: "v.",
      posClass: "v",
      meaning: "去野营",
      root: {
        parts: [
          { text: "go", type: "root", label: "去" },
          { text: "camping", type: "root", label: "露营" }
        ],
        explain: "go + doing 是英语里表示'去做某项活动'的固定结构。go camping（去露营）、go shopping（去购物）、go swimming（去游泳）、go fishing（去钓鱼）——都是这个模式。"
      },
      memory: "go camping = go + camp + ing——去搭帐篷！记住 'go + doing' 结构：去做某项娱乐或户外活动。",
      family: ["go shopping（去购物）", "go swimming（去游泳）", "go hiking（去远足）", "go skiing（去滑雪）"],
      synonyms: ["camp out（在外露营）"],
      antonyms: [],
      sentences: [
        { en: "We're going camping in the mountains this weekend.", zh: "这个周末我们要去山里露营。" },
        { en: "Have you ever gone camping?", zh: "你去露营过吗？" }
      ],
      fun: "glamping = glamorous（迷人的）+ camping（露营）= 豪华露营。不用睡睡袋，住的是配了大床、空调甚至WiFi的帐篷。这是近年来很流行的旅行方式——既亲近自然又不用'吃苦'！",
      usage: "'go + v-ing' 是高频结构：go shopping, go swimming, go skating, go camping, go fishing, go sightseeing。注意 go 后面接的都是 -ing 形式！",
      visual: "想象一家人开着车去山里，结果帐篷怎么也搭不好，爸爸被帐篷布缠成了木乃伊，妈妈追着被风吹跑的睡袋满山跑，小狗叼着帐篷杆到处溜达，全家笑成一团！",
      confuse: "go camping vs. go to camp：go camping 是去露营（活动），go to camp 是去营地（地点）。一个强调做什么，一个强调去哪里。类似地，go shopping 是去购物，go to the shop 是去商店。",
      rhyme: "go camping 去露营，go 加 doing 要记清；fishing, cycling, sightseeing，户外活动全能行！",
      scene: "周末露营场景：plan（计划）好了就 go camping（去露营），在 camp（营地）旁边 go fishing（钓鱼），白天 go cycling（骑车）和 do some sightseeing（观光），真是完美的 holiday（假期）！"
    },
    {
      word: "sightseeing",
      phonetic: "/ˈsaɪtsiːɪŋ/",
      pos: "n.",
      posClass: "n",
      meaning: "观光；游览",
      root: {
        parts: [
          { text: "sight", type: "root", label: "风景/景象" },
          { text: "see", type: "root", label: "看" },
          { text: "-ing", type: "suffix", label: "活动" }
        ],
        explain: "sight（风景/景象）+ seeing（看）= 看风景 = 观光游览。sight 本身就有'景点'的意思：the sights of Beijing（北京的景点）。"
      },
      memory: "sightseeing = sight（景色）+ seeing（看）——看景色就是观光！这是一个'看看看'的词。",
      family: ["sight（视力/景象）", "sightseer（观光客）", "eyesight（视力）", "shortsighted（近视的）"],
      synonyms: ["touring（旅游）", "excursion（远足/短途旅行）"],
      antonyms: [],
      sentences: [
        { en: "We went sightseeing in Shanghai last summer.", zh: "去年夏天我们去上海观光了。" },
        { en: "There's a lot of sightseeing to do in Beijing.", zh: "北京有很多可以游览的地方。" }
      ],
      fun: "世界上最热门的 sightseeing 景点是哪里？据统计是法国巴黎的埃菲尔铁塔，每年接待约700万游客。中国的长城紧随其后。这些都是 must-see sights（必看景点）！",
      usage: "go sightseeing = do some sightseeing = 去观光。sightseeing 是不可数名词。sightseeing bus/tour = 观光巴士/观光旅游。",
      visual: "想象你的眼睛变成了两台照相机，走到哪拍到哪！眼睛咔嚓咔嚓不停响，长城、故宫、兵马俑统统拍进去，最后眼睛的存储满了，弹出一个'内存不足'的提示！",
      confuse: "sightseeing 是一个合成词，注意中间没有空格也没有连字符。不要写成 sight seeing 或 sight-seeing。另外 sightseeing（观光）和 site-seeing 不同——site 是网站/地点，sight 是风景。",
      rhyme: "sightseeing 去观光，sight 是景色 seeing 看；名胜古迹拍拍照，走遍天下心飞扬！",
      scene: "旅游观光场景：去 abroad（国外）travel（旅行），do some sightseeing（观光），了解当地 culture（文化），这些都是 holiday（假期）plan（计划）的一部分，大家都 look forward to（期盼）！"
    },
    {
      word: "do some sightseeing",
      phonetic: "/duː sʌm ˈsaɪtsiːɪŋ/",
      pos: "v.",
      posClass: "v",
      meaning: "去观光",
      root: {
        parts: [
          { text: "do", type: "root", label: "做/进行" },
          { text: "some", type: "root", label: "一些" },
          { text: "sightseeing", type: "root", label: "观光" }
        ],
        explain: "'do some + 活动名词' 是英语中表达'做某活动'的常见搭配：do some sightseeing（去观光）、do some shopping（去购物）、do some reading（阅读一下）、do some cleaning（打扫一下）。"
      },
      memory: "do some sightseeing = 做一些观光活动。记住 'do some + 名词' 结构：do some shopping, do some reading, do some exercise。",
      family: ["do some shopping（购物）", "do some reading（阅读）", "do some cleaning（打扫）", "do some cooking（做饭）"],
      synonyms: ["go sightseeing（去观光）", "tour around（四处游览）"],
      antonyms: [],
      sentences: [
        { en: "We plan to do some sightseeing during the holiday.", zh: "我们计划假期去观光。" },
        { en: "Let's do some sightseeing in the old town.", zh: "我们去古城观光吧。" }
      ],
      fun: "观光客 sightseer 和旅行者 traveller 有什么不同？sightseer 主要是看景点、拍照打卡，而 traveller 更注重深度体验当地文化。你更想当哪一种呢？",
      usage: "do some sightseeing 和 go sightseeing 意思相同，可以互换。'do some + 名词' 比直接用动词显得更随意自然：do some reading 比 read 语气更轻松。",
      visual: "想象一个游客举着一个超大的'DO SOME SIGHTSEEING'旗帜，像导游一样带领一群熊猫游览北京城，熊猫们戴着墨镜拿着冰棍，在天安门前排队自拍！",
      confuse: "do some sightseeing vs. go sightseeing：两个意思完全一样，都是去观光。do some 显得更随意，go 更直接。注意不说 do sightseeing（中间要加 some），但可以说 go sightseeing（不加 some）。",
      rhyme: "do some sightseeing 去逛逛，名胜古迹看一看；do some 加名词很常用，shopping reading 都能换！",
      scene: "假期观光场景：holiday（假期）里 plan（计划）去 travel（旅行），do some sightseeing（观光），体验 culture（文化），可以去 abroad（国外）也可以在国内，别忘了 check（查看）旅行攻略！"
    },
    {
      word: "fishing",
      phonetic: "/ˈfɪʃɪŋ/",
      pos: "n.",
      posClass: "n",
      meaning: "钓鱼",
      root: {
        parts: [
          { text: "fish", type: "root", label: "鱼" },
          { text: "-ing", type: "suffix", label: "活动" }
        ],
        explain: "fish（鱼）+ -ing = 钓鱼/捕鱼活动。fish 本身既是名词'鱼'也是动词'钓鱼'。有趣的是，fish 的复数通常还是 fish（一条鱼 a fish，两条鱼 two fish），但表示不同种类时用 fishes。"
      },
      memory: "fishing = fish + ing——和鱼玩耍的活动！fish 本身就能当动词'钓鱼'，加 -ing 变成活动名词。",
      family: ["fish（鱼/钓鱼）", "fisherman（渔夫）", "fishy（可疑的=像鱼一样滑溜）", "goldfish（金鱼）", "starfish（海星）"],
      synonyms: ["angling（垂钓）"],
      antonyms: [],
      sentences: [
        { en: "My dad enjoys fishing by the lake.", zh: "我爸爸喜欢在湖边钓鱼。" },
        { en: "Let's go fishing this weekend.", zh: "这周末我们去钓鱼吧。" }
      ],
      fun: "fishing 还有一个网络安全含义：phishing（网络钓鱼）用 ph 代替 f，指骗子在网上'钓'你的个人信息。所以不要点击陌生链接——小心被 phishing！另外，fishy 这个词表示'可疑的'——闻起来像鱼一样不对劲。",
      usage: "go fishing = 去钓鱼。fishing rod = 鱼竿。注意 fish 的复数：同种鱼用 fish（two fish），不同种类用 fishes（the fishes of the ocean）。",
      visual: "想象你坐在湖边钓鱼，等了三个小时终于有鱼上钩了，用力一拉——钓上来一只穿着西装的鱼，它掏出名片说'你好，我是鱼经理，请问你有预约吗？'",
      confuse: "fishing vs. wishing：fishing /ˈfɪʃɪŋ/ 是钓鱼，wishing /ˈwɪʃɪŋ/ 是许愿。钓鱼（fishing）的时候总是在许愿（wishing）能钓到大鱼！另外注意 fish 的复数还是 fish，不加 es。",
      rhyme: "fishing fishing 去钓鱼，湖边河边坐一坐；耐心等待鱼上钩，go fishing 快乐多！",
      scene: "湖边休闲场景：go fishing（钓鱼）后在湖边 have a picnic（野餐），然后 take a walk（散步），也可以 go cycling（骑车）绕湖一圈。这是 holiday（假期）最棒的 plan（计划）！"
    },
    {
      word: "go fishing",
      phonetic: "/ɡəʊ ˈfɪʃɪŋ/",
      pos: "v.",
      posClass: "v",
      meaning: "去钓鱼",
      root: {
        parts: [
          { text: "go", type: "root", label: "去" },
          { text: "fishing", type: "root", label: "钓鱼" }
        ],
        explain: "和 go camping、go shopping 一样，go fishing 是 'go + doing' 结构。这类短语专门用于休闲娱乐活动，暗含'出去享受某项活动'的意味。"
      },
      memory: "go fishing = 出去钓鱼！'go + v-ing' 万能结构，表示去做某项活动，多用于娱乐和户外活动。",
      family: ["go camping（去露营）", "go swimming（去游泳）", "go hiking（去远足）", "go shopping（去购物）"],
      synonyms: ["fish（钓鱼）", "angle（垂钓）"],
      antonyms: [],
      sentences: [
        { en: "We often go fishing in the river during summer.", zh: "夏天我们经常去河里钓鱼。" },
        { en: "Would you like to go fishing with me tomorrow?", zh: "明天你想和我一起去钓鱼吗？" }
      ],
      fun: "钓鱼是全世界最受欢迎的户外活动之一。有一句英语谚语：'Give a man a fish and you feed him for a day. Teach a man to fish and you feed him for a lifetime.'（授人以鱼不如授人以渔。）",
      usage: "go fishing 整体作为短语使用，中间不能插入其他词。可以在后面加地点：go fishing in the river/by the lake。",
      visual: "想象爸爸兴致勃勃地说'走，go fishing!'，结果到了河边发现忘带鱼竿了，只好用筷子绑根线钓鱼。等了一下午，钓上来一只拖鞋，爸爸举着拖鞋说'今晚吃拖鞋大餐！'",
      confuse: "go fishing vs. go to fish：go fishing 是固定搭配（去钓鱼这个活动），go to fish 虽然语法正确但不地道。记住 go + doing 是固定结构：go camping, go cycling, go sightseeing 都是这样。",
      rhyme: "go fishing 河边坐，go camping 帐篷搭；go cycling 骑单车，go 加 doing 都不差！",
      scene: "户外活动大集合：go fishing（钓鱼）、go camping（露营）、go cycling（骑车）、do some sightseeing（观光），还有 have a picnic（野餐）和 take a walk（散步），holiday（假期）活动真丰富！"
    },
    {
      word: "abroad",
      phonetic: "/əˈbrɔːd/",
      pos: "adv.",
      posClass: "adv",
      meaning: "在国外；到国外",
      root: {
        parts: [
          { text: "a-", type: "prefix", label: "在……/向……" },
          { text: "broad", type: "root", label: "宽广的" }
        ],
        explain: "a-（在/向）+ broad（宽广的）= 向宽广的地方 = 到国外。想象一下：走出国门，眼前是 broad（宽广的）世界——这就是 abroad！同根的 broad = 宽的，broadcast = broad（广泛地）+ cast（投射）= 广播。"
      },
      memory: "abroad = a + broad（宽广的）——外面的世界很宽广！也可以记：a(一个)broad(宽广)的世界在国门之外等着你。",
      family: ["broad（宽广的）", "broadcast（广播）", "broaden（拓宽）", "broadly（广泛地）"],
      synonyms: ["overseas（海外）", "in a foreign country（在外国）"],
      antonyms: ["at home（在国内）", "domestically（在国内地）"],
      sentences: [
        { en: "My uncle lives abroad.", zh: "我叔叔住在国外。" },
        { en: "Have you ever been abroad?", zh: "你出过国吗？" }
      ],
      fun: "study abroad（出国留学）是很多中国学生的梦想。全世界最受留学生欢迎的国家依次是：美国、英国、澳大利亚、加拿大。中国是全球最大的留学生输出国，每年有数十万学生 go abroad to study！",
      usage: "abroad 是副词，前面不加 to/in/at。go abroad（去国外）不说 go to abroad。live abroad = 住在国外。study abroad = 留学。",
      visual: "想象你站在中国地图的边缘，猛地一跳，跳过了国境线，落在了一个全是外国建筑和外国美食的奇妙世界里。你的护照变成了一双翅膀，带着你飞遍全球！",
      confuse: "abroad vs. aboard vs. board：abroad /əˈbrɔːd/ 是在国外，aboard /əˈbɔːd/ 是在船上/飞机上，board /bɔːd/ 是板子/登机。记住：abroad 有 road（路），出国要走很远的路；aboard 有 board（板），要踩上甲板才能上船。",
      rhyme: "abroad abroad 去国外，broad 世界真精彩；不加 to 也不加 in，go abroad 走出来！",
      scene: "出国旅行场景：plan（计划）去 abroad（国外）travel（旅行），体验不同 culture（文化），do some sightseeing（观光），给朋友发 email（邮件）分享旅途见闻。大家都 look forward to（期盼）这趟旅程！"
    }
  ]
};

if(typeof window!=='undefined'){window.UNIT3=UNIT3;}

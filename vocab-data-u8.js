// Unit 8: Story time (外研版七年级下册 Module 8)
const UNIT8 = {
  id: 8,
  title: "Story time",
  theme: "故事时间",
  color: "#f97316",
  words: [
    {
      word: "once",
      phonetic: "/wʌns/",
      pos: "adv.",
      posClass: "adv",
      meaning: "从前；曾经",
      root: { parts: [], explain: "来自古英语 ānes（一次），是 one（一）的副词形式。once = one + ce = 一次。'从前'就是'有那么一次'。同根词：one（一）、only（唯一的）。" },
      memory: "once = one（一）的变体——曾经有'一'次。once upon a time = 从前从前——这是所有童话故事的开场白！",
      family: ["one（一）", "only（唯一的）", "alone（独自的）"],
      synonyms: ["formerly（从前）", "previously（以前）"],
      antonyms: ["never（从不）"],
      sentences: [
        { en: "I once lived in a small village.", zh: "我曾经住在一个小村庄。" },
        { en: "Once upon a time, there was a king.", zh: "从前，有一位国王。" }
      ],
      fun: "once 有三个意思：1. 曾经（I once saw a bear）；2. 一次（once a week = 每周一次）；3. 一旦（Once you start, don't stop = 一旦开始就别停）。小词大用！",
      usage: "once upon a time = 从前（故事开头）。at once = 立刻。once more = 再一次。once in a while = 偶尔。"
    },
    {
      word: "upon",
      phonetic: "/əˈpɒn/",
      pos: "prep.",
      posClass: "prep",
      meaning: "在……上面",
      root: { parts: [], explain: "up（向上）+ on（在……上）= upon。upon 是 on 的加强版，更正式、更有文学味。在日常口语中通常用 on，upon 多出现在故事和正式文体中。" },
      memory: "upon = up + on = 在上面。upon 比 on 更有'仪式感'——once upon a time 如果说成 once on a time 就没那个童话味道了！",
      family: ["on（在……上）", "up（向上）"],
      synonyms: ["on（在……上）"],
      antonyms: ["beneath（在……下面）", "under（在……下面）"],
      sentences: [
        { en: "Once upon a time, there lived three bears.", zh: "从前，有三只熊。" },
        { en: "The cat jumped upon the table.", zh: "猫跳到了桌子上。" }
      ],
      fun: "upon 在现代英语中主要出现在固定短语里：once upon a time（从前）、upon my word（我发誓）、depend upon（取决于）。日常对话中几乎都用 on 代替 upon。",
      usage: "once upon a time = 从前。upon 比 on 更正式/文学化。口语中一般用 on 就够了。"
    },
    {
      word: "once upon a time",
      phonetic: "/wʌns əˈpɒn ə taɪm/",
      pos: "phr.",
      posClass: "adv",
      meaning: "从前",
      root: { parts: [], explain: "once（有一次）+ upon（在）+ a time（某个时候）= 在某个时候有一次 = 从前。这是英语童话故事最经典的开头，相当于中文的'很久很久以前'。" },
      memory: "once upon a time = 很久很久以前——每个英语童话都这样开头！就像中文故事说'很久很久以前'，听到这四个词就知道要讲故事了。",
      family: ["long long ago（很久很久以前）"],
      synonyms: ["long ago（很久以前）", "in the old days（在过去）"],
      antonyms: [],
      sentences: [
        { en: "Once upon a time, there was a beautiful girl called Goldilocks.", zh: "从前，有一个叫金凤花姑娘的漂亮女孩。" },
        { en: "Once upon a time, animals could talk.", zh: "从前，动物能说话。" }
      ],
      fun: "几乎所有文化都有类似的故事开头：中文'很久很久以前'、日语'むかしむかし'（昔昔）、法语'Il était une fois'、德语'Es war einmal'。全世界的人都爱用这种方式开始讲故事！",
      usage: "once upon a time 只用在故事开头。对应的结尾是：and they lived happily ever after（从此他们过上了幸福的生活）。"
    },
    {
      word: "bear",
      phonetic: "/beə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "熊",
      root: { parts: [], explain: "来自古英语 bera（棕色的动物）。在古代欧洲，人们不敢直呼熊的名字（认为会招来熊），所以用'棕色的那个'来代指——这就是 bear（棕色的）的由来。" },
      memory: "bear 有两个意思：1. 熊（名词）；2. 承受/生育（动词）。熊很强壮能承受(bear)很多重量，所以一个词两个意思！born 就是 bear 的过去分词。",
      family: ["polar bear（北极熊）", "teddy bear（泰迪熊）", "bearable（可承受的）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "There were three bears in the forest.", zh: "森林里有三只熊。" },
        { en: "Baby bear was the smallest.", zh: "小熊是最小的。" }
      ],
      fun: "teddy bear（泰迪熊）得名于美国总统 Theodore 'Teddy' Roosevelt——他在打猎时拒绝射杀一只被绑住的小熊，这个故事被画成漫画后，玩具商就制作了'泰迪熊'。",
      usage: "bear 做名词是'熊'，做动词是'承受/忍受'：I can't bear it!（我受不了！）。bear in mind = 记住。"
    },
    {
      word: "begin",
      phonetic: "/bɪˈɡɪn/",
      pos: "v.",
      posClass: "v",
      meaning: "开始",
      root: { parts: [], explain: "来自古英语 beginnan（开始）。过去式 began，过去分词 begun——三种形式元音依次变化：i→a→u，这叫元音交替(ablaut)，是日耳曼语的古老特征。" },
      memory: "begin 的变化规律：begin → began → begun，元音从 i 到 a 到 u，按字母表顺序变！记住：i-a-u，开始了！",
      family: ["beginner（初学者）", "beginning（开始）"],
      synonyms: ["start（开始）", "commence（开始，正式）"],
      antonyms: ["end（结束）", "finish（完成）", "stop（停止）"],
      sentences: [
        { en: "The story begins like this...", zh: "故事是这样开始的……" },
        { en: "Class began at eight o'clock.", zh: "八点钟开始上课。" }
      ],
      fun: "begin 和 start 有什么区别？大多数情况可以互换，但 begin 更正式。有些固定搭配只能用其中一个：start a car（发动汽车）不能说 begin a car；to begin with（首先）不能说 to start with。",
      usage: "begin to do / begin doing = 开始做某事。begin with = 以……开始。to begin with = 首先。beginner's luck = 新手的好运。"
    },
    {
      word: "decide",
      phonetic: "/dɪˈsaɪd/",
      pos: "v.",
      posClass: "v",
      meaning: "决定",
      root: { parts: [], explain: "来自拉丁语 decidere = de-（离开/去掉）+ caedere（切）= 切断其他选项 = 做出决定。做决定就是'砍掉'其他可能性，只留一个选择！" },
      memory: "decide = de（去掉）+ cide（切）——把其他选项都'砍掉'，只剩下一个，就是'决定'！类似的词：suicide（自杀=切断自己的生命）、scissors（剪刀=切东西的工具）。",
      family: ["decision（决定）", "decisive（果断的）", "undecided（未决定的）"],
      synonyms: ["determine（决定）", "choose（选择）", "make up one's mind（下定决心）"],
      antonyms: ["hesitate（犹豫）"],
      sentences: [
        { en: "She decided to go for a walk in the forest.", zh: "她决定去森林里散步。" },
        { en: "I can't decide which book to read.", zh: "我没法决定读哪本书。" }
      ],
      fun: "-cide 词根（切/杀）家族：decide（决定=切断选项）、suicide（自杀）、insecticide（杀虫剂）、homicide（谋杀）。所有带 -cide 的词都和'切断/杀死'有关！",
      usage: "decide to do sth. = 决定做某事。decide on sth. = 决定选择某物。make a decision = 做决定。"
    },
    {
      word: "basket",
      phonetic: "/ˈbɑːskɪt/",
      pos: "n.",
      posClass: "n",
      meaning: "篮；筐",
      root: { parts: [], explain: "来源不确定，可能来自拉丁语 bascauda（桶/盆）。basket 是一个很古老的词，因为篮子是人类最早使用的容器之一，早在陶器发明之前。" },
      memory: "basket 谐音'爸死给他'——不太吉利，换一个：basket = 'ba'（爸）+ 'sket'（skateboard滑板的缩写）——爸爸把滑板放在篮子里。或者直接记：basketball = basket + ball = 把球投进篮子！",
      family: ["basketball（篮球）", "wastebasket（废纸篓）"],
      synonyms: ["container（容器）", "hamper（带盖大篮子）"],
      antonyms: [],
      sentences: [
        { en: "She picked up the basket and went out.", zh: "她拿起篮子出去了。" },
        { en: "There were apples in the basket.", zh: "篮子里有苹果。" }
      ],
      fun: "basketball（篮球）= basket（篮子）+ ball（球）——把球投进篮子里！篮球是1891年由加拿大人 James Naismith 发明的，最初真的是用桃子篮当球框。",
      usage: "a basket of = 一篮……。put all your eggs in one basket = 把所有鸡蛋放在一个篮子里 = 孤注一掷。shopping basket = 购物篮。"
    },
    {
      word: "notice",
      phonetic: "/ˈnəʊtɪs/",
      pos: "v.",
      posClass: "v",
      meaning: "注意到",
      root: { parts: [], explain: "来自拉丁语 notitia（认识/了解），源自 notus（已知的）。notice = 让某事变得'已知'= 注意到。同根词：note（笔记/注意）、notion（概念）、notify（通知）。" },
      memory: "notice 里有 'note'（笔记/注意）——把看到的东西记(note)下来就是注意到(notice)了！notice 做名词还有'通知/公告'的意思。",
      family: ["noticeable（显眼的）", "notify（通知）", "note（注意/笔记）", "notion（概念）"],
      synonyms: ["observe（观察到）", "spot（发现）", "see（看到）"],
      antonyms: ["ignore（忽视）", "overlook（忽略）", "miss（错过）"],
      sentences: [
        { en: "She noticed a little house in the forest.", zh: "她注意到森林里有一座小房子。" },
        { en: "Did you notice anything strange?", zh: "你注意到什么奇怪的事了吗？" }
      ],
      fun: "notice 做名词时意思完全不同：a notice on the wall = 墙上的公告；give notice = 提前通知/辞职通知；until further notice = 直到另行通知。一个词跨越了'看'和'说'两个领域！",
      usage: "notice sb. doing sth. = 注意到某人正在做某事。take notice of = 注意。at short notice = 临时通知。"
    },
    {
      word: "all alone",
      phonetic: "/ɔːl əˈləʊn/",
      pos: "phr.",
      posClass: "adj",
      meaning: "独自一人的",
      root: { parts: [], explain: "all（完全）+ alone（独自的）= 完完全全独自一人。alone 来自 all + one = 全部只有一个人 = 独自。所以 all alone 其实是'全部全部只有一个人'——双重强调！" },
      memory: "alone = all + one = 全部只有一个人！all alone 更加强调——完完全全就一个人。alone 不一定是坏事（享受独处），但 lonely（孤独的）带有悲伤的感觉。",
      family: ["alone（独自的）", "lonely（孤独的）", "loneliness（孤独）"],
      synonyms: ["by oneself（独自）", "on one's own（独自）"],
      antonyms: ["together（一起）", "accompanied（有人陪伴的）"],
      sentences: [
        { en: "The little girl was all alone in the dark forest.", zh: "小女孩独自一人在黑暗的森林里。" },
        { en: "I was all alone at home.", zh: "我独自一人在家。" }
      ],
      fun: "alone 和 lonely 的区别：alone 是客观状态（一个人），lonely 是主观感受（孤独）。You can be alone without being lonely.（你可以独自一人但并不感到孤独。）也可以 feel lonely in a crowd（在人群中感到孤独）。",
      usage: "all alone = 完全独自一人（加强语气）。leave sb. alone = 别打扰某人。let alone = 更不用说。"
    },
    {
      word: "dark",
      phonetic: "/dɑːk/",
      pos: "adj.",
      posClass: "adj",
      meaning: "黑暗的",
      root: { parts: [], explain: "来自古英语 deorc（黑暗的/隐藏的）。dark 的'隐藏'含义很重要——黑暗中看不见东西，所以 dark 也引申为'秘密的/神秘的'：dark secret（黑暗秘密）。" },
      memory: "dark 和 park 押韵——天黑(dark)了不要一个人去公园(park)！dark 还可以形容颜色深：dark blue = 深蓝色。",
      family: ["darkness（黑暗）", "darken（变暗）", "darkly（黑暗地）"],
      synonyms: ["dim（昏暗的）", "gloomy（阴暗的）"],
      antonyms: ["bright（明亮的）", "light（光亮的）"],
      sentences: [
        { en: "It was very dark in the forest.", zh: "森林里非常黑暗。" },
        { en: "She has dark hair and big eyes.", zh: "她有一头黑发和大眼睛。" }
      ],
      fun: "Star Wars（星球大战）中有 the Dark Side（黑暗面）和 the Dark Lord（黑暗领主）。Dark Horse（黑马）= 出人意料的获胜者——这个用法来自赛马，不引人注意的马突然赢了！",
      usage: "in the dark = 在黑暗中 / 不知情。dark horse = 黑马。after dark = 天黑以后。dark + 颜色 = 深色（dark blue 深蓝）。"
    },
    {
      word: "pick",
      phonetic: "/pɪk/",
      pos: "v.",
      posClass: "v",
      meaning: "采；摘",
      root: { parts: [], explain: "来自古英语 pician（刺/戳），与法语 piquer（刺）同源。pick 的原义是用尖锐的东西'戳'——采摘水果就是从树上把果实'戳/摘'下来。" },
      memory: "pick 有很多意思：pick flowers（摘花）、pick up（捡起/接人）、pick a team（挑选队伍）。核心含义都是'选取/拿取'。",
      family: ["picker（采摘者）", "picky（挑剔的）", "toothpick（牙签）", "pickpocket（扒手）"],
      synonyms: ["gather（采集）", "collect（收集）", "choose（选择）"],
      antonyms: ["drop（放下）", "plant（种植）"],
      sentences: [
        { en: "She picked some flowers in the forest.", zh: "她在森林里摘了一些花。" },
        { en: "Let me pick a book for you.", zh: "让我给你挑一本书。" }
      ],
      fun: "pickpocket（扒手）= pick（拿取）+ pocket（口袋）= 从别人口袋里拿东西的人！toothpick（牙签）= tooth（牙）+ pick（戳）= 戳牙齿的小棍。",
      usage: "pick flowers = 摘花。pick up = 捡起/接人/学会。pick on sb. = 欺负某人。picky = 挑剔的。"
    },
    {
      word: "pick up",
      phonetic: "/pɪk ʌp/",
      pos: "v.",
      posClass: "v",
      meaning: "捡起；拿起",
      root: { parts: [], explain: "pick（拿取）+ up（向上）= 从地上往上拿 = 捡起。pick up 是英语中用法最多的短语动词之一，有十几种意思！" },
      memory: "pick up = pick（拿）+ up（上来）= 从下面拿上来 = 捡起。这个短语的意思特别多：捡起/接人/学会/好转——靠语境判断！",
      family: ["pickup（皮卡车/接人）"],
      synonyms: ["lift（举起）", "collect（收集）"],
      antonyms: ["put down（放下）", "drop（丢下）"],
      sentences: [
        { en: "She picked up the basket and hurried away.", zh: "她捡起篮子匆忙离开了。" },
        { en: "Can you pick up that pen for me?", zh: "你能帮我捡起那支笔吗？" }
      ],
      fun: "pick up 的意思多到离谱：1. 捡起；2. 接人（pick you up at school）；3. 学会（pick up English）；4. 好转（Business is picking up）；5. 接电话（pick up the phone）。同一个短语，五种不同含义！",
      usage: "pick up sth. / pick sth. up = 捡起某物。pick sb. up = 接某人。pick up a language = 学会一门语言。pick up speed = 加速。"
    },
    {
      word: "hurry",
      phonetic: "/ˈhʌri/",
      pos: "v.",
      posClass: "v",
      meaning: "赶快；急忙",
      root: { parts: [], explain: "可能来自中古英语 horien（急忙），与 hurricane（飓风）有关联——飓风来了当然要赶快跑！hurry 带有匆忙、紧迫的感觉。" },
      memory: "hurry 谐音'哈利'——哈利·波特(Harry)赶快(hurry)去上魔法课！Hurry up! 是最常用的催促语。",
      family: ["hurried（匆忙的）", "hurriedly（匆忙地）"],
      synonyms: ["rush（冲/赶）", "hasten（加快）"],
      antonyms: ["dawdle（磨蹭）", "linger（逗留）"],
      sentences: [
        { en: "Hurry up! We're going to be late!", zh: "快点！我们要迟到了！" },
        { en: "She hurried to school.", zh: "她匆忙赶去学校。" }
      ],
      fun: "Hurry up! 可能是学校里听到最多的英语短语——上课要迟到的时候同学们互相喊。但在英国，人们更礼貌地说 'Do you mind hurrying up a bit?'——即使着急也很客气。",
      usage: "hurry up = 快点。in a hurry = 匆忙地。no hurry = 不急。hurry to do sth. = 急忙做某事。"
    },
    {
      word: "without",
      phonetic: "/wɪˈðaʊt/",
      pos: "prep.",
      posClass: "prep",
      meaning: "没有；不带",
      root: { parts: [], explain: "with（和/带有）+ out（外面）= 在……之外 = 没有。with 和 without 是一对反义词：with = 带有，without = 不带。" },
      memory: "without = with + out = '带有'的'外面' = 没有。想象一个圈，with 在圈里（有），without 在圈外（没有）。简单！",
      family: ["with（有/和）", "within（在……之内）"],
      synonyms: ["lacking（缺少）"],
      antonyms: ["with（有/带有）"],
      sentences: [
        { en: "She went into the forest without telling her mother.", zh: "她没有告诉妈妈就进了森林。" },
        { en: "I can't live without music.", zh: "我不能没有音乐。" }
      ],
      fun: "without 后面接动词时要用 -ing 形式：without saying a word（一声不吭地）。英语谚语：Without health, life is not life.（没有健康，人生就不是人生。）",
      usage: "without + 名词/动名词。without doing sth. = 没有做某事。go without = 没有也凑合。without doubt = 毫无疑问。"
    },
    {
      word: "knock",
      phonetic: "/nɒk/",
      pos: "v.",
      posClass: "v",
      meaning: "敲",
      root: { parts: [], explain: "来自古英语 cnocian（敲击），这是一个拟声词——knock knock 就是敲门的声音！注意 k 不发音，这是英语中 kn- 组合的规律。" },
      memory: "knock 的 k 不发音！读 /nɒk/，和 'nock' 一样。kn- 开头的词 k 都不发音：know（知道）、knee（膝盖）、knife（刀）、knight（骑士）。这是一条重要规律！",
      family: ["knockout（击倒/极出色的人）"],
      synonyms: ["tap（轻敲）", "rap（急敲）", "bang（猛敲）"],
      antonyms: [],
      sentences: [
        { en: "Someone knocked on the door.", zh: "有人敲门了。" },
        { en: "Knock, knock! Who's there?", zh: "咚咚！谁在那儿？" }
      ],
      fun: "Knock knock jokes（敲门笑话）是英语中最经典的笑话形式：'Knock knock!' 'Who's there?' 'Lettuce.' 'Lettuce who?' 'Let us in!'（lettuce 谐音 let us）。",
      usage: "knock on/at the door = 敲门。knock out = 击倒/打昏。knock off = 下班/停止。knock it off! = 别闹了！"
    },
    {
      word: "door",
      phonetic: "/dɔː(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "门",
      root: { parts: [], explain: "来自古英语 duru（门），与拉丁语 foris（门）、希腊语 thyra（门）同源。这是印欧语系的古老词汇——几千年来人类都需要'门'！" },
      memory: "door 发音像'到'——到(door)了门(door)前就敲门！注意：door 的 oo 发 /ɔː/ 而不是 /uː/，和 floor 一样。",
      family: ["doorbell（门铃）", "doorway（门道）", "indoor（室内的）", "outdoor（室外的）", "next door（隔壁）"],
      synonyms: ["gate（大门）", "entrance（入口）"],
      antonyms: [],
      sentences: [
        { en: "Please close the door.", zh: "请关上门。" },
        { en: "Someone is knocking at the door.", zh: "有人在敲门。" }
      ],
      fun: "door 相关的习语非常多：open doors = 打开机会；behind closed doors = 秘密地；next door = 隔壁；show sb. the door = 请某人离开。opportunity knocks at the door = 机会来敲门。",
      usage: "at the door = 在门口。answer the door = 去开门。out of doors = 户外。door to door = 挨家挨户。"
    },
    {
      word: "enter",
      phonetic: "/ˈentə(r)/",
      pos: "v.",
      posClass: "v",
      meaning: "进入",
      root: { parts: [], explain: "来自拉丁语 intrare（进入），源自 intra（在内）。同根词：entrance（入口=进入的地方）、entry（进入/条目）。注意：enter 后面直接加宾语，不需要 into！" },
      memory: "enter 后面不要加 into！enter the room（对），enter into the room（错）。因为 enter 本身就包含了'进入'的意思，再加 into 就重复了。",
      family: ["entrance（入口）", "entry（进入/条目）", "enterprise（企业=敢于进入的事业）"],
      synonyms: ["go into（走进）", "come in（进来）"],
      antonyms: ["exit（退出）", "leave（离开）"],
      sentences: [
        { en: "She entered the house.", zh: "她进入了房子。" },
        { en: "Please enter your password.", zh: "请输入你的密码。" }
      ],
      fun: "键盘上的 Enter 键就是'进入/确认'的意思——按下去就'进入'下一步。enter 在电脑时代有了新含义：enter data（输入数据）、enter a password（输入密码）。",
      usage: "enter + 地点（不加 into）。enter a competition = 参加比赛。enter data = 输入数据。No Entry = 禁止入内。"
    },
    {
      word: "bowl",
      phonetic: "/bəʊl/",
      pos: "n.",
      posClass: "n",
      meaning: "碗",
      root: { parts: [], explain: "来自古英语 bolla（圆形容器），与 ball（球）同源——两者都是圆圆的东西！bowl 的原义是'圆形的东西'。bowl 还有'保龄球'的意思（bowling）。" },
      memory: "bowl 和 ball 同源——都是圆圆的！bowl（碗）是圆的，bowling（保龄球）的球也是圆的。一个词根，一个形状，两种东西。",
      family: ["bowling（保龄球）", "Super Bowl（超级碗）"],
      synonyms: ["dish（碟）", "plate（盘子）"],
      antonyms: [],
      sentences: [
        { en: "She ate all the food in the bowl.", zh: "她吃光了碗里所有的食物。" },
        { en: "There were three bowls on the table.", zh: "桌子上有三个碗。" }
      ],
      fun: "Super Bowl（超级碗）是美国最大的体育赛事——NFL（美国橄榄球联赛）的总决赛。为什么叫'碗'？因为最早的体育场是碗形的（bowl-shaped stadium）。",
      usage: "a bowl of = 一碗……。rice bowl = 饭碗（也比喻工作/生计）。bowling = 保龄球。"
    },
    {
      word: "hungry",
      phonetic: "/ˈhʌŋɡri/",
      pos: "adj.",
      posClass: "adj",
      meaning: "饥饿的",
      root: { parts: [], explain: "来自古英语 hungrig，源自 hunger（饥饿）+ -y。hunger 是人类最基本的感受之一，所以这个词在英语中非常古老。" },
      memory: "hungry 里有 'hung'——饿到'hung'（挂）在那里动不了了！或者记：hungry 谐音'汉格瑞'——汉堡(hamburg)来了(格瑞)，因为饿了想吃汉堡！",
      family: ["hunger（饥饿）", "hungrily（饥饿地）"],
      synonyms: ["starving（饿极了）", "famished（极其饥饿的）"],
      antonyms: ["full（饱的）", "satisfied（满足的）"],
      sentences: [
        { en: "I'm very hungry. Let's eat!", zh: "我很饿。我们吃饭吧！" },
        { en: "The hungry girl ate all the porridge.", zh: "饥饿的女孩吃光了所有的粥。" }
      ],
      fun: "I'm starving! 比 I'm hungry 语气强得多——starving 原意是'快饿死了'。Steve Jobs 的名言：Stay hungry, stay foolish.（求知若渴，虚心若愚。）——这里 hungry 是'渴望'的意思。",
      usage: "be hungry for = 渴望……（比喻用法）。go hungry = 挨饿。hungry 的比较级是 hungrier。"
    },
    {
      word: "finish",
      phonetic: "/ˈfɪnɪʃ/",
      pos: "v.",
      posClass: "v",
      meaning: "吃完；完成",
      root: { parts: [], explain: "来自拉丁语 finire（结束），源自 finis（终点/边界）。同根词：final（最终的）、finish（完成）、fine（罚款=结算/好的=完善的）、define（定义=划定边界）。" },
      memory: "finish 里有 'fin'（终点）——final（最终的）、finish（完成），都是关于'结束'的词。赛跑的终点线叫 finish line！",
      family: ["final（最终的）", "finally（终于）", "finite（有限的）", "infinite（无限的）"],
      synonyms: ["complete（完成）", "end（结束）", "accomplish（达成）"],
      antonyms: ["start（开始）", "begin（开始）"],
      sentences: [
        { en: "She finished all the food.", zh: "她吃完了所有的食物。" },
        { en: "Have you finished your homework?", zh: "你做完作业了吗？" }
      ],
      fun: "finish line = 终点线。photo finish = 需要用照片判定的接近终点（比赛太接近了！）。finish 和 final 来自同一个拉丁语词根 finis——全都指向'结束'。",
      usage: "finish doing sth. = 完成做某事（后接-ing，不接to do）。finish off = 完成/吃光。finish up = 结束。"
    },
    {
      word: "either",
      phonetic: "/ˈaɪðə(r)/",
      pos: "adv.",
      posClass: "adv",
      meaning: "也（不）",
      root: { parts: [], explain: "来自古英语 ǣghwæther（两者中的每一个），由 ā（总是）+ ge-（共同）+ hwæther（哪一个）构成。either 的核心含义是'两者中任一个'。" },
      memory: "too 用在肯定句末尾（I like it, too），either 用在否定句末尾（I don't like it, either）。口诀：'肯定 too，否定 either'！",
      family: ["neither（两者都不）"],
      synonyms: ["also not（也不）"],
      antonyms: ["too（也）", "also（也）"],
      sentences: [
        { en: "I don't like this story, either.", zh: "我也不喜欢这个故事。" },
        { en: "She can't swim, and I can't, either.", zh: "她不会游泳，我也不会。" }
      ],
      fun: "either 的发音有两种：英式 /ˈaɪðə/，美式 /ˈiːðər/，两种都对！有首有趣的老歌：'You say either and I say either'——就是拿这个发音差异开玩笑。",
      usage: "否定句 + either = 也不。either...or... = 要么……要么……。either 做形容词 = 两者中任一的（either side = 任一边）。"
    },
    {
      word: "piece",
      phonetic: "/piːs/",
      pos: "n.",
      posClass: "n",
      meaning: "碎片；一张/块/片",
      root: { parts: [], explain: "来自古法语 piece（一块/一件），可能源自凯尔特语。piece 是英语中最常用的量词之一：a piece of paper（一张纸）、a piece of cake（一块蛋糕）。" },
      memory: "piece 和 peace（和平）发音完全一样！a piece of cake = 一块蛋糕 = 小菜一碟（非常容易）。考试记住这个就是 a piece of cake！",
      family: ["masterpiece（杰作）", "timepiece（钟表）"],
      synonyms: ["bit（一点）", "fragment（碎片）", "slice（薄片）"],
      antonyms: ["whole（整体）"],
      sentences: [
        { en: "The chair was in pieces.", zh: "椅子碎成了几片。" },
        { en: "Can I have a piece of bread?", zh: "我能要一片面包吗？" }
      ],
      fun: "a piece of cake = 小菜一碟！这个习语来自美国，因为吃蛋糕是世界上最容易的事（谁不会吃蛋糕呢？）。masterpiece（杰作）= master（大师）+ piece（作品）= 大师之作。",
      usage: "a piece of + 不可数名词（a piece of paper/advice/news）。in pieces = 碎了。go to pieces = 崩溃。piece of cake = 小事一桩。"
    },
    {
      word: "rush",
      phonetic: "/rʌʃ/",
      pos: "v.",
      posClass: "v",
      meaning: "冲；奔",
      root: { parts: [], explain: "来自古法语 ruser（推/赶），模仿快速移动的声音。rush 就像'嗖'一样——带有速度感和紧迫感的词！" },
      memory: "rush 谐音'如实'——如实(rush)地说，我今天早上又冲(rush)去学校了！rush hour = 高峰时段（所有人都在'冲'）。",
      family: ["rush hour（高峰时段）"],
      synonyms: ["hurry（赶快）", "dash（猛冲）", "race（飞奔）"],
      antonyms: ["stroll（闲逛）", "dawdle（磨蹭）"],
      sentences: [
        { en: "She rushed out of the house.", zh: "她冲出了房子。" },
        { en: "Don't rush! Take your time.", zh: "别急！慢慢来。" }
      ],
      fun: "rush hour（高峰时段）——上下班时间所有人都在'冲'！gold rush（淘金热）——19世纪人们疯狂冲向加州挖金子。sugar rush（糖分高峰）——吃太多糖后的兴奋状态。",
      usage: "rush hour = 高峰时段。in a rush = 匆忙地。rush to do sth. = 急忙做某事。no rush = 不急。"
    },
    {
      word: "try",
      phonetic: "/traɪ/",
      pos: "v.",
      posClass: "v",
      meaning: "尝试",
      root: { parts: [], explain: "来自古法语 trier（挑选/审判），原义是在法庭上'审'一个案子，需要尝试各种证据。try = 尝试各种可能性。同根词：trial（审判/试验）。" },
      memory: "try 只有三个字母，但意义重大——不 try 怎么知道行不行呢？名言：If at first you don't succeed, try, try again!（如果第一次没成功，就一试再试！）",
      family: ["trial（试验/审判）", "trying（令人厌烦的/困难的）"],
      synonyms: ["attempt（尝试）", "have a go（试一试）"],
      antonyms: ["give up（放弃）", "quit（放弃）"],
      sentences: [
        { en: "She tried the three beds.", zh: "她试了试三张床。" },
        { en: "Try your best and never give up!", zh: "尽你所能，永不放弃！" }
      ],
      fun: "try on = 试穿衣服。try out = 试用/选拔。try one's best = 尽最大努力。Nice try! 可以是真的夸奖（好尝试！），也可以是讽刺（想得美！）——要看语境。",
      usage: "try to do sth. = 努力做某事。try doing sth. = 尝试做某事（看效果如何）。两者有区别！try on = 试穿。have a try = 试一试。"
    },
    {
      word: "destroy",
      phonetic: "/dɪˈstrɔɪ/",
      pos: "v.",
      posClass: "v",
      meaning: "毁坏",
      root: { parts: [], explain: "来自拉丁语 destruere = de-（去掉/下）+ struere（建造）= 拆掉建筑 = 摧毁。destroy 和 construct（建造）是反义词：construct = con（一起）+ struct（建）= 建设；destroy = de（拆）+ stroy（建）= 拆毁。" },
      memory: "destroy = de（反）+ stroy（建造）= 反向建造 = 摧毁！construct（建设）的反面就是 destroy（摧毁）。记住词根 struct = 建造，就能记住一大串词。",
      family: ["destruction（毁灭）", "destructive（破坏性的）", "destroyer（驱逐舰/破坏者）"],
      synonyms: ["ruin（毁坏）", "wreck（破坏）", "demolish（拆毁）"],
      antonyms: ["build（建造）", "construct（建设）", "create（创造）"],
      sentences: [
        { en: "The bear destroyed the chair.", zh: "熊毁坏了椅子。" },
        { en: "The storm destroyed many houses.", zh: "暴风雨摧毁了许多房屋。" }
      ],
      fun: "destroy 比 damage 程度重得多：damage（损坏）= 可以修复；destroy（摧毁）= 完全不能修复了。Thanos 在电影里说 'I will destroy half the universe'——这个词的破坏力有多大可想而知。",
      usage: "destroy 表示彻底毁坏（无法修复）。damage 表示部分损坏（可修复）。destroy 的名词形式是 destruction。"
    },
    {
      word: "cry",
      phonetic: "/kraɪ/",
      pos: "v.",
      posClass: "v",
      meaning: "哭；喊叫",
      root: { parts: [], explain: "来自拉丁语 quiritare（大声呼救），原义是罗马公民在遇到危险时的呼救声。cry 从'呼救'演变为'哭泣'和'喊叫'两个意思。" },
      memory: "cry 谐音'克来'——哭(cry)到崩溃(克)了泪水就来(来)了！cry 既是'哭'也是'喊'——想象一个人边哭边喊的样子。",
      family: ["crier（哭泣者/报告员）", "outcry（强烈抗议）"],
      synonyms: ["weep（哭泣，更文雅）", "sob（抽泣）", "shout（喊叫）"],
      antonyms: ["laugh（笑）", "smile（微笑）"],
      sentences: [
        { en: "The baby bear cried.", zh: "小熊哭了起来。" },
        { en: "Don't cry. Everything will be OK.", zh: "别哭了。一切都会好的。" }
      ],
      fun: "cry wolf = 喊'狼来了'——来自伊索寓言中放羊的男孩谎称狼来了。现在用来形容经常发假警报的人。cry over spilt milk = 为打翻的牛奶哭泣 = 为已经发生的事后悔。",
      usage: "cry for help = 呼救。cry out = 大声喊叫。cry wolf = 发假警报。a cry baby = 爱哭鬼。"
    },
    {
      word: "asleep",
      phonetic: "/əˈsliːp/",
      pos: "adj.",
      posClass: "adj",
      meaning: "睡着的",
      root: { parts: [], explain: "a-（处于某种状态）+ sleep（睡觉）= 处于睡觉的状态 = 睡着的。类似的词：awake（醒着的）= a- + wake、alive（活着的）= a- + live、alone（独自的）= a- + lone。" },
      memory: "a- 前缀表示'处于某种状态'：asleep（睡着的）、awake（醒着的）、alive（活着的）、alone（独自的）——这组词很有规律！",
      family: ["sleep（睡觉）", "sleepy（困倦的）", "awake（醒着的）"],
      synonyms: ["sleeping（睡着的）"],
      antonyms: ["awake（醒着的）"],
      sentences: [
        { en: "She found the bear asleep in bed.", zh: "她发现熊在床上睡着了。" },
        { en: "The baby is fast asleep.", zh: "婴儿正酣睡着。" }
      ],
      fun: "fall asleep = 睡着（'掉进'睡眠中）。fast asleep 中的 fast 不是'快'的意思，而是'牢固地'——睡得很沉！这是 fast 的古老含义，类似于 hold fast（紧紧抓住）。",
      usage: "fall asleep = 入睡。fast/sound asleep = 熟睡。asleep 只做表语（The cat is asleep），不做定语（不说 an asleep cat，要说 a sleeping cat）。"
    },
    {
      word: "return",
      phonetic: "/rɪˈtɜːn/",
      pos: "v.",
      posClass: "v",
      meaning: "返回；归还",
      root: { parts: [], explain: "来自拉丁语 re-（回）+ tornare（转）= 转回来 = 返回。return = 再(re)转(turn)回来。同根词：turn（转）。" },
      memory: "return = re（再次）+ turn（转）= 再转回来 = 返回/归还。把东西转回给别人 = 归还。你自己转回来 = 返回。一个词两种用法。",
      family: ["returnable（可退还的）"],
      synonyms: ["come back（回来）", "go back（回去）", "give back（归还）"],
      antonyms: ["leave（离开）", "depart（出发）", "keep（保留）"],
      sentences: [
        { en: "The three bears returned to their house.", zh: "三只熊回到了他们的房子。" },
        { en: "Please return the book to the library.", zh: "请把书还给图书馆。" }
      ],
      fun: "Return of the Jedi（绝地归来）是星球大战系列的经典电影名。键盘上的 Return 键就是 Enter 键的另一个名字——'回车'，来自打字机时代把打字头'返回'到行首。",
      usage: "return to + 地点 = 返回某地。return sth. to sb. = 把某物还给某人。in return = 作为回报。many happy returns = 生日快乐（祝你年年快乐）。"
    },
    {
      word: "point",
      phonetic: "/pɔɪnt/",
      pos: "v.",
      posClass: "v",
      meaning: "指；指向",
      root: { parts: [], explain: "来自拉丁语 punctum（刺/点），源自 pungere（刺）。point 的本义是尖锐的'点'，用手指'指'就是用手指的尖端指向某处。同根词：punctual（准时的=踩在时间点上）。" },
      memory: "point 的核心是'点'：point at（指向一个点）、point of view（观点=看法的一个'点'）、get the point（明白要点）。一个'点'引出无数含义！",
      family: ["pointed（尖的）", "pointer（指针）", "pointless（无意义的）", "viewpoint（观点）"],
      synonyms: ["indicate（指示）", "gesture（示意）"],
      antonyms: [],
      sentences: [
        { en: "She pointed at the three bears.", zh: "她指着三只熊。" },
        { en: "Don't point at people. It's not polite.", zh: "不要用手指人，这不礼貌。" }
      ],
      fun: "在西方文化中，用手指指人(point at someone)被认为是非常不礼貌的——就像中国文化一样！但是上课时老师经常说 'Good point!'（说得好！）——这里 point = 观点。",
      usage: "point at/to = 指向。point out = 指出。What's the point? = 有什么意义？That's a good point = 说得对。"
    },
    {
      word: "shout",
      phonetic: "/ʃaʊt/",
      pos: "v.",
      posClass: "v",
      meaning: "高喊；大声说",
      root: { parts: [], explain: "可能来自古诺尔斯语 skúta（嘲讽/大喊），是一个模仿大声叫喊的词。shout 比 say 音量大得多，比 scream 稍微正常一点。" },
      memory: "shout 和 out 押韵——shout out = 大喊出来！想象在操场上大声喊朋友的名字，那就是 shout。",
      family: ["shout-out（公开表扬/提及）"],
      synonyms: ["yell（大叫）", "scream（尖叫）", "cry out（喊叫）"],
      antonyms: ["whisper（低语）", "murmur（喃喃低语）"],
      sentences: [
        { en: "'Look! There she is!' shouted baby bear.", zh: "'看！她在那儿！'小熊大喊道。" },
        { en: "Don't shout in the library!", zh: "不要在图书馆里大喊！" }
      ],
      fun: "音量从小到大排列：whisper（低语）→ speak（说话）→ shout（大喊）→ yell（大叫）→ scream（尖叫）。shout-out 在社交媒体上 = 公开推荐/提及某人——给某人一个 shout-out！",
      usage: "shout at sb. = 对某人大叫（含怒气）。shout to sb. = 对远处的人喊话（无怒气）。注意 at 和 to 的区别！"
    },
    {
      word: "jump",
      phonetic: "/dʒʌmp/",
      pos: "v.",
      posClass: "v",
      meaning: "跳",
      root: { parts: [], explain: "可能是拟声词，模仿跳起来落地的'砰'的声音。jump 出现于16世纪，来源不太确定，但它已经成为英语中最基本的动词之一。" },
      memory: "jump 谐音'蹦噗'——蹦(jump)起来落地噗的一声！jump 简单好记，还组成很多有趣的短语。",
      family: ["jumper（跳跃者/毛衣-英式）", "jumping（跳跃的）"],
      synonyms: ["leap（跳跃）", "hop（单脚跳）", "bounce（弹跳）"],
      antonyms: [],
      sentences: [
        { en: "She jumped out of bed.", zh: "她从床上跳了起来。" },
        { en: "The frog jumped into the pond.", zh: "青蛙跳进了池塘。" }
      ],
      fun: "jump 的分类：jump = 双脚跳，hop = 单脚跳，skip = 蹦蹦跳跳，leap = 大步跳跃。jump the queue（英式）= 插队——在英国这可是大忌！英国人最讨厌不排队的人。",
      usage: "jump out of = 从……跳出。jump rope = 跳绳。jump to conclusions = 匆忙下结论。jump the queue = 插队（英式）。"
    },
    {
      word: "escape",
      phonetic: "/ɪˈskeɪp/",
      pos: "v.",
      posClass: "v",
      meaning: "逃跑",
      root: { parts: [], explain: "来自拉丁语 ex-（出）+ cappa（斗篷）= 脱掉斗篷逃走！古代被人抓住时，脱掉斗篷就能从抓着斗篷的手中溜走——这就是 escape 的来源。" },
      memory: "escape = ex（出去）+ cape（斗篷）= 脱掉斗篷逃走！想象被人抓住时甩掉身上的披风就逃走了——多么生动的画面！键盘上的 Esc 键就是 Escape 的缩写。",
      family: ["escapee（逃跑者）", "escapism（逃避现实）"],
      synonyms: ["flee（逃离）", "run away（逃跑）", "get away（逃脱）"],
      antonyms: ["capture（捕获）", "catch（抓住）"],
      sentences: [
        { en: "Goldilocks escaped from the house.", zh: "金凤花姑娘从房子里逃了出来。" },
        { en: "The cat escaped through the window.", zh: "猫从窗户逃走了。" }
      ],
      fun: "键盘上的 Esc 键 = Escape 键，按下去就是从当前操作'逃跑'！escape room（密室逃脱）是现在很流行的游戏——被锁在房间里，要解谜才能'逃出去'。",
      usage: "escape from = 从……逃跑。narrow escape = 九死一生。fire escape = 安全出口/消防梯。escape 也可以做名词。"
    }
  ]
};

if(typeof window!=='undefined'){window.UNIT8=UNIT8;}

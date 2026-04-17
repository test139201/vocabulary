// Module 9: Life history (生活经历)
const UNIT9 = {
  id: 9,
  title: "Life history",
  theme: "生活经历",
  color: "#6366f1",
  words: [
    {
      word: "exact",
      phonetic: "/ɪɡˈzækt/",
      pos: "adj.",
      posClass: "adj",
      meaning: "精确的；准确的",
      root: {
        parts: [
          { text: "ex-", type: "prefix", label: "出" },
          { text: "act", type: "root", label: "拉丁语 agere = 做/驱动" }
        ],
        explain: "ex-（出）+ act（做/称量）= 完全称量出来的 = 精确的。来自拉丁语 exigere，原意是'称量、检验'，引申为'精确的'。和 examine（检查）是近亲。"
      },
      memory: "exact = ex(出来) + act(做)——做出来一模一样 = 精确的！想象一个钟表匠把零件一个个精确地(exact)做出来。",
      family: ["exactly（恰好；正是）", "exacting（严格的；苛求的）"],
      synonyms: ["accurate（准确的）", "precise（精密的）"],
      antonyms: ["approximate（大约的）", "rough（粗略的）"],
      sentences: [
        { en: "Can you tell me the exact time?", zh: "你能告诉我确切的时间吗？" },
        { en: "I don't know the exact date of his birthday.", zh: "我不知道他生日的确切日期。" }
      ],
      fun: "Exactly! 是口语中超级常用的回应，意思是'没错！正是！'。当别人说了你特别同意的话，来一句 Exactly! 显得既地道又有范儿。",
      usage: "exact 常用搭配：the exact time（确切时间）、the exact number（确切数字）、the exact opposite（恰恰相反）。exactly 做副词更常见，比如 That's exactly what I mean.（那正是我的意思。）",
      visual: "想象一个超级强迫症的钟表匠，拿着巨大的放大镜，对着一粒比芝麻还小的齿轮反复测量，旁边堆了999个'不够精确'被扔掉的作品，额头上全是汗珠——就为了做到 exact！",
      confuse: "exact vs. accurate vs. precise：exact 强调'一模一样、丝毫不差'；accurate 强调'没有错误'；precise 强调'精密到小数点后好几位'。考试最常考 exact time（确切时间），别写成 accurate time。",
      rhyme: "exact 精确好，ex 出来 act 做到，做出结果一模一样，精确无误忘不了！",
      scene: "【科学实验室场景】exact（精确的）搭配 finish（完成）实验，记录 successful（成功的）结果，写成 newspaper（报纸）上的报道——科学家需要 exact data 才能 finish 一个 successful experiment！"
    },
    {
      word: "newspaper",
      phonetic: "/ˈnjuːzpeɪpə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "报纸",
      root: {
        parts: [
          { text: "news", type: "root", label: "新闻" },
          { text: "paper", type: "root", label: "纸" }
        ],
        explain: "news（新闻）+ paper（纸）= 印着新闻的纸 = 报纸。简单粗暴的合成词！news 本身来自 new 的复数，表示'新鲜事'。"
      },
      memory: "newspaper = news(新闻) + paper(纸)——承载新闻的纸！有人说 NEWS = North, East, West, South（东南西北的消息），虽然是民间词源，但很好记！",
      family: ["news（新闻）", "paper（纸/论文）", "reporter（记者）", "journalist（新闻工作者）"],
      synonyms: ["paper（报纸，口语简称）", "press（报刊；新闻界）"],
      antonyms: [],
      sentences: [
        { en: "My grandpa reads the newspaper every morning.", zh: "我爷爷每天早上都看报纸。" },
        { en: "She works for a newspaper.", zh: "她在一家报社工作。" }
      ],
      fun: "世界上最早的报纸出现在哪里？中国！唐朝的《邸报》是世界上最早的报纸之一，比欧洲的报纸早了近千年。英语世界最老的报纸之一是1665年创办的 Oxford Gazette。",
      usage: "in the newspaper = 在报纸上（登载的内容）。read a/the newspaper = 看报。newspaper 可数，a newspaper = 一份报纸。",
      visual: "想象一张巨大的报纸像魔毯一样飞在天上，上面印满了爆炸性新闻，一个小孩骑在报纸上满城飞，到处撒新闻纸——全城人都抬头看这份会飞的 newspaper！",
      confuse: "newspaper vs. news vs. paper：newspaper 是具体的一份报纸（可数）；news 是新闻消息（不可数，不能说 a news！）；paper 单独用可以指报纸（口语）也可以指纸张。注意：消息用 a piece of news，不能说 a news！",
      rhyme: "news 新闻 paper 纸，合在一起是报纸。爷爷每天看一份，大事小事全知道！",
      scene: "【名人传记场景】newspaper（报纸）报道某人 at the age of（在……岁时）become（成为）successful（成功的）人物的故事——报纸上经常登名人的 life history！"
    },
    {
      word: "marry",
      phonetic: "/ˈmæri/",
      pos: "v.",
      posClass: "v",
      meaning: "嫁；娶；和……结婚",
      root: {
        parts: [],
        explain: "来自拉丁语 maritus（丈夫），与罗马婚姻女神 Mars 有渊源。marry 在英语中已有近千年的历史，是最基本的'结婚'用词。"
      },
      memory: "marry 和人名 Mary（玛丽）发音相同！想象：Mary 要 marry（嫁给）一个人。注意别和 merry（快乐的）搞混！",
      family: ["marriage（婚姻）", "married（已婚的）", "unmarried（未婚的）"],
      synonyms: ["wed（结婚，较正式）", "get hitched（结婚，口语）"],
      antonyms: ["divorce（离婚）"],
      sentences: [
        { en: "He married her in 1$REDACTED.", zh: "他在1$REDACTED年和她结婚了。" },
        { en: "They got married last year.", zh: "他们去年结婚了。" }
      ],
      fun: "英语中的绕口令：Mary, Mary, quite contrary（玛丽，玛丽，真别扭）是一首著名的英文童谣。marry/Mary/merry 在美式英语中发音几乎一样，但在英式英语中是三个不同的音！",
      usage: "注意 marry 的用法：marry sb.（嫁给/娶某人），不说 marry with sb.！get married to sb. = 和某人结婚。be married = 已婚状态。",
      visual: "想象一个巨大的婚礼蛋糕上，新郎新娘的小人偶突然活了过来，新郎紧张到把戒指掉进蛋糕里，两人一起在奶油里翻找戒指，满脸奶油还甜蜜地笑——这就是 marry 的欢乐场面！",
      confuse: "marry vs. married vs. marriage：marry 是动词（结婚），married 是形容词（已婚的），marriage 是名词（婚姻）。最大陷阱：marry sb. 直接跟人，千万不要写 marry with sb.！get married to sb. 才用 to！",
      rhyme: "marry 结婚不用 with，直接后面跟人物。get married to 要记牢，考试再也不会错！",
      scene: "【人生大事场景】marry（结婚）后 move（搬家）到新地方，become（成为）新家庭，这是人生重大时刻——at the age of 二十几，marry 了心爱的人，move 到新房子，人生翻开新篇章！"
    },
    {
      word: "become",
      phonetic: "/bɪˈkʌm/",
      pos: "v.",
      posClass: "v",
      meaning: "成为；变成",
      root: {
        parts: [
          { text: "be-", type: "prefix", label: "使成为" },
          { text: "come", type: "root", label: "来" }
        ],
        explain: "be-（使成为）+ come（来到）= 来到某个状态 = 成为。古英语 becuman 的原意就是'到来、发生、变成'。"
      },
      memory: "become = be(成为) + come(来)——来到某个新身份 = 成为！过去式是 became，过去分词是 become（和原形一样）。",
      family: ["becoming（合适的；得体的）"],
      synonyms: ["turn（变成）", "grow（逐渐变得）", "get（变得）"],
      antonyms: ["remain（保持不变）"],
      sentences: [
        { en: "She became a teacher in 2010.", zh: "她在2010年成为了一名教师。" },
        { en: "I want to become a doctor when I grow up.", zh: "我长大后想成为一名医生。" }
      ],
      fun: "become 的过去式变化：become → became → become。这种'ABA'型变化在英语中比较少见。类似的还有 come → came → come, run → ran → run。",
      usage: "become + 名词/形容词：become a teacher（成为老师）、become famous（变得出名）。become of = 发生了什么：What became of him?（他后来怎么样了？）",
      visual: "想象一只小蝌蚪在池塘里拼命游啊游，突然'砰'一声巨响，尾巴消失，四条腿蹦出来，变成了一只穿着小西装的青蛙先生——这就是 become 的魔法变身时刻！",
      confuse: "become vs. turn vs. get：become 最通用，后接名词或形容词（become a doctor / become famous）；turn 强调彻底变化常接颜色（turn red 变红）；get 更口语化（get angry 生气了）。become 后面可以跟名词，get 后面一般只跟形容词。",
      rhyme: "become 成为变化大，became 过去要记下。become 过分不变样，ABA 变化不一样！",
      scene: "【梦想成长场景】at the age of（在……岁时）join（加入）学校社团，努力学习 become（成为）successful（成功的）人——每个人都想 become 更好的自己！"
    },
    {
      word: "move",
      phonetic: "/muːv/",
      pos: "v.",
      posClass: "v",
      meaning: "搬家；移动",
      root: {
        parts: [],
        explain: "来自拉丁语 movēre（移动）。这个词根 mov-/mot-/mob- 是英语中的超级词根，衍生出大量常用词：movie（电影=动的画面）、motor（马达）、mobile（移动的）、motion（运动）。"
      },
      memory: "move 的词根 mov- = 动！movie（电影）= 会动的画面，mobile（手机）= 能移动的，motor（马达）= 让东西动的机器。",
      family: ["movement（运动；移动）", "movie（电影）", "moving（感人的）", "removal（搬迁）"],
      synonyms: ["relocate（搬迁）", "shift（移动）"],
      antonyms: ["stay（留下）", "remain（保持不动）"],
      sentences: [
        { en: "We moved to a new house last month.", zh: "我们上个月搬了新家。" },
        { en: "Don't move! Stay right there.", zh: "别动！待在那里。" }
      ],
      fun: "movie 其实就是 moving picture（会动的图画）的缩写！1890年代电影刚发明时，人们惊叹于图片居然能动起来，所以叫它 moving picture，后来简化成了 movie。",
      usage: "move to + 地方 = 搬到某地。move house = 搬家（英式）。move on = 继续前进/放下过去。It's your move = 轮到你了（棋类游戏）。",
      visual: "想象搬家那天，你家的冰箱、沙发、电视全都长了腿，自己排成一队从旧房子走到新房子，沙发还戴着墨镜领队，路人全都惊呆了——家具自己 move 了！",
      confuse: "move vs. remove：move 是移动、搬家（I moved to Beijing）；remove 是移除、拿掉（remove the cover 拿掉盖子）。move 强调'从A到B'，remove 强调'拿走、去除'。别把'搬家'写成 remove！",
      rhyme: "move 搬家又移动，move to 后跟新地名。搬来搬去不怕累，新家新气象开心！",
      scene: "【搬家日场景】marry（结婚）以后 move（搬家）到新城市，join（加入）新社区，读当地 newspaper（报纸）了解新环境——结婚搬家是人生大事，一连串变化！"
    },
    {
      word: "join",
      phonetic: "/dʒɔɪn/",
      pos: "v.",
      posClass: "v",
      meaning: "参加；加入",
      root: {
        parts: [],
        explain: "来自拉丁语 jungere（连接），与英语的 junction（交叉口）、joint（关节=连接处）同源。join 的核心意思就是'把自己连接到一个群体中'。"
      },
      memory: "join 发音像'撅嘴'——加入(join)一个团体，开心得撅嘴笑！也可以这样记：join 里有 joy（快乐）的影子——加入大家庭很快乐！",
      family: ["joint（关节；联合的）", "junction（交叉路口）", "enjoin（命令）"],
      synonyms: ["enter（加入）", "participate in（参与）"],
      antonyms: ["leave（离开）", "quit（退出）"],
      sentences: [
        { en: "He joined the army at the age of 18.", zh: "他18岁参了军。" },
        { en: "Would you like to join us for dinner?", zh: "你愿意和我们一起吃晚饭吗？" }
      ],
      fun: "Join the club! 这句口语的意思不是'加入俱乐部'，而是'我也一样啊！'——当你发现别人和你有一样的烦恼时，就可以说 Join the club!（咱们是一路人！）",
      usage: "join + 组织/人 = 加入某组织或加入某人。join the army = 参军。join in = 参加活动。注意区分：join 强调'加入成为一员'，take part in 强调'参与活动过程'。",
      visual: "想象一个超大的拼图，每块拼图都是一个人，你拿着自己那块兴奋地跑过去'咔嗒'一声拼上去——完美连接！所有拼图块一起欢呼：'欢迎 join 我们！'",
      confuse: "join vs. join in vs. take part in：join + 组织/人（join the army 参军，join us 加入我们）；join in + 活动（join in the game 参加游戏）；take part in + 活动（take part in the competition 参加比赛）。最容易考的是 join 后面直接跟组织！",
      rhyme: "join 加入跟组织，join in 后跟活动词。take part in 也参加，三个搭配要分清！",
      scene: "【学校社团场景】join（加入）戏剧社，参加 play（戏剧）的 performance（表演），写 poem（诗歌）朗诵——开学第一天，你 join 了最酷的社团！"
    },
    {
      word: "national",
      phonetic: "/ˈnæʃnəl/",
      pos: "adj.",
      posClass: "adj",
      meaning: "国家的；民族的",
      root: {
        parts: [
          { text: "nat-", type: "root", label: "拉丁语 natus = 出生" },
          { text: "-ion", type: "suffix", label: "名词后缀" },
          { text: "-al", type: "suffix", label: "形容词后缀" }
        ],
        explain: "nat-（出生）→ nation（民族=同一血统出生的人群）→ national（民族的/国家的）。nat- 这个词根还给了我们 nature（自然=天生的）、native（本地的=出生在这里的）。"
      },
      memory: "national = nation(国家) + al(的)——国家的！nat- = 出生：nature = 天生的 = 自然，native = 出生在当地的 = 本地的。",
      family: ["nation（国家；民族）", "nationality（国籍）", "international（国际的）", "native（本地的）", "nature（自然）"],
      synonyms: ["domestic（国内的）", "state（国家的）"],
      antonyms: ["international（国际的）", "foreign（外国的）"],
      sentences: [
        { en: "October 1st is China's National Day.", zh: "10月1日是中国的国庆日。" },
        { en: "Beijing is in the National Stadium.", zh: "鸟巢是国家体育场。" }
      ],
      fun: "nat- 家族太强大了：nation（国家=同族出生）、nature（自然=天生的样子）、native（本地人=出生在这里）、prenatal（产前的=出生前）、natural（天然的=天生的）。所有这些词都指向'出生'这个核心概念！",
      usage: "National Day = 国庆节。national team = 国家队。national park = 国家公园。the National People's Congress = 全国人民代表大会。",
      visual: "想象国庆节那天，一面巨大的国旗像被子一样盖住了整个天安门广场，所有人在'国旗被子'下面开心地蹦跳——national 的日子，全国都在狂欢！",
      confuse: "national vs. international vs. native：national（国家的，如 National Day 国庆节）；international = inter（之间）+ national = 国际的；native（本地的、土生土长的）。national 是'一个国家范围的'，international 是'多国之间的'，别搞混！",
      rhyme: "national 国家的，nat 出生是根基。nation 变国家，加 al 变形容，国家队来国家公园，national 到处行！",
      scene: "【国庆节场景】national（国家的）节日 Women's Day（妇女节）等，看 performance（表演），读 newspaper（报纸）上的庆祝报道——每逢 national holiday，全国都热闹非凡！"
    },
    {
      word: "Women's Day",
      phonetic: "/ˈwɪmɪnz deɪ/",
      pos: "n.",
      posClass: "n",
      meaning: "妇女节",
      root: {
        parts: [],
        explain: "Women's（妇女的）+ Day（日子）。women 是 woman 的复数，加 's 表示所有格。注意 women 的发音：第一个音节读 /wɪ/，不是 /wʊ/。"
      },
      memory: "Women's Day 记住三点：1. women 不是 womens；2. 所有格用 Women's（先复数再加 's）；3. 每个单词首字母大写，因为是节日名。",
      family: ["woman（女人）", "women（女人们）", "International（国际的）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "International Women's Day is on March 8th.", zh: "国际妇女节在3月8日。" },
        { en: "We celebrated Women's Day at school.", zh: "我们在学校庆祝了妇女节。" }
      ],
      fun: "国际妇女节起源于1908年纽约女工的罢工运动，她们争取更好的工作条件和投票权。1975年联合国正式确定3月8日为国际妇女节。在中国，三八妇女节是法定假日，女性可以放半天假！",
      usage: "全称是 International Women's Day（国际妇女节），简称 Women's Day。节日名称中每个单词首字母大写。类似的节日表达：Mother's Day（母亲节）、Father's Day（父亲节）、Children's Day（儿童节）。",
      visual: "想象三月八号这天，所有妈妈和女老师都戴上了金色王冠，坐在宝座上，孩子们排队给她们献花、表演节目，学校食堂挂满了'女王万岁'的横幅——这就是 Women's Day 的排场！",
      confuse: "Women's Day 的所有格最容易写错！woman 的复数是 women（不规则变化，不是 womans），复数所有格是 Women's（不是 Womens'）。类似的：Children's Day（不是 Childrens' Day），因为 children 已经是复数了，直接加 's。",
      rhyme: "三月八日 Women's Day，妇女节日乐开怀。Women's 所有格，先变复数再加撇 s！",
      scene: "【节日庆祝场景】national（国家的）节日 Women's Day（妇女节），学校举办 performance（表演），同学们朗诵 poem（诗歌）献给妈妈——节日里充满了爱与感恩！"
    },
    {
      word: "age",
      phonetic: "/eɪdʒ/",
      pos: "n.",
      posClass: "n",
      meaning: "年龄",
      root: {
        parts: [],
        explain: "来自拉丁语 aetas（年龄/时代），经古法语 aage 进入英语。age 既表示一个人的年龄，也表示一个历史时代（the Ice Age = 冰河时代）。"
      },
      memory: "age 只有三个字母却含义丰富：年龄(How old?)、时代(Stone Age)、变老(to age)。发音 /eɪdʒ/ 像'诶举'——举起手指数年龄！",
      family: ["aged（年老的）", "aging/ageing（老化）", "teenage（青少年的）", "teenager（青少年）"],
      synonyms: ["years（年岁）"],
      antonyms: ["youth（青春）"],
      sentences: [
        { en: "What's your age?", zh: "你多大了？" },
        { en: "He started school at the age of six.", zh: "他六岁开始上学。" }
      ],
      fun: "英语中有很多用 age 命名的时代：Stone Age（石器时代）、Bronze Age（青铜时代）、Iron Age（铁器时代）、Ice Age（冰河时代）、Space Age（太空时代）、Digital Age（数字时代）。我们现在生活在什么 age？",
      usage: "at the age of + 数字 = 在……岁时。age 做动词表示'变老'：She aged a lot.（她老了很多。）What's your age? 不如 How old are you? 常用。",
      visual: "想象一棵大树，树干上有密密麻麻的年轮，每一圈就是一岁。一个小朋友拿着放大镜趴在树桩上一圈一圈地数：'一岁、两岁、三岁……哇这棵树的 age 是500岁！'",
      confuse: "age vs. old：问年龄用 How old are you?（不说 What's your age?，虽然语法没错但不自然）。age 是名词'年龄'，old 是形容词'老的/……岁的'。写作文时 at the age of 比 when I was ... years old 更简洁高级！",
      rhyme: "age 年龄又时代，三个字母学问大。at the age of 加数字，几岁做啥说得明！",
      scene: "【人物介绍场景】介绍名人的 age（年龄），at the age of（在……岁时）做了什么，become（成为）什么人——写人物传记，age 和 at the age of 是必备词汇！"
    },
    {
      word: "at the age of",
      phonetic: "/æt ðə eɪdʒ ɒv/",
      pos: "prep.",
      posClass: "prep",
      meaning: "在……岁时",
      root: {
        parts: [],
        explain: "at（在某个时间点）+ the age of（……的年龄）= 在某个年龄的时候。这是一个介词短语，用来描述某人做某事时的年龄。"
      },
      memory: "at the age of = 在……岁时。公式：at the age of + 数字。可以缩短为 at age + 数字（更简洁）。考试常考这个短语！",
      family: ["at age...（在……岁）", "aged...（……岁的）"],
      synonyms: ["when sb. was...years old（当某人……岁时）"],
      antonyms: [],
      sentences: [
        { en: "She became a writer at the age of 20.", zh: "她20岁时成为了一名作家。" },
        { en: "Mozart began to play the piano at the age of three.", zh: "莫扎特三岁就开始弹钢琴了。" }
      ],
      fun: "历史上有很多天才少年：莫扎特5岁开始作曲，王勃14岁写出《滕王阁序》，居里夫人15岁就中学毕业了。用英语描述这些成就，at the age of 就是最好用的短语！",
      usage: "at the age of 通常放在句末：He went to college at the age of 15. 也可以放在句首：At the age of 15, he went to college. 同义替换：when he was 15 years old。",
      visual: "想象一个超大的生日蛋糕，上面插着各种小旗子，每面旗子上写着这个人在这个年龄干了什么大事：'3岁弹钢琴''5岁写诗''10岁发明机器人'——at the age of 蛋糕，记录你每岁的高光时刻！",
      confuse: "at the age of vs. when ... years old：意思一样但用法不同。at the age of + 数字，放句末或句首；when sb. was ... years old 是时间状语从句。写作文想拿高分就用 at the age of，比 when I was ... years old 更简洁更高级！",
      rhyme: "at the age of 加数字，在几岁时做了啥。放在句末也句首，人物传记用得多！",
      scene: "【名人故事场景】at the age of（在……岁时）join（加入）某团体，become（成为）successful（成功的）人物，newspaper（报纸）争相报道——每个名人的故事都从 at the age of 开始讲起！"
    },
    {
      word: "play",
      phonetic: "/pleɪ/",
      pos: "n.",
      posClass: "n",
      meaning: "戏剧",
      root: {
        parts: [],
        explain: "古英语 plegan 原意是'运动、玩耍、演奏'。play 从'玩耍'引申到'表演'，再到'戏剧'——因为在莎士比亚的时代，演戏就像一种'玩耍'和'扮演'。"
      },
      memory: "play 你已经认识了——'玩耍'和'演奏'。但在本单元中，play 做名词表示'戏剧'！想象演员们在舞台上'玩耍(play)'角色 = 戏剧(play)。",
      family: ["player（演员；运动员）", "playful（顽皮的）", "playwright（剧作家）", "playground（操场）"],
      synonyms: ["drama（戏剧）", "show（演出）"],
      antonyms: [],
      sentences: [
        { en: "We saw a play at the theater last night.", zh: "我们昨晚在剧院看了一场话剧。" },
        { en: "Shakespeare wrote many famous plays.", zh: "莎士比亚写了很多著名的戏剧。" }
      ],
      fun: "莎士比亚是英语世界最伟大的 playwright（剧作家），他一生写了37部 plays（戏剧）。他还发明了大量英语词汇和短语，比如 lonely（孤独的）、generous（慷慨的）、break the ice（打破僵局）等等！",
      usage: "play 做名词'戏剧'时是可数名词：a play, two plays。注意和动词 play（玩/演奏）区分。put on a play = 上演一出戏。go to a play = 去看话剧。",
      visual: "想象一群穿着华丽戏服的演员在舞台上夸张地表演，有人假装摔倒，有人对着月亮大喊'To be or not to be!'，台下观众笑得前仰后合——这场 play 太精彩了！",
      confuse: "play 做名词'戏剧'vs. play 做动词'玩/演奏'：a play = 一部戏剧（名词）；play basketball = 打篮球（动词）；play the piano = 弹钢琴（动词）。本单元考的是名词用法！注意 play vs. drama：play 特指舞台话剧，drama 范围更广，也包括电视剧。",
      rhyme: "play 名词是戏剧，play 动词是玩耍。莎翁写了三十七，部部都是经典 play！",
      scene: "【剧院之夜场景】去看一场 play（戏剧），欣赏精彩的 performance（表演），演员朗诵 poem（诗歌），演出 successful（成功）结束后大家鼓掌——join 朋友一起看 play 是最棒的周末！"
    },
    {
      word: "poem",
      phonetic: "/ˈpəʊɪm/",
      pos: "n.",
      posClass: "n",
      meaning: "诗歌",
      root: {
        parts: [],
        explain: "来自希腊语 poiēma（创作的东西），源自 poiein（创造/做）。在古希腊人看来，诗歌就是最高形式的'创造'。poet（诗人）= 创造者。"
      },
      memory: "poem 发音像'破诶母'——读诗(poem)的时候抑扬顿挫，像在'破'开文字的外壳！也可以记：po + em，po 像'泼'墨挥毫写诗篇。",
      family: ["poet（诗人）", "poetry（诗歌总称）", "poetic（诗意的）"],
      synonyms: ["verse（诗；韵文）"],
      antonyms: ["prose（散文）"],
      sentences: [
        { en: "She wrote a beautiful poem about spring.", zh: "她写了一首关于春天的美丽诗歌。" },
        { en: "We learned a poem by Li Bai in class.", zh: "我们在课上学了一首李白的诗。" }
      ],
      fun: "英语中最短的诗歌之一只有一行：'Adam / Had'em.'（亚当/有过它们。）——这是一首关于跳蚤的打油诗。而中国的五言绝句只有20个字就能描绘出完整的意境，堪称世界诗歌之最精炼！",
      usage: "poem 是可数名词：a poem, poems。区分：poem（一首具体的诗）vs. poetry（诗歌总称，不可数）。write a poem = 写诗。recite a poem = 朗诵诗歌。",
      visual: "想象李白站在巨大的月亮上，手里举着酒杯，大声朗诵诗歌，文字从他嘴里飞出来变成金色的蝴蝶漫天飞舞——这就是 poem 的浪漫力量！",
      confuse: "poem vs. poetry vs. poet：poem 是可数名词，指具体的一首诗（a poem, two poems）；poetry 是不可数名词，指诗歌这个类别（不能说 a poetry！）；poet 是诗人。最常见的错误是把 poetry 当可数名词用！",
      rhyme: "poem 一首诗，poetry 诗总称。poet 是诗人，三个词儿要分清！",
      scene: "【文学课堂场景】学习 poem（诗歌），了解 poet 的 age（年龄）和人生故事，at the age of 几岁写出名作，become（成为）successful（成功的）作家——语文课上 poem 最有韵味！"
    },
    {
      word: "finish",
      phonetic: "/ˈfɪnɪʃ/",
      pos: "v.",
      posClass: "v",
      meaning: "结束；完成",
      root: {
        parts: [{ text: "fin-", type: "root", label: "拉丁语 finis = 结束/边界" }],
        explain: "来自拉丁语 finire（结束）。fin-（结束）是超常见词根：final（最终的）、finish（完成）、finance（金融=结清账目）、fine（罚款=了结/好的=到达极致）、finite（有限的）。"
      },
      memory: "finish 里有 fin（鱼鳍）——鱼用鱼鳍(fin)冲过终点线(finish)！fin- = 结束：final（最终的）、finite（有限的）、infinite（无限的=没有终点的）。",
      family: ["final（最终的）", "finally（终于）", "finite（有限的）", "infinite（无限的）", "define（定义=划定边界）"],
      synonyms: ["complete（完成）", "end（结束）"],
      antonyms: ["begin（开始）", "start（开始）"],
      sentences: [
        { en: "I finished my homework before dinner.", zh: "我在晚饭前完成了作业。" },
        { en: "The movie finishes at 9 o'clock.", zh: "电影9点钟结束。" }
      ],
      fun: "马拉松比赛的终点叫 finish line（终点线）。有趣的是，finish 和 fine（好的）是同源词——古代结清债务(finish)后，一切就 fine（好的）了！所以'好'和'结束'其实是一个意思的两面。",
      usage: "finish doing sth. = 做完某事（后接动名词，不接 to do）：finish reading = 读完。finish line = 终点线。finish off = 完全结束/吃光。",
      visual: "想象一个学生写作业写到深夜，终于写完最后一个字，把笔一扔，作业本像烟花一样'砰'地炸开满天星光，学生在桌上倒头就睡——finish homework 的那一刻，全世界都亮了！",
      confuse: "finish vs. complete vs. end：finish 最日常（finish homework 写完作业）；complete 更正式，强调'做完整'（complete a project 完成项目）；end 强调'到达终点'（The movie ends at 9. 电影9点结束）。注意：finish doing sth.（不能用 to do！），这是考试必考点！",
      rhyme: "finish 完成 doing 跟，千万不要用 to do。写完作业 finish 了，开心玩耍没烦恼！",
      scene: "【学期末场景】finish（完成）所有考试，看一场 play（戏剧）的 performance（表演），读 poem（诗歌）放松心情——finish 了一学期的辛苦，终于可以开心玩了！"
    },
    {
      word: "successful",
      phonetic: "/səkˈsesfl/",
      pos: "adj.",
      posClass: "adj",
      meaning: "成功的",
      root: {
        parts: [
          { text: "suc-", type: "prefix", label: "从下往上" },
          { text: "cess", type: "root", label: "拉丁语 cedere = 走/前进" },
          { text: "-ful", type: "suffix", label: "充满……的" }
        ],
        explain: "suc-（从下往上）+ cess（走/前进）+ -ful（充满）= 充满向上前进的 = 成功的。success 的原义是'跟上来、接着走上去'，引申为'达到目标'。"
      },
      memory: "successful = success(成功) + ful(充满的)——充满成功的！success 拆分：suc(=sub 从下) + cess(走) = 从下面走上来 = 成功！",
      family: ["success（成功）", "succeed（成功；继承）", "successfully（成功地）", "successive（连续的）"],
      synonyms: ["triumphant（胜利的）", "prosperous（繁荣的）"],
      antonyms: ["unsuccessful（不成功的）", "failed（失败的）"],
      sentences: [
        { en: "She is a successful businesswoman.", zh: "她是一位成功的女商人。" },
        { en: "The experiment was very successful.", zh: "这次实验非常成功。" }
      ],
      fun: "成功(success)的英文定义很有趣——success 的词源是'接着走上去'。这暗示成功不是一个终点，而是不断前进的过程。爱迪生说：'Success is 1% inspiration and 99% perspiration.'（成功是1%的灵感加99%的汗水。）",
      usage: "be successful in doing sth. = 成功做某事。a successful + 名词 = 一个成功的……。注意拼写：success 双写 c 和 s，successful 再加 -ful。",
      visual: "想象一个人从山脚下开始爬，一路摔了99次，满身泥巴，终于爬到山顶，一束金色阳光照在他身上，山顶上插着一面写着'SUCCESSFUL'的大旗，他张开双臂对着天空大喊——成功了！",
      confuse: "successful vs. succeed vs. success：successful 是形容词（a successful man 成功的人）；succeed 是动词（He succeeded. 他成功了）；success 是名词（Success is not easy. 成功不容易）。拼写陷阱：success 有两个 c 两个 s，successful 再加 ful，别少写字母！",
      rhyme: "successful 成功的，两个 c 来两个 s。succeed 是动词，success 是名词，词性变化要记住！",
      scene: "【颁奖典礼场景】successful（成功的）人物 at the age of（在……岁时）become（成为）名人，newspaper（报纸）报道，finish（完成）了伟大的作品——每个 successful 的故事都值得被记录！"
    },
    {
      word: "performance",
      phonetic: "/pəˈfɔːməns/",
      pos: "n.",
      posClass: "n",
      meaning: "表演；演出",
      root: {
        parts: [
          { text: "per-", type: "prefix", label: "完全地" },
          { text: "form", type: "root", label: "形成/做" },
          { text: "-ance", type: "suffix", label: "名词后缀" }
        ],
        explain: "per-（完全地）+ form（形成/做）+ -ance（名词后缀）= 完全做出来 = 表演/表现。perform 的原意是'完成、执行'，后引申为'表演'——在舞台上完整地呈现一个作品。"
      },
      memory: "performance = perform(表演) + ance(名词后缀)。perform = per(完全) + form(形式) = 完整地呈现出来 = 表演！",
      family: ["perform（表演；执行）", "performer（表演者）", "performing（表演的）"],
      synonyms: ["show（演出）", "presentation（展示）"],
      antonyms: [],
      sentences: [
        { en: "We enjoyed the wonderful performance.", zh: "我们欣赏了精彩的演出。" },
        { en: "The students gave a great performance at the school show.", zh: "学生们在学校演出中表现得非常精彩。" }
      ],
      fun: "performance 在现代英语中不只是'演出'，还有'性能'的意思——比如 phone performance（手机性能）、academic performance（学业表现）。所以当别人说 'Good performance!'，可能是夸你演出好，也可能是夸你表现好！",
      usage: "give a performance = 进行演出。put on a performance = 举办演出。performance 也指'表现'：academic performance（学习成绩）、job performance（工作表现）。",
      visual: "想象学校文艺汇演，一个同学上台紧张得腿发抖，结果一开口唱歌惊艳全场，台下观众全站起来鼓掌，连校长都感动得擦眼泪——这场 performance 太炸了！",
      confuse: "performance vs. show vs. play：performance 强调'表演行为'（give a performance 进行表演）；show 更口语化，范围更广（talk show 脱口秀、TV show 电视节目）；play 特指舞台戏剧。performance 还能表示'表现、性能'，这是 show 和 play 没有的意思！",
      rhyme: "able performance 是表演，per 完全 form 来呈现。give a able performance 上舞台，精彩演出人人爱！",
      scene: "【学校文艺汇演场景】join（加入）表演队，排练 play（戏剧），朗诵 poem（诗歌），最终呈现一场 successful（成功的）performance（表演），finish（完成）后全场欢呼——这是属于我们的舞台！"
    }
  ]
};

if(typeof window!=='undefined'){window.UNIT9=UNIT9;}

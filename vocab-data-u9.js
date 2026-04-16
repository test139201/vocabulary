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
      usage: "exact 常用搭配：the exact time（确切时间）、the exact number（确切数字）、the exact opposite（恰恰相反）。exactly 做副词更常见，比如 That's exactly what I mean.（那正是我的意思。）"
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
      usage: "in the newspaper = 在报纸上（登载的内容）。read a/the newspaper = 看报。newspaper 可数，a newspaper = 一份报纸。"
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
      usage: "注意 marry 的用法：marry sb.（嫁给/娶某人），不说 marry with sb.！get married to sb. = 和某人结婚。be married = 已婚状态。"
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
      usage: "become + 名词/形容词：become a teacher（成为老师）、become famous（变得出名）。become of = 发生了什么：What became of him?（他后来怎么样了？）"
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
      usage: "move to + 地方 = 搬到某地。move house = 搬家（英式）。move on = 继续前进/放下过去。It's your move = 轮到你了（棋类游戏）。"
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
      usage: "join + 组织/人 = 加入某组织或加入某人。join the army = 参军。join in = 参加活动。注意区分：join 强调'加入成为一员'，take part in 强调'参与活动过程'。"
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
      usage: "National Day = 国庆节。national team = 国家队。national park = 国家公园。the National People's Congress = 全国人民代表大会。"
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
      usage: "全称是 International Women's Day（国际妇女节），简称 Women's Day。节日名称中每个单词首字母大写。类似的节日表达：Mother's Day（母亲节）、Father's Day（父亲节）、Children's Day（儿童节）。"
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
      usage: "at the age of + 数字 = 在……岁时。age 做动词表示'变老'：She aged a lot.（她老了很多。）What's your age? 不如 How old are you? 常用。"
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
      usage: "at the age of 通常放在句末：He went to college at the age of 15. 也可以放在句首：At the age of 15, he went to college. 同义替换：when he was 15 years old。"
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
      usage: "play 做名词'戏剧'时是可数名词：a play, two plays。注意和动词 play（玩/演奏）区分。put on a play = 上演一出戏。go to a play = 去看话剧。"
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
      usage: "poem 是可数名词：a poem, poems。区分：poem（一首具体的诗）vs. poetry（诗歌总称，不可数）。write a poem = 写诗。recite a poem = 朗诵诗歌。"
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
      usage: "finish doing sth. = 做完某事（后接动名词，不接 to do）：finish reading = 读完。finish line = 终点线。finish off = 完全结束/吃光。"
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
      usage: "be successful in doing sth. = 成功做某事。a successful + 名词 = 一个成功的……。注意拼写：success 双写 c 和 s，successful 再加 -ful。"
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
      usage: "give a performance = 进行演出。put on a performance = 举办演出。performance 也指'表现'：academic performance（学习成绩）、job performance（工作表现）。"
    }
  ]
};

if(typeof window!=='undefined'){window.UNIT9=UNIT9;}

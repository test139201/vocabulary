// Module 2: What can you do? (外研版七年级下册)
const UNIT2 = {
  id: 2,
  title: "What can you do?",
  theme: "你能做什么？",
  color: "#ef4444",
  words: [
    {
      word: "play",
      phonetic: "/pleɪ/",
      pos: "v.",
      posClass: "v",
      meaning: "演奏；弹奏",
      root: {
        parts: [],
        explain: "来自古英语 plegian（运动、玩耍）。这个词的含义从'玩耍'扩展到了'演奏乐器'和'参加运动'。一个词就能覆盖你的全部课余生活！"
      },
      memory: "play 谐音'玩嘞'——play 就是'玩嘞'！不管是玩游戏、弹钢琴还是打球，都用 play。",
      family: ["player（运动员/播放器）", "playful（爱玩的）", "playground（操场）", "replay（重播）"],
      synonyms: ["perform（表演）"],
      antonyms: [],
      sentences: [
        { en: "Can you play the piano?", zh: "你会弹钢琴吗？" },
        { en: "I can play tennis and table tennis.", zh: "我会打网球和乒乓球。" }
      ],
      fun: "play 是英语中最多才多艺的动词之一！play the piano（弹钢琴）、play football（踢足球）、play a game（玩游戏）、play a role（扮演角色）——一个词玩转所有场景。",
      usage: "play + the + 乐器（play the piano/guitar），play + 球类运动（play football/tennis，不加 the）。这是英语考试的高频考点！",
      visual: "想象一个人左手弹钢琴(piano)，右手打网球(tennis)，脚还在踢足球——这就是 play 的超能力，一个词能同时'玩转'所有运动和乐器！",
      confuse: "play vs. game：play 是动词'玩/打/弹'，game 是名词'比赛/游戏'。不能说 I game tennis，要说 I play tennis。",
      rhyme: "play play 真百搭，弹琴打球全靠它；乐器前面加个 the，球类运动光溜溜。",
      scene: "【课外活动场景】放学后，你去 club（俱乐部）play tennis（打网球），累了就回教室 play the piano（弹钢琴），这些都是你在新 term（学期）start（开始）的新爱好。"
    },
    {
      word: "tennis",
      phonetic: "/ˈtenɪs/",
      pos: "n.",
      posClass: "n",
      meaning: "网球",
      root: {
        parts: [],
        explain: "来自法语 tenez（接住！），是发球时喊的口令。12世纪法国贵族发明了网球的前身——用手掌击球，嘴里喊着'Tenez!'（接好了！）。"
      },
      memory: "tennis 谐音'ten+nis'——十(ten)个人打网球(tennis)？不对，网球只要两个人！但记住 ten 就能记住 tennis。",
      family: ["tennis court（网球场）", "tennis player（网球运动员）", "table tennis（乒乓球）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "I can play tennis very well.", zh: "我网球打得很好。" },
        { en: "Let's play tennis after school.", zh: "放学后我们打网球吧。" }
      ],
      fun: "网球比赛的计分方式非常奇怪：0叫love，1分叫15，2分叫30，3分叫40。据说 love 来自法语 l'oeuf（鸡蛋），因为0的形状像鸡蛋！",
      usage: "play tennis（打网球，不加 the）。table tennis = 乒乓球（这是英式叫法，美国人常说 ping-pong）。",
      visual: "一个巨大的网球上写着数字 TEN，球飞过来你慌忙用 piano（钢琴）当球拍去接——砰！琴键四处飞溅，这画面够难忘吧！",
      confuse: "tennis vs. table tennis：tennis 是网球（大球、大场地），table tennis 是乒乓球（小球、桌上打）。别搞混了，乒乓球不能丢掉 table！",
      rhyme: "ten 加 nis 变 tennis，网球场上挥拍子；play tennis 不加 the，记住这条没问题。",
      scene: "【运动社团场景】新 term（学期）start（开始）了，你 would like（想要）加入 club（俱乐部），可以 play tennis（打网球），也可以 ride（骑）自行车，选你最喜欢的！"
    },
    {
      word: "piano",
      phonetic: "/piˈænəʊ/",
      pos: "n.",
      posClass: "n",
      meaning: "钢琴",
      root: {
        parts: [],
        explain: "来自意大利语 pianoforte，意思是'轻和重'(piano = 轻柔，forte = 有力)。因为钢琴可以弹出轻柔和有力两种声音，这在当时是革命性的发明！后来名字太长被缩短成了 piano。"
      },
      memory: "piano 谐音'皮安奴'——弹钢琴(piano)的安奴，手指像跳舞一样！或者'屁矮弄'——钢琴又矮又胖。",
      family: ["pianist（钢琴家）", "piano lesson（钢琴课）"],
      synonyms: ["keyboard（键盘乐器）"],
      antonyms: [],
      sentences: [
        { en: "She can play the piano beautifully.", zh: "她钢琴弹得很美。" },
        { en: "I have a piano lesson every Saturday.", zh: "我每周六都有钢琴课。" }
      ],
      fun: "钢琴有88个键（52个白键+36个黑键），是乐器之王。世界上弹钢琴最快的人一秒能弹19.5个音符！郎朗是中国最有名的钢琴家之一。",
      usage: "play the piano（弹钢琴，必须加 the）。piano 的复数是 pianos（不是 pianoes）。a grand piano = 三角钢琴。",
      visual: "一架巨大的钢琴长了两条腿在操场上跑步，monitor（班长）追在后面喊：'钢琴同学，回来上课！'钢琴边跑边弹，音符满天飞。",
      confuse: "piano vs. plane：piano（钢琴）和 plane（飞机）长得有点像，别搞混了！一个在地上弹，一个在天上飞。记住：piano 有 'i'，像钢琴的一个琴键。",
      rhyme: "piano piano 钢琴好，play the piano 别忘 the；弹琴加 the 打球不加，考试再也不出差。",
      scene: "【音乐教室场景】teach（老师教）你 play the piano（弹钢琴），你弹得 well（好），同学们都说你 ready（准备好了）可以上台表演了！"
    },
    {
      word: "ride",
      phonetic: "/raɪd/",
      pos: "v.",
      posClass: "v",
      meaning: "骑",
      root: {
        parts: [],
        explain: "来自古英语 rīdan，原义是'骑马'。随着时代变化，ride 从骑马扩展到了骑自行车、骑摩托车，甚至坐过山车也叫 ride！"
      },
      memory: "ride 谐音'入的'——骑上马就'入的'了（出发了）！或者 ride 里有 'r + ide'，i 像一个人坐在 d 上骑车。",
      family: ["rider（骑手）", "riding（骑马/骑车）", "rode（过去式）", "ridden（过去分词）"],
      synonyms: ["cycle（骑自行车）"],
      antonyms: [],
      sentences: [
        { en: "Can you ride a bike?", zh: "你会骑自行车吗？" },
        { en: "I ride my bike to school every day.", zh: "我每天骑自行车去学校。" }
      ],
      fun: "ride 的过去式是 rode，过去分词是 ridden——又一个不规则变化！theme park ride = 游乐园的游乐设施。在美国，ride 还可以表示'搭便车'，hitchhike a ride。",
      usage: "ride a bike/horse（骑自行车/马）。ride-rode-ridden 不规则变化要牢记。give someone a ride = 载某人一程。",
      visual: "一个小孩骑着一辆超级大的自行车飞上天空，经过一架 piano（钢琴）做的云朵，还差点撞到一块写着 board（布告板）的告示牌——这就是 ride 的疯狂旅程！",
      confuse: "ride vs. drive：ride 是骑（自行车、马），人坐在上面；drive 是驾驶（汽车）。你 ride a bike，但 drive a car，千万别说 ride a car！",
      rhyme: "ride ride 骑上去，自行车马都可以；ride rode ridden 记，不规则变化要牢记。",
      scene: "【上学路上场景】每天早上你 ride（骑）自行车去学校，到了学校先看 board（布告板）上的通知，then（然后）去 club（俱乐部）play tennis（打网球）。"
    },
    {
      word: "club",
      phonetic: "/klʌb/",
      pos: "n.",
      posClass: "n",
      meaning: "俱乐部",
      root: {
        parts: [],
        explain: "来自古挪威语 klubba（大头棒），最初指棍棒。后来人们聚在一起用棍棒运动（高尔夫球棍也叫 club），再后来就指'一群人的聚会场所'= 俱乐部。"
      },
      memory: "club 谐音'可乐吧'——俱乐部(club)里大家一起喝可乐(cola)吧！",
      family: ["clubhouse（俱乐部会所）", "book club（读书会）", "fan club（粉丝俱乐部）"],
      synonyms: ["association（协会）", "society（社团）", "group（小组）"],
      antonyms: [],
      sentences: [
        { en: "I'd like to join the music club.", zh: "我想加入音乐俱乐部。" },
        { en: "Our school has many clubs.", zh: "我们学校有很多俱乐部。" }
      ],
      fun: "扑克牌中的'梅花'在英语中叫 clubs，形状就像古代的棍棒头！golf club 既指'高尔夫球杆'也指'高尔夫俱乐部'，一词双关。",
      usage: "join a club = 加入俱乐部。school club = 学校社团。club 做动词时是'用棍棒打'的意思。",
      visual: "想象一个巨大的俱乐部大门，门口站着 monitor（班长）拿着花名册，里面有人 play the piano（弹钢琴），有人 play tennis（打网球），热闹得像个游乐场！",
      confuse: "club vs. class：club（俱乐部/社团）是自愿参加的兴趣小组，class（班级）是必须上的课。你 join a club（加入社团），但你 attend a class（上课）。",
      rhyme: "club club 俱乐部，课后活动好去处；would like 来加入，play 啥都能行。",
      scene: "【社团招新场景】新 term（学期）start（开始），board（布告板）上贴满了 club（俱乐部）招新通知，你 would like（想要）加入，monitor（班长）说：Don't worry（别担心），everyone is ready（大家都准备好了）欢迎你！"
    },
    {
      word: "term",
      phonetic: "/tɜːm/",
      pos: "n.",
      posClass: "n",
      meaning: "学期",
      root: {
        parts: [],
        explain: "来自拉丁语 terminus（界限、终点）。学期就是一段有'界限'的学习时间，有开始有结束。terminal（终点站）、terminate（终止）都是同根词。"
      },
      memory: "term 谐音'特么'——这学期(term)特么好难！每个学期(term)都有期末考试，让人头疼。",
      family: ["midterm（期中）", "long-term（长期的）", "short-term（短期的）", "terminal（终端/终点站）"],
      synonyms: ["semester（学期，美式）"],
      antonyms: [],
      sentences: [
        { en: "What clubs do you want to join this term?", zh: "这学期你想加入什么俱乐部？" },
        { en: "There are two terms in a school year.", zh: "一个学年有两个学期。" }
      ],
      fun: "英式英语一学年分三个 terms（秋季、春季、夏季学期），美式英语分两个 semesters（上学期和下学期）。中国通常也是两个学期制。",
      usage: "英式用 term，美式用 semester。in terms of = 在...方面（这是另一个常用短语）。",
      visual: "一本巨大的日历上写着 TERM，日历两端各有一道闪电墙（表示'界限'），start（开始）在左边，finish 在右边，你被困在中间疯狂写作业！",
      confuse: "term vs. team：term（学期）和 team（团队）只差一个字母！记住：term 有个 r，想成'日期(r=日)'——学期是一段日期。team 有个 a，想成'啊，一起'——团队是一起的。",
      rhyme: "term term 是学期，一年两次分得清；新 term 新 start 新开始，加入 club 学东西。",
      scene: "【开学场景】新 term（学期）start（开始）了，monitor（班长）在 board（布告板）上贴通知，teach（教）大家新规矩，everyone is ready（准备好了）迎接新学期！"
    },
    {
      word: "board",
      phonetic: "/bɔːd/",
      pos: "n.",
      posClass: "n",
      meaning: "布告板",
      root: {
        parts: [],
        explain: "来自古英语 bord（板子、桌面）。从一块木板出发，发展出了黑板(blackboard)、布告板(notice board)、滑板(skateboard)、甚至董事会(board of directors)——都和'板'有关！"
      },
      memory: "board 谐音'搏的'——在布告板(board)上贴成绩，是拼搏(搏的)的结果！",
      family: ["blackboard（黑板）", "whiteboard（白板）", "skateboard（滑板）", "keyboard（键盘）", "notice board（公告板）"],
      synonyms: ["notice board（布告栏）", "bulletin board（公告板）"],
      antonyms: [],
      sentences: [
        { en: "Let's put the information on the board.", zh: "让我们把信息贴在布告板上。" },
        { en: "There is a notice on the board about the new clubs.", zh: "布告板上有一则关于新俱乐部的通知。" }
      ],
      fun: "board 在不同场景有不同的意思：board a plane（登机）、board game（桌游）、room and board（食宿）。on board = 在船/飞机上。一个 board 走天下！",
      usage: "on the board = 在板上。board 做动词是'上（飞机/船）'：board a plane = 登机。boarding pass = 登机牌。",
      visual: "一块巨大的布告板突然活了过来，长出手脚，把 club（俱乐部）的招新海报甩得满天飞，monitor（班长）急得追着 board 跑，喊'别跑，把通知贴好！'",
      confuse: "board vs. broad：board（板子）和 broad（宽阔的）字母顺序不一样！board 的 o 在前面，想成'o 是个板子'；broad 的 r 在前面，想成'r 像一棵大树，很宽阔'。",
      rhyme: "board board 是块板，布告黑板和滑板；board 上写通知，club 招新看仔细。",
      scene: "【教室场景】教室前面有 board（布告板），monitor（班长）把新 term（学期）的 club（俱乐部）名单贴上去，大家围过来看自己 would like（想要）加入哪个。"
    },
    {
      word: "would like",
      phonetic: "/wʊd laɪk/",
      pos: "v.",
      posClass: "v",
      meaning: "想要",
      root: {
        parts: [],
        explain: "would（will 的过去式，表示委婉语气）+ like（喜欢）= 委婉地表达'想要'。比直接说 want 更有礼貌，是英语中最重要的礼貌用语之一。"
      },
      memory: "would like = 'would'（委婉）+ 'like'（喜欢）——委婉地说自己喜欢什么 = 想要。比 want 高级多了！",
      family: ["would like to do（想要做某事）", "would love to（非常想要）"],
      synonyms: ["want（想要，较直接）", "wish（希望）"],
      antonyms: [],
      sentences: [
        { en: "I would like to join the football club.", zh: "我想加入足球俱乐部。" },
        { en: "Would you like to play tennis with me?", zh: "你想和我打网球吗？" }
      ],
      fun: "would like 的缩写是 'd like：I'd like, You'd like。在餐厅点餐时说 'I'd like...' 比 'I want...' 礼貌得多，服务员会更喜欢你！",
      usage: "would like + 名词（I'd like a cup of tea）。would like + to do（I'd like to play the piano）。Would you like...? 是提建议/邀请的经典句型。",
      visual: "想象一个超级有礼貌的小绅士，戴着高帽子，鞠着躬说'I would like to play the piano'，旁边一个野孩子粗鲁地喊'I WANT!'——would like 就是那个有教养的绅士版本。",
      confuse: "would like vs. want：意思都是'想要'，但 would like 更礼貌。考试时 would like = want，但语气不同。Would you like...?（委婉邀请）vs. Do you want...?（直接询问）。",
      rhyme: "would like 想要很客气，比起 want 高几级；后跟 to do 要牢记，礼貌表达人人喜。",
      scene: "【点餐/选社团场景】Would you like to join a club（你想加入俱乐部吗）？I'd like to play tennis（我想打网球）！Don't worry about（别担心）选哪个，monitor（班长）会 teach（教）你。"
    },
    {
      word: "well",
      phonetic: "/wel/",
      pos: "adv.",
      posClass: "adv",
      meaning: "好地",
      root: {
        parts: [],
        explain: "来自古英语 wel（好地、满意地）。注意 well 是副词修饰动词，good 是形容词修饰名词。She sings well.（她唱得好）vs. She is a good singer.（她是好歌手）"
      },
      memory: "well 和 '喂哦' 谐音——做得好(well)的时候别人会惊叹'喂哦'！well 还有'井'的意思——井里的水好(well)喝。",
      family: ["well-known（著名的）", "well-done（做得好/全熟的）", "as well（也）"],
      synonyms: ["nicely（好地）", "skillfully（熟练地）"],
      antonyms: ["badly（糟糕地）", "poorly（差劲地）"],
      sentences: [
        { en: "She plays the piano very well.", zh: "她钢琴弹得非常好。" },
        { en: "I can't speak English very well.", zh: "我英语说得不太好。" }
      ],
      fun: "well 做感叹词时表示犹豫或开场：'Well, let me think...'（嗯，让我想想...）。英国人特别爱说 well 来拖时间思考——这是很地道的英式表达！",
      usage: "good 修饰名词（a good student），well 修饰动词（study well）。well 做形容词只在表示'身体健康'时用：I'm well.（我身体很好）",
      visual: "一口古老的水井(well)里住着一个小精灵，谁做事做得好(well)，它就从井里跳出来撒花庆祝——所以 well 既是'井'又是'好'！",
      confuse: "well vs. good：这是考试最爱考的！good 是形容词修饰名词（a good player），well 是副词修饰动词（play well）。不能说 play good，要说 play well！",
      rhyme: "well well 是副词，修饰动词要记准；good 来修饰名词用，get on well with 处得好。",
      scene: "【表演场景】你 play the piano（弹钢琴）弹得很 well（好），get on well with（和...相处融洽）同学们，大家都说你 ready（准备好了）can teach（能教）别人了！"
    },
    {
      word: "that's all",
      phonetic: "/ðæts ɔːl/",
      pos: "adv.",
      posClass: "adv",
      meaning: "就这些；仅此而已",
      root: {
        parts: [],
        explain: "that's = that is（那就是）+ all（全部）= 那就是全部了 = 就这些。简洁明了的结束语，用来表示说完了或没有更多了。"
      },
      memory: "that's all = that is all——'那就是所有的了'，就像说完话画了一个句号。想想《这就是全部》。",
      family: ["that is（那是）", "all（全部）", "all in all（总的来说）"],
      synonyms: ["that's it（就这样）", "nothing more（没有更多了）"],
      antonyms: [],
      sentences: [
        { en: "I can play the piano and the guitar. That's all.", zh: "我会弹钢琴和吉他。就这些了。" },
        { en: "That's all for today's class.", zh: "今天的课就到这里。" }
      ],
      fun: "\"That's all, folks!\" 是经典动画《乐一通》(Looney Tunes)结尾的名台词，由猪小弟(Porky Pig)说出。这句话已经成了美国流行文化的标志！",
      usage: "That's all. 用在句末表示结束。That's all for today.（今天就到这里。）Is that all?（就这些吗？）在商店里表示'不需要别的了'。",
      visual: "想象一个魔术师表演完所有节目，大幕落下，他潇洒地鞠躬说'That's all!'——然后舞台灯光全灭，观众疯狂鼓掌。就这么干脆利落！",
      confuse: "that's all vs. that's it：两个都表示'就这些'，但 that's it 有时带点不耐烦或'受够了'的语气（That's it! I'm leaving! 够了！我走了！），而 that's all 更平和。",
      rhyme: "that's all 就这些，说完收工画句号；考试写完检查好，that's all 交卷笑一笑。",
      scene: "【自我介绍场景】I can play the piano（我会弹钢琴），play tennis（打网球），ride a bike（骑自行车）. That's all（就这些）！monitor（班长）说 well done（做得好）！"
    },
    {
      word: "worry",
      phonetic: "/ˈwʌri/",
      pos: "v.",
      posClass: "v",
      meaning: "担心",
      root: {
        parts: [],
        explain: "来自古英语 wyrgan（掐喉咙、使窒息）。担心的感觉就像被人掐住了脖子，喘不过气来——这个词源太形象了！"
      },
      memory: "worry 谐音'我瑞'——'我'很'瑞'（累），因为太担心(worry)了！担心确实让人很累。",
      family: ["worried（形容词：担心的）", "worrying（令人担忧的）", "worrier（爱担心的人）"],
      synonyms: ["concern（担忧）", "fret（焦虑）"],
      antonyms: ["relax（放松）"],
      sentences: [
        { en: "Don't worry! I can help you.", zh: "别担心！我能帮你。" },
        { en: "My mum always worries about me.", zh: "我妈妈总是担心我。" }
      ],
      fun: "英语中 Don't worry, be happy! 是一首超级经典的歌，由 Bobby McFerrin 演唱。这首歌的旋律听一遍就忘不了，被称为世界上最治愈的歌曲之一。",
      usage: "worry about + 某事/某人（担心某事/某人）。Don't worry.（别担心。）是最常见的安慰用语。worried 是形容词：I'm worried about the exam.（我担心考试。）",
      visual: "一个人的头上冒出好多小黑云，每朵云上写着一件担心的事——考试、作业、迟到——这些云越来越多，把人压得矮了一截。这就是 worry 的样子！",
      confuse: "worry vs. hurry：worry（担心）和 hurry（赶快）发音和拼写都有点像。记住：worry 有个 w，'w' 像皱着的眉头（担心时皱眉）；hurry 有个 h，'h' 像一个人跑步的样子（赶快）。",
      rhyme: "worry worry 别担心，Don't worry 挂嘴边；worry about 接对象，考试成绩都能用。",
      scene: "【考前场景】考试前你很 worry（担心），monitor（班长）说：Don't worry about（别担心）it，I can teach（教）you，then（然后）you'll be ready（准备好）！"
    },
    {
      word: "worry about",
      phonetic: "/ˈwʌri əˈbaʊt/",
      pos: "v.",
      posClass: "v",
      meaning: "担心",
      root: {
        parts: [],
        explain: "worry（担心）+ about（关于）= 担心关于某事。about 限定了担心的对象，让表达更加具体。"
      },
      memory: "worry about = 担心(worry) + 关于(about)——担心'关于'什么事。Don't worry about it! 是最常见的口语表达。",
      family: ["worried about（对...感到担心的）", "nothing to worry about（没什么好担心的）"],
      synonyms: ["be concerned about（对...担忧）", "care about（在乎）"],
      antonyms: [],
      sentences: [
        { en: "Don't worry about your English. I can teach you.", zh: "别担心你的英语，我可以教你。" },
        { en: "She worries about the exam every day.", zh: "她每天都担心考试。" }
      ],
      fun: "心理学研究表明，我们担心的事情有85%从来不会真的发生！所以下次担心的时候想想：Don't worry about it, it probably won't happen!",
      usage: "worry about 后面接名词或动名词：worry about the test（担心考试），worry about losing（担心失去）。注意不说 worry for（错误用法）。",
      visual: "想象 worry 是一只小怪兽，about 是一根绳子，绳子另一头拴着让你担心的东西（考试卷、迟到的闹钟）——worry about 就是这只怪兽拉着你往烦恼的方向走！",
      confuse: "worry about vs. worry（单独用）：worry 单独用是'担心'的状态（Don't worry 别担心），worry about 后面要接具体对象（worry about the exam 担心考试）。考试常考 worry about 的搭配！",
      rhyme: "worry about 担心啥，about 后面接上它；考试成绩和作业，Don't worry about 全不怕。",
      scene: "【互相安慰场景】同学 worry about（担心）新 term（学期）的学习，你说 Don't worry，我们 get on well with（相处融洽）大家，还有老师 teach（教）我们，一切都会 well（好的）！"
    },
    {
      word: "teach",
      phonetic: "/tiːtʃ/",
      pos: "v.",
      posClass: "v",
      meaning: "教",
      root: {
        parts: [],
        explain: "来自古英语 tǣcan（展示、指导）。和德语 zeigen（展示）同源。教学的本质就是'展示给别人看'，非常贴切！"
      },
      memory: "teach 谐音'提起'——老师(teach)提起粉笔在黑板上写字教学生！或者 tea + ch → 喝茶(tea)时聊天(ch)就是教(teach)。",
      family: ["teacher（老师）", "teaching（教学）", "taught（过去式/过去分词）"],
      synonyms: ["instruct（指导）", "educate（教育）", "train（训练）"],
      antonyms: ["learn（学习）", "study（学习）"],
      sentences: [
        { en: "Miss Li teaches us English.", zh: "李老师教我们英语。" },
        { en: "Can you teach me to play the piano?", zh: "你能教我弹钢琴吗？" }
      ],
      fun: "teach-taught-taught 是不规则变化，和 catch-caught-caught 的变化规律一样！教师节在中国是9月10日，在世界教师日是10月5日。",
      usage: "teach + 人 + 科目：teach us English（教我们英语）。teach + 人 + to do：teach me to swim（教我游泳）。注意过去式是 taught，不是 teached！",
      visual: "一个老师站在讲台上，一只手拿着 tennis（网球拍），另一只手弹 piano（钢琴），嘴里还在讲课——这位超级老师什么都能 teach！学生们看呆了，嘴巴张成 O 形。",
      confuse: "teach vs. learn：teach 是'教'（老师做的），learn 是'学'（学生做的）。千万别说 The teacher learns us English（错！），要说 The teacher teaches us English。这是中国学生最容易搞混的！",
      rhyme: "teach teach 教一教，taught taught 是过去；teach 人 to do 是句型，teach 人 科目也能行。",
      scene: "【师生互动场景】老师 teach（教）我们 play the piano（弹钢琴），then（然后）我们在 club（俱乐部）里互相 teach，大家 get on well with（相处融洽）each other。"
    },
    {
      word: "then",
      phonetic: "/ðen/",
      pos: "adv.",
      posClass: "adv",
      meaning: "那么；就",
      root: {
        parts: [],
        explain: "来自古英语 þanne（在那时），和 than（比...）以及 the（那个）是远亲。都和'那'有关系。"
      },
      memory: "then 谐音'怎'——'那么(then)怎办？'then 就是'那么'的意思，用来引出下一步。",
      family: ["and then（然后）", "since then（从那时起）", "now and then（偶尔）"],
      synonyms: ["next（接下来）", "afterwards（之后）"],
      antonyms: [],
      sentences: [
        { en: "I like music. Then join the music club!", zh: "我喜欢音乐。那就加入音乐俱乐部吧！" },
        { en: "First do your homework, and then you can play.", zh: "先做作业，然后你就可以玩了。" }
      ],
      fun: "then 是英语中使用频率最高的词之一。在讲故事时特别好用：'And then... and then... and then...'（然后...然后...然后...）——不过写作文时不要一直用 then 哦，要换不同的连接词！",
      usage: "then 有三个主要意思：① 那么（表推断）：Then let's go!（那我们走吧！）② 然后（表顺序）：first...then...（先...然后...）③ 那时（表时间）：I was ten then.（那时我十岁。）",
      visual: "想象一条路上有好多路标箭头，每个箭头上都写着 THEN，指向下一个目的地——先到 club（俱乐部），then 到 piano（钢琴）教室，then 去 play tennis（打网球）——then 就是带你去下一站的指路牌！",
      confuse: "then vs. than：then（那么/然后）和 than（比）只差一个字母！记住：then 有 e，想成'顺序(e=二，第二步)'；than 有 a，想成'比较(a=啊，比一比啊)'。",
      rhyme: "then then 那么就，连接前后像纽扣；first 先来 then 再到，讲话写作顺序好。",
      scene: "【做决定场景】你 would like（想要）play tennis（打网球），then（那么）join the tennis club（加入网球俱乐部）！Don't worry about（别担心）anything，start（开始）行动吧！"
    },
    {
      word: "monitor",
      phonetic: "/ˈmɒnɪtə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "班长",
      root: {
        parts: [
          { text: "monit-", type: "root", label: "拉丁语 monere = 提醒、警告" },
          { text: "-or", type: "suffix", label: "做...的人/物" }
        ],
        explain: "来自拉丁语 monitor（提醒者）。班长就是'提醒大家的人'。同根词 monument（纪念碑=提醒人的东西）、admonish（告诫=向某人提醒）。"
      },
      memory: "monitor 谐音'莫逆它'——班长(monitor)说的话莫逆(不要违背)它！或者想到电脑显示器也叫 monitor。",
      family: ["monitoring（监控）", "class monitor（班长）"],
      synonyms: ["prefect（学长，英式学校）"],
      antonyms: [],
      sentences: [
        { en: "I'd like to be the class monitor.", zh: "我想当班长。" },
        { en: "The monitor helps the teacher in class.", zh: "班长在课堂上帮助老师。" }
      ],
      fun: "monitor 有很多意思：班长、显示器、监控器，甚至还有一种叫 monitor lizard（巨蜥）的蜥蜴！据说因为巨蜥会在鳄鱼来之前发出警报'提醒'其他动物。",
      usage: "class monitor = 班长。computer monitor = 电脑显示器。heart monitor = 心电监测器。monitor 做动词是'监控'的意思。",
      visual: "班长(monitor)变身成一台巨大的电脑显示器(monitor)，屏幕上显示着全班同学的名字，谁没交作业屏幕就闪红光，班长用大喇叭喊：'交作业！'——monitor 既是班长又是显示器！",
      confuse: "monitor vs. monster：monitor（班长/显示器）和 monster（怪物）长得有点像！别把班长写成怪物了。记住：monitor 有 'i'，i 像一个站得笔直的班长；monster 有 's'，s 像蛇一样的怪物。",
      rhyme: "monitor 是班长，提醒同学不能忘；显示器也叫这个，一词多义要记牢。",
      scene: "【班级管理场景】monitor（班长）在 board（布告板）上写通知，teach（教）大家新规矩，get on well with（和...相处融洽）every classmate，确保大家 ready（准备好）for the new term（新学期）。"
    },
    {
      word: "start",
      phonetic: "/stɑːt/",
      pos: "v.",
      posClass: "v",
      meaning: "开始",
      root: {
        parts: [],
        explain: "来自古英语 styrtan（跳起来）。开始做某事就像突然'跳起来'行动——起跑时运动员不就是跳起来的吗？"
      },
      memory: "start 里有 'star'（星星）+ t——像星星(star)一样闪亮地开始(start)！每个开始都是一颗新星。",
      family: ["starter（启动器/开胃菜）", "starting（开始的）", "restart（重新开始）", "start-up（初创公司）"],
      synonyms: ["begin（开始）", "commence（开始，正式用语）"],
      antonyms: ["stop（停止）", "end（结束）", "finish（完成）"],
      sentences: [
        { en: "Let's start the lesson.", zh: "我们开始上课吧。" },
        { en: "School starts at eight o'clock.", zh: "学校八点钟开始上课。" }
      ],
      fun: "start-up（初创公司）是硅谷最热门的词之一。很多世界级大公司都是从车库里 start（起步）的：苹果、谷歌、亚马逊——万事开头难，但坚持就能成功！",
      usage: "start + doing / start + to do（开始做某事），两种形式都可以。start with（从...开始）：Let's start with Unit 1.（让我们从第一单元开始。）",
      visual: "一位运动员站在起跑线上，发令枪一响——BANG！——他像星星(star)一样射出去，身后拖着一道闪亮的尾巴。这就是 start，一切从这一刻开始！",
      confuse: "start vs. begin：两个都是'开始'，基本可以互换。但 start 更口语化，begin 更正式。另外 start a car（启动汽车）不能用 begin。考试中两个词都可以用。",
      rhyme: "start start 开始了，star 加 t 闪闪亮；新学期新 start，join the club 加油干。",
      scene: "【新学期开始场景】新 term（学期）start（开始）了，monitor（班长）说大家 ready（准备好了）吗？then（那么）let's start! Would like（想要）加入 club（俱乐部）的快去 board（布告板）看通知！"
    },
    {
      word: "get on well with",
      phonetic: "/ˌɡet ɒn ˈwel wɪð/",
      pos: "v.",
      posClass: "v",
      meaning: "与...相处融洽",
      root: {
        parts: [],
        explain: "get on（相处）+ well（好地）+ with（和...一起）= 和某人相处得很好。get on 的本义是'上车、前进'，和人一起'前进'得好就是相处融洽。"
      },
      memory: "get on well with = 'get on'（上车/前进）+ 'well'（好地）+ 'with'（和）——想象和朋友一起'上车'，旅途'很好'，就是相处融洽！",
      family: ["get along with（与...相处，同义短语）", "get on（相处/上车）"],
      synonyms: ["get along with（与...和睦相处）"],
      antonyms: ["fall out with（与...闹翻）"],
      sentences: [
        { en: "I get on well with my classmates.", zh: "我和同学们相处融洽。" },
        { en: "She gets on well with everyone in the club.", zh: "她和俱乐部里的每个人都相处得很好。" }
      ],
      fun: "get on well with 是英式英语的说法，美式英语更常用 get along well with。但不管哪种说法，在学校里与同学相处融洽都是很重要的社交技能！",
      usage: "get on well with + 人。注意主语是第三人称单数时要用 gets：He gets on well with his teacher. 否定形式：don't get on well with。",
      visual: "想象一辆大巴车，你和朋友们一起 get on（上车），车上放着欢快的音乐，大家有说有笑——这辆'友谊号'巴士开得 well（好），就是 get on well with 的画面！",
      confuse: "get on well with vs. get on with：get on well with 强调相处'融洽'（有 well），get on with 可以只是'相处'或者'继续做某事'（get on with your work 继续工作）。别忘了中间的 well！",
      rhyme: "get on well with 处得好，同学朋友不能少；well 在中间是关键，和睦相处乐陶陶。",
      scene: "【交朋友场景】在 club（俱乐部）里，你 get on well with（和...相处融洽）同学们，一起 play tennis（打网球），一起 ride（骑）自行车，Don't worry about（别担心）交不到朋友！"
    },
    {
      word: "ready",
      phonetic: "/ˈredi/",
      pos: "adj.",
      posClass: "adj",
      meaning: "乐意的；准备好的",
      root: {
        parts: [],
        explain: "来自古英语 rǣde（准备好的、安排好的）。和 ride 同源——骑马前要做好准备(ready)！"
      },
      memory: "ready 谐音'瑞的'——准备好(ready)了就是'瑞'（好）'的'！Ready? Go!（准备好了吗？走！）",
      family: ["already（已经）", "readily（乐意地/容易地）", "readiness（准备就绪）"],
      synonyms: ["prepared（准备好的）", "willing（乐意的）", "set（准备好的）"],
      antonyms: ["unprepared（没准备好的）"],
      sentences: [
        { en: "Are you ready for the new term?", zh: "你为新学期准备好了吗？" },
        { en: "I'm always ready to help others.", zh: "我总是乐意帮助别人。" }
      ],
      fun: "Ready, set, go!（预备，各就各位，跑！）是赛跑发令的经典口令。英语还有个短语 ready or not, here I come!（准备好没有，我来了！）——这是捉迷藏时说的经典台词！",
      usage: "be ready for + 名词（为...做好准备）：ready for the exam。be ready to + 动词（准备好做/乐意做）：ready to help。get ready = 做准备。",
      visual: "一个超级英雄站在学校门口，披风飘飘，胸前大写字母 R（Ready），一手拿着 tennis（网球拍），一手拿着书包，大喊：'I'm READY for the new term!'——准备好拯救新学期！",
      confuse: "ready vs. already：ready（准备好的）是形容词，already（已经）是副词。长得像是因为 already 里面藏着 ready！记住：already = al + ready，'全都(al)准备好了(ready)' = 已经。",
      rhyme: "ready ready 准备好，新学期来报个到；ready for 加名词，ready to 加动词。",
      scene: "【开学准备场景】新 term（学期）要 start（开始）了，你 ready（准备好了）吗？Would like（想要）join a club（加入俱乐部）？Don't worry（别担心），monitor（班长）会 teach（教）你 get on well with（和大家相处融洽）！That's all（就这些）！"
    }
  ]
};

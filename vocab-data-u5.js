// Unit 5: Shopping (Module 5 外研版七年级下册)
const UNIT5 = {
  id: 5,
  title: "Shopping",
  theme: "购物",
  color: "#06b6d4",
  words: [
    {
      word: "market",
      phonetic: "/ˈmɑːkɪt/",
      pos: "n.",
      posClass: "n",
      meaning: "市场",
      root: {
        parts: [],
        explain: "来自拉丁语 mercatus（贸易、买卖），和 merchant（商人）、Mercury（水星/商业之神墨丘利）同源。古罗马人在墨丘利神庙附近做生意，所以贸易相关的词都跟这位神仙有关！"
      },
      memory: "market 里藏着 mark（标记）——市场里每样东西都要标记价格(mark the price)！",
      family: ["marketing（市场营销）", "marketplace（市场；集市）", "supermarket（超市）"],
      synonyms: ["bazaar（集市）", "fair（集市）"],
      antonyms: [],
      sentences: [
        { en: "Let's go to the market to buy some fruit.", zh: "我们去市场买些水果吧。" },
        { en: "There is a flower market near my school.", zh: "我的学校附近有一个花市。" }
      ],
      fun: "全球最大的市场是中国义乌小商品市场，有7.5万个摊位！英语里 black market（黑市）指非法买卖的地方，flea market（跳蚤市场）指卖二手货的地方——当然不是真的卖跳蚤！",
      usage: "go to the market = 去市场。注意 market 前常加 the。on the market = 在出售中。",
      visual: "想象一个巨大的菜市场，每个摊位的老板都在用记号笔(mark)疯狂地在菜上写价格，连西瓜上都密密麻麻写满了数字，鱼还活着就被标了价，气得直蹦！",
      confuse: "market vs. mart：mart 是 market 的缩写，常用于商店名（如 Walmart 沃尔玛）。market 更强调传统市场、菜市场，mart 更偏向大型零售店。",
      rhyme: "market 有个 mark，价格标上去不能忘；去了市场别乱逛，货比三家最在行！",
      scene: "【菜市场买菜】market（市场）、fresh（新鲜的）、strawberry（草莓）、price（价格）、half（一半）、pay（付款）——去 market 买 fresh 的 strawberry，问 price，砍到 half，然后 pay！"
    },
    {
      word: "supermarket",
      phonetic: "/ˈsuːpəmɑːkɪt/",
      pos: "n.",
      posClass: "n",
      meaning: "超市",
      root: {
        parts: ["super-（超级的）", "market（市场）"],
        explain: "super（超级）+ market（市场）= 超级大市场！super- 来自拉丁语，表示'在上面、超越'。1930年美国出现了第一家超市，比普通市场大得多，所以叫 supermarket。"
      },
      memory: "super（超级）+ market（市场）= 超级市场 = 超市！简单直接的合成词，和中文'超市'的构词逻辑一模一样！",
      family: ["super（超级的）", "market（市场）", "hypermarket（大卖场）"],
      synonyms: ["grocery store（杂货店）"],
      antonyms: [],
      sentences: [
        { en: "My mum goes to the supermarket every weekend.", zh: "我妈妈每个周末都去超市。" },
        { en: "You can buy almost everything in a supermarket.", zh: "在超市里你几乎什么都能买到。" }
      ],
      fun: "世界上第一家真正意义上的超市是1930年在美国纽约开业的King Kullen。当时人们震惊了：居然可以自己拿东西不用让店员帮忙拿！这种'自选式购物'在当时是革命性的。",
      usage: "at the supermarket = 在超市。go to the supermarket = 去超市。中国常见的超市英文名：Walmart（沃尔玛）、Carrefour（家乐福）。",
      visual: "想象超人(Superman)穿着红披风在超市里飞来飞去购物，一手拎着十袋牛奶，一手拿着二十箱鸡蛋，收银员吓得目瞪口呆——这就是超级(super)市场(market)！",
      confuse: "supermarket vs. mall：supermarket（超市）主要卖食品和日用品；mall（购物中心）是很多不同商店的集合，卖衣服、电子产品等各种东西。超市是 mall 里的一部分。",
      rhyme: "超级市场 supermarket，什么都有随便拿；super 超级 market 场，推着小车逛一趟！",
      scene: "【周末超市大采购】supermarket（超市）、product（产品）、price（价格）、fresh（新鲜的）、pay（付款）、sale（特价销售）——周末去 supermarket，挑 fresh 的 product，看 price，碰上 sale 赶紧 pay！"
    },
    {
      word: "price",
      phonetic: "/praɪs/",
      pos: "n.",
      posClass: "n",
      meaning: "价格",
      root: {
        parts: [],
        explain: "来自拉丁语 pretium（价值、代价），经过古法语 pris 变成英语 price。和 precious（珍贵的）、praise（赞美）、prize（奖品）都是亲戚——价值高的东西才值得赞美和获奖！"
      },
      memory: "price 谐音'拍死'——如果价格(price)太贵，真想一巴掌拍死！也可以记：pr-ice，'冰'(ice)的价格。",
      family: ["priceless（无价的）", "pricey/pricy（昂贵的）", "pricing（定价）"],
      synonyms: ["cost（费用）", "value（价值）"],
      antonyms: [],
      sentences: [
        { en: "What's the price of this T-shirt?", zh: "这件T恤的价格是多少？" },
        { en: "The price is too high.", zh: "价格太高了。" }
      ],
      fun: "priceless 字面意思是'没有价格的'，但实际意思是'无价之宝'——太珍贵了无法标价！而 worthless 才是'毫无价值的'。这两个词经常让中国学生搞混。",
      usage: "at a price of... = 以...的价格。half price = 半价。注意区分 price（价格标签上的数字）和 cost（实际花费）。",
      visual: "想象一块冰(ice)上面插着一个巨大的价格标签，标价一百万！你伸手去摸，冰太贵了你买不起，它骄傲地说：'我是 pr-ice，冰中贵族！'",
      confuse: "price vs. cost vs. value：price 是标签上的价格（卖家定的）；cost 是你实际花的钱（买家付的）；value 是东西真正值多少（内在价值）。一件衣服 price 500元，cost 你300元（打折了），value 可能只有100元。",
      rhyme: "price 价格看仔细，贵了便宜要对比；half price 半价最欢喜，货比三家不吃亏！",
      scene: "【讨价还价】price（价格）、half price（半价）、sale（特价）、on sale（特价出售）、compare（比较）、pay（付款）——先看 price，等 on sale，compare 一番，half price 最好，然后开心 pay！"
    },
    {
      word: "strawberry",
      phonetic: "/ˈstrɔːbəri/",
      pos: "n.",
      posClass: "n",
      meaning: "草莓",
      root: {
        parts: ["straw（稻草）", "berry（浆果）"],
        explain: "straw（稻草）+ berry（浆果）= 草莓。为什么叫'稻草浆果'？一种说法是草莓的种子散落在地上像铺了一层稻草(straw)；另一种说法是农民用稻草盖住草莓保鲜。"
      },
      memory: "straw（吸管/稻草）+ berry（浆果）——用吸管(straw)插着吃的浆果(berry)就是草莓！",
      family: ["blueberry（蓝莓）", "raspberry（覆盆子）", "blackberry（黑莓）", "cranberry（蔓越莓）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "I'd like half a kilo of strawberries, please.", zh: "请给我半公斤草莓。" },
        { en: "Strawberries are my favourite fruit.", zh: "草莓是我最喜欢的水果。" }
      ],
      fun: "草莓其实不是真正的'浆果'(berry)！从植物学上说，草莓是一种'假果'，表面的小颗粒才是真正的果实。而香蕉、西瓜反倒是真正的浆果——植物学家和普通人的分类完全不同！",
      usage: "strawberry 是可数名词，复数是 strawberries（y 变 i 加 es）。strawberry jam = 草莓酱，strawberry cake = 草莓蛋糕。",
      visual: "想象一颗巨大的草莓坐在一堆稻草(straw)上面，像个国王一样，身上的小籽儿全是小眼睛，骄傲地宣布：'我是浆果(berry)家族最红的明星！'旁边的蓝莓嫉妒得发紫。",
      confuse: "strawberry vs. blueberry vs. raspberry：这三个都是 berry 家族。straw（稻草）+ berry = 草莓；blue（蓝色）+ berry = 蓝莓；rasp（锉刀，表面粗糙）+ berry = 覆盆子。记住颜色和特征就不会搞混！",
      rhyme: "稻草上面结浆果，strawberry 草莓红又多；berry 家族兄弟多，蓝莓黑莓一起说！",
      scene: "【水果摊买水果】strawberry（草莓）、fresh（新鲜的）、price（价格）、half（一半）、market（市场）、size（大小）——在 market 上看到 fresh 的 strawberry，size 又大又红，问了 price，买了 half 斤！"
    },
    {
      word: "size",
      phonetic: "/saɪz/",
      pos: "n.",
      posClass: "n",
      meaning: "尺码；大小",
      root: {
        parts: [],
        explain: "来自古法语 sise，原意是'规定的量'，和 assizes（巡回审判）同源。中世纪法官规定面包和啤酒的标准'大小'，这就是 size 最早的意思。"
      },
      memory: "size 发音像'赛子'——骰子(dice)有大有小，需要量尺寸(size)！也可以记：s + ize，'s 号的尺码'。",
      family: ["sized（...大小的）", "sizable/sizeable（相当大的）", "resize（调整大小）", "oversize（超大号的）"],
      synonyms: ["dimension（尺寸）", "measurement（测量值）"],
      antonyms: [],
      sentences: [
        { en: "What size do you take?", zh: "你穿多大号的？" },
        { en: "This size is too small for me.", zh: "这个尺码对我来说太小了。" }
      ],
      fun: "衣服尺码在不同国家完全不同！中国的 L 号可能是美国的 S 号。所以出国买衣服一定要试穿。常见尺码：S(Small)、M(Medium)、L(Large)、XL(Extra Large)。",
      usage: "What size...? 问尺码。size 也可以表示一般的大小：the size of a football = 足球那么大。",
      visual: "想象你走进一家服装店，衣服的尺码标签突然变成巨大的气球飘在空中——S号气球小得像乒乓球，XL号气球大得把天花板顶破了，店员拿着尺子满场追气球量尺寸！",
      confuse: "size vs. scale：size 指具体的大小/尺码（What size shoes do you wear?）；scale 指规模或比例（on a large scale 大规模）。买衣服问 size，讨论规模用 scale。",
      rhyme: "买衣服先问 size，S M L 要记清；大小合适才舒服，试穿之后再决定！",
      scene: "【买衣服试穿】size（尺码）、try on（试穿）、take（买下）、certainly（当然）、wait（等待）、pay（付款）——问 size，try on 合适，certainly 要 take，wait 一下去 pay！"
    },
    {
      word: "take",
      phonetic: "/teɪk/",
      pos: "v.",
      posClass: "v",
      meaning: "买下；拿",
      root: {
        parts: [],
        explain: "来自古北欧语 taka（抓、拿），维京人入侵英格兰时带来的词。这个词取代了原来的古英语 niman（拿），成为英语中最常用的动词之一。"
      },
      memory: "take 谐音'太可'——这件东西太可以了，我要买下(take)它！",
      family: ["taken（过去分词）", "took（过去式）", "taking（现在分词）", "taker（接受者）"],
      synonyms: ["buy（购买）", "grab（抓取）", "get（得到）"],
      antonyms: ["give（给）", "return（退还）"],
      sentences: [
        { en: "I'll take it.", zh: "我买下它了。" },
        { en: "Can I take this book home?", zh: "我可以把这本书带回家吗？" }
      ],
      fun: "take 是英语里含义最多的动词之一，有上百种搭配！take a photo（拍照）、take a bus（乘公交）、take a shower（洗澡）、take a break（休息）——一个 take 走天下！",
      usage: "购物时 I'll take it. = 我要买下它。注意 take 的过去式是 took，不规则变化！take 和 bring 的区别：take 是带走，bring 是带来。",
      visual: "想象你在商店里看中一件衣服，兴奋地把它一把抓(take)过来高高举起，大喊'I'll take it!'，结果用力太猛，把模特的胳膊也拽了下来，店员惊恐地看着你。",
      confuse: "take vs. bring：take 是从这里'带走'到别处（Take this to your teacher.）；bring 是从别处'带来'到这里（Bring your homework to school.）。记住：take 离开，bring 过来！",
      rhyme: "take 买下拿走带，took 过去要记牢；I'll take it 购物用，带走付钱就行了！",
      scene: "【商场结账】take（买下）、pay（付款）、by（通过）、receive（收到）、price（价格）、sale（特价）——看中了就 take，看看 price，有没有 sale，by 微信 pay，最后 receive 购物袋！"
    },
    {
      word: "try",
      phonetic: "/traɪ/",
      pos: "v.",
      posClass: "v",
      meaning: "尝试",
      root: {
        parts: [],
        explain: "来自古法语 trier（挑选、审查），最初的意思是在法庭上'审查、审判'——法官 try 一个案子就是'审理'案件。后来意思扩展为'尝试做某事'。"
      },
      memory: "try 谐音'踹'——想成功就要不断踹门(try)尝试！也可以记：t + ry，'他(t)让你(ry)尝试'。",
      family: ["tried（过去式）", "trying（令人烦恼的；尝试中的）", "trial（试验；审判）"],
      synonyms: ["attempt（尝试）", "test（测试）"],
      antonyms: ["give up（放弃）", "quit（放弃）"],
      sentences: [
        { en: "Can I try this cake?", zh: "我可以尝尝这个蛋糕吗？" },
        { en: "Try again! Don't give up.", zh: "再试一次！不要放弃。" }
      ],
      fun: "英语谚语 'If at first you don't succeed, try, try again.'（如果第一次不成功，就试了再试。）这句话据说来自苏格兰国王罗伯特·布鲁斯，他看到蜘蛛反复织网后受到启发。",
      usage: "try to do sth = 尝试做某事。try doing sth = 试着做做看（看效果如何）。两个结构意思略有不同：try to do 强调'努力尝试'，try doing 强调'试试看效果'。",
      visual: "想象一只小猫反复尝试(try)跳上桌子，第一次摔了个四脚朝天，第二次撞到桌腿，第三次终于跳上去了——结果发现桌上什么吃的都没有，又气呼呼地跳了下来。",
      confuse: "try to do vs. try doing：try to do = 努力尝试做（I tried to open the door. 我努力想打开门——可能没打开）；try doing = 试试看效果（I tried opening the window. 我试了一下开窗——看看会不会凉快）。",
      rhyme: "try 尝试不怕难，失败了就再试一遍；try on 试穿 try out 试用，勇敢尝试是好汉！",
      scene: "【试吃试穿】try（尝试）、try on（试穿）、size（尺码）、certainly（当然）、take（买下）——先 try 尝一口，再 try on 穿一下，size 刚好，certainly 满意，I'll take it！"
    },
    {
      word: "try on",
      phonetic: "/traɪ ɒn/",
      pos: "v.",
      posClass: "v",
      meaning: "试穿",
      root: {
        parts: ["try（尝试）", "on（穿上）"],
        explain: "try（尝试）+ on（穿上）= 尝试穿上 = 试穿。on 在这里表示'穿上'的状态，类似 put on（穿上）。"
      },
      memory: "try（尝试）+ on（穿上）——穿上(on)试试(try)看合不合适！购物必备短语。",
      family: ["try out（试用）", "put on（穿上）", "take off（脱下）"],
      synonyms: ["fit on（试穿）"],
      antonyms: ["take off（脱下）"],
      sentences: [
        { en: "Can I try on this dress?", zh: "我可以试穿这条裙子吗？" },
        { en: "Try it on before you buy it.", zh: "买之前先试穿一下。" }
      ],
      fun: "在英国和美国的商店里，试衣间叫 fitting room 或 dressing room。有些商店限制你一次只能带几件衣服进试衣间。而在中国，网购退换货非常方便，所以很多人直接买回家试！",
      usage: "try on 是可分离短语动词：代词放中间 try it on，名词可以放中间也可以放后面 try on the coat / try the coat on。",
      visual: "想象你在试衣间里同时试穿(try on)了十件衣服，全部套在身上变成了一个大球，卡在试衣间门口出不来了，店员急得在外面喊：'一件一件试啊！'",
      confuse: "try on vs. put on vs. wear：try on = 试穿（看合不合适，可能不买）；put on = 穿上（穿上就不脱了）；wear = 穿着（强调穿的状态）。I try on the coat, then put it on, and wear it all day.",
      rhyme: "try on 试穿看合适，代词放中间别忘记；try it on 是对的，try on it 可不行！",
      scene: "【试衣间里】try on（试穿）、size（尺码）、certainly（当然）、wait（等待）、take（买下）、pay（付款）——Can I try on this? Certainly! 找对 size，wait 一下照镜子，满意就 take，去 pay！"
    },
    {
      word: "certainly",
      phonetic: "/ˈsɜːtnli/",
      pos: "adv.",
      posClass: "adv",
      meaning: "当然",
      root: {
        parts: ["certain（确定的）", "-ly（副词后缀）"],
        explain: "certain（确定的）+ -ly（副词后缀）。certain 来自拉丁语 certus（确定的、决定了的），和 certificate（证书）同源——证书就是'确定'你有某种资格的文件。"
      },
      memory: "certain（确定的）+ ly = 确定地 = 当然！也可以记谐音：'瑟疼了'——当然(certainly)会疼！",
      family: ["certain（确定的）", "certainty（确定性）", "uncertain（不确定的）"],
      synonyms: ["of course（当然）", "sure（当然）", "definitely（肯定地）"],
      antonyms: ["perhaps（也许）", "maybe（也许）"],
      sentences: [
        { en: "Can I try on this shirt? — Certainly!", zh: "我可以试穿这件衬衫吗？——当然可以！" },
        { en: "I'm certainly going to the party.", zh: "我当然会去参加聚会。" }
      ],
      fun: "certainly 比 yes 更有礼貌和热情。在英式英语中，服务员经常用 certainly 来回应顾客的请求，显得非常专业。而 sure 更随意，朋友之间用得多。",
      usage: "certainly 可以单独使用表示'当然'，也可以放在句中修饰动词。语气比 of course 更正式，比 sure 更有礼貌。",
      visual: "想象一个英国管家，穿着燕尾服，微微鞠躬，用超级优雅的腔调说'Certainly, sir!'——然后转身就摔了一跤，爬起来面不改色继续说'Certainly!'",
      confuse: "certainly vs. of course vs. sure：certainly 最正式最礼貌（服务员对客人说）；of course 比较自然（朋友之间说）；sure 最随意（很熟的人说）。正式程度：certainly > of course > sure。",
      rhyme: "certain 确定加上 ly，certainly 当然没问题；服务员说 certainly，礼貌热情第一名！",
      scene: "【商店服务用语】certainly（当然）、wait（等待）、a moment（一会儿）、try on（试穿）、size（尺码）——Can I try on this? Certainly! Wait a moment, 我帮你找合适的 size！"
    },
    {
      word: "wait",
      phonetic: "/weɪt/",
      pos: "v.",
      posClass: "v",
      meaning: "等待",
      root: {
        parts: [],
        explain: "来自古北法语 waitier（看守、守望），最初的意思是站在高处'守望'敌人来袭。后来变成'等待'——守望的人不就是在等着什么来吗？"
      },
      memory: "wait 发音像'喂它'——等待(wait)着喂它(wait)吃饭！也和 weight（重量）同音——等待(wait)让人感觉时间有重量(weight)。",
      family: ["waiter（男服务员）", "waitress（女服务员）", "waiting（等待）", "await（等候）"],
      synonyms: ["hold on（等一下）", "stay（停留）"],
      antonyms: ["go（走）", "leave（离开）"],
      sentences: [
        { en: "Please wait a moment.", zh: "请等一会儿。" },
        { en: "I'll wait for you at the school gate.", zh: "我在校门口等你。" }
      ],
      fun: "waiter（服务员）字面意思就是'等待的人'——因为服务员要等着(wait)顾客点餐！英语里 can't wait 表示'迫不及待'，例如 I can't wait for summer holiday!",
      usage: "wait for sb/sth = 等某人/某事。不能说 wait sb，一定要加 for！wait a moment / wait a minute = 等一下。",
      visual: "想象一个人在公交站等车(wait)，等了三个小时，头发都长长了，胡子拖到地上了，旁边长出了蘑菇，公交车终于来了——结果是反方向的！",
      confuse: "wait vs. weight：发音完全一样 /weɪt/，但 wait 是动词'等待'，weight 是名词'重量'。记住：wait 里有 ai（哎，又要等），weight 里有 eigh（eight 八的拼法，和数字有关所以是重量）。",
      rhyme: "wait 等待要耐心，wait for 后面跟宾语；waiter 服务员在等，wait a moment 稍等等！",
      scene: "【排队等候】wait（等待）、a moment（一会儿）、certainly（当然）、pay（付款）、receive（收到）——Please wait a moment, certainly 马上就好，先 pay 再 receive 你的东西！"
    },
    {
      word: "a moment",
      phonetic: "/ə ˈməʊmənt/",
      pos: "n.",
      posClass: "n",
      meaning: "一会儿",
      root: {
        parts: [],
        explain: "moment 来自拉丁语 momentum（运动、推动力），本意是'一个推动的瞬间'。一个力的推动只发生在一瞬间，所以 moment 就是'片刻、瞬间'。"
      },
      memory: "mo + ment，谐音'摸门特'——摸一下门只要一会儿(a moment)的时间！",
      family: ["moment（时刻）", "momentary（短暂的）", "momentous（重大的）", "momentum（动力）"],
      synonyms: ["a minute（一会儿）", "a second（一会儿）", "an instant（一瞬间）"],
      antonyms: [],
      sentences: [
        { en: "Wait a moment, please.", zh: "请等一会儿。" },
        { en: "I'll be back in a moment.", zh: "我一会儿就回来。" }
      ],
      fun: "at the moment = 此刻、目前。for the moment = 暂时。moment of truth = 关键时刻。这些短语里的 moment 意思各不相同，英语就是这么有趣！",
      usage: "just a moment = wait a moment = 请稍等。at the moment = 此刻，相当于 now。注意 a moment 和 the moment 的区别：a moment 泛指一会儿，the moment 强调特定的时刻。",
      visual: "想象老师说'wait a moment'，你以为真的只要一小会儿，结果她走出教室打了一个长达两小时的电话，回来还说'sorry, just a moment'——a moment 到底有多长啊！",
      confuse: "a moment vs. a minute vs. a second：这三个都表示'一会儿'，但从字面意思看 a second（一秒）最短，a minute（一分钟）居中，a moment（一瞬间）最短。但实际口语中三个意思差不多，都是'稍等一下'。",
      rhyme: "a moment 一会儿，稍等片刻不着急；wait a moment 请等等，马上就来别担心！",
      scene: "【客服接待】a moment（一会儿）、wait（等待）、certainly（当然）、matter（事情）、what's the matter（怎么了）——What's the matter? Wait a moment, certainly 能解决，有什么 matter 别着急！"
    },
    {
      word: "sale",
      phonetic: "/seɪl/",
      pos: "n.",
      posClass: "n",
      meaning: "特价销售；出售",
      root: {
        parts: [],
        explain: "来自古英语 sala，源自古北欧语 sala（出售）。和 sell（卖）是同源词——sell 是动词'卖'，sale 是名词'销售'。"
      },
      memory: "sale 谐音'塞了'——大减价(sale)的时候人太多，商场都被塞满了！也可以记：sale 和 sell 像一对兄弟。",
      family: ["sell（出售）", "seller（卖家）", "salesman（销售员）", "saleswoman（女销售员）"],
      synonyms: ["discount（折扣）", "deal（交易）"],
      antonyms: ["purchase（购买）"],
      sentences: [
        { en: "There's a big sale at the shopping centre this weekend.", zh: "这个周末购物中心有大促销。" },
        { en: "I bought this jacket in a sale.", zh: "我在打折时买了这件夹克。" }
      ],
      fun: "美国最疯狂的打折日是 Black Friday（黑色星期五），在感恩节后的第一天。人们凌晨排队抢购。中国的双十一(11.11)现在已经是全球最大的购物节，一天的销售额超过黑色星期五好几倍！",
      usage: "for sale = 待出售（正在卖）。on sale = 打折出售。这两个短语意思不同！",
      visual: "想象双十一那天，商场门口挂了一个超级大的 SALE 牌子，人们像潮水一样涌进去，购物车堆成了山，收银台排队排到了隔壁城市——这就是 sale 的魔力！",
      confuse: "sale vs. sell：sale 是名词（a big sale 大促销），sell 是动词（I sell books 我卖书）。还要注意 sale 和 sail（航行）发音一样但意思完全不同！",
      rhyme: "sale 打折快来买，on sale 优惠人人爱；for sale 表示在出售，两个短语别搞坏！",
      scene: "【商场大促销】sale（特价销售）、on sale（特价出售）、half price（半价）、price（价格）、compare（比较）、pay（付款）——商场 sale 来了，好多东西 on sale，half price 真划算，compare 一下 price，赶紧 pay！"
    },
    {
      word: "on sale",
      phonetic: "/ɒn seɪl/",
      pos: "n.",
      posClass: "adj",
      meaning: "特价出售",
      root: {
        parts: ["on（处于...状态）", "sale（销售）"],
        explain: "on 表示'处于某种状态'，sale 是'打折销售'。on sale 就是'处于打折销售状态'。注意和 for sale（待出售）的区别！"
      },
      memory: "on sale——商品'上'了(on)打折(sale)的架子！看到 on sale 的牌子就是告诉你：快来买，打折了！",
      family: ["for sale（待售）", "sale price（折扣价）", "clearance sale（清仓大甩卖）"],
      synonyms: ["at a discount（打折）", "marked down（降价的）"],
      antonyms: ["at full price（原价）"],
      sentences: [
        { en: "These shoes are on sale — only 99 yuan!", zh: "这些鞋正在特价出售——只要99元！" },
        { en: "Is this bag on sale?", zh: "这个包在打折吗？" }
      ],
      fun: "在英式英语中 on sale 主要指'打折'；在美式英语中 on sale 也可以指'在出售中'。所以如果在美国看到 on sale，不一定是打折哦，要看有没有标出折扣。",
      usage: "on sale = 正在打折出售。for sale = 可以购买/待售。The house is for sale. = 这房子要卖了（不是打折）。",
      visual: "想象一双鞋子站在舞台(on stage)上，身上贴满了打折标签，像个选秀选手一样大声喊：'我 on sale 了！原价999，现在只要99！快来pick我！'台下的顾客疯狂鼓掌。",
      confuse: "on sale vs. for sale：on sale = 正在打折（强调便宜了）；for sale = 正在出售/待售（不一定便宜）。房子 for sale 是在卖房子，不是房子打折！这两个千万别搞混。",
      rhyme: "on sale 打折真便宜，for sale 出售不一定；看到 on sale 快下手，错过优惠要叹气！",
      scene: "【打折季扫货】on sale（特价出售）、sale（特价销售）、half price（半价）、price（价格）、take（买下）、pay（付款）——看到 on sale 标志，sale 力度很大，half price 的 price，果断 take，赶紧 pay！"
    },
    {
      word: "half",
      phonetic: "/hɑːf/",
      pos: "n.",
      posClass: "n",
      meaning: "一半",
      root: {
        parts: [],
        explain: "来自古英语 healf（一半），与德语 halb 同源。有趣的是 half 里的 l 不发音！这是英语历史上的'静音字母'现象——古代发音，现代不发了但拼写保留了。"
      },
      memory: "half 里的 l 不发音，读作 /hɑːf/！记住：一半(half)的 l 消失了，就像被切掉了一半。",
      family: ["halfway（中途的）", "half-time（中场休息）", "halves（复数）"],
      synonyms: ["fifty percent（百分之五十）"],
      antonyms: ["whole（整个的）", "double（双倍的）"],
      sentences: [
        { en: "I ate half of the cake.", zh: "我吃了一半的蛋糕。" },
        { en: "Half the class are girls.", zh: "班上一半是女生。" }
      ],
      fun: "half 的复数是 halves（f 变 ve 加 s），和 knife-knives、wolf-wolves 是一样的规则。英语里 half 还出现在很多表达中：half-brother（同父异母/同母异父的兄弟）、better half（另一半，指配偶）。",
      usage: "half 的 l 不发音！half an hour = 半小时。half past seven = 七点半。half of 后接可数名词复数或不可数名词。",
      visual: "想象一个大蛋糕被一把巨刀从正中间切成两半(half)，左半边高兴地跳走了，右半边伤心地哭了，因为奶油全在左边——'我的 l 也被切掉了，所以不发音了！'",
      confuse: "half vs. halve：half 是名词/形容词'一半'，halve 是动词'把...切成两半'。half 的 l 不发音，halve 的 l 也不发音。注意复数 halves（f 变 ves）。",
      rhyme: "half 一半 l 不念，读音只有 hɑːf；half price 是半价，half past 半点用得上！",
      scene: "【分享食物】half（一半）、strawberry（草莓）、price（价格）、half price（半价）、fresh（新鲜的）——把 fresh 的 strawberry 分 half 给好朋友，half price 买的，一人一半刚刚好！"
    },
    {
      word: "half price",
      phonetic: "/hɑːf praɪs/",
      pos: "n.",
      posClass: "n",
      meaning: "半价",
      root: {
        parts: ["half（一半）", "price（价格）"],
        explain: "half（一半）+ price（价格）= 一半的价格 = 半价。直接明了的组合，和中文的'半价'构词逻辑完全一样。"
      },
      memory: "half（一半）+ price（价格）= 半价！购物最开心的两个字：半价！",
      family: ["full price（全价）", "discount（折扣）", "50% off（五折）"],
      synonyms: ["50% off（打五折）"],
      antonyms: ["full price（全价）", "double price（双倍价格）"],
      sentences: [
        { en: "Children can get in at half price.", zh: "儿童可以半价入场。" },
        { en: "All books are half price today.", zh: "今天所有书都半价。" }
      ],
      fun: "中国说'打五折'等于英语的 half price 或 50% off。但注意：中文的'折'和英文的'off'方向相反！中文'八折'= 英文 20% off。这是中英文化中最容易搞混的数学换算之一。",
      usage: "at half price = 以半价。half price 可以作名词或形容词：a half-price ticket（半价票）。中国的'五折'就是 half price。",
      visual: "想象一个价格标签被一把剪刀咔嚓一剪，标签上的数字立刻缩小了一半，价格标签疼得大叫：'啊！我的价值被砍了一半！'旁边的顾客开心得手舞足蹈。",
      confuse: "half price vs. 50% off：意思完全一样！half price 是英式说法比较多，50% off 是美式说法比较多。注意中文'打折'的换算：五折 = half price = 50% off；八折 = 20% off（不是 80% off！）。",
      rhyme: "half price 半价真开心，五折优惠好心情；全价 full price 太贵了，等到半价再下手！",
      scene: "【打折抢购】half price（半价）、sale（特价销售）、on sale（特价出售）、price（价格）、compare（比较）、take（买下）——看到 half price 的 sale 标志，on sale 的 price 真便宜，compare 之后果断 take！"
    },
    {
      word: "pay",
      phonetic: "/peɪ/",
      pos: "v.",
      posClass: "v",
      meaning: "付款",
      root: {
        parts: [],
        explain: "来自拉丁语 pacare（使安宁、安抚），原义是'付钱让债主安心'——把钱给了，债主就不闹了，大家都太平(peace)了！pay 和 peace（和平）居然是同源词！"
      },
      memory: "pay 谐音'赔'——付款(pay)就像赔钱一样心疼！也可以记：p + ay，'啊呀(ay)，又要付钱(pay)了！'",
      family: ["payment（付款）", "paid（过去式/过去分词）", "paycheck（工资单）", "payback（回报）"],
      synonyms: ["spend（花费）", "charge（收费）"],
      antonyms: ["owe（欠）", "receive（收到）"],
      sentences: [
        { en: "How would you like to pay?", zh: "你想怎么付款？" },
        { en: "I'll pay by WeChat.", zh: "我用微信支付。" }
      ],
      fun: "在中国，手机支付（mobile payment）已经非常普及，但在很多西方国家，信用卡(credit card)仍然是主要支付方式。中国人出国常常惊讶：居然还要用现金(cash)！",
      usage: "pay for sth = 为某物付钱。pay by cash/card/WeChat = 用现金/卡/微信付款。pay 的过去式是 paid（不规则变化）。",
      visual: "想象你的钱包在收银台前恐惧地发抖，拉链紧紧闭着不肯打开，你说'I need to pay!'钱包大哭：'不要啊！'你硬掰开拉链，钱币们争先恐后地往外逃跑。",
      confuse: "pay vs. spend vs. cost：pay 强调付钱给谁（pay the waiter）；spend 强调花了多少时间或钱（spend 100 yuan on books）；cost 的主语是物品（The book costs 50 yuan.）。三个词角度不同！",
      rhyme: "pay 付款过去 paid，pay for 为...把钱给；pay by 方式要记清，现金刷卡微信付！",
      scene: "【收银台结账】pay（付款）、by（通过）、price（价格）、receive（收到）、take（买下）、half price（半价）——I'll take it! 看 price 是 half price，pay by 微信，receive 小票，购物完成！"
    },
    {
      word: "by",
      phonetic: "/baɪ/",
      pos: "prep.",
      posClass: "prep",
      meaning: "通过",
      root: {
        parts: [],
        explain: "来自古英语 bī（在旁边、靠近），是英语中最古老的介词之一。从'在旁边'引申出了'经过、通过、凭借'等等含义，成为英语里意思最多的小词之一。"
      },
      memory: "by 发音和 buy（买）一样，但意思完全不同！by = 通过/在旁边，buy = 买。记住：by 是小词大能量。",
      family: ["by-product（副产品）", "bypass（绕过）", "bystander（旁观者）", "nearby（附近的）"],
      synonyms: ["through（通过）", "via（经由）"],
      antonyms: [],
      sentences: [
        { en: "You can pay by credit card.", zh: "你可以用信用卡付款。" },
        { en: "I go to school by bus.", zh: "我乘公交车上学。" }
      ],
      fun: "by 是英语里最忙碌的介词之一：by bus（乘公交）、by hand（手工）、by accident（意外地）、by the way（顺便说一下）、by heart（背诵）——一个 by 至少有10种常见用法！",
      usage: "by + 交通工具（by bus/train/plane）。by + 支付方式（by cash/card）。by + 方式（by email/phone）。注意：by 和 buy 发音一样但拼写不同！",
      visual: "想象介词 by 是一个超级忙碌的快递小哥，一会儿骑自行车(by bike)送货，一会儿坐飞机(by plane)送货，一会儿用手(by hand)送货——什么方式都行，就是'通过'各种方式搞定！",
      confuse: "by vs. buy vs. bye：发音都是 /baɪ/，但 by 是介词'通过'，buy 是动词'买'，bye 是感叹词'再见'。pay by cash（用现金付款）不能写成 pay buy cash！",
      rhyme: "by 通过方式多，坐车坐船都用它；by 和 buy 要分清，通过是 by 买是 buy！",
      scene: "【付款方式】by（通过）、pay（付款）、receive（收到）、post（邮寄）——pay by 微信/现金/银行卡，by post 邮寄到家，receive 快递开心拆箱！"
    },
    {
      word: "receive",
      phonetic: "/rɪˈsiːv/",
      pos: "v.",
      posClass: "v",
      meaning: "收到；接到",
      root: {
        parts: ["re-（回）", "ceive（拿）"],
        explain: "re-（回）+ ceive（拿，来自拉丁语 capere）= 拿回来 = 收到。ceive 这个词根在很多词里出现：receive（收到）、deceive（欺骗=骗走）、perceive（感知=完全抓住）、conceive（构想=一起抓住想法）。"
      },
      memory: "re（回来）+ ceive（拿）——东西拿回来了就是'收到'！也可以记：receive 里有'i before e except after c'的规则——c 后面 e 在 i 前！",
      family: ["receiver（接收者）", "receipt（收据）", "reception（接待）"],
      synonyms: ["get（得到）", "accept（接受）", "obtain（获得）"],
      antonyms: ["send（发送）", "give（给予）"],
      sentences: [
        { en: "I received a birthday present from my friend.", zh: "我收到了朋友送的生日礼物。" },
        { en: "Did you receive my email?", zh: "你收到我的邮件了吗？" }
      ],
      fun: "英语拼写规则'i before e except after c'就是为 receive 这类词准备的——c 后面是 ei 而不是 ie。但这条规则有很多例外，比如 weird（奇怪的）和 seize（抓住），所以有人开玩笑说这是'最不靠谱的英语规则'。",
      usage: "receive 比 get 更正式。receive a letter/email/present = 收到信/邮件/礼物。注意拼写：c 之后是 ei，不是 ie！",
      visual: "想象你打开家门，一个巨大的包裹从天而降砸到你头上——快递小哥在楼上喊：'You received it!'你头上顶着包裹，眼冒金星但还是竖起大拇指：'收到了！'",
      confuse: "receive vs. accept：receive 是'收到'（被动接收，不管你想不想要）；accept 是'接受'（主动同意接受）。I received his invitation, but I didn't accept it. 我收到了他的邀请，但我没接受。",
      rhyme: "receive 收到记住拼，c 后面是 ei 不是 ie；收到礼物收到信，receive 比 get 更正式！",
      scene: "【网购收快递】receive（收到）、post（邮寄）、product（产品）、pay（付款）、by（通过）——网上 pay by 微信，商家 post 出 product，你在家 receive 快递，开箱好开心！"
    },
    {
      word: "fresh",
      phonetic: "/freʃ/",
      pos: "adj.",
      posClass: "adj",
      meaning: "新鲜的",
      root: {
        parts: [],
        explain: "来自古英语 fersc（新鲜的、不咸的），与德语 frisch 同源。最初指'淡水'（fresh water，相对于海水 salt water），后来引申为食物的'新鲜'和空气的'清新'。"
      },
      memory: "fresh 谐音'服了湿'——刚洗完的衣服是湿的，但很新鲜(fresh)！也可以记：fresh 开头像 free——自由新鲜的空气！",
      family: ["freshen（使新鲜）", "freshly（新鲜地）", "freshness（新鲜度）", "freshman（大一新生）", "refresh（刷新）"],
      synonyms: ["new（新的）", "crisp（脆的；清爽的）"],
      antonyms: ["stale（不新鲜的）", "old（旧的）"],
      sentences: [
        { en: "The strawberries in the market are very fresh.", zh: "市场里的草莓非常新鲜。" },
        { en: "Let's get some fresh air.", zh: "我们去呼吸一下新鲜空气吧。" }
      ],
      fun: "freshman 是'大一新生'的意思——fresh + man = 新鲜的人 = 新来的学生！大二是 sophomore，大三是 junior，大四是 senior。而 refresh 是'刷新'——按 F5 就是 refresh 网页！",
      usage: "fresh fruit/vegetables = 新鲜水果/蔬菜。fresh air = 新鲜空气。fresh water = 淡水（不是新鲜的水！）。",
      visual: "想象一棵蔬菜刚从地里拔出来，身上还带着露珠，闪闪发光像镶了钻石一样，它骄傲地说：'我是最 fresh 的菜！'旁边放了三天的蔫白菜羡慕得直流泪。",
      confuse: "fresh vs. new：fresh 强调'新鲜'，一般用于食物、空气、水（fresh fruit 新鲜水果）；new 强调'新的、崭新的'，用于物品（a new phone 新手机）。不能说 new fruit，也不说 fresh phone！",
      rhyme: "fresh 新鲜人人爱，水果蔬菜要新鲜；fresh air 空气清，fresh water 是淡水！",
      scene: "【菜市场挑选】fresh（新鲜的）、strawberry（草莓）、market（市场）、price（价格）、size（大小）——去 market 挑 fresh 的 strawberry，看 size 大不大，问 price 贵不贵！"
    },
    {
      word: "matter",
      phonetic: "/ˈmætə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "事情；问题",
      root: {
        parts: [],
        explain: "来自拉丁语 materia（物质、材料），和 material（材料）同源。从'物质'引申为'事情'——物质世界里发生的事就是 matter。作动词时表示'重要'：物质性的东西才'重要'！"
      },
      memory: "matter 谐音'麻特'——遇到麻烦的事(matter)要特别注意！也可以联想：matter = ma（妈）+ tter，妈妈总问你：'怎么了？有什么事(matter)吗？'",
      family: ["material（材料）", "matter-of-fact（实事求是的）"],
      synonyms: ["issue（问题）", "problem（问题）", "affair（事务）"],
      antonyms: [],
      sentences: [
        { en: "What's the matter with you?", zh: "你怎么了？" },
        { en: "It doesn't matter.", zh: "没关系。" }
      ],
      fun: "It doesn't matter. 是英语中最常用的安慰语之一，相当于中文的'没关系'。还有一个科学梗：在物理学中 matter 指'物质'，和 energy（能量）相对——爱因斯坦的 E=mc² 说的就是物质(matter)和能量的转换！",
      usage: "What's the matter? = 怎么了？It doesn't matter. = 没关系。as a matter of fact = 事实上。matter 作动词表示'重要'：It matters a lot to me.",
      visual: "想象一个小朋友摔了一跤，膝盖擦破了，妈妈(ma)跑过来紧张地问'What's the matter?!'小朋友哭着说'没什么 matter...'然后指着地上的冰淇淋说'可是我的冰淇淋掉了！这才是最大的 matter！'",
      confuse: "matter vs. problem vs. question：matter 比较口语化，常用于 What's the matter?（怎么了）和 It doesn't matter.（没关系）；problem 是需要解决的'问题'；question 是需要回答的'问题'。",
      rhyme: "What's the matter 怎么了，It doesn't matter 没关系；matter 事情也是物质，一词多义要记好！",
      scene: "【关心朋友】matter（事情）、what's the matter（怎么了）、wait（等待）、certainly（当然）——看到朋友不开心，问 What's the matter? Wait a moment 听他说，certainly 我能帮忙！"
    },
    {
      word: "what's the matter",
      phonetic: "/wɒts ðə ˈmætə(r)/",
      pos: "n.",
      posClass: "interj",
      meaning: "怎么了",
      root: {
        parts: ["what（什么）", "the matter（问题）"],
        explain: "what's the matter = what is the matter = 什么是问题 = 怎么了？这是一个固定表达，用来询问别人遇到了什么问题或困难。"
      },
      memory: "what's the matter = '什么事儿？'——看到别人不开心就问 what's the matter！和中文的'怎么了'一模一样。",
      family: ["What's wrong?（怎么了？）", "What happened?（发生了什么？）", "What's up?（怎么了？/你好！）"],
      synonyms: ["What's wrong?（怎么了？）", "What's the problem?（有什么问题？）"],
      antonyms: [],
      sentences: [
        { en: "What's the matter? You look sad.", zh: "怎么了？你看起来很伤心。" },
        { en: "What's the matter with your bike?", zh: "你的自行车怎么了？" }
      ],
      fun: "What's the matter? 和 What's wrong? 意思几乎一样，但语气有微妙差别。What's the matter? 更温和关切，What's wrong? 有时可能暗示'出了问题'。另外 What's up? 在美国口语中也可以当'你好'用！",
      usage: "What's the matter with sb/sth? = 某人/某物怎么了？注意介词用 with！回答可以用：I have a headache. / Nothing. / I'm fine.",
      visual: "想象一个同学趴在桌上，头上冒着黑色的乌云，你跑过去问'What's the matter?'结果他抬起头，脸上写满了数学公式——原来是数学考试考砸了，他说：'Math is the matter!'",
      confuse: "What's the matter? vs. What's wrong? vs. What's up?：What's the matter? 温和关切地问'怎么了'；What's wrong? 稍微严肃，暗示有问题；What's up? 最随意，美国人还用来当'你好'打招呼。",
      rhyme: "What's the matter 怎么了，后面跟 with 问原因；温柔关心好朋友，什么问题都能帮！",
      scene: "【朋友遇到困难】what's the matter（怎么了）、matter（事情）、wait（等待）、certainly（当然）、advantage（优点）——What's the matter? 别急，wait a moment，certainly 有办法，每件事都有 advantage！"
    },
    {
      word: "advantage",
      phonetic: "/ədˈvɑːntɪdʒ/",
      pos: "n.",
      posClass: "n",
      meaning: "优点；有利条件",
      root: {
        parts: ["ad-（向前）", "vant（=avant，前方）", "-age（名词后缀）"],
        explain: "来自法语 avantage，avant（前方）+ -age（名词后缀）= 走在前面 = 优势。在网球比赛中 advantage 也是一个专业术语，表示'占先'（平分后先得一分的一方）。"
      },
      memory: "ad + vantage，'向前'(advance)的姿态就是优势(advantage)！或者记：advantage 里有 advance（前进）——走在前面就是优势！",
      family: ["advantageous（有利的）", "disadvantage（缺点；劣势）"],
      synonyms: ["benefit（利益）", "merit（优点）", "strength（长处）"],
      antonyms: ["disadvantage（缺点）", "weakness（弱点）", "drawback（缺点）"],
      sentences: [
        { en: "Online shopping has many advantages.", zh: "网上购物有很多优点。" },
        { en: "What are the advantages of living in a big city?", zh: "住在大城市有什么好处？" }
      ],
      fun: "在网球比赛中，当双方打到 deuce（平分）后，先得一分的一方获得 advantage。裁判会喊：'Advantage, Nadal!' 这时纳达尔再得一分就赢下这一局。",
      usage: "advantage 常和 disadvantage 一起出现。the advantage of... = ...的优点。take advantage of = 利用。have an advantage over = 比...有优势。",
      visual: "想象一场跑步比赛，一个选手穿着弹簧鞋（advantage），每一步都蹦出去十米远，其他选手在后面追得气喘吁吁，裁判举着牌子写：'拥有 advantage 就是这么爽！'",
      confuse: "advantage vs. benefit：advantage 强调和别人比较时的'优势、有利条件'（have an advantage over others）；benefit 强调对自己有'好处、益处'（for the benefit of your health）。比赛用 advantage，好处用 benefit。",
      rhyme: "advantage 是优势，走在前面占便宜；disadvantage 是缺点，优缺分析要仔细！",
      scene: "【讨论网购好处】advantage（优点）、compare（比较）、anywhere（任何地方）、product（产品）、price（价格）——网购的 advantage 是可以 compare 不同 product 的 price，anywhere 都能买！"
    },
    {
      word: "anywhere",
      phonetic: "/ˈeniweə(r)/",
      pos: "adv.",
      posClass: "adv",
      meaning: "任何地方",
      root: {
        parts: ["any（任何）", "where（哪里）"],
        explain: "any（任何）+ where（哪里）= 任何地方。类似的组合还有：everywhere（到处）、somewhere（某处）、nowhere（无处）。英语喜欢用合成词表达复杂的概念。"
      },
      memory: "any（任何）+ where（哪里）= 任何地方。一看就懂的合成词！anywhere = '哪里都行'。",
      family: ["everywhere（到处）", "somewhere（某处）", "nowhere（无处）"],
      synonyms: ["wherever（无论哪里）"],
      antonyms: ["nowhere（无处）"],
      sentences: [
        { en: "You can shop anywhere with your phone.", zh: "用手机你在任何地方都能购物。" },
        { en: "Is there anywhere to eat near here?", zh: "这附近有什么吃饭的地方吗？" }
      ],
      fun: "有趣的是，英语里 anywhere 用在否定句和疑问句中，而 somewhere 用在肯定句中。这是 any/some 系列词的规律：anything/something、anyone/someone 都遵循这个规则。",
      usage: "anywhere 多用于否定句和疑问句：I can't find it anywhere. / Can you see it anywhere? 肯定句中一般用 somewhere。",
      visual: "想象一个人拿着手机，站在北极的冰面上网购，身边有北极熊围观；然后又出现在沙漠骆驼背上下单；最后在太空站里收快递——anywhere 都能购物！",
      confuse: "anywhere vs. somewhere vs. everywhere vs. nowhere：anywhere 任何地方（疑问/否定句用）；somewhere 某个地方（肯定句用）；everywhere 到处；nowhere 无处。否定句用 anywhere，肯定句用 somewhere！",
      rhyme: "any 加上 where，anywhere 任何地方去；否定疑问用 anywhere，肯定句中 somewhere 替！",
      scene: "【手机购物真方便】anywhere（任何地方）、advantage（优点）、compare（比较）、product（产品）、post（邮寄）、receive（收到）——手机购物的 advantage 是 anywhere 都行，compare 各种 product，商家 post 过来你 receive！"
    },
    {
      word: "compare",
      phonetic: "/kəmˈpeə(r)/",
      pos: "v.",
      posClass: "v",
      meaning: "比较",
      root: {
        parts: ["com-（一起）", "pare（相等）"],
        explain: "com-（一起）+ par（相等，来自拉丁语 par）= 把东西放在一起看是否相等 = 比较。par 这个词根也在 pair（一对）、equal（相等）中出现。"
      },
      memory: "com（一起）+ pare（一对par）——把一对(pair)东西放一起(com)对比就是比较(compare)！",
      family: ["comparison（比较；对比）", "comparable（可比较的）", "comparative（比较的）"],
      synonyms: ["contrast（对比）"],
      antonyms: [],
      sentences: [
        { en: "Let's compare the prices before we buy.", zh: "在买之前让我们比较一下价格。" },
        { en: "You can compare products online easily.", zh: "你可以在网上轻松比较产品。" }
      ],
      fun: "莎士比亚有一首著名的十四行诗以'Shall I compare thee to a summer's day?'（我能把你比作夏日吗？）开头。compare 在英语诗歌中经常出现，因为比喻和对比是文学的基本手法。",
      usage: "compare A with/to B = 把A和B比较。compare...to... 也可以表示'把...比作...'。beyond compare = 无与伦比。",
      visual: "想象两件衣服被放在天平的两端(compare)，左边那件穿着墨镜耍酷，右边那件戴着皇冠不服气，天平左摇右摆，最后两件衣服打了起来——比较(compare)的结果是谁也不服谁！",
      confuse: "compare with vs. compare to：compare with = 比较异同（Compare your answer with mine. 把你的答案和我的对比一下）；compare to = 把...比作...（He compared her to a rose. 他把她比作玫瑰）。'对比'用 with，'比喻'用 to。",
      rhyme: "compare 比较放一起，with 对比 to 比喻；货比三家不吃亏，比较之后再决定！",
      scene: "【货比三家】compare（比较）、price（价格）、product（产品）、advantage（优点）、anywhere（任何地方）——在网上 compare 不同店的 price 和 product，看各自 advantage，anywhere 都能比！"
    },
    {
      word: "product",
      phonetic: "/ˈprɒdʌkt/",
      pos: "n.",
      posClass: "n",
      meaning: "产品；商品",
      root: {
        parts: ["pro-（向前）", "duct（引导）"],
        explain: "pro-（向前）+ duct（引导、带领，来自拉丁语 ducere）= 引导出来的东西 = 产品。同根词有 produce（生产）、introduce（介绍=引入）、conduct（引导；行为）。"
      },
      memory: "pro（专业）+ duct（导管）——通过专业的生产线(duct)出来的就是产品(product)！",
      family: ["produce（v.生产）", "production（生产）", "productive（高效的）", "producer（生产者）"],
      synonyms: ["goods（商品）", "merchandise（商品）", "item（物品）"],
      antonyms: [],
      sentences: [
        { en: "This shop sells many different products.", zh: "这家商店卖很多不同的产品。" },
        { en: "Made in China products are sold all over the world.", zh: "中国制造的产品销往全世界。" }
      ],
      fun: "在数学课上 product 还有一个意思：'乘积'！3 × 4 的 product 是 12。英语里一个词可以在不同学科有完全不同的意思，所以要根据语境判断。",
      usage: "product 是可数名词。dairy products = 乳制品。electronic products = 电子产品。product 在数学中意思是'乘积'。",
      visual: "想象一条巨大的工厂流水线，原材料从一头进去，经过各种机器人的加工组装，从另一头'啪'地弹出一个闪闪发光的 product——产品自己飞到货架上，还冲你眨眼说'买我！'",
      confuse: "product vs. produce：product 是名词'产品'（electronic products 电子产品）；produce 作动词读 /prəˈdjuːs/ 是'生产'，作名词读 /ˈprɒdjuːs/ 是'农产品'。product 是造出来的东西，produce 可以是种出来的东西。",
      rhyme: "product 产品从厂出，pro 向前 duct 引导；生产出来叫 product，数学里面是乘积！",
      scene: "【网上购物比较】product（产品）、compare（比较）、price（价格）、advantage（优点）、post（邮寄）、receive（收到）——网上看 product，compare 不同 price，看 advantage，下单后商家 post，你 receive！"
    },
    {
      word: "post",
      phonetic: "/pəʊst/",
      pos: "v.",
      posClass: "v",
      meaning: "邮寄",
      root: {
        parts: [],
        explain: "来自拉丁语 positus（放置），后来指'邮政驿站'——古代信件从一个驿站'放'到另一个驿站传递。英式英语用 post 表示'邮寄'，美式英语用 mail。"
      },
      memory: "post 谐音'泼死他'——写信骂人然后邮寄(post)出去'泼'他一身！开玩笑的，记住 post = 邮寄就好。",
      family: ["postman（邮递员）", "postcard（明信片）", "postage（邮费）", "post office（邮局）", "postal（邮政的）"],
      synonyms: ["mail（邮寄）", "send（发送）"],
      antonyms: ["receive（收到）"],
      sentences: [
        { en: "I posted a birthday card to my grandma.", zh: "我给奶奶寄了一张生日贺卡。" },
        { en: "Online shops post the products to your home.", zh: "网店会把产品邮寄到你家。" }
      ],
      fun: "在社交媒体时代，post 又有了新含义：'发帖'！post a photo on Instagram = 在 Instagram 上发照片。post 从'邮寄信件'变成了'发布内容'，邮寄的对象从纸变成了数据。",
      usage: "英式英语 post = 美式英语 mail。post a letter = 寄信。post office = 邮局。现在 post 还指'发帖/发布'：post a comment（发评论）。",
      visual: "想象一个邮递员(postman)骑着一辆装满包裹的自行车，包裹堆得比人还高，摇摇晃晃地在街上飞驰，包裹一路掉一路捡——这就是 post 的日常！最后包裹准确无误地飞进了你家窗户。",
      confuse: "post vs. mail vs. send：post 是英式英语的'邮寄'；mail 是美式英语的'邮寄'；send 是通用的'发送'（可以送任何东西，不只是邮件）。在中国英语课上 post 和 mail 都要会用！",
      rhyme: "post 邮寄英式说，mail 邮寄美国用；post office 邮局去，postman 邮递员送信忙！",
      scene: "【寄快递】post（邮寄）、receive（收到）、product（产品）、pay（付款）、by（通过）、anywhere（任何地方）——网上买 product，pay by 微信，商家 post 到 anywhere，你开心 receive！"
    },
    {
      word: "almost",
      phonetic: "/ˈɔːlməʊst/",
      pos: "adv.",
      posClass: "adv",
      meaning: "几乎",
      root: {
        parts: ["al-（全部）", "most（最多）"],
        explain: "all（全部）+ most（最多）= 几乎全部 = 几乎。这是一个古英语时期就有的合成词，'最多的全部'就是'几乎'——差一点点就全部了。"
      },
      memory: "all（全部）+ most（最多）= almost（几乎）——'差不多全部'就是'几乎'！",
      family: ["most（最多的）", "mostly（大部分地）"],
      synonyms: ["nearly（几乎）", "practically（几乎）"],
      antonyms: ["hardly（几乎不）", "barely（几乎不）"],
      sentences: [
        { en: "Almost everyone shops online now.", zh: "现在几乎人人都网购了。" },
        { en: "It's almost time for class.", zh: "快要上课了。" }
      ],
      fun: "almost 和 nearly 几乎（almost!）可以互换，但有一个区别：almost 可以说 almost never/nothing，而 nearly 前面要加 not：not nearly enough。",
      usage: "almost 放在所修饰词前面。almost everyone/everything/always = 几乎每个人/每件事/总是。almost 不能和 not 直接连用，要说 almost no one，不说 almost not everyone。",
      visual: "想象一个人做仰卧起坐，拼命往上够，离成功只差一厘米——脸涨得通红，手指都快碰到脚趾了，旁边的人喊'Almost! Almost!'但就是差那么一丢丢，永远 almost 到不了！",
      confuse: "almost vs. nearly vs. hardly：almost 和 nearly 都是'几乎'，大部分情况可以互换；hardly 是'几乎不'，意思完全相反！almost finished = 几乎完成了；hardly finished = 几乎没完成。千万别搞混！",
      rhyme: "all 加 most 变 almost，几乎全部差一点；almost 和 nearly 像，hardly 几乎不相反！",
      scene: "【网购评价】almost（几乎）、over（超过）、product（产品）、advantage（优点）、anywhere（任何地方）——almost 所有 product 都能网购，over 百种选择，advantage 很多，anywhere 都能买！"
    },
    {
      word: "over",
      phonetic: "/ˈəʊvə(r)/",
      pos: "adv.",
      posClass: "adv",
      meaning: "多于；超过",
      root: {
        parts: [],
        explain: "来自古英语 ofer（在上面、超过），与德语 über 同源。从'在上面'引申出'超过、多于'——数量在某个数字'上面'就是超过了。"
      },
      memory: "over 本意是'越过、在上面'——数量越过(over)了某个数字就是'超过'！game over = 游戏结束 = 超过了你能承受的程度。",
      family: ["overcome（克服）", "overlook（俯瞰；忽略）", "overseas（海外的）", "overall（总体的）"],
      synonyms: ["more than（多于）", "above（超过）", "beyond（超过）"],
      antonyms: ["under（少于）", "below（低于）"],
      sentences: [
        { en: "There are over 100 shops in the mall.", zh: "商场里有超过100家商店。" },
        { en: "She has over 200 books at home.", zh: "她家有200多本书。" }
      ],
      fun: "over 在英语中有很多经典用法：game over（游戏结束）、over and over（一遍又一遍）、all over the world（全世界）。板球比赛中每投6个球叫一个 over，这时裁判会喊 'Over!'",
      usage: "over = more than = 超过。over 100 = more than 100 = 100多个。over 还有'结束'的意思：The meeting is over. = 会议结束了。",
      visual: "想象一个气球上写着数字100，另一个更大的气球飞到了它上面(over)，上面写着101——大气球骄傲地说：'我 over 你了！'100号气球气得瘪了。后来越来越多气球飞过去，200、300都 over 了！",
      confuse: "over vs. above vs. more than：over 和 more than 都表示'超过（数量）'，可以互换（over 100 = more than 100）；above 强调位置'在上方'或温度等的'高于'（above zero 零度以上）。数量用 over/more than，位置用 above。",
      rhyme: "over 超过一百多，more than 意思差不多；game over 游戏完，over 用法真是多！",
      scene: "【商场大数据】over（超过）、almost（几乎）、product（产品）、price（价格）、supermarket（超市）——这家 supermarket 有 over 一万种 product，almost 什么都有，price 也不贵，逛一天都逛不完！"
    }
  ]
};

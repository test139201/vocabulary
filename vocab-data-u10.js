// Module 10: A holiday journey (假日旅行)
const UNIT10 = {
  id: 10,
  title: "A holiday journey",
  theme: "假日旅行",
  color: "#84cc16",
  words: [
    {
      word: "Pacific",
      phonetic: "/pəˈsɪfɪk/",
      pos: "adj.",
      posClass: "adj",
      meaning: "太平洋的",
      root: {
        parts: [
          { text: "pac-", type: "root", label: "拉丁语 pax = 和平" },
          { text: "-ific", type: "suffix", label: "使成为……的" }
        ],
        explain: "pac-（和平）+ -ific（使成为的）= 使和平的 = 太平的。1520年航海家麦哲伦从暴风肆虐的大西洋驶入这片平静的大洋时，感叹地称它为 Mar Pacifico（平静之海），于是就有了 Pacific Ocean。"
      },
      memory: "Pacific = pac(和平) + ific——太平的！太平洋(Pacific Ocean)得名于'和平、平静'。peace（和平）也来自同一个词根 pac-！",
      family: ["pacify（使平静）", "peace（和平）", "peaceful（和平的）"],
      synonyms: ["peaceful（平静的）", "calm（平静的）"],
      antonyms: [],
      sentences: [
        { en: "We flew across the Pacific Ocean.", zh: "我们飞越了太平洋。" },
        { en: "There are many islands in the Pacific.", zh: "太平洋中有许多岛屿。" }
      ],
      fun: "太平洋其实一点也不'太平'！它是地球上最大的海洋，面积超过所有陆地面积之和，而且环太平洋地区是地震和火山最活跃的地带，被称为'Ring of Fire'（火环）。麦哲伦只是运气好，刚好遇到了风平浪静的天气。",
      usage: "the Pacific Ocean = 太平洋（专有名词要大写）。类似的大洋名：the Atlantic Ocean（大西洋）、the Indian Ocean（印度洋）、the Arctic Ocean（北冰洋）。"
    },
    {
      word: "arrive",
      phonetic: "/əˈraɪv/",
      pos: "v.",
      posClass: "v",
      meaning: "到达",
      root: {
        parts: [
          { text: "ar-", type: "prefix", label: "= ad-，向/到" },
          { text: "rive", type: "root", label: "拉丁语 ripa = 河岸" }
        ],
        explain: "ar-（到）+ rive（河岸）= 到达河岸 = 到达。古代人主要靠水路旅行，所以'到达'的本义就是'船靠岸'。river（河流）也和 rive（河岸）同源！"
      },
      memory: "arrive 里藏着 river（河流）的影子——古人坐船到达(arrive)河岸(river bank)就算到了目的地！a + rrive(≈river) = 到达河边 = 到达！",
      family: ["arrival（到达）"],
      synonyms: ["reach（到达）", "get to（到达）"],
      antonyms: ["depart（离开）", "leave（离开）"],
      sentences: [
        { en: "We arrived in Beijing at 3 o'clock.", zh: "我们三点钟到达了北京。" },
        { en: "When did you arrive at the airport?", zh: "你什么时候到达机场的？" }
      ],
      fun: "arrive 的词源和 river（河流）竟然是亲戚！在古代欧洲，河流是最重要的交通通道，商船到达河岸(ripa)就意味着旅途结束。所以'到达'这个概念，最初就是'靠岸'的意思。",
      usage: "arrive 是不及物动词，后面不能直接接地点！arrive in + 大地方（城市/国家）：arrive in Shanghai。arrive at + 小地方（学校/车站）：arrive at school。千万不要说 arrive Beijing！"
    },
    {
      word: "relax",
      phonetic: "/rɪˈlæks/",
      pos: "v.",
      posClass: "v",
      meaning: "放松；休息",
      root: {
        parts: [
          { text: "re-", type: "prefix", label: "回/再" },
          { text: "lax", type: "root", label: "拉丁语 laxare = 松开" }
        ],
        explain: "re-（回）+ lax（松）= 重新松下来 = 放松。lax 本身就是'松弛的'意思，也给了我们 laxative（泻药=让肠道放松的药）。"
      },
      memory: "relax = re(再) + lax(松)——再松一松 = 放松！想象考完试后全身 relax——re(再次)变得 lax(松弛)了。",
      family: ["relaxation（放松）", "relaxing（令人放松的）", "relaxed（感到放松的）"],
      synonyms: ["rest（休息）", "unwind（放松）", "chill（放松，口语）"],
      antonyms: ["stress（紧张）", "tense（紧绷）"],
      sentences: [
        { en: "I like to relax on the beach during holidays.", zh: "假期时我喜欢在海滩上放松。" },
        { en: "Just relax and enjoy the movie.", zh: "放松一下，好好享受电影吧。" }
      ],
      fun: "Relax! 是英语中最常用的安慰语之一。在欧美国家，人们非常重视 relaxation（放松），甚至有专门的'mental health day'（心理健康日）可以请假休息。Take it easy! 和 Chill out! 都是类似的表达。",
      usage: "relax 既可以及物也可以不及物：Relax!（放松！）/ Relax your muscles.（放松肌肉。）relaxing = 令人放松的（修饰事物）：a relaxing holiday。relaxed = 感到放松的（修饰人）：I feel relaxed."
    },
    {
      word: "exciting",
      phonetic: "/ɪkˈsaɪtɪŋ/",
      pos: "adj.",
      posClass: "adj",
      meaning: "令人兴奋的",
      root: {
        parts: [
          { text: "ex-", type: "prefix", label: "出" },
          { text: "cit", type: "root", label: "拉丁语 citare = 召唤/激起" },
          { text: "-ing", type: "suffix", label: "令人……的" }
        ],
        explain: "ex-（出来）+ cite（激起）+ -ing（令人……的）= 把情绪激发出来的 = 令人兴奋的。excite 的原意是'把某种情绪从内心激发出来'。"
      },
      memory: "exciting = excite(使兴奋) + ing(令人……的)——令人兴奋的！注意：exciting 修饰事物（The game is exciting.），excited 修饰人（I am excited.）。",
      family: ["excite（使兴奋）", "excited（感到兴奋的）", "excitement（兴奋）"],
      synonyms: ["thrilling（激动人心的）", "amazing（令人惊叹的）"],
      antonyms: ["boring（无聊的）", "dull（枯燥的）"],
      sentences: [
        { en: "The trip to Disneyland was very exciting.", zh: "迪士尼乐园之旅非常令人兴奋。" },
        { en: "What an exciting game!", zh: "多么令人激动的比赛啊！" }
      ],
      fun: "-ing 和 -ed 形容词是英语学习者的经典陷阱：interesting/interested, boring/bored, surprising/surprised... 记住规律：-ing 描述事物的特质（The book is interesting.），-ed 描述人的感受（I am interested.）。",
      usage: "-ing 形容词修饰事物，-ed 形容词修饰人。The movie is exciting.（电影令人兴奋。）I am excited.（我很兴奋。）千万不要说 I am exciting（除非你想说自己是个令人兴奋的人）！"
    },
    {
      word: "already",
      phonetic: "/ɔːlˈredi/",
      pos: "adv.",
      posClass: "adv",
      meaning: "已经；早已",
      root: {
        parts: [
          { text: "all", type: "root", label: "全部/完全" },
          { text: "ready", type: "root", label: "准备好的" }
        ],
        explain: "all（完全）+ ready（准备好了）= 完全准备好了 = 已经。already 的本义就是'一切都就绪了'，引申为'已经完成了'。"
      },
      memory: "already = all(全) + ready(准备好)——全都准备好了 = 已经！想象开饭前妈妈问：Ready?（准备好了吗？）你说：Already!（已经好了！）",
      family: ["ready（准备好的）", "all（全部）"],
      synonyms: ["by now（到现在为止）", "previously（之前）"],
      antonyms: ["not yet（还没有）"],
      sentences: [
        { en: "I've already finished my homework.", zh: "我已经做完作业了。" },
        { en: "Have you already eaten lunch?", zh: "你已经吃过午饭了吗？" }
      ],
      fun: "already 和 all ready 是不同的！already（已经）是一个副词：I already know.（我已经知道了。）all ready（全都准备好）是形容词短语：We are all ready.（我们都准备好了。）别搞混了！",
      usage: "already 常用于现在完成时：I have already done it. 在疑问句中表示惊讶：Have you finished already?（你已经做完了？这么快！）already 通常放在助动词后、实义动词前。"
    },
    {
      word: "hope",
      phonetic: "/həʊp/",
      pos: "v.&n.",
      posClass: "v",
      meaning: "希望",
      root: {
        parts: [],
        explain: "古英语 hopian（期望）。hope 是日耳曼语系独有的词，与拉丁语系没有关系。它的核心含义是'对美好事物的期待和信念'。"
      },
      memory: "hope 只有四个字母，却是英语中最温暖的词之一。拆开看：h + ope——像在说'嗬，open(打开)希望之门'！hope 和 rope（绳子）押韵——抓住希望的绳索不放手！",
      family: ["hopeful（有希望的）", "hopefully（有希望地；但愿）", "hopeless（无望的）", "hoping（希望着）"],
      synonyms: ["wish（希望；祝愿）", "expect（期望）"],
      antonyms: ["despair（绝望）"],
      sentences: [
        { en: "I hope to visit London one day.", zh: "我希望有一天能去伦敦。" },
        { en: "We hope you have a great holiday.", zh: "我们希望你有一个美好的假期。" }
      ],
      fun: "Hope 是《星球大战》系列中最重要的主题之一——A New Hope（新希望）是第一部星战电影的副标题。在西方文化中，hope 与 faith（信念）和 love（爱）并称为三大美德（Three Virtues）。",
      usage: "hope to do sth. = 希望做某事。hope + (that) 从句 = 希望……：I hope (that) you are well. 注意 hope 和 wish 的区别：hope 表示'有可能实现的希望'，wish 常表示'不太可能实现的愿望'。"
    },
    {
      word: "Italian",
      phonetic: "/ɪˈtæliən/",
      pos: "adj.",
      posClass: "adj",
      meaning: "意大利的",
      root: {
        parts: [
          { text: "Italy", type: "root", label: "意大利" },
          { text: "-an", type: "suffix", label: "……的/……人" }
        ],
        explain: "Italy（意大利）+ -an（属于某地的）= Italian（意大利的/意大利人）。Italy 这个名字可能来自古意大利语 Víteliú，意思是'小牛之地'。"
      },
      memory: "Italian = Italy(意大利) + an(的/人)——意大利的/意大利人！类似的国家形容词：America → American, Australia → Australian, Canada → Canadian。",
      family: ["Italy（意大利）", "Italianate（意大利风格的）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "Italian food is popular all over the world.", zh: "意大利菜在全世界都很受欢迎。" },
        { en: "She is learning to speak Italian.", zh: "她正在学说意大利语。" }
      ],
      fun: "意大利对世界文化的贡献巨大：pizza（比萨饼）、pasta（意大利面）、opera（歌剧）、piano（钢琴）这些英语词全都来自意大利语！文艺复兴(Renaissance)也起源于意大利，达芬奇、米开朗基罗都是意大利人。",
      usage: "Italian 可以指：1. 意大利的（Italian food）；2. 意大利人（an Italian）；3. 意大利语（speak Italian）。国家名和语言名首字母必须大写！"
    },
    {
      word: "delicious",
      phonetic: "/dɪˈlɪʃəs/",
      pos: "adj.",
      posClass: "adj",
      meaning: "美味的",
      root: {
        parts: [
          { text: "de-", type: "prefix", label: "加强" },
          { text: "lic", type: "root", label: "拉丁语 licere = 引诱/愉悦" },
          { text: "-ious", type: "suffix", label: "形容词后缀" }
        ],
        explain: "de-（加强）+ lic（引诱/愉悦）+ -ious（形容词后缀）= 非常令人愉悦的 = 美味的。delicious 的本义是'给人极大愉悦的'，和 delight（高兴）是近亲。"
      },
      memory: "delicious 发音像'迪利舍斯'——好吃到'的确(de)是(li)奢侈(shəs)'！也可以记：de + licious，licious 听起来像'利嘴'——对嘴有利 = 好吃！",
      family: ["delicacy（美味佳肴；精致）", "delicate（精致的；易碎的）", "delight（高兴；使愉快）"],
      synonyms: ["yummy（好吃的，口语）", "tasty（美味的）"],
      antonyms: ["disgusting（令人恶心的）", "awful（糟糕的）"],
      sentences: [
        { en: "The pizza smells delicious!", zh: "这个比萨饼闻起来好香啊！" },
        { en: "My mom cooks delicious food every day.", zh: "我妈妈每天都做美味的食物。" }
      ],
      fun: "Delicious 是苹果公司曾经给网站收藏工具起的名字（del.icio.us）。在美食节目中，主持人常说 'Absolutely delicious!'（太好吃了！）来表达极致的美味。这个词的语气比 tasty 或 good 强烈得多。",
      usage: "delicious 语气很强，表示'非常好吃'，比 tasty、nice、good 都强烈。look delicious = 看起来很好吃。smell delicious = 闻起来很香。taste delicious = 尝起来很美味。"
    },
    {
      word: "pizza",
      phonetic: "/ˈpiːtsə/",
      pos: "n.",
      posClass: "n",
      meaning: "比萨饼",
      root: {
        parts: [],
        explain: "来自意大利语，可能源自希腊语 pitta（饼）或古日耳曼语 bizzo（一块面食）。pizza 最早出现在公元997年的意大利南部文献中，至今已有一千多年历史！"
      },
      memory: "pizza 的 zz 发 /ts/ 的音——这是意大利语的特点！类似的意大利语词：mozzarella（马苏里拉奶酪）也有 zz。记住：pizza 两个 z 不分家！",
      family: ["pizzeria（比萨店）", "pizza delivery（外卖比萨）"],
      synonyms: ["pie（饼，美式口语中也指比萨）"],
      antonyms: [],
      sentences: [
        { en: "Let's order a pizza for dinner.", zh: "我们晚饭点个比萨吧。" },
        { en: "I like pizza with lots of cheese.", zh: "我喜欢加很多芝士的比萨。" }
      ],
      fun: "现代比萨的故乡是意大利那不勒斯(Naples)。1889年，为了欢迎意大利王后玛格丽特(Margherita)，厨师用番茄（红）、马苏里拉奶酪（白）和罗勒叶（绿）做了一款代表意大利国旗颜色的比萨，这就是著名的玛格丽特比萨(Margherita Pizza)的由来！",
      usage: "pizza 在英语中是可数名词：a pizza, two pizzas。a slice/piece of pizza = 一片比萨。order pizza = 点比萨。pizza 的 zz 在英语中读 /ts/，不是 /z/。"
    },
    {
      word: "sandwich",
      phonetic: "/ˈsænwɪtʃ/",
      pos: "n.",
      posClass: "n",
      meaning: "三明治",
      root: {
        parts: [],
        explain: "以人名命名！18世纪英国的三明治伯爵(Earl of Sandwich)酷爱打牌，不愿意离桌吃饭，就让仆人把肉夹在两片面包中间端来——三明治就此诞生！食物以人名命名的经典案例。"
      },
      memory: "sandwich = sand(沙子) + witch(女巫)——沙子里的女巫？当然不是！但这么记很有画面感：沙(sand)滩上的女巫(witch)夹在两片面包之间！实际上这是个地名/人名。",
      family: ["sandwich（做动词：把……夹在中间）"],
      synonyms: ["sub（潜艇三明治）", "wrap（卷饼三明治）"],
      antonyms: [],
      sentences: [
        { en: "I had a sandwich for lunch.", zh: "我午餐吃了一个三明治。" },
        { en: "Would you like a chicken sandwich?", zh: "你想来一个鸡肉三明治吗？" }
      ],
      fun: "三明治伯爵(Earl of Sandwich)真有其人！他叫 John Montagu，是18世纪的英国贵族。他沉迷赌博不愿离开牌桌吃饭，就让仆人把肉夹面包送来。没想到这种吃法风靡全英国，大家就用他的封号命名了这种食物。",
      usage: "sandwich 是可数名词：a sandwich, sandwiches。make a sandwich = 做三明治。sandwich 也可做动词：be sandwiched between = 被夹在……之间。"
    },
    {
      word: "special",
      phonetic: "/ˈspeʃl/",
      pos: "adj.",
      posClass: "adj",
      meaning: "特殊的；特别的",
      root: {
        parts: [
          { text: "spec-", type: "root", label: "拉丁语 species = 种类/外观" },
          { text: "-ial", type: "suffix", label: "形容词后缀" }
        ],
        explain: "来自拉丁语 specialis（属于特定种类的）。spec- 这个词根与'看'有关：species（物种=看起来不同的类别）、spectacle（奇观=值得看的）、special（特别的=与众不同的）。"
      },
      memory: "special 里有 spec（看）——special 的东西值得特别看一看！同根词：spectacle（眼镜/奇观）、inspect（检查=往里看）、respect（尊敬=反复看）。",
      family: ["specially（特别地）", "specialist（专家）", "specialize（专攻）", "specialty（专长；特色菜）"],
      synonyms: ["particular（特定的）", "unique（独特的）", "extraordinary（非凡的）"],
      antonyms: ["ordinary（普通的）", "common（常见的）", "normal（正常的）"],
      sentences: [
        { en: "Today is a very special day for me.", zh: "今天对我来说是非常特别的一天。" },
        { en: "Is there anything special about this place?", zh: "这个地方有什么特别的吗？" }
      ],
      fun: "special 在餐厅里有一个特别的用法：today's special = 今日特色菜。服务员常会问：Would you like to try our special?（要试试我们的特色菜吗？）special offer = 特价优惠，购物时经常能看到！",
      usage: "special 比 particular 更口语化。nothing special = 没什么特别的。something special = 一些特别的东西。special offer = 特价。special edition = 特别版。"
    },
    {
      word: "cheap",
      phonetic: "/tʃiːp/",
      pos: "adj.",
      posClass: "adj",
      meaning: "便宜的",
      root: {
        parts: [],
        explain: "古英语 cēap 原意是'交易、买卖'，来自拉丁语 caupo（小商贩）。Cheapside 是伦敦一条著名的老街，曾经是最大的集市——cheap 从'集市'变成了'便宜'，因为集市上的东西讨价还价后都便宜了！"
      },
      memory: "cheap 发音像'去铺'——去小铺子买便宜货！cheap 和 sheep（绵羊）押韵——买便宜(cheap)的绵羊(sheep)！",
      family: ["cheapen（降低价格/降低品格）", "cheaply（便宜地）"],
      synonyms: ["inexpensive（不贵的）", "affordable（买得起的）"],
      antonyms: ["expensive（昂贵的）", "costly（代价高的）"],
      sentences: [
        { en: "This T-shirt is very cheap.", zh: "这件T恤衫很便宜。" },
        { en: "We found a cheap hotel near the station.", zh: "我们在车站附近找到了一家便宜的旅馆。" }
      ],
      fun: "cheap 有时带有贬义——cheap 可以形容人'小气的'或东西'质量差的'。如果你想说'便宜'但不想暗示质量差，可以用 inexpensive 或 affordable。所以夸东西便宜时说 It's a good deal!（很划算！）更礼貌。",
      usage: "cheap 可以有贬义（质量差）：cheap goods（廉价货）。中性/褒义用 inexpensive 或 affordable 更好。dirt cheap = 超级便宜。on the cheap = 省钱地。"
    },
    {
      word: "lovely",
      phonetic: "/ˈlʌvli/",
      pos: "adj.",
      posClass: "adj",
      meaning: "可爱的",
      root: {
        parts: [
          { text: "love", type: "root", label: "爱" },
          { text: "-ly", type: "suffix", label: "有……特质的" }
        ],
        explain: "love（爱）+ -ly（有……特质的）= 让人喜爱的 = 可爱的。-ly 在这里不是副词后缀，而是形容词后缀（类似 friendly, lonely, lively）。"
      },
      memory: "lovely = love(爱) + ly——让人爱(love)的 = 可爱的！注意：lovely 的 -ly 不是副词后缀，它本身是形容词。类似的：friendly（友好的）、lonely（孤独的）。",
      family: ["love（爱）", "lover（爱人）", "loving（充满爱的）", "beloved（心爱的）"],
      synonyms: ["cute（可爱的）", "adorable（讨人喜欢的）", "beautiful（美丽的）"],
      antonyms: ["ugly（丑陋的）", "unpleasant（令人不愉快的）"],
      sentences: [
        { en: "What a lovely day!", zh: "多么美好的一天啊！" },
        { en: "The little girl looks lovely in that dress.", zh: "那个小女孩穿那条裙子真可爱。" }
      ],
      fun: "lovely 在英式英语中是超级万能的夸奖词！英国人用 lovely 夸一切：lovely weather（好天气）、lovely food（好吃的食物）、lovely person（好人）、That's lovely!（太好了！）。在英国，一天能听到几十次 lovely！",
      usage: "lovely 在英式英语中使用频率极高，几乎可以替代所有褒义形容词。a lovely day = 美好的一天。How lovely! = 太好了！lovely 做名词可以称呼人：Hello, lovely!（你好，亲爱的！）"
    },
    {
      word: "sell",
      phonetic: "/sel/",
      pos: "v.",
      posClass: "v",
      meaning: "卖；出售",
      root: {
        parts: [],
        explain: "古英语 sellan，原意是'给予'，后来演变为'以物换钱=卖'。有趣的是，sell 最初的意思和 give（给）差不多——从'给'到'卖'，反映了人类从赠予到交易的经济发展史。"
      },
      memory: "sell 和 cell（细胞/牢房）发音一样！但意思完全不同。记忆：sell 比 cell 少了个 c——'C(see) 了再买，buy 了再 sell'。过去式是 sold，不规则变化！",
      family: ["seller（卖家）", "bestseller（畅销品/书）", "sale（销售；打折）", "sold（sell的过去式）"],
      synonyms: ["trade（交易）", "market（销售）"],
      antonyms: ["buy（买）", "purchase（购买）"],
      sentences: [
        { en: "They sell fresh fruit at the market.", zh: "他们在市场上卖新鲜水果。" },
        { en: "She sold her old bicycle last week.", zh: "她上周卖掉了她的旧自行车。" }
      ],
      fun: "bestseller（畅销书）是出版业最重要的标签之一。《哈利·波特》系列全球卖出超过5亿册，是有史以来最畅销的小说系列！sell out 有两个意思：1. 卖光（The tickets sold out.）2. 出卖原则（He sold out his friends.）。",
      usage: "sell 的过去式和过去分词都是 sold（不规则变化）。sell out = 卖光。sell well = 畅销。for sale = 待售（主动出售）。on sale = 打折出售。"
    },
    {
      word: "musician",
      phonetic: "/mjuˈzɪʃn/",
      pos: "n.",
      posClass: "n",
      meaning: "音乐家",
      root: {
        parts: [
          { text: "music", type: "root", label: "音乐" },
          { text: "-ian", type: "suffix", label: "从事……的人" }
        ],
        explain: "music（音乐）+ -ian（从事某职业的人）= 从事音乐的人 = 音乐家。-ian 是一个强大的职业后缀：magician（魔术师）、physician（医生）、librarian（图书管理员）。"
      },
      memory: "musician = music(音乐) + ian(人)——搞音乐的人 = 音乐家！-ian 后缀家族：magician（魔术师）、electrician（电工）、politician（政治家）、physician（医生）。",
      family: ["music（音乐）", "musical（音乐的/音乐剧）", "musicianship（音乐才能）"],
      synonyms: ["player（演奏者）", "performer（表演者）"],
      antonyms: [],
      sentences: [
        { en: "Mozart was a great musician.", zh: "莫扎特是一位伟大的音乐家。" },
        { en: "There are many street musicians in the city.", zh: "这座城市里有许多街头音乐家。" }
      ],
      fun: "-ian 后缀表示'从事某职业的人'，是英语中最常见的职业后缀之一：musician（音乐家）、magician（魔术师）、electrician（电工）、mathematician（数学家）、librarian（图书管理员）。记住 -ian，认识一大堆职业！",
      usage: "-ian 后缀变名词表示职业：music → musician, magic → magician, electric → electrician, politics → politician。street musician = 街头艺人。"
    },
    {
      word: "kind",
      phonetic: "/kaɪnd/",
      pos: "n.",
      posClass: "n",
      meaning: "种类",
      root: {
        parts: [],
        explain: "古英语 gecynd（种类；本性）。kind 做名词是'种类'（what kind?），做形容词是'善良的'——两个意思虽然看似无关，但古英语中它们是同一个词：'你是什么种类(kind)的人？善良(kind)的那种！'"
      },
      memory: "kind 一词两义：种类（名词）和善良（形容词）。本单元学的是名词'种类'：What kind of...? = 什么种类的……？记忆：kind(善良的)人有很多 kind(种类)的优点。",
      family: ["kindly（善良地；请）", "kindness（善良）", "unkind（不善良的）", "mankind（人类）"],
      synonyms: ["type（类型）", "sort（种类）"],
      antonyms: [],
      sentences: [
        { en: "What kind of music do you like?", zh: "你喜欢什么种类的音乐？" },
        { en: "There are many kinds of animals in the zoo.", zh: "动物园里有很多种类的动物。" }
      ],
      fun: "kind 做形容词'善良'和做名词'种类'看似无关，但在古英语中它们是一个意思：同一个 kind（种族）的人应该互相善良(kind)对待。所以 kind 的两个含义背后有着'同胞之爱'的温暖逻辑。",
      usage: "What kind of...? = 什么种类的……？ a kind of = 一种。all kinds of = 各种各样的。kind of = 有点儿（口语）：I'm kind of tired.（我有点累。）"
    },
    {
      word: "all kinds of",
      phonetic: "/ɔːl kaɪndz ɒv/",
      pos: "prep.",
      posClass: "prep",
      meaning: "各种各样的",
      root: {
        parts: [],
        explain: "all（所有的）+ kinds（种类，复数）+ of（的）= 所有种类的 = 各种各样的。这是一个固定搭配，表示数量和种类都很多。"
      },
      memory: "all kinds of = 所有种类的 = 各种各样的。类似表达：all sorts of, all types of, various kinds of。记住：kinds 要加 s（因为有 all 修饰，表示很多种类）！",
      family: ["all sorts of（各种各样的）", "all types of（各种类型的）", "various（各种各样的）"],
      synonyms: ["various（各种各样的）", "all sorts of（各种各样的）"],
      antonyms: [],
      sentences: [
        { en: "The shop sells all kinds of snacks.", zh: "这家商店卖各种各样的零食。" },
        { en: "We tried all kinds of food on our holiday.", zh: "假期里我们尝试了各种各样的食物。" }
      ],
      fun: "中国有句话叫'世界之大，无奇不有'，翻译成英语可以说 There are all kinds of wonders in the world. 旅行的乐趣之一就是体验 all kinds of 不同的文化、美食和风景！",
      usage: "all kinds of + 可数名词复数/不可数名词：all kinds of books（各种书）、all kinds of music（各种音乐）。类似短语：all sorts of, all types of。"
    },
    {
      word: "try",
      phonetic: "/traɪ/",
      pos: "v.",
      posClass: "v",
      meaning: "尝试",
      root: {
        parts: [],
        explain: "来自古法语 trier（筛选、挑选），原意是'通过测试来筛选'。try 从'筛选'变成了'尝试'——尝试就是在各种可能中进行筛选！"
      },
      memory: "try 发音像'踹'——踹(try)开困难的大门去尝试！也可以这样记：try 只有三个字母，短小精悍，就像尝试的第一步——Just try!（试试就好！）",
      family: ["trial（审判；试验）", "trying（令人恼火的）"],
      synonyms: ["attempt（尝试）", "have a go（试一试）"],
      antonyms: ["give up（放弃）", "quit（放弃）"],
      sentences: [
        { en: "Let me try this cake.", zh: "让我尝尝这块蛋糕。" },
        { en: "You should try your best in the exam.", zh: "你应该在考试中尽力。" }
      ],
      fun: "Just try it! 和 Just do it!（耐克的广告语）有异曲同工之妙。英语中有一句名言：'If at first you don't succeed, try, try again.'（如果一开始没成功，就再试一次又一次。）成功的秘诀就是不断 try！",
      usage: "try to do sth. = 尝试做某事（强调努力去做）。try doing sth. = 试着做某事（强调试试看效果）。try on = 试穿衣服。try out = 测试。try one's best = 尽力。have a try = 试一试。"
    },
    {
      word: "expensive",
      phonetic: "/ɪkˈspensɪv/",
      pos: "adj.",
      posClass: "adj",
      meaning: "昂贵的",
      root: {
        parts: [
          { text: "ex-", type: "prefix", label: "出" },
          { text: "pens", type: "root", label: "拉丁语 pendere = 称重/支付" },
          { text: "-ive", type: "suffix", label: "形容词后缀" }
        ],
        explain: "ex-（出）+ pens（支付/花费）+ -ive（……的）= 需要花很多钱出去的 = 昂贵的。expense（费用）= 花出去的钱。古代交易用天平称量金银来支付，所以 pend/pens = 称重 = 支付。"
      },
      memory: "expensive = ex(出) + pens(花费) + ive(的)——要花(pens)出去(ex)很多钱的 = 贵的！expense = 花费，expensive = 贵的。反义词 cheap 简单又短，expensive 又长又复杂——贵的东西名字都长！",
      family: ["expense（花费）", "expenses（开支）", "inexpensive（不贵的）"],
      synonyms: ["costly（昂贵的）", "pricey（价格高的，口语）"],
      antonyms: ["cheap（便宜的）", "inexpensive（不贵的）", "affordable（买得起的）"],
      sentences: [
        { en: "This watch is too expensive for me.", zh: "这块手表对我来说太贵了。" },
        { en: "Living in big cities is expensive.", zh: "在大城市生活很贵。" }
      ],
      fun: "世界上最贵的东西是什么？按重量算，反物质(antimatter)是最贵的——制造一克大约需要25万亿美元！日常生活中，伦敦和纽约经常竞争'全球最贵城市'的头衔。expensive 这个词本身也很长，好像在说：贵的东西连名字都不能太短！",
      usage: "expensive 是 cheap 的反义词。too expensive = 太贵了。How expensive! = 太贵了！inexpensive 是 expensive 的反义词（比 cheap 更正式更礼貌）。"
    }
  ]
};

if(typeof window!=='undefined'){window.UNIT10=UNIT10;}

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
      usage: "the Pacific Ocean = 太平洋（专有名词要大写）。类似的大洋名：the Atlantic Ocean（大西洋）、the Indian Ocean（印度洋）、the Arctic Ocean（北冰洋）。",
      visual: "想象麦哲伦站在船头，大洋平静得像一面镜子，他激动地大喊：'太平了太平了！'结果话音刚落，一条巨鲸从水面跃出，把他吓得连退三步——太平洋才不太平呢！",
      confuse: "Pacific（太平洋的）vs. specific（具体的）：拼写很像，但意思完全不同！Pacific 有个大写 P，是专有名词；specific 是'具体的、明确的'。记住：Pacific 的 pac = peace（和平），specific 的 spec = 看。",
      rhyme: "太平洋，Pacific，pac 是和平不着急；麦哲伦，坐大船，风平浪静好开心！",
      scene: "旅行目的地：Pacific（太平洋）、arrive（到达）、exciting（令人兴奋的）、hope（希望）——我们希望(hope)到达(arrive)太平洋(Pacific)，来一场令人兴奋的(exciting)旅行！"
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
      usage: "arrive 是不及物动词，后面不能直接接地点！arrive in + 大地方（城市/国家）：arrive in Shanghai。arrive at + 小地方（学校/车站）：arrive at school。千万不要说 arrive Beijing！",
      visual: "想象一艘古代大帆船在河上飘了好久，终于'砰'地一声撞上河岸，船长兴奋地跳上岸大喊：'We arrive!'结果脚一滑摔了个四脚朝天——到是到了，姿势不太优雅！",
      confuse: "arrive vs. reach vs. get to：三个都是'到达'，但用法不同！arrive 后面要加 in/at，不能直接接地点；reach 是及物动词，直接接地点（reach Beijing）；get to 最口语化（get to school）。千万别说 arrive Beijing！",
      rhyme: "arrive 到达要记牢，大地方用 in 小用 at；reach 后面直接加，get to 口语最随意！",
      scene: "旅途到达：arrive（到达）、Pacific（太平洋）、exciting（令人兴奋的）、already（已经）——我们已经(already)到达(arrive)了太平洋(Pacific)边上，真是太令人兴奋(exciting)了！"
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
      usage: "relax 既可以及物也可以不及物：Relax!（放松！）/ Relax your muscles.（放松肌肉。）relaxing = 令人放松的（修饰事物）：a relaxing holiday。relaxed = 感到放松的（修饰人）：I feel relaxed.",
      visual: "想象一个人考完试后像面条一样瘫在沙发上，全身软绵绵的，遥控器掉地上都懒得捡——这就是 relax 到了极致！旁边的猫也跟着四脚朝天，一起'再松一松'。",
      confuse: "relax vs. rest：relax 强调精神和身体的'放松'，可以边做事边 relax（比如听音乐）；rest 强调'休息、停下来不动'，通常是睡觉或躺着。relaxing vs. relaxed：relaxing 修饰事物（a relaxing trip），relaxed 修饰人（I feel relaxed）。",
      rhyme: "relax 放松笑哈哈，re 是再来 lax 是松；考完试后瘫沙发，像根面条软趴趴！",
      scene: "度假放松：relax（放松）、lovely（可爱的）、delicious（美味的）、exciting（令人兴奋的）——度假时我们在可爱的(lovely)海滩上放松(relax)，吃着美味的(delicious)食物，一切都令人兴奋(exciting)！"
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
      usage: "-ing 形容词修饰事物，-ed 形容词修饰人。The movie is exciting.（电影令人兴奋。）I am excited.（我很兴奋。）千万不要说 I am exciting（除非你想说自己是个令人兴奋的人）！",
      visual: "想象你坐过山车，头发全被吹竖起来，张大嘴巴尖叫，旁边的人拍下了你最夸张的表情——过山车是 exciting 的，而你那张扭曲的脸是 excited 的！一个修饰过山车，一个修饰你。",
      confuse: "exciting vs. excited：这是最经典的混淆！exciting 修饰事物（令人兴奋的），excited 修饰人（感到兴奋的）。类似的还有：boring/bored, interesting/interested, surprising/surprised。口诀：-ing 是原因，-ed 是感受！",
      rhyme: "exciting 修饰物，excited 修饰人；事物令人兴奋 ing，人的感受加上 ed！",
      scene: "游乐园体验：exciting（令人兴奋的）、special（特别的）、try（尝试）、lovely（可爱的）——游乐园里有各种特别的(special)项目可以尝试(try)，每一个都令人兴奋(exciting)，景色也很可爱(lovely)！"
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
      usage: "already 常用于现在完成时：I have already done it. 在疑问句中表示惊讶：Have you finished already?（你已经做完了？这么快！）already 通常放在助动词后、实义动词前。",
      visual: "想象全家人要出门旅行，妈妈挨个检查：行李好了吗？好了！护照好了吗？好了！零食好了吗？好了！妈妈一拍大腿：'ALL READY！我们 already 可以出发啦！'结果发现钥匙忘带了。",
      confuse: "already vs. yet vs. still：already 用在肯定句中表示'已经'（I've already eaten.）；yet 用在否定句和疑问句中表示'还没/已经了吗'（Have you eaten yet?）；still 表示'仍然'（I'm still eating.）。三个时间副词各有分工！",
      rhyme: "already 已经全准备，all 加 ready 合一块；肯定句中它常在，助动词后紧跟来！",
      scene: "出发前准备：already（已经）、arrive（到达）、hope（希望）、exciting（令人兴奋的）——我已经(already)准备好了，希望(hope)尽快到达(arrive)目的地，真是令人兴奋(exciting)！"
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
      usage: "hope to do sth. = 希望做某事。hope + (that) 从句 = 希望……：I hope (that) you are well. 注意 hope 和 wish 的区别：hope 表示'有可能实现的希望'，wish 常表示'不太可能实现的愿望'。",
      visual: "想象你站在许愿池前，往里扔了一枚硬币，硬币在水里转啊转，变成了一颗闪闪发光的星星飘上天空——这就是 hope 的力量！旁边的小鱼也跟着许愿，希望明天有更多面包屑。",
      confuse: "hope vs. wish：hope 表示有可能实现的希望（I hope it doesn't rain tomorrow.）；wish 常表示不太可能实现的愿望（I wish I could fly.）。考试常考这个区别！另外，hope 后面不能接双宾语，不能说 hope you happy，要说 hope you are happy。",
      rhyme: "hope 希望有盼头，wish 愿望难实现；hope to do 要记住，后面跟着动词原！",
      scene: "旅行期望：hope（希望）、arrive（到达）、delicious（美味的）、Italian（意大利的）——我希望(hope)能到达(arrive)意大利(Italian)，品尝美味的(delicious)正宗意大利菜！"
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
      usage: "Italian 可以指：1. 意大利的（Italian food）；2. 意大利人（an Italian）；3. 意大利语（speak Italian）。国家名和语言名首字母必须大写！",
      visual: "想象一个戴着厨师帽的意大利大叔，一手抛着旋转的比萨饼面团，一手拉着小提琴，脚下还踩着一个足球——意大利人就是这么多才多艺！比萨饼飞上天花板粘住了，大叔淡定地继续拉琴。",
      confuse: "Italian vs. Italy：Italian 是形容词或名词（意大利的/意大利人/意大利语），Italy 是国家名（意大利）。注意国家到形容词的变化规则：Italy → Italian, China → Chinese, Japan → Japanese, France → French，每个国家的变化方式不同！",
      rhyme: "Italy 是国家名，加 an 变 Italian；既是形容又是人，还能表示意大利语言！",
      scene: "意大利美食之旅：Italian（意大利的）、pizza（比萨饼）、delicious（美味的）、special（特别的）——意大利的(Italian)比萨饼(pizza)非常美味(delicious)，每一种口味都很特别(special)！"
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
      usage: "delicious 语气很强，表示'非常好吃'，比 tasty、nice、good 都强烈。look delicious = 看起来很好吃。smell delicious = 闻起来很香。taste delicious = 尝起来很美味。",
      visual: "想象你咬了一口超级大的芝士比萨，芝士拉丝拉了一米长还不断，你的眼睛变成了爱心形状，头顶冒出一圈小星星——这就是 delicious 的威力！旁边的小狗馋得口水流成了小河。",
      confuse: "delicious vs. tasty vs. yummy：三个都是'好吃的'，但语气不同。delicious 最正式最强烈，适合书面和口语；tasty 比较日常随意；yummy 是小孩子或撒娇时用的可爱说法。写作文用 delicious，和朋友聊天可以用 tasty 或 yummy。",
      rhyme: "delicious 真好吃，de 加 licious 好记住；看着香来闻着美，尝一口就停不住！",
      scene: "美食品尝：delicious（美味的）、pizza（比萨饼）、sandwich（三明治）、Italian（意大利的）、try（尝试）——让我们尝试(try)一下意大利(Italian)的比萨饼(pizza)和三明治(sandwich)，都非常美味(delicious)！"
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
      usage: "pizza 在英语中是可数名词：a pizza, two pizzas。a slice/piece of pizza = 一片比萨。order pizza = 点比萨。pizza 的 zz 在英语中读 /ts/，不是 /z/。",
      visual: "想象一个巨大的比萨饼从天而降，像飞碟一样旋转着，上面的芝士像岩浆一样流淌，蘑菇和香肠在上面冲浪——全班同学仰头张嘴接芝士，场面壮观又搞笑！",
      confuse: "pizza 的发音容易出错！zz 在意大利语中读 /ts/，不是 /z/，所以是 /ˈpiːtsə/ 而不是 /ˈpiːzə/。另外注意拼写：是两个 z，不是一个 z。类似的意大利语拼写：mozzarella（马苏里拉）、piazza（广场）。",
      rhyme: "pizza 比萨两个 z，发音记住读 /ts/；一片两片切开吃，cheese 拉丝长到飞！",
      scene: "点餐场景：pizza（比萨饼）、sandwich（三明治）、delicious（美味的）、cheap（便宜的）、sell（卖）——这家店卖(sell)比萨饼(pizza)和三明治(sandwich)，既便宜(cheap)又美味(delicious)！"
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
      usage: "sandwich 是可数名词：a sandwich, sandwiches。make a sandwich = 做三明治。sandwich 也可做动词：be sandwiched between = 被夹在……之间。",
      visual: "想象一个赌博的伯爵大人，一手拿着扑克牌，一手举着高高叠了十层肉和蔬菜的超级三明治，嘴巴张得比三明治还大——他边打牌边吃，结果酱汁滴到了牌上，对手气得直跺脚！",
      confuse: "sandwich 拼写容易错！注意中间是 dw 不是 dw——完整拼写是 s-a-n-d-w-i-c-h，别丢了 d 或 h。另外 sandwich 和 sand（沙子）没有关系，它来自人名 Sandwich（三明治伯爵的封地名）。",
      rhyme: "三明治 sandwich 伯爵名，打牌吃饭两不停；面包夹肉真方便，sand 加 wich 要拼清！",
      scene: "快餐店点餐：sandwich（三明治）、pizza（比萨饼）、sell（卖）、cheap（便宜的）、delicious（美味的）——这家快餐店卖(sell)三明治(sandwich)和比萨饼(pizza)，便宜(cheap)又美味(delicious)！"
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
      usage: "special 比 particular 更口语化。nothing special = 没什么特别的。something special = 一些特别的东西。special offer = 特价。special edition = 特别版。",
      visual: "想象一家餐厅里，服务员端出一个盖着红布的盘子，神秘兮兮地掀开——里面竟然是一只会唱歌的小龙虾！全餐厅的人都惊呆了，这就是 today's special（今日特色菜），实在太 special 了！",
      confuse: "special vs. especial vs. specific：special 是最常用的，表示'特别的'；especial 比较正式，意思差不多但很少用；specific 是'具体的、明确的'（a specific question 一个具体的问题）。日常用 special 就对了！",
      rhyme: "special 特别不一般，spec 是看来 ial 是形容词；今日特色 today's special，与众不同人人赞！",
      scene: "餐厅特色菜：special（特别的）、delicious（美味的）、try（尝试）、kind（种类）、sell（卖）——餐厅卖(sell)各种种类(kind)的特色菜(special)，每一道都很美味(delicious)，你一定要尝试(try)！"
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
      usage: "cheap 可以有贬义（质量差）：cheap goods（廉价货）。中性/褒义用 inexpensive 或 affordable 更好。dirt cheap = 超级便宜。on the cheap = 省钱地。",
      visual: "想象一个集市上，一个大叔疯狂砍价，原价100的东西他砍到了1块钱，卖家心在滴血，大叔却得意地抱着一堆便宜货跳起了胜利之舞——周围的绵羊(sheep)都在鼓掌，因为 cheap 和 sheep 押韵！",
      confuse: "cheap vs. inexpensive vs. affordable：cheap 有时暗示'质量差'（cheap goods 廉价货），带贬义；inexpensive 是中性的'不贵的'，不暗示质量差；affordable 是'买得起的'，带褒义。如果想夸东西便宜又好，别说 cheap，说 affordable 或 a good deal！",
      rhyme: "cheap 便宜 sheep 绵羊，两个押韵好搭档；便宜不一定是好，质量好才是真棒！",
      scene: "购物比价：cheap（便宜的）、expensive（昂贵的）、sell（卖）、special（特别的）、try（尝试）——商店卖(sell)各种东西，有便宜(cheap)的也有昂贵(expensive)的，遇到特价(special)要尝试(try)看看！"
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
      usage: "lovely 在英式英语中使用频率极高，几乎可以替代所有褒义形容词。a lovely day = 美好的一天。How lovely! = 太好了！lovely 做名词可以称呼人：Hello, lovely!（你好，亲爱的！）",
      visual: "想象一个英国老奶奶，看到什么都说 'Lovely!'——看到一朵花：'Lovely!' 看到一只猫：'Lovely!' 看到下雨：'Lovely!' 甚至看到堵车也说 'Lovely!'——在英国人嘴里，什么都可以是 lovely！",
      confuse: "lovely vs. beautiful vs. cute：lovely 是英式英语万能夸奖词，语气温暖亲切，用途最广；beautiful 语气最强，多形容外貌或风景；cute 偏可爱、小巧，多形容小孩或小动物。另外注意：lovely 虽然以 -ly 结尾，但它是形容词不是副词！",
      rhyme: "lovely 可爱人人夸，love 加 ly 不是副词啊；英国人的万能词，天气食物都用它！",
      scene: "旅途风景：lovely（可爱的）、exciting（令人兴奋的）、special（特别的）、relax（放松）——旅途中看到可爱的(lovely)风景，感觉很特别(special)又令人兴奋(exciting)，让人完全放松(relax)下来！"
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
      usage: "sell 的过去式和过去分词都是 sold（不规则变化）。sell out = 卖光。sell well = 畅销。for sale = 待售（主动出售）。on sale = 打折出售。",
      visual: "想象一个市场摊贩疯狂叫卖，嗓门大到隔着三条街都能听到：'Sell! Sell! Sell!'他把水果抛向空中像杂技表演，顾客们纷纷掏钱，水果飞来飞去像在下'水果雨'——生意太好，摊位瞬间 sold out！",
      confuse: "sell vs. sale：sell 是动词（卖），sale 是名词（销售/打折）。for sale = 待售的（房子 for sale 就是要卖的），on sale = 在打折。另外 sell 和 cell 发音一模一样（同音词），拼写别搞混——sell 是卖，cell 是细胞/牢房。",
      rhyme: "sell 是卖来 buy 是买，过去式 sold 要记快；sell out 卖光生意好，on sale 打折快来嗨！",
      scene: "市场交易：sell（卖）、cheap（便宜的）、expensive（昂贵的）、all kinds of（各种各样的）、try（尝试）——市场上卖(sell)着各种各样的(all kinds of)东西，有便宜(cheap)的也有贵(expensive)的，可以尝试(try)砍价！"
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
      usage: "-ian 后缀变名词表示职业：music → musician, magic → magician, electric → electrician, politics → politician。street musician = 街头艺人。",
      visual: "想象一个街头音乐家，同时用脚弹吉他、嘴吹口琴、手打鼓、头顶还转着一个小提琴——他一个人就是一支乐队！路过的猫猫狗狗都停下来跟着节奏摇头晃脑，帽子里的硬币堆成了小山。",
      confuse: "musician vs. music：musician 是'音乐家'（人），music 是'音乐'（事物），别搞混了。另外注意 musician 的发音 /mjuˈzɪʃn/，中间的 sic 变成了 /zɪʃ/ 的音，不要读成 /mjuˈzɪkiən/。记住 -ian 后缀的发音：/ʃn/ 或 /ən/。",
      rhyme: "musician 音乐家，music 加 ian 变成他；吉他钢琴样样行，街头演奏人人夸！",
      scene: "街头表演：musician（音乐家）、sell（卖）、kind（种类）、special（特别的）、lovely（可爱的）——街头音乐家(musician)演奏各种种类(kind)的音乐，特别(special)又可爱(lovely)，旁边还有人卖(sell)小吃。"
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
      usage: "What kind of...? = 什么种类的……？ a kind of = 一种。all kinds of = 各种各样的。kind of = 有点儿（口语）：I'm kind of tired.（我有点累。）",
      visual: "想象一个巨大的分类柜，每个抽屉上都写着不同的 kind：一个抽屉打开是音乐，一个是食物，一个是动物——突然所有抽屉同时弹开，东西乱飞，音乐家骑着比萨饼追着一只猫满屋跑——all kinds of 混乱！",
      confuse: "kind（种类）vs. type vs. sort：这三个词都表示'种类'，意思非常接近。kind 最常用最口语化（What kind of...?）；type 偏正式一点（What type of...?）；sort 在英式英语中更常用（What sort of...?）。另外别忘了 kind 还可以做形容词表示'善良的'！",
      rhyme: "kind 种类也善良，一词两义要记牢；What kind of 问种类，a kind person 心肠好！",
      scene: "分类讨论：kind（种类）、all kinds of（各种各样的）、special（特别的）、musician（音乐家）——你喜欢什么种类(kind)的音乐家(musician)？有各种各样的(all kinds of)风格，每种都很特别(special)！"
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
      usage: "all kinds of + 可数名词复数/不可数名词：all kinds of books（各种书）、all kinds of music（各种音乐）。类似短语：all sorts of, all types of。",
      visual: "想象一个超级大的自助餐厅，桌子从这头排到看不见的那头，上面摆着全世界的食物：比萨饼旁边是寿司，三明治旁边是火锅，甜甜圈旁边是臭豆腐——真是 all kinds of food！一个小朋友两眼放光，不知道从哪里吃起。",
      confuse: "all kinds of vs. a kind of：all kinds of 是'各种各样的'（很多种），a kind of 是'一种'（只有一种）。注意 all kinds of 中的 kinds 要加 s！另外 kind of 在口语中还表示'有点儿'：I'm kind of hungry.（我有点饿。）这三个短语意思完全不同，别混淆！",
      rhyme: "all kinds of 各种各样，kinds 记得加上 s；世界美食千千万，全部尝遍最开心！",
      scene: "美食博览会：all kinds of（各种各样的）、pizza（比萨饼）、sandwich（三明治）、delicious（美味的）、try（尝试）——美食博览会上有各种各样的(all kinds of)比萨饼(pizza)和三明治(sandwich)，都很美味(delicious)，快来尝试(try)吧！"
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
      usage: "try to do sth. = 尝试做某事（强调努力去做）。try doing sth. = 试着做某事（强调试试看效果）。try on = 试穿衣服。try out = 测试。try one's best = 尽力。have a try = 试一试。",
      visual: "想象一个小朋友站在跳水台上，腿抖得像弹簧，教练在下面喊：'Just try!'他闭着眼睛一跳——'啪'的一声肚子先着水，溅起三米高的水花！虽然姿势不好看，但他勇敢地 try 了，全场为他鼓掌！",
      confuse: "try to do vs. try doing：这两个用法意思不同！try to do = 努力去做（还没做成，在尝试中）；try doing = 试着做做看（看看效果如何）。比如：I tried to open the door.（我努力想打开门——但可能没打开。）I tried opening the door.（我试了试开门这个方法——看看行不行。）",
      rhyme: "try 尝试不要怕，踹开困难往前爬；try to do 努力做，try doing 试方法！",
      scene: "美食体验：try（尝试）、delicious（美味的）、pizza（比萨饼）、sandwich（三明治）、special（特别的）——来尝试(try)一下特别的(special)比萨饼(pizza)和三明治(sandwich)吧，它们都非常美味(delicious)！"
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
      usage: "expensive 是 cheap 的反义词。too expensive = 太贵了。How expensive! = 太贵了！inexpensive 是 expensive 的反义词（比 cheap 更正式更礼貌）。",
      visual: "想象你走进一家奢侈品店，看了一下标签，眼珠子差点弹出来——一双袜子的价格够买一辆自行车！你默默放下袜子，倒退着走出店门，钱包在口袋里瑟瑟发抖。这就是 expensive 的威力！",
      confuse: "expensive vs. cheap vs. inexpensive：expensive（贵的）和 cheap（便宜的）是最常见的一对反义词。但 cheap 有贬义（暗示质量差），而 inexpensive（不贵的）是 expensive 的中性反义词，不暗示质量差。写作文时推荐用 inexpensive 替代 cheap。",
      rhyme: "expensive 太昂贵，钱包看了直流泪；cheap 便宜是反义，inexpensive 更得体！",
      scene: "旅行购物：expensive（昂贵的）、cheap（便宜的）、sell（卖）、special（特别的）、lovely（可爱的）——旅行时看到可爱的(lovely)特别(special)纪念品在卖(sell)，有贵(expensive)的有便宜(cheap)的，要货比三家！"
    }
  ]
};

if(typeof window!=='undefined'){window.UNIT10=UNIT10;}

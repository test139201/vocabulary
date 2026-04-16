// Unit 12: Western music (西方音乐)
const UNIT12 = {
  id: 12,
  title: "Western music",
  theme: "西方音乐",
  color: "#0ea5e9",
  words: [
    {
      word: "Western",
      phonetic: "/ˈwestən/",
      pos: "adj.",
      posClass: "adj",
      meaning: "西方的",
      root: {
        parts: [
          { text: "west", type: "root", label: "西方" },
          { text: "-ern", type: "suffix", label: "方向形容词后缀" }
        ],
        explain: "west（西方）+ -ern（方向后缀）= 西方的。-ern 是表示方向的形容词后缀：eastern（东方的）、southern（南方的）、northern（北方的）。"
      },
      memory: "Western = west（西）+ ern——记住方向后缀 -ern：eastern, western, southern, northern，四个方向一起记！",
      family: ["west（西方）", "eastern（东方的）", "southern（南方的）", "northern（北方的）"],
      synonyms: ["occidental（西方的，正式用语）"],
      antonyms: ["Eastern（东方的）"],
      sentences: [
        { en: "Western music is very different from Chinese music.", zh: "西方音乐和中国音乐非常不同。" },
        { en: "Many young people enjoy Western culture.", zh: "许多年轻人喜欢西方文化。" }
      ],
      fun: "Western 大写时特指'西方文化/西方国家'；小写 western 可以指普通的方向。Western movie 还可以指'西部牛仔电影'——那种美国西部荒野的冒险电影！",
      usage: "指'西方文化/西方国家'时 Western 首字母大写。western food = 西餐。Western countries = 西方国家。"
    },
    {
      word: "music",
      phonetic: "/ˈmjuːzɪk/",
      pos: "n.",
      posClass: "n",
      meaning: "音乐",
      root: {
        parts: [{ text: "mus-", type: "root", label: "希腊语 mousa = 缪斯女神" }],
        explain: "来自希腊语 mousikē = 缪斯女神的艺术。Muse（缪斯）是希腊神话中掌管文艺的九位女神，音乐是她们赐予人类的礼物！"
      },
      memory: "music 发音像'妙极可'——听到美妙的音乐（music），忍不住说'妙极可'（太妙了）！",
      family: ["musician（音乐家）", "musical（音乐的/音乐剧）", "museum（博物馆=缪斯的殿堂）"],
      synonyms: ["melody（旋律）", "tune（曲调）"],
      antonyms: ["noise（噪音）", "silence（寂静）"],
      sentences: [
        { en: "I like listening to music after school.", zh: "我喜欢放学后听音乐。" },
        { en: "Music can make people happy.", zh: "音乐能让人快乐。" }
      ],
      fun: "music 和 museum（博物馆）竟然是同源词！都来自 Muse（缪斯女神）。museum = 缪斯的神殿 = 存放艺术品的地方。希腊九位缪斯分别掌管：史诗、历史、抒情诗、音乐、悲剧、舞蹈、喜剧、天文、合唱！",
      usage: "music 是不可数名词，不能说 a music，要说 a piece of music（一首乐曲）。listen to music（不加 the）。"
    },
    {
      word: "instrument",
      phonetic: "/ˈɪnstrəmənt/",
      pos: "n.",
      posClass: "n",
      meaning: "乐器",
      root: {
        parts: [
          { text: "in-", type: "prefix", label: "在里面" },
          { text: "stru-", type: "root", label: "拉丁语 struere = 建造" },
          { text: "-ment", type: "suffix", label: "名词后缀=工具" }
        ],
        explain: "in-（在里面）+ stru（建造）+ -ment（工具）= 用来建造/构建的工具。最初指任何工具，后来特别用于指乐器。同根词：construct = 共同建造 = 建设。"
      },
      memory: "instrument = in + stru(建造) + ment(工具)——音乐是用乐器（instrument）'建造'出来的艺术！",
      family: ["instrumental（器乐的；起重要作用的）", "construct（建造）", "structure（结构）", "instruct（指导=在内心建造知识）"],
      synonyms: ["tool（工具）"],
      antonyms: [],
      sentences: [
        { en: "Can you play any musical instruments?", zh: "你会演奏乐器吗？" },
        { en: "The piano is a popular instrument.", zh: "钢琴是一种流行的乐器。" }
      ],
      fun: "instrument 不只指乐器，还指各种工具和仪器：surgical instruments（手术器械）、scientific instruments（科学仪器）。飞机驾驶舱的仪表盘叫 instrument panel！",
      usage: "play an instrument = 演奏乐器。musical instrument = 乐器。注意：play the piano/violin（乐器前加 the），但 play an instrument（泛指时用 an）。"
    },
    {
      word: "drum",
      phonetic: "/drʌm/",
      pos: "n.",
      posClass: "n",
      meaning: "鼓",
      root: {
        parts: [],
        explain: "可能是拟声词，模仿敲鼓时'咚咚'的声音。drum 在16世纪进入英语，可能来自荷兰语或德语。"
      },
      memory: "drum 发音像'准'——打鼓（drum）的节奏要'准'！咚咚咚，drum drum drum！",
      family: ["drummer（鼓手）", "drumstick（鼓棒/鸡腿）", "eardrum（耳膜=耳朵里的鼓）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "He plays the drums in a rock band.", zh: "他在一个摇滚乐队里打鼓。" },
        { en: "The sound of drums is exciting.", zh: "鼓声令人振奋。" }
      ],
      fun: "drumstick 有两个意思：1. 鼓棒（敲鼓的棍子）；2. 鸡腿（形状像鼓棒）！eardrum = ear（耳朵）+ drum（鼓）= 耳膜（像鼓皮一样振动）。鼓可能是人类最早的乐器之一，几万年前就有了！",
      usage: "play the drums = 打鼓（注意用复数 drums，因为一套鼓有好几个）。drum 还可以做动词：drum on the table = 在桌子上敲击。"
    },
    {
      word: "guitar",
      phonetic: "/ɡɪˈtɑː(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "吉他",
      root: {
        parts: [],
        explain: "来自西班牙语 guitarra，源自阿拉伯语 qīṯāra，最终来自希腊语 kithara（一种古代弦乐器）。吉他从中东经西班牙传入欧洲！"
      },
      memory: "guitar 发音就是'吉他'的音译！这是少数几个中文音译非常接近英文发音的单词。",
      family: ["guitarist（吉他手）", "bass guitar（贝斯吉他）", "electric guitar（电吉他）", "acoustic guitar（木吉他）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "She is learning to play the guitar.", zh: "她正在学弹吉他。" },
        { en: "The guitar is one of the most popular instruments in the world.", zh: "吉他是世界上最流行的乐器之一。" }
      ],
      fun: "吉他的旅行路线：古希腊 kithara → 阿拉伯 qīṯāra → 西班牙 guitarra → 英语 guitar。它穿越了三大洲！现代吉他分 acoustic（木吉他/原声吉他）和 electric（电吉他）两大类。",
      usage: "play the guitar = 弹吉他（乐器前加 the）。air guitar = 空气吉他（假装弹吉他的动作，很搞笑）。"
    },
    {
      word: "organ",
      phonetic: "/ˈɔːɡən/",
      pos: "n.",
      posClass: "n",
      meaning: "管风琴",
      root: {
        parts: [{ text: "organ-", type: "root", label: "希腊语 organon = 工具/器官" }],
        explain: "来自希腊语 organon = 工具。organ 既指'管风琴'（一种乐器工具），也指'器官'（身体的工具）。organize = 把工具组织起来 = 组织。"
      },
      memory: "organ 有两个含义：管风琴和器官——想象一个巨大的管风琴（organ），每根管子就像身体的一个器官（organ）一样协同工作！",
      family: ["organic（有机的；器官的）", "organize（组织=把工具排好）", "organization（组织）", "organism（有机体=有器官的东西）"],
      synonyms: ["pipe organ（管风琴）"],
      antonyms: [],
      sentences: [
        { en: "The organ is a large instrument often found in churches.", zh: "管风琴是一种常见于教堂的大型乐器。" },
        { en: "He learned to play the organ when he was young.", zh: "他小时候学过弹管风琴。" }
      ],
      fun: "管风琴是最大的乐器之一，有的管风琴有上万根管子！大教堂里的管风琴声音震撼无比。organ 和 organize 是同源词：organize = 让所有'工具/器官'各就各位 = 组织安排。",
      usage: "organ 做乐器时指管风琴；做医学用语时指器官（heart is an organ = 心脏是一个器官）。play the organ = 弹管风琴。"
    },
    {
      word: "violin",
      phonetic: "/ˌvaɪəˈlɪn/",
      pos: "n.",
      posClass: "n",
      meaning: "小提琴",
      root: {
        parts: [
          { text: "viol-", type: "root", label: "意大利语 viola = 中提琴" },
          { text: "-in", type: "suffix", label: "小的（意大利语指小后缀）" }
        ],
        explain: "来自意大利语 violino = 小 viola（中提琴）。-ino/-in 在意大利语中表示'小的'：cappuccino = 小帽子（小僧侣帽=咖啡上的奶泡像小帽子）。"
      },
      memory: "violin 发音像'歪尔林'——拉小提琴时身体微微歪着，在树林（林）里演奏，多浪漫！",
      family: ["violinist（小提琴家）", "viola（中提琴）", "cello（大提琴）"],
      synonyms: ["fiddle（小提琴，口语/民间音乐用法）"],
      antonyms: [],
      sentences: [
        { en: "She has been playing the violin since she was five.", zh: "她从五岁起就开始拉小提琴了。" },
        { en: "The violin has a beautiful sound.", zh: "小提琴的声音很优美。" }
      ],
      fun: "提琴家族从小到大：violin（小提琴）→ viola（中提琴）→ cello（大提琴）→ double bass（低音提琴）。小提琴是乐团中数量最多的乐器，一个交响乐团通常有30把小提琴！fiddle 是小提琴的别称，多用于民间音乐。",
      usage: "play the violin = 拉小提琴。violinist = 小提琴家。注意发音重音在最后一个音节：vi-o-LIN。"
    },
    {
      word: "elder",
      phonetic: "/ˈeldə(r)/",
      pos: "adj.",
      posClass: "adj",
      meaning: "年长的",
      root: {
        parts: [{ text: "eld-", type: "root", label: "古英语 eald = 老的" }],
        explain: "来自古英语 eald（老的）的比较级形式。eld- 和 old 是同源词！elder 是 old 的一个变体比较级，专门用于家庭成员之间的年龄比较。"
      },
      memory: "elder 和 older 很像——elder 专门用于家庭成员之间：my elder brother（我哥哥），而 older 更通用。",
      family: ["elderly（年长的，委婉说法）", "eldest（最年长的）", "old（老的）", "older（更老的）"],
      synonyms: ["older（更大的/更老的）", "senior（年长的）"],
      antonyms: ["younger（更年轻的）", "junior（年幼的）"],
      sentences: [
        { en: "My elder brother taught me to play the guitar.", zh: "我哥哥教我弹吉他。" },
        { en: "She is my elder sister.", zh: "她是我姐姐。" }
      ],
      fun: "elder 和 older 的区别：elder 只用于家庭成员之间（elder brother/sister），不能用于 than 比较句；older 则到处都能用。所以可以说 She is older than me，但不说 She is elder than me。",
      usage: "elder 只用于名词前修饰家庭成员：elder brother（哥哥）、elder sister（姐姐）。不能说 elder than，要说 older than。elderly = 年长的（比 old 礼貌的说法）。"
    },
    {
      word: "song",
      phonetic: "/sɒŋ/",
      pos: "n.",
      posClass: "n",
      meaning: "歌曲",
      root: {
        parts: [],
        explain: "来自古英语 sang，跟 sing（唱歌）是同源词。sing → song，就像 ring → wrong 中的元音变化模式。"
      },
      memory: "song 和 sing 是一家人——sing（唱）出来的就是 song（歌）！注意元音变化：sing → song，跟 ring → rong 类似。",
      family: ["sing（唱歌）", "singer（歌手）", "singing（歌唱）", "songbird（鸣禽=会唱歌的鸟）", "songwriter（词曲作者）"],
      synonyms: ["tune（曲调）", "melody（旋律）"],
      antonyms: [],
      sentences: [
        { en: "What's your favorite song?", zh: "你最喜欢的歌是什么？" },
        { en: "She sang a beautiful song at the school concert.", zh: "她在学校音乐会上唱了一首优美的歌曲。" }
      ],
      fun: "songwriter = song（歌）+ writer（作者）= 词曲作者。Swan song（天鹅之歌）是一个成语，指'最后的作品/绝唱'——传说天鹅临死前会唱出最美的歌。",
      usage: "sing a song = 唱一首歌。注意 song 是可数名词：a song, two songs。pop song = 流行歌曲；folk song = 民歌。"
    },
    {
      word: "blues",
      phonetic: "/bluːz/",
      pos: "n.",
      posClass: "n",
      meaning: "布鲁斯音乐",
      root: {
        parts: [{ text: "blue", type: "root", label: "蓝色=忧郁" }],
        explain: "来自 blue devils（蓝色恶魔），指忧郁的情绪。布鲁斯音乐诞生于美国南部非裔美国人社区，以其忧伤的曲调著称。blue = 忧郁的，所以 blues = 忧伤的音乐。"
      },
      memory: "blues = blue（蓝色/忧郁）+ s——蓝色代表忧伤，blues 就是忧伤的音乐！feeling blue = 心情忧郁。",
      family: ["blue（蓝色的；忧郁的）", "bluesy（布鲁斯风格的）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "Blues music started in America.", zh: "布鲁斯音乐起源于美国。" },
        { en: "He likes to listen to blues when he feels sad.", zh: "他心情不好的时候喜欢听布鲁斯音乐。" }
      ],
      fun: "布鲁斯是爵士乐和摇滚乐的'爸爸'！19世纪末美国南部黑人劳动者在田间唱的悲伤歌曲逐渐发展成了布鲁斯。后来布鲁斯演变出了爵士乐（jazz）、节奏布鲁斯（R&B）和摇滚乐（rock）。",
      usage: "blues 虽然有 s，但可以做单数用：Blues is a type of music.（布鲁斯是一种音乐类型。）have/get the blues = 心情忧郁。"
    },
    {
      word: "pop music",
      phonetic: "/pɒp ˈmjuːzɪk/",
      pos: "n.",
      posClass: "n",
      meaning: "流行音乐",
      root: {
        parts: [
          { text: "pop", type: "root", label: "popular 的缩写=流行的" },
          { text: "music", type: "root", label: "音乐" }
        ],
        explain: "pop 是 popular（流行的）的缩写。pop music = popular music = 流行音乐。pop 从20世纪50年代开始用来指代流行音乐。"
      },
      memory: "pop = popular（流行的）的缩写——pop music 就是大家都喜欢（popular）的音乐！",
      family: ["pop（流行的）", "popular（流行的；受欢迎的）", "pop star（流行歌星）", "pop culture（流行文化）"],
      synonyms: ["popular music（流行音乐）"],
      antonyms: ["classical music（古典音乐）"],
      sentences: [
        { en: "Pop music is popular among young people.", zh: "流行音乐在年轻人中很受欢迎。" },
        { en: "Many Chinese students like listening to pop music.", zh: "许多中国学生喜欢听流行音乐。" }
      ],
      fun: "流行音乐之王 Michael Jackson 被称为 King of Pop。流行音乐的特点是旋律简单好记、容易传唱。K-pop（韩国流行音乐）和 C-pop（华语流行音乐）现在在全世界都很火！",
      usage: "pop music 是不可数名词。pop 还有'砰'的意思（拟声词）：pop! 气球爆了！popcorn（爆米花）= pop（爆）+ corn（玉米）。"
    },
    {
      word: "rock music",
      phonetic: "/rɒk ˈmjuːzɪk/",
      pos: "n.",
      posClass: "n",
      meaning: "摇滚音乐",
      root: {
        parts: [
          { text: "rock", type: "root", label: "摇动/岩石" },
          { text: "music", type: "root", label: "音乐" }
        ],
        explain: "rock 原意是'摇动'（和'石头'是同形异义词）。rock and roll = 摇摇晃晃 = 摇滚！最初描述的是音乐让人身体摇摆的感觉。"
      },
      memory: "rock = 摇动——听摇滚音乐让人忍不住摇头晃脑！rock 还有'石头'的意思，摇滚就像石头一样有力量！",
      family: ["rock（摇滚/石头/摇动）", "rock and roll（摇滚乐）", "rocker（摇滚歌手）", "rocket（火箭）"],
      synonyms: ["rock and roll（摇滚乐）", "rock（摇滚）"],
      antonyms: [],
      sentences: [
        { en: "Rock music is loud and exciting.", zh: "摇滚音乐响亮而令人兴奋。" },
        { en: "My father liked rock music when he was young.", zh: "我父亲年轻时喜欢摇滚音乐。" }
      ],
      fun: "摇滚乐诞生于20世纪50年代的美国，融合了布鲁斯和乡村音乐。Beatles（披头士乐队）是最著名的摇滚乐队之一。You rock! 在口语中意思是'你太棒了！'",
      usage: "rock music 是不可数名词。rock 单独使用也可以指摇滚音乐。You rock! = 你太厉害了！（口语）"
    },
    {
      word: "classical music",
      phonetic: "/ˈklæsɪkl ˈmjuːzɪk/",
      pos: "n.",
      posClass: "n",
      meaning: "古典音乐",
      root: {
        parts: [
          { text: "class-", type: "root", label: "拉丁语 classis = 等级/类别" },
          { text: "-ical", type: "suffix", label: "形容词后缀" },
          { text: "music", type: "root", label: "音乐" }
        ],
        explain: "classical 来自 classic = 一流的、经典的（最高等级的）。classical music = 经典的/一流的音乐。class（等级）→ classic（经典的）→ classical（古典的）。"
      },
      memory: "classical = class（班级/等级）+ ical——最高等级（class）的音乐就是古典（classical）音乐！经典到成为教科书级别。",
      family: ["classic（经典的）", "classical（古典的）", "class（等级/班级）", "classify（分类=按等级分）"],
      synonyms: [],
      antonyms: ["pop music（流行音乐）", "modern music（现代音乐）"],
      sentences: [
        { en: "Beethoven is famous for his classical music.", zh: "贝多芬以他的古典音乐闻名。" },
        { en: "Classical music can help you relax.", zh: "古典音乐可以帮助你放松。" }
      ],
      fun: "古典音乐三巨头：Bach（巴赫）、Mozart（莫扎特）、Beethoven（贝多芬）。莫扎特5岁就开始作曲，贝多芬在失聪后还写出了伟大的《第九交响曲》！古典音乐已经有三四百年的历史了。",
      usage: "classical 和 classic 有区别：classical music = 古典音乐（指一种音乐类型）；a classic song = 一首经典歌曲（指质量很高）。"
    },
    {
      word: "century",
      phonetic: "/ˈsentʃəri/",
      pos: "n.",
      posClass: "n",
      meaning: "世纪",
      root: {
        parts: [{ text: "cent-", type: "root", label: "拉丁语 centum = 一百" }],
        explain: "来自拉丁语 centuria = 一百个。cent- = 一百：century = 一百年 = 一个世纪。centimeter = 百分之一米 = 厘米。percent = 每一百 = 百分之。"
      },
      memory: "century = cent（百）+ ury——一百（cent）年就是一个世纪（century）！cent 家族：centimeter（厘米=1/100米）、percent（百分比=每100）。",
      family: ["cent（分=1/100美元）", "centimeter（厘米=1/100米）", "percent（百分之）", "centipede（蜈蚣=百足虫）"],
      synonyms: ["hundred years（一百年）"],
      antonyms: [],
      sentences: [
        { en: "We are living in the 21st century.", zh: "我们生活在21世纪。" },
        { en: "Blues music started in the 19th century.", zh: "布鲁斯音乐起源于19世纪。" }
      ],
      fun: "cent- = 100：century（世纪=100年）、cent（分=1/100元）、centipede（蜈蚣=百足虫，虽然实际上没有100条腿）、centimeter（厘米=1/100米）。注意：21世纪 = 2000-2099年，不是2100年开始！",
      usage: "the 21st century = 21世纪（序数词+century）。in the 19th century = 在19世纪（用介词 in）。注意：2000年属于21世纪，不是20世纪。"
    },
    {
      word: "European",
      phonetic: "/ˌjʊərəˈpiːən/",
      pos: "adj.",
      posClass: "adj",
      meaning: "欧洲的",
      root: {
        parts: [
          { text: "Europe", type: "root", label: "欧洲" },
          { text: "-an", type: "suffix", label: "属于……的人/物" }
        ],
        explain: "Europe（欧洲）+ -an（属于……的）= 欧洲的/欧洲人。Europe 来自希腊神话中的公主 Europa，被宙斯化身的白牛带到了这片大陆。"
      },
      memory: "European = Europe（欧洲）+ an（人/的）——记住地名+an 变成形容词/人：American, African, Asian, European。",
      family: ["Europe（欧洲）", "American（美国的）", "African（非洲的）", "Asian（亚洲的）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "European classical music has a long history.", zh: "欧洲古典音乐有着悠久的历史。" },
        { en: "Many European countries are famous for their music.", zh: "许多欧洲国家以音乐闻名。" }
      ],
      fun: "Europe（欧洲）得名于希腊神话中的 Europa 公主。传说宙斯爱上了她，变成一头白牛，把她从亚洲带到了欧洲大陆。所以欧洲是以一位公主命名的！",
      usage: "European 首字母大写。a European（一个欧洲人）注意用 a 不用 an，因为 European 的发音以辅音 /j/ 开头。"
    },
    {
      word: "type",
      phonetic: "/taɪp/",
      pos: "n.",
      posClass: "n",
      meaning: "类型；种类",
      root: {
        parts: [{ text: "typ-", type: "root", label: "希腊语 typos = 印记/模型" }],
        explain: "来自希腊语 typos（印记、模型）。type 最初指印刷的铅字（同一类型的模具），后来引申为'类型'。typewriter = 打字机 = 敲铅字的机器。"
      },
      memory: "type 有两个常见意思：1. 类型（What type of music?）；2. 打字（type on a keyboard）——用键盘敲出不同类型（type）的文字！",
      family: ["typical（典型的）", "typewriter（打字机）", "typing（打字）", "prototype（原型=最初的类型）"],
      synonyms: ["kind（种类）", "sort（类型）", "category（类别）"],
      antonyms: [],
      sentences: [
        { en: "What type of music do you like?", zh: "你喜欢什么类型的音乐？" },
        { en: "There are many different types of instruments.", zh: "有很多不同种类的乐器。" }
      ],
      fun: "type 既是名词'类型'，也是动词'打字'。以前打字要用 typewriter（打字机），每个字母有一个铅字（type），按键就把铅字印在纸上。现在我们在键盘上 type（打字），但已经没有铅字了！",
      usage: "type 和 kind/sort 意思相近，都表示'种类'。What type of... = 什么类型的……。type 做动词时 = 打字：Can you type fast?（你打字快吗？）"
    },
    {
      word: "loud",
      phonetic: "/laʊd/",
      pos: "adj.",
      posClass: "adj",
      meaning: "响亮的",
      root: {
        parts: [],
        explain: "来自古英语 hlūd（声音大的），跟德语 laut（响亮的）同源。这个词和 listen 可能有远亲关系——都跟'听'有关。"
      },
      memory: "loud 发音像'唠的'——唠叨（唠的）声音特别 loud（大声）！或者：cloud（云）去掉 c 就是 loud——打雷时云很 loud！",
      family: ["loudly（大声地）", "loudspeaker（扬声器=大声说话的器具）", "aloud（出声地）"],
      synonyms: ["noisy（嘈杂的）", "deafening（震耳欲聋的）"],
      antonyms: ["quiet（安静的）", "soft（轻柔的）", "silent（无声的）"],
      sentences: [
        { en: "The music is too loud. Please turn it down.", zh: "音乐太响了，请关小声一点。" },
        { en: "He spoke in a loud voice so everyone could hear.", zh: "他大声说话，让每个人都能听到。" }
      ],
      fun: "loudspeaker = loud（响亮）+ speaker（说话者）= 让声音变大的设备 = 扬声器/喇叭。read aloud = 朗读（出声地读）。世界上最大声的动物是蓝鲸，叫声可达188分贝，能传到800公里以外！",
      usage: "loud 是形容词也可做副词：speak loud = speak loudly（大声说话）。turn up the music = 把音乐调大声；turn down = 调小声。out loud = aloud = 出声地。"
    },
    {
      word: "exciting",
      phonetic: "/ɪkˈsaɪtɪŋ/",
      pos: "adj.",
      posClass: "adj",
      meaning: "令人激动的",
      root: {
        parts: [
          { text: "ex-", type: "prefix", label: "出来" },
          { text: "cit-", type: "root", label: "拉丁语 citare = 唤起/激发" },
          { text: "-ing", type: "suffix", label: "令人……的" }
        ],
        explain: "ex-（出来）+ cite（唤起）+ -ing（令人……的）= 把情绪唤起来的 = 令人激动的。excite = 把内心的兴奋唤出来！"
      },
      memory: "exciting 和 excited 的区别：exciting = 令人兴奋的（修饰事物）；excited = 感到兴奋的（修饰人）。The game is exciting. I am excited.",
      family: ["excite（使兴奋）", "excited（感到兴奋的）", "excitement（兴奋）", "excitedly（兴奋地）"],
      synonyms: ["thrilling（令人激动的）", "amazing（令人惊喜的）"],
      antonyms: ["boring（无聊的）", "dull（枯燥的）"],
      sentences: [
        { en: "Rock music is really exciting!", zh: "摇滚音乐真令人激动！" },
        { en: "We had an exciting trip to the concert.", zh: "我们有一次令人兴奋的音乐会之旅。" }
      ],
      fun: "-ing 形容词和 -ed 形容词的区别是中国学生最容易搞混的！记住：-ing 是'令人……的'（修饰事物/原因），-ed 是'感到……的'（修饰人/心情）。The movie is boring（电影很无聊）→ I am bored（我感到无聊）。",
      usage: "exciting 修饰事物，excited 修饰人的感受。类似的对：interesting/interested, boring/bored, surprising/surprised。"
    },
    {
      word: "voice",
      phonetic: "/vɔɪs/",
      pos: "n.",
      posClass: "n",
      meaning: "声音",
      root: {
        parts: [{ text: "voc-/voi-", type: "root", label: "拉丁语 vox = 声音" }],
        explain: "来自拉丁语 vox（声音）。voc-/voi- 是'声音'的词根：voice（声音）、vocal（声音的）、vocabulary（词汇=声音的集合）。"
      },
      memory: "voice 和 vocabulary（词汇）是同根词！voc = 声音，vocabulary = 用声音说出的词汇集合。voice = 发出的声音。",
      family: ["vocal（声音的；直言不讳的）", "vocabulary（词汇=声音的集合）", "voiceless（无声的）", "invoice（发票=寄来的声明）"],
      synonyms: ["sound（声音）", "tone（音调）"],
      antonyms: ["silence（沉默）"],
      sentences: [
        { en: "She has a beautiful voice.", zh: "她有一副优美的嗓音。" },
        { en: "Please raise your voice so I can hear you.", zh: "请大声一点，让我能听到你。" }
      ],
      fun: "voice 和 vocabulary 竟然是亲戚！都来自拉丁语 vox（声音）。voice mail = 语音邮件。voice actor = 配音演员（只用声音表演的演员）。有些歌手的 voice 能打碎玻璃杯——这是真的，高频声波可以让玻璃共振碎裂！",
      usage: "voice 特指人的嗓音，sound 是更广义的声音。in a loud voice = 大声地；in a low voice = 低声地。raise one's voice = 提高嗓门。"
    },
    {
      word: "wonderful",
      phonetic: "/ˈwʌndəfl/",
      pos: "adj.",
      posClass: "adj",
      meaning: "极好的；精彩的",
      root: {
        parts: [
          { text: "wonder", type: "root", label: "奇迹；惊奇" },
          { text: "-ful", type: "suffix", label: "充满……的" }
        ],
        explain: "wonder（奇迹/惊奇）+ -ful（充满……的）= 充满惊奇的 = 精彩的。-ful 是一个超好用的后缀：beautiful, colorful, powerful, helpful。"
      },
      memory: "wonderful = wonder（奇迹）+ ful（充满）——充满奇迹的 = 极好的！-ful 后缀家族：beautiful（美丽的）、helpful（有帮助的）、careful（小心的）。",
      family: ["wonder（奇迹；想知道）", "wonderfully（精彩地）", "wander（漫步/走神，注意区分拼写）"],
      synonyms: ["amazing（令人惊喜的）", "fantastic（极好的）", "excellent（优秀的）", "great（很棒的）"],
      antonyms: ["terrible（糟糕的）", "awful（可怕的）"],
      sentences: [
        { en: "The concert was wonderful!", zh: "那场音乐会太精彩了！" },
        { en: "What a wonderful voice she has!", zh: "她的嗓音多么美妙啊！" }
      ],
      fun: "Seven Wonders of the World（世界七大奇迹）用的就是 wonder 这个词！wonderful = 像奇迹一样棒。注意不要把 wonder（惊奇）和 wander（漫步/走神）搞混，虽然只差一个字母！",
      usage: "wonderful 是赞美的万能词，比 good 更强烈。What a wonderful...! = 多么精彩的……！I wonder... = 我想知道……（wonder 做动词时意思变了）。"
    },
    {
      word: "rest",
      phonetic: "/rest/",
      pos: "n.",
      posClass: "n",
      meaning: "其余的；剩余部分",
      root: {
        parts: [],
        explain: "rest 有两个完全不同的来源：1.'休息'来自古英语 ræst；2.'其余的'来自法语 reste（剩余），跟 restaurant（餐厅=恢复精力的地方）同源！"
      },
      memory: "rest 有两个意思要区分：1. 休息（have a rest）；2. 其余的（the rest of）。记：休息完了（rest），才有精力处理剩余的（the rest of）事情！",
      family: ["restaurant（餐厅=恢复精力的地方）", "restful（宁静的）", "restless（焦躁的=不能休息的）"],
      synonyms: ["remainder（剩余部分）", "remaining（剩下的）"],
      antonyms: [],
      sentences: [
        { en: "I like pop music, but the rest of my family likes classical music.", zh: "我喜欢流行音乐，但我家其他人喜欢古典音乐。" },
        { en: "She ate some cake and gave the rest to her brother.", zh: "她吃了一些蛋糕，把剩余的给了弟弟。" }
      ],
      fun: "restaurant（餐厅）和 rest（休息/其余）竟然有关系！restaurant 来自法语 restaurer = 恢复精力，餐厅就是'让你恢复精力的地方'。rest 同时有'休息'和'剩余'两个意思，要根据上下文判断。",
      usage: "the rest of + 名词 = 其余的……。the rest of the students = 其余的学生。注意：the rest of + 不可数名词用单数动词；the rest of + 复数名词用复数动词。"
    },
    {
      word: "the rest of",
      phonetic: "/ðə rest ɒv/",
      pos: "n.",
      posClass: "n",
      meaning: "其余的",
      root: {
        parts: [
          { text: "the", type: "root", label: "定冠词" },
          { text: "rest", type: "root", label: "剩余" },
          { text: "of", type: "root", label: "的" }
        ],
        explain: "the rest of = 剩余的部分。rest 在这里指'剩下的、其余的'，来自法语 reste。注意不是'休息'的意思！"
      },
      memory: "the rest of = 其余的——想象吃完一块蛋糕，剩下的（the rest of the cake）给别人！the rest of 后面接名词。",
      family: ["the rest（其余部分）", "the others（其余的人/物）"],
      synonyms: ["the remaining（剩余的）", "the others（其他的）"],
      antonyms: [],
      sentences: [
        { en: "The rest of the class went to the music room.", zh: "班上其余的同学去了音乐教室。" },
        { en: "I'll spend the rest of the day listening to music.", zh: "我将用这一天剩余的时间听音乐。" }
      ],
      fun: "the rest of 和 the other(s) 的区别：the rest of 强调'所有剩余的部分'，可以接可数或不可数名词；the others 只指'其余的人或物'（可数复数）。",
      usage: "the rest of + 复数名词 → 谓语用复数：The rest of the students are in the classroom. the rest of + 不可数名词 → 谓语用单数：The rest of the water is clean."
    },
    {
      word: "fan",
      phonetic: "/fæn/",
      pos: "n.",
      posClass: "n",
      meaning: "乐迷；粉丝",
      root: {
        parts: [],
        explain: "fan 作'粉丝'义时，是 fanatic（狂热者）的缩写。fanatic 来自拉丁语 fanaticus = 受神灵启示的/狂热的。另一个 fan = 扇子（来自拉丁语 vannus = 簸箕），和'粉丝'是完全不同的词源！"
      },
      memory: "fan（粉丝）是 fanatic（狂热者）的缩写——粉丝就是对偶像狂热的人！中文'粉丝'就是 fan 的音译（fans = 粉丝们）。",
      family: ["fanatic（狂热者）", "fancy（喜欢/想象）", "fandom（粉丝圈）"],
      synonyms: ["supporter（支持者）", "admirer（崇拜者）", "enthusiast（爱好者）"],
      antonyms: ["critic（批评者）", "hater（讨厌的人）"],
      sentences: [
        { en: "She is a big fan of Jay Chou.", zh: "她是周杰伦的超级粉丝。" },
        { en: "Football fans cheered loudly at the match.", zh: "足球迷们在比赛中大声欢呼。" }
      ],
      fun: "中文'粉丝'就是英文 fans 的音译！fan 还有'扇子'的意思，但这两个意思来源完全不同。a big fan of = 某人的超级粉丝。fandom = fan + dom（领域）= 粉丝圈/粉丝文化。",
      usage: "a fan of sb./sth. = 某人/某物的粉丝。a big fan = 超级粉丝。I'm a fan of pop music. = 我是流行音乐迷。fan 还可以指电风扇（electric fan）。"
    },
    {
      word: "make",
      phonetic: "/meɪk/",
      pos: "v.",
      posClass: "v",
      meaning: "制造；使",
      root: {
        parts: [],
        explain: "来自古英语 macian（制作），是英语中最基本、最多义的动词之一。make 的核心含义是'创造/产生'，从这个核心引申出无数用法。"
      },
      memory: "make 是英语中用途最广的词之一——make friends（交朋友）、make money（赚钱）、make a mistake（犯错误）、make breakfast（做早餐）……一个 make 包打天下！",
      family: ["maker（制造者）", "making（制作）", "remake（重制）", "handmade（手工的）"],
      synonyms: ["create（创造）", "produce（生产）", "cause（引起）"],
      antonyms: ["destroy（破坏）", "break（打破）"],
      sentences: [
        { en: "Music can make people happy.", zh: "音乐能使人们快乐。" },
        { en: "This guitar is made in China.", zh: "这把吉他是中国制造的。" }
      ],
      fun: "make 是不规则动词：make-made-made。make 有个特殊句型：make sb. + 形容词/动词原形 = 使某人……。Music makes me happy.（音乐使我快乐。）This is one of the most useful grammar patterns!",
      usage: "make sb. do sth. = 让某人做某事（注意用动词原形，不加 to）。make sb. + adj. = 使某人变得……。be made of = 由……制成（看得出原料）；be made from = 由……制成（看不出原料）。"
    },
    {
      word: "fast",
      phonetic: "/fɑːst/",
      pos: "adj.&adv.",
      posClass: "adj",
      meaning: "快的；快速地",
      root: {
        parts: [],
        explain: "来自古英语 fæst（固定的、牢固的），原意竟然是'牢固的'！fast 从'牢固的'变成'快的'，是因为一艘船'紧紧地'(fast) 驶过水面 → 速度快。breakfast = break（打破）+ fast（禁食）= 打破一夜的禁食 = 早餐！"
      },
      memory: "fast 既是形容词也是副词，形式不变！He is a fast runner.（adj.快的跑者）He runs fast.（adv.跑得快）——不需要加 -ly！",
      family: ["fasten（系紧=使牢固）", "breakfast（早餐=打破禁食）", "steadfast（坚定的=站得牢固）"],
      synonyms: ["quick（快的）", "rapid（迅速的）", "swift（敏捷的）"],
      antonyms: ["slow（慢的）"],
      sentences: [
        { en: "The drums play a fast beat in rock music.", zh: "在摇滚音乐中鼓打出快节奏。" },
        { en: "Don't drive too fast!", zh: "不要开太快！" }
      ],
      fun: "fast 最初的意思是'牢固的、紧的'，跟'快'没关系！现在还保留着古义：fasten your seatbelt = 系紧安全带；hold fast = 紧紧抓住。breakfast = break（打破）+ fast（禁食/斋戒）= 打破一夜没吃东西的状态 = 早餐！",
      usage: "fast 做副词时不需要加 -ly（不说 fastly）。类似的词还有 hard（努力地）、late（迟地）、early（早地）。"
    },
    {
      word: "add",
      phonetic: "/æd/",
      pos: "v.",
      posClass: "v",
      meaning: "添加；增加",
      root: {
        parts: [{ text: "add-", type: "root", label: "拉丁语 addere = 加上" }],
        explain: "来自拉丁语 addere = ad-（向）+ dare（给）= 向……给予 = 添加。addition = 添加的动作 = 加法。address = ad（向）+ dress（引导）= 把方向指给你 = 地址。"
      },
      memory: "add 很短很好记——就两个 d！数学课上的加法就是 add（addition）。add 还有一个常用组合：add up = 合计。",
      family: ["addition（加法；增加）", "additional（额外的）", "address（地址=指向的方向）"],
      synonyms: ["include（包含）", "attach（附加）"],
      antonyms: ["remove（移除）", "subtract（减去）", "take away（拿走）"],
      sentences: [
        { en: "Add some drums and the music will be more exciting.", zh: "加一些鼓点，音乐会更令人激动。" },
        { en: "Please add your name to the list.", zh: "请把你的名字加到名单上。" }
      ],
      fun: "数学中的加法就是 addition：2 + 3 = 5 读作 Two plus three equals five 或 Two added to three makes five。四则运算：addition（加）、subtraction（减）、multiplication（乘）、division（除）。",
      usage: "add...to... = 把……添加到……。add up = 合计。in addition = 此外（写作中常用的过渡词）。"
    },
    {
      word: "beautiful",
      phonetic: "/ˈbjuːtɪfl/",
      pos: "adj.",
      posClass: "adj",
      meaning: "美丽的；美好的",
      root: {
        parts: [
          { text: "beauty", type: "root", label: "美丽" },
          { text: "-ful", type: "suffix", label: "充满……的" }
        ],
        explain: "beauty（美丽）+ -ful（充满……的）= 充满美丽的。beauty 来自古法语 beauté，最终源自拉丁语 bellus = 漂亮的。"
      },
      memory: "beautiful = beauty（美丽）+ ful（充满）——充满美丽的！注意拼写：beauti 不是 beauty，y 变 i 再加 ful。",
      family: ["beauty（美丽；美人）", "beautifully（美丽地）", "beautify（美化）"],
      synonyms: ["pretty（漂亮的）", "lovely（可爱的）", "gorgeous（华丽的）"],
      antonyms: ["ugly（丑陋的）", "plain（普通的）"],
      sentences: [
        { en: "The violin makes a beautiful sound.", zh: "小提琴发出优美的声音。" },
        { en: "What a beautiful song!", zh: "多么美丽的歌曲啊！" }
      ],
      fun: "beautiful 的拼写是很多学生的噩梦！记住口诀：Big Elephants Are Ugly. 用首字母 B-E-A-U 就能记住前半部分！或者唱 Jim Carrey 在电影里的拼读：B-E-A-U-TIFUL！",
      usage: "beautiful 比 pretty 程度更强，比 gorgeous 程度稍弱。通常修饰女性、风景、音乐等。修饰男性一般用 handsome。What a beautiful day! = 多美好的一天！"
    },
    {
      word: "common",
      phonetic: "/ˈkɒmən/",
      pos: "adj.",
      posClass: "adj",
      meaning: "普通的；常见的",
      root: {
        parts: [
          { text: "com-", type: "prefix", label: "共同" },
          { text: "mon-", type: "root", label: "拉丁语 munus = 义务/服务" }
        ],
        explain: "来自拉丁语 communis = com-（共同）+ munis（义务）= 共同分担的 = 大家共有的 = 常见的。community = 共同体 = 社区。communicate = 共同传递 = 交流。"
      },
      memory: "common = com（共同）+ mon（大家的）——大家都有的、都知道的 = 常见的、普通的。common sense = 常识 = 大家共同的认知。",
      family: ["commonly（通常地）", "community（社区=共同体）", "communicate（交流=共同传递）", "uncommon（不常见的）"],
      synonyms: ["usual（通常的）", "ordinary（普通的）", "frequent（频繁的）"],
      antonyms: ["rare（稀有的）", "unusual（不寻常的）", "uncommon（不常见的）"],
      sentences: [
        { en: "The guitar is a very common instrument.", zh: "吉他是一种很常见的乐器。" },
        { en: "It's common for Chinese students to learn the piano.", zh: "中国学生学钢琴是很常见的。" }
      ],
      fun: "common sense = 常识（大家共有的认知）。common 和 community（社区）、communicate（交流）都来自同一个词根，核心意思是'共同、共享'。in common = 共同拥有：We have a lot in common.（我们有很多共同点。）",
      usage: "It's common for sb. to do sth. = 某人做某事是常见的。have sth. in common = 有共同之处。common 是'常见的/普通的'，不含贬义。"
    },
    {
      word: "noisy",
      phonetic: "/ˈnɔɪzi/",
      pos: "adj.",
      posClass: "adj",
      meaning: "嘈杂的；喧闹的",
      root: {
        parts: [
          { text: "noise", type: "root", label: "噪音" },
          { text: "-y", type: "suffix", label: "形容词后缀=有……特征的" }
        ],
        explain: "noise（噪音）+ -y（有……特征的）= 有噪音特征的 = 嘈杂的。noise 来自拉丁语 nausea（晕船），因为船上的嘈杂声让人恶心！"
      },
      memory: "noisy = noise（噪音）+ y——把 e 去掉加 y！类似的：ice → icy（冰的），stone → stony（石头的）。记住规则：名词去 e 加 y 变形容词。",
      family: ["noise（噪音）", "noisily（嘈杂地）", "noiseless（无噪音的）"],
      synonyms: ["loud（响亮的）", "rowdy（吵闹的）"],
      antonyms: ["quiet（安静的）", "silent（寂静的）", "peaceful（宁静的）"],
      sentences: [
        { en: "The classroom is very noisy during break time.", zh: "课间休息时教室里很吵闹。" },
        { en: "Some people think rock music is too noisy.", zh: "有些人觉得摇滚音乐太吵了。" }
      ],
      fun: "noise 来自拉丁语 nausea（晕船/恶心）——因为吵闹的声音让人'恶心'！nausea → nauseous（恶心的）也是同源词。所以 noisy 的根源是'让人不舒服的声音'。",
      usage: "noisy 强调'令人不愉快的吵'，loud 只是'声音大'（中性词）。Don't be so noisy! = 别那么吵！It's noisy 和 It's loud 的区别：noisy 带有负面含义，loud 比较中性。"
    }
  ]
};

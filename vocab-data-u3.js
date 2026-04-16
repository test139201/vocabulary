// Unit 3: Is this your pencil?
const UNIT3 = {
  id: 3,
  title: "Is this your pencil?",
  theme: "学校物品与寻物",
  color: "#f59e0b",
  words: [
    {
      word: "pencil",
      phonetic: "/ˈpensl/",
      pos: "n.",
      posClass: "n",
      meaning: "铅笔",
      root: {
        parts: [{ text: "pen-", type: "root", label: "拉丁语 penicillus = 小尾巴" }],
        explain: "来自拉丁语 penicillus（小尾巴），因为最早的画笔就像小动物的尾巴！同源词竟然是 penicillin（青霉素）——青霉菌长得像小刷子。"
      },
      memory: "pencil = pen + cil，用笔(pen)写到纸上发出 'sil sil' 的声音！",
      family: ["pencil case（铅笔盒）", "pencil sharpener（卷笔刀）"],
      synonyms: ["pen（钢笔）"],
      antonyms: ["eraser（橡皮擦）"],
      sentences: [
        { en: "Is this your pencil?", zh: "这是你的铅笔吗？" },
        { en: "I need a pencil.", zh: "我需要一支铅笔。" }
      ],
      fun: "铅笔(pencil)里其实没有铅(lead)！里面是石墨(graphite)。叫'铅笔'是因为16世纪人们以为石墨是铅。中英文都搞错了——英语里曾叫 lead pencil。",
      usage: "in pencil = 用铅笔（写）。pencil in = 暂定、初步安排。"
    },
    {
      word: "book",
      phonetic: "/bʊk/",
      pos: "n.",
      posClass: "n",
      meaning: "书",
      root: { parts: [], explain: "古英语 bōc，与'beech'（山毛榉树）同源！因为古代日耳曼人在山毛榉树皮上刻字，树皮就是最早的'书'。" },
      memory: "book 和 look 押韵——look at a book（看一本书）！",
      family: ["bookstore（书店）", "bookmark（书签）", "bookworm（书虫）", "notebook（笔记本）", "textbook（课本）"],
      synonyms: ["volume（卷）", "text（文本）"],
      antonyms: [],
      sentences: [
        { en: "This is my English book.", zh: "这是我的英语书。" },
        { en: "I like reading books.", zh: "我喜欢读书。" }
      ],
      fun: "book 做动词是'预订'的意思：book a hotel（订酒店）、book a flight（订机票）。从名词'记录册'引申为动词'登记预约'。",
      usage: "by the book = 按规矩办。an open book = 坦诚的人（像打开的书一样没有秘密）。"
    },
    {
      word: "eraser",
      phonetic: "/ɪˈreɪzə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "橡皮擦",
      root: {
        parts: [
          { text: "e-", type: "prefix", label: "出、去掉" },
          { text: "ras-", type: "root", label: "拉丁语 radere = 刮" },
          { text: "-er", type: "suffix", label: "做……的东西" }
        ],
        explain: "erase（擦掉）= e-（去除）+ rase（刮）。eraser 就是'用来刮掉的工具'。"
      },
      memory: "eraser = erase（擦除）+ -r（工具）——擦除错误的工具！",
      family: ["erase（擦掉）", "erasable（可擦除的）"],
      synonyms: ["rubber（英式：橡皮）"],
      antonyms: [],
      sentences: [
        { en: "Can I use your eraser?", zh: "我能用一下你的橡皮吗？" }
      ],
      fun: "美国人说 eraser，英国人说 rubber。但 rubber 在美语里是另一个意思……所以在美国千万别问别人借 rubber！",
      usage: "eraser 是美式英语，rubber 是英式英语。白板擦 = whiteboard eraser。"
    },
    {
      word: "dictionary",
      phonetic: "/ˈdɪkʃənri/",
      pos: "n.",
      posClass: "n",
      meaning: "词典；字典",
      root: {
        parts: [
          { text: "dict-", type: "root", label: "拉丁语 dictio = 说话" },
          { text: "-ionary", type: "suffix", label: "与……有关的集合" }
        ],
        explain: "dict（说）+ -ionary（集合）= 把说过的话收集起来 = 词典。同根词：dictate（口述）、predict（预言=提前说）。"
      },
      memory: "dictionary 里有 'diction'（措辞）——字典就是教你如何措辞的书！",
      family: ["dictate（口述）", "predict（预测）", "contradict（反驳）", "verdict（裁决）"],
      synonyms: ["lexicon（词典）", "glossary（术语表）"],
      antonyms: [],
      sentences: [
        { en: "Look it up in the dictionary.", zh: "在字典里查一下。" },
        { en: "I have an English dictionary.", zh: "我有一本英语词典。" }
      ],
      fun: "dict- 词根太强大了！dictator（独裁者=只有他一个人说了算的人）、addict（上瘾=被某个东西'说服'了）、dictionary 本身就是 dict 最好的代言人。",
      usage: "look up a word in the dictionary = 查字典。"
    },
    {
      word: "library",
      phonetic: "/ˈlaɪbrəri/",
      pos: "n.",
      posClass: "n",
      meaning: "图书馆",
      root: {
        parts: [{ text: "libr-", type: "root", label: "拉丁语 liber = 书" }],
        explain: "来自拉丁语 libraria（书店）。liber 原义是'树皮'→'在树皮上写的东西'→'书'。和 book 来自树皮一样的故事！"
      },
      memory: "library 发音注意：/ˈlaɪbrəri/ 有两个 r！很多人会漏掉第一个 r 读成 'libary'——这是经典错误。",
      family: ["librarian（图书管理员）", "libre（自由的，西班牙语同源词）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "I often go to the library.", zh: "我经常去图书馆。" },
        { en: "The library is very quiet.", zh: "图书馆很安静。" }
      ],
      fun: "liber（书）和 liber（自由）在拉丁语里长得一样！所以 liberty（自由）和 library（图书馆）有同一个祖先——知识使人自由。",
      usage: "go to the library（去图书馆要加 the）。library card = 借书证。"
    },
    {
      word: "excuse",
      phonetic: "/ɪkˈskjuːz/",
      pos: "v.",
      posClass: "v",
      meaning: "原谅；打扰一下",
      root: {
        parts: [
          { text: "ex-", type: "prefix", label: "出、离开" },
          { text: "cuse", type: "root", label: "拉丁语 causa = 理由/诉讼" }
        ],
        explain: "ex（出去）+ cuse（指责/诉讼）= 把指责移走 = 原谅。同根词 accuse = ac（朝向）+ cuse = 朝你指责 = 控告！"
      },
      memory: "excuse 里有 'use'——请允许我'use'（使用）一下你的时间！",
      family: ["excuse me（打扰一下）", "accuse（指控）", "cause（原因）"],
      synonyms: ["pardon（原谅）", "forgive（饶恕）"],
      antonyms: ["blame（责怪）", "accuse（指控）"],
      sentences: [
        { en: "Excuse me, is this your book?", zh: "打扰一下，这是你的书吗？" }
      ],
      fun: "excuse 做名词 /ɪkˈskjuːs/ 和做动词 /ɪkˈskjuːz/ 尾音不同！名词结尾是 /s/，动词是 /z/。类似的还有 use、abuse、house。",
      usage: "Excuse me 用于打扰别人前。Sorry 用于做错事后道歉。两者不能混用！"
    },
    {
      word: "thank",
      phonetic: "/θæŋk/",
      pos: "v.",
      posClass: "v",
      meaning: "感谢",
      root: { parts: [], explain: "古英语 þancian，与 think（思考）同源！最初'感谢'和'思考'是同一个词——想到别人的好就是感谢。" },
      memory: "thank 和 think 同源——think（想到）别人对你的好，就会 thank（感谢）！",
      family: ["thanks（感谢）", "thankful（感激的）", "thankless（不知感恩的）", "Thanksgiving（感恩节）"],
      synonyms: ["appreciate（感激）", "be grateful（感恩）"],
      antonyms: [],
      sentences: [
        { en: "Thank you very much!", zh: "非常感谢你！" },
        { en: "Thanks for your help.", zh: "谢谢你的帮助。" }
      ],
      fun: "Thanksgiving（感恩节）= Thanks + Giving（给予感谢）。美国的感恩节在11月第四个周四，加拿大在10月第二个周一。",
      usage: "thank you 比 thanks 更正式。Thank God! = 谢天谢地！"
    },
    {
      word: "teacher",
      phonetic: "/ˈtiːtʃə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "老师",
      root: {
        parts: [
          { text: "teach", type: "root", label: "教" },
          { text: "-er", type: "suffix", label: "做……的人" }
        ],
        explain: "teach（教）+ -er（人）= 教的人 = 老师。-er 是最常见的'人'后缀之一。"
      },
      memory: "teacher = teach + er。类似的：player = play + er, singer = sing + er, worker = work + er。掌握 -er 就能造出无数'做……的人'！",
      family: ["teach（教）", "teaching（教学）", "teachable（可教的）"],
      synonyms: ["instructor（讲师）", "educator（教育者）", "tutor（家教）"],
      antonyms: ["student（学生）", "pupil（学生）"],
      sentences: [
        { en: "She is our English teacher.", zh: "她是我们的英语老师。" }
      ],
      fun: "在英语国家，学生直接叫老师的姓：Mr. Smith, Ms. Brown。不能像中文一样说 'Teacher Wang'——这在英语里是错误的说法！要说 Mr./Ms. Wang。",
      usage: "-er 后缀造人：driver, reader, player, singer, dancer, writer..."
    },
    {
      word: "lost",
      phonetic: "/lɒst/",
      pos: "adj.",
      posClass: "adj",
      meaning: "丢失的",
      root: { parts: [], explain: "lose（丢失）的过去分词变成了形容词。lose → lost，和 find → found 是天生的一对反义词。" },
      memory: "lost = lose 的过去式——东西已经 lose 了就变成 lost 了！",
      family: ["lose（丢失）", "loser（失败者）", "loss（损失）"],
      synonyms: ["missing（失踪的）", "misplaced（放错地方的）"],
      antonyms: ["found（找到的）"],
      sentences: [
        { en: "I lost my watch.", zh: "我把手表弄丢了。" },
        { en: "Is this in the lost and found?", zh: "这是在失物招领处的吗？" }
      ],
      fun: "Lost and Found（失物招领处）是学校和公共场所的标配。美剧《迷失》英文名就叫 Lost——一群人在荒岛上'迷失'了。",
      usage: "lost and found = 失物招领处。get lost = 迷路 / 滚开（粗鲁）。I'm lost = 我迷路了/我听不懂了。"
    },
    {
      word: "find",
      phonetic: "/faɪnd/",
      pos: "v.",
      posClass: "v",
      meaning: "找到",
      root: { parts: [], explain: "古英语 findan，原义是'遇到、碰上'。与 path（小路）远古同源——走路时碰到的东西。" },
      memory: "find 里有 'fin'（鱼鳍）——像鱼鳍一样在水里到处游，终于找到了！",
      family: ["found（过去式）", "finder（发现者）", "finding（发现；调查结果）"],
      synonyms: ["discover（发现）", "locate（找到位置）"],
      antonyms: ["lose（丢失）", "miss（错过）"],
      sentences: [
        { en: "I can't find my pen.", zh: "我找不到我的笔了。" },
        { en: "Did you find your book?", zh: "你找到你的书了吗？" }
      ],
      fun: "find 的过去式 found 和另一个词 found（建立）长得一模一样！I found a school（我建了一所学校）和 I found a school（我找到了一所学校）——只有上下文能区分。",
      usage: "find out = 发现/查明。finders keepers = 谁捡到就是谁的（儿童俗语）。"
    },
    {
      word: "classroom",
      phonetic: "/ˈklɑːsruːm/",
      pos: "n.",
      posClass: "n",
      meaning: "教室",
      root: {
        parts: [
          { text: "class", type: "root", label: "班级" },
          { text: "room", type: "root", label: "房间" }
        ],
        explain: "class（班级）+ room（房间）= 班级的房间 = 教室。英语很喜欢这种简单粗暴的合成词！"
      },
      memory: "classroom = class + room，班级的房间！类似的：bedroom = bed + room（卧室），bathroom = bath + room（浴室）。",
      family: ["class（班级）", "classmate（同学）", "room（房间）", "roommate（室友）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "Our classroom is very clean.", zh: "我们的教室很干净。" }
      ],
      fun: "英语的合成词很好玩：airport = air + port（空中的港口），football = foot + ball（脚踢的球），sunflower = sun + flower（向着太阳的花）。看到合成词就拆开理解！",
      usage: "in the classroom = 在教室里。"
    },
    {
      word: "email",
      phonetic: "/ˈiːmeɪl/",
      pos: "n./v.",
      posClass: "n",
      meaning: "电子邮件；发电子邮件",
      root: {
        parts: [
          { text: "e-", type: "prefix", label: "electronic 电子的" },
          { text: "mail", type: "root", label: "邮件" }
        ],
        explain: "e-(electronic 电子的) + mail（邮件）= 电子邮件。这是90年代互联网兴起后的新词。"
      },
      memory: "e-mail：electronic mail 的缩写。类似的：e-book = 电子书，e-commerce = 电子商务。",
      family: ["mail（邮件）", "mailbox（邮箱）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "Please email me.", zh: "请给我发电子邮件。" },
        { en: "What's your email address?", zh: "你的邮箱地址是什么？" }
      ],
      fun: "世界上第一封电子邮件是1971年 Ray Tomlinson 发出的。他也是选择用 @ 符号来连接用户名和主机名的人。@ 读作 'at'。",
      usage: "email 既是名词也是动词。send an email = 发邮件。email sb. = 给某人发邮件。"
    }
  ]
};

if(typeof window!=='undefined'){window.UNIT3=UNIT3;}

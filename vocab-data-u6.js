// Unit 6: Do you like bananas?
const UNIT6 = {
  id: 6,
  title: "Do you like bananas?",
  theme: "食物与饮食喜好",
  color: "#ec4899",
  words: [
    {
      word: "banana",
      phonetic: "/bəˈnɑːnə/",
      pos: "n.",
      posClass: "n",
      meaning: "香蕉",
      root: { parts: [], explain: "来自西非沃洛夫语 banaana（手指）。香蕉像手指一样！这个词经由西班牙语和葡萄牙语的殖民者传遍了全世界。" },
      memory: "banana 有三个 a——ba-NA-na，重音在中间。记住：一根香蕉弯弯的像字母 a 重复三次！",
      family: [],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "Do you like bananas?", zh: "你喜欢香蕉吗？" },
        { en: "I eat a banana every day.", zh: "我每天吃一根香蕉。" }
      ],
      fun: "go bananas = 发疯/抓狂！因为猴子看到香蕉会兴奋地跳来跳去。banana skin = 香蕉皮，比喻'让人出丑的陷阱'。",
      usage: "go bananas = 发疯。top banana = 大明星/头号人物。banana republic = 香蕉共和国（比喻政治不稳定的小国）。"
    },
    {
      word: "hamburger",
      phonetic: "/ˈhæmbɜːɡə(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "汉堡包",
      root: { parts: [], explain: "来自德国城市 Hamburg（汉堡）+ -er。汉堡人把碎牛肉做成肉饼，移民带到美国后夹在面包里就成了 hamburger。注意：和 ham（火腿）没有关系！" },
      memory: "hamburger 里虽然有 ham（火腿），但和火腿一点关系都没有！它来自德国城市 Hamburg。类似的冤案：pineapple 也不是 pine + apple。",
      family: ["burger（汉堡，缩写）", "cheeseburger（芝士汉堡）"],
      synonyms: ["burger（汉堡）"],
      antonyms: [],
      sentences: [
        { en: "I'd like a hamburger.", zh: "我想要一个汉堡包。" }
      ],
      fun: "hamburger → ham 被'误解'后产生了一系列新词：cheeseburger（芝士堡）、fishburger（鱼堡）、veggieburger（素堡）——人们以为 -burger 是一个后缀！",
      usage: "hamburger 可以简写为 burger。"
    },
    {
      word: "vegetable",
      phonetic: "/ˈvedʒtəbl/",
      pos: "n.",
      posClass: "n",
      meaning: "蔬菜",
      root: {
        parts: [{ text: "veget-", type: "root", label: "拉丁语 vegetare = 使有活力" }],
        explain: "来自拉丁语 vegetabilis（使有活力的）。vegetable 的原义是'有生命力的植物'。同根词 vegetation（植被）。"
      },
      memory: "vegetable 超长但有规律：vege-table，蔬菜摆在 table（桌子）上！",
      family: ["vegetation（植被）", "vegetarian（素食者）", "vegan（纯素食者）"],
      synonyms: ["veggie（口语：蔬菜）"],
      antonyms: ["meat（肉）"],
      sentences: [
        { en: "Eat more vegetables!", zh: "多吃蔬菜！" },
        { en: "I like green vegetables.", zh: "我喜欢绿色蔬菜。" }
      ],
      fun: "vegetarian（素食者）= vegetable + -arian（人）。vegan（纯素食者）比 vegetarian 更严格——不吃任何动物产品（包括蛋奶）。",
      usage: "veggie 是 vegetable 的口语缩写。couch potato 虽然有蔬菜名但指'懒人'——这也算蔬菜的'黑锅'！"
    },
    {
      word: "breakfast",
      phonetic: "/ˈbrekfəst/",
      pos: "n.",
      posClass: "n",
      meaning: "早餐",
      root: {
        parts: [
          { text: "break", type: "root", label: "打破" },
          { text: "fast", type: "root", label: "禁食/斋戒" }
        ],
        explain: "break（打破）+ fast（禁食）= 打破一夜的禁食 = 早餐！睡了一晚上没吃东西，早上第一顿饭就是'打破禁食'。"
      },
      memory: "breakfast = break + fast！一整夜的 fast（禁食）在早上被 break（打破）了——这就是早餐的真正含义！",
      family: ["lunch（午餐）", "dinner（晚餐）", "brunch（早午餐 = breakfast + lunch）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "I have eggs for breakfast.", zh: "我早餐吃鸡蛋。" },
        { en: "Breakfast is the most important meal.", zh: "早餐是最重要的一餐。" }
      ],
      fun: "brunch = breakfast + lunch（早午餐），这种把两个词拼在一起的造词法叫'混合词'(portmanteau)。类似的：smog = smoke + fog（烟雾），blog = web + log（博客）。",
      usage: "have/eat breakfast = 吃早餐（不加 the 和 a）。What's for breakfast? = 早餐吃什么？"
    },
    {
      word: "lunch",
      phonetic: "/lʌntʃ/",
      pos: "n.",
      posClass: "n",
      meaning: "午餐",
      root: { parts: [], explain: "可能来自 luncheon 的缩写，而 luncheon 可能来自 nuncheon = noon（中午）+ shench（饮品）= 中午的饮食。" },
      memory: "lunch 和 munch（大嚼）押韵——中午 munch munch 大口吃 lunch！",
      family: ["lunchbox（午餐盒）", "lunchtime（午餐时间）", "luncheon（正式午宴）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "What do you have for lunch?", zh: "你午餐吃什么？" },
        { en: "Let's have lunch together.", zh: "我们一起吃午饭吧。" }
      ],
      fun: "There's no such thing as a free lunch.（天下没有免费的午餐）——经济学中最著名的谚语之一，意思是一切都有代价。",
      usage: "have lunch = 吃午餐。lunch break = 午休。out to lunch = 不在/发呆（俚语）。"
    },
    {
      word: "chicken",
      phonetic: "/ˈtʃɪkɪn/",
      pos: "n.",
      posClass: "n",
      meaning: "鸡；鸡肉",
      root: { parts: [], explain: "古英语 cicen（小鸡）。有趣的是，活着的动物和餐桌上的肉很多用不同的词（cow→beef, pig→pork），但 chicken 活着和做成菜都叫 chicken！" },
      memory: "chicken 里有 'chick'（小鸡）+ en——小鸡长大了就变成 chicken！",
      family: ["chick（小鸡）", "chickenpox（水痘）"],
      synonyms: ["poultry（家禽肉）"],
      antonyms: [],
      sentences: [
        { en: "I like chicken.", zh: "我喜欢吃鸡肉。" },
        { en: "We have chicken for dinner.", zh: "我们晚餐吃鸡肉。" }
      ],
      fun: "chicken 做形容词 = 胆小的！'Don't be chicken!' = 别胆小！还有 chicken out = 临阵退缩。这可能是因为鸡受惊时会到处乱跑。",
      usage: "chicken 不可数=鸡肉，可数=鸡。play chicken = 比谁胆大的危险游戏。"
    },
    {
      word: "fruit",
      phonetic: "/fruːt/",
      pos: "n.",
      posClass: "n",
      meaning: "水果",
      root: { parts: [], explain: "来自拉丁语 fructus = frui（享受）的结果。水果是植物'享受'阳光后结出的果实。同根词 fruition（成果/实现）。" },
      memory: "fruit 和 'root'（根）押韵——从 root（根）长出来的 fruit（果实）！",
      family: ["fruitful（丰收的；有成效的）", "fruition（成果）", "fruity（水果味的）"],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "I eat fruit every day.", zh: "我每天吃水果。" },
        { en: "What fruit do you like?", zh: "你喜欢什么水果？" }
      ],
      fun: "the fruits of your labor = 你劳动的成果。fruit 从'植物的果实'引申出'成果、结果'的意思。fruitful = 硕果累累的/有成效的。",
      usage: "fruit 通常用作不可数名词（some fruit），说不同种类时可以用 fruits。"
    },
    {
      word: "rice",
      phonetic: "/raɪs/",
      pos: "n.",
      posClass: "n",
      meaning: "大米；米饭",
      root: { parts: [], explain: "来自古法语 ris，最初源自希腊语 oryza，而希腊语又来自古印度的达罗毗荼语。大米的名字从印度传到了全世界！" },
      memory: "rice 和 nice、price 押韵——nice rice at a good price（好价钱的好大米）！",
      family: [],
      synonyms: [],
      antonyms: [],
      sentences: [
        { en: "I eat rice for lunch.", zh: "我午餐吃米饭。" },
        { en: "Rice is important in China.", zh: "大米在中国很重要。" }
      ],
      fun: "英语中的 rice 一个词搞定，但中文有：稻、米、饭——分别指植物、粮食、熟食。外国人学中文时常困惑：为什么一个东西要三个词？",
      usage: "rice 是不可数名词，不能说 a rice 或 rices。a bowl of rice = 一碗米饭。"
    },
    {
      word: "healthy",
      phonetic: "/ˈhelθi/",
      pos: "adj.",
      posClass: "adj",
      meaning: "健康的",
      root: {
        parts: [
          { text: "health", type: "root", label: "健康" },
          { text: "-y", type: "suffix", label: "有……特征的" }
        ],
        explain: "health（健康）+ -y（形容词后缀）= 有健康特征的。health 来自古英语 hælþ，与 whole（完整的）和 heal（治愈）同源——健康就是'身体完整'。"
      },
      memory: "healthy 里有 'heal'（治愈）——健康(healthy)的人不需要被 heal（治愈）！",
      family: ["health（健康）", "unhealthy（不健康的）", "healthily（健康地）"],
      synonyms: ["fit（健康的）", "well（健康的）"],
      antonyms: ["unhealthy（不健康的）", "sick（生病的）", "ill（生病的）"],
      sentences: [
        { en: "Eating fruit is healthy.", zh: "吃水果是健康的。" },
        { en: "She is a healthy girl.", zh: "她是一个健康的女孩。" }
      ],
      fun: "health, whole, heal 竟然是亲戚！whole（完整的）→ health（完整的状态=健康）→ heal（使完整=治愈）。holy（神圣的）也是远房亲戚——神圣 = 完美无缺 = 完整。",
      usage: "stay healthy = 保持健康。a healthy diet = 健康的饮食。"
    },
    {
      word: "star",
      phonetic: "/stɑː(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "明星；星星",
      root: { parts: [], explain: "古英语 steorra，与拉丁语 stella（星星）、希腊语 aster（星星）同源。asteroid = aster + oid（像星星一样的东西=小行星）。" },
      memory: "star 倒过来是 rats（老鼠）——stars（星星）和 rats（老鼠）互为镜像词！",
      family: ["starry（布满星星的）", "starfish（海星）", "superstar（超级明星）"],
      synonyms: ["celebrity（名人）"],
      antonyms: [],
      sentences: [
        { en: "She wants to be a sports star.", zh: "她想成为体育明星。" },
        { en: "Look at the stars!", zh: "看星星！" }
      ],
      fun: "aster-/astro- 词根家族：astronaut（宇航员=星星的水手）、astronomy（天文学=星星的法则）、asterisk（星号*=小星星）、disaster（灾难=坏星星=星象不好）！",
      usage: "rock star = 摇滚明星。star sign = 星座。five-star hotel = 五星级酒店。"
    }
  ]
};

if(typeof window!=='undefined'){window.UNIT6=UNIT6;}

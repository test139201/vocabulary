// Unit 7: How much are these socks?
const UNIT7 = {
  id: 7,
  title: "How much are these socks?",
  theme: "购物与价格",
  color: "#14b8a6",
  words: [
    {
      word: "much",
      phonetic: "/mʌtʃ/",
      pos: "adv./adj.",
      posClass: "adv",
      meaning: "许多；……多少",
      root: { parts: [], explain: "古英语 mycel（大的、多的）。much 和 more、most 是一家人——more 是比较级，most 是最高级。" },
      memory: "how much = 多少钱（不可数）；how many = 多少个（可数）。much 配不可数，many 配可数——这是铁律！",
      family: ["more（更多）", "most（最多）"],
      synonyms: ["a lot of（许多）", "plenty of（大量的）"],
      antonyms: ["little（少的）", "few（少的）"],
      sentences: [
        { en: "How much is this T-shirt?", zh: "这件T恤多少钱？" },
        { en: "Thank you very much.", zh: "非常感谢你。" }
      ],
      fun: "How much 问价格是全球旅行者必备句型！在英国还有一种非常有趣的说法：'How much do you want for it?'（你要多少钱卖它？）——仿佛在砍价。",
      usage: "how much + 不可数名词。how many + 可数名词复数。too much = 太多了。"
    },
    {
      word: "buy",
      phonetic: "/baɪ/",
      pos: "v.",
      posClass: "v",
      meaning: "买",
      root: { parts: [], explain: "古英语 bycgan。与 by（在旁边）无关！buy 的过去式 bought 拼写变化极大——这是不规则变化的代表。" },
      memory: "buy 和 by、bye 三个词同音但意思完全不同！buy = 买，by = 通过/在旁边，bye = 再见。",
      family: ["buyer（买家）", "bought（过去式）"],
      synonyms: ["purchase（购买，更正式）", "get（获得）"],
      antonyms: ["sell（卖）"],
      sentences: [
        { en: "I want to buy a new bag.", zh: "我想买一个新书包。" },
        { en: "She bought a dress yesterday.", zh: "她昨天买了一条裙子。" }
      ],
      fun: "buy、by、bye 是英语最著名的同音异义词三胞胎！Bye, I'll buy it by tomorrow.（再见，我明天之前会买下它。）——三个音一样的词同时出场。",
      usage: "buy sb. sth. = buy sth. for sb. = 给某人买某物。a good buy = 便宜货。"
    },
    {
      word: "sell",
      phonetic: "/sel/",
      pos: "v.",
      posClass: "v",
      meaning: "卖；出售",
      root: { parts: [], explain: "古英语 sellan，原义是'给予'。卖东西就是'把东西给别人（换取金钱）'。" },
      memory: "sell 和 bell（铃铛）押韵——古代卖东西的人摇着 bell（铃铛）来 sell（叫卖）！",
      family: ["seller（卖家）", "sold（过去式）", "sale（出售/促销）", "bestseller（畅销书/品）"],
      synonyms: ["trade（交易）", "market（销售）"],
      antonyms: ["buy（买）", "purchase（购买）"],
      sentences: [
        { en: "We sell bags at a good price.", zh: "我们以优惠的价格出售书包。" },
        { en: "This book sells well.", zh: "这本书卖得很好。" }
      ],
      fun: "sell out = 售罄/出卖。sell like hot cakes = 卖得像热蛋糕一样快 = 非常畅销。bestseller = 最畅销的 = 畅销书。",
      usage: "for sale = 待售。on sale = 促销中/在出售。sell out = 卖光。"
    },
    {
      word: "clothes",
      phonetic: "/kləʊðz/",
      pos: "n.",
      posClass: "n",
      meaning: "衣服（复数）",
      root: { parts: [], explain: "cloth（布料）的复数形式。注意：clothes 永远是复数！没有单数形式 'a clothe'。" },
      memory: "clothes 的发音陷阱：/kləʊðz/，很多人会读成 /kləʊðɪz/，其实中间没有额外的元音！close 和 clothes 发音几乎一样。",
      family: ["cloth（布料）", "clothing（衣物，总称）", "clothe（给……穿衣）"],
      synonyms: ["clothing（衣物）", "garments（服装）", "outfit（一套衣服）"],
      antonyms: [],
      sentences: [
        { en: "She likes buying new clothes.", zh: "她喜欢买新衣服。" },
        { en: "Put on your clothes!", zh: "穿上你的衣服！" }
      ],
      fun: "clothes 永远是复数，因为衣服通常由多件组成。类似的'永远复数'词：glasses（眼镜）、trousers（裤子）、scissors（剪刀）——都是成对的东西。",
      usage: "clothes 永远复数，没有单数形式。a piece/item of clothing = 一件衣服。"
    },
    {
      word: "store",
      phonetic: "/stɔː(r)/",
      pos: "n.",
      posClass: "n",
      meaning: "商店",
      root: { parts: [], explain: "来自拉丁语 instaurare（恢复/储备）。store 的本义是'储存'，引申为'存放商品的地方'= 商店。" },
      memory: "store = 商店（美式）= shop（英式）。store 还有'储存'的意思——商店就是储存(store)商品的地方(store)！一个词双重身份。",
      family: ["storage（储存）", "restore（恢复）", "bookstore（书店）"],
      synonyms: ["shop（商店）", "outlet（专卖店）"],
      antonyms: [],
      sentences: [
        { en: "Let's go to the clothes store.", zh: "我们去服装店吧。" },
        { en: "The store is open.", zh: "商店开门了。" }
      ],
      fun: "美式英语说 store，英式英语说 shop。但 department store（百货商店）两边通用。App Store = 应用商店——连苹果公司也用 store！",
      usage: "in store = 即将来临。store up = 储存。convenience store = 便利店。"
    },
    {
      word: "price",
      phonetic: "/praɪs/",
      pos: "n.",
      posClass: "n",
      meaning: "价格",
      root: { parts: [], explain: "来自拉丁语 pretium（价值）。同根词：precious（珍贵的=有价值的）、appreciate（感激/升值=评估价值）。" },
      memory: "price 和 rice 押韵——大米(rice)的价格(price)！price 和 prize（奖品）同源——奖品就是有价值的东西。",
      family: ["priceless（无价的）", "pricy/pricey（昂贵的）", "prize（奖品）", "precious（珍贵的）"],
      synonyms: ["cost（花费）", "value（价值）"],
      antonyms: [],
      sentences: [
        { en: "What's the price of this bag?", zh: "这个包的价格是多少？" },
        { en: "The price is too high.", zh: "价格太高了。" }
      ],
      fun: "priceless = 无价的（太贵了不能用钱衡量）。但 worthless = 一文不值的。less 在这两个词里效果完全相反——英语就是这么调皮！",
      usage: "at a good price = 以优惠的价格。half price = 半价。pay the price = 付出代价。"
    },
    {
      word: "big",
      phonetic: "/bɪɡ/",
      pos: "adj.",
      posClass: "adj",
      meaning: "大的",
      root: { parts: [], explain: "中古英语 bigge，来源不确定——这个简单的词居然身世成谜！可能来自斯堪的纳维亚语。" },
      memory: "big 只有三个字母，但形容的都是大东西——小词大力量！",
      family: ["bigger（更大的）", "biggest（最大的）"],
      synonyms: ["large（大的）", "huge（巨大的）", "enormous（庞大的）"],
      antonyms: ["small（小的）", "little（小的）", "tiny（微小的）"],
      sentences: [
        { en: "She has a big family.", zh: "她有一个大家庭。" },
        { en: "This bag is too big.", zh: "这个包太大了。" }
      ],
      fun: "big/large/great 都是'大'，区别是什么？big 最口语化，large 更正式（常指尺寸），great 强调程度或品质（a great man = 伟人，不是大人）。",
      usage: "Big Apple = 大苹果 = 纽约的昵称。big deal = 大事（no big deal = 没什么大不了）。"
    },
    {
      word: "small",
      phonetic: "/smɔːl/",
      pos: "adj.",
      posClass: "adj",
      meaning: "小的",
      root: { parts: [], explain: "古英语 smæl，原义是'细的、窄的'——想象把东西越来越细到最后就变小了。" },
      memory: "small 里有 'all'——所有(all)东西都可以是 small（小的）！small 和 tall 押韵——small 是矮的反义，tall 是高的。",
      family: ["smaller（更小的）", "smallest（最小的）"],
      synonyms: ["little（小的）", "tiny（微小的）", "mini（迷你的）"],
      antonyms: ["big（大的）", "large（大的）", "huge（巨大的）"],
      sentences: [
        { en: "The T-shirt is too small for me.", zh: "这件T恤对我来说太小了。" },
        { en: "I have a small room.", zh: "我有一个小房间。" }
      ],
      fun: "small talk = 闲聊（聊些'小'话题，如天气、假期等，不涉及深入话题）。学会 small talk 是社交的重要技能！",
      usage: "small talk = 闲聊。in a small way = 小规模地。feel small = 感到自卑。"
    }
  ]
};

if(typeof window!=='undefined'){window.UNIT7=UNIT7;}

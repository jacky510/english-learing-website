/**
 * 探险词汇 - Longman Express 词汇学习平台
 * 主应用逻辑
 */

// ============================================
// 词汇数据库
// ============================================

const VOCABULARY_DATA = {
  books: [
    {
      id: '1A',
      title: 'Longman Express 1A',
      level: 1,
      description: '基础词汇 - 自我介绍、家庭、学校用品',
      color: '#6C5CE7',
      units: 8,
      wordsCount: 80
    },
    {
      id: '1B',
      title: 'Longman Express 1B',
      level: 1,
      description: '基础词汇 - 时间、月份、季节、天气',
      color: '#A29BFE',
      units: 8,
      wordsCount: 80
    },
    {
      id: '2A',
      title: 'Longman Express 2A',
      level: 2,
      description: '日常生活 - 房间家具、城市地点、交通',
      color: '#00B894',
      units: 8,
      wordsCount: 90
    },
    {
      id: '2B',
      title: 'Longman Express 2B',
      level: 2,
      description: '日常生活 - 爱好、运动、健康、购物',
      color: '#55EFC4',
      units: 8,
      wordsCount: 90
    },
    {
      id: '3A',
      title: 'Longman Express 3A',
      level: 3,
      description: '进阶表达 - 描述外貌、性格、情感',
      color: '#FDCB6E',
      units: 8,
      wordsCount: 100
    },
    {
      id: '3B',
      title: 'Longman Express 3B',
      level: 3,
      description: '进阶表达 - 科技、教育、阅读',
      color: '#F9E79F',
      units: 8,
      wordsCount: 100
    },
    {
      id: '4A',
      title: 'Longman Express 4A',
      level: 4,
      description: '深度话题 - 社会问题、环境、旅游',
      color: '#FF6B6B',
      units: 8,
      wordsCount: 110
    },
    {
      id: '4B',
      title: 'Longman Express 4B',
      level: 4,
      description: '深度话题 - 文化差异、友谊、未来',
      color: '#FF8E8E',
      units: 8,
      wordsCount: 110
    },
    {
      id: '5A',
      title: 'Longman Express 5A',
      level: 5,
      description: '高级应用 - 媒体影响、科技、环保',
      color: '#00CEC9',
      units: 8,
      wordsCount: 120
    },
    {
      id: '5B',
      title: 'Longman Express 5B',
      level: 5,
      description: '高级应用 - 人生哲理、职业发展',
      color: '#81ECEC',
      units: 8,
      wordsCount: 120
    }
  ],

  words: {
    // Level 1A - 基础词汇
    '1A': [
      {
        id: '1A_001',
        word: 'apple',
        phonetic: '/ˈæpl/',
        translation: '苹果',
        image: '🍎',
        book: '1A',
        examples: [
          { en: 'I eat an apple every day.', zh: '我每天吃一个苹果。' }
        ],
        memoryTips: {
          phonetic: '谐音：爱泡（苹果泡在水里）',
          image: '想象一个红红圆圆的苹果',
          story: '每天爱(ai)吃苹果(apple)'
        }
      },
      {
        id: '1A_002',
        word: 'banana',
        phonetic: '/bəˈnɑːnə/',
        translation: '香蕉',
        image: '🍌',
        book: '1A',
        examples: [
          { en: 'The monkey likes banana.', zh: '猴子喜欢香蕉。' }
        ],
        memoryTips: {
          phonetic: '谐音：把那那（把那个香蕉递给我那那）',
          image: '想象一个黄色的弯弯的香蕉',
          story: '爸爸(ba)拿(nana)着香蕉'
        }
      },
      {
        id: '1A_003',
        word: 'book',
        phonetic: '/bʊk/',
        translation: '书',
        image: '📚',
        book: '1A',
        examples: [
          { en: 'This is my book.', zh: '这是我的书。' }
        ],
        memoryTips: {
          phonetic: '谐音：不可（这本书不可借）',
          image: '想象一本打开的书',
          story: 'BOOK = 知识的仓库'
        }
      },
      {
        id: '1A_004',
        word: 'cat',
        phonetic: '/kæt/',
        translation: '猫',
        image: '🐱',
        book: '1A',
        examples: [
          { en: 'The cat is cute.', zh: '这只猫很可爱。' }
        ],
        memoryTips: {
          phonetic: '谐音：开特（开着特别的车的是猫）',
          image: '想象一只可爱的猫咪',
          story: 'C + AT = 看见(c)一只(at)猫'
        }
      },
      {
        id: '1A_005',
        word: 'dog',
        phonetic: '/dɔːɡ/',
        translation: '狗',
        image: '🐕',
        book: '1A',
        examples: [
          { en: 'I have a dog.', zh: '我有一只狗。' }
        ],
        memoryTips: {
          phonetic: '谐音：道格（道格是个好名字）',
          image: '想象一只忠诚的小狗',
          story: '狗(d)og = 狗(o)总是(o)跟着(g)主人'
        }
      },
      {
        id: '1A_006',
        word: 'egg',
        phonetic: '/eɡ/',
        translation: '鸡蛋',
        image: '🥚',
        book: '1A',
        examples: [
          { en: 'I want an egg.', zh: '我想要一个鸡蛋。' }
        ],
        memoryTips: {
          phonetic: '谐音：爱哥（爱哥哥就要吃鸡蛋）',
          image: '想象一个白色的椭圆形鸡蛋',
          story: 'E + GG = 鹅(e)下蛋(gg)'
        }
      },
      {
        id: '1A_007',
        word: 'fish',
        phonetic: '/fɪʃ/',
        translation: '鱼',
        image: '🐟',
        book: '1A',
        examples: [
          { en: 'The fish is in the water.', zh: '鱼在水里。' }
        ],
        memoryTips: {
          phonetic: '谐音：飞鱼',
          image: '想象一条游来游去的鱼',
          story: 'F + ISH = f游(i)在水里(sh)'
        }
      },
      {
        id: '1A_008',
        word: 'girl',
        phonetic: '/ɡɜːrl/',
        translation: '女孩',
        image: '👧',
        book: '1A',
        examples: [
          { en: 'The girl is my sister.', zh: '这个女孩是我的妹妹。' }
        ],
        memoryTips: {
          phonetic: '谐音：戈尔（一个叫戈尔的女孩）',
          image: '想象一个扎着辫子的女孩',
          story: 'G + IRL = 女孩(g)irl'
        }
      },
      {
        id: '1A_009',
        word: 'house',
        phonetic: '/haʊs/',
        translation: '房子',
        image: '🏠',
        book: '1A',
        examples: [
          { en: 'This is my house.', zh: '这是我的房子。' }
        ],
        memoryTips: {
          phonetic: '谐音：好士（好房子里有好绅士）',
          image: '想象一个温馨的小房子',
          story: 'HO + USE = 房子(ho)用来(use)住'
        }
      },
      {
        id: '1A_010',
        word: 'ice',
        phonetic: '/aɪs/',
        translation: '冰',
        image: '🧊',
        book: '1A',
        examples: [
          { en: 'I want some ice.', zh: '我想要一些冰。' }
        ],
        memoryTips: {
          phonetic: '谐音：爱死（爱死冰的感觉）',
          image: '想象一块透明的冰块',
          story: 'I + CE = 我(i)看到冰(ce)'
        }
      }
    ],
    // Level 1B - 基础词汇
    '1B': [
      {
        id: '1B_001',
        word: 'January',
        phonetic: '/ˈdʒænjuˌeri/',
        translation: '一月',
        image: '📅',
        book: '1B',
        examples: [
          { en: 'January is the first month.', zh: '一月是一年的第一个月。' }
        ],
        memoryTips: {
          phonetic: '谐音：詹纽瑞',
          image: '想象新年的第一天',
          story: 'Janu = 罗马神话的门神雅努斯'
        }
      },
      {
        id: '1B_002',
        word: 'February',
        phonetic: '/ˈfebruˌeri/',
        translation: '二月',
        image: '💕',
        book: '1B',
        examples: [
          { en: 'February is very cold.', zh: '二月非常冷。' }
        ],
        memoryTips: {
          phonetic: '谐音：二月如水',
          image: '想象情人节的玫瑰',
          story: 'Febru = 净化之月'
        }
      },
      {
        id: '1B_003',
        word: 'Monday',
        phonetic: '/ˈmʌndeɪ/',
        translation: '星期一',
        image: '🌙',
        book: '1B',
        examples: [
          { en: 'Monday is the first day of the week.', zh: '星期一是一周的第一天。' }
        ],
        memoryTips: {
          phonetic: '谐音：忙day（星期一很忙）',
          image: '想象满月',
          story: 'Mon = Moon（月亮）'
        }
      },
      {
        id: '1B_004',
        word: 'Tuesday',
        phonetic: '/ˈtuːzdeɪ/',
        translation: '星期二',
        image: '🔥',
        book: '1B',
        examples: [
          { en: 'Tuesday is my favorite day.', zh: '星期二是我最喜欢的一天。' }
        ],
        memoryTips: {
          phonetic: '谐音：土豆day',
          image: '想象战神火星',
          story: 'Tues = 战神提尔'
        }
      },
      {
        id: '1B_005',
        word: 'spring',
        phonetic: '/sprɪŋ/',
        translation: '春天',
        image: '🌸',
        book: '1B',
        examples: [
          { en: 'Spring is warm and beautiful.', zh: '春天温暖又美丽。' }
        ],
        memoryTips: {
          phonetic: '谐音：四普林',
          image: '想象盛开的花朵',
          story: 'Spr = 种子发芽的声音'
        }
      },
      {
        id: '1B_006',
        word: 'summer',
        phonetic: '/ˈsʌmər/',
        translation: '夏天',
        image: '☀️',
        book: '1B',
        examples: [
          { en: 'Summer is very hot.', zh: '夏天非常热。' }
        ],
        memoryTips: {
          phonetic: '谐音：萨默',
          image: '想象阳光和海滩',
          story: 'Sum + mer = 太阳(sum)照耀(m)更多(er)'
        }
      },
      {
        id: '1B_007',
        word: 'autumn',
        phonetic: '/ˈɔːtəm/',
        translation: '秋天',
        image: '🍂',
        book: '1B',
        examples: [
          { en: 'Autumn is harvest season.', zh: '秋天是丰收的季节。' }
        ],
        memoryTips: {
          phonetic: '谐音：奥腾',
          image: '想象金黄的落叶',
          story: 'Au = 黄金色 + tumn = 收获'
        }
      },
      {
        id: '1B_008',
        word: 'winter',
        phonetic: '/ˈwɪntər/',
        translation: '冬天',
        image: '❄️',
        book: '1B',
        examples: [
          { en: 'Winter is very cold.', zh: '冬天非常冷。' }
        ],
        memoryTips: {
          phonetic: '谐音：温特',
          image: '想象雪花飘落',
          story: 'Win = 赢得温暖 + ter'
        }
      },
      {
        id: '1B_009',
        word: 'sunny',
        phonetic: '/ˈsʌni/',
        translation: '晴朗的',
        image: '🌞',
        book: '1B',
        examples: [
          { en: 'It is sunny today.', zh: '今天是晴天。' }
        ],
        memoryTips: {
          phonetic: '谐音：萨尼',
          image: '想象太阳照耀',
          story: 'Sun + ny = 太阳(sun)的'
        }
      },
      {
        id: '1B_010',
        word: 'rainy',
        phonetic: '/ˈreɪni/',
        translation: '下雨的',
        image: '🌧️',
        book: '1B',
        examples: [
          { en: 'It is rainy in summer.', zh: '夏天下雨。' }
        ],
        memoryTips: {
          phonetic: '谐音：瑞尼',
          image: '想象雨滴落下',
          story: 'Rain + y = 雨(rain)的'
        }
      }
    ],
    // Level 2A - 日常生活
    '2A': [
      {
        id: '2A_001',
        word: 'bedroom',
        phonetic: '/ˈbedruːm/',
        translation: '卧室',
        image: '🛏️',
        book: '2A',
        examples: [
          { en: 'My bedroom is big.', zh: '我的卧室很大。' }
        ],
        memoryTips: {
          phonetic: '谐音：贝德如木',
          image: '想象一张温暖的床',
          story: 'Bed + room = 睡觉(bed)的房间(room)'
        }
      },
      {
        id: '2A_002',
        word: 'kitchen',
        phonetic: '/ˈkɪtʃɪn/',
        translation: '厨房',
        image: '🍳',
        book: '2A',
        examples: [
          { en: 'Mom cooks in the kitchen.', zh: '妈妈在厨房做饭。' }
        ],
        memoryTips: {
          phonetic: '谐音：可气陈',
          image: '想象锅碗瓢盆',
          story: 'Kit + chen = 烹饪用具'
        }
      },
      {
        id: '2A_003',
        word: 'hospital',
        phonetic: '/ˈhɑːspɪtl/',
        translation: '医院',
        image: '🏥',
        book: '2A',
        examples: [
          { en: 'I go to the hospital.', zh: '我去医院。' }
        ],
        memoryTips: {
          phonetic: '谐音:好斯皮透',
          image: '想象白色十字',
          story: 'Hospit + al = 接待病人的地方'
        }
      },
      {
        id: '2A_004',
        word: 'restaurant',
        phonetic: '/ˈrestrɑːnt/',
        translation: '餐厅',
        image: '🍽️',
        book: '2A',
        examples: [
          { en: 'We eat at the restaurant.', zh: '我们在餐厅吃饭。' }
        ],
        memoryTips: {
          phonetic: '谐音：热斯特软特',
          image: '想象美食和餐具',
          story: 'Rest + aurant = 休息和吃饭的地方'
        }
      },
      {
        id: '2A_005',
        word: 'bus',
        phonetic: '/bʌs/',
        translation: '公共汽车',
        image: '🚌',
        book: '2A',
        examples: [
          { en: 'I take the bus to school.', zh: '我乘公共汽车去学校。' }
        ],
        memoryTips: {
          phonetic: '谐音：巴斯',
          image: '想象红色双层巴士',
          story: 'BUS = 公共运输系统'
        }
      },
      {
        id: '2A_006',
        word: 'train',
        phonetic: '/treɪn/',
        translation: '火车',
        image: '🚂',
        book: '2A',
        examples: [
          { en: 'The train is fast.', zh: '火车很快。' }
        ],
        memoryTips: {
          phonetic: '谐音：纯',
          image: '想象长长的火车',
          story: 'TR + AIN = 运输轨道'
        }
      },
      {
        id: '2A_007',
        word: 'teacher',
        phonetic: '/ˈtiːtʃər/',
        translation: '老师',
        image: '👩‍🏫',
        book: '2A',
        examples: [
          { en: 'My teacher is kind.', zh: '我的老师很和蔼。' }
        ],
        memoryTips: {
          phonetic: '谐音：提车儿',
          image: '想象讲台上的老师',
          story: 'Teach + er = 教导的人'
        }
      },
      {
        id: '2A_008',
        word: 'doctor',
        phonetic: '/ˈdɑːktər/',
        translation: '医生',
        image: '👨‍⚕️',
        book: '2A',
        examples: [
          { en: 'The doctor helps patients.', zh: '医生帮助病人。' }
        ],
        memoryTips: {
          phonetic: '谐音：道克特',
          image: '想象穿白大褂的医生',
          story: 'Doc + tor = 治疗的人'
        }
      },
      {
        id: '2A_009',
        word: 'library',
        phonetic: '/ˈlaɪbreri/',
        translation: '图书馆',
        image: '📖',
        book: '2A',
        examples: [
          { en: 'I read books in the library.', zh: '我在图书馆看书。' }
        ],
        memoryTips: {
          phonetic: '谐音：赖波瑞',
          image: '想象高高的书架',
          story: 'Libr + ary = 书籍存放的地方'
        }
      },
      {
        id: '2A_010',
        word: 'park',
        phonetic: '/pɑːrk/',
        translation: '公园',
        image: '🌳',
        book: '2A',
        examples: [
          { en: 'Children play in the park.', zh: '孩子们在公园玩耍。' }
        ],
        memoryTips: {
          phonetic: '谐音：帕克',
          image: '想象绿树和草坪',
          story: 'PARK = 公共休闲区'
        }
      }
    ],
    // Level 2B - 日常生活
    '2B': [
      {
        id: '2B_001',
        word: 'hobby',
        phonetic: '/ˈhɑːbi/',
        translation: '爱好',
        image: '🎨',
        book: '2B',
        examples: [
          { en: 'Reading is my hobby.', zh: '阅读是我的爱好。' }
        ],
        memoryTips: {
          phonetic: '谐音：好毕',
          image: '想象做喜欢的事情',
          story: 'HOB + BY = 业余时间喜欢做的事'
        }
      },
      {
        id: '2B_002',
        word: 'football',
        phonetic: '/ˈfʊtbɔːl/',
        translation: '足球',
        image: '⚽',
        book: '2B',
        examples: [
          { en: 'I like playing football.', zh: '我喜欢踢足球。' }
        ],
        memoryTips: {
          phonetic: '谐音：服特饱',
          image: '想象黑白相间的足球',
          story: 'Foot + ball = 用脚踢的球'
        }
      },
      {
        id: '2B_003',
        word: 'basketball',
        phonetic: '/ˈbæskɪtbɔːl/',
        translation: '篮球',
        image: '🏀',
        book: '2B',
        examples: [
          { en: 'We play basketball at school.', zh: '我们在学校打篮球。' }
        ],
        memoryTips: {
          phonetic: '谐音：巴斯凯特饱',
          image: '想象橙色篮球',
          story: 'Basket + ball = 篮子球'
        }
      },
      {
        id: '2B_004',
        word: 'healthy',
        phonetic: '/ˈhelθi/',
        translation: '健康的',
        image: '🥗',
        book: '2B',
        examples: [
          { en: 'Eating vegetables is healthy.', zh: '吃蔬菜是健康的。' }
        ],
        memoryTips: {
          phonetic: '谐音：嘿死以',
          image: '想象蔬菜和水果',
          story: 'Health + y = 健康(health)的'
        }
      },
      {
        id: '2B_005',
        word: 'shopping',
        phonetic: '/ˈʃɑːpɪŋ/',
        translation: '购物',
        image: '🛍️',
        book: '2B',
        examples: [
          { en: 'I enjoy shopping.', zh: '我喜欢购物。' }
        ],
        memoryTips: {
          phonetic: '谐音：夏平',
          image: '想象购物袋',
          story: 'Shop + ping = 买东西'
        }
      },
      {
        id: '2B_006',
        word: 'birthday',
        phonetic: '/ˈbɜːrθdeɪ/',
        translation: '生日',
        image: '🎂',
        book: '2B',
        examples: [
          { en: 'Happy birthday to you!', zh: '祝你生日快乐！' }
        ],
        memoryTips: {
          phonetic: '谐音：波死得',
          image: '想象生日蛋糕和蜡烛',
          story: 'Birth + day = 出生的一天'
        }
      },
      {
        id: '2B_007',
        word: 'holiday',
        phonetic: '/ˈhɑːlədeɪ/',
        translation: '假期',
        image: '🏖️',
        book: '2B',
        examples: [
          { en: 'Where will you go for the holiday?', zh: '你假期去哪里？' }
        ],
        memoryTips: {
          phonetic: '谐音：好乐意得',
          image: '想象海滩和阳光',
          story: 'Holi + day = 神圣的日子'
        }
      },
      {
        id: '2B_008',
        word: 'festival',
        phonetic: '/ˈfestɪvl/',
        translation: '节日',
        image: '🎉',
        book: '2B',
        examples: [
          { en: 'Spring Festival is important in China.', zh: '春节在中国很重要。' }
        ],
        memoryTips: {
          phonetic: '谐音：费斯提伍',
          image: '想象烟花和灯笼',
          story: 'Fest + ival = 欢乐的集会'
        }
      },
      {
        id: '2B_009',
        word: 'swimming',
        phonetic: '/ˈswɪmɪŋ/',
        translation: '游泳',
        image: '🏊',
        book: '2B',
        examples: [
          { en: 'I am good at swimming.', zh: '我擅长游泳。' }
        ],
        memoryTips: {
          phonetic: '谐音：斯维明',
          image: '想象在水中游泳',
          story: 'Swim + ming = 划水'
        }
      },
      {
        id: '2B_010',
        word: 'cooking',
        phonetic: '/ˈkʊkɪŋ/',
        translation: '烹饪',
        image: '👨‍🍳',
        book: '2B',
        examples: [
          { en: 'My mom enjoys cooking.', zh: '我妈妈喜欢烹饪。' }
        ],
        memoryTips: {
          phonetic: '谐音：酷可盈',
          image: '想象锅和食材',
          story: 'Cook + ing = 做饭的动作'
        }
      }
    ],
    // Level 3A - 进阶表达
    '3A': [
      {
        id: '3A_001',
        word: 'beautiful',
        phonetic: '/ˈbjuːtɪfl/',
        translation: '美丽的',
        image: '🌺',
        book: '3A',
        examples: [
          { en: 'The flower is beautiful.', zh: '这朵花很美丽。' }
        ],
        memoryTips: {
          phonetic: '谐音：比特福',
          image: '想象美丽的风景',
          story: 'Beauti + ful = 美(beauty)的'
        }
      },
      {
        id: '3A_002',
        word: 'friendly',
        phonetic: '/ˈfrendli/',
        translation: '友好的',
        image: '🤝',
        book: '3A',
        examples: [
          { en: 'My neighbor is very friendly.', zh: '我的邻居非常友好。' }
        ],
        memoryTips: {
          phonetic: '谐音：弗朗德利',
          image: '想象微笑握手',
          story: 'Friend + ly = 朋友(friend)的'
        }
      },
      {
        id: '3A_003',
        word: 'clever',
        phonetic: '/ˈklevər/',
        translation: '聪明的',
        image: '🧠',
        book: '3A',
        examples: [
          { en: 'The clever boy solved the problem.', zh: '这个聪明的男孩解决了问题。' }
        ],
        memoryTips: {
          phonetic: '谐音：克来沃',
          image: '想象大脑发光',
          story: 'CLEVER = 快速理解的能力'
        }
      },
      {
        id: '3A_004',
        word: 'happy',
        phonetic: '/ˈhæpi/',
        translation: '开心的',
        image: '😊',
        book: '3A',
        examples: [
          { en: 'I am very happy today.', zh: '我今天非常开心。' }
        ],
        memoryTips: {
          phonetic: '谐音：嗨皮',
          image: '想象微笑的脸',
          story: 'HAP + PY = 好运气'
        }
      },
      {
        id: '3A_005',
        word: 'sad',
        phonetic: '/sæd/',
        translation: '伤心的',
        image: '😢',
        book: '3A',
        examples: [
          { en: 'She looks sad.', zh: '她看起来很伤心。' }
        ],
        memoryTips: {
          phonetic: '谐音：赛的',
          image: '想象哭泣的表情',
          story: 'SAD = 心情低落'
        }
      },
      {
        id: '3A_006',
        word: 'angry',
        phonetic: '/ˈæŋɡri/',
        translation: '生气的',
        image: '😠',
        book: '3A',
        examples: [
          { en: 'He was very angry.', zh: '他很生气。' }
        ],
        memoryTips: {
          phonetic: '谐音：安格瑞',
          image: '想象发怒的表情',
          story: 'ANG + ry = 愤怒'
        }
      },
      {
        id: '3A_007',
        word: 'scared',
        phonetic: '/skerd/',
        translation: '害怕的',
        image: '😨',
        book: '3A',
        examples: [
          { en: 'The child is scared of the dark.', zh: '这个孩子害怕黑暗。' }
        ],
        memoryTips: {
          phonetic: '谐音：斯盖尔德',
          image: '想象害怕的表情',
          story: 'SCARE + D = 被惊吓'
        }
      },
      {
        id: '3A_008',
        word: 'mountain',
        phonetic: '/ˈmaʊntən/',
        translation: '山',
        image: '⛰️',
        book: '3A',
        examples: [
          { en: 'The mountain is very high.', zh: '这座山很高。' }
        ],
        memoryTips: {
          phonetic: '谐音：毛恩腾',
          image: '想象高耸的山峰',
          story: 'MOUNT + ain = 隆起'
        }
      },
      {
        id: '3A_009',
        word: 'ocean',
        phonetic: '/ˈoʊʃən/',
        translation: '海洋',
        image: '🌊',
        book: '3A',
        examples: [
          { en: 'The ocean is blue.', zh: '海洋是蓝色的。' }
        ],
        memoryTips: {
          phonetic: '谐音：欧申',
          image: '想象波涛汹涌的大海',
          story: 'OCEAN = 五大洋'
        }
      },
      {
        id: '3A_010',
        word: 'forest',
        phonetic: '/ˈfɔːrɪst/',
        translation: '森林',
        image: '🌲',
        book: '3A',
        examples: [
          { en: 'Many animals live in the forest.', zh: '许多动物生活在森林里。' }
        ],
        memoryTips: {
          phonetic: '谐音：福瑞斯特',
          image: '想象茂密的树林',
          story: 'FOR + EST = 最多的树'
        }
      }
    ],
    // Level 3B - 进阶表达
    '3B': [
      {
        id: '3B_001',
        word: 'computer',
        phonetic: '/kəmˈpjuːtər/',
        translation: '电脑',
        image: '💻',
        book: '3B',
        examples: [
          { en: 'I use a computer every day.', zh: '我每天使用电脑。' }
        ],
        memoryTips: {
          phonetic: '谐音：可姆普尤特儿',
          image: '想象笔记本电脑',
          story: 'Compute + r = 计算的机器'
        }
      },
      {
        id: '3B_002',
        word: 'internet',
        phonetic: '/ˈɪntərnet/',
        translation: '互联网',
        image: '🌐',
        book: '3B',
        examples: [
          { en: 'I search on the internet.', zh: '我在互联网上搜索。' }
        ],
        memoryTips: {
          phonetic: '谐音：英特奈特',
          image: '想象全球网络',
          story: 'Inter + net = 互相连接的网络'
        }
      },
      {
        id: '3B_003',
        word: 'education',
        phonetic: '/ˌedʒuˈkeɪʃn/',
        translation: '教育',
        image: '🎓',
        book: '3B',
        examples: [
          { en: 'Education is important.', zh: '教育很重要。' }
        ],
        memoryTips: {
          phonetic: '谐音：爱居开申',
          image: '想象学校和书本',
          story: 'Educe + tion = 引出潜能'
        }
      },
      {
        id: '3B_004',
        word: 'knowledge',
        phonetic: '/ˈnɑːlɪdʒ/',
        translation: '知识',
        image: '📖',
        book: '3B',
        examples: [
          { en: 'Knowledge is power.', zh: '知识就是力量。' }
        ],
        memoryTips: {
          phonetic: '谐音：诺利奇',
          image: '想象书本和灯泡',
          story: 'KNOW + LEDGE = 知道并了解'
        }
      },
      {
        id: '3B_005',
        word: 'newspaper',
        phonetic: '/ˈnuːzpeɪpər/',
        translation: '报纸',
        image: '📰',
        book: '3B',
        examples: [
          { en: 'I read the newspaper every morning.', zh: '我每天早上看报纸。' }
        ],
        memoryTips: {
          phonetic: '谐音：纽斯配珀',
          image: '想象报纸和新闻',
          story: 'News + paper = 报道消息的纸'
        }
      },
      {
        id: '3B_006',
        word: 'magazine',
        phonetic: '/ˌmæɡəˈziːn/',
        translation: '杂志',
        image: '📚',
        book: '3B',
        examples: [
          { en: 'This magazine is interesting.', zh: '这本杂志很有趣。' }
        ],
        memoryTips: {
          phonetic: '谐音:麦格则恩',
          image: '想象各种杂志',
          story: 'Maga + zine = 储存信息的地方'
        }
      },
      {
        id: '3B_007',
        word: 'music',
        phonetic: '/ˈmjuːzɪk/',
        translation: '音乐',
        image: '🎵',
        book: '3B',
        examples: [
          { en: 'I like listening to music.', zh: '我喜欢听音乐。' }
        ],
        memoryTips: {
          phonetic: '谐音：缪贼克',
          image: '想象乐器和音符',
          story: 'MUSE + IC = 艺术女神的礼物'
        }
      },
      {
        id: '3B_008',
        word: 'movie',
        phonetic: '/ˈmuːvi/',
        translation: '电影',
        image: '🎬',
        book: '3B',
        examples: [
          { en: 'We watched a movie yesterday.', zh: '我们昨天看了一部电影。' }
        ],
        memoryTips: {
          phonetic: '谐音：木威',
          image: '想象电影院和爆米花',
          story: 'MOVIE = 移动的画面'
        }
      },
      {
        id: '3B_009',
        word: 'career',
        phonetic: '/kəˈrɪr/',
        translation: '职业',
        image: '💼',
        book: '3B',
        examples: [
          { en: 'She has a successful career.', zh: '她事业有成。' }
        ],
        memoryTips: {
          phonetic: '谐音：可瑞儿',
          image: '想象办公室和工作',
          story: 'CARE + ER = 关心的事业'
        }
      },
      {
        id: '3B_010',
        word: 'develop',
        phonetic: '/dɪˈveləp/',
        translation: '发展',
        image: '📈',
        book: '3B',
        examples: [
          { en: 'Technology is developing fast.', zh: '科技发展很快。' }
        ],
        memoryTips: {
          phonetic: '谐音：迪维洛普',
          image: '想象成长的图表',
          story: 'DE + VEL + OP = 展开'
        }
      }
    ],
    // Level 4A - 深度话题
    '4A': [
      {
        id: '4A_001',
        word: 'environment',
        phonetic: '/ɪnˈvaɪrənmənt/',
        translation: '环境',
        image: '🌍',
        book: '4A',
        examples: [
          { en: 'We should protect the environment.', zh: '我们应该保护环境。' }
        ],
        memoryTips: {
          phonetic: '谐音：英外润门特',
          image: '想象地球和自然',
          story: 'Environ + ment = 周围的一切'
        }
      },
      {
        id: '4A_002',
        word: 'pollution',
        phonetic: '/pəˈluːʃn/',
        translation: '污染',
        image: '🏭',
        book: '4A',
        examples: [
          { en: 'Air pollution is a serious problem.', zh: '空气污染是一个严重问题。' }
        ],
        memoryTips: {
          phonetic: '谐音:铺路申',
          image: '想象烟囱和黑烟',
          story: 'Pollut + ion = 弄脏的过程'
        }
      },
      {
        id: '4A_003',
        word: 'recycle',
        phonetic: '/riːˈsaɪkl/',
        translation: '回收利用',
        image: '♻️',
        book: '4A',
        examples: [
          { en: 'We should recycle paper.', zh: '我们应该回收纸张。' }
        ],
        memoryTips: {
          phonetic: '谐音：瑞塞扣',
          image: '想象循环箭头',
          story: 'Re + cycle = 再循环'
        }
      },
      {
        id: '4A_004',
        word: 'climate',
        phonetic: '/ˈklaɪmət/',
        translation: '气候',
        image: '🌡️',
        book: '4A',
        examples: [
          { en: 'The climate is changing.', zh: '气候正在变化。' }
        ],
        memoryTips: {
          phonetic: '谐音：可莱米特',
          image: '想象天气变化',
          story: 'CLIMATE = 地区的天气特征'
        }
      },
      {
        id: '4A_005',
        word: 'travel',
        phonetic: '/ˈtrævl/',
        translation: '旅行',
        image: '✈️',
        book: '4A',
        examples: [
          { en: 'I want to travel around the world.', zh: '我想环游世界。' }
        ],
        memoryTips: {
          phonetic: '谐音：踹喔',
          image: '想象飞机和行李',
          story: 'TRAVEL = 从A地到B地'
        }
      },
      {
        id: '4A_006',
        word: 'adventure',
        phonetic: '/ədˈventʃər/',
        translation: '冒险',
        image: '🗺️',
        book: '4A',
        examples: [
          { en: 'Life is an adventure.', zh: '人生是一场冒险。' }
        ],
        memoryTips: {
          phonetic: '谐音：德文彻儿',
          image: '想象探险和地图',
          story: 'Advent + ure = 到来'
        }
      },
      {
        id: '4A_007',
        word: 'population',
        phonetic: '/ˌpɑːpjuˈleɪʃn/',
        translation: '人口',
        image: '👥',
        book: '4A',
        examples: [
          { en: 'The population is growing.', zh: '人口正在增长。' }
        ],
        memoryTips: {
          phonetic: '谐音：帕普优雷申',
          image: '想象人群',
          story: 'Popul + ation = 人民'
        }
      },
      {
        id: '4A_008',
        word: 'society',
        phonetic: '/səˈsaɪəti/',
        translation: '社会',
        image: '🏙️',
        book: '4A',
        examples: [
          { en: 'We are part of the society.', zh: '我们是社会的一部分。' }
        ],
        memoryTips: {
          phonetic: '谐音：色赛提',
          image: '想象城市和人们',
          story: 'SOCIE + TY = 共同生活'
        }
      },
      {
        id: '4A_009',
        word: 'citizen',
        phonetic: '/ˈsɪtɪzn/',
        translation: '公民',
        image: '🏛️',
        book: '4A',
        examples: [
          { en: 'Every citizen has rights.', zh: '每个公民都有权利。' }
        ],
        memoryTips: {
          phonetic: '谐音：西提振',
          image: '想象政府和法律',
          story: 'CITI + ZEN = 城市居民'
        }
      },
      {
        id: '4A_010',
        word: 'government',
        phonetic: '/ˈɡʌvərnmənt/',
        translation: '政府',
        image: '🏛️',
        book: '4A',
        examples: [
          { en: 'The government makes laws.', zh: '政府制定法律。' }
        ],
        memoryTips: {
          phonetic: '谐音：嘎文门特',
          image: '想象国会大厦',
          story: 'Govern + ment = 统治管理'
        }
      }
    ],
    // Level 4B - 深度话题
    '4B': [
      {
        id: '4B_001',
        word: 'culture',
        phonetic: '/ˈkʌltʃər/',
        translation: '文化',
        image: '🎭',
        book: '4B',
        examples: [
          { en: 'Every country has its own culture.', zh: '每个国家都有自己的文化。' }
        ],
        memoryTips: {
          phonetic: '谐音：卡彻儿',
          image: '想象传统服饰和舞蹈',
          story: 'CULT + URE = 种植和培养'
        }
      },
      {
        id: '4B_002',
        word: 'tradition',
        phonetic: '/trəˈdɪʃn/',
        translation: '传统',
        image: '🎎',
        book: '4B',
        examples: [
          { en: 'It is a Chinese tradition.', zh: '这是中国的传统。' }
        ],
        memoryTips: {
          phonetic: '谐音：穿地申',
          image: '想象节日和仪式',
          story: 'Tradit + ion = 传承'
        }
      },
      {
        id: '4B_003',
        word: 'friendship',
        phonetic: '/ˈfrendʃɪp/',
        translation: '友谊',
        image: '💝',
        book: '4B',
        examples: [
          { en: 'True friendship is precious.', zh: '真正的友谊是珍贵的。' }
        ],
        memoryTips: {
          phonetic: '谐音：弗朗德西普',
          image: '想象朋友在一起',
          story: 'Friend + ship = 朋友的状态'
        }
      },
      {
        id: '4B_004',
        word: 'relationship',
        phonetic: '/rɪˈleɪʃnʃɪp/',
        translation: '关系',
        image: '🔗',
        book: '4B',
        examples: [
          { en: 'Good relationships are important.', zh: '好的关系很重要。' }
        ],
        memoryTips: {
          phonetic: '谐音：瑞雷申西普',
          image: '想象连接的链条',
          story: 'Relation + ship = 联系'
        }
      },
      {
        id: '4B_005',
        word: 'future',
        phonetic: '/ˈfjuːtʃər/',
        translation: '未来',
        image: '🔮',
        book: '4B',
        examples: [
          { en: 'We should plan for the future.', zh: '我们应该规划未来。' }
        ],
        memoryTips: {
          phonetic: '谐音：非优彻儿',
          image: '想象望远镜和时间',
          story: 'FU + TURE = 前面'
        }
      },
      {
        id: '4B_006',
        word: 'dream',
        phonetic: '/driːm/',
        translation: '梦想',
        image: '✨',
        book: '4B',
        examples: [
          { en: 'Never give up on your dreams.', zh: '永远不要放弃你的梦想。' }
        ],
        memoryTips: {
          phonetic: '谐音：追姆',
          image: '想象星空和希望',
          story: 'DREAM = 心中的愿景'
        }
      },
      {
        id: '4B_007',
        word: 'ambition',
        phonetic: '/æmˈbɪʃn/',
        translation: '抱负',
        image: '🎯',
        book: '4B',
        examples: [
          { en: 'She has great ambition.', zh: '她有远大的抱负。' }
        ],
        memoryTips: {
          phonetic: '谐音：安必申',
          image: '想象目标和成就',
          story: 'AMBI + TION = 周围走动'
        }
      },
      {
        id: '4B_008',
        word: 'experience',
        phonetic: '/ɪkˈspɪriəns/',
        translation: '经验',
        image: '💡',
        book: '4B',
        examples: [
          { en: 'Experience is the best teacher.', zh: '经验是最好的老师。' }
        ],
        memoryTips: {
          phonetic: '谐音：克思皮瑞恩斯',
          image: '想象灯泡和想法',
          story: 'EX + PERI + ENCE = 尝试后学到'
        }
      },
      {
        id: '4B_009',
        word: 'independent',
        phonetic: '/ˌɪndɪˈpendənt/',
        translation: '独立的',
        image: '🦅',
        book: '4B',
        examples: [
          { en: 'She is very independent.', zh: '她非常独立。' }
        ],
        memoryTips: {
          phonetic: '谐音：英迪潘登特',
          image: '想象独自站立',
          story: 'In + dependent = 不依赖'
        }
      },
      {
        id: '4B_010',
        word: 'confident',
        phonetic: '/ˈkɑːnfɪdənt/',
        translation: '自信的',
        image: '💪',
        book: '4B',
        examples: [
          { en: 'Be confident in yourself.', zh: '要对自己有信心。' }
        ],
        memoryTips: {
          phonetic: '谐音：康飞登特',
          image: '想象胜利的姿态',
          story: 'CON + FID + ENT = 信任自己'
        }
      }
    ],
    // Level 5A - 高级应用
    '5A': [
      {
        id: '5A_001',
        word: 'technology',
        phonetic: '/tekˈnɑːlədʒi/',
        translation: '科技',
        image: '🤖',
        book: '5A',
        examples: [
          { en: 'Technology is changing our lives.', zh: '科技正在改变我们的生活。' }
        ],
        memoryTips: {
          phonetic: '谐音：泰克诺劳吉',
          image: '想象机器人和AI',
          story: 'TECHNO + LOGY = 技艺的学问'
        }
      },
      {
        id: '5A_002',
        word: 'artificial',
        phonetic: '/ˌɑːrtɪˈfɪʃl/',
        translation: '人工的',
        image: '🔧',
        book: '5A',
        examples: [
          { en: 'Artificial intelligence is amazing.', zh: '人工智能很神奇。' }
        ],
        memoryTips: {
          phonetic: '谐音：阿尔提非虚',
          image: '想象机器和人脑',
          story: 'ARTI + FICIAL = 艺术的制造'
        }
      },
      {
        id: '5A_003',
        word: 'media',
        phonetic: '/ˈmiːdiə/',
        translation: '媒体',
        image: '📺',
        book: '5A',
        examples: [
          { en: 'Social media is popular.', zh: '社交媒体很流行。' }
        ],
        memoryTips: {
          phonetic: '谐音：米的亚',
          image: '想象电视和手机',
          story: 'MEDIA = 传播信息的渠道'
        }
      },
      {
        id: '5A_004',
        word: 'influence',
        phonetic: '/ˈɪnfluəns/',
        translation: '影响',
        image: '🌊',
        book: '5A',
        examples: [
          { en: 'Social media influences young people.', zh: '社交媒体影响年轻人。' }
        ],
        memoryTips: {
          phonetic: '谐音：英弗路恩斯',
          image: '想象波浪和连锁反应',
          story: 'IN + FLU + ENCE = 流入'
        }
      },
      {
        id: '5A_005',
        word: 'global',
        phonetic: '/ˈɡloʊbl/',
        translation: '全球的',
        image: '🌍',
        book: '5A',
        examples: [
          { en: 'Global warming is a big problem.', zh: '全球变暖是一个大问题。' }
        ],
        memoryTips: {
          phonetic: '谐音：格楼波',
          image: '想象地球仪',
          story: 'GLOBE + AL = 地球的'
        }
      },
      {
        id: '5A_006',
        word: 'sustainable',
        phonetic: '/səˈsteɪnəbl/',
        translation: '可持续的',
        image: '🌱',
        book: '5A',
        examples: [
          { en: 'We need sustainable development.', zh: '我们需要可持续发展。' }
        ],
        memoryTips: {
          phonetic: '谐音：色斯汀呢波',
          image: '想象绿色能源',
          story: 'Sustain + able = 能维持'
        }
      },
      {
        id: '5A_007',
        word: 'biodiversity',
        phonetic: '/ˌbaɪoʊdaɪˈvɜːrsəti/',
        translation: '生物多样性',
        image: '🦋',
        book: '5A',
        examples: [
          { en: 'Biodiversity is important for our planet.', zh: '生物多样性对我们的星球很重要。' }
        ],
        memoryTips: {
          phonetic: '谐音：拜欧代沃色提',
          image: '想象各种动物和植物',
          story: 'BIO + DIVERSITY = 生命的多种形式'
        }
      },
      {
        id: '5A_008',
        word: 'renewable',
        phonetic: '/rɪˈnuːəbl/',
        translation: '可再生的',
        image: '☀️',
        book: '5A',
        examples: [
          { en: 'Solar energy is renewable.', zh: '太阳能是可再生的。' }
        ],
        memoryTips: {
          phonetic: '谐音：瑞纽呃波',
          image: '想象太阳和风车',
          story: 'RE + NEW + ABLE = 可以重新来'
        }
      },
      {
        id: '5A_009',
        word: 'innovation',
        phonetic: '/ˌɪnəˈveɪʃn/',
        translation: '创新',
        image: '💡',
        book: '5A',
        examples: [
          { en: 'Innovation is key to progress.', zh: '创新是进步的关键。' }
        ],
        memoryTips: {
          phonetic: '谐音：英诺维申',
          image: '想象灯泡和创新',
          story: 'IN + NO + VATION = 新的东西'
        }
      },
      {
        id: '5A_010',
        word: 'challenge',
        phonetic: '/ˈtʃælɪndʒ/',
        translation: '挑战',
        image: '🏔️',
        book: '5A',
        examples: [
          { en: 'We face many challenges.', zh: '我们面临许多挑战。' }
        ],
        memoryTips: {
          phonetic: '谐音：查林奇',
          image: '想象攀登高峰',
          story: 'CHALL + ENGE = 呼叫和战斗'
        }
      }
    ],
    // Level 5B - 高级应用
    '5B': [
      {
        id: '5B_001',
        word: 'philosophy',
        phonetic: '/fɪˈlɑːsəfi/',
        translation: '哲学',
        image: '🤔',
        book: '5B',
        examples: [
          { en: 'Philosophy helps us think deeply.', zh: '哲学帮助我们深入思考。' }
        ],
        memoryTips: {
          phonetic: '谐音:菲劳斯菲',
          image: '想象思考者雕像',
          story: 'PHILO + SOPHY = 智慧的爱'
        }
      },
      {
        id: '5B_002',
        word: 'wisdom',
        phonetic: '/ˈwɪzdəm/',
        translation: '智慧',
        image: '🦉',
        book: '5B',
        examples: [
          { en: 'Wisdom comes with age.', zh: '智慧随着年龄增长。' }
        ],
        memoryTips: {
          phonetic: '谐音：维兹德姆',
          image: '想象猫头鹰',
          story: 'WISE + DOM = 明智的领域'
        }
      },
      {
        id: '5B_003',
        word: 'responsibility',
        phonetic: '/rɪˌspɑːnsəˈbɪləti/',
        translation: '责任',
        image: '⚖️',
        book: '5B',
        examples: [
          { en: 'Everyone has responsibilities.', zh: '每个人都有责任。' }
        ],
        memoryTips: {
          phonetic: '谐音：瑞斯邦斯比里提',
          image: '想象天平',
          story: 'RESPONSE + IBILITY = 回应的能力'
        }
      },
      {
        id: '5B_004',
        word: 'contribution',
        phonetic: '/ˌkɑːntrɪˈbjuːʃn/',
        translation: '贡献',
        image: '🏆',
        book: '5B',
        examples: [
          { en: 'We can make contributions to society.', zh: '我们可以为社会做贡献。' }
        ],
        memoryTips: {
          phonetic: '谐音：康吹不优申',
          image: '想象奖杯和成就',
          story: 'CONTRI + BUTE = 给予'
        }
      },
      {
        id: '5B_005',
        word: 'opportunity',
        phonetic: '/ˌɑːpərˈtjuːnəti/',
        translation: '机会',
        image: '🌟',
        book: '5B',
        examples: [
          { en: 'This is a great opportunity.', zh: '这是一个很好的机会。' }
        ],
        memoryTips: {
          phonetic: '谐音：奥波提由尼提',
          image: '想象打开的门',
          story: 'OPPOR + TUNITY = 港口'
        }
      },
      {
        id: '5B_006',
        word: 'achievement',
        phonetic: '/əˈtʃiːvmənt/',
        translation: '成就',
        image: '🎖️',
        book: '5B',
        examples: [
          { en: 'Hard work leads to achievement.', zh: '努力工作带来成就。' }
        ],
        memoryTips: {
          phonetic: '谐音：呃奇夫门特',
          image: '想象奖牌和证书',
          story: 'ACHIEVE + MENT = 达成'
        }
      },
      {
        id: '5B_007',
        word: 'potential',
        phonetic: '/pəˈtenʃl/',
        translation: '潜力',
        image: '🚀',
        book: '5B',
        examples: [
          { en: 'Everyone has potential.', zh: '每个人都有潜力。' }
        ],
        memoryTips: {
          phonetic: '谐音：普腾修',
          image: '想象火箭升空',
          story: 'POTENT + IAL = 力量的'
        }
      },
      {
        id: '5B_008',
        word: 'communication',
        phonetic: '/kəˌmjuːnɪˈkeɪʃn/',
        translation: '交流',
        image: '💬',
        book: '5B',
        examples: [
          { en: 'Good communication is important.', zh: '良好的沟通很重要。' }
        ],
        memoryTips: {
          phonetic: '谐音：可谬尼可申',
          image: '想象说话和倾听',
          story: 'COMMUNE + CATION = 分享'
        }
      },
      {
        id: '5B_009',
        word: 'cooperation',
        phonetic: '/koʊˌɑːpəˈreɪʃn/',
        translation: '合作',
        image: '🤝',
        book: '5B',
        examples: [
          { en: 'Teamwork requires cooperation.', zh: '团队合作需要合作。' }
        ],
        memoryTips: {
          phonetic: '谐音：口阿尔佩瑞申',
          image: '想象握手',
          story: 'CO + OPERATE + ION = 共同运作'
        }
      },
      {
        id: '5B_010',
        word: 'perseverance',
        phonetic: '/ˌpɜːrsəˈvɪrəns/',
        translation: '坚持不懈',
        image: '💪',
        book: '5B',
        examples: [
          { en: 'Perseverance leads to success.', zh: '坚持不懈导致成功。' }
        ],
        memoryTips: {
          phonetic: '谐音：普色维润斯',
          image: '想象攀登者',
          story: 'PER + SEVERE = 完全严格'
        }
      }
    ]
  }
};

// ============================================
// 应用状态
// ============================================

const AppState = {
  currentPage: 'home',
  currentBook: null,
  currentWordIndex: 0,
  learningQueue: [],
  reviewQueue: [],
  isFlipped: false,
  mode: 'learn', // 'learn' or 'review'
  stats: {
    totalWords: 0,
    masteredWords: 0,
    streakDays: 0,
    lastStudyDate: null,
    wordsLearned: {},
    reviewSchedule: {}
  }
};

// ============================================
// LocalStorage 管理
// ============================================

const Storage = {
  KEYS: {
    STATS: 'vocab_stats',
    PROGRESS: 'vocab_progress',
    BOOKMARKS: 'vocab_bookmarks'
  },

  save(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  },

  load(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error('Failed to load from localStorage:', e);
      return null;
    }
  },

  initStats() {
    const saved = this.load(this.KEYS.STATS);
    if (saved) {
      AppState.stats = saved;
    } else {
      // Initialize with default values
      VOCABULARY_DATA.books.forEach(book => {
        AppState.stats.wordsLearned[book.id] = [];
        AppState.stats.reviewSchedule[book.id] = {};
      });
      this.save(this.KEYS.STATS, AppState.stats);
    }
  },

  saveStats() {
    this.save(this.KEYS.STATS, AppState.stats);
  },

  getBookmarks() {
    return this.load(this.KEYS.BOOKMARKS) || [];
  },

  addBookmark(wordId) {
    const bookmarks = this.getBookmarks();
    if (!bookmarks.includes(wordId)) {
      bookmarks.push(wordId);
      this.save(this.KEYS.BOOKMARKS, bookmarks);
    }
    return bookmarks;
  },

  removeBookmark(wordId) {
    let bookmarks = this.getBookmarks();
    bookmarks = bookmarks.filter(id => id !== wordId);
    this.save(this.KEYS.BOOKMARKS, bookmarks);
    return bookmarks;
  },

  // ============================================
  // 导入/导出功能
  // ============================================

  exportData() {
    const data = {
      version: '1.0',
      exportDate: new Date().toISOString(),
      stats: this.load(this.KEYS.STATS),
      bookmarks: this.load(this.KEYS.BOOKMARKS),
      progress: this.load(this.KEYS.PROGRESS)
    };

    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `vocab-progress-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    Toast.show('📤 进度已导出成功！', 'success');
    return true;
  },

  importData(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);

          // Validate data structure
          if (!data.version || !data.stats) {
            throw new Error('Invalid file format');
          }

          // Confirm before overwriting
          if (confirm('导入将覆盖当前学习进度，确定要继续吗？')) {
            if (data.stats) {
              this.save(this.KEYS.STATS, data.stats);
              AppState.stats = data.stats;
            }
            if (data.bookmarks) {
              this.save(this.KEYS.BOOKMARKS, data.bookmarks);
            }
            if (data.progress) {
              this.save(this.KEYS.PROGRESS, data.progress);
            }

            Toast.show('📥 进度已导入成功！', 'success');
            resolve(true);
          } else {
            resolve(false);
          }
        } catch (err) {
          console.error('Import error:', err);
          Toast.show('❌ 导入失败：文件格式错误', 'error');
          reject(err);
        }
      };

      reader.onerror = () => {
        Toast.show('❌ 读取文件失败', 'error');
        reject(new Error('File read error'));
      };

      reader.readAsText(file);
    });
  }
};

// ============================================
// 间隔重复算法 (SM-2 Simplified)
// ============================================

const SpacedRepetition = {
  calculateNextReview(response, currentInterval = 1) {
    let newInterval;
    let newMastery;

    switch (response) {
      case 'correct':
        newInterval = Math.ceil(currentInterval * 2);
        newMastery = Math.min(100, (currentInterval / 30) * 100);
        break;
      case 'fuzzy':
        newInterval = Math.max(1, Math.ceil(currentInterval * 0.5));
        newMastery = Math.max(0, ((currentInterval / 30) * 100) - 20);
        break;
      case 'wrong':
        newInterval = 1;
        newMastery = Math.max(0, ((currentInterval / 30) * 100) - 40);
        break;
      default:
        newInterval = currentInterval;
        newMastery = 50;
    }

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + newInterval);

    return {
      interval: newInterval,
      nextReview: nextDate.toISOString(),
      mastery: Math.round(newMastery)
    };
  },

  getWordsForReview(bookId = null) {
    const wordsToReview = [];
    const today = new Date().toISOString().split('T')[0];

    const books = bookId ? [VOCABULARY_DATA.books.find(b => b.id === bookId)] : VOCABULARY_DATA.books;

    books.forEach(book => {
      if (!book) return;
      const words = VOCABULARY_DATA.words[book.id] || [];

      words.forEach(word => {
        const schedule = AppState.stats.reviewSchedule[book.id]?.[word.id];

        if (!schedule || schedule.nextReview.split('T')[0] <= today) {
          wordsToReview.push({
            ...word,
            bookId: book.id
          });
        }
      });
    });

    return wordsToReview;
  }
};

// ============================================
// 页面导航
// ============================================

const Navigation = {
  init() {
    // Navigation links
    document.querySelectorAll('[data-page]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = e.currentTarget.dataset.page;
        this.goTo(page);
      });
    });
  },

  goTo(pageId) {
    // Hide current page
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });

    // Show target page
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
      targetPage.classList.add('active');
    }

    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.dataset.page === pageId) {
        link.classList.add('active');
      }
    });

    // Special page handling
    if (pageId === 'learning') {
      document.querySelector('.nav').style.display = 'none';
    } else {
      document.querySelector('.nav').style.display = 'block';
    }

    AppState.currentPage = pageId;
  }
};

// ============================================
// 书籍渲染
// ============================================

const BooksRenderer = {
  renderBookCard(book) {
    const learnedWords = AppState.stats.wordsLearned[book.id]?.length || 0;
    const progress = (learnedWords / book.wordsCount) * 100;
    const bookWords = VOCABULARY_DATA.words[book.id] || [];

    return `
      <div class="book-card" data-book-id="${book.id}">
        <div class="book-card-header">
          <div class="book-card-cover" style="background: linear-gradient(135deg, ${book.color}, ${book.color}aa);">
            📖
          </div>
          <div class="book-card-info">
            <span class="book-card-level">Level ${book.level}</span>
            <h3 class="book-card-title">${book.title}</h3>
            <p class="book-card-desc">${book.description}</p>
          </div>
        </div>
        <div class="book-card-stats">
          <div class="book-stat">
            <span class="book-stat-value">${bookWords.length}</span>
            <span class="book-stat-label">单词</span>
          </div>
          <div class="book-stat">
            <span class="book-stat-value">${learnedWords}</span>
            <span class="book-stat-label">已学</span>
          </div>
        </div>
        <div class="book-card-progress">
          <div class="book-card-progress-bar">
            <div class="book-card-progress-fill" style="width: ${progress}%"></div>
          </div>
          <div class="book-card-progress-text">
            <span>学习进度</span>
            <span>${Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    `;
  },

  renderBooksPage() {
    const container = document.getElementById('books-grid');
    if (!container) return;

    const booksHTML = VOCABULARY_DATA.books.map(book => this.renderBookCard(book)).join('');
    container.innerHTML = booksHTML;

    // Add click handlers
    container.querySelectorAll('.book-card').forEach(card => {
      card.addEventListener('click', () => {
        const bookId = card.dataset.bookId;
        Learning.startBook(bookId);
      });
    });
  },

  renderBooksPreview() {
    const container = document.getElementById('books-preview-grid');
    if (!container) return;

    const previewHTML = VOCABULARY_DATA.books.slice(0, 5).map(book => {
      const learnedWords = AppState.stats.wordsLearned[book.id]?.length || 0;
      const progress = (learnedWords / book.wordsCount) * 100;

      return `
        <div class="book-preview-card" data-book-id="${book.id}">
          <div class="book-preview-cover" style="background: linear-gradient(135deg, ${book.color}, ${book.color}aa);">
            📖
          </div>
          <span class="book-preview-title">${book.id}</span>
          <span class="book-preview-count">${learnedWords}/${book.wordsCount} 词</span>
          <div class="book-preview-progress">
            <div class="book-preview-progress-bar" style="width: ${progress}%"></div>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = previewHTML;

    // Add click handlers
    container.querySelectorAll('.book-preview-card').forEach(card => {
      card.addEventListener('click', () => {
        Navigation.goTo('books');
      });
    });
  },

  renderModalBooks() {
    const container = document.getElementById('modal-books');
    if (!container) return;

    const booksHTML = VOCABULARY_DATA.books.map(book => {
      const learnedWords = AppState.stats.wordsLearned[book.id]?.length || 0;
      return `
        <div class="book-card" data-book-id="${book.id}" style="margin-bottom: 12px;">
          <div class="book-card-header">
            <div class="book-card-cover" style="background: linear-gradient(135deg, ${book.color}, ${book.color}aa); width: 60px; height: 80px;">
              📖
            </div>
            <div class="book-card-info">
              <span class="book-card-level">Level ${book.level}</span>
              <h3 class="book-card-title" style="font-size: 16px;">${book.id}</h3>
              <p class="book-card-desc" style="font-size: 12px;">${learnedWords}/${book.wordsCount} 词已学</p>
            </div>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = booksHTML;

    // Add click handlers
    container.querySelectorAll('.book-card').forEach(card => {
      card.addEventListener('click', () => {
        const bookId = card.dataset.bookId;
        Learning.startBook(bookId);
        Modal.hide();
      });
    });
  }
};

// ============================================
// 学习模块
// ============================================

const Learning = {
  startBook(bookId) {
    const book = VOCABULARY_DATA.books.find(b => b.id === bookId);
    if (!book) return;

    AppState.currentBook = book;
    const bookWords = VOCABULARY_DATA.words[book.id] || [];

    // Create learning queue
    AppState.learningQueue = bookWords.map((word, index) => ({
      ...word,
      originalIndex: index
    }));

    // Shuffle queue
    this.shuffleQueue();

    AppState.currentWordIndex = 0;
    AppState.mode = 'learn';

    // Update UI
    document.getElementById('current-book-name').textContent = book.id;

    Navigation.goTo('learning');
    this.showCurrentWord();
    this.updateProgress();
  },

  shuffleQueue() {
    const queue = AppState.learningQueue;
    for (let i = queue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [queue[i], queue[j]] = [queue[j], queue[i]];
    }
  },

  showCurrentWord() {
    if (AppState.learningQueue.length === 0) {
      this.showCompletion();
      return;
    }

    const word = AppState.learningQueue[AppState.currentWordIndex];
    if (!word) return;

    // Reset flip state
    AppState.isFlipped = false;
    const card = document.getElementById('word-card');
    if (card) {
      card.classList.remove('flipped');
    }

    // Update word display - card front
    const cardWordEl = document.getElementById('card-word');
    const cardPhoneticEl = document.getElementById('card-phonetic');
    const cardWordBackEl = document.getElementById('card-word-back');
    const cardPhoneticBackEl = document.getElementById('card-phonetic-back');
    const cardTranslationEl = document.getElementById('card-translation');

    if (cardWordEl) cardWordEl.textContent = word.word;
    if (cardPhoneticEl) cardPhoneticEl.textContent = word.phonetic;
    if (cardWordBackEl) cardWordBackEl.textContent = word.word;
    if (cardPhoneticBackEl) cardPhoneticBackEl.textContent = word.phonetic;
    if (cardTranslationEl) cardTranslationEl.textContent = word.translation;

    // Update image - recreate the entire card image area
    const imageArea = document.querySelector('.card-image-area');
    if (imageArea) {
      if (word.image.startsWith('http') || word.image.startsWith('data:')) {
        // External image
        imageArea.innerHTML = `
          <img class="card-image" id="card-image" src="${word.image}" alt="${word.word}">
          <button class="btn-speak" id="btn-speak" title="点击发音">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M11 5L6 9H2v6h4l5 4V5z"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
          </button>
        `;
      } else {
        // Emoji as image
        imageArea.innerHTML = `
          <span style="font-size: 120px;">${word.image}</span>
          <button class="btn-speak" id="btn-speak" title="点击发音">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M11 5L6 9H2v6h4l5 4V5z"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
          </button>
        `;
      }
    }

    // Update examples - THIS IS THE KEY FIX
    const examplesContainer = document.getElementById('examples-list');
    if (examplesContainer) {
      if (word.examples && word.examples.length > 0) {
        const escapedWord = word.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        examplesContainer.innerHTML = word.examples.map(ex => `
          <div class="example-item">
            <p class="example-en">${ex.en.replace(new RegExp(escapedWord, 'gi'), `<span class="highlight-word">${word.word}</span>`)}</p>
            <p class="example-zh">${ex.zh}</p>
          </div>
        `).join('');
      } else {
        examplesContainer.innerHTML = '<p style="color: var(--text-light);">暂无例句</p>';
      }
    }

    // Update memory tips - THIS IS THE KEY FIX
    const tipsContainer = document.getElementById('memory-tips');
    if (tipsContainer) {
      const tips = [];

      if (word.memoryTips) {
        if (word.memoryTips.phonetic) {
          tips.push(`
            <div class="memory-tip phonetic">
              <div class="memory-tip-header">
                <span class="memory-tip-icon">🔊</span>
                <span class="memory-tip-type">谐音记忆</span>
              </div>
              <p class="memory-tip-content">${word.memoryTips.phonetic}</p>
            </div>
          `);
        }
        if (word.memoryTips.image) {
          tips.push(`
            <div class="memory-tip image">
              <div class="memory-tip-header">
                <span class="memory-tip-icon">🎨</span>
                <span class="memory-tip-type">图像记忆</span>
              </div>
              <p class="memory-tip-content">${word.memoryTips.image}</p>
            </div>
          `);
        }
        if (word.memoryTips.story) {
          tips.push(`
            <div class="memory-tip story">
              <div class="memory-tip-header">
                <span class="memory-tip-icon">📖</span>
                <span class="memory-tip-type">故事联想</span>
              </div>
              <p class="memory-tip-content">${word.memoryTips.story}</p>
            </div>
          `);
        }
      }

      tipsContainer.innerHTML = tips.length > 0 ? tips.join('') : '<p style="color: var(--text-light);">暂无记忆提示</p>';
    }

    // Setup speak buttons after updating the image area
    this.setupSpeakButtons(word);

    // Update spelling practice if in spelling mode
    const currentMode = document.getElementById('page-learning')?.dataset.mode;
    if (currentMode === 'spelling' || AppState.mode === 'spelling') {
      SpellingPractice.setWord(word);
    }
  },

  setupSpeakButtons(word) {
    const speakBtns = document.querySelectorAll('#btn-speak, #btn-speak-back');
    speakBtns.forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        Speech.speak(word.word);
      };
    });
  },

  flipCard() {
    const card = document.getElementById('word-card');
    card.classList.toggle('flipped');
    AppState.isFlipped = !AppState.isFlipped;
  },

  handleResponse(response) {
    const word = AppState.learningQueue[AppState.currentWordIndex];
    if (!word) return;

    // Calculate new review schedule
    const currentSchedule = AppState.stats.reviewSchedule[AppState.currentBook.id]?.[word.id] || { interval: 1, mastery: 0 };
    const newSchedule = SpacedRepetition.calculateNextReview(response, currentSchedule.interval);

    // Update stats
    if (!AppState.stats.reviewSchedule[AppState.currentBook.id]) {
      AppState.stats.reviewSchedule[AppState.currentBook.id] = {};
    }
    AppState.stats.reviewSchedule[AppState.currentBook.id][word.id] = {
      ...newSchedule,
      lastReviewed: new Date().toISOString()
    };

    // Track learned words
    if (!AppState.stats.wordsLearned[AppState.currentBook.id].includes(word.id)) {
      AppState.stats.wordsLearned[AppState.currentBook.id].push(word.id);
    }

    // Update streak
    this.updateStreak();

    // Save progress
    Storage.saveStats();

    // Show feedback
    this.showResponseFeedback(response);

    // Move to next word
    setTimeout(() => {
      AppState.currentWordIndex++;
      if (AppState.currentWordIndex >= AppState.learningQueue.length) {
        this.shuffleQueue();
        AppState.currentWordIndex = 0;
      }
      this.showCurrentWord();
      this.updateProgress();
    }, 500);
  },

  showResponseFeedback(response) {
    const messages = {
      correct: { icon: '😊', text: '太棒了！' },
      fuzzy: { icon: '🤔', text: '继续加油！' },
      wrong: { icon: '😵', text: '再记一下！' }
    };

    Toast.show(messages[response].icon + ' ' + messages[response].text, response === 'correct' ? 'success' : 'info');
  },

  updateProgress() {
    const total = AppState.learningQueue.length;
    const current = AppState.currentWordIndex + 1;
    const percent = (current / total) * 100;

    document.getElementById('learning-progress-bar').style.width = percent + '%';
    document.getElementById('learning-progress-text').textContent = `${current} / ${total}`;
  },

  updateStreak() {
    const today = new Date().toDateString();
    const lastStudy = AppState.stats.lastStudyDate;

    if (lastStudy === today) {
      // Already studied today
      return;
    } else if (lastStudy === new Date(Date.now() - 86400000).toDateString()) {
      // Studied yesterday, continue streak
      AppState.stats.streakDays++;
    } else {
      // Streak broken, start fresh
      AppState.stats.streakDays = 1;
    }

    AppState.stats.lastStudyDate = today;
    AppState.stats.totalWords++;
  },

  showCompletion() {
    Navigation.goTo('home');
    this.updateHomeStats();
    Toast.show('🎉 恭喜完成本书学习！', 'success');
    Confetti.show();
  },

  updateHomeStats() {
    document.getElementById('streak-days').textContent = AppState.stats.streakDays;
    document.getElementById('words-learned').textContent = AppState.stats.totalWords;

    // Calculate total mastered
    let totalLearned = 0;
    Object.values(AppState.stats.wordsLearned).forEach(arr => {
      totalLearned += arr.length;
    });

    document.getElementById('total-words').textContent = totalLearned;

    // Calculate mastery rate
    const totalPossible = VOCABULARY_DATA.books.reduce((sum, book) => sum + book.wordsCount, 0);
    const masteryRate = totalPossible > 0 ? Math.round((totalLearned / totalPossible) * 100) : 0;
    document.getElementById('mastery-rate').textContent = masteryRate + '%';

    // Update review count
    const reviewCount = SpacedRepetition.getWordsForReview().length;
    document.getElementById('to-review').textContent = reviewCount;
    document.getElementById('streak').textContent = AppState.stats.streakDays;
  },

  exit() {
    Navigation.goTo('home');
    this.updateHomeStats();
    BooksRenderer.renderBooksPreview();
  }
};

// ============================================
// 发音功能 - 增强版
// ============================================

const Speech = {
  isSpeaking: false,

  speak(text, onStart = null, onEnd = null) {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported');
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Small delay to ensure cancellation takes effect
    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      utterance.pitch = 1;
      utterance.volume = 1;

      // Try to get a English voice
      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('English')) ||
                           voices.find(v => v.lang.startsWith('en-US')) ||
                           voices.find(v => v.lang.startsWith('en-GB')) ||
                           voices.find(v => v.lang.startsWith('en'));
      if (englishVoice) {
        utterance.voice = englishVoice;
      }

      utterance.onstart = () => {
        this.isSpeaking = true;
        if (onStart) onStart();
      };

      utterance.onend = () => {
        this.isSpeaking = false;
        if (onEnd) onEnd();
      };

      utterance.onerror = (e) => {
        console.warn('Speech error:', e);
        this.isSpeaking = false;
      };

      window.speechSynthesis.speak(utterance);
    }, 50);
  },

  stop() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
    }
  },

  // Initialize voices (some browsers load voices asynchronously)
  init() {
    if ('speechSynthesis' in window) {
      // Chrome loads voices asynchronously
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }
};

// Initialize speech on load
Speech.init();

// ============================================
// 单词本
// ============================================

const WordBook = {
  filter: 'all',

  init() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.filter = btn.dataset.filter;
        this.render();
      });
    });
  },

  render() {
    const container = document.getElementById('wordbook-list');
    const emptyState = document.getElementById('wordbook-empty');
    const bookmarks = Storage.getBookmarks();

    let words = [];

    // Get all learned words
    VOCABULARY_DATA.books.forEach(book => {
      const bookWords = VOCABULARY_DATA.words[book.id] || [];
      bookWords.forEach(word => {
        const isBookmarked = bookmarks.includes(word.id);
        const schedule = AppState.stats.reviewSchedule[book.id]?.[word.id];
        const mastery = schedule?.mastery || 0;

        if (this.filter === 'all') {
          if (isBookmarked || mastery > 0) {
            words.push({ ...word, bookId: book.id, isBookmarked, mastery });
          }
        } else if (this.filter === 'favorites' && isBookmarked) {
          words.push({ ...word, bookId: book.id, isBookmarked, mastery });
        } else if (this.filter === 'weak' && mastery < 50) {
          words.push({ ...word, bookId: book.id, isBookmarked, mastery });
        } else if (this.filter === 'mastered' && mastery >= 80) {
          words.push({ ...word, bookId: book.id, isBookmarked, mastery });
        }
      });
    });

    if (words.length === 0) {
      container.innerHTML = '';
      emptyState.style.display = 'block';
      return;
    }

    emptyState.style.display = 'none';

    container.innerHTML = words.map(word => `
      <div class="wordbook-item" data-word-id="${word.id}">
        <div class="wordbook-item-header">
          <div>
            <span class="wordbook-word">${word.word}</span>
            <span class="wordbook-phonetic">${word.phonetic}</span>
          </div>
          <span class="wordbook-favorite" data-word-id="${word.id}">
            ${word.isBookmarked ? '❤️' : '🤍'}
          </span>
        </div>
        <div class="wordbook-translation">${word.translation}</div>
        <div class="wordbook-example">${word.examples?.[0]?.en || ''}</div>
        <div class="wordbook-mastery">
          <div class="wordbook-mastery-bar">
            <div class="wordbook-mastery-fill" style="width: ${word.mastery}%"></div>
          </div>
          <span class="wordbook-mastery-text">${word.mastery}%</span>
        </div>
      </div>
    `).join('');

    // Add click handlers for favorites
    container.querySelectorAll('.wordbook-favorite').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const wordId = btn.dataset.wordId;
        const bookmarks = Storage.getBookmarks();

        if (bookmarks.includes(wordId)) {
          Storage.removeBookmark(wordId);
          btn.textContent = '🤍';
        } else {
          Storage.addBookmark(wordId);
          btn.textContent = '❤️';
        }
      });
    });
  }
};

// ============================================
// 复习模块
// ============================================

const Review = {
  init() {
    const reviewCards = document.getElementById('review-cards');
    reviewCards.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <p style="font-size: 18px; color: var(--text-secondary);">点击下方按钮开始复习</p>
        <button class="btn btn-primary" style="margin-top: 20px;" onclick="Review.startReview()">
          开始复习 🔄
        </button>
      </div>
    `;
  },

  startReview() {
    const wordsToReview = SpacedRepetition.getWordsForReview();

    if (wordsToReview.length === 0) {
      document.getElementById('review-empty').style.display = 'block';
      document.getElementById('review-cards').innerHTML = '';
      return;
    }

    AppState.reviewQueue = wordsToReview;
    AppState.currentWordIndex = 0;

    this.renderReviewCard();
    this.updateStats();
  },

  renderReviewCard() {
    const container = document.getElementById('review-cards');

    if (AppState.reviewQueue.length === 0) {
      document.getElementById('review-empty').style.display = 'block';
      container.innerHTML = '';
      Toast.show('🎉 复习完成！', 'success');
      return;
    }

    document.getElementById('review-empty').style.display = 'none';

    const word = AppState.reviewQueue[AppState.currentWordIndex];

    container.innerHTML = `
      <div class="word-card-container" style="max-width: 400px; margin: 0 auto;">
        <div class="word-card" id="review-card" onclick="Review.flipCard()">
          <div class="word-card-inner">
            <div class="word-card-front">
              <div class="card-image-area">
                <span style="font-size: 100px;">${word.image}</span>
              </div>
              <div class="card-word-area">
                <h2 class="card-word">${word.word}</h2>
                <span class="card-phonetic">${word.phonetic}</span>
              </div>
              <div class="card-hint">点击查看答案 👆</div>
            </div>
            <div class="word-card-back">
              <div class="card-back-content">
                <h2 class="card-word-small">${word.word}</h2>
                <span class="card-phonetic-small">${word.phonetic}</span>
                <div class="card-translation">${word.translation}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="learning-actions" style="position: relative; margin-top: 30px;">
        <button class="btn btn-danger btn-learning" onclick="Review.handleResponse('wrong')">
          <span class="btn-emoji">😵</span>
          <span class="btn-text">不认识</span>
        </button>
        <button class="btn btn-warning btn-learning" onclick="Review.handleResponse('fuzzy')">
          <span class="btn-emoji">🤔</span>
          <span class="btn-text">有点模糊</span>
        </button>
        <button class="btn btn-success btn-learning" onclick="Review.handleResponse('correct')">
          <span class="btn-emoji">😊</span>
          <span class="btn-text">认识</span>
        </button>
      </div>
    `;

    AppState.isFlipped = false;
  },

  flipCard() {
    const card = document.getElementById('review-card');
    card.classList.toggle('flipped');
    AppState.isFlipped = !AppState.isFlipped;
  },

  handleResponse(response) {
    const word = AppState.reviewQueue[AppState.currentWordIndex];

    // Update review schedule
    const currentSchedule = AppState.stats.reviewSchedule[word.bookId]?.[word.id] || { interval: 1, mastery: 0 };
    const newSchedule = SpacedRepetition.calculateNextReview(response, currentSchedule.interval);

    if (!AppState.stats.reviewSchedule[word.bookId]) {
      AppState.stats.reviewSchedule[word.bookId] = {};
    }
    AppState.stats.reviewSchedule[word.bookId][word.id] = {
      ...newSchedule,
      lastReviewed: new Date().toISOString()
    };

    Storage.saveStats();

    // Remove from queue
    AppState.reviewQueue.splice(AppState.currentWordIndex, 1);

    // If wrong or fuzzy, add back to end of queue
    if (response !== 'correct') {
      AppState.reviewQueue.push(word);
    }

    // Show feedback
    const messages = {
      correct: '😊 记住了！',
      fuzzy: '🤔 再想想',
      wrong: '😵 不认识'
    };
    Toast.show(messages[response], response === 'correct' ? 'success' : 'info');

    // Update stats and render next
    this.updateStats();
    this.renderReviewCard();
  },

  updateStats() {
    const total = SpacedRepetition.getWordsForReview().length + AppState.reviewQueue.length;
    const done = total - AppState.reviewQueue.length;

    document.getElementById('review-total').textContent = total;
    document.getElementById('review-done').textContent = done;
  }
};

// ============================================
// 模态框
// ============================================

const Modal = {
  show() {
    document.getElementById('book-select-modal').classList.add('active');
    BooksRenderer.renderModalBooks();
  },

  hide() {
    document.getElementById('book-select-modal').classList.remove('active');
  },

  init() {
    document.getElementById('modal-close').addEventListener('click', () => this.hide());
    document.getElementById('book-select-modal').addEventListener('click', (e) => {
      if (e.target.id === 'book-select-modal') this.hide();
    });
  }
};

// ============================================
// Toast 通知
// ============================================

const Toast = {
  show(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span class="toast-message">${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('hide');
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  }
};

// ============================================
// 彩带效果
// ============================================

const Confetti = {
  show() {
    const container = document.createElement('div');
    container.className = 'confetti';
    document.body.appendChild(container);

    const colors = ['#6C5CE7', '#00B894', '#FDCB6E', '#FF6B6B', '#00CEC9'];

    for (let i = 0; i < 50; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = Math.random() * 2 + 's';
      container.appendChild(piece);
    }

    setTimeout(() => container.remove(), 5000);
  }
};

// ============================================
// 应用初始化
// ============================================

function initApp() {
  // Initialize storage
  Storage.initStats();

  // Initialize navigation
  Navigation.init();

  // Initialize modal
  Modal.init();

  // Initialize word book
  WordBook.init();

  // Initialize review
  Review.init();

  // Render books
  BooksRenderer.renderBooksPage();
  BooksRenderer.renderBooksPreview();

  // Update home stats
  Learning.updateHomeStats();

  // Setup word card flip
  document.getElementById('word-card').addEventListener('click', () => {
    if (AppState.currentPage === 'learning') {
      Learning.flipCard();
    }
  });

  // Setup learning response buttons
  document.querySelectorAll('.btn-learning[data-response]').forEach(btn => {
    btn.addEventListener('click', () => {
      Learning.handleResponse(btn.dataset.response);
    });
  });

  // Setup exit button
  document.getElementById('btn-exit-learning').addEventListener('click', () => {
    Learning.exit();
  });

  // Setup home buttons
  document.getElementById('btn-continue').addEventListener('click', () => {
    Modal.show();
  });

  document.getElementById('btn-start').addEventListener('click', () => {
    Navigation.goTo('books');
  });

  // Setup mode toggle (memory / spelling / review)
  setupModeToggle();

  // Initialize spelling practice
  SpellingPractice.init();

  // ============================================
  // 导入/导出功能
  // ============================================

  // Export button
  const btnExport = document.getElementById('btn-export');
  if (btnExport) {
    btnExport.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      Storage.exportData();
    });
  }

  // Import button
  const btnImport = document.getElementById('btn-import');
  const importFileInput = document.getElementById('import-file');

  if (btnImport && importFileInput) {
    btnImport.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      importFileInput.click();
    });

    importFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        Storage.importData(file).then(() => {
          // Refresh UI after import
          Learning.updateHomeStats();
          BooksRenderer.renderBooksPage();
          BooksRenderer.renderBooksPreview();
        });
        // Reset input so same file can be selected again
        importFileInput.value = '';
      }
    });
  }

  // Hide loading screen
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
  }, 1000);
}

// ============================================
// Spelling Practice Module
// ============================================
const SpellingPractice = {
  currentWord: null,
  isChecked: false,

  init() {
    const spellingInput = document.getElementById('spelling-input');
    const checkBtn = document.getElementById('btn-spelling-check');
    const listenBtn = document.getElementById('btn-spelling-listen');

    if (spellingInput) {
      // Remove existing listeners by cloning
      const newInput = spellingInput.cloneNode(true);
      spellingInput.parentNode.replaceChild(newInput, spellingInput);
      newInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !this.isChecked) {
          this.checkSpelling();
        }
      });
    }

    if (checkBtn) {
      // Remove existing listeners by cloning
      const newBtn = checkBtn.cloneNode(true);
      checkBtn.parentNode.replaceChild(newBtn, checkBtn);
      newBtn.addEventListener('click', () => {
        this.checkSpelling();
      });
    }

    if (listenBtn) {
      listenBtn.addEventListener('click', () => {
        if (this.currentWord) {
          Speech.speak(this.currentWord.word);
        }
      });
    }
  },

  shuffleQueue() {
    // Fisher-Yates shuffle
    for (let i = AppState.learningQueue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [AppState.learningQueue[i], AppState.learningQueue[j]] = [AppState.learningQueue[j], AppState.learningQueue[i]];
    }
  },

  setWord(word) {
    this.currentWord = word;
    this.isChecked = false;

    // Update translation hint
    const translationEl = document.getElementById('spelling-translation');
    if (translationEl) {
      translationEl.textContent = word.translation;
    }

    // Reset input and feedback
    const inputEl = document.getElementById('spelling-input');
    const feedbackEl = document.getElementById('spelling-feedback');

    if (inputEl) {
      inputEl.value = '';
      inputEl.classList.remove('correct', 'incorrect');
      inputEl.disabled = false;
      inputEl.focus();
    }

    if (feedbackEl) {
      feedbackEl.classList.remove('show', 'correct', 'incorrect');
      feedbackEl.innerHTML = '';
    }
  },

  checkSpelling() {
    if (!this.currentWord || this.isChecked) return;

    const inputEl = document.getElementById('spelling-input');
    const feedbackEl = document.getElementById('spelling-feedback');
    const checkBtn = document.getElementById('btn-spelling-check');

    if (!inputEl || !feedbackEl) return;

    const userAnswer = inputEl.value.trim().toLowerCase();
    const correctAnswer = this.currentWord.word.toLowerCase();

    if (!userAnswer) {
      Toast.show('请输入单词', 'warning');
      return;
    }

    this.isChecked = true;
    inputEl.disabled = true;

    const isCorrect = userAnswer === correctAnswer;

    // Update input styling
    inputEl.classList.add(isCorrect ? 'correct' : 'incorrect');

    // Add animation
    if (!isCorrect) {
      inputEl.classList.add('shake');
      setTimeout(() => inputEl.classList.remove('shake'), 500);
    } else {
      inputEl.classList.add('bounce');
      setTimeout(() => inputEl.classList.remove('bounce'), 400);
    }

    // Update feedback
    feedbackEl.classList.add('show', isCorrect ? 'correct' : 'incorrect');

    if (isCorrect) {
      feedbackEl.innerHTML = `
        <span style="font-size: 20px;">🎉</span>
        <span>太棒了！拼写正确！</span>
      `;
      // Update stats first, then advance
      this.updateSpellingStats(true);
      // Auto advance after short delay
      setTimeout(() => {
        this.advanceToNextWord();
      }, 1200);
    } else {
      feedbackEl.innerHTML = `
        <div>
          <span style="font-size: 18px;">😅</span>
          <span>差一点！正确答案是：</span>
        </div>
        <div class="spelling-correct-answer">
          <strong>${this.currentWord.word}</strong>
          <span style="color: var(--text-secondary); margin-left: 8px;">${this.currentWord.phonetic}</span>
        </div>
      `;
      // Update stats
      this.updateSpellingStats(false);
      // Update button to continue
      this.setupContinueButton();
    }
  },

  setupContinueButton() {
    const checkBtn = document.getElementById('btn-spelling-check');
    if (checkBtn) {
      const newBtn = checkBtn.cloneNode(true);
      checkBtn.parentNode.replaceChild(newBtn, checkBtn);
      newBtn.textContent = '下一个';
      newBtn.addEventListener('click', () => {
        this.advanceToNextWord();
      });
    }
  },

  advanceToNextWord() {
    // Reset spelling practice state
    this.resetForNextWord();

    // Check if in review mode or learn mode
    if (AppState.mode === 'review') {
      AppState.currentWordIndex++;
      if (AppState.currentWordIndex >= AppState.reviewQueue.length) {
        this.showCompletion();
        return;
      }
      Review.renderReviewCard();
    } else {
      // Learning mode
      AppState.currentWordIndex++;
      if (AppState.currentWordIndex >= AppState.learningQueue.length) {
        this.shuffleQueue();
        AppState.currentWordIndex = 0;
      }
      Learning.showCurrentWord();
      Learning.updateProgress();
    }
  },

  showCompletion() {
    const container = document.querySelector('.spelling-practice');
    if (container) {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px;">
          <div style="font-size: 64px; margin-bottom: 16px;">🎉</div>
          <h3 style="color: var(--primary); margin-bottom: 8px;">太棒了！</h3>
          <p style="color: var(--text-secondary);">本轮学习完成！</p>
          <button class="btn btn-primary" onclick="SpellingPractice.restart()">再学一轮</button>
        </div>
      `;
    }
    Confetti.show();
  },

  restart() {
    this.shuffleQueue();
    AppState.currentWordIndex = 0;
    if (AppState.learningQueue.length > 0) {
      this.setWord(AppState.learningQueue[0]);
    }
    // Reset the container UI
    const container = document.querySelector('.spelling-practice');
    if (container) {
      // Re-render the original UI - but this is complex, so let's just reload the page section
      window.location.reload();
    }
  },

  updateSpellingStats(isCorrect) {
    const word = this.currentWord;
    if (!word) return;

    // Calculate new review schedule based on spelling result
    const currentSchedule = AppState.stats.reviewSchedule[AppState.currentBook.id]?.[word.id] || { interval: 1, mastery: 0 };
    const response = isCorrect ? 'correct' : 'fuzzy';
    const newSchedule = SpacedRepetition.calculateNextReview(response, currentSchedule.interval);

    // Update stats
    if (!AppState.stats.reviewSchedule[AppState.currentBook.id]) {
      AppState.stats.reviewSchedule[AppState.currentBook.id] = {};
    }
    AppState.stats.reviewSchedule[AppState.currentBook.id][word.id] = {
      ...newSchedule,
      lastReviewed: new Date().toISOString()
    };

    // Track learned words
    if (!AppState.stats.wordsLearned[AppState.currentBook.id].includes(word.id)) {
      AppState.stats.wordsLearned[AppState.currentBook.id].push(word.id);
    }

    // Update streak
    Learning.updateStreak();

    // Save progress
    Storage.saveStats();
  },

  resetForNextWord() {
    this.isChecked = false;
    const checkBtn = document.getElementById('btn-spelling-check');
    if (checkBtn) {
      // Re-clone to reset onclick handler
      const newBtn = checkBtn.cloneNode(true);
      checkBtn.parentNode.replaceChild(newBtn, checkBtn);
      newBtn.textContent = '检查';
      newBtn.addEventListener('click', () => {
        this.checkSpelling();
      });
    }

    const inputEl = document.getElementById('spelling-input');
    const feedbackEl = document.getElementById('spelling-feedback');
    if (inputEl) {
      inputEl.value = '';
      inputEl.classList.remove('correct', 'incorrect');
      inputEl.disabled = false;
    }
    if (feedbackEl) {
      feedbackEl.classList.remove('show', 'correct', 'incorrect');
      feedbackEl.innerHTML = '';
    }
  },

  setMode(mode) {
    const learningSection = document.getElementById('page-learning');
    const spellingPractice = document.getElementById('spelling-practice');

    if (learningSection) {
      learningSection.dataset.mode = mode;
    }

    if (mode === 'spelling') {
      if (spellingPractice) spellingPractice.style.display = 'block';
      if (AppState.learningQueue.length > 0) {
        this.setWord(AppState.learningQueue[AppState.currentWordIndex]);
      }
    } else {
      if (spellingPractice) spellingPractice.style.display = 'none';
    }
  }
};

// Mode toggle handlers
function setupModeToggle() {
  const modeButtons = document.querySelectorAll('.learning-mode-toggle .btn-toggle');

  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.mode;

      // Update active state
      modeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Handle mode change
      if (mode === 'memory') {
        AppState.mode = 'learn';
        SpellingPractice.setMode('memory');
      } else if (mode === 'spelling') {
        AppState.mode = 'learn'; // Still learning, just different view
        SpellingPractice.setMode('spelling');
      } else if (mode === 'review') {
        AppState.mode = 'review';
        const wordsToReview = SpacedRepetition.getWordsForReview(AppState.currentBook?.id);
        if (wordsToReview.length > 0) {
          AppState.reviewQueue = wordsToReview;
          AppState.currentWordIndex = 0;
          Review.renderReviewCard();
        } else {
          Toast.show('🎉 暂时没有需要复习的单词！', 'success');
          // Reset to memory mode
          document.querySelector('#mode-memory').click();
        }
      }
    });
  });
}

// Start app when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);

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
      description: '基础词汇 - 学校生活、组长、班长',
      color: '#6C5CE7',
      units: 8,
      wordsCount: 25
    },
    {
      id: '1B',
      title: 'Longman Express 1B',
      level: 1,
      description: '基础词汇 - 学校用品、活动',
      color: '#A29BFE',
      units: 8,
      wordsCount: 12
    },
    {
      id: '2A',
      title: 'Longman Express 2A',
      level: 2,
      description: '日常生活 - 学校规则、食物、交通',
      color: '#00B894',
      units: 8,
      wordsCount: 20
    },
    {
      id: '2B',
      title: 'Longman Express 2B',
      level: 2,
      description: '日常生活 - 宠物、社区、职业',
      color: '#55EFC4',
      units: 8,
      wordsCount: 31
    },
    {
      id: '3A',
      title: 'Longman Express 3A',
      level: 3,
      description: '进阶表达 - 活动、比赛、食物',
      color: '#FDCB6E',
      units: 8,
      wordsCount: 27
    },
    {
      id: '3B',
      title: 'Longman Express 3B',
      level: 3,
      description: '进阶表达 - 性格、情感、节日',
      color: '#F9E79F',
      units: 8,
      wordsCount: 19
    },
    {
      id: '4A',
      title: 'Longman Express 4A',
      level: 4,
      description: '深度话题 - 待添加',
      color: '#FF6B6B',
      units: 8,
      wordsCount: 0
    },
    {
      id: '4B',
      title: 'Longman Express 4B',
      level: 4,
      description: '深度话题 - 待添加',
      color: '#FF8E8E',
      units: 8,
      wordsCount: 0
    },
    {
      id: '5A',
      title: 'Longman Express 5A',
      level: 5,
      description: '高级应用 - 待添加',
      color: '#00CEC9',
      units: 8,
      wordsCount: 0
    },
    {
      id: '5B',
      title: 'Longman Express 5B',
      level: 5,
      description: '高级应用 - 待添加',
      color: '#81ECEC',
      units: 8,
      wordsCount: 0
    }
  ],

  const VOCABULARY_WORDS = {
  "1A": [
    {
      "id": "1A_001",
      "word": "primary",
      "phonetic": "/ˈpraɪmeri/",
      "translation": "主要的,初等的",
      "image": "🏫",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the primary.",
          "zh": "我能看到主要的,初等的。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：主要...",
        "image": "想象一个主要的,初等的",
        "story": "primary = 主要的,初等的"
      }
    },
    {
      "id": "1A_002",
      "word": "express",
      "phonetic": "/ɪkˈspres/",
      "translation": "快速的,表达",
      "image": "🚀",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the express.",
          "zh": "我能看到快速的,表达。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：快速...",
        "image": "想象一个快速的,表达",
        "story": "express = 快速的,表达"
      }
    },
    {
      "id": "1A_003",
      "word": "international",
      "phonetic": "/ˌɪntəˈnæʃnəl/",
      "translation": "国际的",
      "image": "🌍",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the international.",
          "zh": "我能看到国际的。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：国际...",
        "image": "想象一个国际的",
        "story": "international = 国际的"
      }
    },
    {
      "id": "1A_004",
      "word": "edition",
      "phonetic": "/ɪˈdɪʃn/",
      "translation": "版本",
      "image": "📖",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the edition.",
          "zh": "我能看到版本。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：版本...",
        "image": "想象一个版本",
        "story": "edition = 版本"
      }
    },
    {
      "id": "1A_005",
      "word": "captions",
      "phonetic": "/ˈkæpʃnz/",
      "translation": "说明文字",
      "image": "📝",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the captions.",
          "zh": "我能看到说明文字。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：说明...",
        "image": "想象一个说明文字",
        "story": "captions = 说明文字"
      }
    },
    {
      "id": "1A_006",
      "word": "comic strips",
      "phonetic": "/ˈkɒmɪk strɪps/",
      "translation": "连环漫画",
      "image": "📚",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the comic strips.",
          "zh": "我能看到连环漫画。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：连环...",
        "image": "想象一个连环漫画",
        "story": "comic strips = 连环漫画"
      }
    },
    {
      "id": "1A_007",
      "word": "group leader",
      "phonetic": "/ɡruːp ˈliːdər/",
      "translation": "组长",
      "image": "👥",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the group leader.",
          "zh": "我能看到组长。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：组长...",
        "image": "想象一个组长",
        "story": "group leader = 组长"
      }
    },
    {
      "id": "1A_008",
      "word": "monitor",
      "phonetic": "/ˈmɒnɪtər/",
      "translation": "班长,显示器",
      "image": "🖥️",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the monitor.",
          "zh": "我能看到班长,显示器。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：班长...",
        "image": "想象一个班长,显示器",
        "story": "monitor = 班长,显示器"
      }
    },
    {
      "id": "1A_009",
      "word": "monitress",
      "phonetic": "/ˈmɒnɪtrəs/",
      "translation": "女班长",
      "image": "👩‍🏫",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the monitress.",
          "zh": "我能看到女班长。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：女班...",
        "image": "想象一个女班长",
        "story": "monitress = 女班长"
      }
    },
    {
      "id": "1A_010",
      "word": "discover",
      "phonetic": "/dɪˈskʌvər/",
      "translation": "发现",
      "image": "🔍",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the discover.",
          "zh": "我能看到发现。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：发现...",
        "image": "想象一个发现",
        "story": "discover = 发现"
      }
    },
    {
      "id": "1A_011",
      "word": "adventure",
      "phonetic": "/ədˈventʃər/",
      "translation": "冒险",
      "image": "🌟",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the adventure.",
          "zh": "我能看到冒险。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：冒险...",
        "image": "想象一个冒险",
        "story": "adventure = 冒险"
      }
    },
    {
      "id": "1A_012",
      "word": "bubble",
      "phonetic": "/ˈbʌbl/",
      "translation": "泡泡",
      "image": "🫧",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the bubble.",
          "zh": "我能看到泡泡。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：泡泡...",
        "image": "想象一个泡泡",
        "story": "bubble = 泡泡"
      }
    },
    {
      "id": "1A_013",
      "word": "chant",
      "phonetic": "/tʃɑːnt/",
      "translation": "吟唱",
      "image": "🎵",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the chant.",
          "zh": "我能看到吟唱。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：吟唱...",
        "image": "想象一个吟唱",
        "story": "chant = 吟唱"
      }
    },
    {
      "id": "1A_014",
      "word": "rhyme",
      "phonetic": "/raɪm/",
      "translation": "韵律,押韵",
      "image": "🎤",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the rhyme.",
          "zh": "我能看到韵律,押韵。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：韵律...",
        "image": "想象一个韵律,押韵",
        "story": "rhyme = 韵律,押韵"
      }
    },
    {
      "id": "1A_015",
      "word": "finish",
      "phonetic": "/ˈfɪnɪʃ/",
      "translation": "完成",
      "image": "✅",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the finish.",
          "zh": "我能看到完成。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：完成...",
        "image": "想象一个完成",
        "story": "finish = 完成"
      }
    },
    {
      "id": "1A_016",
      "word": "study in pairs",
      "phonetic": "/ˈstʌdi ɪn peərz/",
      "translation": "两人一组学习",
      "image": "👫",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the study in pairs.",
          "zh": "我能看到两人一组学习。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：两人...",
        "image": "想象一个两人一组学习",
        "story": "study in pairs = 两人一组学习"
      }
    },
    {
      "id": "1A_017",
      "word": "comma",
      "phonetic": "/ˈkɒmə/",
      "translation": "逗号",
      "image": "📚",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the comma.",
          "zh": "我能看到逗号。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：逗号...",
        "image": "想象一个逗号",
        "story": "comma = 逗号"
      }
    },
    {
      "id": "1A_018",
      "word": "exclamation mark",
      "phonetic": "/ˌekskləˈmeɪʃn mɑːk/",
      "translation": "感叹号",
      "image": "📚",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the exclamation mark.",
          "zh": "我能看到感叹号。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：感叹...",
        "image": "想象一个感叹号",
        "story": "exclamation mark = 感叹号"
      }
    },
    {
      "id": "1A_019",
      "word": "question mark",
      "phonetic": "/ˈkwestʃən mɑːk/",
      "translation": "问号",
      "image": "📚",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the question mark.",
          "zh": "我能看到问号。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：问号...",
        "image": "想象一个问号",
        "story": "question mark = 问号"
      }
    },
    {
      "id": "1A_020",
      "word": "naughty",
      "phonetic": "/ˈnɔːti/",
      "translation": "调皮的",
      "image": "😜",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the naughty.",
          "zh": "我能看到调皮的。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：调皮...",
        "image": "想象一个调皮的",
        "story": "naughty = 调皮的"
      }
    },
    {
      "id": "1A_021",
      "word": "clay",
      "phonetic": "/kleɪ/",
      "translation": "黏土",
      "image": "🏺",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the clay.",
          "zh": "我能看到黏土。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：黏土...",
        "image": "想象一个黏土",
        "story": "clay = 黏土"
      }
    },
    {
      "id": "1A_022",
      "word": "horn",
      "phonetic": "/hɔːrn/",
      "translation": "喇叭,角",
      "image": "📯",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the horn.",
          "zh": "我能看到喇叭,角。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：喇叭...",
        "image": "想象一个喇叭,角",
        "story": "horn = 喇叭,角"
      }
    },
    {
      "id": "1A_023",
      "word": "sour",
      "phonetic": "/ˈsaʊər/",
      "translation": "酸的",
      "image": "🍋",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the sour.",
          "zh": "我能看到酸的。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：酸的...",
        "image": "想象一个酸的",
        "story": "sour = 酸的"
      }
    },
    {
      "id": "1A_024",
      "word": "papaya",
      "phonetic": "/pəˈpaɪə/",
      "translation": "木瓜",
      "image": "🥭",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the papaya.",
          "zh": "我能看到木瓜。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：木瓜...",
        "image": "想象一个木瓜",
        "story": "papaya = 木瓜"
      }
    },
    {
      "id": "1A_025",
      "word": "yogurt",
      "phonetic": "/ˈjoʊɡərt/",
      "translation": "酸奶",
      "image": "🥛",
      "book": "1A",
      "examples": [
        {
          "en": "I can see the yogurt.",
          "zh": "我能看到酸奶。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：酸奶...",
        "image": "想象一个酸奶",
        "story": "yogurt = 酸奶"
      }
    }
  ],
  "1B": [
    {
      "id": "1B_001",
      "word": "key",
      "phonetic": "/kiː/",
      "translation": "钥匙,关键",
      "image": "🔑",
      "book": "1B",
      "examples": [
        {
          "en": "I can see the key.",
          "zh": "我能看到钥匙,关键。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：钥匙...",
        "image": "想象一个钥匙,关键",
        "story": "key = 钥匙,关键"
      }
    },
    {
      "id": "1B_002",
      "word": "dinosaur",
      "phonetic": "/ˈdaɪnəsɔːr/",
      "translation": "恐龙",
      "image": "🦕",
      "book": "1B",
      "examples": [
        {
          "en": "I can see the dinosaur.",
          "zh": "我能看到恐龙。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：恐龙...",
        "image": "想象一个恐龙",
        "story": "dinosaur = 恐龙"
      }
    },
    {
      "id": "1B_003",
      "word": "blouse",
      "phonetic": "/blaʊz/",
      "translation": "女式衬衫",
      "image": "👚",
      "book": "1B",
      "examples": [
        {
          "en": "I can see the blouse.",
          "zh": "我能看到女式衬衫。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：女式...",
        "image": "想象一个女式衬衫",
        "story": "blouse = 女式衬衫"
      }
    },
    {
      "id": "1B_004",
      "word": "vest",
      "phonetic": "/vest/",
      "translation": "背心",
      "image": "🎽",
      "book": "1B",
      "examples": [
        {
          "en": "I can see the vest.",
          "zh": "我能看到背心。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：背心...",
        "image": "想象一个背心",
        "story": "vest = 背心"
      }
    },
    {
      "id": "1B_005",
      "word": "bench",
      "phonetic": "/bentʃ/",
      "translation": "长凳",
      "image": "🪑",
      "book": "1B",
      "examples": [
        {
          "en": "I can see the bench.",
          "zh": "我能看到长凳。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：长凳...",
        "image": "想象一个长凳",
        "story": "bench = 长凳"
      }
    },
    {
      "id": "1B_006",
      "word": "see-saw",
      "phonetic": "/ˈsiː sɔː/",
      "translation": "跷跷板",
      "image": "📚",
      "book": "1B",
      "examples": [
        {
          "en": "I can see the see-saw.",
          "zh": "我能看到跷跷板。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：跷跷...",
        "image": "想象一个跷跷板",
        "story": "see-saw = 跷跷板"
      }
    },
    {
      "id": "1B_007",
      "word": "hike",
      "phonetic": "/haɪk/",
      "translation": "远足,徒步",
      "image": "🥾",
      "book": "1B",
      "examples": [
        {
          "en": "I can see the hike.",
          "zh": "我能看到远足,徒步。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：远足...",
        "image": "想象一个远足,徒步",
        "story": "hike = 远足,徒步"
      }
    },
    {
      "id": "1B_008",
      "word": "model",
      "phonetic": "/ˈmɒdl/",
      "translation": "模型,模特",
      "image": "🗺️",
      "book": "1B",
      "examples": [
        {
          "en": "I can see the model.",
          "zh": "我能看到模型,模特。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：模型...",
        "image": "想象一个模型,模特",
        "story": "model = 模型,模特"
      }
    },
    {
      "id": "1B_009",
      "word": "joker",
      "phonetic": "/ˈdʒoʊkər/",
      "translation": "爱开玩笑的人",
      "image": "🃏",
      "book": "1B",
      "examples": [
        {
          "en": "I can see the joker.",
          "zh": "我能看到爱开玩笑的人。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：爱开...",
        "image": "想象一个爱开玩笑的人",
        "story": "joker = 爱开玩笑的人"
      }
    },
    {
      "id": "1B_010",
      "word": "biscuit",
      "phonetic": "/ˈbɪskɪt/",
      "translation": "饼干",
      "image": "🍪",
      "book": "1B",
      "examples": [
        {
          "en": "I can see the biscuit.",
          "zh": "我能看到饼干。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：饼干...",
        "image": "想象一个饼干",
        "story": "biscuit = 饼干"
      }
    },
    {
      "id": "1B_011",
      "word": "lolly",
      "phonetic": "/ˈlɒli/",
      "translation": "棒棒糖",
      "image": "🍭",
      "book": "1B",
      "examples": [
        {
          "en": "I can see the lolly.",
          "zh": "我能看到棒棒糖。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：棒棒...",
        "image": "想象一个棒棒糖",
        "story": "lolly = 棒棒糖"
      }
    },
    {
      "id": "1B_012",
      "word": "language",
      "phonetic": "/ˈlæŋɡwɪdʒ/",
      "translation": "语言",
      "image": "🗣️",
      "book": "1B",
      "examples": [
        {
          "en": "I can see the language.",
          "zh": "我能看到语言。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：语言...",
        "image": "想象一个语言",
        "story": "language = 语言"
      }
    }
  ],
  "2A": [
    {
      "id": "2A_001",
      "word": "corridor",
      "phonetic": "/ˈkɒrɪdɔːr/",
      "translation": "走廊",
      "image": "🚪",
      "book": "2A",
      "examples": [
        {
          "en": "I can see the corridor.",
          "zh": "我能看到走廊。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：走廊...",
        "image": "想象一个走廊",
        "story": "corridor = 走廊"
      }
    },
    {
      "id": "2A_002",
      "word": "hall",
      "phonetic": "/hɔːl/",
      "translation": "大厅,礼堂",
      "image": "🏛️",
      "book": "2A",
      "examples": [
        {
          "en": "I can see the hall.",
          "zh": "我能看到大厅,礼堂。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：大厅...",
        "image": "想象一个大厅,礼堂",
        "story": "hall = 大厅,礼堂"
      }
    },
    {
      "id": "2A_003",
      "word": "tuck shop",
      "phonetic": "/tʌk ʃɒp/",
      "translation": "小卖部",
      "image": "🏪",
      "book": "2A",
      "examples": [
        {
          "en": "I can see the tuck shop.",
          "zh": "我能看到小卖部。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：小卖...",
        "image": "想象一个小卖部",
        "story": "tuck shop = 小卖部"
      }
    },
    {
      "id": "2A_004",
      "word": "litter",
      "phonetic": "/ˈlɪtər/",
      "translation": "垃圾",
      "image": "🗑️",
      "book": "2A",
      "examples": [
        {
          "en": "I can see the litter.",
          "zh": "我能看到垃圾。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：垃圾...",
        "image": "想象一个垃圾",
        "story": "litter = 垃圾"
      }
    },
    {
      "id": "2A_005",
      "word": "spit",
      "phonetic": "/spɪt/",
      "translation": "吐痰",
      "image": "💦",
      "book": "2A",
      "examples": [
        {
          "en": "I can see the spit.",
          "zh": "我能看到吐痰。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：吐痰...",
        "image": "想象一个吐痰",
        "story": "spit = 吐痰"
      }
    },
    {
      "id": "2A_006",
      "word": "must",
      "phonetic": "/mʌst/",
      "translation": "必须",
      "image": "📚",
      "book": "2A",
      "examples": [
        {
          "en": "I can see the must.",
          "zh": "我能看到必须。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：必须...",
        "image": "想象一个必须",
        "story": "must = 必须"
      }
    },
    {
      "id": "2A_007",
      "word": "mustn't",
      "phonetic": "/ˈmʌsnt/",
      "translation": "不可以",
      "image": "📚",
      "book": "2A",
      "examples": [
        {
          "en": "I can see the mustn't.",
          "zh": "我能看到不可以。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：不可...",
        "image": "想象一个不可以",
        "story": "mustn't = 不可以"
      }
    },
    {
      "id": "2A_008",
      "word": "rush to the seats",
      "phonetic": "/rʌʃ tuː ðə siːts/",
      "translation": "冲向座位",
      "image": "🏃",
      "book": "2A",
      "examples": [
        {
          "en": "I can see the rush to the seats.",
          "zh": "我能看到冲向座位。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：冲向...",
        "image": "想象一个冲向座位",
        "story": "rush to the seats = 冲向座位"
      }
    },
    {
      "id": "2A_009",
      "word": "sausage",
      "phonetic": "/ˈsɒsɪdʒ/",
      "translation": "香肠",
      "image": "🌭",
      "book": "2A",
      "examples": [
        {
          "en": "I can see the sausage.",
          "zh": "我能看到香肠。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：香肠...",
        "image": "想象一个香肠",
        "story": "sausage = 香肠"
      }
    },
    {
      "id": "2A_010",
      "word": "ham",
      "phonetic": "/hæm/",
      "translation": "火腿",
      "image": "🥓",
      "book": "2A",
      "examples": [
        {
          "en": "I can see the ham.",
          "zh": "我能看到火腿。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：火腿...",
        "image": "想象一个火腿",
        "story": "ham = 火腿"
      }
    },
    {
      "id": "2A_011",
      "word": "butter",
      "phonetic": "/ˈbʌtər/",
      "translation": "黄油",
      "image": "🧈",
      "book": "2A",
      "examples": [
        {
          "en": "I can see the butter.",
          "zh": "我能看到黄油。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：黄油...",
        "image": "想象一个黄油",
        "story": "butter = 黄油"
      }
    },
    {
      "id": "2A_012",
      "word": "cheese",
      "phonetic": "/tʃiːz/",
      "translation": "奶酪",
      "image": "🧀",
      "book": "2A",
      "examples": [
        {
          "en": "I can see the cheese.",
          "zh": "我能看到奶酪。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：奶酪...",
        "image": "想象一个奶酪",
        "story": "cheese = 奶酪"
      }
    },
    {
      "id": "2A_013",
      "word": "jam",
      "phonetic": "/dʒæm/",
      "translation": "果酱",
      "image": "🫙",
      "book": "2A",
      "examples": [
        {
          "en": "I can see the jam.",
          "zh": "我能看到果酱。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：果酱...",
        "image": "想象一个果酱",
        "story": "jam = 果酱"
      }
    },
    {
      "id": "2A_014",
      "word": "soya milk",
      "phonetic": "/ˈsɔɪə mɪlk/",
      "translation": "豆奶",
      "image": "🥛",
      "book": "2A",
      "examples": [
        {
          "en": "I can see the soya milk.",
          "zh": "我能看到豆奶。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：豆奶...",
        "image": "想象一个豆奶",
        "story": "soya milk = 豆奶"
      }
    },
    {
      "id": "2A_015",
      "word": "cone",
      "phonetic": "/koʊn/",
      "translation": "蛋筒,圆锥体",
      "image": "🍦",
      "book": "2A",
      "examples": [
        {
          "en": "I can see the cone.",
          "zh": "我能看到蛋筒,圆锥体。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：蛋筒...",
        "image": "想象一个蛋筒,圆锥体",
        "story": "cone = 蛋筒,圆锥体"
      }
    },
    {
      "id": "2A_016",
      "word": "tart",
      "phonetic": "/tɑːrt/",
      "translation": "蛋挞,挞",
      "image": "🥧",
      "book": "2A",
      "examples": [
        {
          "en": "I can see the tart.",
          "zh": "我能看到蛋挞,挞。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：蛋挞...",
        "image": "想象一个蛋挞,挞",
        "story": "tart = 蛋挞,挞"
      }
    },
    {
      "id": "2A_017",
      "word": "centre",
      "phonetic": "/ˈsentər/",
      "translation": "中心",
      "image": "🏢",
      "book": "2A",
      "examples": [
        {
          "en": "I can see the centre.",
          "zh": "我能看到中心。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：中心...",
        "image": "想象一个中心",
        "story": "centre = 中心"
      }
    },
    {
      "id": "2A_018",
      "word": "sportswear",
      "phonetic": "/ˈspɔːrtswer/",
      "translation": "运动服",
      "image": "👕",
      "book": "2A",
      "examples": [
        {
          "en": "I can see the sportswear.",
          "zh": "我能看到运动服。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：运动...",
        "image": "想象一个运动服",
        "story": "sportswear = 运动服"
      }
    },
    {
      "id": "2A_019",
      "word": "trainers",
      "phonetic": "/ˈtreɪnərz/",
      "translation": "运动鞋",
      "image": "👟",
      "book": "2A",
      "examples": [
        {
          "en": "I can see the trainers.",
          "zh": "我能看到运动鞋。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：运动...",
        "image": "想象一个运动鞋",
        "story": "trainers = 运动鞋"
      }
    },
    {
      "id": "2A_020",
      "word": "bank",
      "phonetic": "/bæŋk/",
      "translation": "银行",
      "image": "🏦",
      "book": "2A",
      "examples": [
        {
          "en": "I can see the bank.",
          "zh": "我能看到银行。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：银行...",
        "image": "想象一个银行",
        "story": "bank = 银行"
      }
    }
  ],
  "2B": [
    {
      "id": "2B_001",
      "word": "department store",
      "phonetic": "/dɪˈpɑːrtmənt stɔːr/",
      "translation": "百货商店",
      "image": "🏬",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the department store.",
          "zh": "我能看到百货商店。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：百货...",
        "image": "想象一个百货商店",
        "story": "department store = 百货商店"
      }
    },
    {
      "id": "2B_002",
      "word": "hamster",
      "phonetic": "/ˈhæmstər/",
      "translation": "仓鼠",
      "image": "🐹",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the hamster.",
          "zh": "我能看到仓鼠。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：仓鼠...",
        "image": "想象一个仓鼠",
        "story": "hamster = 仓鼠"
      }
    },
    {
      "id": "2B_003",
      "word": "soft fur",
      "phonetic": "/sɒft fɜːr/",
      "translation": "柔软的毛",
      "image": "🐾",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the soft fur.",
          "zh": "我能看到柔软的毛。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：柔软...",
        "image": "想象一个柔软的毛",
        "story": "soft fur = 柔软的毛"
      }
    },
    {
      "id": "2B_004",
      "word": "colourful feathers",
      "phonetic": "/ˈkʌlərfl ˈfeðərz/",
      "translation": "彩色的羽毛",
      "image": "🦜",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the colourful feathers.",
          "zh": "我能看到彩色的羽毛。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：彩色...",
        "image": "想象一个彩色的羽毛",
        "story": "colourful feathers = 彩色的羽毛"
      }
    },
    {
      "id": "2B_005",
      "word": "small fins",
      "phonetic": "/smɔːl fɪnz/",
      "translation": "小鱼鳍",
      "image": "🐠",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the small fins.",
          "zh": "我能看到小鱼鳍。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：小鱼...",
        "image": "想象一个小鱼鳍",
        "story": "small fins = 小鱼鳍"
      }
    },
    {
      "id": "2B_006",
      "word": "seeds",
      "phonetic": "/siːdz/",
      "translation": "种子",
      "image": "🌱",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the seeds.",
          "zh": "我能看到种子。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：种子...",
        "image": "想象一个种子",
        "story": "seeds = 种子"
      }
    },
    {
      "id": "2B_007",
      "word": "bones",
      "phonetic": "/boʊnz/",
      "translation": "骨头",
      "image": "🦴",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the bones.",
          "zh": "我能看到骨头。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：骨头...",
        "image": "想象一个骨头",
        "story": "bones = 骨头"
      }
    },
    {
      "id": "2B_008",
      "word": "worms",
      "phonetic": "/wɜːrmz/",
      "translation": "虫子",
      "image": "🐛",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the worms.",
          "zh": "我能看到虫子。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：虫子...",
        "image": "想象一个虫子",
        "story": "worms = 虫子"
      }
    },
    {
      "id": "2B_009",
      "word": "noisy",
      "phonetic": "/ˈnɔɪzi/",
      "translation": "吵闹的",
      "image": "🔊",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the noisy.",
          "zh": "我能看到吵闹的。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：吵闹...",
        "image": "想象一个吵闹的",
        "story": "noisy = 吵闹的"
      }
    },
    {
      "id": "2B_010",
      "word": "cuddly",
      "phonetic": "/ˈkʌdli/",
      "translation": "可爱的,想抱的",
      "image": "🧸",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the cuddly.",
          "zh": "我能看到可爱的,想抱的。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：可爱...",
        "image": "想象一个可爱的,想抱的",
        "story": "cuddly = 可爱的,想抱的"
      }
    },
    {
      "id": "2B_011",
      "word": "interview",
      "phonetic": "/ˈɪntərvjuː/",
      "translation": "采访,面试",
      "image": "🎤",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the interview.",
          "zh": "我能看到采访,面试。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：采访...",
        "image": "想象一个采访,面试",
        "story": "interview = 采访,面试"
      }
    },
    {
      "id": "2B_012",
      "word": "tidy",
      "phonetic": "/ˈtaɪdi/",
      "translation": "整洁的",
      "image": "🧹",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the tidy.",
          "zh": "我能看到整洁的。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：整洁...",
        "image": "想象一个整洁的",
        "story": "tidy = 整洁的"
      }
    },
    {
      "id": "2B_013",
      "word": "dwarfs",
      "phonetic": "/dwɔːrfs/",
      "translation": "小矮人",
      "image": "📚",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the dwarfs.",
          "zh": "我能看到小矮人。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：小矮...",
        "image": "想象一个小矮人",
        "story": "dwarfs = 小矮人"
      }
    },
    {
      "id": "2B_014",
      "word": "shelf",
      "phonetic": "/ʃelf/",
      "translation": "架子",
      "image": "📚",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the shelf.",
          "zh": "我能看到架子。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：架子...",
        "image": "想象一个架子",
        "story": "shelf = 架子"
      }
    },
    {
      "id": "2B_015",
      "word": "fairy",
      "phonetic": "/ˈferi/",
      "translation": "仙女",
      "image": "🧚",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the fairy.",
          "zh": "我能看到仙女。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：仙女...",
        "image": "想象一个仙女",
        "story": "fairy = 仙女"
      }
    },
    {
      "id": "2B_016",
      "word": "land",
      "phonetic": "/lænd/",
      "translation": "陆地,土地",
      "image": "🏝️",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the land.",
          "zh": "我能看到陆地,土地。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：陆地...",
        "image": "想象一个陆地,土地",
        "story": "land = 陆地,土地"
      }
    },
    {
      "id": "2B_017",
      "word": "monthly",
      "phonetic": "/ˈmʌnθli/",
      "translation": "每月",
      "image": "📅",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the monthly.",
          "zh": "我能看到每月。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：每月...",
        "image": "想象一个每月",
        "story": "monthly = 每月"
      }
    },
    {
      "id": "2B_018",
      "word": "rude",
      "phonetic": "/ruːd/",
      "translation": "粗鲁的",
      "image": "😠",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the rude.",
          "zh": "我能看到粗鲁的。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：粗鲁...",
        "image": "想象一个粗鲁的",
        "story": "rude = 粗鲁的"
      }
    },
    {
      "id": "2B_019",
      "word": "tram",
      "phonetic": "/træm/",
      "translation": "电车",
      "image": "🚊",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the tram.",
          "zh": "我能看到电车。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：电车...",
        "image": "想象一个电车",
        "story": "tram = 电车"
      }
    },
    {
      "id": "2B_020",
      "word": "ferry",
      "phonetic": "/ˈferi/",
      "translation": "渡轮",
      "image": "⛴️",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the ferry.",
          "zh": "我能看到渡轮。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：渡轮...",
        "image": "想象一个渡轮",
        "story": "ferry = 渡轮"
      }
    },
    {
      "id": "2B_021",
      "word": "practice",
      "phonetic": "/ˈpræktɪs/",
      "translation": "练习",
      "image": "📝",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the practice.",
          "zh": "我能看到练习。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：练习...",
        "image": "想象一个练习",
        "story": "practice = 练习"
      }
    },
    {
      "id": "2B_022",
      "word": "postman",
      "phonetic": "/ˈpoʊstmən/",
      "translation": "邮递员",
      "image": "📮",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the postman.",
          "zh": "我能看到邮递员。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：邮递...",
        "image": "想象一个邮递员",
        "story": "postman = 邮递员"
      }
    },
    {
      "id": "2B_023",
      "word": "Light Rail",
      "phonetic": "/laɪt reɪl/",
      "translation": "轻轨",
      "image": "🚈",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the Light Rail.",
          "zh": "我能看到轻轨。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：轻轨...",
        "image": "想象一个轻轨",
        "story": "Light Rail = 轻轨"
      }
    },
    {
      "id": "2B_024",
      "word": "housewife",
      "phonetic": "/ˈhaʊswaɪf/",
      "translation": "家庭主妇",
      "image": "👩‍🍳",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the housewife.",
          "zh": "我能看到家庭主妇。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：家庭...",
        "image": "想象一个家庭主妇",
        "story": "housewife = 家庭主妇"
      }
    },
    {
      "id": "2B_025",
      "word": "church",
      "phonetic": "/tʃɜːrtʃ/",
      "translation": "教堂",
      "image": "⛪",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the church.",
          "zh": "我能看到教堂。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：教堂...",
        "image": "想象一个教堂",
        "story": "church = 教堂"
      }
    },
    {
      "id": "2B_026",
      "word": "Cub Scouts",
      "phonetic": "/kʌb skaʊts/",
      "translation": "幼童军",
      "image": "📚",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the Cub Scouts.",
          "zh": "我能看到幼童军。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：幼童...",
        "image": "想象一个幼童军",
        "story": "Cub Scouts = 幼童军"
      }
    },
    {
      "id": "2B_027",
      "word": "choir",
      "phonetic": "/ˈkwaɪər/",
      "translation": "合唱团",
      "image": "🎶",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the choir.",
          "zh": "我能看到合唱团。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：合唱...",
        "image": "想象一个合唱团",
        "story": "choir = 合唱团"
      }
    },
    {
      "id": "2B_028",
      "word": "tutor",
      "phonetic": "/ˈtuːtər/",
      "translation": "家庭教师",
      "image": "👨‍🏫",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the tutor.",
          "zh": "我能看到家庭教师。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：家庭...",
        "image": "想象一个家庭教师",
        "story": "tutor = 家庭教师"
      }
    },
    {
      "id": "2B_029",
      "word": "scarf",
      "phonetic": "/skɑːrf/",
      "translation": "围巾",
      "image": "🧣",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the scarf.",
          "zh": "我能看到围巾。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：围巾...",
        "image": "想象一个围巾",
        "story": "scarf = 围巾"
      }
    },
    {
      "id": "2B_030",
      "word": "foggy",
      "phonetic": "/ˈfɒɡi/",
      "translation": "有雾的",
      "image": "🌫️",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the foggy.",
          "zh": "我能看到有雾的。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：有雾...",
        "image": "想象一个有雾的",
        "story": "foggy = 有雾的"
      }
    },
    {
      "id": "2B_031",
      "word": "dry",
      "phonetic": "/draɪ/",
      "translation": "干燥的",
      "image": "☀️",
      "book": "2B",
      "examples": [
        {
          "en": "I can see the dry.",
          "zh": "我能看到干燥的。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：干燥...",
        "image": "想象一个干燥的",
        "story": "dry = 干燥的"
      }
    }
  ],
  "3A": [
    {
      "id": "3A_001",
      "word": "event",
      "phonetic": "/ɪˈvent/",
      "translation": "事件,活动",
      "image": "🎉",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the event.",
          "zh": "我能看到事件,活动。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：事件...",
        "image": "想象一个事件,活动",
        "story": "event = 事件,活动"
      }
    },
    {
      "id": "3A_002",
      "word": "important",
      "phonetic": "/ɪmˈpɔːrtənt/",
      "translation": "重要的",
      "image": "⭐",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the important.",
          "zh": "我能看到重要的。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：重要...",
        "image": "想象一个重要的",
        "story": "important = 重要的"
      }
    },
    {
      "id": "3A_003",
      "word": "scare",
      "phonetic": "/sker/",
      "translation": "使害怕",
      "image": "😱",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the scare.",
          "zh": "我能看到使害怕。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：使害...",
        "image": "想象一个使害怕",
        "story": "scare = 使害怕"
      }
    },
    {
      "id": "3A_004",
      "word": "arrive",
      "phonetic": "/əˈraɪv/",
      "translation": "到达",
      "image": "🚉",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the arrive.",
          "zh": "我能看到到达。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：到达...",
        "image": "想象一个到达",
        "story": "arrive = 到达"
      }
    },
    {
      "id": "3A_005",
      "word": "competition",
      "phonetic": "/ˌkɒmpɪˈtɪʃn/",
      "translation": "比赛",
      "image": "🏆",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the competition.",
          "zh": "我能看到比赛。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：比赛...",
        "image": "想象一个比赛",
        "story": "competition = 比赛"
      }
    },
    {
      "id": "3A_006",
      "word": "Exam",
      "phonetic": "/ɪɡˈzæm/",
      "translation": "考试",
      "image": "📚",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the Exam.",
          "zh": "我能看到考试。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：考试...",
        "image": "想象一个考试",
        "story": "Exam = 考试"
      }
    },
    {
      "id": "3A_007",
      "word": "roar",
      "phonetic": "/rɔːr/",
      "translation": "咆哮",
      "image": "🦁",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the roar.",
          "zh": "我能看到咆哮。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：咆哮...",
        "image": "想象一个咆哮",
        "story": "roar = 咆哮"
      }
    },
    {
      "id": "3A_008",
      "word": "notice",
      "phonetic": "/ˈnoʊtɪs/",
      "translation": "注意,通知",
      "image": "📢",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the notice.",
          "zh": "我能看到注意,通知。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：注意...",
        "image": "想象一个注意,通知",
        "story": "notice = 注意,通知"
      }
    },
    {
      "id": "3A_009",
      "word": "suddenly",
      "phonetic": "/ˈsʌdənli/",
      "translation": "突然",
      "image": "⚡",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the suddenly.",
          "zh": "我能看到突然。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：突然...",
        "image": "想象一个突然",
        "story": "suddenly = 突然"
      }
    },
    {
      "id": "3A_010",
      "word": "grab",
      "phonetic": "/ɡræb/",
      "translation": "抓,抢",
      "image": "🤚",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the grab.",
          "zh": "我能看到抓,抢。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：抓,...",
        "image": "想象一个抓,抢",
        "story": "grab = 抓,抢"
      }
    },
    {
      "id": "3A_011",
      "word": "note",
      "phonetic": "/noʊt/",
      "translation": "笔记,便条",
      "image": "📓",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the note.",
          "zh": "我能看到笔记,便条。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：笔记...",
        "image": "想象一个笔记,便条",
        "story": "note = 笔记,便条"
      }
    },
    {
      "id": "3A_012",
      "word": "sandcastle",
      "phonetic": "/ˈsændkæsl/",
      "translation": "沙堡",
      "image": "🏰",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the sandcastle.",
          "zh": "我能看到沙堡。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：沙堡...",
        "image": "想象一个沙堡",
        "story": "sandcastle = 沙堡"
      }
    },
    {
      "id": "3A_013",
      "word": "shells",
      "phonetic": "/ʃelz/",
      "translation": "贝壳",
      "image": "🐚",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the shells.",
          "zh": "我能看到贝壳。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：贝壳...",
        "image": "想象一个贝壳",
        "story": "shells = 贝壳"
      }
    },
    {
      "id": "3A_014",
      "word": "barbecue",
      "phonetic": "/ˈbɑːrbɪkjuː/",
      "translation": "烧烤",
      "image": "🍖",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the barbecue.",
          "zh": "我能看到烧烤。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：烧烤...",
        "image": "想象一个烧烤",
        "story": "barbecue = 烧烤"
      }
    },
    {
      "id": "3A_015",
      "word": "magazines",
      "phonetic": "/ˌmæɡəˈziːnz/",
      "translation": "杂志",
      "image": "📰",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the magazines.",
          "zh": "我能看到杂志。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：杂志...",
        "image": "想象一个杂志",
        "story": "magazines = 杂志"
      }
    },
    {
      "id": "3A_016",
      "word": "beef",
      "phonetic": "/biːf/",
      "translation": "牛肉",
      "image": "🥩",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the beef.",
          "zh": "我能看到牛肉。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：牛肉...",
        "image": "想象一个牛肉",
        "story": "beef = 牛肉"
      }
    },
    {
      "id": "3A_017",
      "word": "pork",
      "phonetic": "/pɔːrk/",
      "translation": "猪肉",
      "image": "🐷",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the pork.",
          "zh": "我能看到猪肉。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：猪肉...",
        "image": "想象一个猪肉",
        "story": "pork = 猪肉"
      }
    },
    {
      "id": "3A_018",
      "word": "lettuce",
      "phonetic": "/ˈletɪs/",
      "translation": "生菜",
      "image": "🥬",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the lettuce.",
          "zh": "我能看到生菜。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：生菜...",
        "image": "想象一个生菜",
        "story": "lettuce = 生菜"
      }
    },
    {
      "id": "3A_019",
      "word": "garlic",
      "phonetic": "/ˈɡɑːrlɪk/",
      "translation": "大蒜",
      "image": "🧄",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the garlic.",
          "zh": "我能看到大蒜。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：大蒜...",
        "image": "想象一个大蒜",
        "story": "garlic = 大蒜"
      }
    },
    {
      "id": "3A_020",
      "word": "pepper",
      "phonetic": "/ˈpepər/",
      "translation": "胡椒粉",
      "image": "🌶️",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the pepper.",
          "zh": "我能看到胡椒粉。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：胡椒...",
        "image": "想象一个胡椒粉",
        "story": "pepper = 胡椒粉"
      }
    },
    {
      "id": "3A_021",
      "word": "salt",
      "phonetic": "/sɔːlt/",
      "translation": "盐",
      "image": "🧂",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the salt.",
          "zh": "我能看到盐。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：盐...",
        "image": "想象一个盐",
        "story": "salt = 盐"
      }
    },
    {
      "id": "3A_022",
      "word": "sugar",
      "phonetic": "/ˈʃʊɡər/",
      "translation": "糖",
      "image": "🍬",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the sugar.",
          "zh": "我能看到糖。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：糖...",
        "image": "想象一个糖",
        "story": "sugar = 糖"
      }
    },
    {
      "id": "3A_023",
      "word": "onion",
      "phonetic": "/ˈʌnjən/",
      "translation": "洋葱",
      "image": "🧅",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the onion.",
          "zh": "我能看到洋葱。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：洋葱...",
        "image": "想象一个洋葱",
        "story": "onion = 洋葱"
      }
    },
    {
      "id": "3A_024",
      "word": "cut",
      "phonetic": "/kʌt/",
      "translation": "切,砍",
      "image": "🔪",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the cut.",
          "zh": "我能看到切,砍。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：切,...",
        "image": "想象一个切,砍",
        "story": "cut = 切,砍"
      }
    },
    {
      "id": "3A_025",
      "word": "fork",
      "phonetic": "/fɔːrk/",
      "translation": "叉子",
      "image": "🍴",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the fork.",
          "zh": "我能看到叉子。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：叉子...",
        "image": "想象一个叉子",
        "story": "fork = 叉子"
      }
    },
    {
      "id": "3A_026",
      "word": "spoon",
      "phonetic": "/spuːn/",
      "translation": "勺子",
      "image": "🥄",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the spoon.",
          "zh": "我能看到勺子。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：勺子...",
        "image": "想象一个勺子",
        "story": "spoon = 勺子"
      }
    },
    {
      "id": "3A_027",
      "word": "chopsticks",
      "phonetic": "/ˈtʃɒpstɪks/",
      "translation": "筷子",
      "image": "🥢",
      "book": "3A",
      "examples": [
        {
          "en": "I can see the chopsticks.",
          "zh": "我能看到筷子。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：筷子...",
        "image": "想象一个筷子",
        "story": "chopsticks = 筷子"
      }
    }
  ],
  "3B": [
    {
      "id": "3B_001",
      "word": "surprised",
      "phonetic": "/sərˈpraɪzd/",
      "translation": "惊讶的",
      "image": "😲",
      "book": "3B",
      "examples": [
        {
          "en": "I can see the surprised.",
          "zh": "我能看到惊讶的。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：惊讶...",
        "image": "想象一个惊讶的",
        "story": "surprised = 惊讶的"
      }
    },
    {
      "id": "3B_002",
      "word": "scared",
      "phonetic": "/skerd/",
      "translation": "害怕的",
      "image": "😨",
      "book": "3B",
      "examples": [
        {
          "en": "I can see the scared.",
          "zh": "我能看到害怕的。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：害怕...",
        "image": "想象一个害怕的",
        "story": "scared = 害怕的"
      }
    },
    {
      "id": "3B_003",
      "word": "nap",
      "phonetic": "/næp/",
      "translation": "小睡",
      "image": "😴",
      "book": "3B",
      "examples": [
        {
          "en": "I can see the nap.",
          "zh": "我能看到小睡。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：小睡...",
        "image": "想象一个小睡",
        "story": "nap = 小睡"
      }
    },
    {
      "id": "3B_004",
      "word": "buffet",
      "phonetic": "/bəˈfeɪ/",
      "translation": "自助餐",
      "image": "🍽️",
      "book": "3B",
      "examples": [
        {
          "en": "I can see the buffet.",
          "zh": "我能看到自助餐。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：自助...",
        "image": "想象一个自助餐",
        "story": "buffet = 自助餐"
      }
    },
    {
      "id": "3B_005",
      "word": "relatives",
      "phonetic": "/ˈrelətɪvz/",
      "translation": "亲戚",
      "image": "👨‍👩‍👧",
      "book": "3B",
      "examples": [
        {
          "en": "I can see the relatives.",
          "zh": "我能看到亲戚。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：亲戚...",
        "image": "想象一个亲戚",
        "story": "relatives = 亲戚"
      }
    },
    {
      "id": "3B_006",
      "word": "carols",
      "phonetic": "/ˈkærəlz/",
      "translation": "圣诞颂歌",
      "image": "🎄",
      "book": "3B",
      "examples": [
        {
          "en": "I can see the carols.",
          "zh": "我能看到圣诞颂歌。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：圣诞...",
        "image": "想象一个圣诞颂歌",
        "story": "carols = 圣诞颂歌"
      }
    },
    {
      "id": "3B_007",
      "word": "towel",
      "phonetic": "/ˈtaʊəl/",
      "translation": "毛巾",
      "image": "🧴",
      "book": "3B",
      "examples": [
        {
          "en": "I can see the towel.",
          "zh": "我能看到毛巾。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：毛巾...",
        "image": "想象一个毛巾",
        "story": "towel = 毛巾"
      }
    },
    {
      "id": "3B_008",
      "word": "wallet",
      "phonetic": "/ˈwɒlɪt/",
      "translation": "钱包",
      "image": "👛",
      "book": "3B",
      "examples": [
        {
          "en": "I can see the wallet.",
          "zh": "我能看到钱包。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：钱包...",
        "image": "想象一个钱包",
        "story": "wallet = 钱包"
      }
    },
    {
      "id": "3B_009",
      "word": "purse",
      "phonetic": "/pɜːrs/",
      "translation": "小钱包",
      "image": "👛",
      "book": "3B",
      "examples": [
        {
          "en": "I can see the purse.",
          "zh": "我能看到小钱包。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：小钱...",
        "image": "想象一个小钱包",
        "story": "purse = 小钱包"
      }
    },
    {
      "id": "3B_010",
      "word": "General Studies",
      "phonetic": "/ˈdʒenrəl ˈstʌdiz/",
      "translation": "综合学科",
      "image": "📚",
      "book": "3B",
      "examples": [
        {
          "en": "I can see the General Studies.",
          "zh": "我能看到综合学科。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：综合...",
        "image": "想象一个综合学科",
        "story": "General Studies = 综合学科"
      }
    },
    {
      "id": "3B_011",
      "word": "Visual Arts",
      "phonetic": "/ˈvɪʒuəl ɑːrts/",
      "translation": "视觉艺术",
      "image": "📚",
      "book": "3B",
      "examples": [
        {
          "en": "I can see the Visual Arts.",
          "zh": "我能看到视觉艺术。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：视觉...",
        "image": "想象一个视觉艺术",
        "story": "Visual Arts = 视觉艺术"
      }
    },
    {
      "id": "3B_012",
      "word": "brave",
      "phonetic": "/breɪv/",
      "translation": "勇敢的",
      "image": "🦁",
      "book": "3B",
      "examples": [
        {
          "en": "I can see the brave.",
          "zh": "我能看到勇敢的。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：勇敢...",
        "image": "想象一个勇敢的",
        "story": "brave = 勇敢的"
      }
    },
    {
      "id": "3B_013",
      "word": "cheerful",
      "phonetic": "/ˈtʃɪrfl/",
      "translation": "快乐的",
      "image": "😊",
      "book": "3B",
      "examples": [
        {
          "en": "I can see the cheerful.",
          "zh": "我能看到快乐的。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：快乐...",
        "image": "想象一个快乐的",
        "story": "cheerful = 快乐的"
      }
    },
    {
      "id": "3B_014",
      "word": "gentle",
      "phonetic": "/ˈdʒentl/",
      "translation": "温柔的",
      "image": "🕊️",
      "book": "3B",
      "examples": [
        {
          "en": "I can see the gentle.",
          "zh": "我能看到温柔的。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：温柔...",
        "image": "想象一个温柔的",
        "story": "gentle = 温柔的"
      }
    },
    {
      "id": "3B_015",
      "word": "honest",
      "phonetic": "/ˈɒnɪst/",
      "translation": "诚实的",
      "image": "🤝",
      "book": "3B",
      "examples": [
        {
          "en": "I can see the honest.",
          "zh": "我能看到诚实的。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：诚实...",
        "image": "想象一个诚实的",
        "story": "honest = 诚实的"
      }
    },
    {
      "id": "3B_016",
      "word": "kind",
      "phonetic": "/kaɪnd/",
      "translation": "善良的,种类",
      "image": "💖",
      "book": "3B",
      "examples": [
        {
          "en": "I can see the kind.",
          "zh": "我能看到善良的,种类。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：善良...",
        "image": "想象一个善良的,种类",
        "story": "kind = 善良的,种类"
      }
    },
    {
      "id": "3B_017",
      "word": "professor",
      "phonetic": "/prəˈfesər/",
      "translation": "教授",
      "image": "👨‍🎓",
      "book": "3B",
      "examples": [
        {
          "en": "I can see the professor.",
          "zh": "我能看到教授。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：教授...",
        "image": "想象一个教授",
        "story": "professor = 教授"
      }
    },
    {
      "id": "3B_018",
      "word": "smart",
      "phonetic": "/smɑːrt/",
      "translation": "聪明的",
      "image": "🧠",
      "book": "3B",
      "examples": [
        {
          "en": "I can see the smart.",
          "zh": "我能看到聪明的。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：聪明...",
        "image": "想象一个聪明的",
        "story": "smart = 聪明的"
      }
    },
    {
      "id": "3B_019",
      "word": "wise",
      "phonetic": "/waɪz/",
      "translation": "明智的,有智慧的",
      "image": "🦉",
      "book": "3B",
      "examples": [
        {
          "en": "I can see the wise.",
          "zh": "我能看到明智的,有智慧的。"
        }
      ],
      "memoryTips": {
        "phonetic": "记住：明智...",
        "image": "想象一个明智的,有智慧的",
        "story": "wise = 明智的,有智慧的"
      }
    }
  ],
  "4A": [],
  "4B": [],
  "5A": [],
  "5B": []
};

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

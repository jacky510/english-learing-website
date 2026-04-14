# Longman Express 词汇学习平台 - SPEC.md

## 1. Concept & Vision

一个专为12岁孩子设计的英文词汇学习平台，融合科学记忆法与现代交互设计。以"探险之旅"为主题，让学习变成一场探索世界的冒险。界面温暖友好、充满童趣，通过图片、联想记忆和间隔重复算法，帮助孩子高效记住每个单词。

## 2. Design Language

### 美学方向
**童趣探险风格** - 结合插画风格与现代UI，使用圆润的形状、活泼的动画和明亮的色彩，营造轻松愉快的学习氛围。

### 色彩系统
```css
:root {
  --primary: #6C5CE7;        /* 主色 - 活力紫 */
  --secondary: #00B894;      /* 次色 - 清新绿 */
  --accent: #FDCB6E;         /* 强调色 - 阳光黄 */
  --danger: #FF6B6B;         /* 警告/错误 - 珊瑚红 */
  --background: #F8F9FE;     /* 背景 - 柔光白 */
  --surface: #FFFFFF;        /* 卡片背景 */
  --text-primary: #2D3436;   /* 主文字 */
  --text-secondary: #636E72; /* 次要文字 */
  --text-light: #B2BEC3;     /* 浅色文字 */
}
```

### 字体
- **标题**: "Nunito", "Comic Sans MS", sans-serif (圆润可爱)
- **正文**: "Quicksand", "Arial Rounded MT Bold", sans-serif (清晰易读)
- **单词**: "Fredoka One", cursive (记忆深刻)

### 空间系统
- 基础间距单位: 8px
- 卡片圆角: 16px-24px
- 按钮圆角: 12px (小), 20px (大)
- 阴影: 柔和的多层阴影，营造漂浮感

### 动画哲学
- **进入动画**: 弹性效果 (spring)，让元素有生命力
- **交互反馈**: 轻微缩放 + 颜色变化
- **进度动画**: 平滑流畅，展示成长
- **记忆卡片翻转**: 3D翻转效果，增加趣味性

### 视觉资源
- **图标**: Phosphor Icons (圆润风格)
- **图片**: Unsplash 教育类图片 + 自定义SVG插画
- **装饰元素**: 云朵、星星、彩虹等童趣元素

## 3. Layout & Structure

### 页面结构

#### 首页 (Landing)
- 顶部导航：Logo、书籍选择、学习进度入口
- 主视觉区域：欢迎语 + 学习角色（学习向导）
- 快速入口：继续学习 / 开始新学习
- 学习统计卡片：已学单词数、连续学习天数、掌握率

#### 书籍选择页 (Book Selection)
- 网格布局展示10本书
- 每本书显示封面、书名、单词数量、进度
- 按级别分组（Level 1-5）

#### 学习页面 (Learning)
- 左侧：单词卡片区（大卡片，包含图片、单词、音标）
- 右侧：详细信息（例句、联想记忆、相关词）
- 底部：操作按钮（认识/模糊/不认识 + 下一个）
- 顶部：当前进度条 + 书名

#### 复习页面 (Review)
- 间隔重复算法驱动的复习队列
- 简洁的测试界面
- 反馈即时可见

#### 单词本页面 (Word Book)
- 收藏的单词列表
- 按掌握程度分类
- 搜索和筛选功能

### 响应式策略
- 桌面优先，但完全支持平板和手机
- 学习卡片在小屏幕上自适应
- 触摸友好的按钮尺寸

## 4. Features & Interactions

### 核心功能

#### 4.1 词汇学习模块
- **单词卡片展示**
  - 正面：单词 + 图片 + 音标
  - 背面：中文释义 + 发音按钮
  - 点击/滑动翻转卡片

- **例句展示**
  - 英文原句（高亮目标单词）
  - 中文翻译
  - 点击单词可查看详情

- **联想记忆**
  - 谐音记忆法（如：apple → "爱泡"）
  - 图像联想（单词与图像的关联）
  - 词根词缀分析
  - 情境故事联想

#### 4.2 间隔重复系统 (Spaced Repetition)
- **SM-2 算法简化版**
  - 根据用户反馈调整复习间隔
  - 认识：1天后 → 3天 → 7天 → 14天 → 30天
  - 模糊：12小时后复习
  - 不认识：立即复习，间隔减半

#### 4.3 学习进度追踪
- 每日学习目标设定
- 连续学习天数统计
- 单词掌握度（0-100%）
- 可视化图表展示

#### 4.4 互动元素
- **发音功能**: 点击播放标准发音
- **收藏单词**: 标记需要重点记忆的单词
- **学习笔记**: 用户可添加个人记忆技巧

### 交互细节

#### 单词卡片
- **悬停**: 轻微上浮 + 阴影加深
- **点击**: 3D翻转显示背面
- **滑动(移动端)**: 左滑不认识，右滑认识

#### 按钮交互
- **悬停**: 背景色加深 + 轻微放大
- **点击**: 缩小效果 + 涟漪动画
- **禁用**: 降低透明度

#### 进度条
- 平滑动画过渡
- 完成时有庆祝动画

### 边界情况
- **无网络**: 使用本地缓存数据
- **空状态**: 友好的引导提示
- **加载中**: 骨架屏 + 动画

## 5. Component Inventory

### 5.1 WordCard (单词卡片)
```
状态: default, flipped, loading
内容: 单词, 音标, 图片, 中文释义
交互: 点击翻转, 点击发音
```

### 5.2 BookCard (书籍卡片)
```
状态: default, hover, selected, completed
内容: 封面图, 书名, 单词数, 进度条
交互: 点击选择, 悬停预览
```

### 5.3 ProgressRing (进度环)
```
状态: default, animating, completed
内容: 百分比, 环形进度
动画: 数值递增, 环形填充
```

### 5.4 ActionButton (操作按钮)
```
变体: primary, secondary, success, danger
状态: default, hover, active, disabled, loading
尺寸: small, medium, large
```

### 5.5 MemoryTip (记忆提示)
```
类型: phonetic(谐音), image(图像), root(词根), story(故事)
内容: 图标, 标题, 详细说明
样式: 彩色边框区分类型
```

### 5.6 SentenceDisplay (例句展示)
```
内容: 英文句, 中文翻译, 单词高亮
交互: 点击单词查看详情
```

### 5.7 NavigationBar (导航栏)
```
内容: Logo, 导航项, 用户进度入口
响应式: 桌面横排, 移动端汉堡菜单
```

### 5.8 StatsCard (统计卡片)
```
内容: 图标, 数值, 标签, 趋势指示
动画: 数值递增动画
```

## 6. Technical Approach

### 技术栈
- **前端**: 纯 HTML5 + CSS3 + Vanilla JavaScript
- **存储**: LocalStorage (本地数据持久化)
- **音频**: Web Speech API (发音功能)

### 数据结构

#### 单词数据模型
```javascript
{
  id: "word_001",
  word: "apple",
  phonetic: "/ˈæpl/",
  image: "apple.jpg",
  translation: "苹果",
  book: "1A",           // 所属书籍
  unit: 1,              // 单元
  examples: [
    {
      en: "I eat an apple every day.",
      zh: "我每天吃一个苹果。"
    }
  ],
  memoryTips: {
    phonetic: "谐音：爱泡（苹果泡在水里）",
    image: "想象一个红红的苹果",
    root: "ap- = 靠近, -ple 形状",
    story: "每天爱(ai)吃苹果(apple)"
  },
  // 学习记录
  stats: {
    timesReviewed: 0,
    timesCorrect: 0,
    nextReview: null,
    interval: 1,         // 当前间隔天数
    mastery: 0           // 掌握度 0-100
  }
}
```

#### 书籍数据模型
```javascript
{
  id: "1A",
  title: "Longman Express 1A",
  level: 1,
  unit: 8,               // 总单元数
  wordsCount: 120,
  words: ["word_001", "word_002", ...]
}
```

### LocalStorage 键
- `vocab_books`: 书籍列表缓存
- `vocab_words`: 单词数据缓存
- `vocab_progress`: 学习进度
- `vocab_user`: 用户设置

### 间隔重复算法
```javascript
function calculateNextReview(response, currentInterval) {
  if (response === 'correct') {
    return currentInterval * 2;  // 正确翻倍
  } else if (response === 'fuzzy') {
    return currentInterval * 0.5; // 模糊减半但不小于1
  } else {
    return 1;  // 不认识立即复习
  }
}
```

## 7. Longman Express 2nd Edition 内容大纲

### Level 1 (1A, 1B) - 基础词汇
- **1A**: 自我介绍、家庭、学校用品、颜色、数字、动物、食物、日常动词
- **1B**: 时间、月份、季节、天气、衣服、位置词、动作动词、简单形容词

### Level 2 (2A, 2B) - 日常生活
- **2A**: 房间家具、城市地点、交通工具、职业、日常活动
- **2B**: 爱好、运动、健康、节假日、购物、餐馆

### Level 3 (3A, 3B) - 进阶表达
- **3A**: 描述外貌、性格形容词、情感表达、自然环境
- **3B**: 科技、教育、阅读、电影音乐、职业发展

### Level 4 (4A, 4B) - 深度话题
- **4A**: 社会问题、环境、旅游探险
- **4B**: 文化差异、友谊关系、未来规划

### Level 5 (5A, 5B) - 高级应用
- **5A**: 媒体影响、科学技术、环境保护
- **5B**: 人生哲理、职业发展、社会责任

---

*每个级别约 80-120 个核心词汇，总计约 1000+ 词汇*

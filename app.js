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

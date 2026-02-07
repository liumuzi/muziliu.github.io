import { GameProject } from '@/types/content';

export const games: GameProject[] = [
  {
    id: 'dating-show',
    title: {
      zh: '我的恋综超失控',
      en: 'Love Mission 404',
    },
    subtitle: {
      zh: 'AI驱动的恋综游戏',
      en: 'AI-Driven Dating Show Game',
    },
    period: {
      zh: '2025.06 - 至今',
      en: '2025.06 - Present',
    },
    description: {
      zh: 'AI驱动的恋综修罗场：化身导演操控嘉宾，在不可控的即兴互动中制造“抓马”剧情，收割全网流量。负责核心程序实现，并参与所有游戏设计决策。',
      en: 'AI-driven dating-show mayhem: direct contestants and orchestrate improvised drama to fuel viral moments. Responsible for core programming and all game design decisions.',
    },
    achievements: [
      {
        zh: '荣获腾讯游戏创作大赛2025 AI玩法创作奖',
        en: 'Winner of Tencent Game Creation Competition 2025 AI Gameplay Innovation Award',
      },
    ],
    tags: ['Unity', 'C#', 'AI/LLM', 'Narrative'],
    status: {
      zh: '开发中',
      en: 'In Development',
    },
    image: '/images/games/dating-show.png',
  },
  {
    id: 'bug-decor',
    title: {
      zh: '虫虫家装',
      en: 'Bug Décor',
    },
    subtitle: {
      zh: '家装冒险游戏',
      en: 'Home Decoration Adventure',
    },
    period: {
      zh: '2025.12 - 至今',
      en: '2025.12 - Present',
    },
    description: {
      zh: '温情的装修冒险：在危险的丛林中搜集资源，为水獭家族等小动物装修梦想之家，建立跨种族的羁绊。负责核心程序，实现装修+搜打撤核心玩法并制作原型，组建六人团队并主导敏捷开发。',
      en: 'Heartwarming renovation adventure: gather resources in a dangerous forest to renovate dream homes for otter families and other animals, building cross-species bonds. Responsible for core programming and the decorate-plus-scavenge-and-retreat loop, built the prototype, formed a six-person team, and led agile delivery.',
    },
    tags: ['Unity', 'C#', 'Team Lead'],
    status: {
      zh: '开发中',
      en: 'In Development',
    },
    image: '/images/games/bug-decor.jpg',
    links: [],
  },
  {
    id: 'not-again-hero',
    title: {
      zh: 'Not Again, Hero',
      en: 'Not Again, Hero',
    },
    subtitle: {
      zh: '叙事解谜游戏',
      en: 'Narrative Puzzle Game',
    },
    period: {
      zh: '2025.07',
      en: '2025.07',
    },
    description: {
      zh: '童话风叙事解谜：重组剧情卡片，在无限循环的英雄剧本中寻找逃离幻想的真相。负责程序并独立设计核心叙事诡计。',
      en: 'Fairy-tale narrative puzzle: reassemble story cards to break out of an endlessly looping hero script and uncover the truth. Implemented programming and designed the central narrative twist.',
    },
    achievements: [
      {
        zh: 'GMTK2025 叙事性排名#141/9562（前1%）',
        en: 'GMTK2025 Narrative rank #141/9562 (top 1%)',
      },
    ],
    tags: ['Unity', 'C#', 'Game Jam', 'Narrative'],
    image: '/images/games/not-again-hero.png',
    links: [
      {
        label: {
          zh: 'itch.io',
          en: 'itch.io',
        },
        url: 'https://scheminghare.itch.io/not-again-hero',
      },
    ],
  },
  {
    id: 'error-guide',
    title: {
      zh: '报错漫游指南',
      en: 'Error Roaming Guide',
    },
    subtitle: {
      zh: '平台解谜游戏',
      en: 'Platform Puzzle Game',
    },
    period: {
      zh: '2025.10',
      en: '2025.10',
    },
    description: {
      zh: '平台跳跃解密：程序员半夜加班写代码竟然把自己写进电脑里了！？穿越Bug世界，修复代码逃出程序！',
      en: 'Platforming puzzle: a programmer codes late at night and gets trapped inside the computer; traverse the bug world and fix code to escape.',
    },
    achievements: [
      {
        zh: '55人下载试玩，评分10/10',
        en: '55 downloads, rating 10/10',
      },
    ],
    tags: ['Unity', 'C#', 'Puzzle', 'Meta'],
    image: '/images/games/error-guide.png',
    links: [
      {
        label: {
          zh: 'TapTap',
          en: 'TapTap',
        },
        url: 'https://www.taptap.cn/app/780672?os=pc',
      },
    ],
  },
  {
    id: 'farty-party',
    title: {
      zh: 'Farty Party',
      en: 'Farty Party',
    },
    subtitle: {
      zh: '派对对战游戏',
      en: 'Party Battle Game',
    },
    period: {
      zh: '2024.10 - 2025.02',
      en: '2024.10 - 2025.02',
    },
    description: {
      zh: '无厘头乱斗派对：上演“有屁快放”的抢食大战！利用连环屁、火箭屁轰飞对手，在混乱中争夺冠军。独立设计与开发，完成程序、美术、音效。',
      en: 'Absurd brawler party: chaotic food fight powered by chained and rocket farts to knock rivals away. Solo-created: design, code, art, and audio.',
    },
    tags: ['Unity', 'C#', 'Multiplayer', 'Solo Dev'],
    image: '/images/games/farty-party.png',
    links: [
      {
        label: {
          zh: 'itch.io',
          en: 'itch.io',
        },
        url: 'https://scheminghare.itch.io/farty-party',
      },
    ],
  },
];

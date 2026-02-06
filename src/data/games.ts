import { GameProject } from '@/types/content';

export const games: GameProject[] = [
  {
    id: 'dating-show',
    title: {
      zh: '我的恋综超失控',
      en: 'My Dating Show Is Out of Control',
    },
    subtitle: {
      zh: 'AI驱动的恋综游戏',
      en: 'AI-Driven Dating Show Game',
    },
    period: {
      zh: '2024.09 - 至今',
      en: '2024.09 - Present',
    },
    description: {
      zh: '一款创新的AI驱动恋爱综艺游戏，玩家作为节目导演，通过设计关卡和调整NPC性格，影响恋综走向。游戏采用LLM技术实现智能对话系统，让每个角色都拥有独特的性格和反应。',
      en: 'An innovative AI-driven dating show game where players act as the show director, designing challenges and adjusting NPC personalities to influence the show\'s direction. Features an LLM-powered dialogue system that gives each character unique personalities and reactions.',
    },
    achievements: [
      {
        zh: '荣获腾讯游戏大赛2025 AI玩法赛道奖项',
        en: 'Winner of Tencent Game Competition 2025 AI Gameplay Award',
      },
    ],
    tags: ['Unity', 'C#', 'AI/LLM', 'Dating Sim'],
    status: {
      zh: '开发中',
      en: 'In Development',
    },
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
      zh: '2024.10 - 2024.11',
      en: '2024.10 - 2024.11',
    },
    description: {
      zh: '一款温馨的家装冒险游戏，玩家扮演一只小虫子，通过收集材料和解谜来装饰自己的家。作为6人团队的制作人，负责整体项目管理、游戏设计和部分编程工作。',
      en: 'A cozy home decoration adventure where players control a little bug collecting materials and solving puzzles to decorate their home. Led a 6-person team as producer, overseeing project management, game design, and programming.',
    },
    tags: ['Unity', 'C#', 'Team Lead', 'Puzzle'],
    links: [
      {
        label: {
          zh: '游戏页面',
          en: 'Game Page',
        },
        url: 'https://itch.io/bug-decor',
      },
    ],
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
      zh: '2024.08',
      en: '2024.08',
    },
    description: {
      zh: '为GMTK Game Jam 2024创作的叙事解谜游戏。玩家扮演一位厌倦了重复拯救世界的英雄，通过打破常规和创造性思维解决谜题。游戏探讨了英雄疲劳和自我认知的主题。',
      en: 'A narrative puzzle game created for GMTK Game Jam 2024. Players control a hero tired of repeatedly saving the world, solving puzzles through unconventional thinking and creativity. Explores themes of hero fatigue and self-awareness.',
    },
    achievements: [
      {
        zh: 'GMTK2025 叙事排名前1%',
        en: 'Top 1% in Narrative Ranking at GMTK2025',
      },
    ],
    tags: ['Unity', 'C#', 'Game Jam', 'Narrative'],
    links: [
      {
        label: {
          zh: 'itch.io',
          en: 'itch.io',
        },
        url: 'https://itch.io/not-again-hero',
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
      zh: '2024.07',
      en: '2024.07',
    },
    description: {
      zh: '一款创意十足的平台解谜游戏，玩家需要利用游戏中的"错误"和"bug"来通关。游戏巧妙地将编程错误转化为游戏机制，提供独特的解谜体验。',
      en: 'A creative platform puzzle game where players must utilize in-game "errors" and "bugs" to progress. Cleverly transforms programming errors into game mechanics for a unique puzzle experience.',
    },
    achievements: [
      {
        zh: '55次下载，平均评分10/10',
        en: '55 downloads with 10/10 rating',
      },
    ],
    tags: ['Unity', 'C#', 'Puzzle', 'Meta'],
    links: [
      {
        label: {
          zh: 'itch.io',
          en: 'itch.io',
        },
        url: 'https://itch.io/error-guide',
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
      zh: '2024.06',
      en: '2024.06',
    },
    description: {
      zh: '一款搞笑的多人派对对战游戏，玩家通过独特的"放屁"机制进行竞技。作为独立开发者完成了游戏的全部设计、编程和美术工作。',
      en: 'A humorous multiplayer party battle game where players compete using unique "flatulence" mechanics. Solo developer responsible for all design, programming, and art.',
    },
    tags: ['Unity', 'C#', 'Multiplayer', 'Solo Dev'],
    links: [
      {
        label: {
          zh: 'itch.io',
          en: 'itch.io',
        },
        url: 'https://itch.io/farty-party',
      },
    ],
  },
];

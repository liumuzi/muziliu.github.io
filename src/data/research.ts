import { ResearchProject } from '@/types/content';

export const research: ResearchProject[] = [
  {
    id: 'lexicon-game',
    title: {
      zh: '基于强化学习的词汇协调游戏',
      en: 'Lexicon Coordination Game using Reinforcement Learning',
    },
    period: {
      zh: '2018.01 - 2019.07',
      en: '2018.01 - 2019.07',
    },
    institution: {
      zh: '香港中文大学',
      en: 'The Chinese University of Hong Kong',
    },
    description: {
      zh: '在语汇合作游戏中提出新的强化学习方法，发现网络中的局部语汇共识会阻碍整体语汇共识。',
      en: 'Proposed a new reinforcement learning approach for the lexicon coordination game and found local consensus in networks can hinder global consensus.',
    },
    links: [],
    publication: {
      title: {
        zh: 'Lexicon Coordination Game: A Study on Language Emergence using Reinforcement Learning',
        en: 'Lexicon Coordination Game: A Study on Language Emergence using Reinforcement Learning',
      },
      authors: 'Muzi Liu, Tianyou Li, Helen Meng',
      venue: {
        zh: '2020国际人工智能与软计算会议（ICAISC 2020）',
        en: 'International Conference on Artificial Intelligence and Soft Computing (ICAISC 2020)',
      },
      year: 2020,
      url: 'https://dl.acm.org/doi/abs/10.1007/978-3-030-61401-0_64',
    },
  },
  {
    id: 'eim',
    title: {
      zh: 'Exercise Is Medicine (EIM) 可穿戴设备位置检测',
      en: 'Exercise Is Medicine (EIM) - Wearable Position Detection',
    },
    period: {
      zh: '2019.05 - 2019.09',
      en: '2019.05 - 2019.09',
    },
    institution: {
      zh: '香港中文大学',
      en: 'The Chinese University of Hong Kong',
    },
    description: {
      zh: '训练LSTM神经网络检测运动手环佩戴位置，提升运动量估算的准确度。',
      en: 'Trained LSTM models to detect wearable placement and improve exercise volume estimation accuracy.',
    },
    links: [
      {
        label: {
          zh: '项目官网',
          en: 'Project Page',
        },
        url: 'http://www.eim.hk/',
      },
    ],
    achievements: [],
  },
  {
    id: 'funtomove',
    title: {
      zh: 'FunToMove @ JC 后端开发',
      en: 'FunToMove @ JC - Backend Development',
    },
    period: {
      zh: '2019.01 - 2019.07',
      en: '2019.01 - 2019.07',
    },
    institution: {
      zh: '香港中文大学',
      en: 'The Chinese University of Hong Kong',
    },
    description: {
      zh: '使用 TypeORM 和 MSSQL 数据库，开发后端 RESTful API。',
      en: 'Built RESTful APIs with TypeORM and MSSQL.',
    },
    links: [
      {
        label: {
          zh: '项目官网',
          en: 'Project Page',
        },
        url: 'https://funtomove-jc.hk/zh/',
      },
    ],
  },
];

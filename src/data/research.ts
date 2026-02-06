import { ResearchProject } from '@/types/content';

export const research: ResearchProject[] = [
  {
    id: 'lexicon-game',
    title: {
      zh: '基于强化学习的词汇协调游戏',
      en: 'Lexicon Coordination Game using Reinforcement Learning',
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
      zh: '研究多智能体系统中的语言涌现问题，使用强化学习方法训练智能体在协调游戏中发展出共享的词汇系统。探索了不同网络结构和奖励机制对语言形成的影响。',
      en: 'Investigated language emergence in multi-agent systems, using reinforcement learning to train agents to develop shared lexicon in coordination games. Explored the impact of different network architectures and reward mechanisms on language formation.',
    },
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
      url: 'https://link.springer.com/chapter/10.1007/978-3-030-61401-0_52',
    },
  },
  {
    id: 'eim',
    title: {
      zh: 'Exercise Is Medicine (EIM) 可穿戴设备位置检测',
      en: 'Exercise Is Medicine (EIM) - Wearable Position Detection',
    },
    period: {
      zh: '2018.09 - 2019.06',
      en: '2018.09 - 2019.06',
    },
    institution: {
      zh: '香港中文大学',
      en: 'The Chinese University of Hong Kong',
    },
    description: {
      zh: '开发基于LSTM的深度学习模型，用于识别可穿戴传感器的佩戴位置。处理加速度计和陀螺仪数据，实现高精度的位置分类，为运动健康监测提供技术支持。',
      en: 'Developed LSTM-based deep learning models to identify wearable sensor placement positions. Processed accelerometer and gyroscope data to achieve high-accuracy position classification, supporting exercise and health monitoring applications.',
    },
    achievements: [
      {
        zh: '位置识别准确率达到92%以上',
        en: 'Achieved 92%+ accuracy in position recognition',
      },
    ],
  },
  {
    id: 'funtomove',
    title: {
      zh: 'FunToMove @ JC 后端开发',
      en: 'FunToMove @ JC - Backend Development',
    },
    period: {
      zh: '2018.01 - 2018.12',
      en: '2018.01 - 2018.12',
    },
    institution: {
      zh: '香港中文大学',
      en: 'The Chinese University of Hong Kong',
    },
    description: {
      zh: '为运动健康应用开发RESTful API后端服务，负责数据库设计、用户认证、数据分析等核心功能。使用Python Flask框架构建高性能的API服务。',
      en: 'Developed RESTful API backend for fitness and health application, responsible for database design, user authentication, and data analytics. Built high-performance API services using Python Flask framework.',
    },
  },
];

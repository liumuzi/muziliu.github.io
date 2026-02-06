import { SkillCategory } from '@/types/content';

export const skills: SkillCategory[] = [
  {
    id: 'programming',
    category: {
      zh: '编程语言',
      en: 'Programming Languages',
    },
    skills: [
      { zh: 'C# (Unity)', en: 'C# (Unity)' },
      { zh: 'Python', en: 'Python' },
      { zh: 'C/C++', en: 'C/C++' },
      { zh: 'Java', en: 'Java' },
      { zh: 'TypeScript', en: 'TypeScript' },
    ],
  },
  {
    id: 'ai-ml',
    category: {
      zh: 'AI/机器学习',
      en: 'AI/Machine Learning',
    },
    skills: [
      { zh: '强化学习', en: 'Reinforcement Learning' },
      { zh: '语音识别', en: 'Speech Recognition' },
      { zh: '情感识别', en: 'Emotion Recognition' },
      { zh: '动画生成', en: 'Animation Generation' },
      { zh: 'LLM应用', en: 'LLM Applications' },
    ],
  },
  {
    id: 'game-dev',
    category: {
      zh: '游戏开发',
      en: 'Game Development',
    },
    skills: [
      { zh: 'Unity引擎', en: 'Unity Engine' },
      { zh: '游戏设计', en: 'Game Design' },
      { zh: '关卡设计', en: 'Level Design' },
      { zh: '游戏机制', en: 'Game Mechanics' },
      { zh: '项目管理', en: 'Project Management' },
    ],
  },
  {
    id: 'engineering',
    category: {
      zh: '工程能力',
      en: 'Engineering',
    },
    skills: [
      { zh: '模型训练', en: 'Model Training' },
      { zh: '数据管道', en: 'Data Pipelines' },
      { zh: '服务部署', en: 'Service Deployment' },
      { zh: '数据库设计', en: 'Database Design' },
      { zh: 'RESTful API', en: 'RESTful API' },
    ],
  },
  {
    id: 'languages',
    category: {
      zh: '语言能力',
      en: 'Languages',
    },
    skills: [
      { zh: '中文（母语）', en: 'Mandarin (Native)' },
      { zh: '粤语（基础）', en: 'Cantonese (Basic)' },
      { zh: '英语（托福106）', en: 'English (TOEFL 106)' },
      { zh: '日语（基础）', en: 'Japanese (Basic)' },
    ],
  },
];

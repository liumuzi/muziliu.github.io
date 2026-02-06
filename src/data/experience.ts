import { ExperienceItem } from '@/types/content';

export const experience: ExperienceItem[] = [
  {
    id: 'mihoyo',
    company: {
      zh: '米哈游',
      en: 'miHoYo',
    },
    role: {
      zh: '图形算法工程师',
      en: 'Graphics Algorithm Engineer',
    },
    period: {
      zh: '2021.02 - 2024.09',
      en: '2021.02 - 2024.09',
    },
    location: {
      zh: '上海',
      en: 'Shanghai',
    },
    projects: [
      {
        title: {
          zh: '口型动画算法',
          en: 'Lip-Sync Animation Algorithm',
        },
        description: {
          zh: '基于Kaldi语音识别框架开发了自动口型生成系统，应用于《原神》等游戏项目。系统实现了从音频到动画的完整pipeline，大幅提升了动画制作效率。',
          en: 'Developed an automatic lip-sync generation system based on Kaldi speech recognition framework, deployed in Genshin Impact and other projects. Implemented a complete audio-to-animation pipeline that significantly improved animation production efficiency.',
        },
        achievements: [
          {
            zh: '实现90%以上的自动化率，应用于《原神》多个版本',
            en: 'Achieved 90%+ automation rate, deployed across multiple Genshin Impact versions',
          },
          {
            zh: '支持中文、英文、日文、韩文多语言口型生成',
            en: 'Supports multi-language lip-sync generation (Chinese, English, Japanese, Korean)',
          },
        ],
      },
      {
        title: {
          zh: '表情生成算法',
          en: 'Facial Expression Generation',
        },
        description: {
          zh: '开发了基于音频情感识别的表情生成系统，自动分析语音情感并生成对应的角色表情动画。结合深度学习和传统信号处理技术，实现了高质量的表情动画生成。',
          en: 'Developed an emotion recognition-based facial expression generation system that automatically analyzes speech emotions and generates corresponding character expressions. Combined deep learning with traditional signal processing for high-quality animation generation.',
        },
        achievements: [
          {
            zh: '提升表情动画制作效率50%以上',
            en: 'Improved expression animation production efficiency by over 50%',
          },
        ],
      },
      {
        title: {
          zh: '动作匹配算法',
          en: 'Motion Matching Algorithm',
        },
        description: {
          zh: '研发基于LLM的动作标签系统，实现智能动作检索和匹配。通过自然语言描述快速查找和匹配动画资产，大幅提升动画师工作效率。',
          en: 'Developed an LLM-based action tagging system for intelligent motion retrieval and matching. Enabled quick animation asset search and matching through natural language descriptions, significantly improving animator productivity.',
        },
        achievements: [
          {
            zh: '动作检索准确率达到85%以上',
            en: 'Achieved 85%+ accuracy in motion retrieval',
          },
        ],
      },
    ],
  },
  {
    id: 'tencent',
    company: {
      zh: '腾讯光子工作室',
      en: 'Tencent Photon Studio',
    },
    role: {
      zh: '算法实习生',
      en: 'Algorithm Research Intern',
    },
    period: {
      zh: '2020.06 - 2020.08',
      en: '2020.06 - 2020.08',
    },
    location: {
      zh: '深圳',
      en: 'Shenzhen',
    },
    projects: [
      {
        title: {
          zh: '《英雄联盟手游》NPC算法',
          en: 'League of Legends Mobile NPC Algorithm',
        },
        description: {
          zh: '参与《英雄联盟手游》的NPC智能算法开发，基于OpenAI Five的PPO算法实现游戏AI。负责训练环境搭建、奖励函数设计和模型训练优化。',
          en: 'Contributed to NPC AI algorithm development for League of Legends Mobile, implementing game AI based on OpenAI Five\'s PPO algorithm. Responsible for training environment setup, reward function design, and model training optimization.',
        },
        achievements: [
          {
            zh: '实现了基础的5v5对战AI原型',
            en: 'Implemented prototype for 5v5 battle AI',
          },
        ],
      },
    ],
  },
];

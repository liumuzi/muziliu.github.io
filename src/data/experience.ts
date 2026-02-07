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
          zh: '维护人声学到口型的Kaldi管线：配音转文字与音素时长对齐，后处理后驱动口型blendshape，支持多语言口型生成。',
          en: 'Maintained a Kaldi-based pipeline from speech to lip shapes: speech-to-text with phoneme alignment, post-processing to drive blendshapes, supporting multiple languages.',
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
          zh: '基于模型完成语音情绪识别，并与动画师协作按音频区间生成表情动画。独立负责情绪识别模块和标签体系优化，参与动画生成工程实现规则化pose排布。',
          en: 'Built speech emotion recognition and collaborated with animators to generate expressions by audio segments. Owned emotion module and label scheme refinement; contributed to rule-based pose layout for animation generation.',
        },
        achievements: [],
      },
      {
        title: {
          zh: '动作匹配算法',
          en: 'Motion Matching Algorithm',
        },
        description: {
          zh: '基于LLM为台词生成动作标签，构建台词-动作自动匹配流程；收集数据并调优prompt，提升标签一致性，减少策划配置剧情动画的工作量。',
          en: 'Generated action tags from lines using LLMs and built automatic line-to-action matching; gathered data and tuned prompts to improve consistency and reduce planners’ workload.',
        },
        achievements: [],
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
          zh: '主导搭建监督学习训练流程，复现OpenAI Five核心方法；完善MOBA Demo训练环境，丰富对战场景支持Agent训练；使用PPO训练并调优智能体。',
          en: 'Led supervised training pipeline reproducing OpenAI Five methods; enhanced MOBA demo environment with varied battle scenarios; trained and tuned agents with PPO.',
        },
        achievements: [],
      },
    ],
  },
];

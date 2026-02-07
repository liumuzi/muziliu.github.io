export interface BilingualText {
  zh: string;
  en: string;
}

export interface GameProject {
  id: string;
  title: BilingualText;
  subtitle: BilingualText;
  period: BilingualText;
  description: BilingualText;
  achievements?: BilingualText[];
  tags: string[];
  links?: {
    label: BilingualText;
    url: string;
  }[];
  image?: string;
  status?: BilingualText;
  socialMetrics?: {
    platform: BilingualText;
    views: BilingualText;
    likes: BilingualText;
    saves: BilingualText;
    followers: BilingualText;
  };
}

export interface ExperienceItem {
  id: string;
  company: BilingualText;
  role: BilingualText;
  period: BilingualText;
  location?: BilingualText;
  projects: {
    title: BilingualText;
    description: BilingualText;
    achievements?: BilingualText[];
  }[];
  logo?: string;
}

export interface ResearchProject {
  id: string;
  title: BilingualText;
  period: BilingualText;
  institution: BilingualText;
  description: BilingualText;
  links?: {
    label: BilingualText;
    url: string;
  }[];
  achievements?: BilingualText[];
  publication?: {
    title: BilingualText;
    authors: string;
    venue: BilingualText;
    year: number;
    url?: string;
  };
}

export interface SkillCategory {
  id: string;
  category: BilingualText;
  skills: BilingualText[];
}

export interface PersonalInfo {
  name: BilingualText;
  title: BilingualText;
  bio: BilingualText;
  email: string;
  phone: string;
  location: BilingualText;
  links: {
    label: string;
    url: string;
    icon?: string;
  }[];
}

export type Language = 'zh' | 'en';

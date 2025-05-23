export interface LinkInfo {
  name: string;
  link: string;
  target: string;
  rel: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
}

export interface BlogPostData {
  content: string;
  title: string;
  date: string;
}

export interface EducationInfo {
  institution: string;
  degree: string;
  location: string;
  when: string;
  GPA?: string;
  relevantCourses?: string[];
  logo?: string;
}

export interface ExperienceInfo {
  company: string;
  role: string;
  location: string;
  when: string;
  responsibilities: string[];
  logo?: string;
  subgroup?: string;
  website?: string;
  current?: boolean;
}

export interface ProjectInfo {
  title: string;
  blurp: string;
  description: string;
  tools: string[];
  github?: string;
  website?: string;
  logo?: string;
}

export interface TalkInfo {
  title: string;
  venue: string;
  date: string;
  description?: string;
  link?: string;
}

export interface AwardInfo {
  item: string;
  issuer: string;
  year: number;
  description: string;
  extra?: string;
  link?: string;
} 
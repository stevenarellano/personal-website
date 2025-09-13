export interface LinkInfo {
  name: string;
  link: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
}

export interface EducationInfo {
  institution: string;
  logo?: string;
  degree: string;
  location: string;
  relevantCourses: string[];
  GPA?: string;
  when: string;
}

export interface TalkInfo {
  title: string;
  description: string;
  venue: string;
  date: string;
  link?: string;
}

export interface ArtifactInfo {
  title: string;
  description: string;
  type: 'blog' | 'github' | 'other';
  url: string;
}


export interface ExperienceInfo {
  company: string;
  subgroup?: string;
  role: string;
  location: string;
  responsibilities: string[];
  when: string;
  logo?: string;
  subtitle?: string;
  current?: boolean;
  website?: string;
}

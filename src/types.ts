export interface LinkInfo {
  name: string;
  link: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode; // Optional: if you want to add icons later
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
  link?: string; // Added optional link
}


export interface ExperienceInfo {
  company: string;
  subgroup?: string;
  role: string;
  location: string;
  responsibilities: string[];
  when: string;
  logo?: string; // Made optional as some might not have it
  subtitle?: string;
  current?: boolean;
  website?: string;
}

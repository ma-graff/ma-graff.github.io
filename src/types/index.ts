export type ExperienceType = 'work' | 'project' | 'education';

export interface Experience {
  id: string;
  type: ExperienceType;
  title: string;
  company: string;
  location?: string;
  date: string;
  tags: string[];
  description: string;
  highlights?: string[];
  link?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export type TagType =
  | 'geospatial'
  | 'cloud'
  | 'frontend'
  | 'backend'
  | 'fullstack'
  | 'data';

export const AVAILABLE_TAGS: TagType[] = [
  'geospatial',
  'cloud',
  'frontend',
  'backend',
  'fullstack',
  'data'
];

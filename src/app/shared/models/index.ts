export interface Program {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProgramCategory;
  description: string;
  image: string;
  icon: string;
  duration: string;
  level: string;
  outcomes: string[];
  modules: ProgramModule[];
  objectives: string[];
  resourcesIncluded: string[];
  certification: string;
  faq: FAQ[];
  featured: boolean;
}

export interface ProgramModule {
  title: string;
  description: string;
  topics: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export type ProgramCategory =
  | 'teacher-training'
  | 'workshops'
  | 'student-programs'
  | 'innovation-labs'
  | 'ai-programs';

export interface Resource {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ResourceCategory;
  tags: string[];
  thumbnail: string;
  previewUrl?: string;
  downloadUrl?: string;
  author: string;
  publishedDate: string;
  featured: boolean;
}

export type ResourceCategory =
  | 'books'
  | 'teacher-manuals'
  | 'student-workbooks'
  | 'answer-keys'
  | 'presentations'
  | 'videos'
  | 'external-resources'
  | 'downloads';

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  images: string[];
  technologies: string[];
  learningOutcomes: string[];
  featured: boolean;
  status?: 'active' | 'upcoming' | 'pilot';
}

export type ProjectCategory =
  | 'ai'
  | 'programming'
  | 'electronics'
  | 'arduino'
  | 'iot'
  | 'robotics';

export interface Leader {
  id: string;
  name: string;
  designation: string;
  shortIntro: string;
  biography: string;
  vision: string;
  expertise: string[];
  contributions: string[];
  image: string;
  order: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  institution: string;
  image?: string;
  rating?: number;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  type: 'school' | 'college' | 'organization' | 'collaborator';
  website?: string;
}

export interface Metric {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  description?: string;
}

export type GalleryCategory =
  | 'trainings'
  | 'workshops'
  | 'events'
  | 'projects';

export interface Domain {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  link: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface LearningStage {
  stage: string;
  description: string;
  programs: string[];
  icon: string;
}

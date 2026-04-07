export interface SkillInfo {
  name: string;
  src: string;
  type: "Dev" | "Design" | "Collab";
}

export interface Ability {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
}

export interface CareerProject {
  id: number;
  title: string;
  date?: string;
  description: string[];
  skills?: string[];
  link?: string;
  type?: "dev" | "branding" | "contents";
}

export interface CareerEntry {
  id: string;
  companyName: string;
  period: string;
  role: string;
  position: string;
  hasTabs: boolean;
  projects: CareerProject[];
}

export interface DetailProject {
  id: number;
  imgUrl: string;
  label: string;
  title: string;
  description: string;
  skills: string[];
  link: string;
  isLive: boolean;
}

export interface EducationContent {
  id: number;
  title: string;
  date: string;
  state: string;
  position?: string;
  description?: string;
}

export interface EducationGroup {
  topic: string;
  contents: EducationContent[];
}

export interface DesignBookItem {
  id: number;
  link: string;
  imgUrl: string;
  device: string;
  title: string;
  date: string;
  skills: string[];
}

export interface NavItem {
  id: string;
  label: string;
}

export interface CategoryTab {
  id: string;
  label: string;
}

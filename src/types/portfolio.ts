export type SocialLink = {
  label: string;
  href: string;
};

export type HeroContent = {
  name: string;
  role: string;
  intro: string;
  location: string;
  availability: string;
};

export type AboutContent = {
  title: string;
  description: string[];
  highlights: string[];
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: "frontend" | "fullstack" | "ui-engineering";
  image: string;
  liveDemo?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  achievements: string[];
};

export type ContactInfo = {
  email: string;
  phone: string;
  location: string;
  resumePath: string;
};

// Tipos principales de la aplicación

export interface Program {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  targetAudience: string;
  image: string;
  activities: string[];
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  quote: string;
  date?: string;
  image: string;
  videoUrl?: string;
}

export interface Principle {
  id: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
}

export interface SupportWay {
  id: string;
  title: string;
  description: string;
  details?: string[];
  icon?: string;
}

export interface Contact {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  instagram: string;
  facebook: string;
}

export interface ImpactMetric {
  label: string;
  value: string;
  description: string;
  year: number;
  historical?: boolean;
}

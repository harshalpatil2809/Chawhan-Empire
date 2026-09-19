export type ProjectCategory =
  | 'Residential'
  | 'Commercial'
  | 'Renovation'
  | 'Interior'
  | 'Turnkey';

export type ProjectStatus = 'Completed' | 'Ongoing';

export interface ProjectImage {
  url: string;
  alt: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  published: boolean;
  summary: string;
  description: string;
  completionDate: string;
  size: string;
  duration: string;
  client: string;
  coverImage: string;
  images: ProjectImage[];
  beforeImages: ProjectImage[];
  afterImages: ProjectImage[];
  scope: string[];
  highlights: string[];
  createdAt: string;
}

export type ProjectDraft = Omit<Project, 'id' | 'slug' | 'createdAt'>;

export type EnquiryStatus =
  | 'New'
  | 'Contacted'
  | 'In Discussion'
  | 'Converted'
  | 'Closed';

export type ProjectType =
  | 'New Construction'
  | 'Renovation'
  | 'Commercial'
  | 'Residential'
  | 'Interior'
  | 'Other';

export type PropertyType =
  | 'Plot / Land'
  | 'Apartment'
  | 'Villa / Bungalow'
  | 'Office'
  | 'Retail Space'
  | 'Other';

export type BudgetBand =
  | 'Under Rs. 10 Lakhs'
  | 'Rs. 10-25 Lakhs'
  | 'Rs. 25-50 Lakhs'
  | 'Rs. 50 Lakhs - Rs. 1 Crore'
  | 'Rs. 1 Crore+';

export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  projectType: ProjectType;
  propertyType: PropertyType;
  budget: BudgetBand;
  startDate: string;
  message: string;
  attachments: string[];
  status: EnquiryStatus;
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  createdAt: string;
}

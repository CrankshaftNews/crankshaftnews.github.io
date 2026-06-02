export interface Offering {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  status: "live" | "beta" | "coming-soon";
}

export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  authors: string[];
  year: number;
  href?: string;
  tags: string[];
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

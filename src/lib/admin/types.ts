export interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  slug: string;
  content?: string;
  published: boolean;
}

export interface SiteSettings {
  title: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  metaKeywords: string;
}

export interface AdminStats {
  totalNews: number;
  publishedNews: number;
  totalProducts: number;
  totalSolutions: number;
}

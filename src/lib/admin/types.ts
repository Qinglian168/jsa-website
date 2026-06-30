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

export interface ProductCategory {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  bannerImage: string;
  brands: string[];
  products: ProductItem[];
  faqs: FAQItem[];
  schemaDescription: string;
  published: boolean;
}

export interface ProductItem {
  id: string;
  name: string;
  series: string;
  desc: string;
  features: string[];
}

export interface FAQItem {
  q: string;
  a: string;
}

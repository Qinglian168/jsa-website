import type { NewsItem, SiteSettings } from "./types";

export const INITIAL_NEWS: NewsItem[] = [
  {
    id: "1",
    date: "June 27, 2026",
    title: "AI-Native Enterprise Infrastructure 2026: Cisco-NVIDIA AI Factory, Huawei Xinghe Campus, and Smart Collaboration Revolution",
    excerpt: "From Cisco's 102.4 Tbps Secure AI Factory with NVIDIA Vera Rubin to Huawei's 4th consecutive Gartner Leader recognition, H3C's Agentic AI-Defined Network, and Yealink's AI-powered MeetingBar A50 — discover the 2026 innovations reshaping enterprise networking, security, and collaboration.",
    slug: "ai-native-enterprise-infrastructure-2026",
    published: true,
  },
  {
    id: "2",
    date: "June 12, 2026",
    title: "AI-Ready Enterprise Networking in 2026: Cisco, Fortinet, and Huawei Lead the Infrastructure Revolution",
    excerpt: "From Cisco's 102.4 Tbps Silicon One G300 and Fortinet's AI-native FortiGate G Series to Huawei's Wi-Fi 7 breakthroughs — discover the technologies reshaping enterprise networking and how to prepare your infrastructure for AI workloads.",
    slug: "ai-ready-enterprise-networking-2026",
    published: true,
  },
];

export const INITIAL_SITE_SETTINGS: SiteSettings = {
  title: "JSA Solution - Network Equipment Distributor & Smart Office Solutions",
  description: "JSA Solution is a leading network communication equipment distributor in China since 2010.",
  phone: "+86-18929367032",
  email: "info@jsasolution.com",
  address: "Floor 6, Bldg. B, Bantian International Center, No. 5, South Huancheng Road, Bantian Street, Longgang District, Shenzhen, China",
  metaKeywords: "network equipment distributor, Cisco distributor, Huawei distributor, H3C distributor",
};

const NEWS_STORAGE_KEY = "jsa_admin_news";
const SETTINGS_STORAGE_KEY = "jsa_admin_settings";

export function loadNews(): NewsItem[] {
  if (typeof window === "undefined") return INITIAL_NEWS;
  try {
    const stored = localStorage.getItem(NEWS_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error("Failed to load news from localStorage", e);
  }
  return INITIAL_NEWS;
}

export function saveNews(news: NewsItem[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(NEWS_STORAGE_KEY, JSON.stringify(news));
  } catch (e) {
    console.error("Failed to save news to localStorage", e);
  }
}

export function loadSettings(): SiteSettings {
  if (typeof window === "undefined") return INITIAL_SITE_SETTINGS;
  try {
    const stored = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error("Failed to load settings from localStorage", e);
  }
  return INITIAL_SITE_SETTINGS;
}

export function saveSettings(settings: SiteSettings): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error("Failed to save settings to localStorage", e);
  }
}

export function generateNewsCode(news: NewsItem[]): string {
  const items = news.map((item) => ({
    date: item.date,
    title: item.title,
    excerpt: item.excerpt,
    slug: item.slug,
  }));

  return `const newsItems = ${JSON.stringify(items, null, 2)};`;
}

export function generateNewsPageCode(news: NewsItem[]): string {
  const published = news.filter((n) => n.published);
  const itemsCode = published
    .map(
      (item) => `  {
    date: "${item.date}",
    title: "${item.title.replace(/"/g, '\\"')}",
    excerpt: "${item.excerpt.replace(/"/g, '\\"')}",
    slug: "${item.slug}",
  }`
    )
    .join(",\n");

  return `const newsItems = [\n${itemsCode}\n];`;
}

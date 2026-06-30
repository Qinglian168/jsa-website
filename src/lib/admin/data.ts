import type { NewsItem, SiteSettings, ProductCategory } from "./types";

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
const PRODUCTS_STORAGE_KEY = "jsa_admin_products";

export const INITIAL_PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "1",
    title: "Network Switches",
    slug: "switches",
    description: "Enterprise-grade switches for access, aggregation, and core layers.",
    icon: "🔀",
    color: "from-blue-500 to-indigo-600",
    bannerImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80",
    brands: ["Cisco", "Huawei", "H3C", "Ruijie", "Juniper", "Aruba", "Ubiquiti", "Dell"],
    products: [
      { id: "p1", name: "Cisco Catalyst 9300 Series", series: "Cisco", desc: "Modular access switches with StackWise-480, UADP 3.0 ASIC, and full PoE+ support.", features: ["StackWise-480", "UADP 3.0 ASIC", "PoE+ / UPOE", "Cisco DNA Center ready"] },
      { id: "p2", name: "Huawei CloudEngine S5731-H Series", series: "Huawei", desc: "Next-gen campus access switches with built-in AIOps, 802.3bt PoE++. ", features: ["AIOps built-in", "802.3bt PoE++", "Multi-gigabit", "VXLAN/EVPN"] },
      { id: "p3", name: "H3C S6850 Data Center Switch", series: "H3C", desc: "High-density 10G/25G/100G data center ToR switch.", features: ["25G/100G ports", "Comware V9", "DRNI", "Telemetry streaming"] },
      { id: "p4", name: "Ruijie RG-S2910 Series", series: "Ruijie", desc: "Cost-effective access switches with 10G uplinks.", features: ["10G uplinks", "PoE+ models", "IPv6 ready", "Energy efficient"] },
    ],
    faqs: [
      { q: "What is the difference between Layer 2 and Layer 3 switches?", a: "Layer 2 switches forward traffic based on MAC addresses. Layer 3 switches can route traffic between VLANs using IP addresses." },
      { q: "Do you provide PoE switches for IP cameras and APs?", a: "Yes, we supply PoE, PoE+, and PoE++ switches." },
    ],
    schemaDescription: "Enterprise network switches from Cisco, Huawei, H3C, Ruijie.",
    published: true,
  },
  {
    id: "2",
    title: "Network Firewalls",
    slug: "firewalls",
    description: "Next-generation firewalls with AI-powered threat detection and SD-WAN.",
    icon: "🔒",
    color: "from-rose-500 to-red-600",
    bannerImage: "https://images.unsplash.com/photo-1563986768499-57a975944831?w=1920&q=80",
    brands: ["Fortinet", "Hillstone", "Sangfor", "Cisco", "Huawei", "Juniper", "Palo Alto"],
    products: [
      { id: "p5", name: "Fortinet FortiGate 600F Series", series: "Fortinet", desc: "Mid-range NGFW with FortiASIC NP7 and integrated SD-WAN.", features: ["FortiASIC NP7", "10G ready", "SD-WAN built-in", "FortiGuard AI"] },
      { id: "p6", name: "Hillstone A-Series NGFW", series: "Hillstone", desc: "High-performance NGFW with AI-driven threat intelligence.", features: ["AI threat intel", "Cloud sandbox", "SSL inspection", "High availability"] },
      { id: "p7", name: "Sangfor NGAF", series: "Sangfor", desc: "Integrated NGFW + WAF + IPS in one appliance.", features: ["NGFW + WAF + IPS", "Local support", "Affordable pricing", "Chinese interface"] },
    ],
    faqs: [
      { q: "What is the difference between NGFW and traditional firewall?", a: "NGFW adds application awareness, intrusion prevention (IPS), user identity integration, and often includes WAF, VPN, and SD-WAN." },
    ],
    schemaDescription: "Network firewalls from Fortinet, Hillstone, Sangfor, Cisco, Huawei.",
    published: true,
  },
  {
    id: "3",
    title: "Enterprise Routers",
    slug: "routers",
    description: "Branch, edge, and core routers for enterprise WAN, SD-WAN, and service provider networks.",
    icon: "🌐",
    color: "from-sky-500 to-blue-600",
    bannerImage: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1920&q=80",
    brands: ["Cisco", "Huawei", "H3C", "Juniper", "Ruijie", "MikroTik", "Dell"],
    products: [
      { id: "p8", name: "Cisco Catalyst 8300 Series", series: "Cisco", desc: "SD-WAN ready edge routers with integrated security.", features: ["SD-WAN built-in", "5G / Wi-Fi 6", "Integrated security", "Cisco IOS XE"] },
      { id: "p9", name: "Huawei NetEngine AR Series", series: "Huawei", desc: "All-in-one branch routers with routing, switching, security, and Wi-Fi.", features: ["All-in-one", "SD-WAN ready", "OVPN support", "High reliability"] },
      { id: "p10", name: "H3C MSR Series", series: "H3C", desc: "Comware-based multi-service routers for enterprise branches.", features: ["Comware OS", "Rich interfaces", "VPN ready", "Energy efficient"] },
    ],
    faqs: [
      { q: "What is SD-WAN?", a: "SD-WAN optimizes WAN traffic using application-aware routing. Cisco, Huawei, and H3C routers all support SD-WAN deployment." },
    ],
    schemaDescription: "Enterprise routers from Cisco, Huawei, H3C, Juniper.",
    published: true,
  },
  {
    id: "4",
    title: "Unified Communications",
    slug: "unified-communications",
    description: "Complete UC solutions: IP PBX, IP phones, video conferencing, and collaboration.",
    icon: "📞",
    color: "from-emerald-500 to-teal-600",
    bannerImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80",
    brands: ["Yealink", "Poly", "MAXHUB", "Horion", "Logitech", "BARCO", "Jabra", "Grandstream", "Yeastar", "Avaya", "Unify"],
    products: [
      { id: "p11", name: "Yealink T5 Series IP Phones", series: "Yealink", desc: "Android-based IP phones with 5-inch touchscreen and Wi-Fi 6.", features: ["Android OS", "5-inch touchscreen", "Wi-Fi 6 / BT 5.0", "Optima HD voice"] },
      { id: "p12", name: "Poly Studio X Series", series: "Poly", desc: "All-in-one video bars for huddle and mid-size meeting rooms.", features: ["All-in-one design", "AI camera tracking", "NoiseBlock AI", "Zoom/Teams certified"] },
      { id: "p13", name: "Horion Smart Tablets & Podium", series: "Horion", desc: "Interactive flat panels and smart podiums for education and meetings.", features: ["4K touch display", "Wireless casting", "Smart podium", "Whiteboard built-in"] },
    ],
    faqs: [
      { q: "What is the difference between IP PBX and traditional PBX?", a: "IP PBX uses VoIP (SIP) and IP phones, offering lower cost, easier management, and advanced features." },
    ],
    schemaDescription: "Unified communications from Yealink, Poly, Horion, MAXHUB.",
    published: true,
  },
];

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

// ========== Products ==========

export function loadProducts(): ProductCategory[] {
  if (typeof window === "undefined") return INITIAL_PRODUCT_CATEGORIES;
  try {
    const stored = localStorage.getItem(PRODUCTS_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error("Failed to load products from localStorage", e);
  }
  return INITIAL_PRODUCT_CATEGORIES;
}

export function saveProducts(products: ProductCategory[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
  } catch (e) {
    console.error("Failed to save products to localStorage", e);
  }
}

export function generateCategoryPageCode(category: ProductCategory): string {
  const productsCode = category.products
    .map(
      (p) => `        {
          name: "${p.name.replace(/"/g, '\\"')}",
          series: "${p.series}",
          desc: "${p.desc.replace(/"/g, '\\"')}",
          features: [${p.features.map((f) => `"${f.replace(/"/g, '\\"')}"`).join(", ")}],
        }`
    )
    .join(",\n");

  const faqsCode = category.faqs
    .map(
      (faq) => `        { q: "${faq.q.replace(/"/g, '\\"')}", a: "${faq.a.replace(/"/g, '\\"')}" }`
    )
    .join(",\n");

  const brandsCode = category.brands.map((b) => `"${b}"`).join(", ");

  const canonicalPath = category.slug.includes("/")
    ? `/products/${category.slug}`
    : `/products/networking/${category.slug}`;

  return `import { CategoryPage } from "@/components/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${category.title} | JSA Solution",
  description: "${category.description.replace(/"/g, '\\"')}",
  alternates: { canonical: "${canonicalPath}" },
};

export default function ${category.slug.replace(/[-/]/g, "")}Page() {
  return (
    <CategoryPage
      title="${category.title}"
      subtitle="${category.title}"
      description="${category.description.replace(/"/g, '\\"')}"
      icon="${category.icon}"
      color="${category.color}"
      bannerImage="${category.bannerImage}"
      brands={[${brandsCode}]}
      products={[
${productsCode}
      ]}
      faqs={[
${faqsCode}
      ]}
      schemaDescription="${category.schemaDescription.replace(/"/g, '\\"')}"
      canonicalPath="${canonicalPath}"
    />
  );
}`;
}

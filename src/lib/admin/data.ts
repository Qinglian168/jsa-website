import type { NewsItem, SiteSettings, ProductCategory } from "./types";

export const INITIAL_NEWS: NewsItem[] = [
  {
    id: "3",
    date: "July 14, 2026",
    title: "China HCI Market Q1 2026: 3.4B RMB as VMware Replacement and Software-Defined Innovation Reshape Enterprise Infrastructure",
    excerpt: "IDC reports China's hyper-converged infrastructure market hit 3.4 billion RMB in Q1 2026, with Sangfor, Huawei, H3C, Inspur, and Lenovo leading. VMware replacement wave and hardware cost pressures drive software-defined adoption. JSA Solution guides enterprises through HCI transition and VMware migration.",
    slug: "china-hci-market-2026-q1-vmware-replacement",
    published: true,
  },
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
    description: "Enterprise-grade switches for access, aggregation, and core layers. Layer 2/3 managed switches, PoE switches, and high-density 10G/25G/100G data center switches from world-leading brands.",
    icon: "🔀",
    color: "from-blue-500 to-indigo-600",
    bannerImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80",
    brands: ["Cisco", "Huawei", "H3C", "Ruijie", "Juniper", "Aruba", "Ubiquiti", "Dell"],
    products: [
      { id: "p1", name: "Cisco Catalyst 9300 Series", series: "Cisco", desc: "Modular access switches with StackWise-480, UADP 3.0 ASIC, and full PoE+ support for IoT convergence.", features: ["StackWise-480", "UADP 3.0 ASIC", "PoE+ / UPOE", "Cisco DNA Center ready"] },
      { id: "p2", name: "Huawei CloudEngine S5731-H Series", series: "Huawei", desc: "Next-gen campus access switches with built-in AIOps, 802.3bt PoE++, and multi-gigabit ports.", features: ["AIOps built-in", "802.3bt PoE++", "Multi-gigabit", "VXLAN/EVPN"] },
      { id: "p3", name: "H3C S6850 Data Center Switch", series: "H3C", desc: "High-density 10G/25G/100G data center ToR switch with Comware V9 and DRNI for zero-downtime.", features: ["25G/100G ports", "Comware V9", "DRNI", "Telemetry streaming"] },
      { id: "p4", name: "Ruijie RG-S2910 Series", series: "Ruijie", desc: "Cost-effective access switches with 10G uplinks, perfect for SMB and campus edge deployment.", features: ["10G uplinks", "PoE+ models", "IPv6 ready", "Energy efficient"] },
      { id: "p5", name: "Juniper EX4650", series: "Juniper", desc: "Compact 25G/100G data center switch with EVPN-VXLAN and Junos OS for cloud-era networks.", features: ["25G/100G", "EVPN-VXLAN", "Junos OS", "EVO ready"] },
      { id: "p6", name: "Aruba CX 6300 Series", series: "Aruba", desc: "AOS-CX based fixed switches with cloud-native management, dynamic segmentation, and VSX redundancy.", features: ["AOS-CX", "Aruba Central", "VSX redundancy", "Dynamic segmentation"] },
    ],
    faqs: [
      { q: "What is the difference between Layer 2 and Layer 3 switches?", a: "Layer 2 switches forward traffic based on MAC addresses within the same VLAN. Layer 3 switches can route traffic between VLANs using IP addresses, making them suitable for inter-VLAN routing at wire speed." },
      { q: "Do you provide PoE switches for IP cameras and APs?", a: "Yes, we supply PoE, PoE+, and PoE++ (802.3bt) switches that can power IP cameras, wireless APs, and IP phones directly over Ethernet cables." },
      { q: "Can you help with switch stacking and chassis solutions?", a: "Absolutely. We provide StackWise (Cisco), IRF (H3C), iStack (Huawei), and VSX (Aruba) stacking solutions for high availability and simplified management." },
    ],
    schemaDescription: "Enterprise network switches including Cisco Catalyst, Huawei CloudEngine, H3C S series, Juniper EX, Aruba CX. Layer 2/3 managed, PoE, data center switches.",
    published: true,
  },
  {
    id: "2",
    title: "Network Firewalls",
    slug: "firewalls",
    description: "Next-generation firewalls with AI-powered threat detection, SD-WAN integration, and zero-trust network access. Protect your network perimeter with industry-leading security appliances.",
    icon: "🔒",
    color: "from-rose-500 to-red-600",
    bannerImage: "https://images.unsplash.com/photo-1563986768499-57a975944831?w=1920&q=80",
    brands: ["Fortinet", "Hillstone", "Sangfor", "Cisco", "Huawei", "Juniper", "Palo Alto"],
    products: [
      { id: "p7", name: "Fortinet FortiGate 600F Series", series: "Fortinet", desc: "Mid-range NGFW with FortiASIC NP7, 10G interfaces, and integrated SD-WAN for branch and mid-enterprise.", features: ["FortiASIC NP7", "10G ready", "SD-WAN built-in", "FortiGuard AI"] },
      { id: "p8", name: "Hillstone A-Series NGFW", series: "Hillstone", desc: "High-performance next-gen firewalls with AI-driven threat intelligence and cloud sandbox analysis.", features: ["AI threat intel", "Cloud sandbox", "SSL inspection", "High availability"] },
      { id: "p9", name: "Sangfor NGAF", series: "Sangfor", desc: "Integrated NGFW + WAF + IPS in one appliance, popular in Asia-Pacific markets with local support.", features: ["NGFW + WAF + IPS", "Local support", "Affordable pricing", "Chinese interface"] },
      { id: "p10", name: "Huawei USG Series", series: "Huawei", desc: "Enterprise firewalls with TURBO engine acceleration, IPS/AV/URL filtering, and VPN in a single device.", features: ["TURBO engine", "IPS/AV/URL", "VPN", "Central management"] },
      { id: "p11", name: "Cisco Firepower 2100 Series", series: "Cisco", desc: "Cisco NGFW with Firepower Threat Defense (FTD), Snort 3 IPS, and integration with Cisco Catalyst.", features: ["FTD + Snort 3", "Cisco integration", "AMP for endpoints", "URL filtering"] },
      { id: "p12", name: "Juniper SRX Series", series: "Juniper", desc: "Carrier-grade firewalls with Junos OS, content security, and AppSecure for application-aware policies.", features: ["Junos OS", "AppSecure", "Content security", "High throughput"] },
    ],
    faqs: [
      { q: "What is the difference between NGFW and traditional firewall?", a: "Traditional firewalls filter by IP/port only. NGFW adds application awareness, intrusion prevention (IPS), user identity integration, and often includes WAF, VPN, and SD-WAN in one device." },
      { q: "Do your firewalls support SD-WAN?", a: "Yes, Fortinet FortiGate, Cisco Catalyst 8300, and Huawei NetEngine AR all have built-in SD-WAN capabilities, eliminating the need for separate SD-WAN appliances." },
      { q: "Can you provide firewall rule optimization services?", a: "Yes, our security engineers can review your existing firewall rules, optimize policies, and help migrate configurations between vendor platforms." },
    ],
    schemaDescription: "Network firewalls including Fortinet FortiGate, Hillstone A-Series, Sangfor NGAF, Huawei USG, Cisco Firepower, Juniper SRX. NGFW, UTM, IPS.",
    published: true,
  },
  {
    id: "3",
    title: "Enterprise Routers",
    slug: "routers",
    description: "Branch, edge, and core routers for enterprise WAN, SD-WAN, and service provider networks. High-performance routing with advanced security and automation from Cisco, Huawei, H3C, and Juniper.",
    icon: "🌐",
    color: "from-sky-500 to-blue-600",
    bannerImage: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1920&q=80",
    brands: ["Cisco", "Huawei", "H3C", "Juniper", "Ruijie", "MikroTik", "Dell"],
    products: [
      { id: "p13", name: "Cisco Catalyst 8300 Series", series: "Cisco", desc: "SD-WAN ready edge routers with integrated security, 5G, and Wi-Fi 6 for branch transformation.", features: ["SD-WAN built-in", "5G / Wi-Fi 6", "Integrated security", "Cisco IOS XE"] },
      { id: "p14", name: "Huawei NetEngine AR Series", series: "Huawei", desc: "All-in-one branch routers with routing, switching, security, and Wi-Fi in a single device.", features: ["All-in-one", "SD-WAN ready", "OVPN support", "High reliability"] },
      { id: "p15", name: "H3C MSR Series", series: "H3C", desc: "Comware-based multi-service routers for enterprise branches with rich interface options and VPN.", features: ["Comware OS", "Rich interfaces", "VPN ready", "Energy efficient"] },
      { id: "p16", name: "Juniper MX Series", series: "Juniper", desc: "Service provider and enterprise edge routers with Junos OS, MPLS, and VPLS for large-scale networks.", features: ["Junos OS", "MPLS/VPLS", "High scale", "Automation ready"] },
      { id: "p17", name: "Cisco ASR 1000 Series", series: "Cisco", desc: "Enterprise edge routers with hardware-accelerated encryption, QoS, and high availability for critical WAN links.", features: ["Hardware encryption", "QoS", "HA pairs", "IOS XE"] },
      { id: "p18", name: "Ruijie RG-RSR Series", series: "Ruijie", desc: "Cost-effective enterprise routers with built-in firewall, VPN, and 4G/5G backup for SMB branches.", features: ["Built-in firewall", "VPN", "4G/5G backup", "Easy management"] },
    ],
    faqs: [
      { q: "What is SD-WAN and do your routers support it?", a: "SD-WAN (Software-Defined WAN) optimizes WAN traffic using application-aware routing. Cisco, Huawei, and H3C routers we supply all support SD-WAN deployment." },
      { q: "Do you supply both enterprise branch routers and carrier-grade core routers?", a: "Yes, we supply the full range — from SMB branch routers (Cisco RV, H3C MSR) to carrier-grade core routers (Cisco ASR 9000, Huawei NE40E)." },
      { q: "Can you help with router configuration and deployment?", a: "Yes, our engineers provide pre-sales configuration guidance, and we can arrange professional services for on-site deployment if needed." },
    ],
    schemaDescription: "Enterprise routers including Cisco Catalyst 8300, Huawei NetEngine AR, H3C MSR, Juniper MX. SD-WAN, branch routers, edge routers, core routers.",
    published: true,
  },
  {
    id: "4",
    title: "Unified Communications",
    slug: "unified-communications",
    description: "Complete UC solutions: IP PBX systems, IP phones, video conferencing endpoints, and collaboration platforms. Seamlessly connect your teams with voice, video, messaging, and screen sharing.",
    icon: "📞",
    color: "from-emerald-500 to-teal-600",
    bannerImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80",
    brands: ["Yealink", "Poly", "MAXHUB", "Horion", "Logitech", "BARCO", "Jabra", "Grandstream", "Yeastar", "Avaya", "Unify"],
    products: [
      { id: "p19", name: "Yealink T5 Series IP Phones", series: "Yealink", desc: "Android-based IP phones with 5-inch color touchscreen, Wi-Fi 6, Bluetooth 5.0, and Yealink Optima HD voice.", features: ["Android OS", "5-inch touchscreen", "Wi-Fi 6 / BT 5.0", "Optima HD voice"] },
      { id: "p20", name: "Poly Studio X Series", series: "Poly", desc: "All-in-one video bars for huddle rooms and mid-size meeting rooms, with built-in camera, mic, and speaker.", features: ["All-in-one design", "AI camera tracking", "NoiseBlock AI", "Zoom/Teams certified"] },
      { id: "p21", name: "Yeastar P-Series PBX", series: "Yeastar", desc: "Modern IP PBX with built-in video conferencing, mobile app, and CRM integration. Easy to deploy and manage.", features: ["Video conferencing", "Mobile app", "CRM integration", "Linkus UC Clients"] },
      { id: "p22", name: "Cisco Webex Room Series", series: "Cisco", desc: "AI-powered meeting room devices with intelligent framing, speaker tracking, and noise removal.", features: ["AI framing", "Speaker tracking", "Noise removal", "Webex built-in"] },
      { id: "p23", name: "Grandstream UCM Series IP PBX", series: "Grandstream", desc: "Cost-effective IP PBX with no per-user licensing, supporting up to 500 users and 150 concurrent calls.", features: ["No user license", "500 users", "GDMS cloud management", "Built-in WiFi"] },
      { id: "p24", name: "Horion Smart Tablets & Podium", series: "Horion", desc: "Interactive flat panels and smart podiums for education and meeting scenarios. 4K touch display, wireless casting, and built-in whiteboard software.", features: ["4K touch display", "Wireless casting", "Smart podium", "Whiteboard built-in"] },
      { id: "p25", name: "Logitech Rally Bar", series: "Logitech", desc: "Premium all-in-one video bar with PTZ camera, beamforming mics, and AI-based RightSight framing.", features: ["PTZ camera", "Beamforming mics", "RightSight AI", "USB / appliance mode"] },
    ],
    faqs: [
      { q: "What is the difference between IP PBX and traditional PBX?", a: "Traditional PBX uses analog lines and proprietary phones. IP PBX uses VoIP (SIP) and IP phones, offering lower cost, easier management, and advanced features like video calling and mobile integration." },
      { q: "Do your UC solutions support Microsoft Teams and Zoom?", a: "Yes, Poly, Cisco Webex, and Logitech devices are certified for Microsoft Teams and Zoom. Yealink also offers Teams-certified IP phones." },
      { q: "Can you help migrate from legacy phone systems to IP PBX?", a: "Absolutely. We provide migration planning, equipment selection, configuration, and cutover support to ensure a smooth transition from legacy systems to modern IP communications." },
    ],
    schemaDescription: "Unified communications equipment including Yealink IP phones, Poly Studio video bars, Yeastar P-Series PBX, Cisco Webex Room, Logitech Rally Bar, MAXHUB and Horion smart tablets.",
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

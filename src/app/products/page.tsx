import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Network Equipment Products - Routers, Switches, Firewalls, Wireless, Servers | JSA Solution",
  description:
    "Browse JSA Solution's complete network equipment catalog: enterprise routers, switches, firewalls, wireless AP, AI computing servers, unified communications, smart conference, fiber optic, and optical transceivers. 10000+ products from 50+ global brands including Cisco, Huawei, H3C, Juniper, NVIDIA, Dell.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Network Equipment Products Catalog - 10000+ Products",
    description: "Routers, switches, firewalls, wireless, AI servers, unified comms, fiber optics from 50+ brands.",
    url: "https://jsasolution.com/products",
    type: "website",
  },
};

const categories = [
  {
    title: "Networking",
    href: "/products/networking",
    icon: "🌐",
    desc: "Enterprise routers, switches, firewalls, wireless APs from Cisco, Huawei, H3C, Juniper, Aruba, Ruckus. Full network infrastructure portfolio.",
    brands: ["Cisco", "Huawei", "H3C", "Juniper", "Aruba", "Ruckus", "Fortinet", "Ruijie"],
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "AI Workstation",
    href: "/products/ai-workstation",
    icon: "💻",
    desc: "NVIDIA RTX/Ada GPU workstations, AI training servers, and high-performance computing from NVIDIA, Dell, HPE, Supermicro.",
    brands: ["NVIDIA", "Dell", "HPE", "Supermicro", "Lenovo", "Intel"],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Smart Conference Devices",
    href: "/products/smart-conference",
    icon: "📹",
    desc: "Video conferencing systems, interactive whiteboards, IP phones, and collaboration tools from Yealink, Poly, MAXHUB, Cisco.",
    brands: ["Yealink", "Poly", "MAXHUB", "Cisco", "Logitech", "Yeastar"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Optical Transceivers",
    href: "/products/optical-transceivers",
    icon: "🔮",
    desc: "SFP, SFP+, QSFP28, QSFP-DD optical modules. Compatible with Cisco, Huawei, H3C, Juniper, and all major brands.",
    brands: ["Cisco", "Huawei", "H3C", "Juniper", "Intel", "FS", "Finisar"],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Fiber Optic Cables",
    href: "/products/fiber-optic-cables",
    icon: "🔌",
    desc: "Single-mode/multi-mode fiber patch cords, MTP/MPO trunks, pigtails, adapters, and fiber enclosures for data centers.",
    brands: ["Corning", "CommScope", "FS", "Panduit", "Hubbell"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Testers & Tools",
    href: "/products/testers-tools",
    icon: "🔧",
    desc: "OTDR, optical power meters, network cable testers, fusion splicers, and fiber inspection tools from Fluke, EXFO, Viavi.",
    brands: ["Fluke", "EXFO", "Viavi", "Yokogawa", "Fujikura"],
    gradient: "from-slate-500 to-gray-600",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-deepblue text-white">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Products</span>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">Product Categories</h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Explore our 6 core product categories from 50+ world-class brands — Networking, AI Workstations, Smart Conference, Optical Transceivers, Fiber Optic Cables, and Testers & Tools.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-20 bg-light bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group card-tech rounded-2xl p-6 overflow-hidden"
              >
                <div className={`h-1 bg-gradient-to-r ${cat.gradient} absolute top-0 left-0 right-0`} />
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h2 className="text-lg font-bold text-dark group-hover:text-primary transition-colors mb-2">
                  {cat.title}
                </h2>
                <p className="text-sm text-gray leading-relaxed mb-4">{cat.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.brands.slice(0, 4).map((brand) => (
                    <span key={brand} className="text-xs bg-primary-light border border-blue-100 px-2 py-0.5 rounded text-primary/70">
                      {brand}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center mt-4 text-sm font-semibold text-primary">
                  Browse Products
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Network Equipment Products - Routers, Switches, Firewalls, Wireless, Servers | JSA Solution",
  description:
    "Browse JSA Solution's complete network equipment catalog: routers, switches, firewalls, wireless AP, servers, storages, and more from 35+ global brands including Cisco, Huawei, H3C.",
  alternates: { canonical: "/products" },
};

const categories = [
  {
    title: "Routers",
    href: "/products/router",
    icon: "🌐",
    desc: "Enterprise routers from Cisco, Huawei, H3C, Juniper. Branch, edge, SD-WAN, and service provider routing.",
    brands: ["Cisco", "Huawei", "H3C", "Juniper", "Ruijie", "MikroTik"],
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "Switches",
    href: "/products/switch",
    icon: "🔀",
    desc: "Layer 2/3 managed switches, PoE, 10G/25G/100G data center switches. Core, distribution, and access layer.",
    brands: ["Cisco", "Huawei", "H3C", "Ruijie", "Juniper", "Ubiquiti"],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Firewalls",
    href: "/products/firewall",
    icon: "🔒",
    desc: "Next-gen firewalls, UTM, and network security appliances from Fortinet, Hillstone, Sangfor, and more.",
    brands: ["Fortinet", "Hillstone", "Sangfor", "Huawei", "Juniper"],
    gradient: "from-rose-500 to-red-600",
  },
  {
    title: "Wireless",
    href: "/products/wireless-ap",
    icon: "📶",
    desc: "WiFi 6/7 enterprise access points, wireless controllers, outdoor APs, and mesh solutions.",
    brands: ["Aruba", "Ruckus", "Huawei", "H3C", "Ubiquiti", "Ruijie"],
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    title: "AI Workstation",
    href: "/products/ai-workstation",
    icon: "💻",
    desc: "High-performance AI workstations with NVIDIA RTX/Ada GPUs for development and model training.",
    brands: ["NVIDIA", "Dell", "HPE", "Intel"],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Unified Communications",
    href: "/products/unified-communications",
    icon: "📞",
    desc: "IP phones, video conferencing endpoints, PBX systems, and collaboration platforms.",
    brands: ["Yealink", "Poly", "Cisco", "Avaya", "Unify", "Grandstream", "Yeastar"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Network Management",
    href: "/products/network-management",
    icon: "📊",
    desc: "Network monitoring, configuration management, and IT infrastructure management tools.",
    brands: ["Cisco", "Huawei", "H3C", "SolarWinds"],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Networking Accessories",
    href: "/products/networking-accessories",
    icon: "🔌",
    desc: "Transceivers (SFP/SFP+/QSFP), cables, patch panels, racks, power supplies, and accessories.",
    brands: ["Cisco", "Huawei", "H3C", "APC", "FS"],
    gradient: "from-slate-500 to-gray-600",
  },
  {
    title: "Servers",
    href: "/products/ai-server",
    icon: "🖥️",
    desc: "Rack servers, blade servers, GPU servers, and hyper-converged infrastructure from Dell, HPE.",
    brands: ["Dell", "HPE", "Intel", "NVIDIA", "Huawei"],
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "Storages",
    href: "/products/storage",
    icon: "💾",
    desc: "NAS, SAN, all-flash arrays, and enterprise storage solutions from QNAP, Synology, Seagate.",
    brands: ["QNAP", "Synology", "Seagate", "Dell", "HPE"],
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    title: "Optical Access Network",
    href: "/products/optical-access",
    icon: "🔦",
    desc: "GPON/EPON OLT, ONU, and fiber access equipment for FTTH and broadband deployment.",
    brands: ["Huawei", "H3C", "ZTE", "FiberHome"],
    gradient: "from-fuchsia-500 to-pink-600",
  },
  {
    title: "Optical Transmission",
    href: "/products/optical-transmission",
    icon: "🔮",
    desc: "DWDM, CWDM, optical transceivers, and long-haul fiber transmission equipment.",
    brands: ["Huawei", "Cisco", "H3C", "Infinera"],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Video Surveillance",
    href: "/products/video-surveillance",
    icon: "📹",
    desc: "IP cameras, NVR, video management systems, and security monitoring solutions.",
    brands: ["Hikvision", "Dahua", "Uniview", "Huawei"],
    gradient: "from-lime-500 to-green-600",
  },
  {
    title: "Cyber Security",
    href: "/products/cyber-security",
    icon: "🛡️",
    desc: "Endpoint security, SIEM, intrusion detection, and comprehensive cybersecurity solutions.",
    brands: ["Fortinet", "Sangfor", "Palo Alto", "CrowdStrike"],
    gradient: "from-red-500 to-orange-600",
  },
  {
    title: "Data Protection",
    href: "/products/data-protection",
    icon: "🔐",
    desc: "Backup appliances, disaster recovery, data encryption, and business continuity solutions.",
    brands: ["Veeam", "Commvault", "Veritas", "Rubrik"],
    gradient: "from-orange-500 to-amber-600",
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
            Explore our comprehensive catalog of 15 network equipment categories from 35+ world-class brands. Every product is sourced through authorized channels with full warranty.
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

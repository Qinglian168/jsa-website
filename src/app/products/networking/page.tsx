import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Networking Equipment - Switches, Routers, Firewalls & More | JSA Solution",
  description:
    "Complete enterprise networking solutions: switches, routers, firewalls, video surveillance, wireless, servers & storages, unified communications, UPS & KVM. From Cisco, Huawei, H3C, Juniper, Fortinet, and 50+ brands.",
  alternates: { canonical: "/products/networking" },
};

const subCategories = [
  {
    href: "/products/networking/switches",
    icon: "🔀",
    title: "Switches",
    desc: "Layer 2/3 managed switches, PoE switches, data center switches from Cisco, Huawei, H3C, Ruijie.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    href: "/products/networking/routers",
    icon: "🌐",
    title: "Routers",
    desc: "Enterprise & service provider routers, SD-WAN, branch routers from Cisco, Huawei, H3C, Juniper.",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    href: "/products/networking/firewalls",
    icon: "🔒",
    title: "Firewalls",
    desc: "Next-gen firewalls, UTM, IPS from Fortinet, Hillstone, Sangfor, Cisco, Huawei.",
    gradient: "from-rose-500 to-red-600",
  },
  {
    href: "/products/networking/video-surveillance",
    icon: "📹",
    title: "Video Surveillance",
    desc: "IP cameras, NVR, VMS from Hikvision, Dahua, Uniview — complete security surveillance solutions.",
    gradient: "from-lime-500 to-green-600",
  },
  {
    href: "/products/networking/unified-communications",
    icon: "📞",
    title: "Unified Communications",
    desc: "IP PBX, IP phones, video conferencing, collaboration tools from Yealink, Poly, Cisco, Yeastar.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    href: "/products/networking/servers-storages",
    icon: "🖥️",
    title: "Servers & Storages",
    desc: "Rack servers, GPU servers, NAS/SAN storage from Dell, HPE, QNAP, Synology, Seagate.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    href: "/products/networking/wireless",
    icon: "📶",
    title: "Wireless",
    desc: "Enterprise WiFi 6/7 APs, wireless controllers, outdoor APs from Aruba, Ruckus, Huawei, H3C.",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    href: "/products/networking/ups-kvm",
    icon: "🔌",
    title: "UPS & KVM",
    desc: "UPS power protection, KVM switches, PDU from APC, Vertiv, Raritan — complete power & management solutions.",
    gradient: "from-slate-500 to-gray-600",
  },
];

const brands = ["Cisco", "Huawei", "H3C", "Juniper", "Fortinet", "Aruba", "Ruckus", "Hillstone", "Dell", "HPE", "Yealink", "Poly", "APC"];

export default function NetworkingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Networking Equipment",
            description: "Enterprise networking equipment including switches, routers, firewalls, video surveillance, wireless, servers & storages, unified communications, UPS & KVM.",
            url: "https://jsasolution.com/products/networking",
          }),
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80" alt="Networking Equipment" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 opacity-90" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-white">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Networking</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">🌐</span>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-white">Networking Equipment</h1>
          </div>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Complete enterprise networking infrastructure — from access switches and edge routers to next-gen firewalls and WiFi 7. Authorized distribution from 50+ world-class brands.
          </p>
        </div>
      </section>

      {/* Sub-Categories */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-dark mb-4 text-center">Networking Sub-Categories</h2>
          <p className="text-gray text-center mb-10 max-w-2xl mx-auto">
            Explore our comprehensive networking product portfolio across 8 specialized categories.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {subCategories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group bg-white border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden relative">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.gradient}`} />
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-primary transition-colors">{cat.title}</h3>
                <p className="text-sm text-gray leading-relaxed mb-3">{cat.desc}</p>
                <span className="inline-flex items-center text-sm font-semibold text-primary">
                  View Products
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 lg:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-dark mb-10 text-center">Authorized Brands</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((brand) => (
              <span key={brand} className="px-5 py-3 bg-white border border-border rounded-xl text-sm font-semibold text-dark shadow-sm">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold mb-3">Need a Complete Networking Solution?</h2>
          <p className="text-white/70 mb-6">Our engineers provide free network design consultation and competitive quotes within 24 hours.</p>
          <Link href="/contact" className="inline-flex items-center px-7 py-3 bg-accent text-primary-dark font-bold rounded-lg hover:bg-accent-dark transition-colors shadow-md text-sm">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}

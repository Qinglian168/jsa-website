import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSA Solution - ICT & Smart Office Equipment Provider | 20 Years Export Experience",
  description:
    "JSA Solution is a comprehensive service provider in China specializing in the communication & information industry and smart office equipment. Authorized partner of Cisco, Huawei, H3C, 35+ global brands. 20 years export experience.",
  alternates: { canonical: "/" },
};

const categories = [
  {
    title: "Enterprise Routers",
    href: "/products/router",
    icon: "🌐",
    desc: "Cisco, Huawei, H3C, Juniper enterprise-grade routing solutions for secure and reliable connectivity.",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "Network Switches",
    href: "/products/switch",
    icon: "🔀",
    desc: "Layer 2/3 managed switches from Cisco, Huawei, H3C, Ruijie — PoE, 10G, and data center solutions.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Wireless AP",
    href: "/products/wireless-ap",
    icon: "📶",
    desc: "WiFi 6/7 access points from Aruba, Ruckus, Huawei, Ubiquiti for seamless wireless coverage.",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    title: "Conference Systems",
    href: "/products/conference",
    icon: "🎥",
    desc: "Video conferencing endpoints from Yealink, Poly, MAXHUB, Logitech for smart collaboration.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "AI Computing Servers",
    href: "/products/ai-server",
    icon: "🧠",
    desc: "NVIDIA GPU servers, Dell/HPE AI platforms — inference & training solutions for AI workloads.",
    gradient: "from-orange-500 to-amber-600",
  },
];

const allBrands = [
  "Cisco", "Huawei", "H3C", "Juniper", "Ruckus", "Aruba", "Ruijie", "Fortinet",
  "Hillstone", "Fanvil", "Ubiquiti", "Dell", "HPE", "Intel", "NVIDIA", "Samsung",
  "Micron", "Seagate", "QNAP", "Synology", "Yealink", "Poly", "MAXHUB", "Logitech",
  "BARCO", "Jabra", "Grandstream", "Yeastar", "Avaya", "Unify", "Contex", "Sangfor",
  "Alcatel-Lucent", "APC", "MikroTik",
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "35+", label: "Brand Partners" },
  { value: "5000+", label: "Products" },
  { value: "1000+", label: "Clients Served" },
];

const solutions = [
  {
    title: "Enterprise Networking",
    desc: "End-to-end wired & wireless networking for offices, campuses, and data centers.",
    href: "/solutions/enterprise-networking",
    icon: "🏢",
  },
  {
    title: "Campus Wireless Coverage",
    desc: "High-density WiFi 6/7 deployment for schools, hospitals, and industrial parks.",
    href: "/solutions/campus-wireless",
    icon: "📡",
  },
  {
    title: "Smart Meeting Rooms",
    desc: "Video conferencing, digital whiteboards, and unified communications for hybrid work.",
    href: "/solutions/smart-meeting",
    icon: "🤝",
  },
  {
    title: "AI Computing Center",
    desc: "GPU cluster design, AI server procurement, and computing infrastructure for AI workloads.",
    href: "/solutions/ai-computing",
    icon: "⚡",
  },
];

const whyUs = [
  {
    icon: "🏆",
    title: "20 Years of Expertise",
    desc: "Two decades of network equipment distribution experience, ensuring you get the right products and professional advice.",
  },
  {
    icon: "🤝",
    title: "35+ Authorized Brand Partners",
    desc: "Direct partnerships with Cisco, Huawei, H3C, Juniper, Aruba, and 30+ more global brands — guaranteed authentic products.",
  },
  {
    icon: "📦",
    title: "Import & Export Licensed",
    desc: "Licensed import/export capability ensures smooth cross-border procurement and competitive pricing.",
  },
  {
    icon: "🔧",
    title: "Pre-Sales to After-Sales",
    desc: "From product selection and solution design to delivery and technical support — full lifecycle service.",
  },
  {
    icon: "💰",
    title: "Competitive Pricing",
    desc: "Authorized distributor pricing with volume discounts. Best value for enterprise procurement.",
  },
  {
    icon: "🚚",
    title: "Fast Delivery",
    desc: "Large inventory in Shenzhen warehouse. Same-day dispatch for in-stock items. Global shipping available.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Light Blue Tech with Banner Image */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Background Banner Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
            alt="Data Center Infrastructure"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-dark/85 to-cyan/75" />
        {/* Dot pattern */}
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 text-sm mb-6">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-white font-medium">20 Years of Trusted Network Equipment Distribution</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
                Your Trusted <br />
                <span className="text-cyan">Network Equipment</span>
                <br />Distributor
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-lg leading-relaxed">
                Your trusted partner for network communication equipment, wireless systems, AI computing servers, and smart conference solutions. 20 years export experience, 35+ authorized brands, one-stop service.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center px-7 py-3.5 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-all shadow-lg text-sm"
                >
                  Browse Products
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-7 py-3.5 bg-white/15 backdrop-blur-sm border-2 border-white text-white font-bold rounded-lg hover:bg-white/25 transition-all text-sm"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat) => (
                      <div key={stat.label} className="bg-white/15 border border-white/10 rounded-xl p-5 text-center">
                        <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                        <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-white/15 border border-white/10 rounded-xl p-4">
                    <div className="text-xs text-white/60 mb-2 uppercase tracking-wider font-semibold">Trusted Brands</div>
                    <div className="flex flex-wrap gap-2">
                      {allBrands.slice(0, 12).map((brand) => (
                        <span key={brand} className="text-xs bg-white/10 border border-white/10 px-2 py-1 rounded text-white/70">{brand}</span>
                      ))}
                      <span className="text-xs bg-accent/20 border border-accent/30 px-2 py-1 rounded text-accent font-semibold">+23 more</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Mobile */}
      <section className="lg:hidden py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-slate-50 border border-border rounded-xl p-4 text-center">
                <div className="text-2xl font-extrabold text-gradient">{stat.value}</div>
                <div className="text-xs text-gray mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 lg:py-24 bg-light bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-line mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-extrabold text-dark mb-4">
              Product Categories
            </h2>
            <p className="text-gray max-w-2xl mx-auto">
              From enterprise networking to AI computing — we carry 35+ world-class brands across 5 major product categories.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group card-tech rounded-2xl p-6 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.gradient}`} />
                <div className="text-3xl mb-4">{cat.icon}</div>
                <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray leading-relaxed mb-4">{cat.desc}</p>
                <span className="inline-flex items-center text-sm font-semibold text-primary">
                  Explore
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="section-line mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-extrabold text-dark mb-4">
              Authorized Brand Partners
            </h2>
            <p className="text-gray max-w-2xl mx-auto">
              Direct partnerships with 35+ global brands ensure authentic products, competitive pricing, and full warranty support.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {allBrands.map((brand) => (
              <Link
                key={brand}
                href="/brands"
                className="px-5 py-3 bg-white border border-border rounded-xl text-sm font-semibold text-dark hover:border-primary hover:text-primary hover:shadow-md transition-all duration-200"
              >
                {brand}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/brands" className="text-primary font-semibold text-sm hover:underline">
              View all 35+ brands →
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 lg:py-24 bg-light bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-line mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-extrabold text-dark mb-4">
              Industry Solutions
            </h2>
            <p className="text-gray max-w-2xl mx-auto">
              Not just products — we deliver complete solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {solutions.map((sol) => (
              <Link
                key={sol.href}
                href={sol.href}
                className="group card-tech rounded-2xl p-6 flex items-start gap-5"
              >
                <div className="text-3xl shrink-0">{sol.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors mb-1">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-gray leading-relaxed">{sol.desc}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-primary mt-3">
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-line mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-extrabold text-dark mb-4">
              Why Choose JSA Solution?
            </h2>
            <p className="text-gray max-w-2xl mx-auto">
              With 20 years of industry experience, import/export license, and 35+ brand partnerships, we are your most reliable network equipment procurement partner.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <div key={i} className="bg-slate-50 border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary via-primary-dark to-deepblue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Whether you need a single switch or a complete data center solution, our team is ready to help. Get a quote within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-all shadow-lg text-sm"
            >
              Request a Quote
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all text-sm"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Solutions - Enterprise Networking, Security, Data Center | JSA Solution",
  description:
    "JSA Solution delivers complete IT solutions: enterprise networking, firewall & security, fiber access, data center networking, AI computing & cloud, and network infrastructure. 20 years of experience.",
  alternates: { canonical: "/solutions" },
};

const solutions = [
  {
    title: "Enterprise Networking",
    href: "/solutions/enterprise-networking",
    icon: "🏢",
    desc: "End-to-end wired and wireless enterprise networking solutions. Core switching, routing, SD-WAN, and campus LAN design.",
    features: ["Core/Distribution/Access design", "SD-WAN deployment", "Multi-site connectivity", "Network security integration"],
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "Firewall and Security",
    href: "/solutions/firewall-security",
    icon: "🔒",
    desc: "Comprehensive network security solutions with next-gen firewalls, intrusion prevention, and zero-trust architecture.",
    features: ["NGFW deployment", "VPN & remote access", "Intrusion prevention", "Security auditing"],
    gradient: "from-rose-500 to-red-700",
  },
  {
    title: "Fiber Access",
    href: "/solutions/fiber-access",
    icon: "🔦",
    desc: "GPON/EPON fiber access solutions for FTTH, FTTB, and broadband service providers. OLT, ONU, and fiber infrastructure.",
    features: ["GPON/EPON deployment", "FTTH solutions", "Fiber infrastructure", "Broadband access"],
    gradient: "from-fuchsia-500 to-pink-700",
  },
  {
    title: "Data Center Networking",
    href: "/solutions/data-center-networking",
    icon: "🖥️",
    desc: "High-performance data center switching, spine-leaf architecture, and software-defined networking for modern DCs.",
    features: ["Spine-leaf architecture", "25G/100G/400G switching", "Software-defined networking", "DC interconnect"],
    gradient: "from-indigo-500 to-purple-700",
  },
  {
    title: "AI Computing and Cloud",
    href: "/solutions/ai-computing",
    icon: "⚡",
    desc: "GPU cluster design, AI server procurement, and cloud-ready infrastructure for machine learning and HPC workloads.",
    features: ["GPU cluster design", "AI server deployment", "High-speed storage", "HPC infrastructure"],
    gradient: "from-amber-500 to-orange-700",
  },
  {
    title: "Network Infrastructure",
    href: "/solutions/network-infrastructure",
    icon: "🌐",
    desc: "Structured cabling, rack & cabinet solutions, power distribution, and physical infrastructure for enterprise networks.",
    features: ["Structured cabling", "Rack & cabinet design", "Power & cooling", "Cable management"],
    gradient: "from-cyan-500 to-teal-700",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="relative py-16 lg:py-20 overflow-hidden" style={{background: "linear-gradient(135deg, #070b1e, #0d1b3e)"}}>
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="text-sm text-white/40 mb-4">
            <Link href="/" className="hover:text-cyan">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-cyan">Solutions</span>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-4 text-white">Industry Solutions</h1>
          <p className="text-lg text-white/50 max-w-2xl">
            Not just products — we deliver complete, tailored solutions backed by 20 years of expertise and 35+ brand partnerships.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-light bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((sol) => (
              <Link
                key={sol.href}
                href={sol.href}
                className="group card-tech rounded-2xl overflow-hidden flex flex-col"
              >
                <div className={`bg-gradient-to-r ${sol.gradient} p-6 text-white`}>
                  <span className="text-3xl">{sol.icon}</span>
                  <h2 className="text-xl font-bold mt-2">{sol.title}</h2>
                  <p className="text-white/70 mt-2 text-sm leading-relaxed">{sol.desc}</p>
                </div>
                <div className="p-6 flex-1">
                  <ul className="space-y-2">
                    {sol.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray">
                        <svg className="w-4 h-4 text-cyan shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center mt-4 text-sm font-semibold text-cyan group-hover:underline">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

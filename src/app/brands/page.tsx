import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authorized Brand Partners - 50+ Global Network Equipment Brands",
  description:
    "JSA Solution is an authorized distributor of 50+ global network equipment brands: Cisco, Huawei, H3C, Juniper, Aruba, Ruckus, NVIDIA, Dell, HPE, Yealink, Poly, and more.",
  alternates: { canonical: "/brands" },
};

const brandCategories = [
  {
    title: "Networking",
    icon: "🌐",
    brands: [
      { name: "Cisco", desc: "Enterprise networking, security, and collaboration leader" },
      { name: "Huawei", desc: "Full-stack ICT solutions from campus to cloud" },
      { name: "H3C", desc: "Leading Chinese enterprise networking brand" },
      { name: "Juniper", desc: "AI-driven networking and security solutions" },
      { name: "Ruckus", desc: "High-performance WiFi with BeamFlex+ technology" },
      { name: "Aruba", desc: "HPE's edge-to-cloud networking portfolio" },
      { name: "Ruijie", desc: "Innovative cloud-managed networking solutions" },
      { name: "Ubiquiti", desc: "Prosumer/SMB networking with UniFi ecosystem" },
      { name: "MikroTik", desc: "Affordable router and wireless solutions" },
    ],
  },
  {
    title: "Security",
    icon: "🛡️",
    brands: [
      { name: "Fortinet", desc: "NGFW and unified cybersecurity platform" },
      { name: "Hillstone", desc: "Next-generation firewall and XDR solutions" },
      { name: "Sangfor", desc: "Cybersecurity and cloud computing solutions" },
    ],
  },
  {
    title: "Servers & Computing",
    icon: "🖥️",
    brands: [
      { name: "Dell", desc: "PowerEdge servers, storage, and AI solutions" },
      { name: "HPE", desc: "ProLiant servers and GreenLake platform" },
      { name: "Intel", desc: "Xeon processors, Gaudi AI accelerators" },
      { name: "NVIDIA", desc: "GPU computing and AI platform leader" },
    ],
  },
  {
    title: "Storage",
    icon: "💾",
    brands: [
      { name: "Samsung", desc: "Enterprise SSDs and memory solutions" },
      { name: "Micron", desc: "DRAM and NAND flash storage products" },
      { name: "Seagate", desc: "Enterprise HDDs and storage systems" },
      { name: "QNAP", desc: "NAS and storage solutions" },
      { name: "Synology", desc: "Network-attached storage and surveillance" },
    ],
  },
  {
    title: "Video Conferencing & Collaboration",
    icon: "🎥",
    brands: [
      { name: "Yealink", desc: "Video conferencing and UC endpoints" },
      { name: "Poly", desc: "Premium video and audio conferencing" },
      { name: "MAXHUB", desc: "Interactive displays and meeting solutions" },
      { name: "Logitech", desc: "Video bars and meeting room peripherals" },
      { name: "BARCO", desc: "Wireless presentation and conferencing" },
      { name: "Jabra", desc: "Professional headsets and speakerphones" },
      { name: "Grandstream", desc: "IP phones and video conferencing" },
      { name: "Yeastar", desc: "IP PBX and unified communications" },
      { name: "Avaya", desc: "Enterprise communications and contact center" },
      { name: "Unify", desc: "OpenScape unified communications" },
    ],
  },
  {
    title: "Other",
    icon: "🔧",
    brands: [
      { name: "Fanvil", desc: "IP phones and intercom systems" },
      { name: "Contex", desc: "Communication solutions" },
      { name: "Alcatel-Lucent", desc: "Enterprise communication solutions" },
      { name: "APC", desc: "UPS and power management solutions" },
    ],
  },
];

export default function BrandsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-blue-600 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Brand Partners</span>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">Authorized Brand Partners</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Direct partnerships with 50+ global brands ensure authentic products, competitive pricing, and full warranty support.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {brandCategories.map((cat) => (
            <div key={cat.title} className="mb-12">
              <h2 className="text-xl font-bold text-dark mb-6 flex items-center gap-2">
                <span className="text-2xl">{cat.icon}</span>
                {cat.title}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.brands.map((brand) => (
                  <div key={brand.name} className="bg-white border border-border rounded-xl p-5 hover:shadow-md hover:border-primary/30 transition-all">
                    <h3 className="font-bold text-dark text-lg">{brand.name}</h3>
                    <p className="text-sm text-gray mt-1">{brand.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-dark mb-3">Looking for a Brand Not Listed?</h2>
          <p className="text-gray mb-6">We have access to many more brands through our distribution network. Contact us and we will source it for you.</p>
          <Link href="/contact" className="inline-flex items-center px-7 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors shadow-md text-sm">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

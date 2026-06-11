import Link from "next/link";
import Image from "next/image";

const brands = [
  "Cisco", "Huawei", "H3C", "Juniper", "Aruba", "Ruckus", "Ruijie", "Fortinet",
  "Dell", "HPE", "Intel", "NVIDIA", "Yealink", "Poly", "MAXHUB", "QNAP",
];

const productLinks = [
  { href: "/products/router", label: "Routers" },
  { href: "/products/switch", label: "Switches" },
  { href: "/products/firewall", label: "Firewalls" },
  { href: "/products/wireless-ap", label: "Wireless" },
  { href: "/products/ai-workstation", label: "AI Workstation" },
  { href: "/products/unified-communications", label: "Unified Comms" },
  { href: "/products/ai-server", label: "Servers" },
  { href: "/products/storage", label: "Storages" },
];

const solutionLinks = [
  { href: "/solutions/enterprise-networking", label: "Enterprise Networking" },
  { href: "/solutions/firewall-security", label: "Firewall & Security" },
  { href: "/solutions/fiber-access", label: "Fiber Access" },
  { href: "/solutions/data-center-networking", label: "Data Center" },
  { href: "/solutions/ai-computing", label: "AI & Cloud" },
  { href: "/solutions/network-infrastructure", label: "Infrastructure" },
];

const newAddress = "Floor 6, Bldg. B, Bantian International Center, No. 5, South Huancheng Road, Bantian Street, Longgang District, Shenzhen, China";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="JSA Solution"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray leading-relaxed mb-4">
              Your trusted network equipment distributor with 20 years of industry experience and import/export license.
              Authorized partner of 35+ global brands.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary/10 transition-all" aria-label="LinkedIn">
                <svg className="w-4 h-4 text-gray" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary/10 transition-all" aria-label="WeChat">
                <svg className="w-4 h-4 text-gray" fill="currentColor" viewBox="0 0 24 24"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zM14.18 13.178c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.85 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982z"/></svg>
              </a>
              <a href="mailto:info@jsasolution.com" className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary/10 transition-all" aria-label="Email">
                <svg className="w-4 h-4 text-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mt-6 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/brands" className="text-sm text-gray hover:text-primary transition-colors">Brands</Link></li>
              <li><Link href="/events-news" className="text-sm text-gray hover:text-primary transition-colors">Events & News</Link></li>
              <li><Link href="/faq" className="text-sm text-gray hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-sm text-gray hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-sm text-gray">{newAddress}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="text-sm text-gray">info@jsasolution.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Brand Marquee */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {brands.map((brand) => (
              <span key={brand} className="text-xs text-gray/40 font-medium">{brand}</span>
            ))}
            <span className="text-xs text-gray/40 font-medium">& 20+ more brands</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray/50">
            &copy; {new Date().getFullYear()} JSA Solution (Shenzhen Jiesian Technology Co., Ltd.). All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="text-xs text-gray/50 hover:text-gray transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-xs text-gray/50 hover:text-gray transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

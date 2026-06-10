"use client";

import Link from "next/link";
import { useState } from "react";

const productCategories = [
  { href: "/products/router", label: "Routers" },
  { href: "/products/switch", label: "Switches" },
  { href: "/products/firewall", label: "Firewalls" },
  { href: "/products/wireless-ap", label: "Wireless" },
  { href: "/products/ai-workstation", label: "AI Workstation" },
  { href: "/products/unified-communications", label: "Unified Comms" },
  { href: "/products/network-management", label: "Network Mgmt" },
  { href: "/products/networking-accessories", label: "Accessories" },
  { href: "/products/ai-server", label: "Servers" },
  { href: "/products/storage", label: "Storages" },
  { href: "/products/optical-access", label: "Optical Access" },
  { href: "/products/optical-transmission", label: "Optical Trans." },
  { href: "/products/video-surveillance", label: "Video Surveil." },
  { href: "/products/cyber-security", label: "Cyber Security" },
  { href: "/products/data-protection", label: "Data Protection" },
];

const solutionCategories = [
  { href: "/solutions/enterprise-networking", label: "Enterprise Networking" },
  { href: "/solutions/firewall-security", label: "Firewall & Security" },
  { href: "/solutions/fiber-access", label: "Fiber Access" },
  { href: "/solutions/data-center-networking", label: "Data Center" },
  { href: "/solutions/ai-computing", label: "AI & Cloud" },
  { href: "/solutions/network-infrastructure", label: "Infrastructure" },
];

const mainNav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products", mega: true, items: productCategories },
  { href: "/solutions", label: "Solutions", mega: true, items: solutionCategories },
  { href: "/brands", label: "Brands" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-cyan shadow-md">
              <span className="font-extrabold text-sm lg:text-base tracking-tight text-white">
                JS<span className="text-accent">A</span>
              </span>
            </div>
            <div className="ml-2 lg:ml-3">
              <div className="text-lg lg:text-xl font-bold text-dark leading-tight">JSA Solution</div>
              <div className="text-[10px] lg:text-xs text-gray hidden sm:block leading-tight">Shenzhen Jiesian Technology Co., Ltd.</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNav.map((item) =>
              item.mega ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveMega(item.label)}
                  onMouseLeave={() => setActiveMega(null)}
                >
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray hover:text-primary transition-colors rounded-md hover:bg-primary-light/50"
                  >
                    {item.label}
                    <svg className="inline w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  {activeMega === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white border border-border rounded-xl shadow-xl py-4 px-2 z-50 w-[520px]">
                      <div className="grid grid-cols-2 gap-1">
                        {item.items?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center px-3 py-2 text-sm text-gray hover:text-primary hover:bg-primary-light/50 rounded-lg transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray hover:text-primary transition-colors rounded-md hover:bg-primary-light/50"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 btn-primary text-sm font-semibold rounded-lg"
            >
              Get a Quote
            </Link>
            <button
              className="lg:hidden p-2 rounded-md text-gray hover:bg-primary-light/50"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-sm font-medium text-gray hover:text-primary hover:bg-primary-light/50 rounded-md" onClick={() => setMobileOpen(false)}>Home</Link>

            <div className="px-3 py-2 text-sm font-semibold text-primary/60 uppercase tracking-wider">Products</div>
            {productCategories.map((child) => (
              <Link key={child.href} href={child.href} className="block pl-6 pr-3 py-1.5 text-sm text-gray hover:text-primary hover:bg-primary-light/50 rounded-md" onClick={() => setMobileOpen(false)}>
                {child.label}
              </Link>
            ))}

            <div className="px-3 py-2 text-sm font-semibold text-primary/60 uppercase tracking-wider mt-2">Solutions</div>
            {solutionCategories.map((child) => (
              <Link key={child.href} href={child.href} className="block pl-6 pr-3 py-1.5 text-sm text-gray hover:text-primary hover:bg-primary-light/50 rounded-md" onClick={() => setMobileOpen(false)}>
                {child.label}
              </Link>
            ))}

            <div className="border-t border-border mt-2 pt-2">
              <Link href="/brands" className="block px-3 py-2 text-sm font-medium text-gray hover:text-primary hover:bg-primary-light/50 rounded-md" onClick={() => setMobileOpen(false)}>Brands</Link>
              <Link href="/about" className="block px-3 py-2 text-sm font-medium text-gray hover:text-primary hover:bg-primary-light/50 rounded-md" onClick={() => setMobileOpen(false)}>About Us</Link>
              <Link href="/contact" className="block px-3 py-2 text-sm font-medium text-gray hover:text-primary hover:bg-primary-light/50 rounded-md" onClick={() => setMobileOpen(false)}>Contact</Link>
            </div>

            <Link href="/contact" className="block mt-3 text-center px-5 py-2.5 btn-primary text-sm font-semibold rounded-lg" onClick={() => setMobileOpen(false)}>
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

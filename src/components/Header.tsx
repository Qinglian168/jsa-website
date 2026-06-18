"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const productCategories = [
  {
    href: "/products/networking",
    label: "Networking",
    children: [
      { href: "/products/networking/switches", label: "Switches" },
      { href: "/products/networking/routers", label: "Routers" },
      { href: "/products/networking/firewalls", label: "Firewalls" },
      { href: "/products/networking/video-surveillance", label: "Video Surveillance" },
      { href: "/products/networking/unified-communications", label: "Unified Communications" },
      { href: "/products/networking/servers-storages", label: "Servers & Storages" },
      { href: "/products/networking/wireless", label: "Wireless" },
      { href: "/products/networking/ups-kvm", label: "UPS & KVM" },
    ],
  },
  { href: "/products/ai-workstation", label: "AI Workstation" },
  { href: "/products/smart-conference", label: "Smart Conference Devices" },
  { href: "/products/optical-transceivers", label: "Optical Transceivers" },
  { href: "/products/fiber-optic-cables", label: "Fiber Optic Cables" },
  { href: "/products/testers-tools", label: "Testers & Tools" },
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
  { href: "/products", label: "Products", mega: true, items: productCategories },
  { href: "/solutions", label: "Solutions", mega: true, items: solutionCategories },
  { href: "/events-news", label: "Events & News" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="JSA Solution"
              width={120}
              height={40}
              className="h-8 lg:h-10 w-auto object-contain"
              priority
            />
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
                    <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white border border-border rounded-xl shadow-xl z-50 py-3 px-2" style={{ minWidth: item.label === "Products" ? "620px" : "520px" }}>
                      {item.label === "Products" ? (
                        /* Products mega menu: show Networking group + other categories */
                        <div className="flex gap-6">
                          {/* Left: Networking group with children */}
                          <div className="min-w-[260px]">
                            {item.items?.map((cat) =>
                              'children' in cat ? (
                                <div key={cat.href}>
                                  <Link
                                    href={cat.href}
                                    className="block px-3 py-1.5 text-sm font-bold text-dark hover:text-primary"
                                  >
                                    {cat.label}
                                  </Link>
                                  {('children' in cat) && (cat as {children: {href: string; label: string}[]}).children.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      className="block pl-5 pr-3 py-1 text-xs text-gray-600 hover:text-primary hover:bg-primary-light/50 rounded-md transition-colors"
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              ) : null
                            )}
                          </div>
                          {/* Right: Other categories */}
                          <div className="border-l border-border pl-4 flex flex-col gap-1">
                            {item.items?.map((cat) =>
                              !('children' in cat) ? (
                                <Link
                                  key={cat.href}
                                  href={cat.href}
                                  className="whitespace-nowrap px-3 py-2 text-sm text-gray hover:text-primary hover:bg-primary-light/50 rounded-lg transition-colors"
                                >
                                  {cat.label}
                                </Link>
                              ) : null
                            )}
                          </div>
                        </div>
                      ) : (
                        /* Default mega menu: 2-column grid */
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
                      )}
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
            <div className="px-3 py-2 text-sm font-semibold text-primary/60 uppercase tracking-wider">Products</div>
            {productCategories.map((cat) =>
              'children' in cat ? (
                <div key={cat.href}>
                  <div className="px-3 py-1.5 text-sm font-semibold text-dark">{cat.label}</div>
                  {(cat as {children: {href: string; label: string}[]}).children.map((child) => (
                    <Link key={child.href} href={child.href} className="block pl-8 pr-3 py-1 text-xs text-gray-600 hover:text-primary hover:bg-primary-light/50 rounded-md" onClick={() => setMobileOpen(false)}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link key={cat.href} href={cat.href} className="block px-3 py-1.5 text-sm text-gray hover:text-primary hover:bg-primary-light/50 rounded-md" onClick={() => setMobileOpen(false)}>
                  {cat.label}
                </Link>
              )
            )}

            <div className="px-3 py-2 text-sm font-semibold text-primary/60 uppercase tracking-wider mt-2">Solutions</div>
            {solutionCategories.map((child) => (
              <Link key={child.href} href={child.href} className="block pl-6 pr-3 py-1.5 text-sm text-gray hover:text-primary hover:bg-primary-light/50 rounded-md" onClick={() => setMobileOpen(false)}>
                {child.label}
              </Link>
            ))}

            <div className="border-t border-border mt-2 pt-2">
              <Link href="/events-news" className="block px-3 py-2 text-sm font-medium text-gray hover:text-primary hover:bg-primary-light/50 rounded-md" onClick={() => setMobileOpen(false)}>Events & News</Link>
              <Link href="/brands" className="block px-3 py-2 text-sm font-medium text-gray hover:text-primary hover:bg-primary-light/50 rounded-md" onClick={() => setMobileOpen(false)}>Brands</Link>
              <Link href="/about" className="block px-3 py-2 text-sm font-medium text-gray hover:text-primary hover:bg-primary-light/50 rounded-md" onClick={() => setMobileOpen(false)}>About Us</Link>
              <Link href="/contact" className="block px-3 py-2 text-sm font-medium text-gray hover:text-primary hover:bg-primary-light/50 rounded-md" onClick={() => setMobileOpen(false)}>Contact Us</Link>
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

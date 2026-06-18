"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
  const [qrModal, setQrModal] = useState<{ open: boolean; type: "wechat" | "whatsapp" }>({ open: false, type: "wechat" });

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
              Your trusted network communication equipment distributor with 17 years of industry experience and import/export license.
              Authorized partner of 50+ global brands.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setQrModal({ open: true, type: "whatsapp" })}
                className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-green-50 transition-all"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 text-gray" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </button>
              <button
                onClick={() => setQrModal({ open: true, type: "wechat" })}
                className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-green-50 transition-all"
                aria-label="WeChat"
              >
                <svg className="w-4 h-4 text-gray" fill="currentColor" viewBox="0 0 24 24"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zM14.18 13.178c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.85 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982z"/></svg>
              </button>
              <a href="mailto:info@jsasolution.com" className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-primary/10 transition-all" aria-label="Email">
                <svg className="w-4 h-4 text-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>

            {/* QR Code Modal */}
            {qrModal.open && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setQrModal({ ...qrModal, open: false })}>
                <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => setQrModal({ ...qrModal, open: false })}
                    className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Close"
                  >
                    <svg className="w-4 h-4 text-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                  <h3 className="text-lg font-bold text-dark text-center mb-1">
                    {qrModal.type === "wechat" ? "Scan WeChat QR Code" : "Scan WhatsApp QR Code"}
                  </h3>
                  <p className="text-xs text-gray text-center mb-4">Scan to chat with Lucy</p>
                  <div className="flex justify-center">
                    <Image
                      src={qrModal.type === "wechat" ? "/qrcode-wechat.jpg" : "/qrcode-whatsapp.jpg"}
                      alt={qrModal.type === "wechat" ? "WeChat QR Code" : "WhatsApp QR Code"}
                      width={260}
                      height={260}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            )}
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
          </div>

          {/* Contact */}
          <div>
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
            <span className="text-xs text-gray/40 font-medium">& 50+ more brands</span>
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

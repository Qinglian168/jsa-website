"use client";

import Link from "next/link";
import { useState } from "react";

const address = "Floor 6, Bldg. B, Bantian International Center, No. 5, South Huancheng Road, Bantian Street, Longgang District, Shenzhen, China";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open user's email client with form data pre-filled
    const params = new URLSearchParams({
      subject: `New Inquiry from ${formData.name} - JSA Solution Website`,
      body: [
        `Dear JSA Team,`,
        ``,
        `I would like to inquire about the following products/services:`,
        ``,
        `--- Contact Information ---`,
        `Name: ${formData.name}`,
        `Company: ${formData.company || "N/A"}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone || "N/A"}`,
        `Product Category: ${formData.product || "Not specified"}`,
        ``,
        `--- Message ---`,
        `${formData.message}`,
        ``,
        `Please get back to me at your earliest convenience.`,
        ``,
        `Best regards,`,
        `${formData.name}`,
      ].join("\r\n"),
    });
    window.location.href = `mailto:info@jsasolution.com?${params.toString()}`;
    setStatus("sent");
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-deepblue text-white">
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact Us</span>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Get in touch with our team for product inquiries, quotes, or technical support. We respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-dark mb-4">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-50 border border-border rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <div className="font-semibold text-dark">Address</div>
                      <div className="text-sm text-gray">{address}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-50 border border-border rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <div className="font-semibold text-dark">Email</div>
                      <div className="text-sm text-gray">info@jsasolution.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-50 border border-border rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <div className="font-semibold text-dark">Business Hours</div>
                      <div className="text-sm text-gray">Mon-Fri: 9:00 - 18:00 (CST)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-border rounded-2xl p-6">
                <h3 className="font-bold text-dark mb-2">Quick Response Guarantee</h3>
                <p className="text-sm text-gray">
                  We commit to responding to all inquiries within <strong className="text-primary">24 hours</strong>.
                  For urgent requests, please email us directly.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-white border border-border rounded-2xl p-6 lg:p-8 space-y-5 shadow-tech">
                <h2 className="text-xl font-bold text-dark mb-2">Request a Quote</h2>
                <p className="text-sm text-gray mb-4">Fill out the form below and click Send Inquiry to email us directly. We respond within 24 hours.</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-light border border-border rounded-lg text-sm text-dark focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none placeholder-gray/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-light border border-border rounded-lg text-sm text-dark focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none placeholder-gray/50"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-light border border-border rounded-lg text-sm text-dark focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none placeholder-gray/50"
                      placeholder="email@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-light border border-border rounded-lg text-sm text-dark focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none placeholder-gray/50"
                      placeholder="+86-"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark mb-1">Product Category</label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-light border border-border rounded-lg text-sm text-dark focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                  >
                    <option value="">Select a category</option>
                    <option value="router">Enterprise Routers</option>
                    <option value="switch">Network Switches</option>
                    <option value="wireless">Wireless AP</option>
                    <option value="conference">Conference Systems</option>
                    <option value="ai-server">AI Computing Servers</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark mb-1">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-light border border-border rounded-lg text-sm text-dark focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-none placeholder-gray/50"
                    placeholder="Tell us about your requirements — products, quantities, delivery location, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 btn-primary rounded-lg text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Send Inquiry
                </button>
                {status === "sent" && (
                  <div className="mt-3 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700">
                    <div className="font-medium mb-1">📧 Your email client is opening...</div>
                    <div className="text-xs text-blue-600">Please click "Send" in your email app to deliver your inquiry to info@jsasolution.com. If the email client didn't open, check your browser's popup blocker or <a href="mailto:info@jsasolution.com" className="underline font-medium">click here to email us directly</a>.</div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

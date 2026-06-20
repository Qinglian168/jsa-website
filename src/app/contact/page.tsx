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
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: "d2fcd521-50bb-4ec6-976b-05c4e35db872",
          subject: `New Inquiry from ${formData.name} - JSA Solution Website`,
          name: formData.name,
          email: formData.email || "noreply@jsasolution.com",
          company: formData.company || "N/A",
          phone: formData.phone || "N/A",
          product_category: formData.product || "Not specified",
          message: formData.message,
        }),
      });
      const result = await response.json();
      console.log("Web3Forms result:", result);
      if (response.ok && result.success) {
        setStatus("success");
        setFormData({ name: "", company: "", email: "", phone: "", product: "", message: "" });
      } else {
        // API failed — fall back to mailto
        throw new Error(result.message || "API error");
      }
    } catch (err) {
      // Fallback: use mailto link if API fails
      const params = new URLSearchParams({
        subject: `New Inquiry from ${formData.name} - JSA Solution`,
        body: [
          `Name: ${formData.name}`,
          `Company: ${formData.company || "N/A"}`,
          `Email: ${formData.email}`,
          `Phone: ${formData.phone || "N/A"}`,
          `Product Category: ${formData.product || "Not specified"}`,
          ``,
          `Message:`,
          formData.message,
        ].join("\r\n"),
      });
      window.open(`mailto:info@jsasolution.com?${params.toString()}`, "_blank");
      setStatus("success");
    }
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
                <p className="text-sm text-gray mb-4">Fill out the form below and our team will get back to you within 24 hours.</p>

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
                  disabled={status === "sending"}
                  className="w-full sm:w-auto px-8 py-3 btn-primary rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Inquiry"}
                </button>
                {status === "success" && (
                  <div className="mt-3 p-4 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700 font-medium">
                    ✓ Thank you! Your inquiry has been sent. We'll get back to you within 24 hours.
                  </div>
                )}
                {status === "error" && (
                  <div className="mt-3 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 font-medium">
                    Something went wrong. Please try again or email us directly at info@jsasolution.com
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

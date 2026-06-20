import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Network Equipment Purchasing, Shipping, Warranty Questions",
  description:
    "Frequently asked questions about JSA Solution: company profile, products, pricing, worldwide shipping (DHL, FedEx, UPS, Air Cargo, sea freight), warranty, and technical support.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    category: "About JSA Solution",
    items: [
      { q: "What is JSA Solution?", a: "JSA Solution (Shenzhen Jiesian Technology Co., Ltd.) is a professional network communication equipment distributor based in Shenzhen, China. Founded in 2010, we have 17+ years of industry experience and are an authorized partner of 50+ global brands including Cisco, Huawei, H3C, Juniper, Aruba, NVIDIA, Dell, Grandstream, Yealink, HPE, Poly and so on." },
      { q: "Do you have an import/export license?", a: "Yes, JSA Solution holds a valid import and export operating license issued by the Chinese government. This allows us to handle cross-border procurement seamlessly, providing competitive pricing and smooth logistics for international clients." },
      { q: "Are your products genuine and under warranty?", a: "All products sold by JSA Solution are sourced through authorized distribution channels. Every item comes with the manufacturer's full warranty. We never sell refurbished, counterfeit, or grey-market products." },
    ],
  },
  {
    category: "Products & Pricing",
    items: [
      { q: "What product categories do you carry?", a: "We carry five major categories: Enterprise Routers, Network Switches, Wireless Access Points, Video Conferencing Systems, and AI Computing Servers. Within each category, we offer products from multiple brands to give you the best options." },
      { q: "Can I buy a single unit, or is there a minimum order?", a: "There is no minimum order quantity. You can purchase a single switch or router. However, volume discounts are available for orders of 10+ units. Contact us for bulk pricing." },
      { q: "How do I get a price quote?", a: "Simply fill out our Contact Form or email info@jsasolution.com with the product model, quantity, and your delivery location. We typically provide a quote within 24 hours." },
      { q: "Do you offer competitive pricing?", a: "Yes. As an authorized distributor, we get direct pricing from brands, which allows us to offer very competitive rates — often 10-30% lower than retail. Volume orders get additional discounts." },
    ],
  },
  {
    category: "Shipping & Delivery",
    items: [
      { q: "Do you ship internationally?", a: "Yes! We ship worldwide via DHL, FedEx, UPS, Air Cargo, sea freight etc. Our Shenzhen location gives us excellent logistics connectivity to Asia, Europe, the Middle East, the Americas and Africa." },
      { q: "How fast is delivery?", a: "For in-stock items in our Shenzhen warehouse, we dispatch within 1-3 business days. International express shipping typically takes 3-7 days. Sea freight takes 15-35 days depending on destination." },
      { q: "Do you ship to Hong Kong?", a: "Yes, we ship to Hong Kong, China and worldwide. Shenzhen's proximity to Hong Kong, China means very fast delivery times (1-2 days)." },
    ],
  },
  {
    category: "Technical Support",
    items: [
      { q: "Do you provide technical support?", a: "Yes, we provide pre-sales and post-sales technical support. Our team can help with product selection, solution design, configuration assistance, and troubleshooting." },
      { q: "Can you help design a complete network solution?", a: "Absolutely! Our solutions team can design complete networking, wireless, meeting room, and AI computing solutions. Visit our Solutions page or contact us for a free consultation." },
      { q: "Do you offer installation services?", a: "We offer professional installation services in the Shenzhen area. For projects in other cities, we can coordinate with local partners or provide remote guidance." },
    ],
  },
  {
    category: "Warranty & Returns",
    items: [
      { q: "What warranty do products come with?", a: "All products come with the manufacturer's standard warranty — typically 1-3 years depending on the brand and product type. Extended warranty and support contracts are available." },
      { q: "What is your return policy?", a: "Products can be returned within 7 days of delivery if they are in original, unopened condition. For defective products, we follow the manufacturer's RMA process and provide replacement or repair." },
    ],
  },
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.a },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-blue-600 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">FAQ</span>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Find answers to common questions about ordering, shipping, warranty, and technical support.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((cat) => (
            <div key={cat.category} className="mb-12">
              <h2 className="text-xl font-bold text-dark mb-6">{cat.category}</h2>
              <div className="space-y-4">
                {cat.items.map((item, i) => (
                  <details key={i} className="bg-white border border-border rounded-xl p-5 group">
                    <summary className="font-semibold text-dark cursor-pointer list-none flex items-center justify-between">
                      {item.q}
                      <svg className="w-5 h-5 text-gray group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <p className="mt-3 text-sm text-gray leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-dark mb-3">Still Have Questions?</h2>
          <p className="text-gray mb-6">Our team is happy to help with any questions about products, pricing, or solutions.</p>
          <Link href="/contact" className="inline-flex items-center px-7 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors shadow-md text-sm">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

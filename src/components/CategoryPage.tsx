import Link from "next/link";
import Image from "next/image";

interface Product {
  name: string;
  series: string;
  desc: string;
  features: string[];
}

interface CategoryPageProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  brands: string[];
  products: Product[];
  faqs: { q: string; a: string }[];
  schemaDescription: string;
  color: string;
  bannerImage: string;
}

export function CategoryPage({ title, subtitle, description, icon, brands, products, faqs, schemaDescription, color, bannerImage }: CategoryPageProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero with Banner Image */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={bannerImage}
            alt={`${title} - JSA Solution`}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0" style={{background: "linear-gradient(135deg, rgba(7,11,30,0.9), rgba(10,14,39,0.85))"}} />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="text-sm text-white/40 mb-4">
            <Link href="/" className="hover:text-cyan">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-cyan">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-cyan">{title}</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{icon}</span>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-white">{title}</h1>
          </div>
          <p className="text-lg text-white/60 max-w-3xl">{description}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {brands.map((brand) => (
              <span key={brand} className="text-sm bg-cyan/10 border border-cyan/20 backdrop-blur-sm px-3 py-1 rounded-full text-cyan/80">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Product Series */}
      <section className="py-16 lg:py-20 bg-light bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-line mb-4" />
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-8">Product Series</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.name} className="card-tech rounded-2xl p-6">
                <div className="text-xs font-semibold text-cyan bg-cyan/10 border border-cyan/20 px-2 py-1 rounded inline-block mb-3">
                  {product.series}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                <p className="text-sm text-gray mb-4 leading-relaxed">{product.desc}</p>
                <ul className="space-y-1.5">
                  {product.features.map((f) => (
                    <li key={f} className="text-sm text-gray flex items-start gap-2">
                      <svg className="w-4 h-4 text-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center mt-4 text-sm font-semibold text-cyan hover:underline">
                  Get Quote
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-line mb-4" />
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-surface border border-border rounded-xl p-5 group">
                <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="mt-3 text-sm text-gray leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Need Help Choosing the Right {title}?</h2>
          <p className="text-gray mb-6">Our team of experts can recommend the best products for your specific requirements.</p>
          <Link href="/contact" className="inline-flex items-center px-7 py-3 btn-neon rounded-lg text-sm">
            Contact Our Experts
          </Link>
        </div>
      </section>
    </>
  );
}

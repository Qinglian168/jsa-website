import Link from "next/link";
import type { Metadata } from "next";

interface Product {
  name: string;
  series: string;
  desc: string;
  features: string[];
}

interface FAQ {
  q: string;
  a: string;
}

interface CategoryPageProps {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  bannerImage: string;
  brands: string[];
  products: Product[];
  faqs: FAQ[];
  schemaDescription: string;
}

export function CategoryPage({ title, subtitle, description, icon, color, bannerImage, brands, products, faqs, schemaDescription }: CategoryPageProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: title,
            description: schemaDescription,
            url: `https://jsasolution.com/products/${subtitle.toLowerCase().replace(/\s+/g, "-")}`,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: products.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: p.name,
                description: p.desc,
              })),
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={bannerImage} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90`} />
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-white">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{subtitle}</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{icon}</span>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-white">{title}</h1>
          </div>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">{description}</p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-dark mb-10 text-center">Featured Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.name} className="bg-slate-50 border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold bg-primary-light text-primary px-2 py-0.5 rounded">{product.series}</span>
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{product.name}</h3>
                <p className="text-sm text-gray leading-relaxed mb-4">{product.desc}</p>
                <ul className="space-y-1">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray">
                      <svg className="w-3.5 h-3.5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 lg:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-dark mb-10 text-center">Authorized Brands</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((brand) => (
              <span key={brand} className="px-5 py-3 bg-white border border-border rounded-xl text-sm font-semibold text-dark shadow-sm">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-dark mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-slate-50 border border-border rounded-xl p-5 group">
                <summary className="text-sm font-semibold text-dark cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <svg className="w-4 h-4 text-primary group-open:rotate-180 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="text-sm text-gray mt-3 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold mb-3">Need Help Selecting Products?</h2>
          <p className="text-white/70 mb-6">Our engineers provide free consultation and competitive quotes within 24 hours.</p>
          <Link href="/contact" className="inline-flex items-center px-7 py-3 bg-accent text-primary-dark font-bold rounded-lg hover:bg-accent-dark transition-colors shadow-md text-sm">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}

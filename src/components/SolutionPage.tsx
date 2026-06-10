import Link from "next/link";

interface SolutionPageProps {
  title: string;
  icon: string;
  description: string;
  color: string;
  challenges: string[];
  approach: { title: string; desc: string }[];
  products: { category: string; items: string[] }[];
  benefits: string[];
}

export function SolutionPage({ title, icon, description, color, challenges, approach, products, benefits }: SolutionPageProps) {
  return (
    <>
      {/* Hero */}
      <section className={`bg-gradient-to-br ${color} text-white py-16 lg:py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/solutions" className="hover:text-white">Solutions</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{title}</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{icon}</span>
            <h1 className="text-3xl lg:text-5xl font-extrabold">{title}</h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl">{description}</p>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-dark mb-8">Common Challenges</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {challenges.map((c, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
                <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
                <span className="text-sm text-dark">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 lg:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-dark mb-8">Our Approach</h2>
          <div className="space-y-6">
            {approach.map((step, i) => (
              <div key={i} className="flex items-start gap-5 bg-white p-6 rounded-2xl border border-border shadow-sm">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark mb-1">{step.title}</h3>
                  <p className="text-sm text-gray leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-dark mb-8">Recommended Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.category} className="bg-light border border-border rounded-xl p-5">
                <h3 className="font-bold text-dark mb-3">{p.category}</h3>
                <ul className="space-y-1.5">
                  {p.items.map((item) => (
                    <li key={item} className="text-sm text-gray flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-dark mb-8">Why JSA Solution?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border shadow-sm">
                <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-sm text-dark">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-br from-primary via-primary-dark to-deepblue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold mb-3">Ready to Build Your {title}?</h2>
          <p className="text-white/70 mb-6">Get a free consultation and customized solution proposal from our expert team.</p>
          <Link href="/contact" className="inline-flex items-center px-7 py-3 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-all shadow-md text-sm">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

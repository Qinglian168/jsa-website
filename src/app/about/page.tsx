import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About JSA Solution - Comprehensive ICT & Smart Office Equipment Provider",
  description:
    "JSA Solution is a comprehensive service provider in China specializing in the communication & information industry and smart office equipment, with 17 years of export experience serving clients worldwide.",
  alternates: { canonical: "/about" },
};

const milestones = [
  { year: "2010", event: "Company founded in Shenzhen, China" },
  { year: "2009", event: "Obtained import & export operating license" },
  { year: "2012", event: "Became authorized Cisco and Huawei partner" },
  { year: "2015", event: "Expanded to 35+ brand partnerships" },


  { year: "2018", event: "Launched video conferencing solutions division" },
  { year: "2021", event: "Entered AI computing server market" },
  { year: "2024", event: "Reached 50+ authorized brand partnerships" },
  { year: "2026", event: "Launched jsasolution.com with global reach" },
];

const certifications = [
  "Import & Export License",
  "Cisco Authorized Distributor",
  "Huawei Authorized Partner",
  "H3C Silver Partner",
  "ISO 9001 Quality Management",
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Shenzhen Jiesian Technology Co., Ltd.",
            alternateName: "JSA Solution",
            url: "https://jsasolution.com",
            description: "Professional network equipment distributor with 17 years of experience, authorized partner of 50+ brands, with import/export license.",
            foundingDate: "2006",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Floor 6, Bldg. B, Bantian International Center, No. 5, South Huancheng Road, Bantian Street",
              addressLocality: "Longgang District, Shenzhen",
              addressRegion: "Guangdong",
              addressCountry: "CN",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-blue-600 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/60 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">About Us</span>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-4">About JSA Solution</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Shenzhen Jiesian Technology Co., Ltd. — Your trusted network communication equipment distributor since 2010.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-dark mb-6">About JSA Solution</h2>
              <div className="space-y-4 text-gray leading-relaxed">
                <p>
                  We are a comprehensive service provider in China specializing in the <strong className="text-dark">communication & information industry</strong> and{" "}
                  <strong className="text-dark">smart office equipment</strong>. We supply a full range of branded products including network communication equipment, full-coverage wireless systems, enterprise storage servers, AI computing power servers, HD audio & video conference systems and interactive smart conference panels.
                </p>
                <p>
                  With <strong className="text-primary">17 years of export experience</strong>, we serve clients worldwide. Our business covers government & enterprise informatization, enterprise networking, AI new infrastructure, park weak current engineering and smart office renovation. Supported by China's complete supply chain, we guarantee genuine products, professional solutions and one-stop services.
                </p>
                <p>
                  We offer <strong className="text-primary">flexible payment terms</strong> and efficient global delivery. With reliable quality, cost performance and full after-sales support, we aim to be your trusted long-term partner for IT hardware procurement.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-light rounded-2xl p-6 text-center border border-blue-100">
                <div className="text-3xl font-extrabold text-primary">17+</div>
                <div className="text-sm text-gray mt-1">Years Experience</div>
              </div>
              <div className="bg-amber-50 rounded-2xl p-6 text-center border border-amber-100">
                <div className="text-3xl font-extrabold text-amber-600">50+</div>
                <div className="text-sm text-gray mt-1">Brand Partners</div>
              </div>
              <div className="bg-emerald-50 rounded-2xl p-6 text-center border border-emerald-100">
                <div className="text-3xl font-extrabold text-emerald-600">10000+</div>
                <div className="text-sm text-gray mt-1">Products</div>
              </div>
              <div className="bg-purple-50 rounded-2xl p-6 text-center border border-purple-100">
                <div className="text-3xl font-extrabold text-purple-600">2000+</div>
                <div className="text-sm text-gray mt-1">Clients Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Poster */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Image
              src="/jsa-poster.png"
              alt="JSA Solution - Professional IT Hardware & Solutions for Communication, Information Industry and Smart Office"
              width={1400}
              height={933}
              className="rounded-2xl shadow-xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold mb-3">Ready to Partner with Us?</h2>
          <p className="text-white/70 mb-6">Contact our team to discuss your network equipment needs.</p>
          <Link href="/contact" className="inline-flex items-center px-7 py-3 bg-accent text-primary-dark font-bold rounded-lg hover:bg-accent-dark transition-colors shadow-md text-sm">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "JSA Solution - Professional Network Equipment Distributor | Shenzhen Jiesian Technology Co., Ltd.",
    template: "%s | JSA Solution",
  },
  description:
    "JSA Solution is a comprehensive service provider in China specializing in the communication & information industry and smart office equipment. We supply network communication equipment, wireless systems, AI computing servers, and smart conference solutions from 35+ authorized brands. 20 years export experience.",
  keywords: [
    "network equipment distributor",
    "Cisco distributor",
    "Huawei distributor",
    "H3C distributor",
    "router supplier",
    "switch distributor",
    "wireless AP",
    "AI computing server",
    "video conferencing system",
    "Shenzhen network equipment",
    "enterprise firewall",
    "optical access network",
    "data center networking",
    "network infrastructure",
  ],
  metadataBase: new URL("https://jsasolution.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "JSA Solution",
    title: "JSA Solution - Professional Network Equipment Distributor",
    description:
      "Comprehensive ICT & smart office equipment provider in China. 20 years export experience, 35+ authorized brand partnerships. Network equipment, AI servers, smart conference solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-733J850335" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-733J850335', {
                page_title: document.title,
                page_location: window.location.href,
                custom_map: {'dimension1': 'company'}
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Shenzhen Jiesian Technology Co., Ltd.",
              alternateName: "JSA Solution",
              url: "https://jsasolution.com",
              logo: "https://jsasolution.com/logo.png",
              description:
                "Professional network equipment distributor with 20 years of experience, authorized partner of 35+ brands.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bldg B, Bantian International Center, No.5 Huancheng South Road",
                addressLocality: "Longgang District, Shenzhen",
                addressRegion: "Guangdong",
                addressCountry: "CN",
              },
              email: "info@jsasolution.com",
              foundingDate: "2006",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

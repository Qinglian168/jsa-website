import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default:
      "JSA Solution - Network Equipment Distributor & Smart Office Solutions | Shenzhen Jiesian Technology",
    template: "%s | JSA Solution",
  },
  description:
    "JSA Solution is a leading network communication equipment distributor in China since 2010. We supply Cisco, Huawei, H3C, Juniper networking gear, AI computing servers, unified communications, and smart conference solutions to 80+ countries. 50+ authorized brands, 10000+ products, fast global shipping.",
  keywords: [
    "network equipment distributor",
    "Cisco distributor China",
    "Huawei distributor",
    "H3C distributor",
    "Juniper distributor",
    "enterprise network equipment supplier",
    "router supplier China",
    "network switch distributor",
    "wireless AP supplier",
    "firewall distributor",
    "AI computing server supplier",
    "GPU server distributor",
    "video conferencing system",
    "unified communications equipment",
    "smart conference solution",
    "optical transceiver supplier",
    "fiber optic cable distributor",
    "Shenzhen network equipment exporter",
    "data center networking",
    "network infrastructure provider",
    "ICT equipment distributor",
    "Horion smart tablet",
    "MAXHUB interactive display",
    "Grandstream IP PBX",
    "Yealink IP phone distributor",
  ],
  metadataBase: new URL("https://jsasolution.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "JSA Solution",
    title:
      "JSA Solution - Network Equipment Distributor & Smart Office Solutions",
    description:
      "Leading network communication equipment distributor in China since 2010. 50+ authorized brands, 10000+ products, fast global shipping to 80+ countries.",
    url: "https://jsasolution.com",
    images: [
      {
        url: "/jsa-poster.png",
        width: 1400,
        height: 933,
        alt: "JSA Solution - Network Equipment Distributor & Smart Office Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "JSA Solution - Network Equipment Distributor & Smart Office Solutions",
    description:
      "Leading network communication equipment distributor in China since 2010. 50+ authorized brands, 10000+ products, fast global shipping.",
    images: ["/jsa-poster.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Technology",
  authors: [{ name: "JSA Solution", url: "https://jsasolution.com" }],
  creator: "Shenzhen Jiesian Technology Co., Ltd.",
  publisher: "Shenzhen Jiesian Technology Co., Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-733J850335"
        />
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
        {/* Organization Schema */}
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
              image: "https://jsasolution.com/jsa-poster.png",
              description:
                "Professional network communication equipment distributor with 17 years of experience, authorized partner of 50+ global brands. Supplying networking equipment, AI computing servers, unified communications, and smart conference solutions to 80+ countries worldwide.",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Floor 6, Bldg. B, Bantian International Center, No. 5, South Huancheng Road, Bantian Street, Longgang District",
                addressLocality: "Shenzhen",
                addressRegion: "Guangdong",
                addressCountry: "CN",
              },
              email: "info@jsasolution.com",
              telephone: "+86-18929367032",
              foundingDate: "2010",
              numberOfEmployees: "50-200",
              knowsAbout: [
                "Network Equipment Distribution",
                "Enterprise Networking",
                "Data Center Solutions",
                "AI Computing Servers",
                "Unified Communications",
                "Smart Conference Solutions",
                "Network Security",
                "Wireless Networking",
                "Fiber Optic Solutions",
              ],
              sameAs: [],
            }),
          }}
        />
        {/* WebSite Schema with Search Action */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "JSA Solution",
              alternateName: "Shenzhen Jiesian Technology Co., Ltd.",
              url: "https://jsasolution.com",
              description:
                "Leading network communication equipment distributor in China. 50+ authorized brands, 10000+ products, global shipping.",
              publisher: {
                "@type": "Organization",
                name: "Shenzhen Jiesian Technology Co., Ltd.",
              },
            }),
          }}
        />
        {/* BreadcrumbList Schema for global site structure */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://jsasolution.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Products",
                  item: "https://jsasolution.com/products",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Solutions",
                  item: "https://jsasolution.com/solutions",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "About Us",
                  item: "https://jsasolution.com/about",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Contact",
                  item: "https://jsasolution.com/contact",
                },
              ],
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

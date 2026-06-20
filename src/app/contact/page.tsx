import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us - Request a Quote | JSA Solution",
  description:
    "Contact JSA Solution for network equipment inquiries, quotes, and technical support. Email info@jsasolution.com or call +86-18929367032. We respond within 24 hours. Shenzhen, China.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact JSA Solution - Network Equipment Distributor",
    description:
      "Get in touch for product inquiries, quotes, and technical support. 24-hour response guarantee.",
    url: "https://jsasolution.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact JSA Solution - Network Equipment Distributor",
    description:
      "Get in touch for product inquiries, quotes, and technical support. 24-hour response guarantee.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

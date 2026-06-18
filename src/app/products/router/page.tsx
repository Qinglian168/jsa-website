import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Enterprise Routers - Cisco, Huawei, H3C, Juniper Authorized Distributor",
  description:
    "Shop enterprise routers from Cisco, Huawei, H3C, Juniper, and more. VPN routers, SD-WAN, edge routers — authorized distributor with 17 years of experience in Shenzhen, China.",
  alternates: { canonical: "/products/router" },
};

export default function RouterPage() {
  return (
    <CategoryPage
      title="Enterprise Routers"
      subtitle="Routers"
      description="High-performance enterprise routing solutions for secure, reliable, and scalable network connectivity. From branch office VPN routers to data center core routers."
      icon="🌐"
      color="from-blue-600 via-blue-700 to-indigo-800"
      bannerImage="https://images.unsplash.com/photo-1544197150-b99a4adbb1f5?w=1920&q=80"
      brands={["Cisco", "Huawei", "H3C", "Juniper", "Ruijie", "MikroTik", "Fortinet"]}
      products={[
        {
          name: "Cisco ISR 4000 Series",
          series: "Cisco",
          desc: "Integrated Services Routers for branch and mid-size offices with built-in security and SD-WAN.",
          features: ["SD-WAN ready", "Built-in security (Firepower)", "Up to 10 Gbps throughput", "Modular IOS XE"],
        },
        {
          name: "Cisco ASR 1000 Series",
          series: "Cisco",
          desc: "Aggregation Services Routers for enterprise edge and data center connectivity.",
          features: ["Up to 100 Gbps forwarding", "Carrier-class reliability", "ESP processing", "Embedded services"],
        },
        {
          name: "Huawei NetEngine AR Series",
          series: "Huawei",
          desc: "Agile routers for enterprise branch and HQ with SD-WAN and built-in security.",
          features: ["SD-WAN native support", "Built-in firewall", "Wi-Fi models available", "Cloud management"],
        },
        {
          name: "H3C MSR Series",
          series: "H3C",
          desc: "Multi-Service Routers with flexible modular design for enterprise networking.",
          features: ["Modular expansion", "Voice/Video/Data integration", "Comware OS", "IPv6 ready"],
        },
        {
          name: "Juniper SRX Series",
          series: "Juniper",
          desc: "Services Gateways combining routing, security, and SD-WAN in a single platform.",
          features: ["Next-gen firewall", "SD-WAN integration", "Junos OS", "SRX4600 to SRX150"],
        },
        {
          name: "Ruijie Reyee Series",
          series: "Ruijie",
          desc: "Cost-effective enterprise routers for SMB and branch networking.",
          features: ["Affordable pricing", "Cloud-managed options", "VPN support", "Easy deployment"],
        },
      ]}
      faqs={[
        {
          q: "What types of enterprise routers does JSA Solution supply?",
          a: "We supply a full range of enterprise routers from Cisco, Huawei, H3C, Juniper, Ruijie, and more — including branch routers (ISR/AR), aggregation routers (ASR/NE), and SD-WAN gateways. All products are sourced through authorized channels with full warranty.",
        },
        {
          q: "Can you help me choose the right router for my business?",
          a: "Absolutely! Our pre-sales engineers can recommend the best router based on your network size, throughput requirements, SD-WAN needs, and budget. Contact us for a free consultation.",
        },
        {
          q: "Do you offer SD-WAN solutions?",
          a: "Yes, we supply SD-WAN capable routers from Cisco (Viptela), Huawei, H3C, and Juniper. We can also help design and deploy complete SD-WAN solutions for multi-site enterprises.",
        },
        {
          q: "What is the warranty on enterprise routers?",
          a: "All routers come with the manufacturer's standard warranty (typically 1-3 years). Extended warranty and support contracts are also available.",
        },
        {
          q: "Do you ship routers internationally?",
          a: "Yes! JSA Solution is a licensed import/export company based in Shenzhen, China. We ship worldwide with competitive logistics rates.",
        },
      ]}
      schemaDescription="Enterprise routers from Cisco, Huawei, H3C, Juniper authorized distributor"
    />
  );
}

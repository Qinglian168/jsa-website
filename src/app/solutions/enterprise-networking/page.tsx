import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Enterprise Networking Solution - Office & Campus Network Design",
  description:
    "End-to-end enterprise networking solutions: core switching, SD-WAN, network security, and monitoring. Designed and delivered by JSA Solution with 17 years of experience.",
  alternates: { canonical: "/solutions/enterprise-networking" },
};

export default function EnterpriseNetworkingPage() {
  return (
    <SolutionPage
      title="Enterprise Networking"
      icon="🏢"
      description="Complete wired and wireless networking solutions for offices, campuses, and data centers. From network design and product selection to deployment and ongoing management."
      color="from-blue-600 via-blue-700 to-indigo-800"
      challenges={[
        "Network bottlenecks during peak hours affecting productivity",
        "Complex multi-vendor environment difficult to manage",
        "Security threats from unsecured network edges",
        "Remote office connectivity and SD-WAN migration",
        "Lack of visibility into network performance",
        "Aging infrastructure needing modernization",
      ]}
      approach={[
        { title: "Network Assessment", desc: "We analyze your current network topology, traffic patterns, and pain points to identify optimization opportunities." },
        { title: "Solution Design", desc: "Our engineers design a tailored network architecture with the right mix of core, distribution, and access layer equipment." },
        { title: "Product Selection", desc: "We recommend the best products from our 50+ brand partnerships based on your requirements and budget." },
        { title: "Deployment & Configuration", desc: "Professional installation, configuration, and testing — ensuring zero-downtime migration where possible." },
        { title: "Ongoing Support", desc: "Post-deployment monitoring, maintenance, and 24/7 technical support to keep your network running smoothly." },
      ]}
      products={[
        { category: "Core Switches", items: ["Cisco Catalyst 9500/9600", "Huawei CloudEngine 16800", "H3C S12500", "Juniper QFX Series"] },
        { category: "Access Switches", items: ["Cisco Catalyst 9200/9300", "Huawei CloudEngine S5735", "H3C S5130/S6520", "PoE++ models available"] },
        { category: "Routers & SD-WAN", items: ["Cisco ISR/ASR + Viptela", "Huawei NetEngine AR", "Juniper SRX", "Ruijie RG-RAP"] },
        { category: "Wireless", items: ["Aruba AP 535/555", "Ruckus R750/R760", "Huawei AirEngine", "Wireless controllers"] },
        { category: "Security", items: ["Fortinet FortiGate NGFW", "Palo Alto firewalls", "Sangfor NGAF", "Hillstone firewalls"] },
        { category: "Management", items: ["Cisco DNA Center", "Huawei iMaster NCE", "Aruba Central", "Cloud management platforms"] },
      ]}
      benefits={[
        "17 years of enterprise networking experience",
        "50+ brand partnerships — best-of-breed solutions, not locked to one vendor",
        "Free network assessment and solution design",
        "Professional deployment with minimal disruption",
        "Import/export license for cross-border procurement",
        "Competitive pricing with authorized distributor rates",
        "Ongoing support and maintenance available",
        "Shenzhen-based with global shipping capability",
      ]}
    />
  );
}

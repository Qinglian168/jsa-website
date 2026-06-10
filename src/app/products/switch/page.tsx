import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Network Switches - Cisco, Huawei, H3C Managed Switch Distributor",
  description:
    "Shop enterprise network switches from Cisco, Huawei, H3C, Ruijie, Juniper. Layer 2/3 managed switches, PoE switches, 10G switches, and data center switches. Authorized distributor in Shenzhen.",
  alternates: { canonical: "/products/switch" },
};

export default function SwitchPage() {
  return (
    <CategoryPage
      title="Network Switches"
      subtitle="Switches"
      description="Enterprise managed switches for campus, data center, and SMB networks. Layer 2/3 switching, PoE, 10G/25G, and modular chassis solutions."
      icon="🔀"
      color="from-indigo-600 via-indigo-700 to-purple-800"
      bannerImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
      brands={["Cisco", "Huawei", "H3C", "Ruijie", "Juniper", "Ubiquiti"]}
      products={[
        {
          name: "Cisco Catalyst 9200/9300 Series",
          series: "Cisco",
          desc: "Enterprise access and distribution switches with programmability and smart licensing.",
          features: ["StackWise Virtual", "MACsec encryption", "UADP ASIC", "Smart licensing"],
        },
        {
          name: "Cisco Catalyst 9500/9600 Series",
          series: "Cisco",
          desc: "Core and data center switches with high-density 10G/25G/40G/100G uplinks.",
          features: ["Up to 100G ports", "Modular chassis", "Netconf/YANG", "Encrypted traffic analytics"],
        },
        {
          name: "Huawei CloudEngine S Series",
          series: "Huawei",
          desc: "Cloud-managed campus and data center switches with iMaster NCE.",
          features: ["Cloud management", "SVF super virtual fabric", "10G/25G/100G", "Intelligent O&M"],
        },
        {
          name: "H3C S Series Switches",
          series: "H3C",
          desc: "Full range of enterprise switches from access to core with Comware OS.",
          features: ["IRF stacking", "Comware 7", "SmartMC management", "PoE++ 90W"],
        },
        {
          name: "Ruijie Reyee Switches",
          series: "Ruijie",
          desc: "Cost-effective managed switches for SMB with cloud management options.",
          features: ["Cloud-managed", "PoE models", "2.5G options", "Affordable pricing"],
        },
        {
          name: "PoE Managed Switches",
          series: "Multi-brand",
          desc: "Power over Ethernet switches for IP cameras, wireless APs, and VoIP phones.",
          features: ["Up to 90W PoE++", "IEEE 802.3bt", "Smart power budget", "All major brands"],
        },
      ]}
      faqs={[
        {
          q: "What types of switches does JSA Solution supply?",
          a: "We supply a comprehensive range of network switches from Cisco, Huawei, H3C, Ruijie, and more — including Layer 2/3 managed switches, PoE switches (up to 90W), 10G/25G/100G data center switches, and modular chassis switches.",
        },
        {
          q: "What is the difference between Layer 2 and Layer 3 switches?",
          a: "Layer 2 switches forward traffic based on MAC addresses within a VLAN, while Layer 3 switches can route traffic between VLANs using IP addresses. For most enterprise networks, Layer 3 switches are recommended for core/distribution layers. Our team can help you choose the right switch type.",
        },
        {
          q: "Do you carry PoE switches for IP cameras and WiFi APs?",
          a: "Yes! We carry PoE (Power over Ethernet) switches from all major brands — supporting IEEE 802.3af (15.4W), 802.3at (30W), and 802.3bt (up to 90W). Perfect for IP cameras, wireless APs, VoIP phones, and IoT devices.",
        },
        {
          q: "Can I buy a single switch or do I need to order in bulk?",
          a: "Both! We accept orders of any quantity — from a single switch for a small office to bulk orders for large deployments. Volume discounts are available for orders of 10+ units.",
        },
      ]}
      schemaDescription="Enterprise network switches from Cisco, Huawei, H3C authorized distributor"
    />
  );
}

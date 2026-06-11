import { CategoryPage } from "@/components/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Network Switches - Cisco, Huawei, H3C, Ruijie | JSA Solution",
  description: "Enterprise network switches: Layer 2/3 managed, PoE, 10G/25G/100G data center switches from Cisco, Huawei, H3C, Ruijie. Authorized distributor.",
  alternates: { canonical: "/products/networking/switches" },
};

export default function SwitchesPage() {
  return (
    <CategoryPage
      title="Network Switches"
      subtitle="Switches"
      description="Enterprise-grade switches for access, aggregation, and core layers. Layer 2/3 managed switches, PoE switches, and high-density 10G/25G/100G data center switches from world-leading brands."
      icon="🔀"
      color="from-blue-500 to-indigo-600"
      bannerImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
      brands={["Cisco", "Huawei", "H3C", "Ruijie", "Juniper", "Aruba", "Ubiquiti", "Dell"]}
      products={[
        {
          name: "Cisco Catalyst 9300 Series",
          series: "Cisco",
          desc: "Modular access switches with StackWise-480, UADP 3.0 ASIC, and full PoE+ support for IoT convergence.",
          features: ["StackWise-480", "UADP 3.0 ASIC", "PoE+ / UPOE", "Cisco DNA Center ready"],
        },
        {
          name: "Huawei CloudEngine S5731-H Series",
          series: "Huawei",
          desc: "Next-gen campus access switches with built-in AIOps, 802.3bt PoE++, and multi-gigabit ports.",
          features: ["AIOps built-in", "802.3bt PoE++", "Multi-gigabit", "VXLAN/EVPN"],
        },
        {
          name: "H3C S6850 Data Center Switch",
          series: "H3C",
          desc: "High-density 10G/25G/100G data center ToR switch with Comware V9 and DRNI for zero-downtime.",
          features: ["25G/100G ports", "Comware V9", "DRNI", "Telemetry streaming"],
        },
        {
          name: "Ruijie RG-S2910 Series",
          series: "Ruijie",
          desc: "Cost-effective access switches with 10G uplinks, perfect for SMB and campus edge deployment.",
          features: ["10G uplinks", "PoE+ models", "IPv6 ready", "Energy efficient"],
        },
        {
          name: "Juniper EX4650",
          series: "Juniper",
          desc: "Compact 25G/100G data center switch with EVPN-VXLAN and Junos OS for cloud-era networks.",
          features: ["25G/100G", "EVPN-VXLAN", "Junos OS", "EVO ready"],
        },
        {
          name: "Aruba CX 6300 Series",
          series: "Aruba",
          desc: "AOS-CX based fixed switches with cloud-native management, dynamic segmentation, and VSX redundancy.",
          features: ["AOS-CX", "Aruba Central", "VSX redundancy", "Dynamic segmentation"],
        },
      ]}
      faqs={[
        { q: "What is the difference between Layer 2 and Layer 3 switches?", a: "Layer 2 switches forward traffic based on MAC addresses within the same VLAN. Layer 3 switches can route traffic between VLANs using IP addresses, making them suitable for inter-VLAN routing at wire speed." },
        { q: "Do you provide PoE switches for IP cameras and APs?", a: "Yes, we supply PoE, PoE+, and PoE++ (802.3bt) switches that can power IP cameras, wireless APs, and IP phones directly over Ethernet cables." },
        { q: "Can you help with switch stacking and chassis solutions?", a: "Absolutely. We provide StackWise (Cisco), IRF (H3C), iStack (Huawei), and VSX (Aruba) stacking solutions for high availability and simplified management." },
      ]}
      schemaDescription="Enterprise network switches including Cisco Catalyst, Huawei CloudEngine, H3C S series, Juniper EX, Aruba CX. Layer 2/3 managed, PoE, data center switches."
    />
  );
}

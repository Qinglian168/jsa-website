import { CategoryPage } from "@/components/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Routers - Cisco, Huawei, H3C, Juniper | JSA Solution",
  description: "Enterprise and service provider routers: branch routers, edge routers, SD-WAN, core routers from Cisco, Huawei, H3C, Juniper. Authorized distributor with global delivery.",
  alternates: { canonical: "/products/networking/routers" },
};

export default function RoutersPage() {
  return (
    <CategoryPage
      title="Enterprise Routers"
      subtitle="Routers"
      description="Branch, edge, and core routers for enterprise WAN, SD-WAN, and service provider networks. High-performance routing with advanced security and automation from Cisco, Huawei, H3C, and Juniper."
      icon="🌐"
      color="from-sky-500 to-blue-600"
      bannerImage="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=1920&q=80"
      brands={["Cisco", "Huawei", "H3C", "Juniper", "Ruijie", "MikroTik", "Dell"]}
      products={[
        {
          name: "Cisco Catalyst 8300 Series",
          series: "Cisco",
          desc: "SD-WAN ready edge routers with integrated security, 5G, and Wi-Fi 6 for branch transformation.",
          features: ["SD-WAN built-in", "5G / Wi-Fi 6", "Integrated security", "Cisco IOS XE"],
        },
        {
          name: "Huawei NetEngine AR Series",
          series: "Huawei",
          desc: "All-in-one branch routers with routing, switching, security, and Wi-Fi in a single device.",
          features: ["All-in-one", "SD-WAN ready", "OVPN support", "High reliability"],
        },
        {
          name: "H3C MSR Series",
          series: "H3C",
          desc: "Comware-based multi-service routers for enterprise branches with rich interface options and VPN.",
          features: ["Comware OS", "Rich interfaces", "VPN ready", "Energy efficient"],
        },
        {
          name: "Juniper MX Series",
          series: "Juniper",
          desc: "Service provider and enterprise edge routers with Junos OS, MPLS, and VPLS for large-scale networks.",
          features: ["Junos OS", "MPLS/VPLS", "High scale", "Automation ready"],
        },
        {
          name: "Cisco ASR 1000 Series",
          series: "Cisco",
          desc: "Enterprise edge routers with hardware-accelerated encryption, QoS, and high availability for critical WAN links.",
          features: ["Hardware encryption", "QoS", "HA pairs", "IOS XE"],
        },
        {
          name: "Ruijie RG-RSR Series",
          series: "Ruijie",
          desc: "Cost-effective enterprise routers with built-in firewall, VPN, and 4G/5G backup for SMB branches.",
          features: ["Built-in firewall", "VPN", "4G/5G backup", "Easy management"],
        },
      ]}
      faqs={[
        { q: "What is SD-WAN and do your routers support it?", a: "SD-WAN (Software-Defined WAN) optimizes WAN traffic using application-aware routing. Cisco, Huawei, and H3C routers we supply all support SD-WAN deployment." },
        { q: "Do you supply both enterprise branch routers and carrier-grade core routers?", a: "Yes, we supply the full range — from SMB branch routers (Cisco RV, H3C MSR) to carrier-grade core routers (Cisco ASR 9000, Huawei NE40E)." },
        { q: "Can you help with router configuration and deployment?", a: "Yes, our engineers provide pre-sales configuration guidance, and we can arrange professional services for on-site deployment if needed." },
      ]}
      schemaDescription="Enterprise routers including Cisco Catalyst 8300, Huawei NetEngine AR, H3C MSR, Juniper MX. SD-WAN, branch routers, edge routers, core routers."
    />
  );
}

import { CategoryPage } from "@/components/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Network Firewalls - Fortinet, Hillstone, Sangfor, Cisco | JSA Solution",
  description: "Next-generation firewalls, UTM, IPS from Fortinet, Hillstone, Sangfor, Cisco, Huawei. Enterprise network security solutions with SD-WAN and zero-trust.",
  alternates: { canonical: "/products/networking/firewalls" },
};

export default function FirewallsPage() {
  return (
    <CategoryPage
      title="Network Firewalls"
      subtitle="Firewalls"
      description="Next-generation firewalls with AI-powered threat detection, SD-WAN integration, and zero-trust network access. Protect your network perimeter with industry-leading security appliances."
      icon="🔒"
      color="from-rose-500 to-red-600"
      bannerImage="https://images.unsplash.com/photo-1563986768499-57a975944831?w=1920&q=80"
      brands={["Fortinet", "Hillstone", "Sangfor", "Cisco", "Huawei", "Juniper", "Palo Alto"]}
      products={[
        {
          name: "Fortinet FortiGate 600F Series",
          series: "Fortinet",
          desc: "Mid-range NGFW with FortiASIC NP7, 10G interfaces, and integrated SD-WAN for branch and mid-enterprise.",
          features: ["FortiASIC NP7", "10G ready", "SD-WAN built-in", "FortiGuard AI"],
        },
        {
          name: "Hillstone A-Series NGFW",
          series: "Hillstone",
          desc: "High-performance next-gen firewalls with AI-driven threat intelligence and cloud sandbox analysis.",
          features: ["AI threat intel", "Cloud sandbox", "SSL inspection", "High availability"],
        },
        {
          name: "Sangfor NGAF",
          series: "Sangfor",
          desc: "Integrated NGFW + WAF + IPS in one appliance, popular in Asia-Pacific markets with local support.",
          features: ["NGFW + WAF + IPS", "Local support", "Affordable pricing", "Chinese interface"],
        },
        {
          name: "Huawei USG Series",
          series: "Huawei",
          desc: "Enterprise firewalls with TURBO engine acceleration, IPS/AV/URL filtering, and VPN in a single device.",
          features: ["TURBO engine", "IPS/AV/URL", "VPN", "Central management"],
        },
        {
          name: "Cisco Firepower 2100 Series",
          series: "Cisco",
          desc: "Cisco NGFW with Firepower Threat Defense (FTD), Snort 3 IPS, and integration with Cisco Catalyst.",
          features: ["FTD + Snort 3", "Cisco integration", "AMP for endpoints", "URL filtering"],
        },
        {
          name: "Juniper SRX Series",
          series: "Juniper",
          desc: "Carrier-grade firewalls with Junos OS, content security, and AppSecure for application-aware policies.",
          features: ["Junos OS", "AppSecure", "Content security", "High throughput"],
        },
      ]}
      faqs={[
        { q: "What is the difference between NGFW and traditional firewall?", a: "Traditional firewalls filter by IP/port only. NGFW adds application awareness, intrusion prevention (IPS), user identity integration, and often includes WAF, VPN, and SD-WAN in one device." },
        { q: "Do your firewalls support SD-WAN?", a: "Yes, Fortinet FortiGate, Cisco Catalyst 8300, and Huawei NetEngine AR all have built-in SD-WAN capabilities, eliminating the need for separate SD-WAN appliances." },
        { q: "Can you provide firewall rule optimization services?", a: "Yes, our security engineers can review your existing firewall rules, optimize policies, and help migrate configurations between vendor platforms." },
      ]}
      schemaDescription="Network firewalls including Fortinet FortiGate, Hillstone A-Series, Sangfor NGAF, Huawei USG, Cisco Firepower, Juniper SRX. NGFW, UTM, IPS."
    />
  );
}

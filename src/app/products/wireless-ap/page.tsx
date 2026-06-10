import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Wireless AP - Aruba, Ruckus, Huawei WiFi 6/7 Access Point Distributor",
  description:
    "Shop enterprise wireless access points from Aruba, Ruckus, Huawei, H3C, Ubiquiti. WiFi 6, WiFi 7, indoor/outdoor AP, and wireless controllers. Authorized distributor in Shenzhen.",
  alternates: { canonical: "/products/wireless-ap" },
};

export default function WirelessAPPage() {
  return (
    <CategoryPage
      title="Wireless AP"
      subtitle="Wireless"
      description="Enterprise wireless access points and controllers for seamless WiFi coverage. WiFi 6, WiFi 7, indoor, outdoor, and mesh solutions from world-leading brands."
      icon="📶"
      color="from-cyan-600 via-teal-700 to-emerald-800"
      bannerImage="https://images.unsplash.com/photo-1506399558188-acca6d3b0d46?w=1920&q=80"
      brands={["Aruba", "Ruckus", "Huawei", "H3C", "Ubiquiti", "Ruijie"]}
      products={[
        {
          name: "Aruba AP Series (5xx/6xx)",
          series: "Aruba (HPE)",
          desc: "Enterprise WiFi 6/6E access points with AI-powered RF optimization.",
          features: ["WiFi 6E support", "AI RF management", "Aruba Central cloud", "Green AP mode"],
        },
        {
          name: "Ruckus Unleashed / ZoneFlex",
          series: "Ruckus",
          desc: "High-performance APs with BeamFlex+ adaptive antenna technology for dense environments.",
          features: ["BeamFlex+ technology", "Controller-free option", "ICX switch integration", "Cloud Wi-Fi"],
        },
        {
          name: "Huawei AirEngine WiFi 7 AP",
          series: "Huawei",
          desc: "Next-generation WiFi 7 access points with ultra-high throughput and iMaster NCE management.",
          features: ["WiFi 7 (802.11be)", "Up to 19 Gbps", "Multi-link operation", "iMaster NCE"],
        },
        {
          name: "H3C WA Series AP",
          series: "H3C",
          desc: "Cost-effective enterprise APs with GreenPath power-saving and cloud management.",
          features: ["WiFi 6/6E", "GreenPath power saving", "Cloud management", "PoE powered"],
        },
        {
          name: "Ubiquiti UniFi AP",
          series: "Ubiquiti",
          desc: "Popular prosumer/SMB APs with free UniFi Controller software.",
          features: ["Free controller software", "Easy adoption", "Sleek design", "Great value"],
        },
        {
          name: "Outdoor & Industrial AP",
          series: "Multi-brand",
          desc: "Weatherproof access points for outdoor stadiums, campuses, and industrial environments.",
          features: ["IP67 rated", "Extended temperature", "Long-range coverage", "Mesh networking"],
        },
      ]}
      faqs={[
        {
          q: "What is the difference between WiFi 6 and WiFi 7?",
          a: "WiFi 6 (802.11ax) supports up to 9.6 Gbps with OFDMA and MU-MIMO. WiFi 7 (802.11be) adds 320 MHz channels, Multi-Link Operation (MLO), and up to 46 Gbps theoretical speed. For most enterprises, WiFi 6 is sufficient; WiFi 7 is ideal for high-density or future-proof deployments.",
        },
        {
          q: "How many APs do I need for my office?",
          a: "This depends on your floor plan, wall materials, number of users, and bandwidth requirements. A general rule is 1 AP per 1,500-3,000 sq ft in open offices. Our team can do a free wireless site survey and recommend the optimal AP count and placement.",
        },
        {
          q: "Do I need a wireless controller?",
          a: "It depends on the AP count and brand. For small deployments (under 10 APs), many brands offer controller-free or cloud-managed options. For larger deployments (10+ APs), a dedicated controller provides better management, roaming, and RF optimization.",
        },
        {
          q: "Can JSA Solution help with wireless network design?",
          a: "Yes! We provide free pre-sales consultation including wireless site survey, AP placement planning, and network design. We also offer professional installation services in Shenzhen and surrounding areas.",
        },
      ]}
      schemaDescription="Enterprise wireless access points from Aruba, Ruckus, Huawei authorized distributor"
    />
  );
}

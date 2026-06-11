import { CategoryPage } from "@/components/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wireless APs & Controllers - Aruba, Ruckus, Huawei, H3C | JSA Solution",
  description: "Enterprise WiFi 6/7 access points, wireless controllers, outdoor APs from Aruba, Ruckus, Huawei, H3C, Ubiquiti. High-density wireless coverage solutions.",
  alternates: { canonical: "/products/networking/wireless" },
};

export default function WirelessPage() {
  return (
    <CategoryPage
      title="Wireless APs & Controllers"
      subtitle="Wireless"
      description="Enterprise WiFi 6 and WiFi 7 access points, wireless LAN controllers, and outdoor wireless bridges. Deliver seamless, high-density wireless coverage for offices, campuses, and industrial environments."
      icon="📶"
      color="from-teal-500 to-cyan-600"
      bannerImage="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&q=80"
      brands={["Aruba", "Ruckus", "Huawei", "H3C", "Ubiquiti", "Ruijie", "Cisco", "Juniper"]}
      products={[
        {
          name: "Aruba AP-635 (Wi-Fi 6E)",
          series: "Aruba",
          desc: "Tri-band Wi-Fi 6E AP with 6GHz support, up to 3.9Gbps aggregate throughput, and built-in IoT radio.",
          features: ["Wi-Fi 6E (6GHz)", "3.9Gbps throughput", "IoT ready", "Aruba Central managed"],
        },
        {
          name: "Ruckus R770 (Wi-Fi 7)",
          series: "Ruckus",
          desc: "Industry-leading Wi-Fi 7 AP with patented BeamFlex+ adaptive antenna technology and RUCKUS AI.",
          features: ["Wi-Fi 7 (802.11be)", "BeamFlex+", "RUCKUS AI", "Cloud / on-prem"],
        },
        {
          name: "Huawei AirEngine 5760-10",
          series: "Huawei",
          desc: "Wi-Fi 7 AP with Huawei AirSlice technology for guaranteed SLA per application, ideal for high-density venues.",
          features: ["Wi-Fi 7", "AirSlice SLA", "Smart antenna", "CloudCampus managed"],
        },
        {
          name: "H3C WA6628 (Wi-Fi 6)",
          series: "H3C",
          desc: "High-performance Wi-Fi 6 AP with 8 spatial streams, OFDMA, and Comware-based centralized management.",
          features: ["Wi-Fi 6 (802.11ax)", "8 streams", "OFDMA", "WX series controller"],
        },
        {
          name: "Ubiquiti UniFi U7 Pro",
          series: "Ubiquiti",
          desc: "Affordable Wi-Fi 7 AP with UniFi Network Controller, 6GHz support, and sleek design for modern offices.",
          features: ["Wi-Fi 7", "UniFi Controller", "Sleek design", "Cost-effective"],
        },
        {
          name: "Cisco Catalyst 9130AXI",
          series: "Cisco",
          desc: "Ruggedized Wi-Fi 6 AP for outdoor and industrial use, with IP67 rating and extended temperature range.",
          features: ["Wi-Fi 6", "IP67 rugged", "-40°C to 55°C", "Cisco Catalyst 9800"],
        },
      ]}
      faqs={[
        { q: "What is the difference between Wi-Fi 6 and Wi-Fi 7?", a: "Wi-Fi 7 (802.11be) adds 320MHz channels, 4096-QAM, and Multi-RU (puncturing) for up to 46Gbps theoretical throughput. Wi-Fi 6 (802.11ax) maxes out at ~9.6Gbps. Wi-Fi 7 also adds the 6GHz band support." },
        { q: "Do you provide site survey and wireless design services?", a: "Yes, our wireless engineers can perform remote or on-site Wi-Fi site surveys, create heatmaps, and design optimal AP placement for maximum coverage and performance." },
        { q: "Can these APs work with existing network switches?", a: "Yes, all our APs support standard 802.3af/at PoE power from any brand of switch. Wi-Fi 6E/7 APs with higher power needs may require 802.3bt (PoE++) switches." },
      ]}
      schemaDescription="Wireless access points and controllers including Aruba AP-635, Ruckus R770, Huawei AirEngine, H3C WA series, Ubiquiti UniFi, Cisco Catalyst 9130."
    />
  );
}

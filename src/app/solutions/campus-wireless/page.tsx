import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Campus Wireless Coverage Solution - WiFi 6/7 High-Density Deployment",
  description:
    "Professional campus WiFi solutions for schools, hospitals, industrial parks, and public venues. WiFi 6/7 deployment with site survey, high-density design, and cloud management.",
  alternates: { canonical: "/solutions/campus-wireless" },
};

export default function CampusWirelessPage() {
  return (
    <SolutionPage
      title="Campus Wireless Coverage"
      icon="📡"
      description="High-density WiFi 6 and WiFi 7 deployment for schools, hospitals, industrial parks, and public venues. From site survey to ongoing optimization."
      color="from-cyan-600 via-teal-700 to-emerald-800"
      challenges={[
        "Dead zones and poor signal in large campus environments",
        "High user density causing WiFi congestion and slow speeds",
        "Seamless roaming between APs failing during movement",
        "Managing hundreds of APs across multiple buildings",
        "Outdoor coverage for stadiums and open areas",
        "Interference from neighboring WiFi networks",
      ]}
      approach={[
        { title: "Wireless Site Survey", desc: "On-site RF survey using professional tools to map signal strength, interference, and coverage gaps." },
        { title: "Capacity Planning", desc: "Calculate AP count and placement based on user density, bandwidth requirements, and application needs." },
        { title: "Network Design", desc: "Design the complete wireless architecture including AP models, controller capacity, VLANs, and security policies." },
        { title: "Professional Installation", desc: "Certified installation team handles mounting, cabling, power, and configuration for optimal performance." },
        { title: "Optimization & Monitoring", desc: "Post-deployment RF tuning, cloud-based monitoring, and proactive maintenance for peak performance." },
      ]}
      products={[
        { category: "Indoor APs", items: ["Aruba AP 535/555 (WiFi 6E)", "Ruckus R750/R760", "Huawei AirEngine 6760", "H3C WA6628"] },
        { category: "Outdoor APs", items: ["Aruba AP-575 (IP67)", "Ruckus T350/T750", "Huawei AirEngine 6760R", "Ubiquiti UAP-AC-Mesh"] },
        { category: "High-Density APs", items: ["Aruba AP-575HD", "Ruckus R760 (4x4 MU-MIMO)", "WiFi 7 models available", "Tri-radio options"] },
        { category: "Controllers", items: ["Aruba Mobility Controller", "Ruckus SmartZone", "Huawei AC6805", "Cloud-managed options"] },
        { category: "PoE Switches", items: ["Cisco Catalyst PoE (90W)", "Huawei PoE switches", "H3C PoE models", "Multi-gig PoE++"] },
        { category: "Management", items: ["Aruba Central (cloud)", "Ruckus Cloud Wi-Fi", "Huawei iMaster NCE", "Ubiquiti UniFi Controller"] },
      ]}
      benefits={[
        "Free wireless site survey in Shenzhen area",
        "Multi-brand options — we pick the best AP for each zone",
        "WiFi 6 and WiFi 7 expertise",
        "High-density design for stadiums and lecture halls",
        "Seamless roaming with 802.11k/v/r fast transition",
        "Cloud management for multi-site deployments",
        "Professional installation and cabling",
        "Ongoing RF optimization and monitoring",
      ]}
    />
  );
}

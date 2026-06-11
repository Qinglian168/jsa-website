import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Enterprise Networking Equipment - Routers, Switches, Firewalls, Wireless | JSA Solution",
  description:
    "Complete enterprise networking solutions: routers, switches, firewalls, wireless APs from Cisco, Huawei, H3C, Juniper, Aruba, Ruckus. Authorized distributor with 20+ years experience.",
  alternates: { canonical: "/products/networking" },
};

export default function NetworkingPage() {
  return (
    <CategoryPage
      title="Enterprise Networking"
      subtitle="Networking"
      description="End-to-end enterprise networking infrastructure — from branch routers and campus switches to next-gen firewalls and WiFi 7 access points. Authorized distribution from 35+ world-class brands."
      icon="🌐"
      color="from-blue-600 via-blue-700 to-indigo-800"
      bannerImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
      brands={["Cisco", "Huawei", "H3C", "Juniper", "Aruba", "Ruckus", "Fortinet", "Ruijie"]}
      products={[
        {
          name: "Cisco Catalyst 9000 Series",
          series: "Cisco",
          desc: "Next-generation enterprise switches with SD-Access, advanced security, and IoT convergence.",
          features: ["SD-Access ready", "UADP 3.0 ASIC", "PoE+ / UPOE", "StackWise Virtual"],
        },
        {
          name: "Huawei CloudEngine S Series",
          series: "Huawei",
          desc: "Intelligent campus switches with built-in AIOps for predictive maintenance and zero-touch provisioning.",
          features: ["AI-powered O&M", "iStack clustering", "Multi-gigabit ports", "VXLAN support"],
        },
        {
          name: "H3C Comware-based Switches",
          series: "H3C",
          desc: "Versatile enterprise switches ranging from access to core, powered by Comware OS with IRF stacking.",
          features: ["IRF virtualization", "Comware OS", "Flexible port density", "End-to-end security"],
        },
        {
          name: "Fortinet FortiGate Next-Gen Firewalls",
          series: "Fortinet",
          desc: "AI-driven security with FortiASIC SPU acceleration for uncompromised threat protection and SSL inspection.",
          features: ["FortiGuard AI security", "ASIC-accelerated", "SD-WAN built-in", "ZTNA ready"],
        },
        {
          name: "Aruba CX Switching Portfolio",
          series: "Aruba",
          desc: "Cloud-native enterprise switches with Aruba Central management and dynamic segmentation.",
          features: ["AOS-CX OS", "Aruba Central", "Dynamic segmentation", "Multi-gigabit PoE"],
        },
        {
          name: "Ruckus Wi-Fi 7 Access Points",
          series: "Ruckus",
          desc: "Industry-leading wireless APs with patented BeamFlex+ adaptive antenna technology.",
          features: ["BeamFlex+ antennas", "Wi-Fi 7 (802.11be)", "RUCKUS AI", "Cloud management"],
        },
      ]}
      faqs={[
        { q: "Do you provide pre-sales network design consultation?", a: "Yes, our certified engineers offer free network architecture design and equipment selection guidance based on your requirements." },
        { q: "Are all networking products genuine with manufacturer warranty?", a: "Absolutely. We are an authorized distributor — every product comes with full original manufacturer warranty and support." },
        { q: "Can you source discontinued or EOL networking equipment?", a: "Yes, our extensive supply chain allows us to source end-of-life Cisco, Huawei, and H3C equipment with quality guarantees." },
      ]}
      schemaDescription="Enterprise networking equipment including routers, switches, firewalls, and wireless APs from Cisco, Huawei, H3C, Juniper, Aruba, Ruckus. Authorized distributor with full warranty."
    />
  );
}

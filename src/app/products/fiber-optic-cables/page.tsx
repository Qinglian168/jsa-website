import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Fiber Optic Cables - Patch Cords, MTP/MPO, Pigtails, Enclosures | JSA Solution",
  description:
    "Premium fiber optic cables: single-mode/multi-mode patch cords, MTP/MPO trunks, pigtails, adapters, and fiber enclosures for data centers. Corning, CommScope, FS, Panduit.",
  alternates: { canonical: "/products/fiber-optic-cables" },
};

export default function FiberOpticCablesPage() {
  return (
    <CategoryPage
      title="Fiber Optic Cables"
      subtitle="Fiber Optic Cables"
      description="High-quality fiber optic connectivity solutions for data centers, enterprise networks, and telecom. From LC patch cords to MTP trunks — precision-engineered for low insertion loss."
      icon="🔌"
      color="from-cyan-500 via-blue-600 to-indigo-700"
      bannerImage="https://images.unsplash.com/photo-1620285365672-4e14fbcb2653?w=1920&q=80"
      brands={["Corning", "CommScope", "FS", "Panduit", "Hubbell"]}
      products={[
        {
          name: "Single-Mode Fiber Patch Cords",
          series: "OS2 9/125µm",
          desc: "G.657.A2 bend-insensitive OS2 patch cords with LC/SC/FC/ST connectors. Ideal for long-haul and access networks.",
          features: ["G.657.A2 bend-insensitive", "UPC/APC polish options", "0.3dB max insertion loss", "LSZH jacket"],
        },
        {
          name: "Multi-Mode Fiber Patch Cords",
          series: "OM3/OM4/OM5",
          desc: "50/125µm OM3/OM4/OM5 multimode patch cords optimized for 10G/40G/100G short-reach applications.",
          features: ["OM3/OM4/OM5 options", "Aqua/Erika Violet jacket", "10G-100G ready", "≤0.3dB insertion loss"],
        },
        {
          name: "MTP/MPO Trunk Cables",
          series: "12/24 Fiber",
          desc: "Factory-terminated MTP/MPO trunk cables for high-density data center interconnects in 12, 24, and 48 fiber counts.",
          features: ["12/24 fiber counts", "Polarity A/B/C", "100% tested", "Push-pull tab"],
        },
        {
          name: "Fiber Pigtails",
          series: "LC/SC/FC",
          desc: "Factory-terminated single-mode and multi-mode pigtails for fusion splicing in ODF and termination boxes.",
          features: ["0.9/2.0/3.0mm options", "Color-coded", "Telcordia compliant", "Bulk packaging"],
        },
        {
          name: "Fiber Adapters & Attenuators",
          series: "LC/SC/FC/MTP",
          desc: "Ceramic sleeve adapters and fixed/variable optical attenuators for precise power management.",
          features: ["Zirconia ceramic sleeve", "Flanged/no-flange", "1-30dB attenuation", "Low PDL"],
        },
        {
          name: "Fiber Enclosures & Patch Panels",
          series: "1U/2U/4U HD",
          desc: "High-density rack-mount fiber enclosures supporting up to 144 LC or 288 MTP ports per 1U.",
          features: ["Up to 144 LC/1U", "Slide-out tray", "Cable management", "Front/rear access"],
        },
      ]}
      faqs={[
        { q: "What's the difference between OS2, OM3, and OM4 fiber?", a: "OS2 is single-mode (9/125µm) for long distances up to 100km. OM3/OM4 are multi-mode (50/125µm) for data center short-reach — OM4 supports 100G up to 150m, OM3 up to 100m." },
        { q: "Can you make custom length fiber assemblies?", a: "Yes, we offer custom-cut cables to exact length specifications with certified test reports included." },
        { q: "Do you provide polarity and pin configuration guidance for MTP/MPO?", a: "Our engineers provide free polarity design assistance and can label all MTP/MPO assemblies per your network design documentation." },
      ]}
      schemaDescription="Fiber optic cables: single-mode/multi-mode patch cords, MTP/MPO trunks, pigtails, adapters, and fiber enclosures from Corning, CommScope, FS, Panduit. Custom lengths with test reports."
    />
  );
}

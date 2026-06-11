import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Network Testers & Tools - OTDR, Power Meters, Cable Testers, Fusion Splicers | JSA Solution",
  description:
    "Professional network testing and installation tools: OTDR, optical power meters, cable certifiers, fusion splicers from Fluke, EXFO, Viavi, Fujikura. Authorized distributor.",
  alternates: { canonical: "/products/testers-tools" },
};

export default function TestersToolsPage() {
  return (
    <CategoryPage
      title="Testers & Tools"
      subtitle="Testers & Tools"
      description="Professional-grade testing, measurement, and installation tools for fiber optic and copper network infrastructure. From handheld power meters to full-suite OTDRs and fusion splicers."
      icon="🔧"
      color="from-slate-500 via-gray-600 to-zinc-700"
      bannerImage="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1920&q=80"
      brands={["Fluke", "EXFO", "Viavi", "Yokogawa", "Fujikura"]}
      products={[
        {
          name: "EXFO OTDR Series",
          series: "EXFO",
          desc: "Intelligent Optical Time Domain Reflectometers with iOLM technology for one-touch link characterization and fault location.",
          features: ["iOLM one-touch testing", "0.8m dead zone", "42dB dynamic range", "Automated reporting"],
        },
        {
          name: "Fluke DSX CableAnalyzer",
          series: "Fluke",
          desc: "Industry-standard copper cable certifier for Cat 5e/6/6A/8 with Level V accuracy to 2000 MHz.",
          features: ["Level V accuracy", "Cat 8 support", "ProjX management", "Versiv platform"],
        },
        {
          name: "Viavi SmartOTDR",
          series: "Viavi",
          desc: "Compact handheld OTDR for metro, access, and FTTx network testing with automated fault analysis.",
          features: ["Smart Link Mapper", "Integrated VFL", "10-hour battery", "Cloud result sync"],
        },
        {
          name: "Fujikura Fusion Splicers",
          series: "Fujikura",
          desc: "Core alignment fusion splicers with automated wind protector and tube heater for field fiber splicing.",
          features: ["6-second splice time", "Core alignment", "Universal cladding clamp", "14 second heat"],
        },
        {
          name: "Optical Power Meter & Light Source",
          series: "Multi-Brand",
          desc: "Handheld optical power meters and stabilized light source kits for insertion loss testing and link certification.",
          features: ["-70 to +10 dBm range", "850/1300/1310/1550nm", "Wave ID auto-detect", "USB rechargeable"],
        },
        {
          name: "Fiber Inspection Scope",
          series: "Multi-Brand",
          desc: "Digital fiber inspection probes with automated IEC 61300-3-35 pass/fail analysis for connector end-face inspection.",
          features: ["400x magnification", "IEC auto analysis", "WiFi connectivity", "Instant reports"],
        },
      ]}
      faqs={[
        { q: "Do you provide calibration and certification for test equipment?", a: "Yes, we offer annual calibration services for Fluke, EXFO, and Viavi equipment through certified labs with traceable certificates." },
        { q: "Can I rent OTDRs or fusion splicers for short-term projects?", a: "Yes, we offer flexible rental programs for test equipment and fusion splicers — daily, weekly, or project-based terms." },
        { q: "Which OTDR wavelength is right for my network?", a: "For single-mode fiber use 1310/1550nm; for multi-mode use 850/1300nm. Our team provides free wavelength selection guidance based on your fiber plant." },
      ]}
      schemaDescription="Network testers and tools: OTDR, optical power meters, cable certifiers, fusion splicers from Fluke, EXFO, Viavi, Fujikura. Authorized distributor with rental and calibration services."
    />
  );
}

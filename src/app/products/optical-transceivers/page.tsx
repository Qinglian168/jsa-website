import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Optical Transceivers - SFP, SFP+, QSFP28, QSFP-DD Modules | JSA Solution",
  description:
    "High-quality optical transceivers: SFP, SFP+, QSFP28, QSFP-DD modules compatible with Cisco, Huawei, H3C, Juniper. Genuine and third-party options with lifetime warranty.",
  alternates: { canonical: "/products/optical-transceivers" },
};

export default function OpticalTransceiversPage() {
  return (
    <CategoryPage
      title="Optical Transceivers"
      subtitle="Optical Transceivers"
      description="Reliable optical transceivers for every network — from 1G SFP to 400G QSFP-DD. Fully compatible with Cisco, Huawei, H3C, Juniper, and all major switch/router platforms."
      icon="🔮"
      color="from-violet-500 via-purple-600 to-indigo-700"
      bannerImage="https://images.unsplash.com/photo-1618335829652-18a3e2b5e461?w=1920&q=80"
      brands={["Cisco", "Huawei", "H3C", "Juniper", "Intel", "FS", "Finisar"]}
      products={[
        {
          name: "SFP 1G Transceivers",
          series: "Multi-Brand Compatible",
          desc: "1000BASE-SX/LX/EX/ZX SFP modules. Multi-mode (850nm) and single-mode (1310/1550nm) options for enterprise access.",
          features: ["1.25 Gbps", "LC duplex connector", "DDM/DOM support", "Hot-swappable"],
        },
        {
          name: "SFP+ 10G Transceivers",
          series: "Multi-Brand Compatible",
          desc: "10GBASE-SR/LR/ER SFP+ modules for 10G Ethernet, Fiber Channel, and SONET applications.",
          features: ["10.3125 Gbps", "300m to 40km reach", "Low power <1W", "MSA compliant"],
        },
        {
          name: "QSFP28 100G Transceivers",
          series: "Multi-Brand Compatible",
          desc: "100GBASE-SR4/LR4/CWDM4 QSFP28 modules for data center spine-leaf and campus backbone links.",
          features: ["100 Gbps per port", "MPO/LC connector", "Breakout capable", "3.5W max power"],
        },
        {
          name: "QSFP-DD 400G Transceivers",
          series: "Multi-Brand Compatible",
          desc: "400GBASE-SR8/DR4/FR4 QSFP-DD modules for next-gen data centers and hyperscale deployments.",
          features: ["400 Gbps throughput", "QSFP-DD MSA", "PAM4 modulation", "Backward compatible"],
        },
        {
          name: "BiDi Single-Fiber Transceivers",
          series: "Multi-Brand Compatible",
          desc: "Bidirectional SFP/SFP+ optics using a single fiber strand — doubles fiber capacity without new cabling.",
          features: ["Single-fiber operation", "WDM technology", "Up to 40km reach", "Half fiber cost"],
        },
        {
          name: "DWDM Tunable Transceivers",
          series: "Multi-Brand Compatible",
          desc: "C-band tunable SFP+/QSFP28 modules with 50/100GHz channel spacing for DWDM metro and long-haul networks.",
          features: ["80+ channels", "50/100GHz grid", "10G/100G options", "Built-in OC-M"],
        },
      ]}
      faqs={[
        { q: "Are your compatible transceivers fully tested with Cisco/Huawei switches?", a: "Yes, every compatible transceiver undergoes rigorous testing on target switch platforms and is coded to match OEM specifications precisely." },
        { q: "What warranty do optical transceivers come with?", a: "All transceivers include a lifetime advance replacement warranty. We ship replacements before you return defective units." },
        { q: "Can you provide custom encoding for specific switch models?", a: "Absolutely. We can pre-code transceivers for your exact switch model and firmware version to ensure plug-and-play compatibility." },
      ]}
      schemaDescription="Optical transceivers: SFP, SFP+, QSFP28, QSFP-DD modules compatible with Cisco, Huawei, H3C, Juniper. Multi-brand compatible with lifetime warranty and advance replacement."
    />
  );
}

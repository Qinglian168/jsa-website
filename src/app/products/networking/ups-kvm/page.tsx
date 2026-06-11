import { CategoryPage } from "@/components/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UPS & KVM Switches - APC, Vertiv, Raritan | JSA Solution",
  description: "UPS power protection, KVM switches, PDU from APC, Vertiv, Raritan. Complete power management and server console solutions for data centers.",
  alternates: { canonical: "/products/networking/ups-kvm" },
};

export default function UpsKvmPage() {
  return (
    <CategoryPage
      title="UPS & KVM Switches"
      subtitle="UPS & KVM"
      description="Uninterruptible power supply (UPS) systems, KVM switches for server console management, and intelligent PDUs. Protect your critical IT infrastructure from power failures and simplify data center operations."
      icon="🔌"
      color="from-slate-500 to-gray-600"
      bannerImage="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80"
      brands={["APC", "Vertiv", "Raritan", "Eaton", "CyberPower", "Tripp Lite", "Aten"]}
      products={[
        {
          name: "APC Smart-UPS SRT Series",
          series: "APC",
          desc: "Double-conversion online UPS with pure sine wave output, 0ms transfer time, and scalable runtime with external battery packs.",
          features: ["Double-conversion", "Pure sine wave", "0ms transfer", "External batteries"],
        },
        {
          name: "Vertiv Liebert GXE Series",
          series: "Vertiv",
          desc: "Online UPS with ECO mode, LCD display, and remote monitoring via SNMP/Web card. Popular in Asia-Pacific markets.",
          features: ["Online double-conversion", "ECO mode", "LCD display", "SNMP/Web card"],
        },
        {
          name: "Raritan Dominion KX III KVM",
          series: "Raritan",
          desc: "Enterprise KVM-over-IP switch with virtual media, CAC/PIV support, and up to 1024 servers from a single console.",
          features: ["KVM-over-IP", "Virtual media", "CAC/PIV", "1024 servers"],
        },
        {
          name: "APC Rack PDU (AP8853)",
          series: "APC",
          desc: "42-outlet intelligent PDU with outlet-level monitoring, remote power cycling, and integration with DCIM software.",
          features: ["42 outlets", "Outlet monitoring", "Remote cycling", "DCIM integration"],
        },
        {
          name: "Aten CS1944 KVM Switch",
          series: "Aten",
          desc: "4-port dual-display KVM switch supporting 4K @ 60Hz, perfect for control rooms and NOC/SOC environments.",
          features: ["4-port", "Dual 4K @ 60Hz", "USB 3.1 Gen 1", "Daisy-chain ready"],
        },
        {
          name: "Eaton 9PX UPS",
          series: "Eaton",
          desc: "Online double-conversion UPS with LCD display, ABM battery management, and Energy Star certification.",
          features: ["Online double-conversion", "ABM technology", "Energy Star", "LCD display"],
        },
      ]}
      faqs={[
        { q: "What is the difference between offline, line-interactive, and online UPS?", a: "Offline UPS switches to battery when power fails (2-10ms switch time). Line-interactive has AVR for voltage regulation. Online (double-conversion) always runs on battery, providing zero switch time and pure sine wave output — best for servers and critical equipment." },
        { q: "How do I calculate the UPS capacity I need?", a: "Add up the wattage of all connected devices, then multiply by 1.2 for safety margin. For example, a server drawing 300W needs at least a 360W UPS. Also consider runtime — more battery capacity = longer runtime." },
        { q: "What is a KVM switch and why do I need it?", a: "KVM (Keyboard-Video-Mouse) switches let you control multiple servers from a single keyboard, monitor, and mouse. Essential for data centers and server rooms to save space and simplify management." },
      ]}
      schemaDescription="UPS and KVM switches including APC Smart-UPS, Vertiv Liebert, Raritan Dominion KVM, Aten KVM switches, APC PDU. Power protection and server console management."
    />
  );
}

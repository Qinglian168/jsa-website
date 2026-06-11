import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Smart Conference Devices - Video Conferencing, Interactive Whiteboards, IP Phones | JSA Solution",
  description:
    "Smart conference room solutions: video conferencing systems, interactive whiteboards, IP phones from Yealink, Poly, MAXHUB, Cisco. Authorized distributor in Shenzhen, China.",
  alternates: { canonical: "/products/smart-conference" },
};

export default function SmartConferencePage() {
  return (
    <CategoryPage
      title="Smart Conference Devices"
      subtitle="Smart Conference"
      description="Transform your meeting spaces with intelligent collaboration technology. HD video conferencing, interactive touch displays, and enterprise IP phones — from huddle rooms to boardrooms."
      icon="📹"
      color="from-emerald-500 via-green-600 to-teal-700"
      bannerImage="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=80"
      brands={["Yealink", "Poly", "MAXHUB", "Cisco", "Logitech", "Yeastar"]}
      products={[
        {
          name: "Yealink MeetingBar A30",
          series: "Yealink",
          desc: "All-in-one video bar for medium rooms with dual-camera AI framing, 8 MEMS mic array, and Android-based Teams/Zoom support.",
          features: ["Dual-camera AI", "8-MEMS mic array", "Teams/Zoom certified", "Android 11 OS"],
        },
        {
          name: "MAXHUB V6 Interactive Display",
          series: "MAXHUB",
          desc: "4K interactive flat panel with 20-point touch, built-in camera/mic, and wireless screen sharing for hybrid collaboration.",
          features: ["4K UHD display", "20-point touch", "Built-in 48MP camera", "Wireless casting"],
        },
        {
          name: "Poly Studio X70",
          series: "Poly",
          desc: "Premium video bar for large rooms with dual 4K cameras, DirectorAI smart framing, and NoiseBlockAI audio.",
          features: ["Dual 4K cameras", "DirectorAI", "NoiseBlockAI", "Poly Lens management"],
        },
        {
          name: "Cisco Room Kit Pro",
          series: "Cisco",
          desc: "Codec-based system for large custom rooms with intelligent speaker tracking, multi-screen support, and Webex integration.",
          features: ["Speaker tracking", "Multi-screen", "Webex native", "Intelligent audio"],
        },
        {
          name: "Logitech Rally Bar",
          series: "Logitech",
          desc: "All-in-one Android video bar for medium rooms with RightSense AI, motorized PTZ, and appliance mode.",
          features: ["RightSense AI", "Motorized PTZ", "Appliance mode", "BYOD ready"],
        },
        {
          name: "Yeastar P-Series PBX",
          series: "Yeastar",
          desc: "Cloud-based IP PBX with unified communications — voice, video, chat, and contact center in one platform.",
          features: ["Cloud PBX", "UC built-in", "Linkus softphone", "API integration"],
        },
      ]}
      faqs={[
        { q: "Can your conference devices work with Microsoft Teams and Zoom?", a: "Yes, most systems we offer are certified for Teams and Zoom Rooms. We can help match the right device to your platform preference." },
        { q: "Do you provide installation and setup for conference rooms?", a: "We offer professional on-site installation, cable management, and calibration services in the Greater Bay Area." },
        { q: "What size room does each video bar cover?", a: "Typically: small/huddle rooms (MeetingBar A10, Rally Bar Mini), medium rooms (MeetingBar A30, Rally Bar), large rooms (Studio X70, Room Kit Pro). We provide free sizing consultation." },
      ]}
      schemaDescription="Smart conference devices: video conferencing systems, interactive whiteboards, IP phones and collaboration tools from Yealink, Poly, MAXHUB, Cisco, Logitech. Authorized distributor."
    />
  );
}

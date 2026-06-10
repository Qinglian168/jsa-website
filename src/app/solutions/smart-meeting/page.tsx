import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Smart Meeting Room Solution - Video Conferencing & AV Integration",
  description:
    "Complete smart meeting room solutions: video conferencing endpoints, interactive displays, wireless presentation, and unified communications. Teams/Zoom certified equipment.",
  alternates: { canonical: "/solutions/smart-meeting" },
};

export default function SmartMeetingPage() {
  return (
    <SolutionPage
      title="Smart Meeting Room"
      icon="🤝"
      description="Complete AV and video conferencing solutions for meeting rooms of all sizes — from huddle rooms to boardrooms. Microsoft Teams and Zoom certified."
      color="from-emerald-600 via-green-700 to-teal-800"
      challenges={[
        "Poor video and audio quality in virtual meetings",
        "Complex meeting room equipment difficult to use",
        "Cable clutter and compatibility issues with BYOD",
        "Hybrid meeting participants feeling disconnected",
        "No standardized equipment across meeting rooms",
        "Difficulty managing and monitoring room equipment"]}
      approach={[
        { title: "Room Assessment", desc: "Evaluate room size, acoustics, lighting, and usage patterns to determine the right solution." },
        { title: "Platform Selection", desc: "Choose the best video platform (Teams, Zoom, etc.) and certified hardware for your environment." },
        { title: "AV Design", desc: "Design the complete audio-visual system including camera, microphone, speaker, display, and control." },
        { title: "Installation & Integration", desc: "Professional installation with cable management, system integration, and room control panel setup." },
        { title: "Training & Support", desc: "User training for easy operation, plus ongoing technical support and equipment maintenance." },
      ]}
      products={[
        { category: "Video Bars (Small Rooms)", items: ["Yealink A20/A30", "Poly Studio X30", "Logitech Rally Bar Mini", "Jabra PanaCast 50"] },
        { category: "Video Bars (Large Rooms)", items: ["Yealink A40/MVC Series", "Poly Studio X70", "Logitech Rally Bar", "Poly G7500"] },
        { category: "Interactive Displays", items: ["MAXHUB 65\"/75\"/86\"", "Yealink MeetingBoard", "Samsung Flip Pro", "Wireless sharing built-in"] },
        { category: "Wireless Presentation", items: ["BARCO ClickShare CX-30", "BARCO ClickShare Conference", "Yealink WPP30", "Mersive Solstice"] },
        { category: "Audio", items: ["Jabra Speak2 series", "Yealink CP900/CPW90", "Poly Sync 20/60", "Ceiling microphone arrays"] },
        { category: "Room Control", items: ["Touch panels", "Room scheduling displays", "Occupancy sensors", "Crestron/Extron control"] },
      ]}
      benefits={[
        "Microsoft Teams and Zoom certified solutions",
        "One-touch join — meetings start in seconds",
        "Wireless presentation — no cables needed",
        "AI-powered camera framing and noise cancellation",
        "Standardized across all meeting rooms",
        "Remote management and monitoring",
        "Professional installation with clean cabling",
        "Flexible rental and leasing options available",
      ]}
    />
  );
}

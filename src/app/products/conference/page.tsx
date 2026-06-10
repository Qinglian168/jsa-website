import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Video Conference Systems - Yealink, Poly, MAXHUB Authorized Distributor",
  description:
    "Shop video conferencing systems from Yealink, Poly, MAXHUB, Logitech, BARCO, Jabra. Meeting room endpoints, soundbars, whiteboards, and unified communications. Authorized distributor.",
  alternates: { canonical: "/products/conference" },
};

export default function ConferencePage() {
  return (
    <CategoryPage
      title="Conference Systems"
      subtitle="Conference"
      description="Professional video conferencing and collaboration solutions for meeting rooms of all sizes. From huddle rooms to boardrooms, we have the right equipment."
      icon="🎥"
      color="from-emerald-600 via-green-700 to-teal-800"
      bannerImage="https://images.unsplash.com/photo-1573164713714-d95e4b7f87f9?w=1920&q=80"
      brands={["Yealink", "Poly", "MAXHUB", "Logitech", "BARCO", "Jabra", "Grandstream", "Yeastar"]}
      products={[
        {
          name: "Yealink MeetingBar Series",
          series: "Yealink",
          desc: "All-in-one video bars with AI-powered camera, speaker, and microphone for small to large rooms.",
          features: ["AI face detection", "Noise cancellation", "Microsoft Teams certified", "Android built-in"],
        },
        {
          name: "Poly Studio X Series",
          series: "Poly",
          desc: "Premium video bars with Poly DirectorAI smart camera and legendary audio quality.",
          features: ["DirectorAI framing", "NoiseBlock AI", "Multi-platform", "Poly Lens management"],
        },
        {
          name: "MAXHUB Interactive Displays",
          series: "MAXHUB",
          desc: "Interactive flat panels for presentation, whiteboarding, and video conferencing.",
          features: ["4K touch display", "Built-in Android", "Wireless sharing", "Video conferencing ready"],
        },
        {
          name: "Logitech Rally Bar",
          series: "Logitech",
          desc: "Premium all-in-one video conferencing system for mid-to-large rooms.",
          features: ["4K camera", "AI view framing", "RightSound/RightSight", "CollabOS platform"],
        },
        {
          name: "BARCO ClickShare Conference",
          series: "BARCO",
          desc: "Wireless presentation and conferencing system for hybrid meetings.",
          features: ["Wireless sharing", "BYOM support", "One-click join", "Enterprise security"],
        },
        {
          name: "IP PBX & Conference Phones",
          series: "Multi-brand",
          desc: "IP telephony systems and conference speakerphones for voice communications.",
          features: ["Yealink/Grandstream IP phones", "Yeastar PBX", "Jabra speakerphones", "SIP compatible"],
        },
      ]}
      faqs={[
        {
          q: "What video conferencing system is best for a small meeting room?",
          a: "For huddle rooms (2-6 people), we recommend all-in-one video bars like Yealink A20, Poly Studio X30, or Logitech Rally Bar Mini. These include camera, mic, speaker, and compute in one device — just mount and connect.",
        },
        {
          q: "Do you supply Microsoft Teams Rooms solutions?",
          a: "Yes! We carry Microsoft Teams-certified hardware from Yealink, Poly, Logitech, and MAXHUB. We can provide complete Teams Rooms kits including compute, touch console, camera, and audio.",
        },
        {
          q: "Can you help design a complete meeting room AV system?",
          a: "Absolutely! Our solutions team can design a full meeting room setup — including display, camera, audio, control system, and cable management. We serve the Shenzhen area with professional installation.",
        },
        {
          q: "What is the warranty on conference equipment?",
          a: "All conference equipment comes with manufacturer warranty (typically 1-3 years). Extended warranty and premium support plans are available for enterprise customers.",
        },
      ]}
      schemaDescription="Video conferencing systems from Yealink, Poly, MAXHUB authorized distributor"
    />
  );
}

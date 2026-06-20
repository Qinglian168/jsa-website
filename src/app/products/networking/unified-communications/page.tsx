import { CategoryPage } from "@/components/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unified Communications - IP PBX, Phones, Video Conferencing | JSA Solution",
  description: "Complete unified communications solutions: IP PBX, IP phones, video conferencing, and smart interactive displays from Yealink, Poly, MAXHUB, Horion, Grandstream, Yeastar. VoIP and collaboration equipment distributor.",
  alternates: { canonical: "/products/networking/unified-communications" },
  openGraph: {
    title: "Unified Communications Solutions - IP PBX, Video Conferencing",
    description: "IP PBX, IP phones, video conferencing, smart tablets from Yealink, Poly, MAXHUB, Horion. Complete UC solutions.",
    url: "https://jsasolution.com/products/networking/unified-communications",
    type: "website",
  },
};

export default function UnifiedCommsPage() {
  return (
    <CategoryPage
      title="Unified Communications"
      subtitle="Unified Communications"
      description="Complete UC solutions: IP PBX systems, IP phones, video conferencing endpoints, and collaboration platforms. Seamlessly connect your teams with voice, video, messaging, and screen sharing."
      icon="📞"
      color="from-emerald-500 to-teal-600"
      bannerImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80"
      brands={["Yealink", "Poly", "MAXHUB", "Horion", "Logitech", "BARCO", "Jabra", "Grandstream", "Yeastar", "Avaya", "Unify"]}
      products={[
        {
          name: "Yealink T5 Series IP Phones",
          series: "Yealink",
          desc: "Android-based IP phones with 5-inch color touchscreen, Wi-Fi 6, Bluetooth 5.0, and Yealink Optima HD voice.",
          features: ["Android OS", "5-inch touchscreen", "Wi-Fi 6 / BT 5.0", "Optima HD voice"],
        },
        {
          name: "Poly Studio X Series",
          series: "Poly",
          desc: "All-in-one video bars for huddle rooms and mid-size meeting rooms, with built-in camera, mic, and speaker.",
          features: ["All-in-one design", "AI camera tracking", "NoiseBlock AI", "Zoom/Teams certified"],
        },
        {
          name: "Yeastar P-Series PBX",
          series: "Yeastar",
          desc: "Modern IP PBX with built-in video conferencing, mobile app, and CRM integration. Easy to deploy and manage.",
          features: ["Video conferencing", "Mobile app", "CRM integration", "Linkus UC Clients"],
        },
        {
          name: "Cisco Webex Room Series",
          series: "Cisco",
          desc: "AI-powered meeting room devices with intelligent framing, speaker tracking, and noise removal.",
          features: ["AI framing", "Speaker tracking", "Noise removal", "Webex built-in"],
        },
        {
          name: "Grandstream UCM Series IP PBX",
          series: "Grandstream",
          desc: "Cost-effective IP PBX with no per-user licensing, supporting up to 500 users and 150 concurrent calls.",
          features: ["No user license", "500 users", "GDMS cloud management", "Built-in WiFi"],
        },
        {
          name: "Horion Smart Tablets & Podium",
          series: "Horion",
          desc: "Interactive flat panels and smart podiums for education and meeting scenarios. 4K touch display, wireless casting, and built-in whiteboard software.",
          features: ["4K touch display", "Wireless casting", "Smart podium", "Whiteboard built-in"],
        },
        {
          name: "Logitech Rally Bar",
          series: "Logitech",
          desc: "Premium all-in-one video bar with PTZ camera, beamforming mics, and AI-based RightSight framing.",
          features: ["PTZ camera", "Beamforming mics", "RightSight AI", "USB / appliance mode"],
        },
      ]}
      faqs={[
        { q: "What is the difference between IP PBX and traditional PBX?", a: "Traditional PBX uses analog lines and proprietary phones. IP PBX uses VoIP (SIP) and IP phones, offering lower cost, easier management, and advanced features like video calling and mobile integration." },
        { q: "Do your UC solutions support Microsoft Teams and Zoom?", a: "Yes, Poly, Cisco Webex, and Logitech devices are certified for Microsoft Teams and Zoom. Yealink also offers Teams-certified IP phones." },
        { q: "Can you help migrate from legacy phone systems to IP PBX?", a: "Absolutely. We provide migration planning, equipment selection, configuration, and cutover support to ensure a smooth transition from legacy systems to modern IP communications." },
      ]}
      schemaDescription="Unified communications equipment including Yealink IP phones, Poly Studio video bars, Yeastar P-Series PBX, Cisco Webex Room, Logitech Rally Bar, MAXHUB and Horion smart tablets."
      canonicalPath="/products/networking/unified-communications"
    />
  );
}

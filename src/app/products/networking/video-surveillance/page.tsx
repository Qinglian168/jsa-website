import { CategoryPage } from "@/components/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Surveillance - IP Cameras, NVR, VMS | Hikvision, Dahua | JSA Solution",
  description: "IP cameras, NVR, video management systems from Hikvision, Dahua, Uniview. Complete video surveillance solutions for enterprise, campus, and smart city.",
  alternates: { canonical: "/products/networking/video-surveillance" },
};

export default function VideoSurveillancePage() {
  return (
    <CategoryPage
      title="Video Surveillance"
      subtitle="Video Surveillance"
      description="Complete video surveillance solutions: IP cameras (dome, bullet, PTZ), NVR, VMS, and video analytics. From Hikvision, Dahua, Uniview — deployed in enterprises, campuses, and smart city projects."
      icon="📹"
      color="from-lime-500 to-green-600"
      bannerImage="https://images.unsplash.com/photo-1585704032866-851d3dff6f39?w=1920&q=80"
      brands={["Hikvision", "Dahua", "Uniview", "Huawei", "Axis", "Bosch", "Tiandy"]}
      products={[
        {
          name: "Hikvision DarkFighter Series",
          series: "Hikvision",
          desc: "Low-light 4K IP cameras with DarkFighter technology, perfect for 24/7 surveillance in challenging lighting.",
          features: ["DarkFighter sensor", "4K resolution", "H.265+", "Built-in analytics"],
        },
        {
          name: "Dahua WizMind Series",
          series: "Dahua",
          desc: "AI-powered IP cameras with facial recognition, perimeter protection, and metadata indexing.",
          features: ["AI facial recog", "Perimeter protection", "Metadata indexing", "Full-color night"],
        },
        {
          name: "Uniview IPC Series",
          series: "Uniview",
          desc: "Cost-effective IP cameras with True WDR, 2.8mm-12mm varifocal lens, and PoE support.",
          features: ["True WDR", "Varifocal lens", "PoE", "ONVIF compliant"],
        },
        {
          name: "Hikvision DS-9600 NVR Series",
          series: "Hikvision",
          desc: "Enterprise NVR with up to 256-channel input, H.265 compression, and RAID for reliable video storage.",
          features: ["256 channels", "H.265", "RAID support", "HDMI 4K output"],
        },
        {
          name: "Dahua DSS Pro VMS",
          series: "Dahua",
          desc: "Video management software with AI search, heat mapping, and integrated access control management.",
          features: ["AI search", "Heat mapping", "Access control", "Mobile app"],
        },
        {
          name: "Huawei HoloSens IVS",
          series: "Huawei",
          desc: "Intelligent video surveillance platform with edge AI, facial recognition, and behavior analysis.",
          features: ["Edge AI", "Facial recognition", "Behavior analysis", "Cloud management"],
        },
      ]}
      faqs={[
        { q: "Are Hikvision and Dahua cameras compatible with third-party NVRs?", a: "Yes, most Hikvision and Dahua cameras support ONVIF and RTSP protocols, making them compatible with third-party NVRs and VMS platforms." },
        { q: "Do you provide video surveillance system design services?", a: "Yes, our engineers can design complete surveillance systems including camera placement, NVR sizing, storage calculation, and network bandwidth planning." },
        { q: "What is the typical storage requirement for 30-day retention?", a: "For 1080p cameras at 4Mbps, 30 days ≈ 1.3TB per camera. For 4K cameras at 8Mbps, 30 days ≈ 2.6TB per camera. We help you size NVR storage accurately." },
      ]}
      schemaDescription="Video surveillance equipment including Hikvision DarkFighter cameras, Dahua WizMind, Uniview IPC, NVR, VMS. IP cameras, NVR, video management systems."
    />
  );
}

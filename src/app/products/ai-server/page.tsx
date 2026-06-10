import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "AI Computing Servers - NVIDIA GPU Server, AI Inference/Training Distributor",
  description:
    "Shop AI computing servers from NVIDIA, Dell, HPE, Intel. GPU servers for AI training and inference, high-performance computing infrastructure. Authorized distributor in Shenzhen, China.",
  alternates: { canonical: "/products/ai-server" },
};

export default function AIServerPage() {
  return (
    <CategoryPage
      title="AI Computing Servers"
      subtitle="AI Servers"
      description="High-performance AI computing servers and GPU platforms for machine learning training, inference, and high-performance computing. From single GPU workstations to multi-GPU clusters."
      icon="🧠"
      color="from-amber-600 via-orange-600 to-red-700"
      bannerImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
      brands={["NVIDIA", "Dell", "HPE", "Intel", "Samsung", "Micron"]}
      products={[
        {
          name: "NVIDIA DGX/HGX Systems",
          series: "NVIDIA",
          desc: "Purpose-built AI supercomputers for large-scale model training with NVLink interconnect.",
          features: ["H100/H200 GPUs", "NVLink/NVSwitch", "NVLink interconnect", "DGX Cloud ready"],
        },
        {
          name: "Dell PowerEdge XE Series",
          series: "Dell",
          desc: "GPU-optimized servers for AI/ML workloads with flexible configurations.",
          features: ["Up to 8x GPUs", "iDRAC management", "Flexible GPU options", "Air/liquid cooling"],
        },
        {
          name: "HPE ProLiant RL/GN Series",
          series: "HPE",
          desc: "AI-optimized servers with HPE iLO management and liquid cooling options.",
          features: ["HPE iLO 6", "Direct liquid cooling", "Up to 8x GPUs", "HPE GreenLake"],
        },
        {
          name: "AI Inference Servers",
          series: "Multi-brand",
          desc: "Cost-effective inference-optimized servers for deploying trained AI models at scale.",
          features: ["NVIDIA L4/L40S", "Intel Gaudi", "Low power design", "High throughput"],
        },
        {
          name: "GPU Workstations",
          series: "Multi-brand",
          desc: "Desktop AI workstations for development, testing, and small-scale training.",
          features: ["RTX 4090/6000 Ada", "64-512GB RAM", "NVMe storage", "Quiet operation"],
        },
        {
          name: "AI Storage & Networking",
          series: "Infrastructure",
          desc: "High-speed storage and networking infrastructure for AI data pipelines.",
          features: ["NVMe all-flash arrays", "100G/400G networking", "Parallel file systems", "QNAP/Synology NAS"],
        },
      ]}
      faqs={[
        {
          q: "What is the difference between AI training and inference servers?",
          a: "Training servers need high computational power (multiple high-end GPUs like H100/H200, fast interconnects like NVLink) to train AI models. Inference servers are optimized for running trained models efficiently — they can use fewer or lower-power GPUs (L4, L40S) and focus on throughput and latency. We supply both types.",
        },
        {
          q: "How many GPUs do I need for AI model training?",
          a: "It depends on the model size. Small models (under 7B parameters) can train on 1-4 GPUs. Medium models (7B-70B) typically need 4-8 H100 GPUs. Large models (70B+) may require multi-node clusters. Our team can help size the right GPU cluster for your workload.",
        },
        {
          q: "Do you offer liquid cooling solutions for AI servers?",
          a: "Yes! We supply both air-cooled and direct liquid cooling (DLC) solutions from Dell, HPE, and custom rack integrators. Liquid cooling is recommended for 4+ GPU servers to reduce power consumption and noise.",
        },
        {
          q: "Can JSA Solution help build a complete AI computing center?",
          a: "Yes! We provide end-to-end AI computing center solutions — from server procurement and GPU cluster design to storage, networking, cooling, and rack infrastructure. Visit our AI Computing Center solution page for details.",
        },
        {
          q: "What is the price range for AI computing servers?",
          a: "GPU workstations start around ¥50,000, single-GPU inference servers from ¥80,000, and 8-GPU training servers from ¥800,000. Pricing varies by GPU model and configuration. Contact us for a detailed quote.",
        },
      ]}
      schemaDescription="AI computing servers and GPU platforms from NVIDIA, Dell, HPE authorized distributor"
    />
  );
}

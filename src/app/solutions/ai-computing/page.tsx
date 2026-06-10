import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "AI Computing Center Solution - GPU Cluster Design & Infrastructure",
  description:
    "End-to-end AI computing center solutions: GPU cluster design, AI server procurement, liquid cooling, high-speed storage, and networking infrastructure. From workstation to data center.",
  alternates: { canonical: "/solutions/ai-computing" },
};

export default function AIComputingPage() {
  return (
    <SolutionPage
      title="AI Computing Center"
      icon="⚡"
      description="End-to-end AI computing infrastructure solutions — from GPU workstation to multi-node training clusters. Design, procurement, deployment, and optimization."
      color="from-amber-600 via-orange-600 to-red-700"
      challenges={[
        "GPU supply shortage and long lead times",
        "Complex server configuration for AI workloads",
        "Insufficient cooling and power for GPU clusters",
        "High-speed storage bottleneck during training",
        "Network bandwidth between GPU nodes limiting scale",
        "Managing and monitoring AI computing resources"]}
      approach={[
        { title: "Workload Analysis", desc: "Understand your AI models, training data size, inference requirements, and growth projections to size the right infrastructure." },
        { title: "Architecture Design", desc: "Design the complete computing architecture — GPU servers, storage, networking, cooling, and rack layout." },
        { title: "Hardware Procurement", desc: "Leverage our NVIDIA, Dell, HPE partnerships to procure GPU servers with priority allocation and competitive pricing." },
        { title: "Infrastructure Buildout", desc: "Deploy the complete stack — server rack, power, cooling, storage, network, and management software." },
        { title: "Optimization & Support", desc: "Performance tuning, cluster management setup, and ongoing technical support for your AI workloads." },
      ]}
      products={[
        { category: "AI Training Servers", items: ["NVIDIA DGX H100/H200", "Dell PowerEdge XE9680", "HPE ProLiant RL300", "8x GPU configurations"] },
        { category: "AI Inference Servers", items: ["NVIDIA L4/L40S servers", "Intel Gaudi2 servers", "Low-power inference", "High-density 2U models"] },
        { category: "GPU Workstations", items: ["NVIDIA RTX 6000 Ada", "Dell Precision 7960", "HP Z8 Fury", "64-512GB RAM options"] },
        { category: "High-Speed Storage", items: ["NVMe all-flash arrays", "Parallel file systems", "QNAP/Synology NAS", "400GB/s throughput"] },
        { category: "Data Center Networking", items: ["100G/400G switches", "NVIDIA InfiniBand", "RoCEv2 Ethernet", "RDMA enabled"] },
        { category: "Cooling & Infrastructure", items: ["Direct liquid cooling (DLC)", "Rear door heat exchangers", "UPS & PDU", "Hot/cold aisle containment"] },
      ]}
      benefits={[
        "Priority GPU allocation through NVIDIA partnership",
        "Dell and HPE AI-optimized server configurations",
        "Liquid cooling expertise for dense GPU deployments",
        "Complete infrastructure — not just servers",
        "Import/export license for international procurement",
        "Competitive pricing with volume discounts",
        "Professional deployment and burn-in testing",
        "Ongoing support and cluster management",
      ]}
    />
  );
}

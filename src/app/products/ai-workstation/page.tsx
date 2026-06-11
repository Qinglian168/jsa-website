import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "AI Workstations & GPU Servers - NVIDIA RTX, Dell, HPE, Supermicro | JSA Solution",
  description:
    "High-performance AI workstations and GPU servers with NVIDIA RTX/Ada GPUs. From development workstations to data center training clusters. Dell, HPE, Supermicro, Lenovo.",
  alternates: { canonical: "/products/ai-workstation" },
};

export default function AiWorkstationPage() {
  return (
    <CategoryPage
      title="AI Workstations & GPU Servers"
      subtitle="AI Workstation"
      description="Accelerate your AI/ML workflows with purpose-built GPU workstations and servers. From single-GPU developer rigs to multi-node training clusters — powered by NVIDIA, Dell, HPE, and Supermicro."
      icon="💻"
      color="from-amber-500 via-orange-600 to-red-700"
      bannerImage="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80"
      brands={["NVIDIA", "Dell", "HPE", "Supermicro", "Lenovo", "Intel"]}
      products={[
        {
          name: "NVIDIA DGX Station",
          series: "NVIDIA",
          desc: "Desk-side AI supercomputer with 4× NVIDIA A100/H100 GPUs, purpose-built for data science and AI development.",
          features: ["4× A100/H100 GPUs", "NVIDIA AI Enterprise", "Water-cooled", "Quiet operation"],
        },
        {
          name: "Dell Precision AI Workstations",
          series: "Dell",
          desc: "Certified AI developer workstations with up to 4× NVIDIA RTX 6000 Ada GPUs and Intel Xeon W processors.",
          features: ["Up to 4× RTX 6000 Ada", "Xeon W processor", "ISV certified", "Reliable Memory Tech"],
        },
        {
          name: "HPE ProLiant DL380a Gen11",
          series: "HPE",
          desc: "GPU-accelerated server for AI training/inference with up to 8× NVIDIA H100 GPUs and AMD EPYC processors.",
          features: ["Up to 8× H100 GPUs", "AMD EPYC 9004", "HPE iLO 6", "PCIe Gen5"],
        },
        {
          name: "Supermicro SYS-421GE-TNRT",
          series: "Supermicro",
          desc: "4U GPU server supporting up to 8 double-width GPUs for large-scale AI training and HPC workloads.",
          features: ["8× GPU support", "Dual Xeon Scalable", "32 DIMM slots", "Redundant PSU"],
        },
        {
          name: "Lenovo ThinkStation PX",
          series: "Lenovo",
          desc: "Flagship AI workstation with dual Xeon processors and up to 4× NVIDIA RTX 6000 Ada GPUs.",
          features: ["Dual Xeon Scalable", "4× RTX Ada GPU", "2TB DDR5 memory", "Modular chassis"],
        },
      ]}
      faqs={[
        { q: "Which GPU configuration is best for large language model training?", a: "For LLM training we recommend NVIDIA H100 80GB or A100 80GB in 8-GPU configurations. Our engineers can help you size based on model parameters." },
        { q: "Do you provide pre-installed AI frameworks and CUDA?", a: "Yes, we offer optional pre-installation of NVIDIA CUDA, cuDNN, TensorFlow, PyTorch, and common AI/ML frameworks." },
        { q: "Can you build custom GPU server configurations?", a: "Absolutely. We specialize in custom AI infrastructure builds tailored to your specific workload and budget requirements." },
      ]}
      schemaDescription="AI workstations and GPU servers with NVIDIA RTX Ada GPUs from Dell, HPE, Supermicro, Lenovo. Authorized distributor for AI infrastructure and high-performance computing."
    />
  );
}

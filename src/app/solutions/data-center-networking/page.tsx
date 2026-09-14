import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Data Center Networking Solution - Spine-Leaf, VXLAN, 400G & AI Fabric | JSA Solution",
  description:
    "Data center network design and delivery: spine-leaf architecture, VXLAN/EVPN overlays, 25G/100G/400G switching and lossless RoCE fabrics for GPU clusters. Authorized supply from Cisco, NVIDIA, Huawei, H3C and Arista.",
  keywords: [
    "spine leaf architecture",
    "VXLAN EVPN fabric",
    "data center interconnect",
    "400GbE switching",
    "lossless ethernet RoCE",
    "AI cluster networking",
    "NVIDIA Spectrum-X",
    "data center migration",
  ],
  alternates: { canonical: "/solutions/data-center-networking" },
  openGraph: {
    title: "Data Center Networking Solution - Spine-Leaf & AI Fabric | JSA Solution",
    description:
      "Spine-leaf fabrics, VXLAN overlays and lossless RoCE networks for GPU clusters, designed and delivered with authorized multi-vendor supply.",
    url: "https://jsasolution.com/solutions/data-center-networking",
    type: "article",
  },
};

export default function DataCenterNetworkingPage() {
  return (
    <SolutionPage
      slug="data-center-networking"
      title="Data Center Networking"
      icon="🖥️"
      description="High-performance data center fabrics built on spine-leaf architecture, VXLAN/EVPN overlays and lossless Ethernet — sized today for east-west traffic, and ready tomorrow for GPU clusters that demand zero packet loss."
      color="from-indigo-700 via-blue-800 to-slate-900"
      challenges={[
        "Three-tier designs collapsing under east-west traffic from virtualization and microservices",
        "Spanning-tree blocking uplinks and stranding bandwidth you already paid for",
        "VLAN headroom exhausted just as tenants and environments multiply",
        "AI and storage workloads losing throughput to microbursts and packet drops",
        "Difficulty scaling beyond 400GbE without a forklift replacement",
        "Day-two operations run through device-by-device CLI instead of automation",
      ]}
      approach={[
        { title: "Traffic Profiling", desc: "We analyze north-south versus east-west flows, oversubscription ratios and burst behaviour to establish what the fabric actually needs to carry." },
        { title: "Fabric Architecture", desc: "A spine-leaf topology is designed with ECMP, EVPN and VXLAN overlays so every uplink forwards traffic and L2 domains extend across pods cleanly." },
        { title: "Lossless Design", desc: "For GPU clusters and NVMe storage we tune priority flow control, ECN marking and buffer thresholds so RoCE traffic runs without drops under load." },
        { title: "Supply & Staging", desc: "Switches, optics, DAC/AOC cables and rail kits are sourced through authorized channels and pre-staged, with optics matched to reach and port breakout." },
        { title: "Migration & Automation", desc: "Cutover runs pod by pod against a documented rollback, and we can deliver Ansible or Python tooling so routine changes become repeatable operations." },
      ]}
      products={[
        { category: "Spine Switches", items: ["Cisco Nexus 9300/9500", "NVIDIA Spectrum SN4000/5000", "Huawei CloudEngine 16800", "Arista 7280R3"] },
        { category: "Leaf & TOR", items: ["Cisco Nexus 9300-GX/GX2", "NVIDIA Spectrum SN3000/2000", "Huawei CloudEngine 6800", "H3C S6800/S6860"] },
        { category: "AI Fabric & RDMA", items: ["NVIDIA Spectrum-X platform", "NVIDIA BlueField DPUs", "NVIDIA ConnectX-7/8 adapters", "RoCEv2 fabric tuning"] },
        { category: "Interconnect Optics", items: ["400G QSFP-DD SR8/DR4/FR4", "100G DAC and AOC", "800G OSFP uplinks", "Breakout cables and fanouts"] },
        { category: "SDN & Automation", items: ["Cisco NDFC / ACI", "Huawei iMaster NCE-Fabric", "Ansible and Python toolchains", "Telemetry and gNMI streaming"] },
        { category: "Storage & Multi-site", items: ["32G Fibre Channel directors", "NVMe-oF capable fabrics", "DCI over DWDM", "Stretched L2 clusters"] },
      ]}
      benefits={[
        "Predictable latency: any-to-any traffic traverses a fixed number of hops",
        "Every active uplink forwards — no blocked ports wasting capital",
        "Scalable by adding leaves and spines without redesigning the core",
        "VXLAN/EVPN overlays remove the 4096 VLAN ceiling",
        "Lossless fabric tuning available for AI, HPC and NVMe-oF workloads",
        "Multi-vendor sourcing includes NVIDIA Spectrum-X for GPU estates",
        "Automation tooling delivered so operations stop depending on manual CLI",
        "Worldwide shipment from Shenzhen with authorized channel warranty",
      ]}
      faqs={[
        {
          q: "When is spine-leaf clearly better than a traditional three-tier design?",
          a: "Once the majority of your traffic moves server-to-server rather than client-to-server, which is the normal situation in any virtualized or containerized environment, a spine-leaf fabric delivers more bandwidth and more predictable latency for the same hardware spend. The deciding factor is traffic profile: if east-west flows dominate, three-tier designs turn into a bottleneck you cannot tune away.",
        },
        {
          q: "What oversubscription ratio should we design for?",
          a: "General-purpose enterprise workloads are generally comfortable at 3:1 at the leaf, while GPU training pods and NVMe-over-Fabrics workloads normally justify 1:1 to avoid collective stalls during all-reduce operations. We model both against your actual flow data, so you can see the cost difference before choosing rather than discovering it after deployment.",
        },
        {
          q: "Do we need a lossless fabric if we already run RoCEv2?",
          a: "RoCEv2 requires a lossless transport to preserve throughput, which means priority flow control and ECN must be configured deliberately rather than left at defaults. A fabric that is not tuned will usually pass traffic but suffer sharp throughput drops during microbursts. Whether you need full lossless depends on workload sensitivity, so we size it to the actual application.",
        },
        {
          q: "How do we move from 100G to 400G without replacing everything?",
          a: "Most modern spine platforms accept higher-speed line cards or share the same hardware SKU across port speeds, so uplinks can move first while access ports stay at 25G or 100G. Designing for that upgrade path from the start is far cheaper than replacing the fabric, and we plan for it explicitly during selection.",
        },
        {
          q: "Can you build the AI fabric and the general-purpose data center network together?",
          a: "Yes. Many organizations run a dedicated lossless rail for GPU nodes alongside their production fabric, sharing management, telemetry and spares. We design both, size the buffers independently and ensure the two domains interconnect cleanly at the border, rather than forcing GPU traffic onto a fabric that was never tuned for it.",
        },
        {
          q: "What automation or tooling do you hand over?",
          a: "A typical handover includes Ansible playbooks for VLAN fabric provisioning, port configuration templates and telemetry dashboards, plus a written runbook covering upgrades and common failure scenarios. If you prefer vendor controllers, we can implement Cisco NDFC or Huawei iMaster NCE-Fabric instead of custom tooling.",
        },
        {
          q: "Which optics should we select for 400G links?",
          a: "Within a rack or a short row, DAC and AOC cost significantly less than optical transceivers and consume less power. Beyond roughly 100 metres, DR4 over parallel single-mode is usually the most economical step, with FR4 preferred when you want duplex fiber reuse. We match optics to measured distances so you are not paying for reach you will never use.",
        },
      ]}
    />
  );
}

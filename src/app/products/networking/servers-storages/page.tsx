import { CategoryPage } from "@/components/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servers & Storages - Dell, HPE, QNAP, Synology | JSA Solution",
  description: "Rack servers, GPU servers, NAS/SAN storage from Dell, HPE, QNAP, Synology, Seagate. Enterprise computing and storage solutions with global delivery.",
  alternates: { canonical: "/products/networking/servers-storages" },
};

export default function ServersStoragesPage() {
  return (
    <CategoryPage
      title="Servers & Storages"
      subtitle="Servers & Storages"
      description="Enterprise rack servers, GPU servers for AI workloads, NAS and SAN storage arrays. From Dell, HPE, Supermicro, QNAP, Synology — complete computing and storage infrastructure."
      icon="🖥️"
      color="from-amber-500 to-orange-600"
      bannerImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
      brands={["Dell", "HPE", "Supermicro", "Lenovo", "QNAP", "Synology", "Seagate", "Intel"]}
      products={[
        {
          name: "Dell PowerEdge R760",
          series: "Dell",
          desc: "2U rack server with 4th/5th Gen Intel Xeon, up to 32 DIMM slots, and PCIe Gen5 for AI and HPC workloads.",
          features: ["Intel Xeon 5th Gen", "32 DIMM slots", "PCIe Gen5", "iDRAC management"],
        },
        {
          name: "HPE ProLiant DL380 Gen11",
          series: "HPE",
          desc: "Versatile 2P rack server with 4th/5th Gen AMD EPYC or Intel Xeon, perfect for mixed workloads and virtualization.",
          features: ["AMD EPYC / Intel Xeon", "iLO 6 management", "ASIC acceleration", "HPE GreenLake ready"],
        },
        {
          name: "Supermicro GPU Servers",
          series: "Supermicro",
          desc: "4U GPU servers supporting up to 10 NVIDIA H100/A100 GPUs for AI training and inference clusters.",
          features: ["10x GPU support", "NVIDIA H100/A100", "NVLink support", "Direct-to-chip cooling"],
        },
        {
          name: "QNAP TS-h2287XU-RP",
          series: "QNAP",
          desc: "Enterprise NAS with Intel Xeon processor, QuTS hero OS, and ZFS file system for data integrity and performance.",
          features: ["Intel Xeon", "QuTS hero (ZFS)", "25GbE ready", "Snapshots & dedupe"],
        },
        {
          name: "Synology HD6500",
          series: "Synology",
          desc: "High-density 4U rack NAS with 60-bay capacity, perfect for video surveillance storage and file servers.",
          features: ["60-bay 4U", "Scale-out ready", "Synology DSM", "Surveillance Station"],
        },
        {
          name: "Seagate Exos X RAID Storage",
          series: "Seagate",
          desc: "Enterprise RAID storage arrays with up to 8PB capacity, designed for data centers and cloud service providers.",
          features: ["8PB capacity", "RAID 6/TP", "12Gb/s SAS", "Seagate Secure"],
        },
      ]}
      faqs={[
        { q: "Do you supply GPU servers for AI and deep learning?", a: "Yes, we supply Supermicro and Dell GPU servers with NVIDIA H100, A100, L40S, and RTX 6000 Ada GPUs, configured for AI training and inference workloads." },
        { q: "What is the difference between NAS and SAN storage?", a: "NAS provides file-level access over Ethernet (TCP/IP) and is easier to deploy. SAN provides block-level access over Fibre Channel or iSCSI, offering higher performance for databases and virtual machines." },
        { q: "Do you offer extended warranty and on-site support for servers?", a: "Yes, we can arrange extended manufacturer warranty (up to 5 years) and on-site support services through our partner network in your region." },
      ]}
      schemaDescription="Servers and storage including Dell PowerEdge, HPE ProLiant, Supermicro GPU servers, QNAP NAS, Synology HD series, Seagate Exos storage."
    />
  );
}

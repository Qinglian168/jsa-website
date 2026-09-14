import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Firewall & Network Security Solution - NGFW, VPN, Zero Trust | JSA Solution",
  description:
    "Enterprise firewall and network security solutions: next-generation firewalls, IPS/IDS, zero-trust network access, SSL inspection and 24/7 monitoring. Authorized supply of Fortinet, Palo Alto, Huawei, Sangfor and Hillstone. Free security assessment.",
  keywords: [
    "next-generation firewall",
    "NGFW deployment",
    "enterprise network security",
    "zero trust architecture",
    "intrusion prevention system",
    "Fortinet FortiGate",
    "SD-WAN security",
    "SOC consulting",
  ],
  alternates: { canonical: "/solutions/firewall-security" },
  openGraph: {
    title: "Firewall & Network Security Solution | JSA Solution",
    description:
      "Next-generation firewalls, IPS/IDS, zero-trust access and security operations, designed and deployed by JSA Solution across 80+ countries.",
    url: "https://jsasolution.com/solutions/firewall-security",
    type: "article",
  },
};

export default function FirewallSecurityPage() {
  return (
    <SolutionPage
      slug="firewall-security"
      title="Firewall & Security"
      icon="🔒"
      description="End-to-end network security built around next-generation firewalls, segmentation and zero-trust access. We assess your exposure, design the right architecture, supply authorized hardware and configure it for real-world threat conditions."
      color="from-red-600 via-rose-700 to-slate-900"
      challenges={[
        "Ransomware spreading laterally once a single endpoint is compromised",
        "A flat internal network where every user can reach every server",
        "SSL inspection crippling firewall throughput after enabling decryption",
        "Remote staff and branch offices connecting without consistent policy control",
        "Compliance frameworks (ISO 27001, GDPR, MLPS 2.0) requiring documented controls",
        "Security tools deployed but nobody watching the alerts they generate",
      ]}
      approach={[
        { title: "Exposure Assessment", desc: "We map your existing topology, internet-facing assets, VPN concentrators and inter-VLAN traffic flows to identify where a breach would actually start and where it would spread." },
        { title: "Segmentation Design", desc: "A segmentation model is designed around real business zones — corporate, guest, OT, server and management — so a compromise in one zone stops at its boundary." },
        { title: "Platform Selection", desc: "Firewall platforms are sized against measured throughput with SSL inspection, IPS and logging enabled — not against the vendor's headline marketing number." },
        { title: "Deployment & Hardening", desc: "HA pairing, policy migration, NAT, VPN tunnels and inspection profiles are configured and tested, with a rollback plan maintained throughout the cutover." },
        { title: "Managed Detection", desc: "Post-deployment we can operate the estate with centralized logging, alert triage, periodic rule reviews and monthly posture reporting." },
      ]}
      products={[
        { category: "Next-Gen Firewalls", items: ["Fortinet FortiGate 60F-600E", "Palo Alto PA-3400/5400", "Huawei USG6500/6600", "Sangfor NGAF"] },
        { category: "IPS / Threat Prevention", items: ["FortiGuard IPS & AV bundles", "Palo Alto Threat Prevention", "Hillstone IPS", "Sandboxing services"] },
        { category: "Remote Access & ZTNA", items: ["FortiClient EMS + ZTNA", "SSL VPN portals", "IPsec site-to-site", "Certificate-based auth"] },
        { category: "Web & Application", items: ["FortiWeb WAF", "DNS filtering", "SD-WAN security policies", "Email gateway security"] },
        { category: "Endpoint & Identity", items: ["FortiEDR / XDR", "Radius & TACACS+ servers", "802.1X access control", "MFA integration"] },
        { category: "Visibility & Management", items: ["FortiAnalyzer", "Huawei SecoManager", "Syslog & SIEM pipelines", "Unified threat dashboards"] },
      ]}
      benefits={[
        "17 years securing enterprise networks across 80+ countries",
        "Multi-vendor sizing — we recommend the platform that fits, not one brand for everything",
        "Throughput sized with inspection turned on, so performance holds under load",
        "Segmentation and zero-trust design included with every deployment",
        "Authorized distribution channels — genuine hardware, valid licenses, full vendor warranty",
        "Documented rule base and access policies handed over for audit evidence",
        "Compatibility checked against your existing switching and wireless before purchase",
        "Shipped from Shenzhen with export documentation and door-to-door logistics",
      ]}
      faqs={[
        {
          q: "How do you size a firewall for our network?",
          a: "We start from measured internet bandwidth, concurrent session counts and VPN user numbers, then apply the throughput de-rating that comes with enabling SSL inspection, IPS and logging. A firewall that shows 10 Gbps in the datasheet typically delivers a fraction of that once real inspection profiles are active, so sizing against the marketing number is the most common cause of post-deployment slowdowns.",
        },
        {
          q: "Can we migrate our existing firewall rules without a service outage?",
          a: "Yes. We import the existing rule base into the new platform, clean up unused and overlapping entries, then run both units in parallel during a maintenance window. Traffic is switched over incrementally by zone, with a documented rollback path if any flow misbehaves. Most migrations complete with under 30 minutes of noticeable impact.",
        },
        {
          q: "Do we really need SSL inspection, given the performance cost?",
          a: "TLS 1.3 inspection is now standard practice for outbound corporate traffic, because encrypted DNS and HTTPS tunnels otherwise give malware a private lane. We enable it selectively — high-risk categories such as newly registered domains get full inspection, while latency-sensitive SaaS apps may be bypassed — so the cost stays proportional to the risk.",
        },
        {
          q: "What does zero-trust actually mean for a mid-sized enterprise?",
          a: "In practice it means replacing network-position trust with per-application access: every request is authenticated, authorized and inspected whether it originates from inside or outside the office. For most organizations this begins with identity-aware access for remote users and strict segmentation between server zones, then expands as resources allow.",
        },
        {
          q: "Can you supply spare units and licenses for sites outside China?",
          a: "We ship worldwide from Shenzhen with full export documentation. For repeat orders we can pre-position spare units and RMA stock, and we hold relationships with authorized channels for Fortinet, Palo Alto, Huawei, Sangfor and Hillstone, which means genuine hardware with transferable vendor warranty and valid license subscriptions.",
        },
        {
          q: "Do you provide ongoing monitoring after deployment?",
          a: "We offer managed detection with centralized logging, daily alert triage and a monthly posture report. If you prefer to keep it in-house, we can hand over the alerting pipeline and dashboards instead, together with a written runbook so your team can operate it confidently.",
        },
        {
          q: "What budget should we expect for a firewall refresh?",
          a: "A typical dual-firewall HA refresh for a 300-person enterprise with SSL inspection and a three-year threat bundle typically lands well below the cost of a single security incident. We provide itemized quotes across two or three platforms so you can compare the real multi-year total, including license renewals, before committing.",
        },
      ]}
    />
  );
}

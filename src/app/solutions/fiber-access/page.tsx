import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Fiber Access Solution - GPON, XGS-PON, FTTH & ISP OLT Deployment | JSA Solution",
  description:
    "Fiber access solutions for ISPs, hotels, campuses and housing estates: GPON, EPON and XGS-PON OLT and ONU platforms, structured fiber plant and ODN design. Authorized supply from Huawei, ZTE, H3C and Ruijie.",
  keywords: [
    "GPON OLT ONU",
    "XGS-PON deployment",
    "FTTH solution",
    "EPON and GPON comparison",
    "fiber access network design",
    "ISP broadband infrastructure",
    "optical distribution network",
    "passive optical LAN",
  ],
  alternates: { canonical: "/solutions/fiber-access" },
  openGraph: {
    title: "Fiber Access Solution - GPON, XGS-PON & FTTH | JSA Solution",
    description:
      "Complete GPON, EPON and XGS-PON fiber access solutions with ODN design, OLT/ONU supply and deployment support for ISPs, enterprises and hospitality.",
    url: "https://jsasolution.com/solutions/fiber-access",
    type: "article",
  },
};

export default function FiberAccessPage() {
  return (
    <SolutionPage
      slug="fiber-access"
      title="Fiber Access"
      icon="🔦"
      description="Passive optical access networks for service providers, hotels, campuses and real estate. We design the optical distribution network, size the split ratio correctly, supply authorized OLT and ONU platforms and support you through activation."
      color="from-cyan-600 via-blue-700 to-indigo-900"
      challenges={[
        "Existing copper cabling unable to deliver symmetric gigabit services",
        "OLT chassis under-provisioned for subscriber growth over the next five years",
        "Split ratio and power budget mismatches causing intermittent ONU dropouts",
        "Fragmented approvals across property owners, contractors and operators",
        "No reliable spare and RMA pipeline for remote or overseas sites",
        "Mixed PON generations making management and firmware upgrades painful",
      ]}
      approach={[
        { title: "ODN Survey", desc: "Fiber routes, conduit capacity, riser space and splitter locations are surveyed so the physical plant is designed before any active equipment is specified." },
        { title: "Power Budget Design", desc: "Every splitter level is calculated against measured span loss and connector budget, giving an optical margin that survives repairs and re-splices later." },
        { title: "Technology Selection", desc: "GPON, EPON and XGS-PON are compared against your subscriber density, service tiers and backhaul availability — including migration paths that reuse existing drop fiber." },
        { title: "Supply & Staging", desc: "OLT chassis, line cards, ONUs and passive components are sourced through authorized channels, then pre-configured and burned in before shipment." },
        { title: "Activation & Handover", desc: "We support OLT commissioning, ONU provisioning templates and bulk subscriber activation, then hand over documentation and on-site spare recommendations." },
      ]}
      products={[
        { category: "OLT Platforms", items: ["Huawei MA5800 / EA5800", "ZTE C600 / C650", "H3C S7500E / ET series", "Ruijie RG-OLT"] },
        { category: "ONU / ONT", items: ["Huawei HG8010/HG8145", "ZTE F601/F660 series", "Wi-Fi 6 gateway ONTs", "Industrial and multi-port ONUs"] },
        { category: "XGS-PON & 10G", items: ["XGS-PON asymmetric line cards", "Combo GPON/XGS-PON ports", "10G symmetric ONUs", "25G PON for backhaul"] },
        { category: "Optical Distribution", items: ["SC/APC PLC splitters", "Fiber distribution hubs", "Pre-terminated drop cables", "IP68 field closures"] },
        { category: "Test & Measurement", items: ["OTDR handhelds", "Optical power meters", "Visual fault locators", "Fiber inspection scopes"] },
        { category: "Management", items: ["Huawei NCE-CampusInsight", "ZTE NetNumen U31", "Zero-touch ONU provisioning", "SNMP and TR-069 platforms"] },
      ]}
      benefits={[
        "One fiber carrying voice, data, IPTV and Wi-Fi backhaul to every unit",
        "Passive splitters between exchange and subscriber — no powered street cabinets",
        "Split ratio sized with real optical margin instead of theoretical best-case numbers",
        "Multi-vendor sourcing across Huawei, ZTE, H3C and Ruijie",
        "GPON, EPON and XGS-PON all available, including combo cards for staged migration",
        "Pre-staged and burned-in equipment reduces on-site commissioning time",
        "Spare and RMA strategy defined before cutover, not after the first outage",
        "Export documentation and worldwide shipping handled from Shenzhen",
      ]}
      faqs={[
        {
          q: "Should we deploy GPON, EPON or XGS-PON?",
          a: "GPON remains the most economical choice for residential FTTH where asymmetric traffic dominates and per-subscriber cost matters most. XGS-PON is the natural pick for business parks, MDUs and hotel estates selling symmetric multi-gigabit tiers, and for ISPs planning 10G tier launches. Because XGS-PON and GPON share the same ODN in most deployments, combo line cards let you introduce 10G subscribers selectively without touching the fiber plant.",
        },
        {
          q: "How far can a PON reach and how many subscribers per port?",
          a: "Standard GPON supports 20 km logical reach with class B+ optics, though practical designs typically keep spans well inside that for margin. Split ratios up to 1:128 are specified, but 1:32 or 1:64 is the realistic design point when you account for connector loss, splice loss and future repairs — which is why we calculate the power budget per segment rather than applying a single global ratio.",
        },
        {
          q: "Can existing fiber be reused for an upgrade?",
          a: "In most cases yes. Because PON uses the same wavelength plan across generations, existing single-mode drop fiber and splitters can generally be reused when migrating from GPON to XGS-PON. We validate attenuation and connector condition first, which is usually enough to decide whether the copper incumbent stays in place or gets replaced.",
        },
        {
          q: "How many subscribers justify installing an OLT?",
          a: "Once a site exceeds roughly 500 units, the cost per subscriber of a dedicated OLT typically drops below leasing dark fiber from a third party. Below that threshold, we often recommend a shared OLT or a smaller modular chassis so you keep the option to grow without buying capacity you will not fill for years.",
        },
        {
          q: "What spares should we keep on site?",
          a: "A practical minimum is spare ONUs at roughly 2 percent of the installed base, one spare uplink module per OLT, and a small stock of patch cords and splitter pigtails — these are the items that fail or get damaged most often. We build the spare list into the initial proposal so it is budgeted rather than improvised after an outage.",
        },
        {
          q: "Do you support hotel and MDU deployments differently from ISP rollouts?",
          a: "Yes. Hospitality estates usually need per-room ONUs with managed Wi-Fi backhaul, IPTV multicast and VLAN isolation between guest and staff traffic. We configure service templates accordingly and integrate with your PMS and VLAN scheme, which small ONU-only suppliers typically do not cover.",
        },
        {
          q: "How long does a typical rollout take?",
          a: "Equipment lead time is typically one to three weeks depending on platform and line-card availability, with ODN civil work running in parallel. We stage and pre-configure during that window so that once the fiber plant is ready, provisioning hundreds of ONUs can be completed in days rather than weeks.",
        },
      ]}
    />
  );
}

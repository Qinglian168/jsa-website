import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Network Infrastructure Solution - Structured Cabling, Racks, Power & Cooling | JSA Solution",
  description:
    "Physical network infrastructure: Cat6A/OM4 structured cabling, rack and cabinet design, PDU and UPS sizing, PoE budget planning and labeled cable management. Delivered with certification and documentation.",
  keywords: [
    "structured cabling design",
    "Cat6A installation",
    "network rack cabinet",
    "PDU and UPS sizing",
    "PoE budget planning",
    "server room cooling",
    "fiber patch panel",
    "cable management",
  ],
  alternates: { canonical: "/solutions/network-infrastructure" },
  openGraph: {
    title: "Network Infrastructure Solution - Cabling, Racks & Power | JSA Solution",
    description:
      "Structured cabling, rack design, power distribution and physical-layer documentation delivered to standards, with every link certified before handover.",
    url: "https://jsasolution.com/solutions/network-infrastructure",
    type: "article",
  },
};

export default function NetworkInfrastructurePage() {
  return (
    <SolutionPage
      slug="network-infrastructure"
      title="Network Infrastructure"
      icon="🌐"
      description="The physical layer everything else depends on: structured copper and fiber cabling, racks and containment, power distribution, cooling and documentation — designed to support your PoE devices, uplinks and growth instead of limiting them."
      color="from-teal-600 via-cyan-700 to-slate-900"
      challenges={[
        "Cabling installed years ago unable to support Wi-Fi 6E or multi-gigabit access points",
        "Switches tripping PoE budgets once additional APs and cameras are added",
        "Patch panels and cabinets with no labeling, making moves and faults slow to resolve",
        "Rack power and cooling sized before virtualization, leaving no headroom for denser gear",
        "Fiber plant undocumented, so a single cut takes hours to locate",
        "New equipment arriving that physically does not fit existing racks or cable trays",
      ]}
      approach={[
        { title: "Site Survey", desc: "Existing pathways, cabinet capacity, power feeds, earthing and cooling capacity are surveyed before anything is specified, including measured link lengths." },
        { title: "Physical Design", desc: "We design the horizontal and backbone cabling topology, rack elevations and containment, along with copper versus fiber selection per segment." },
        { title: "Power & PoE Planning", desc: "Power draw per device is summed against real PoE class budgets, then UPS runtime and PDU phase balance are sized to your required autonomy target." },
        { title: "Supply & Installation", desc: "Cabling, cabinets, PDUs, patch panels and accessories are supplied as one coordinated package, then installed to standard with clean routing and labeling." },
        { title: "Certification & Handover", desc: "Every copper link is tested and every fiber span is loss-tested, followed by labeled as-builts, port maps and digital records for future changes." },
      ]}
      products={[
        { category: "Copper Cabling", items: ["Cat6A F/UTP and U/FTP", "Cat6 for desktop runs", "Cat8 for 25/40GBASE-T", "Patch panels and keystones"] },
        { category: "Fiber Cabling", items: ["OM4 OM5 multimode trunks", "OS2 single-mode backbones", "MPO/LC pre-terminated cassettes", "Fiber patch leads"] },
        { category: "Racks & Enclosures", items: ["19-inch 42U/45U cabinets", "Wall-mount enclosures", "Hot/cold aisle containment", "Shelves and blanking panels"] },
        { category: "Power Distribution", items: ["Basic and metered PDUs", "Switched outlet PDUs", "UPS with external battery packs", "ATS and transfer switches"] },
        { category: "Cooling & Monitoring", items: ["In-row and rack-mounted units", "Temperature probes", "Door contact sensors", "Environmental alerting"] },
        { category: "Test & Documentation", items: ["Copper channel certification", "OLTS Tier 1 fiber testing", "Label printing systems", "As-built drawings and port maps"] },
      ]}
      benefits={[
        "Physical layer designed to support Wi-Fi 7 and multi-gigabit edge devices",
        "PoE budgets calculated per device class, not guessed from port counts",
        "Every link certified with results delivered before handover",
        "Labeled panels and digital port maps cut fault resolution time dramatically",
        "Power, cooling and rack space planned together so density does not stall later",
        "One supply package avoids mismatched cabinets, panels and accessories",
        "Cable management that stays serviceable after equipment changes",
        "Documentation handed over in a format your team can actually maintain",
      ]}
      faqs={[
        {
          q: "Should we run Cat6A rather than Cat6 for a new build?",
          a: "Cat6A is the sensible default for anything new. It supports 10GBASE-T over the full 100-metre channel, whereas standard Cat6 is limited to roughly 55 metres depending on alien crosstalk conditions. Given that cabling usually stays in place three times longer than active hardware, the modest uplift in material cost is small compared with re-pulling cable later to support Wi-Fi 7 access points.",
        },
        {
          q: "How do we avoid running out of PoE capacity?",
          a: "Add the real measured draw of every device — access points with actual radio counts, PTZ cameras drawing high power at full pan, phones and readers — rather than relying on nominal class ratings. We build the budget device by device and typically recommend 25 to 30 percent headroom, which covers firmware-driven power increases and additions between refresh cycles.",
        },
        {
          q: "Do we need single-mode fiber between floors instead of multimode?",
          a: "For backbone runs above roughly 150 metres, or any link that may later carry 40G or 100G, single-mode is generally the better long-term answer, since OS2 carries essentially distance-independent bandwidth. Multimode OM4 remains cost-effective for short machine-room runs where transceiver pricing matters more than future proofing.",
        },
        {
          q: "How should we size UPS runtime?",
          a: "Most enterprises target sufficient runtime to ride out short outages plus enough margin for a controlled shutdown, typically 10 to 15 minutes. Going beyond that usually costs disproportionately, since battery capacity drives most of the expense. We sum the actual load, apply power factor, and size battery packs against your stated autonomy goal.",
        },
        {
          q: "Can you work in a live office without disrupting staff?",
          a: "Yes, and it is often how these projects run. We typically install new cabling and terminate during evenings or weekends, keeping the old infrastructure active until the new plant is certified. Only then do we schedule a short switchover window, which means user-facing downtime is usually measured in minutes.",
        },
        {
          q: "What documentation should we expect at handover?",
          a: "You should receive per-port test results for every copper link, loss measurements for every fiber span, a labeled panel schedule, rack elevation drawings and a port-to-outlet mapping. We deliver these digitally so they can be updated later, since documentation that is never maintained stops being useful quickly.",
        },
        {
          q: "Do cable compliance standards differ between regions?",
          a: "Structured cabling standards such as ISO/IEC 11801 and the TIA-568 series share the same core channel limits, though fire rating and jacket classification requirements vary by country. We confirm the locally applicable rating before specifying anything, particularly for plenum and riser spaces in buildings with their own compliance rules.",
        },
      ]}
    />
  );
}

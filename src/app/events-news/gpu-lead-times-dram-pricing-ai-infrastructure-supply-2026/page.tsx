import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "45-Week GPU Lead Times and Quadrupled DRAM: AI Infrastructure Supply Briefing for ICT Distributors",
  description:
    "GPU lead times reach 45 weeks and DRAM costs quadrupled. Inside NVIDIA's $390B supply bet, Cisco's AI networking surge, and Q1 2027 ICT procurement planning.",
  keywords: [
    "GPU lead times 2026",
    "GPU server distributor Europe",
    "AI server supplier Germany",
    "AI computing chip distributor USA",
    "DRAM price increase 2026",
    "server memory shortage 2026",
    "network switch supplier UK",
    "wireless WiFi AP vendor Europe",
    "firewall distributor South Africa",
    "router supplier Nigeria",
    "IP phone vendor Kenya",
    "ICT infrastructure supplier Malaysia",
    "network switch distributor Indonesia",
    "NVIDIA Vera Rubin supply commitments",
    "Cisco Multicloud Fabric",
    "FortiAIGate Equinix",
    "Q1 2027 ICT procurement planning",
    "JSA Solution Shenzhen",
  ],
  alternates: {
    canonical: "/events-news/gpu-lead-times-dram-pricing-ai-infrastructure-supply-2026",
  },
  openGraph: {
    title:
      "45-Week GPU Lead Times and Quadrupled DRAM: The Q4 2026 AI Infrastructure Supply Squeeze",
    description:
      "NVIDIA commits $390 billion to secure components and guides gross margin down three points, TrendForce measures 45-week GPU and 50-week HDD lead times, Cisco doubles AI infrastructure revenue expectations, Fortinet moves AI traffic inspection onto Equinix, and Malaysia attaches a 30% local content rule to a RM385.7 billion data centre pipeline.",
    type: "article",
    publishedTime: "2026-11-20",
    tags: [
      "NVIDIA",
      "AI infrastructure",
      "GPU supply chain",
      "server memory",
      "Cisco",
      "Fortinet",
      "ICT procurement",
      "data centre",
    ],
  },
};

export default function GpuLeadTimesDramPricingAiInfrastructureSupply2026() {
  return (
    <article className="min-h-screen bg-[#f0f7ff]">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-deepblue text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="tag-tech !bg-white/15 !text-white !border-white/25">AI Compute</span>
            <span className="tag-tech !bg-white/15 !text-white !border-white/25">Supply Chain</span>
            <span className="tag-tech !bg-white/15 !text-white !border-white/25">ICT Procurement</span>
            <span className="tag-tech !bg-white/15 !text-white !border-white/25">Data Centre</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            45-Week GPU Lead Times, Quadrupled DRAM, and a $390 Billion Supply Bet: November 20, 2026 Enterprise ICT Briefing
          </h1>
          <div className="flex items-center gap-4 text-white/70 text-sm flex-wrap">
            <time dateTime="2026-11-20">November 20, 2026</time>
            <span>&middot;</span>
            <span>15 min read</span>
            <span>&middot;</span>
            <span>By JSA Solution Editorial Team</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="prose-custom mb-12">
            <p className="text-lg leading-relaxed text-gray mb-6">
              The most important number in enterprise ICT this week was not a revenue figure. On November 17, <strong>NVIDIA</strong> reported quarterly revenue of <strong>$115.8 billion</strong>, up 103% year on year, with data centre sales of <strong>$107.6 billion</strong> accounting for roughly 93% of the total. Impressive, and almost entirely expected. The number that changes how projects get quoted arrived further down the release: NVIDIA&apos;s supply and capacity commitments have risen from <strong>$279 billion to $390 billion</strong>, and the company guided fourth-quarter gross margin down to <strong>71.0&ndash;72.0%</strong> from the 74.8% it just reported. That is a three-point margin concession on the largest revenue base in the semiconductor industry &mdash; and it is a component-cost signal, not a demand signal.
            </p>
            <p className="text-lg leading-relaxed text-gray mb-6">
              Five days earlier, <strong>Cisco</strong> posted the strongest revenue and non-GAAP earnings growth in fifteen years: <strong>$18.5 billion</strong> in Q1 fiscal 2027, up 24%, with networking products up <strong>43%</strong> to $11.1 billion. Cisco also doubled its fiscal 2027 AI infrastructure revenue expectation for hyperscale customers to about <strong>$9 billion</strong>, and its inventory balance climbed from $5.69 billion to $6.38 billion quarter on quarter. Two vendors, two different portfolios, one shared conclusion: <strong>demand visibility has lengthened far beyond the ability of component supply to meet it</strong>, and the correction is being priced into hardware, not absorbed by the vendor.
            </p>
            <p className="text-lg leading-relaxed text-gray mb-6">
              This briefing covers what changed between November 10 and November 19, 2026, and translates each development into procurement actions: for GPU server distributors and AI computing chip vendors serving Europe and the USA, for network switch and wireless WiFi AP suppliers in the UK and Germany, for firewall distributors across South Africa, Nigeria and Kenya, and for ICT infrastructure suppliers managing campus and data centre projects in Malaysia and Indonesia. JSA Solution supplies servers, network switches, wireless APs, IP phones, GPUs and AI computing chips, firewalls, IPPBX, routers and smart meeting panels from Cisco, Huawei, HP, Ruckus, Fortinet, Yealink, Grandstream, Fanvil, Ubiquiti, NVIDIA and MikroTik. The observations below come from daily quotation, tender and delivery work with overseas integrators, weak-current contractors, project dealers and retailers &mdash; not from vendor briefings.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-xl border border-border p-6 mb-12">
            <h3 className="font-bold text-dark mb-3">In This Article:</h3>
            <ol className="space-y-2 text-sm text-primary">
              <li><a href="#nvidia" className="hover:underline">1. NVIDIA&apos;s $390 Billion Supply Bet: Demand Is Not the Constraint</a></li>
              <li><a href="#leadtimes" className="hover:underline">2. The Lead-Time Table: Why Memory Decides Your Delivery Date</a></li>
              <li><a href="#cisco" className="hover:underline">3. Cisco&apos;s AI Networking Surge and the Multicloud Fabric Milestone</a></li>
              <li><a href="#security" className="hover:underline">4. Security Budgets Move: AI Traffic Inspection and an Unfixable Branch</a></li>
              <li><a href="#regional" className="hover:underline">5. Malaysia&apos;s RM385.7 Billion Pipeline and the 30% Local Content Rule</a></li>
              <li><a href="#playbook" className="hover:underline">6. A Q1 2027 Procurement Playbook</a></li>
              <li><a href="#faq" className="hover:underline">7. Frequently Asked Questions</a></li>
            </ol>
          </div>

          {/* Section 1: NVIDIA */}
          <div className="mb-14" id="nvidia">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600 font-bold text-lg">1</span>
              NVIDIA&apos;s $390 Billion Supply Bet: Demand Is Not the Constraint
            </h2>
            <p className="text-gray leading-relaxed mb-4">
              NVIDIA&apos;s fiscal 2027 third quarter, reported November 17 and covering the period ended October 25, was the company&apos;s first set of results since Jensen Huang stepped down as chief executive on November 12. Interim CEO and CFO Colette Kress described Vera Rubin as being &ldquo;off to an explosive start&rdquo;. The <strong>Vera Rubin NVL72</strong> rack-scale platform is shipping at what NVIDIA calls the fastest product ramp in its history, with racks running at CoreWeave, Google Cloud, Microsoft Azure, Oracle Cloud Infrastructure and Nebius. GAAP diluted earnings per share reached $2.70, and the fourth-quarter revenue guide sits at <strong>$130.0 billion &plusmn;3%</strong> &mdash; a figure that excludes any data centre compute revenue from China.
            </p>
            <p className="text-gray leading-relaxed mb-4">
              The supply disclosures are the commercially decisive part. In its SEC filing, NVIDIA raised supply and capacity commitments from $279 billion to <strong>$390 billion</strong>, attributing most of the increase to multi-year memory procurement, and separately disclosed <strong>$102 billion</strong> in cloud service agreements and future data centre lease commitments. Read plainly: the company with the best demand visibility in the industry has decided that the way to protect its roadmap is to buy components years ahead of need, in cash, from a supplier base of three memory makers. That is not a company worried about orders.
            </p>
            <p className="text-gray leading-relaxed mb-4">
              The margin guide tells the other half of the story. Falling from 74.8% GAAP gross margin to a 71.0&ndash;72.0% range in a single quarter, on a revenue base guiding toward $130 billion, implies several billion dollars of incremental component cost. NVIDIA is large enough to absorb some of that. Its channel is not. When the platform vendor reprices, the repricing cascades down through OEM barebones, GPU server integrators and, eventually, every AI rack that a systems integrator quotes to an enterprise buyer in Frankfurt, Dallas or Dubai.
            </p>
            <p className="text-gray leading-relaxed mb-4">
              A second, less discussed dynamic is working in the opposite direction on the demand side. Kress noted that token processing prices have fallen nearly <strong>60% since May</strong>, which is exactly the behaviour of a market where inference capacity is being added faster than unit demand. Cheaper tokens are pulling more workloads into production, and that in turn is lifting utilisation of hardware that was supposed to be obsolete. Some <strong>Hopper-generation accelerators have been re-signed on multi-year rental contracts at up to twice their original rates</strong>, while <strong>Blackwell Ultra B300 rental prices are up more than 60% since launch</strong>. Rental economics improving for an older generation is a reliable signal of scarcity in the current one.
            </p>
            <div className="bg-white rounded-xl border border-border p-6 mb-4">
              <h3 className="font-bold text-dark mb-2">What it means for GPU and AI server procurement</h3>
              <p className="text-gray text-sm leading-relaxed">
                Three practical consequences. First, <strong>stop treating GPU price lists as stable within a quarter</strong>. With the platform vendor guiding margin down and memory in structural shortage, a 90-day quotation hold on an AI server is now a commercial risk that sits with the supplier, not the buyer. Quote with an explicit validity window and a memory-price clause. Second, <strong>the previous generation has become a legitimate budget option</strong>: if Hopper capacity commands double on renewal, buying or renting older accelerated nodes for inference-only workloads can beat waiting eighteen months for current-generation allocation. Third, for integrators, <strong>sell the design and the integration, not the accelerator</strong> &mdash; the margin on silicon is being compressed by forces outside your control, while power, cooling, fabric design and workload right-sizing remain defensible services.
              </p>
            </div>
          </div>

          {/* Section 2: Lead times */}
          <div className="mb-14" id="leadtimes">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 font-bold text-lg">2</span>
              The Lead-Time Table: Why Memory Decides Your Delivery Date
            </h2>
            <p className="text-gray leading-relaxed mb-4">
              On November 2, TrendForce moved GPUs from &ldquo;Balanced&rdquo; to <strong>&ldquo;Tightening&rdquo;</strong> in its weekly supply radar, and rated <strong>six of the seven components</strong> it tracks as being in shortage. The published lead-time comparison against a normal market is the single most useful planning document a project dealer can hold this quarter:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-3 font-semibold">Component</th>
                    <th className="text-left p-3 font-semibold">Lead time now</th>
                    <th className="text-left p-3 font-semibold">Normal market</th>
                    <th className="text-left p-3 font-semibold">Delta</th>
                  </tr>
                </thead>
                <tbody className="text-gray">
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-dark">GPU accelerator</td>
                    <td className="p-3">30&ndash;45 weeks</td>
                    <td className="p-3">30&ndash;40 weeks</td>
                    <td className="p-3">Tightening</td>
                  </tr>
                  <tr className="border-b border-border bg-slate-50">
                    <td className="p-3 font-medium text-dark">CPU</td>
                    <td className="p-3">25&ndash;30 weeks</td>
                    <td className="p-3">16&ndash;20 weeks</td>
                    <td className="p-3 font-semibold text-red-600">+50&ndash;85%</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-dark">Server DRAM (RDIMM)</td>
                    <td className="p-3">19 weeks</td>
                    <td className="p-3">8 weeks</td>
                    <td className="p-3 font-semibold text-red-600">+138%</td>
                  </tr>
                  <tr className="border-b border-border bg-slate-50">
                    <td className="p-3 font-medium text-dark">Enterprise SSD</td>
                    <td className="p-3">16 weeks</td>
                    <td className="p-3">8 weeks</td>
                    <td className="p-3 font-semibold text-red-600">+100%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-dark">Hard disk drive</td>
                    <td className="p-3">50 weeks</td>
                    <td className="p-3">16 weeks</td>
                    <td className="p-3 font-semibold text-red-600">+213%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray leading-relaxed mb-4">
              The pattern matters more than any single row. The slowest item sets the delivery date, and right now the slowest ordinary item is a hard drive at fifty weeks &mdash; longer than a GPU. A rack with accelerators in stock can still sit incomplete for a quarter waiting on memory modules or capacity drives. TrendForce flags <strong>32 GB and 64 GB RDIMMs</strong> as the tightest memory configurations, which is precisely the density range most enterprise inference nodes are specified at.
            </p>
            <p className="text-gray leading-relaxed mb-4">
              The pricing behind those lead times is extraordinary by any historical standard. Counterpoint Research estimates global DRAM revenue rose <strong>369% year on year in Q3 2026 to nearly $200 billion</strong> &mdash; while bit shipments grew only about 4%. Prices that sat at 20&ndash;30 cents per gigabit now run near <strong>$2 per gigabit</strong>, with <strong>HBM4 heading toward $4 per gigabit</strong>. Samsung&apos;s memory average selling price in Q3 2026 was roughly <strong>270% above its 2025 full-year average</strong>, with its memory division running at 100% utilisation; Micron says more than <strong>75% of its fiscal 2027 output is already committed</strong>; and TrendForce forecasts blended HBM average selling prices rising a further <strong>121% in 2027</strong>. New fab capacity capable of relieving the pressure is not expected in volume before late 2027.
            </p>
            <figure className="mt-10">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                <img
                  src="/images/news/gpu-lead-times-dram-pricing-ai-infrastructure-supply-2026-hero.png"
                  alt="Rows of AI server racks in a data centre hall, illustrating GPU server lead times and DRAM memory supply constraints for 2027 ICT procurement"
                  width={1536}
                  height={1024}
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed text-slate-500">
                <strong className="font-semibold text-slate-700">Figure 1 &mdash; Why the rack is late:</strong>{" "}
                in the November 2026 supply picture, a complete AI server is gated by its scarcest line item, not its most expensive one. Hard drives quote at 50 weeks, CPUs at 25&ndash;30 weeks and GPUs at 30&ndash;45 weeks, while 32 GB and 64 GB RDIMMs &mdash; the densities most inference nodes are specified at &mdash; remain the tightest memory configurations. Procurement schedules that track only accelerator allocation therefore understate delivery risk by a full quarter.
              </figcaption>
            </figure>
            <p className="text-gray leading-relaxed mb-4 mt-6">
              For European and North American buyers, the transmission mechanism is already visible in memory&apos;s share of system cost. Across entry-tier devices, memory has moved from roughly a fifth of component cost in mid-2025 toward half in mid-2026, according to Counterpoint&apos;s tracking. Server bills of materials follow the same direction with a lag, which is why a specification agreed in September can arrive in December carrying a materially different price &mdash; and why the practice of honouring quoted prices for a full quarter is quietly disappearing from the AI hardware channel.
            </p>
            <div className="bg-white rounded-xl border border-border p-6 mb-4">
              <h3 className="font-bold text-dark mb-2">What it means for server and memory buyers</h3>
              <p className="text-gray text-sm leading-relaxed">
                Lock the bill of materials, not just the GPU. Ask for <strong>written ship dates per line item</strong> rather than one project date, and treat memory density as a design decision to be frozen early &mdash; late changes to a 64 GB RDIMM configuration now restart the clock on the scarcest component in the build. Maintain one approved alternative per critical line &mdash; a 32 GB instead of 64 GB DIMM, an equivalent SSD family, a different but compatible chassis &mdash; so a supplier can substitute without a change order. Where a project can tolerate it, buy the storage tier separately on a longer horizon and take delivery early; a pallet of drives arriving in March is worth more than a perfect specification arriving in June.
              </p>
            </div>
          </div>

          {/* Section 3: Cisco */}
          <div className="mb-14" id="cisco">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 font-bold text-lg">3</span>
              Cisco&apos;s AI Networking Surge and the Multicloud Fabric Milestone
            </h2>
            <p className="text-gray leading-relaxed mb-4">
              Cisco&apos;s November 12 results deserve a second look because they show where enterprise networking budgets are actually going. Total revenue of $18.5 billion grew 24% year on year; <strong>networking products grew 43% to $11.1 billion</strong>, while security grew 7%, collaboration 8% and observability 2%. Geographically, the Americas grew 28%, EMEA 18% and Asia Pacific, Japan and Greater China 21%. Remaining performance obligations stood at $46.2 billion. The company raised full-year revenue guidance to <strong>$74.8&ndash;75.8 billion</strong> and now expects roughly <strong>$9 billion</strong> of AI infrastructure revenue from hyperscale customers in fiscal 2027 &mdash; more than double the prior year.
            </p>
            <p className="text-gray leading-relaxed mb-4">
              Two details in that release are worth flagging as procurement intelligence rather than financial trivia. First, <strong>GAAP gross margin fell to 63.7% from 65.5%</strong> a year earlier, with product gross margin under the most pressure &mdash; the same memory and component cost wave that hit NVIDIA&apos;s guidance, arriving at a networking vendor. Second, <strong>inventory rose from $5.69 billion to $6.38 billion</strong> sequentially, consistent with pre-positioning ahead of known demand. A vendor building inventory into a constrained component market is a vendor expecting to sell it, which is good news for availability in the first half of 2027 and a warning about allocation in the second.
            </p>
            <p className="text-gray leading-relaxed mb-4">
              On the product side, <strong>Cisco Multicloud Fabric</strong> entered Controlled Availability during the period, having been introduced in June through Cisco Cloud Control. It is a network-as-a-service offering that unifies connectivity, policy and visibility across on-premises data centres, public clouds and edge sites through Cisco-operated virtual points of presence. During this phase, customers can onboard <strong>Meraki MX devices</strong> and connect AWS, Microsoft Azure and Google Cloud environments, with <strong>Zero Trust routing</strong> allowing explicit definition of which sites and clouds may communicate. Security Service Chaining is notably excluded from this milestone and slated for a later release.
            </p>
            <p className="text-gray leading-relaxed mb-4">
              For channel partners the significance is structural. Multicloud networking has been sold for years as a collection of overlapping tools &mdash; one console per cloud, one policy engine per site. A managed fabric with a single operating model changes the shape of the quotation: less hardware at the branch, more subscription and design work, and a recurring revenue line that a project dealer can actually retain after handover. The absence of service chaining in the first release also defines a gap that firewall vendors will be invited to fill, which is worth remembering when assembling a multicloud bill of materials.
            </p>
            <div className="bg-white rounded-xl border border-border p-6 mb-4">
              <h3 className="font-bold text-dark mb-2">What it means for network switch and campus tenders</h3>
              <p className="text-gray text-sm leading-relaxed">
                The 43% growth in networking is not evenly distributed &mdash; it is concentrated in AI-adjacent and campus refresh demand, which is where competition for allocation will be fiercest in 2027. For switch and wireless WiFi AP suppliers serving UK, German and US integrators, the practical move is to <strong>qualify multicloud-adjacent designs now</strong>, before Controlled Availability becomes general availability and the skills premium disappears. Position branch refresh projects as fabric-ready rather than standalone, and price the subscription component explicitly so the customer compares like with like against a hardware-only bid from a competitor.
              </p>
            </div>
          </div>

          {/* Section 4: Security */}
          <div className="mb-14" id="security">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 font-bold text-lg">4</span>
              Security Budgets Move: AI Traffic Inspection and an Unfixable Branch
            </h2>
            <p className="text-gray leading-relaxed mb-4">
              On November 16, <strong>Fortinet and Equinix</strong> announced that <strong>FortiAIGate</strong> is available on the Equinix Distributed AI Hub through a validated reference architecture. The proposition is a security control plane for AI traffic itself: inspecting prompts and responses, applying centralised policy across approved large language model and Model Context Protocol traffic, tracking <strong>per-token AI cost</strong> with spending limits and budget alerts, and keeping inspection inside customer infrastructure to satisfy data residency requirements. Unauthorised AI use &mdash; shadow AI &mdash; is surfaced by FortiGate at the network layer rather than left to endpoint discovery alone. The architecture uses <strong>GPU acceleration, including NVIDIA GPUs, for network-layer inspection</strong> so that security processing does not compete with the AI workload for compute.
            </p>
            <p className="text-gray leading-relaxed mb-4">
              This is a genuinely new budget line rather than a re-branding of an existing one. Until now, an enterprise buying AI infrastructure had two security categories to fund: traditional perimeter and endpoint, and cloud workload protection. FortiAIGate adds a third &mdash; governance of the AI interaction itself, with cost control attached. For firewall distributors, it also changes the conversation from &ldquo;which appliance&rdquo; to &ldquo;which inspection architecture&rdquo;, and that conversation favours partners who can design rather than merely supply.
            </p>
            <p className="text-gray leading-relaxed mb-4">
              The same vendor also delivered a harder-edged reminder of why security refresh cycles exist. Advisory <strong>FG-IR-26-193</strong>, covering <strong>CVE-2026-121528</strong> with a CVSS score of <strong>7.7</strong>, describes improper certificate validation in the FortiOS SSL-VPN web portal that could enable a man-in-the-middle attack between the portal and a backend destination site. It was discovered internally, is not known to be exploited, and has no virtual patch. Fixes shipped in <strong>FortiOS 7.6.5, 7.4.10 and 7.2.14</strong>. Fixed 7.6 releases introduce a <code>remote-https-cert-check</code> setting accepting <code>no-check</code>, <code>warn-on-error</code> and <code>reject-on-error</code>, defaulting to the middle option; administrators wanting a hard stop must set it explicitly.
            </p>
            <p className="text-gray leading-relaxed mb-4">
              The critical detail is what happens to older branches. <strong>FortiOS 7.0 and 6.4 receive no fix at all</strong> &mdash; Fortinet&apos;s only remedy is migration to a supported release. An internet-facing SSL-VPN gateway on an unfixable branch is not a maintenance backlog item; it is a standing exposure in the component most directly reachable from the public internet. And while this advisory is moderate in isolation, it lands in the same month as a critical HA-cluster advisory whose scope was widened on November 16 to cover standard FGCP active-passive and active-active clusters, not only the narrower FGSP and autoscale topologies originally named. Administrators who read the first version and concluded they were out of scope should re-read it.
            </p>
            <div className="bg-white rounded-xl border border-border p-6 mb-4">
              <h3 className="font-bold text-dark mb-2">What it means for firewall and security procurement</h3>
              <p className="text-gray text-sm leading-relaxed">
                End-of-life security hardware is the most reliable replacement opportunity in the channel, and it is being handed to partners on a schedule. Build a <strong>7.0 and 6.4 installed-base list</strong> now &mdash; every gateway on those branches has a documented, unfixable weakness and a migration deadline written by the vendor. Pair the refresh with the AI-governance conversation: an appliance replacement cycle in 2027 is the natural moment to introduce AI traffic inspection, and a customer deploying on-premise AI capacity almost certainly needs it. Sell the lifecycle, not the box.
              </p>
            </div>
          </div>

          {/* Section 5: Regional */}
          <div className="mb-14" id="regional">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 font-bold text-lg">5</span>
              Malaysia&apos;s RM385.7 Billion Pipeline and the 30% Local Content Rule
            </h2>
            <p className="text-gray leading-relaxed mb-4">
              The demand side of this squeeze is not confined to North America. Malaysia has approved <strong>117 data centre projects representing RM385.7 billion</strong> in investment as of October 2026 &mdash; 55 operational, 19 under construction, 16 awaiting construction and 27 at other stages of implementation. Twenty-seven of those sit under the Data Centre Task Force, with estimated investment of <strong>RM225.97 billion</strong>, concentrated in Johor (16 projects, nearly 60% of the total), Selangor (10) and Negeri Sembilan (1). Google separately committed <strong>$15 billion</strong> to Malaysian data centre campuses across 2027&ndash;2028.
            </p>
            <p className="text-gray leading-relaxed mb-4">
              On November 18, Deputy Digital Minister Datuk Wilson Ugak Kumbong told parliament that new projects approved under the task force must meet a <strong>minimum 30% local content requirement</strong>, covering technology provision and services across engineering, maintenance and networks, with the Malaysian Investment Development Authority monitoring compliance through implementation reports submitted every six months. The same programme is projected to create <strong>4,053 jobs, of which 3,523 are skilled positions</strong> spanning electrical and mechanical engineering, networking, cybersecurity and facilities operations.
            </p>
            <p className="text-gray leading-relaxed mb-4">
              A local content rule is a procurement mechanism, and it reshapes who can bid. An overseas contractor that has historically supplied an entire bill of materials from outside the country now needs a documented local component &mdash; whether that is a locally incorporated partner, local engineering and maintenance services, or locally sourced network infrastructure. Partners able to demonstrate local presence, local warehousing and local service content in their bid are advantaged; those treating Malaysia as a drop-ship destination are not. Separately, the National Cyber Security Agency reported <strong>more than 5,000 cyber incidents through September 2026</strong>, against 3,076 in 2024, and explicitly linked the growing attack surface to data centre expansion &mdash; which means security content in these projects will be scrutinised rather than assumed.
            </p>
            <div className="bg-white rounded-xl border border-border p-6 mb-4">
              <h3 className="font-bold text-dark mb-2">What it means for Southeast Asian project bids</h3>
              <p className="text-gray text-sm leading-relaxed">
                For ICT infrastructure suppliers working Malaysia and Indonesia, local content is now a <strong>bid-qualification issue, not a value-add</strong>. Structure quotations so that the local-content portion is identifiable line by line, retain the service and maintenance scope domestically wherever possible, and keep six-monthly implementation reporting in mind when defining deliverables &mdash; compliance evidence is becoming a contractual obligation. For distributors serving these projects, the winning combination in 2027 is straightforward but hard to assemble: confirmed allocation on long-lead networking and server hardware, plus a documented local footprint. That is a supply-chain problem before it is a sales problem.
              </p>
            </div>
          </div>

          {/* Section 6: Playbook */}
          <div className="mb-14" id="playbook">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-600 font-bold text-lg">6</span>
              A Q1 2027 Procurement Playbook
            </h2>
            <p className="text-gray leading-relaxed mb-4">
              Taken together, the past ten days describe a market where demand is confirmed, supply is contracted years forward, and cost is rising through the bill of materials. The following table condenses the actions that matter most by category, written for the integrators, contractors, dealers and retailers who carry the delivery risk.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left p-3 font-semibold">Category</th>
                    <th className="text-left p-3 font-semibold">Primary risk into Q1 2027</th>
                    <th className="text-left p-3 font-semibold">Action this quarter</th>
                  </tr>
                </thead>
                <tbody className="text-gray">
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-dark">GPU servers &amp; AI compute</td>
                    <td className="p-3">30&ndash;45 week GPU, 19 week RDIMM; margin-driven repricing</td>
                    <td className="p-3">Freeze specification, quote with validity window and memory clause, approve alternates</td>
                  </tr>
                  <tr className="border-b border-border bg-slate-50">
                    <td className="p-3 font-medium text-dark">Storage</td>
                    <td className="p-3">50 week HDD, 16 week enterprise SSD</td>
                    <td className="p-3">Order storage ahead of compute; split delivery milestones by line item</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-dark">Network switches &amp; wireless AP</td>
                    <td className="p-3">Allocation competition from AI-adjacent demand</td>
                    <td className="p-3">Book H1 2027 allocation early; qualify fabric-ready and Wi-Fi 7 designs</td>
                  </tr>
                  <tr className="border-b border-border bg-slate-50">
                    <td className="p-3 font-medium text-dark">Firewalls</td>
                    <td className="p-3">Unfixable 7.0 / 6.4 branches; new AI inspection category</td>
                    <td className="p-3">Build EOL installed-base list; attach AI traffic governance to refresh</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3 font-medium text-dark">IP phones &amp; IPPBX</td>
                    <td className="p-3">Lower component exposure, but shipment batching</td>
                    <td className="p-3">Consolidate UC orders with network hardware to reduce freight and staging cost</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-dark">Smart meeting panels</td>
                    <td className="p-3">Panel and SoC allocation; project-handover timing</td>
                    <td className="p-3">Confirm panel allocation before committing room handover dates</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray leading-relaxed mb-4">
              Three cross-cutting rules follow from the reporting above. <strong>Quote in shorter windows.</strong> When the platform vendor guides gross margin down three points in one quarter, no distributor can credibly hold pricing for ninety days. <strong>Sequence by scarcity, not by value.</strong> Ten weeks of contingency belongs on the hard drive line, not the GPU line, because that is where the calendar is lost. And <strong>convert component volatility into service revenue</strong> &mdash; design, staging, configuration, firmware baselining and lifecycle management are the parts of the quotation that do not reprice with DRAM.
            </p>
            <p className="text-gray leading-relaxed mb-4">
              The strategic read is that 2027 will reward supply certainty over price discovery. Vendors are committing capital years ahead to guarantee components; integrators who do the smaller version of the same thing &mdash; reserving allocation, freezing specifications, documenting alternatives &mdash; will win projects on delivery dates that competitors cannot hold. The organisations that lose will be the ones still negotiating on unit price in March for equipment that ships in August.
            </p>
          </div>

          {/* FAQ */}
          <div className="mb-14" id="faq">
            <h2 className="text-2xl lg:text-3xl font-bold text-dark mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-600 font-bold text-lg">7</span>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-bold text-dark mb-2">How long are GPU lead times in November 2026?</h3>
                <p className="text-gray text-sm leading-relaxed">TrendForce moved GPUs from &ldquo;Balanced&rdquo; to &ldquo;Tightening&rdquo; on November 2, 2026, and published a 30&ndash;45 week lead time against a normal-market range of 30&ndash;40 weeks. CPUs quote at 25&ndash;30 weeks, server DRAM at 19 weeks, enterprise SSDs at 16 weeks and hard drives at 50 weeks. Six of the seven components TrendForce tracks are in shortage.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-bold text-dark mb-2">Why is DRAM so expensive in 2026?</h3>
                <p className="text-gray text-sm leading-relaxed">Revenue is being driven by price rather than volume. Counterpoint Research puts Q3 2026 global DRAM revenue up 369% year on year to nearly $200 billion while bit shipments grew only about 4%, with prices rising from 20&ndash;30 cents per gigabit to roughly $2, and HBM4 heading toward $4. Samsung&apos;s memory ASP in Q3 2026 was about 270% above its 2025 average, and TrendForce forecasts blended HBM ASPs up a further 121% in 2027.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-bold text-dark mb-2">What did NVIDIA&apos;s Q3 fiscal 2027 results show?</h3>
                <p className="text-gray text-sm leading-relaxed">Reported November 17, 2026: revenue of $115.8 billion, up 103% year on year; data centre revenue of $107.6 billion, up 110%; GAAP gross margin of 74.8%; GAAP diluted EPS of $2.70; and a fourth-quarter revenue outlook of $130.0 billion plus or minus 3%, excluding China data centre compute. Supply and capacity commitments rose from $279 billion to $390 billion, largely for multi-year memory procurement, and fourth-quarter gross margin is guided to 71&ndash;72%.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-bold text-dark mb-2">Why are older Hopper GPUs renting at higher prices?</h3>
                <p className="text-gray text-sm leading-relaxed">Because token processing prices have fallen nearly 60% since May 2026, more inference workloads are moving into production and absorbing available capacity. NVIDIA&apos;s interim CEO said some Hopper accelerators have been re-signed on multi-year rental contracts at up to twice their original rates, while Blackwell Ultra B300 rental prices are up more than 60% since launch &mdash; a scarcity signal for the current generation.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-bold text-dark mb-2">Which FortiOS releases fix CVE-2026-121528?</h3>
                <p className="text-gray text-sm leading-relaxed">Advisory FG-IR-26-193 fixes the SSL-VPN certificate validation flaw (CVSS 7.7) in FortiOS 7.6.5, 7.4.10 and 7.2.14. FortiOS 7.0 and 6.4 receive no fix and must migrate to a supported release; FortiOS 8.0 is not affected. On 7.6, administrators who want certificate failures to block access must set <code>remote-https-cert-check</code> to <code>reject-on-error</code>, since the default is <code>warn-on-error</code>.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-bold text-dark mb-2">What is FortiAIGate and why does it matter for firewalls?</h3>
                <p className="text-gray text-sm leading-relaxed">FortiAIGate, announced available on the Equinix Distributed AI Hub on November 16, 2026, inspects prompts and responses, enforces policy across approved LLM and Model Context Protocol traffic, tracks per-token AI spend against budgets, and surfaces shadow AI through FortiGate. It uses GPU acceleration, including NVIDIA GPUs, for network-layer inspection. It creates a new security budget category alongside perimeter and workload protection.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-bold text-dark mb-2">What is Malaysia&apos;s 30% local content requirement for data centres?</h3>
                <p className="text-gray text-sm leading-relaxed">Announced in parliament on November 18, 2026, projects approved under Malaysia&apos;s Data Centre Task Force must meet a minimum 30% local content requirement covering technology provision and services in engineering, maintenance and networks. The Malaysian Investment Development Authority monitors compliance via implementation reports submitted every six months. Malaysia had approved 117 data centre projects worth RM385.7 billion as of October 2026.</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-bold text-dark mb-2">Which product categories does JSA Solution supply?</h3>
                <p className="text-gray text-sm leading-relaxed">Servers, network switches, wireless WiFi APs, IP phones, GPUs and AI computing chips, firewalls, IPPBX, routers and smart meeting panels from Cisco, Huawei, HP, Ruckus, Fortinet, Yealink, Grandstream, Fanvil, Ubiquiti, NVIDIA and MikroTik, with consolidated quotations, allocation planning and export documentation for overseas integrators, contractors and distributors.</p>
              </div>
            </div>
          </div>

          {/* Closing CTA */}
          <div className="bg-gradient-to-br from-primary to-deepblue rounded-2xl text-white p-8 lg:p-12 mb-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Sourcing for a 2027 Project on a 2026 Budget?</h2>
            <p className="text-white/85 leading-relaxed mb-6">
              JSA Solution supplies the full ICT stack &mdash; servers, network switches, wireless APs, IP phones, GPUs and AI computing chips, firewalls, IPPBX, routers and smart meeting panels &mdash; from Cisco, Huawei, HP, Ruckus, Fortinet, Yealink, Grandstream, Fanvil, Ubiquiti, NVIDIA and MikroTik, with consolidated quotations, allocation planning and export-ready documentation for projects across Europe, the Americas, Southeast Asia, the Middle East and Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-colors"
              >
                Request a Quote
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/40 text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                Browse Products
              </Link>
            </div>
          </div>

          {/* Sources */}
          <div className="bg-slate-50 rounded-xl border border-border p-6 mb-8">
            <h3 className="font-bold text-dark mb-3 text-sm">Sources &amp; References:</h3>
            <ul className="space-y-1 text-xs text-gray/70">
              <li>&bull; NVIDIA Newsroom: &ldquo;NVIDIA Announces Financial Results for Third Quarter Fiscal 2027&rdquo; &mdash; $115.8B revenue, $107.6B data centre, 74.8% GAAP gross margin, $130.0B Q4 outlook (November 17, 2026)</li>
              <li>&bull; NVIDIA SEC filing, Q3 FY2027 &mdash; supply and capacity commitments $279B to $390B, $102B cloud service agreements and lease commitments</li>
              <li>&bull; TrendForce Weekly Radar 008 &mdash; GPU status moved to &ldquo;Tightening&rdquo;, six of seven components in shortage, lead-time comparison (November 2, 2026), as reported by FourWeekMBA and ASCII.jp</li>
              <li>&bull; Counterpoint Research via StockMoguls: Q3 2026 DRAM revenue +369% YoY to ~$200B, bit shipments +4%, price per gigabit trajectory, HBM4 pricing (November 15, 2026)</li>
              <li>&bull; TrendForce 2027 blended HBM ASP forecast +121% YoY; Samsung Q3 2026 disclosure (DART) memory ASP +270% versus 2025 average; Micron FY2027 output &gt;75% committed</li>
              <li>&bull; Cisco Newsroom: &ldquo;Cisco Reports First Quarter Earnings&rdquo; &mdash; $18.5B revenue, networking +43%, $9B FY2027 AI infrastructure revenue expectation (November 12, 2026)</li>
              <li>&bull; Cisco Multicloud Fabric Controlled Availability &mdash; Meraki MX onboarding, AWS/Azure/Google Cloud support, Zero Trust routing, vPoP architecture (November 2026)</li>
              <li>&bull; Fortinet and Equinix: FortiAIGate on Equinix Distributed AI Hub reference architecture (November 16, 2026); Fortinet PSIRT FG-IR-26-193 / CVE-2026-121528 (revised November 12, 2026) and FG-IR-26-273 scope update (November 16, 2026)</li>
              <li>&bull; Parliament of Malaysia, Dewan Rakyat &mdash; Deputy Digital Minister Datuk Wilson Ugak Kumbong on DCTF local content and project counts (November 18, 2026); NACSA incident statistics (November 17, 2026)</li>
            </ul>
          </div>

          {/* Back Link */}
          <div className="text-center">
            <Link
              href="/events-news"
              className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Back to Events &amp; News
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data - Article */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline:
              "45-Week GPU Lead Times, Quadrupled DRAM, and a $390 Billion Supply Bet: November 20, 2026 Enterprise ICT Briefing",
            description:
              "NVIDIA commits $390 billion to secure components and guides gross margin down three points, TrendForce measures 45-week GPU and 50-week HDD lead times, Cisco doubles AI infrastructure revenue expectations, Fortinet moves AI traffic inspection onto Equinix, and Malaysia attaches a 30% local content rule to a RM385.7 billion data centre pipeline.",
            datePublished: "2026-11-20",
            dateModified: "2026-11-20",
            author: {
              "@type": "Organization",
              name: "JSA Solution Editorial Team",
              url: "https://jsasolution.com/",
            },
            publisher: {
              "@type": "Organization",
              name: "JSA Solution (Shenzhen Jie&apos;an Technology Co., Ltd.)",
              url: "https://jsasolution.com/",
              logo: {
                "@type": "ImageObject",
                url: "https://jsasolution.com/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://jsasolution.com/events-news/gpu-lead-times-dram-pricing-ai-infrastructure-supply-2026",
            },
            image: [
              "https://jsasolution.com/images/news/gpu-lead-times-dram-pricing-ai-infrastructure-supply-2026-hero.png",
            ],
            about: [
              { "@type": "Thing", name: "AI Infrastructure" },
              { "@type": "Thing", name: "GPU Supply Chain" },
              { "@type": "Thing", name: "Server Memory" },
              { "@type": "Thing", name: "Network Security" },
              { "@type": "Thing", name: "Data Centre Investment" },
            ],
            keywords:
              "GPU lead times 2026, DRAM price increase, NVIDIA supply commitments, Cisco Multicloud Fabric, FortiAIGate, GPU server distributor Europe, AI server supplier Germany, network switch supplier UK, ICT infrastructure supplier Malaysia, firewall distributor South Africa",
          }),
        }}
      />
      {/* JSON-LD Structured Data - FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long are GPU lead times in November 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TrendForce moved GPUs from Balanced to Tightening on November 2, 2026, and published a 30-45 week lead time against a normal-market range of 30-40 weeks. CPUs quote at 25-30 weeks, server DRAM at 19 weeks, enterprise SSDs at 16 weeks and hard drives at 50 weeks. Six of the seven components TrendForce tracks are in shortage.",
                },
              },
              {
                "@type": "Question",
                name: "Why is DRAM so expensive in 2026?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Revenue is being driven by price rather than volume. Counterpoint Research puts Q3 2026 global DRAM revenue up 369% year on year to nearly $200 billion while bit shipments grew only about 4%, with prices rising from 20-30 cents per gigabit to roughly $2, and HBM4 heading toward $4. Samsung's memory ASP in Q3 2026 was about 270% above its 2025 average, and TrendForce forecasts blended HBM ASPs up a further 121% in 2027.",
                },
              },
              {
                "@type": "Question",
                name: "What did NVIDIA's Q3 fiscal 2027 results show?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Reported November 17, 2026: revenue of $115.8 billion, up 103% year on year; data centre revenue of $107.6 billion, up 110%; GAAP gross margin of 74.8%; GAAP diluted EPS of $2.70; and a fourth-quarter revenue outlook of $130.0 billion plus or minus 3%, excluding China data centre compute. Supply and capacity commitments rose from $279 billion to $390 billion, largely for multi-year memory procurement, and fourth-quarter gross margin is guided to 71-72%.",
                },
              },
              {
                "@type": "Question",
                name: "Why are older Hopper GPUs renting at higher prices?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Because token processing prices have fallen nearly 60% since May 2026, more inference workloads are moving into production and absorbing available capacity. NVIDIA's interim CEO said some Hopper accelerators have been re-signed on multi-year rental contracts at up to twice their original rates, while Blackwell Ultra B300 rental prices are up more than 60% since launch - a scarcity signal for the current generation.",
                },
              },
              {
                "@type": "Question",
                name: "Which FortiOS releases fix CVE-2026-121528?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Advisory FG-IR-26-193 fixes the SSL-VPN certificate validation flaw (CVSS 7.7) in FortiOS 7.6.5, 7.4.10 and 7.2.14. FortiOS 7.0 and 6.4 receive no fix and must migrate to a supported release; FortiOS 8.0 is not affected. On 7.6, administrators who want certificate failures to block access must set remote-https-cert-check to reject-on-error, since the default is warn-on-error.",
                },
              },
              {
                "@type": "Question",
                name: "What is FortiAIGate and why does it matter for firewalls?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "FortiAIGate, announced available on the Equinix Distributed AI Hub on November 16, 2026, inspects prompts and responses, enforces policy across approved LLM and Model Context Protocol traffic, tracks per-token AI spend against budgets, and surfaces shadow AI through FortiGate. It uses GPU acceleration, including NVIDIA GPUs, for network-layer inspection. It creates a new security budget category alongside perimeter and workload protection.",
                },
              },
              {
                "@type": "Question",
                name: "What is Malaysia's 30% local content requirement for data centres?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Announced in parliament on November 18, 2026, projects approved under Malaysia's Data Centre Task Force must meet a minimum 30% local content requirement covering technology provision and services in engineering, maintenance and networks. The Malaysian Investment Development Authority monitors compliance via implementation reports submitted every six months. Malaysia had approved 117 data centre projects worth RM385.7 billion as of October 2026.",
                },
              },
              {
                "@type": "Question",
                name: "Which product categories does JSA Solution supply?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Servers, network switches, wireless WiFi APs, IP phones, GPUs and AI computing chips, firewalls, IPPBX, routers and smart meeting panels from Cisco, Huawei, HP, Ruckus, Fortinet, Yealink, Grandstream, Fanvil, Ubiquiti, NVIDIA and MikroTik, with consolidated quotations, allocation planning and export documentation for overseas integrators, contractors and distributors.",
                },
              },
            ],
          }),
        }}
      />
      {/* JSON-LD Structured Data - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://jsasolution.com/" },
              { "@type": "ListItem", position: 2, name: "Events & News", item: "https://jsasolution.com/events-news" },
              {
                "@type": "ListItem",
                position: 3,
                name: "November 20, 2026 Enterprise ICT Briefing",
                item: "https://jsasolution.com/events-news/gpu-lead-times-dram-pricing-ai-infrastructure-supply-2026",
              },
            ],
          }),
        }}
      />
    </article>
  );
}

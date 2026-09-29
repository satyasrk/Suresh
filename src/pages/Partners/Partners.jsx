import { Link } from 'react-router-dom'
import './Partners.css'

const PARTNERS = [
  {
    name: 'Amazon',
    icon: 'inventory_2',
    iconColor: 'text-brand-navy',
    box: 'bg-amber-50 border-amber-200',
    badge: 'Fulfilment',
    badgeColor: 'bg-amber-50 border-amber-200 text-brand-navy',
    hover: 'hover:border-partners-gold/80',
    text: 'Middle-mile clearance & high-volume prime same-day doorstep parcel fulfillment across key UAE sectors.',
  },
  {
    name: 'Porter',
    icon: 'local_shipping',
    iconColor: 'text-partners-blue',
    box: 'bg-blue-50 border-blue-200',
    badge: 'Logistics',
    badgeColor: 'bg-blue-50 border-blue-200 text-partners-blue',
    hover: 'hover:border-partners-blue/60',
    text: 'On-demand intra-city logistics, commercial van freight movement, and scheduled retail transport runs.',
  },
  {
    name: 'Noon',
    icon: 'shopping_cart',
    iconColor: 'text-brand-navy',
    box: 'bg-amber-50 border-amber-200',
    badge: 'Quick-Commerce',
    badgeColor: 'bg-amber-50 border-amber-200 text-brand-navy',
    hover: 'hover:border-partners-gold/80',
    text: 'Dedicated rapid-dispatch motorcycle fleet powering hyper-local Noon Minutes and e-commerce distribution.',
  },
  {
    name: 'Careem',
    icon: 'two_wheeler',
    iconColor: 'text-emerald-600',
    box: 'bg-emerald-50 border-emerald-200',
    badge: 'Dark-Store',
    badgeColor: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    hover: 'hover:border-emerald-400',
    text: 'Full captain fleet roster support and dark-store replenishment for Careem Quik and grocery express lanes.',
  },
  {
    name: 'Deliveroo',
    icon: 'restaurant',
    iconColor: 'text-teal-600',
    box: 'bg-teal-50 border-teal-200',
    badge: 'Food Delivery',
    badgeColor: 'bg-teal-50 border-teal-200 text-teal-700',
    hover: 'hover:border-teal-400',
    text: 'Peak-hour food dispatch buffers, temperature-monitored bag handling, and high-frequency restaurant logistics.',
  },
  {
    name: 'Talabat',
    icon: 'takeout_dining',
    iconColor: 'text-orange-600',
    box: 'bg-orange-50 border-orange-200',
    badge: 'Aggregator',
    badgeColor: 'bg-orange-50 border-orange-200 text-orange-700',
    hover: 'hover:border-orange-400',
    text: 'Sustained food & Talabat Mart deliveries with trained riders adhering strictly to road safety and delivery SLAs.',
  },
  {
    name: 'InstaShop',
    icon: 'shopping_bag',
    iconColor: 'text-rose-600',
    box: 'bg-rose-50 border-rose-200',
    badge: 'Grocery On-Demand',
    badgeColor: 'bg-rose-50 border-rose-200 text-rose-700',
    hover: 'hover:border-rose-400',
    text: 'Immediate-dispatch neighborhood supermarket, pharmacy, and butcher shop orders delivered straight to customer doorsteps.',
  },
  {
    name: 'Keeta',
    icon: 'bolt',
    iconColor: 'text-brand-navy',
    box: 'bg-amber-50 border-amber-200',
    badge: 'Rapid Fleet',
    badgeColor: 'bg-amber-50 border-amber-200 text-brand-navy',
    hover: 'hover:border-partners-gold/80',
    text: 'Elastic expansion capacity deploying vetted motorcycle riders across rapidly emerging delivery sectors.',
  },
]

const CAPABILITIES = [
  { icon: 'stacked_line_chart', title: '1. High-Volume Deliveries', text: 'Engineered to absorb thousands of daily orders seamlessly during peak trading windows without system latency.' },
  { icon: 'timer', title: '2. Time-Sensitive Orders', text: 'Sub-30 minute and 15-minute express quick-commerce delivery dispatch adhering strictly to aggressive platform SLAs.' },
  { icon: 'alt_route', title: '3. Route-Based Delivery Operations', text: 'Dynamic and fixed clustering across UAE residential towers, commercial free zones, and high-density districts.' },
  { icon: 'doorbell', title: '4. Customer Doorstep Delivery', text: 'Professional, uniformed riders executing OTP verifications, frictionless handover, and courteous customer interactions.' },
  { icon: 'shopping_cart', title: '5. E-Commerce Deliveries', text: 'Reliable parcel sorting, same-day delivery windows, and automated digital proof of delivery for online retailers.' },
  { icon: 'lunch_dining', title: '6. Food and Grocery Deliveries', text: 'Thermal-controlled gear, hygienic handling, and spill-prevention setups compliant with Dubai Municipality rules.' },
  { icon: 'trending_up', title: '7. Peak-Period Delivery Demand', text: 'Rapidly buffering seasonal surges including White Friday, Ramadan rushes, Eid promotions, and holiday weekends.' },
  { icon: 'moped', title: '8. Fleet Deployment', text: 'Dedicated motorcycles and vans assigned exclusively with maintenance redundancy and standby backup units.' },
  { icon: 'distance', title: '9. Last-Mile Logistics', text: 'Precision end-mile route execution connecting central fulfillment hubs directly to residential doorsteps across 7 Emirates.' },
]

export default function Partners() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 partners-hero text-white border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-partners-blue/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-partners-gold/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 mb-6 text-xs font-mono text-slate-300 uppercase tracking-wider" aria-label="Breadcrumb">
            <Link className="hover:text-partners-gold transition-colors" to="/">HOME</Link>
            <span>/</span>
            <span className="text-partners-gold font-bold">PARTNERS</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-partners-gold/30 mb-5">
                <span className="w-2 h-2 rounded-full bg-partners-gold animate-pulse"></span>
                <span className="text-partners-gold font-mono text-xs uppercase tracking-widest font-bold">• OUR PARTNERS</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-headline text-white tracking-tight leading-tight mb-5">
                OUR PARTNERS <span className="text-partners-gold">— Trusted by Leading Platforms</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-2xl">
                Our delivery capabilities have enabled us to establish partnerships and work with some of the UAE's leading e-commerce, delivery, retail, and technology
                platforms.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  className="inline-flex items-center gap-2 bg-partners-gold hover:bg-partners-goldLight text-partners-navy font-bold px-6 py-3.5 rounded-full text-xs font-mono tracking-wider shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
                  href="#partner-form"
                >
                  <span className="material-symbols-outlined text-base" aria-hidden="true">handshake</span>
                  <span>Partner With Us</span>
                </a>
                <Link
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-3.5 rounded-full text-xs font-mono tracking-wider transition-all"
                  to="/fleet"
                >
                  <span className="material-symbols-outlined text-base" aria-hidden="true">local_shipping</span>
                  <span>Fleet Operations</span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 sm:p-8 shadow-xl relative">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">Operational Reliability Index</span>
                  <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-partners-gold uppercase">
                    <span className="w-2 h-2 rounded-full bg-partners-gold animate-pulse"></span> Active Fleets
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-partners-dark/70 rounded-2xl p-4 border border-white/10">
                    <div className="font-headline text-2xl sm:text-3xl font-bold text-partners-gold">8+</div>
                    <div className="text-xs text-slate-300 mt-1">Tier-1 Platforms</div>
                  </div>
                  <div className="bg-partners-dark/70 rounded-2xl p-4 border border-white/10">
                    <div className="font-headline text-2xl sm:text-3xl font-bold text-white">99.8%</div>
                    <div className="text-xs text-slate-300 mt-1">On-Time SLA</div>
                  </div>
                  <div className="bg-partners-dark/70 rounded-2xl p-4 border border-white/10">
                    <div className="font-headline text-2xl sm:text-3xl font-bold text-white">200+</div>
                    <div className="text-xs text-slate-300 mt-1">Owned Vehicles</div>
                  </div>
                  <div className="bg-partners-dark/70 rounded-2xl p-4 border border-white/10">
                    <div className="font-headline text-2xl sm:text-3xl font-bold text-partners-gold">7/7</div>
                    <div className="text-xs text-slate-300 mt-1">Emirates Coverage</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-partners-gold/20 flex items-center justify-center text-partners-gold shrink-0">
                    <span className="material-symbols-outlined text-xl" aria-hidden="true">verified</span>
                  </div>
                  <div className="text-xs text-slate-200 leading-snug">
                    <span className="font-bold text-white">Full Fleet Readiness:</span> 24/7 dedicated control desks supporting all leading UAE delivery networks.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Official Partner Showcase */}
      <section className="py-16 md:py-24 bg-white" id="partner-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="text-xs font-bold font-mono tracking-widest text-partners-blue uppercase mb-2">Enterprise Alliances</div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-headline text-partners-navy tracking-tight">Our Partners Include:</h2>
          </div>
          {/* 8 Partner Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className={`bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group ${partner.hover}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${partner.box} ${partner.iconColor}`}>
                      <span className="material-symbols-outlined text-2xl partner-icon-filled" aria-hidden="true">
                        {partner.icon}
                      </span>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full border font-mono text-[10px] font-bold uppercase tracking-wider ${partner.badgeColor}`}>
                      {partner.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-headline text-partners-navy mb-2 group-hover:text-partners-blue transition-colors">{partner.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{partner.text}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Verbatim Quote Container */}
          <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-partners-gold/20 flex items-center justify-center shrink-0 text-partners-navy">
                <span className="material-symbols-outlined text-2xl partner-icon-filled" aria-hidden="true">format_quote</span>
              </div>
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed italic">
                "Our partnerships reflect our ability to operate within fast-moving delivery environments where reliability, scalability, operational discipline, and
                customer service are essential."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Operational Capabilities */}
      <section className="py-16 md:py-24 partners-capabilities text-white relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-partners-blue/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-partners-gold/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-partners-gold font-mono text-xs uppercase tracking-widest font-bold mb-3">Operational Capabilities</div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-headline text-white tracking-tight mb-4">Built for High-Volume Delivery Operations</h2>
            <p className="text-base text-slate-300">Our experience includes supporting operational requirements such as:</p>
          </div>
          {/* 9 Operational Capabilities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAPABILITIES.map((capability) => (
              <div key={capability.title} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-partners-gold/60 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-partners-gold mb-4">
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">{capability.icon}</span>
                </div>
                <h3 className="text-lg font-bold font-headline text-white mb-2">{capability.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{capability.text}</p>
              </div>
            ))}
          </div>
          {/* Concluding Note Banner */}
          <div className="mt-12 text-center max-w-3xl mx-auto p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <p className="text-base sm:text-lg text-white font-medium">
              We understand the operational expectations that come with working alongside leading delivery and technology platforms.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

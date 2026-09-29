import { Link } from 'react-router-dom'
import './Fleet.css'

const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAnR-w0i8eRqsnuZwswP5meo7Keonw9mqTe2QXx84aXT0Cs3k-wIsjmi--4SViQcCVgMsuYt8ewLMFeid-waPmzLnGmpEpHi9Pi8BL9P1tvBKMmRXgNoTQN6dQnERAlGQLsgLu7I-mCZnOiEYsa9hV4ZQ9XOQdchFtf3wE4P1naitGw8T-l-Q-XnfGCl-iuj9YnPEZmrLzZzX3TwiyKdukPbtVkYriC1rGue6l60NhHIAgH-Z_vdwU'
const GARAGE_WORKSHOP_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDpgLNioiTMrrdO8RVY3V7NWITNwvsyXY0jGuDjbRmKLN4somMcCMapQ9L1xW9wG5DRLv1IuWmXgedqlpXxFBEZvWYPmpfgF_jMlqp0Sou9d7oId-YTWZ_TmvbR2vdX7EKaVCWcNx-lK3RVpBa9MNxe2AQNC4ydpZynfc4r_mN7fVFWIE-brSk4_0CX3-q1uPAmxvNbn1WJkF8jQTXJxcsBRe3ys9ZdmKJvWmw51lQws2cHftlyVQw'
const SKYLINE_GLOW_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCoEYMYna1KvJyWVfYaDanLyuQ53jatjNKUccDHCHwNyNE7JVcAk69W8NywS8ZS2m8ZqqoVI3024_GVGIvgfViScJWeutd-aQ3D9Z2S8yPvRTHVXlBN9uduY1CMVl9ENvLjT0c06JGxPHMXnpnjCPSWUyFWdScaj52VDJ1QcSfL0CkbEeVzv89RToLfxfoXVt2I22ivQmsHEpYa_XPcoeswRMWW98cwK7xRlTHAnq44xOa5g9mJxBI'

const STATS = [
  { icon: 'two_wheeler', value: '200+', label: 'Owned Vehicles', footer: 'Fleet Capacity' },
  { icon: 'verified', value: '100%', label: 'Fleet Availability Control', footer: 'Operational Governance' },
  { icon: 'schedule', value: '24/7', label: 'Operational Readiness', footer: 'Continuous Deployment' },
  { icon: 'published_with_changes', value: 'Zero', label: 'Unnecessary Downtime', footer: 'In-House Maintenance' },
]

const FOCUS_AREAS = [
  { icon: 'check_box', num: '01', title: 'Vehicle availability', note: 'Ready for immediate dispatch' },
  { icon: 'build_circle', num: '02', title: 'Preventive maintenance', note: 'Scheduled health routines' },
  { icon: 'published_with_changes', num: '03', title: 'Operational readiness', note: 'Continuous road readiness' },
  { icon: 'monitoring', num: '04', title: 'Vehicle utilization', note: 'Balanced route capacity' },
  { icon: 'hub', num: '05', title: 'Maintenance coordination', note: 'Direct in-house garage link' },
  { icon: 'person_pin_circle', num: '06', title: 'Driver & rider deployment', note: 'Optimized zone allocation' },
  { icon: 'speed', num: '07', title: 'Operational efficiency', note: 'Fast delivery turnaround' },
  { icon: 'alarm_off', num: '08', title: 'Minimizing downtime', note: 'Seamless backup standby' },
]

export default function Fleet() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative fleet-hero py-14 md:py-20 overflow-hidden text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 mb-6 font-mono" aria-label="Breadcrumb">
            <Link className="hover:text-fleet-gold transition-colors" to="/">HOME</Link>
            <span className="text-slate-400">/</span>
            <span className="text-fleet-gold">OUR FLEET</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full bg-fleet-gold/15 border border-fleet-gold/40 text-fleet-gold text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-fleet-gold animate-pulse"></span>
                • FLEET CAPABILITY
              </div>
              {/* Main Heading */}
              <div className="flex flex-col gap-2">
                <span className="text-sm font-black uppercase tracking-[0.2em] text-fleet-gold">OUR FLEET</span>
                <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight uppercase leading-[1.15]">
                  <span className="text-fleet-gold">200+ OWNED VEHICLES.</span>
                  <br />
                  BUILT FOR THE LAST MILE.
                </h1>
              </div>
              {/* Lead Copy Verbatim */}
              <div className="text-slate-200 text-base sm:text-lg leading-relaxed space-y-3 font-normal max-w-2xl">
                <p>Our fleet is one of Ultra Miles' key operational strengths.</p>
                <p>
                  With 200+ owned vehicles, we have developed significant delivery capacity to support high-volume and time-sensitive operations.
                </p>
                <p>Fleet ownership provides us with greater control over vehicle availability, maintenance, deployment, and operational planning.</p>
                <p className="text-slate-300 text-sm sm:text-base">
                  Our vehicles are deployed across different delivery requirements based on operational needs, route requirements, order volumes, and customer
                  expectations.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-fleet-gold hover:bg-fleet-gold-hover text-fleet-navy font-bold text-sm transition-all shadow-lg shadow-fleet-gold/25 active:scale-95"
                  href="#garage"
                >
                  <span>Explore In-House Garage</span>
                  <span className="material-symbols-outlined text-sm font-bold" aria-hidden="true">arrow_downward</span>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm hover:border-fleet-gold hover:text-fleet-gold transition-all"
                  href="#fleet-management"
                >
                  <span className="material-symbols-outlined text-base text-fleet-gold" aria-hidden="true">alt_route</span>
                  <span>Fleet Management</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-slate-900/80 shadow-2xl p-2.5">
                <img
                  alt="Commercial delivery motorcycles in modern Dubai garage facility"
                  className="w-full h-80 md:h-[420px] object-cover rounded-xl"
                  src={HERO_IMG}
                />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-fleet-navy-deep/95 backdrop-blur-md border border-white/20 flex items-center justify-between text-white shadow-lg">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-slate-300">Fleet Operations</p>
                    <p className="text-xl sm:text-2xl font-black text-fleet-gold">200+ Owned Vehicles</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-fleet-gold text-fleet-navy text-[11px] font-black uppercase tracking-wider">Active Units</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Banner Strip */}
      <section className="border-b border-slate-200 bg-white py-10" data-purpose="metrics-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between hover:shadow-md hover:border-fleet-gold/60 transition-all">
                <div className="mb-3 text-fleet-navy">
                  <span className="material-symbols-outlined text-3xl" aria-hidden="true">{stat.icon}</span>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-fleet-navy tracking-tight">{stat.value}</div>
                  <p className="text-base text-slate-700 font-bold mt-1">{stat.label}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-bold tracking-wider text-fleet-navy uppercase">{stat.footer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - OUR OWN GARAGE */}
      <section className="py-16 lg:py-24 fleet-garage text-white border-y border-fleet-navy-dark" id="garage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full bg-fleet-gold/15 border border-fleet-gold/30 text-fleet-gold text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-fleet-gold"></span>
                • IN-HOUSE INFRASTRUCTURE
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-fleet-gold block mb-1">OUR OWN GARAGE</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase leading-tight">Keeping Our Fleet Moving</h2>
              </div>
              {/* Text Verbatim */}
              <div className="text-slate-200 text-base sm:text-lg leading-relaxed space-y-4">
                <p>A reliable delivery operation starts with reliable vehicles.</p>
                <p>Our own garage supports the maintenance and operational readiness of our fleet.</p>
                <p>
                  Having dedicated garage facilities allows us to monitor vehicle condition, carry out required maintenance, address operational issues, and minimize
                  unnecessary vehicle downtime.
                </p>
                <p>This gives Ultra Miles greater control over fleet availability and helps us maintain continuity across our delivery operations.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-1 text-fleet-gold font-bold text-sm uppercase">
                    <span className="material-symbols-outlined text-base" aria-hidden="true">build</span>
                    Dedicated Facility
                  </div>
                  <p className="text-xs text-slate-300">Continuous in-house mechanical inspections &amp; servicing.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2 mb-1 text-fleet-gold font-bold text-sm uppercase">
                    <span className="material-symbols-outlined text-base" aria-hidden="true">timelapse</span>
                    Active Uptime
                  </div>
                  <p className="text-xs text-slate-300">Prompt turnaround ensuring zero operational interruptions.</p>
                </div>
              </div>
            </div>
            {/* Garage Visual Image */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border border-white/20 bg-slate-900 shadow-2xl">
                <img alt="Commercial delivery motorcycles garage workshop in Dubai" className="w-full h-[440px] object-cover" src={GARAGE_WORKSHOP_IMG} />
              </div>
              <div className="absolute -bottom-5 sm:-left-6 left-4 right-4 sm:right-auto flex items-center gap-3.5 p-4 rounded-2xl bg-fleet-navy border border-fleet-gold/40 shadow-xl">
                <div className="w-12 h-12 rounded-full bg-fleet-gold text-fleet-navy flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-2xl font-bold" aria-hidden="true">home_repair_service</span>
                </div>
                <div>
                  <div className="font-bold text-white text-sm sm:text-base">Ultra Miles Dedicated Garage</div>
                  <p className="text-xs text-fleet-gold font-medium">In-House Maintenance &amp; Fleet Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - FLEET MANAGEMENT */}
      <section className="py-16 lg:py-24 bg-[#F9F9F9]" id="fleet-management">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full bg-fleet-gold/15 border border-fleet-gold/30 text-fleet-navy text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-fleet-navy"></span>
              • STRUCTURED OPERATIONS
            </div>
            <span className="text-xs uppercase font-bold tracking-widest text-fleet-navy block mb-1">FLEET MANAGEMENT</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-fleet-navy tracking-tight">Our approach to fleet management focuses on:</h2>
          </div>
          {/* 8 Focus Area Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOCUS_AREAS.map((area) => (
              <div key={area.num} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-fleet-gold hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-fleet-navy/5 text-fleet-navy flex items-center justify-center mb-4 group-hover:bg-fleet-gold group-hover:text-fleet-navy transition-colors">
                    <span className="material-symbols-outlined text-2xl" aria-hidden="true">{area.icon}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-fleet-navy/60 uppercase">{area.num}</span>
                  <h3 className="text-lg font-bold text-fleet-navy mt-1">{area.title}</h3>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-fleet-gold"></span>
                  {area.note}
                </div>
              </div>
            ))}
          </div>
          {/* Highlight Banner / Tagline */}
          <div className="mt-14 p-8 sm:p-10 rounded-2xl bg-white border-2 border-fleet-gold/30 shadow-md text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="w-12 h-12 rounded-full bg-fleet-gold text-fleet-navy flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl font-bold" aria-hidden="true">stars</span>
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-fleet-navy tracking-tight">
              More vehicles. <span className="text-fleet-gold">More control.</span> More delivery capacity.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Partnership CTA Banner */}
      <section className="py-14 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden fleet-cta py-12 px-6 sm:px-12 md:px-16 text-white shadow-2xl">
            {/* Subtle Dubai Skyline Background Glow */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
              <img alt="Skyline Glow" className="w-full h-full object-cover" src={SKYLINE_GLOW_IMG} />
            </div>
            <div className="relative z-10 max-w-3xl">
              <span className="text-xs uppercase font-bold tracking-widest text-fleet-gold block mb-2 font-mono">Scale Your Delivery Logistics</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase leading-tight mb-4">Ready to Deploy Our Fleet for Your Business?</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Partner with Dubai's most dependable fleet. Whether you need a dedicated corporate fleet of 5 or 50+ delivery bikes with rider management and automated
                garage maintenance, Ultra Miles provides turnkey logistics contracts.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-fleet-gold hover:bg-fleet-gold-hover text-fleet-navy text-sm font-bold shadow-lg shadow-fleet-gold/25 transition-all active:scale-95"
                  href="tel:+971547788501"
                >
                  <span className="material-symbols-outlined text-base" aria-hidden="true">call</span>
                  <span>+971 54 778 8501</span>
                </a>
                <Link
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/60 hover:border-white text-white font-semibold text-sm transition-all hover:bg-white/10"
                  to="/contact-us"
                >
                  <span>Request Fleet Proposal</span>
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import './About.css'

const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBZlDTg2A8uyYHk9AP-Byz-IoMzvx5zxPhsN4O9LAxVDc5_9hN-qvVqMQc6eBmX3hnGO3i-qX5VwBliaW64RzKoQ0waIAFv25dwWBpLv5bt1jzF-HppZtkComc9c2EaPJHek3j__EU8J-DUdqR3Kp-lSXmImmhTXRpTrwmJyBfKgUDh905u8XGYO8_nlobjcCeDQmiG3fGGgsdxUTaVaFhBC44UTeVciqFDDr70W7SRgKBBTvO_rh8'
const DISPATCH_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAKjY_A0GCK2mgW2ycDWppiNrgmVnrMBu7lgGCoXfm8uPnLgTdxxCGYhBdeHfUqeiRsX-hYH61qdwbU3wiUnwePp-rRFpzum7EnAl_lDeF5gPMDNS6Nf_PlGofCn0DGVJppDir2ASp8Z1iN8C_f8PGp44QoGStnKQFvFzm3DP6Ab6Fb0Ew6wpJAA6-NfY7ZSfGtHQfxpDsfHgAn0nTUkWxo_7abrdZTydvh4uY1LvkYTZyQpht-FZg'
const FLEET_STAGING_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB_HvNTKgZixk2glKsKGgzaB454jKGkFF4E0HBqoq9tK_yyeQVQHJsz-VlJIpHv81KXThBs4ynL2e7W94msNFRyDy9tm47Gc-JOJ0ZS1PxDjDhzMLY-i8K-5L6PDXurZq-rWFhQsJaZdZr7O6IQtW-fMxHOVbE6E9oirFLGeymPoaa6pUy-rqvX_1OqtdNKFNQH52ZQDQljpPnjLmNr3hVlPLG5xRkkbqb-8w2qDKmjZTaQ7Emd4H0'
const GARAGE_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAxX3jtOMk6MiONObkdnW0sE3rbxAMdnix2t6ig9GU8rbwfXGFU6L3deoT7_Nd4CRpF7cSWQVSE922uwg3SWgzirpMubaAkTEWStOtKJiY2gPs9Ak9uZrVX8uEFF2rtonGNIFfY7c-ecfnJY8cOm5pk21vzysToEv3RscRJBWvWQk2tiwJDPN1vECftG87Z6uTm5TW6JN3sfQno0nQxX13zRsASsU5J_A4jqB4YHn5OUmDyXPhaKG8'
const SKYLINE_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDhLhthcpj6iGE3cFTDxP4xfnF4SVSZFVSxWYz856rkuRbbVCrTou3QRcJ695P-hzGDu5uPMcYSrXO2bSQ0hhH2LaiFacJnFpEUPVDgU9eKkPE-s9R19rIax74Hu1BewYNnBasRKzBnv26QgxgaKwGNwQfMkUt5f3qxHnm8Chm3fjJ-x22H_lZp_IFYG1QMBgjte594oQlI0QbhBXklnKSxKJ9LpmujzikS5kLf2qtosxz-Ckn5a40'
const SKYLINE_GLOW_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCoEYMYna1KvJyWVfYaDanLyuQ53jatjNKUccDHCHwNyNE7JVcAk69W8NywS8ZS2m8ZqqoVI3024_GVGIvgfViScJWeutd-aQ3D9Z2S8yPvRTHVXlBN9uduY1CMVl9ENvLjT0c06JGxPHMXnpnjCPSWUyFWdScaj52VDJ1QcSfL0CkbEeVzv89RToLfxfoXVt2I22ivQmsHEpYa_XPcoeswRMWW98cwK7xRlTHAnq44xOa5g9mJxBI'

const APPROACH_PILLARS = [
  { icon: 'groups', title: 'People', text: 'Our delivery operations are supported by dedicated and experienced teams who understand the importance of professionalism and customer service.' },
  { icon: 'two_wheeler', title: 'Fleet', text: 'Our 200+ owned vehicles provide the capacity and flexibility required to support large-scale delivery operations.' },
  { icon: 'home_repair_service', title: 'Infrastructure', text: 'Our own garage allows us to maintain our fleet and support operational continuity.' },
  { icon: 'alt_route', title: 'Operations', text: 'We use structured processes and operational planning to manage delivery requirements efficiently.' },
  { icon: 'handshake', title: 'Partnership', text: 'We believe in building long-term relationships with clients and platforms by consistently delivering dependable service.' },
]

const STATS = [
  { icon: 'two_wheeler', value: '200+', label: 'Owned Vehicles in Fleet' },
  { icon: 'calendar_today', value: '2022', label: 'Established in Dubai' },
  { icon: 'home_repair_service', value: '1', label: 'Dedicated In-House Garage' },
  { icon: 'verified', value: '99.8%', label: 'On-Time & Reliability Rate' },
]

const WHY_CARDS = [
  { icon: 'directions_bike', title: 'Fleet Ownership', text: 'With 200+ owned vehicles, we have direct control over a significant part of our delivery capacity.' },
  { icon: 'settings_suggest', title: 'Operational Control', text: 'Our own fleet and garage allow us to manage vehicle availability and maintenance more effectively.' },
  { icon: 'speed', title: 'High-Volume Capability', text: 'We are equipped to support businesses with substantial daily delivery requirements.' },
  { icon: 'tune', title: 'Flexible Solutions', text: 'Our services can be adapted to meet different business models, delivery volumes, and operational requirements.' },
  { icon: 'sentiment_satisfied', title: 'Customer-Focused Operations', text: 'We understand that every successful delivery contributes to the overall customer experience.' },
  { icon: 'handshake', title: 'Long-Term Partnerships', text: 'We aim to develop lasting relationships with businesses by becoming an extension of their delivery operations.' },
]

export default function About() {
  return (
    <>
      {/* Inner Page Hero Banner */}
      <section className="relative about-hero border-b border-slate-800 py-16 md:py-20 overflow-hidden text-white" data-purpose="about-hero">
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <img alt="Dubai Skyline Hero Backdrop" className="w-full h-full object-cover object-center" src={HERO_IMG} />
          <div className="absolute inset-0 hero-gradient-overlay"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-300 mb-4 tracking-wide uppercase" aria-label="Breadcrumb">
            <Link className="hover:text-brand-gold transition-colors" to="/">Home</Link>
            <span className="material-symbols-outlined text-xs" aria-hidden="true">chevron_right</span>
            <span className="text-brand-gold">About Us</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold font-bold text-xs uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                ABOUT US
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Delivering More Than Packages.
                <br />
                <span className="text-brand-gold">Delivering Trust.</span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-2xl leading-relaxed font-normal">
                Established in 2022, ULTRA MILES DELIVERY SERVICES LLC is a Dubai-based delivery and logistics company focused on providing dependable and scalable
                last-mile delivery solutions.
              </p>
            </div>
            <div className="hidden lg:block text-right pb-2">
              <span className="font-script text-3xl sm:text-4xl text-brand-gold font-bold transform -rotate-2 inline-block leading-tight drop-shadow-sm">
                Delivering Trust
                <br />
                Across Dubai &amp; UAE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Company Overview & Vision/Mission & Facilities Showcase */}
      <section className="py-16 md:py-24 bg-[#F4F7FB] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="space-y-4">
                <span className="text-xs uppercase font-bold tracking-widest text-brand-gold">Company Overview</span>
                <h2 className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight uppercase">
                  Built for Dependability, Scaled for the Modern Logistics Landscape
                </h2>
                <p className="text-slate-700 text-base leading-relaxed pt-1">
                  Our business was built around a simple objective: to help companies manage their delivery requirements through reliable fleet capacity, professional
                  delivery operations, and consistent service.
                </p>
                <p className="text-slate-600 text-base leading-relaxed">
                  Over the years, we have developed our capabilities through investment in our own vehicles, fleet infrastructure, operational teams, and long-term
                  business partnerships.
                </p>
                <p className="text-slate-600 text-base leading-relaxed">
                  Today, Ultra Miles operates with <strong>200+ owned vehicles</strong> supported by our own garage, providing us with greater control over fleet
                  maintenance, vehicle availability, and operational readiness.
                </p>
                <p className="text-slate-600 text-base leading-relaxed">
                  Our experience working with leading delivery, e-commerce, food, retail, and technology platforms has helped us develop the operational capabilities
                  required to manage demanding delivery environments.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border-l-4 border-brand-gold border-t border-r border-b border-slate-200/80 shadow-sm mt-2">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-3xl text-brand-gold shrink-0" aria-hidden="true">format_quote</span>
                  <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed font-medium">
                    "We understand that the final mile is one of the most important stages of the customer journey. Every delivery represents our client's brand, service
                    promise, and commitment to its customer. That is why we approach every delivery with professionalism, accountability, efficiency, and attention to
                    service quality."
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 relative group h-56 shadow-md">
                <img alt="Dubai Central Logistics Dispatch Control" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={DISPATCH_IMG} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent flex flex-col justify-end p-5">
                  <span className="text-xs uppercase font-bold tracking-widest text-brand-gold">OPERATIONAL HUB</span>
                  <h4 className="text-base font-bold text-white mt-1">24/7 Logistics Dispatch &amp; Routing Control</h4>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 relative group h-44 shadow-md">
                  <img alt="Fleet Staging of 200+ Vehicles" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={FLEET_STAGING_IMG} />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent flex flex-col justify-end p-3.5">
                    <span className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider">Fleet Staging</span>
                    <p className="text-xs font-bold text-white">200+ Unit Owned Fleet</p>
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 relative group h-44 shadow-md">
                  <img alt="In-House Fleet Maintenance Garage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={GARAGE_IMG} />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent flex flex-col justify-end p-3.5">
                    <span className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider">Technical Facility</span>
                    <p className="text-xs font-bold text-white">Private In-House Garage</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-200/80">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase font-bold tracking-widest text-brand-gold">Guiding Framework</span>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight mt-1 uppercase">Our Approach</h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">Structured principles driving our daily logistics execution across the Emirates.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {APPROACH_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-6 rounded-2xl bg-white border border-slate-100 hover:border-brand-gold/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-2xl" aria-hidden="true">{pillar.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">{pillar.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{pillar.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Key Statistics Bar & Leadership */}
      <section className="relative py-16 md:py-24 about-stats-section text-white overflow-hidden border-y border-slate-800">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img alt="Dubai Skyline Backdrop" className="w-full h-full object-cover" src={SKYLINE_IMG} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xl mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 gap-y-6 md:gap-y-0 text-center">
              {STATS.map((stat) => (
                <div key={stat.label} className="px-4 flex flex-col items-center justify-center">
                  <div className="w-10 h-10 mb-2 text-brand-gold flex items-center justify-center">
                    <span className="material-symbols-outlined text-3xl" aria-hidden="true">{stat.icon}</span>
                  </div>
                  <span className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">{stat.value}</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-brand-gold block mb-2">WHY ULTRA MILES?</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">A Delivery Partner You Can Depend On</h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              Choosing the right delivery partner is essential to maintaining a strong customer experience. At Ultra Miles, our capabilities are built around reliability,
              operational control, scalability, and service excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl about-why-card border border-slate-700/80 p-8 hover:border-brand-gold transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-gold/20 text-brand-gold flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">{card.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Callout Banner with Dubai Skyline */}
      <section className="relative about-cta py-14 text-white overflow-hidden" data-purpose="cta-contact-banner">
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <img alt="Skyline Glow" className="w-full h-full object-cover" src={SKYLINE_GLOW_IMG} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase font-bold tracking-widest text-brand-gold block mb-1">Partner With Ultra Miles</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">Ready to Partner with Ultra Miles?</h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2">
                Contact our operations and fleet management team today to discuss your delivery requirements.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center lg:justify-end gap-4">
              <a
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-brand-navy text-sm font-bold shadow-lg shadow-brand-gold/20 transition-all transform active:scale-95"
                href="tel:+971547788501"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"></path>
                </svg>
                <span>+971 54 778 8501</span>
              </a>
              <Link
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-700 transition-colors"
                to="/contact-us"
              >
                <span className="material-symbols-outlined text-base" aria-hidden="true">mail</span>
                <span>Request Proposal</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

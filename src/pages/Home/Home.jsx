import CtaBanner from '../../components/shared/CtaBanner.jsx'
import PartnerBrandCard from '../../components/shared/PartnerBrandCard.jsx'
import ServiceIconCard from '../../components/shared/ServiceIconCard.jsx'
import './Home.css'

const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBZlDTg2A8uyYHk9AP-Byz-IoMzvx5zxPhsN4O9LAxVDc5_9hN-qvVqMQc6eBmX3hnGO3i-qX5VwBliaW64RzKoQ0waIAFv25dwWBpLv5bt1jzF-HppZtkComc9c2EaPJHek3j__EU8J-DUdqR3Kp-lSXmImmhTXRpTrwmJyBfKgUDh905u8XGYO8_nlobjcCeDQmiG3fGGgsdxUTaVaFhBC44UTeVciqFDDr70W7SRgKBBTvO_rh8'
const FLEET_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCD-O4MI3yr7IqUfpJjKT7r5K3fmGXAofCyhhnP6DLuLsxAwhtPCSkeEbJAIpN65GU9JMTufSntSVy9iF4Qjh1_AqzBvhc2HDuC8Anmy4RN9GFnSSwBHbE9FxJsw3DV_NpqEq-3WQnkaasDY1vnRXlzsbbLfFNV6K55Zh8wfR7BGo1RrBFz2wlAKLh9oPHfH8khstzcQgGv9dkj8OoaExieWg7IGNACbaegots4ew6leCTKlvOlU8o'
const SKYLINE_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDhLhthcpj6iGE3cFTDxP4xfnF4SVSZFVSxWYz856rkuRbbVCrTou3QRcJ695P-hzGDu5uPMcYSrXO2bSQ0hhH2LaiFacJnFpEUPVDgU9eKkPE-s9R19rIax74Hu1BewYNnBasRKzBnv26QgxgaKwGNwQfMkUt5f3qxHnm8Chm3fjJ-x22H_lZp_IFYG1QMBgjte594oQlI0QbhBXklnKSxKJ9LpmujzikS5kLf2qtosxz-Ckn5a40'

const SERVICE_CARDS = [
  {
    label: 'E-Commerce\nDeliveries',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
  },
  {
    label: 'Food\nDelivery',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 4v16m-4-16v7a4 4 0 008 0V4" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M8 4h8" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
  },
  {
    label: 'Documents &\nParcels',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect height="14" rx="2" width="18" x="3" y="5"></rect>
        <polyline points="3 7 12 13 21 7"></polyline>
      </svg>
    ),
  },
  {
    label: 'Large Orders\n& Bulk Deliveries',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
  },
  {
    label: 'Same Day\nDelivery',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9"></circle>
        <polyline points="12 6 12 12 15 15"></polyline>
        <path d="M2 9h3M2 15h3"></path>
      </svg>
    ),
  },
  {
    label: 'Custom\nSolutions',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
  },
]

const ABOUT_BADGES = [
  {
    label: 'Professional Team',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
  },
  {
    label: 'Well Maintained Fleet',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
  },
  {
    label: 'Modern Operations',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        {/* Heroicons cog-6-tooth path — source HTML contained a corrupted
            variant of this path; repaired here per Phase 8 (fix invalid SVG). */}
        <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.27.5.06.12l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.15.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.272-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" strokeLinecap="round" strokeLinejoin="round"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <>
      {/* BEGIN: HeroSection */}
      <section className="relative hero-section text-white overflow-hidden" data-purpose="hero-section" id="home">
        {/* Hero Background Image: Dubai Skyline with Delivery Rider */}
        <div className="absolute inset-0 z-0">
          <img alt="Ultra Miles Delivery Rider in Dubai" className="w-full h-full object-cover object-center opacity-45" src={HERO_IMG} />
          <div className="absolute inset-0 hero-gradient-overlay home-hero-overlay"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-gray-300">
                <span>Fast</span>
                <span className="text-brand-gold">•</span>
                <span>Reliable</span>
                <span className="text-brand-gold">•</span>
                <span>Always On Time</span>
              </div>
              {/* Hero headline + intro per approved DOCX content (audit point 6) */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                YOUR BUSINESS.
                <br />
                <span className="text-brand-gold">OUR FLEET.</span>
                <br />
                EVERY MILE DELIVERED.
              </h1>
              <p className="text-gray-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
                ULTRA MILES DELIVERY SERVICES LLC is a Dubai-based delivery and logistics company established in 2022, providing reliable, scalable, and professionally
                managed last-mile delivery solutions across the UAE.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-white font-bold text-sm transition-all shadow-lg shadow-brand-gold/30"
                  href="#contact"
                >
                  <span>Partner With Us</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </a>
                <a
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/60 hover:border-white text-white font-semibold text-sm transition-all hover:bg-white/10"
                  href="#services"
                >
                  Explore Our Services
                </a>
              </div>
            </div>
            {/* Right Side Visual / Script Callout */}
            <div className="lg:col-span-5 relative flex justify-end">
              {/* Floating Cursive Script Accent */}
              <div className="relative lg:-mt-24 text-right">
                <div className="font-script text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight drop-shadow-md transform -rotate-3 select-none">
                  Delivering
                  <br />
                  More Than
                  <br />
                  Just Packages
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: HeroSection */}

      {/* BEGIN: TopPartnersStrip */}
      <section className="home-partners-strip py-8 border-b border-slate-100" data-purpose="top-partners-ribbon" id="partners">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Divider Title */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px bg-gray-200 w-16 sm:w-28"></span>
            <span className="text-[11px] uppercase font-bold tracking-widest text-slate-500">Our Partners</span>
            <span className="h-px bg-gray-200 w-16 sm:w-28"></span>
          </div>
          {/* Partner Logos Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-12 text-slate-700">
            {/* Amazon */}
            <div className="flex items-center font-black text-2xl tracking-tighter text-slate-900">amazon</div>
            {/* Noon */}
            <div className="px-5 py-1.5 rounded-full bg-[#FFE600] text-slate-900 font-extrabold text-sm sm:text-base tracking-tight flex items-center gap-1.5 shadow-sm">
              <span className="text-xs">🟡</span> noon
            </div>
            {/* Careem */}
            <div className="text-[#00EA90] font-black text-xl sm:text-2xl tracking-tight flex items-center gap-1">
              <span className="text-slate-900">Careem</span>
            </div>
            {/* Deliveroo */}
            <div className="flex items-center gap-1.5 text-[#00CDBC] font-extrabold text-lg sm:text-xl">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6z"></path>
              </svg>
              <span>deliveroo</span>
            </div>
            {/* Keeta */}
            <div className="flex items-center gap-1 font-black text-xl sm:text-2xl text-slate-900 tracking-tight">
              <span>Keeta</span>
              <span className="w-2.5 h-2.5 rounded-full bg-brand-gold inline-block"></span>
            </div>
            {/* And More */}
            <div className="text-xs sm:text-sm font-semibold text-slate-400">and more...</div>
          </div>
        </div>
      </section>
      {/* END: TopPartnersStrip */}

      {/* BEGIN: KeyHighlightsStats */}
      <section className="bg-white py-12 border-b border-gray-100" data-purpose="key-metrics-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 text-center">
            {/* Metric 1 */}
            <div className="bg-[#F4F7FB] border border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 mb-3 text-brand-gold flex items-center justify-center rounded-full bg-white shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <circle cx="5.5" cy="17.5" r="3.5"></circle>
                  <circle cx="18.5" cy="17.5" r="3.5"></circle>
                  <path d="M15 6h2l3 6h-6M6 17.5h8M9 11l3 6M12 6h2"></path>
                </svg>
              </div>
              <span className="text-2xl font-black text-brand-navy">160+</span>
              <span className="text-xs font-semibold text-slate-600 mt-1 uppercase tracking-wide">Own Bikes</span>
            </div>
            {/* Metric 2 */}
            <div className="bg-[#F4F7FB] border border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 mb-3 text-brand-gold flex items-center justify-center rounded-full bg-white shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1V9z" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M9 21V12h6v9M9 15h6M9 18h6" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <span className="text-base sm:text-lg font-bold text-brand-navy">Our Own</span>
              <span className="text-xs font-semibold text-slate-600 mt-1 uppercase tracking-wide">Garage</span>
            </div>
            {/* Metric 3 */}
            <div className="bg-[#F4F7FB] border border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 mb-3 text-brand-gold flex items-center justify-center rounded-full bg-white shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <span className="text-base sm:text-lg font-bold text-brand-navy">Safe &amp; Secure</span>
              <span className="text-xs font-semibold text-slate-600 mt-1 uppercase tracking-wide">Deliveries</span>
            </div>
            {/* Metric 4 */}
            <div className="bg-[#F4F7FB] border border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 mb-3 text-brand-gold flex items-center justify-center rounded-full bg-white shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <span className="text-base sm:text-lg font-bold text-brand-navy">On-Time</span>
              <span className="text-xs font-semibold text-slate-600 mt-1 uppercase tracking-wide">Delivery</span>
            </div>
            {/* Metric 5 */}
            <div className="col-span-2 md:col-span-1 bg-[#F4F7FB] border border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 mb-3 text-brand-gold flex items-center justify-center rounded-full bg-white shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <span className="text-base sm:text-lg font-bold text-brand-navy">Wide Coverage</span>
              <span className="text-xs font-semibold text-slate-600 mt-1 uppercase tracking-wide">Across Dubai &amp; UAE</span>
            </div>
          </div>
        </div>
      </section>
      {/* END: KeyHighlightsStats */}

      {/* BEGIN: AboutUsSection */}
      <section className="py-16 lg:py-24 bg-[#F4F7FB] border-b border-slate-100" data-purpose="about-us-section" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Bike Fleet & Garage Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <img
                  alt="Ultra Miles Delivery Services Fleet and Dedicated Garage"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                  src={FLEET_IMG}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent"></div>
              </div>
            </div>
            {/* Right: Description & Pillars */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-brand-gold block mb-1">About Us</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight uppercase">
                  Ultra Miles
                  <br />
                  Delivery Services LLC
                </h2>
              </div>
              <p className="text-slate-600 text-base leading-relaxed">
                We are a professional delivery company based in Dubai, with our own fleet of 160+ bikes and a fully equipped garage. Our mission is to provide fast, safe
                and efficient delivery services while building long-term partnerships with leading platforms and businesses.
              </p>
              {/* 3 Feature Badges in distinct cards */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200/80">
                {ABOUT_BADGES.map((badge) => (
                  <div
                    key={badge.label}
                    className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-2.5"
                  >
                    <div className="w-9 h-9 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">{badge.icon}</div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: AboutUsSection */}

      {/* BEGIN: PoweringDeliveriesPartnersSection */}
      <section className="relative home-partners-section py-16 lg:py-20 text-white overflow-hidden" data-purpose="partners-highlight-section">
        {/* Subtle City Skyline Outline Overlay */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img alt="Dubai Silhouette" className="w-full h-full object-cover" src={SKYLINE_IMG} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Text Block */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-brand-gold block">Our Partners</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase leading-tight">Powering Your Deliveries</h2>
              <p className="text-slate-300 text-base max-w-md">We are proud to be official delivery partners with leading platforms across the region.</p>
            </div>
            {/* Right: 2x3 White Brand Cards Grid */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <PartnerBrandCard variant="amazon" />
                <PartnerBrandCard variant="noon" />
                <PartnerBrandCard variant="careem" />
                <PartnerBrandCard variant="deliveroo" />
                <PartnerBrandCard variant="keeta" />
                <PartnerBrandCard variant="more" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: PoweringDeliveriesPartnersSection */}

      {/* BEGIN: OurServicesSection */}
      <section className="py-16 lg:py-24 bg-[#F4F7FB] border-t border-slate-100" data-purpose="services-grid-section" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-gold">Our Services</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight uppercase mt-2 mb-12">Fast &amp; Flexible Delivery Solutions</h2>
          {/* 6 Service Cards Grid with clean white elevated surfaces */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {SERVICE_CARDS.map((card) => (
              <ServiceIconCard key={card.label} icon={card.icon} label={card.label} />
            ))}
          </div>
        </div>
      </section>
      {/* END: OurServicesSection */}

      {/* BEGIN: CallToActionContactBanner */}
      <CtaBanner />
      {/* END: CallToActionContactBanner */}
    </>
  )
}

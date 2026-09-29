import { useState } from 'react'
import { Link } from 'react-router-dom'
import CtaBanner from '../../components/shared/CtaBanner.jsx'
import './Services.css'

const HERO_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBZlDTg2A8uyYHk9AP-Byz-IoMzvx5zxPhsN4O9LAxVDc5_9hN-qvVqMQc6eBmX3hnGO3i-qX5VwBliaW64RzKoQ0waIAFv25dwWBpLv5bt1jzF-HppZtkComc9c2EaPJHek3j__EU8J-DUdqR3Kp-lSXmImmhTXRpTrwmJyBfKgUDh905u8XGYO8_nlobjcCeDQmiG3fGGgsdxUTaVaFhBC44UTeVciqFDDr70W7SRgKBBTvO_rh8'
const SKYLINE_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDhLhthcpj6iGE3cFTDxP4xfnF4SVSZFVSxWYz856rkuRbbVCrTou3QRcJ695P-hzGDu5uPMcYSrXO2bSQ0hhH2LaiFacJnFpEUPVDgU9eKkPE-s9R19rIax74Hu1BewYNnBasRKzBnv26QgxgaKwGNwQfMkUt5f3qxHnm8Chm3fjJ-x22H_lZp_IFYG1QMBgjte594oQlI0QbhBXklnKSxKJ9LpmujzikS5kLf2qtosxz-Ckn5a40'

const METRICS = [
  {
    value: '99.8%',
    label: 'On-Time SLA Guarantee',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
  },
  {
    value: '< 120 Min',
    label: 'Dubai Express Windows',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
  },
  {
    value: '160+ Units',
    label: 'Dedicated Bikes & Fleet',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="5.5" cy="17.5" r="3.5"></circle>
        <circle cx="18.5" cy="17.5" r="3.5"></circle>
        <path d="M15 6h2l3 6h-6M6 17.5h8M9 11l3 6M12 6h2"></path>
      </svg>
    ),
  },
  {
    value: '24/7/365',
    label: 'Automated Dispatch Engine',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    ),
  },
]

// 8 services per the approved DOCX content ("OUR SERVICES") — replaces the
// former 6-service set after content audit resolution.
const SERVICES = [
  {
    icon: 'route',
    tag: 'Core Service',
    title: '01. Last-Mile Delivery',
    subtitle: 'Connecting Businesses With Their Customers',
    text: 'Last-mile delivery is at the heart of what we do.\n\nOur delivery operations help businesses move products from fulfilment points, stores, restaurants, warehouses, and distribution locations to the customer\'s doorstep.\n\nWe focus on timely delivery, operational efficiency, customer service, and consistent execution.',
    bullets: ['E-commerce businesses', 'Retailers', 'Online marketplaces', 'Food businesses', 'Grocery businesses', 'Logistics companies', 'Delivery platforms'],
    sla: 'Ideal For',
    cta: 'Discuss Requirements',
  },
  {
    icon: 'shopping_cart',
    tag: 'E-Commerce',
    title: '02. E-Commerce Delivery',
    subtitle: 'Delivering the Online Shopping Experience',
    text: 'Fast and reliable delivery is an essential part of e-commerce.\n\nUltra Miles supports e-commerce businesses with delivery resources designed to manage high order volumes and changing customer expectations.\n\nOur teams can support scheduled and high-volume delivery requirements while maintaining a strong focus on customer experience.',
  },
  {
    icon: 'restaurant',
    tag: 'Food & Restaurants',
    title: '03. Food & Restaurant Delivery',
    subtitle: 'Keeping Food Moving',
    text: 'We provide delivery support for restaurants, food businesses, and food delivery platforms.\n\nOur delivery operations are designed around the time-sensitive nature of food orders, helping businesses provide customers with dependable delivery services.',
  },
  {
    icon: 'storefront',
    tag: 'Grocery & Retail',
    title: '04. Grocery & Retail Delivery',
    subtitle: 'From Store to Customer',
    text: 'We support grocery and retail businesses with reliable delivery solutions for customer orders.\n\nOur fleet and delivery teams provide businesses with the operational capacity required to manage daily delivery volumes and peak-period demand.',
  },
  {
    icon: 'bolt',
    tag: 'On-Demand',
    title: '05. On-Demand Delivery',
    subtitle: 'Flexible Delivery When You Need It',
    text: 'Business requirements can change quickly.\n\nOur on-demand delivery capabilities provide flexible support for businesses requiring additional delivery capacity, rapid deployment, or short-term operational assistance.',
  },
  {
    icon: 'two_wheeler',
    tag: 'Dedicated Fleet',
    title: '06. Dedicated Fleet Solutions',
    subtitle: 'Your Delivery Operations. Our Fleet.',
    text: 'For businesses with ongoing delivery requirements, we provide dedicated fleet solutions designed around their operational needs.\n\nOur fleet can be deployed to support specific delivery operations, helping businesses access vehicles and delivery resources without having to build and manage their own fleet infrastructure.',
  },
  {
    icon: 'local_shipping',
    tag: 'B2B',
    title: '07. B2B Delivery',
    subtitle: 'Reliable Business-to-Business Delivery',
    text: 'We support companies that require regular movement of products, parcels, documents, supplies, and other business requirements between locations.\n\nOur B2B delivery solutions can be structured around scheduled, recurring, or operationally specific requirements.',
  },
  {
    icon: 'hub',
    tag: '3PL',
    title: '08. 3PL & Last-Mile Logistics',
    subtitle: 'Extending Your Logistics Capabilities',
    text: 'Ultra Miles provides last-mile delivery and fleet support for businesses looking to strengthen their logistics operations.\n\nWe can support businesses that require additional delivery capacity, fleet resources, and operational assistance without having to independently build a large delivery infrastructure.',
  },
]

const PIPELINE_STEPS = [
  { icon: 'api', step: 'STEP 01', title: 'Booking & Integration', text: 'Instant order placement via our enterprise REST API, bulk portal upload, or dedicated customer dispatch hotline.' },
  { icon: 'route', step: 'STEP 02', title: 'Smart Dispatch', text: 'Geo-clustering AI pairs the consignment to the closest optimal rider, factoring Dubai traffic patterns and thermal constraints.' },
  { icon: 'shield', step: 'STEP 03', title: 'Safe Transit', text: 'Continuous live GPS vehicle tracking, climate monitoring for sensitive payloads, and automatic recipient ETA notifications.' },
  { icon: 'task_alt', step: 'STEP 04', title: 'Proof of Delivery', text: 'Contactless digital signature, geotagged parcel photo, OTP clearance, and automatic ERP reconciliation in real-time.' },
]

// Service options per the approved DOCX content ("OUR SERVICES")
const SERVICE_OPTIONS = [
  'Last-Mile Delivery',
  'E-Commerce Delivery',
  'Food & Restaurant Delivery',
  'Grocery & Retail Delivery',
  'On-Demand Delivery',
  'Dedicated Fleet Solutions',
  'B2B Delivery',
  '3PL & Last-Mile Logistics',
]

// Volume options retained from the approved HTML implementation (no DOCX equivalent)
const VOLUME_OPTIONS = [
  '500 - 2,000 deliveries / month',
  '2,000 - 10,000 deliveries / month',
  '10,000+ enterprise volume',
  'Dedicated Riders Leasing (1 to 20+)',
]

const PERKS = [
  { icon: 'headset_mic', title: 'Dedicated Account Manager', text: 'Single-point human dispatch point for immediate resolution and fleet adjustments.' },
  { icon: 'payments', title: 'Flexible Corporate Billing', text: 'Monthly consolidated tax invoices, 30-day corporate credit terms, and live volume rebates.' },
  { icon: 'speed', title: 'Rapid Onboarding SLA', text: 'Integrate APIs or roll out dedicated riders on your routes inside 48 business hours.' },
]

/*
// CORPORATE PROPOSAL FORM (currently commented out — kept as-is per client
// instruction). The form fields below feed this form when it is re-enabled.
// TODO (backend integration): wire handleSubmit to a real API endpoint when
// available. The original static site only showed an alert on submit; no
// backend endpoint exists. Behavior preserved: client-side validation via
// required fields + success alert.
function handleCorporateSubmit(event) {
  event.preventDefault()
  alert('Thank you! Our fleet manager will contact you within 2 hours.')
}
*/

export default function Services() {
  const [service, setService] = useState(SERVICE_OPTIONS[0])
  const [volume, setVolume] = useState(VOLUME_OPTIONS[0])

  return (
    <>
      {/* Hero / Breadcrumbs */}
      <section className="relative services-hero text-white overflow-hidden py-20 lg:py-28" data-purpose="services-hero">
        <div className="absolute inset-0 z-0">
          <img alt="Dubai Expressway Delivery Logistics" className="w-full h-full object-cover object-center opacity-30" src={HERO_IMG} />
          <div className="absolute inset-0 services-hero-overlay"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link className="hover:text-white transition-colors" to="/">Home</Link>
            <span className="text-brand-gold">/</span>
            <span className="text-brand-gold font-bold">Our Services</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-gold bg-brand-gold/10 border border-brand-gold/30 px-4 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                <span>Enterprise &amp; Last-Mile Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight uppercase">
                Comprehensive
                <br />
                <span className="text-brand-gold">Delivery &amp; Logistics</span>
                <br />
                Solutions
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
                Flexible B2B and Last-Mile Fleet Services Tailored to Modern E-Commerce and Enterprise Demands across Dubai and the United Arab Emirates.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold text-sm transition-all shadow-lg shadow-brand-gold/30"
                  href="#services-matrix"
                >
                  <span>Explore Fleet Services</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </a>
                <a
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/40 hover:border-white text-white font-semibold text-sm transition-all hover:bg-white/10"
                  href="#corporate-quote"
                >
                  Request B2B Consultation
                </a>
              </div>
            </div>
            <div className="lg:col-span-4 hidden lg:flex justify-end">
              <div className="services-hero-card p-8 rounded-3xl shadow-2xl border border-slate-700/60 text-center relative max-w-xs backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-brand-gold/20 text-brand-gold mx-auto flex items-center justify-center mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div className="font-script text-3xl sm:text-4xl text-brand-gold font-bold leading-tight select-none -rotate-2">Fast, Safe &amp; Reliable</div>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed font-medium">
                  Equipped with our dedicated fleet of 160+ bikes &amp; professional UAE logistics network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metric Bar */}
      <section className="bg-white py-12 border-b border-slate-100" data-purpose="services-metrics-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
            {METRICS.map((metric) => (
              <div key={metric.label} className="bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 mb-3 text-brand-gold flex items-center justify-center rounded-full bg-brand-gold/10 shadow-sm">
                  {metric.icon}
                </div>
                <span className="text-2xl sm:text-3xl font-black text-brand-navy">{metric.value}</span>
                <span className="text-xs font-semibold text-slate-600 mt-1 uppercase tracking-wide">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1: Detailed Core Services (8 services per approved DOCX) */}
      <section className="py-16 lg:py-24 bg-white" id="services-matrix">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-brand-gold">Service Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight uppercase mt-2 mb-4">
              High-Velocity Fleet Operations Built For Scale
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              From micro-courier fulfillment to dedicated multi-vehicle enterprise supply chains, we power precision movement across all seven emirates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {SERVICES.map((serviceItem) => (
              <div
                key={serviceItem.title}
                className="bg-white rounded-2xl p-8 border border-slate-200/80 hover:border-brand-gold hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 group-hover:bg-brand-gold/20 text-brand-navy group-hover:text-brand-gold-hover border border-brand-gold/20 flex items-center justify-center transition-colors shadow-sm">
                      <span className="material-symbols-outlined text-3xl" aria-hidden="true">{serviceItem.icon}</span>
                    </div>
                    <span className="rounded-full bg-brand-gold/10 text-brand-gold font-bold text-[11px] uppercase tracking-wider px-3 py-1 border border-brand-gold/20">
                      {serviceItem.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-1">{serviceItem.title}</h3>
                  {serviceItem.subtitle && (
                    <p className="text-sm font-semibold text-brand-gold mb-3">{serviceItem.subtitle}</p>
                  )}
                  {String(serviceItem.text)
                    .split('\n\n')
                    .map((paragraph) => (
                      <p key={paragraph} className="text-slate-600 text-sm mb-3 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  {serviceItem.bullets && serviceItem.bullets.length > 0 && (
                    <div className="mt-4 mb-6">
                      <span className="text-xs font-semibold text-slate-400 uppercase block mb-2">{serviceItem.sla}</span>
                      <ul className="space-y-2.5 text-sm text-slate-700">
                        {serviceItem.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-2.5">
                            <svg className="w-4 h-4 text-brand-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                clipRule="evenodd"
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              ></path>
                            </svg>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a className="inline-flex items-center gap-1.5 text-brand-gold hover:text-brand-gold-hover font-bold text-xs uppercase tracking-wide" href="#corporate-quote">
                    <span>{serviceItem.cta || 'Discuss Requirements'}</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: How We Work (4-Step Pipeline) 
      <section className="relative services-pipeline text-white py-20 lg:py-24 border-y border-slate-800 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <img alt="Dubai Skyline Silhouette" className="w-full h-full object-cover" src={SKYLINE_IMG} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-brand-gold block mb-2">Automated Protocol</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">How We Work: The 4-Step Pipeline</h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base max-w-md font-normal leading-relaxed">
              Seamless operational flow powered by algorithmic dispatchers and verified digital chain-of-custody handovers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {PIPELINE_STEPS.map((step) => (
              <div key={step.step} className="services-step-card p-7 rounded-2xl border border-slate-700/80 shadow-lg hover:shadow-2xl transition-all relative group hover:border-brand-gold">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-brand-gold tracking-widest uppercase">{step.step}</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-gold shadow-sm shadow-brand-gold"></span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-4 border border-brand-gold/20">
                  <span className="material-symbols-outlined text-2xl" aria-hidden="true">{step.icon}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* SECTION 3: Corporate Service Request Form & Consultation 
      <section className="py-20 lg:py-24 border-t border-slate-100 bg-white" id="corporate-quote">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-bold tracking-widest text-brand-gold block">Corporate Partnerships</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight uppercase leading-tight">
                Scale Your Fleet Capabilities with Ultra Miles
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Whether you need 5 dedicated bike riders for a gourmet restaurant or 50 logistics vans for regional e-commerce peak season, our operational team will
                craft a customized contract SLA.
              </p>
              <div className="space-y-4 pt-2">
                {PERKS.map((perk) => (
                  <div key={perk.title} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xl" aria-hidden="true">{perk.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-navy">{perk.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{perk.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="services-form-panel text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative border border-slate-700/50">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/20">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-white uppercase">Request Corporate Proposal</h3>
                    <p className="text-xs text-slate-200 mt-1 font-normal">Fill details below for an instant pricing matrix &amp; consultation</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 text-brand-gold flex items-center justify-center border border-brand-gold/30">
                    <span className="material-symbols-outlined text-2xl" aria-hidden="true">description</span>
                  </div>
                </div>
                <form className="space-y-5" onSubmit={handleCorporateSubmit} noValidate={false}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-white mb-1.5 uppercase tracking-wide" htmlFor="corp-company">
                        Company Name *
                      </label>
                      <input
                        id="corp-company"
                        className="w-full h-11 rounded-xl services-form-input border border-white/20 px-4 text-white text-sm placeholder-slate-400 outline-none transition-all"
                        placeholder="e.g. Al Noor Commerce LLC"
                        required
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white mb-1.5 uppercase tracking-wide" htmlFor="corp-name">
                        Full Name *
                      </label>
                      <input
                        id="corp-name"
                        className="w-full h-11 rounded-xl services-form-input border border-white/20 px-4 text-white text-sm placeholder-slate-400 outline-none transition-all"
                        placeholder="Operations Lead / Director"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-white mb-1.5 uppercase tracking-wide" htmlFor="corp-email">
                        Corporate Email *
                      </label>
                      <input
                        id="corp-email"
                        className="w-full h-11 rounded-xl services-form-input border border-white/20 px-4 text-white text-sm placeholder-slate-400 outline-none transition-all"
                        placeholder="name@company.ae"
                        required
                        type="email"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white mb-1.5 uppercase tracking-wide" htmlFor="corp-phone">
                        UAE Phone Number *
                      </label>
                      <input
                        id="corp-phone"
                        className="w-full h-11 rounded-xl services-form-input border border-white/20 px-4 text-white text-sm placeholder-slate-400 outline-none transition-all"
                        placeholder="+971 50 000 0000"
                        required
                        type="tel"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-white mb-1.5 uppercase tracking-wide" htmlFor="corp-service">
                        Primary Service Required
                      </label>
                      <select
                        id="corp-service"
                        className="w-full h-11 rounded-xl services-form-input border border-white/20 px-4 text-white text-sm outline-none transition-all"
                        value={service}
                        onChange={(event) => setService(event.target.value)}
                      >
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option} className="services-form-option text-white" value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white mb-1.5 uppercase tracking-wide" htmlFor="corp-volume">
                        Projected Monthly Volume
                      </label>
                      <select
                        id="corp-volume"
                        className="w-full h-11 rounded-xl services-form-input border border-white/20 px-4 text-white text-sm outline-none transition-all"
                        value={volume}
                        onChange={(event) => setVolume(event.target.value)}
                      >
                        {VOLUME_OPTIONS.map((option) => (
                          <option key={option} className="services-form-option text-white" value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white mb-1.5 uppercase tracking-wide" htmlFor="corp-requirements">
                      Operational Requirements &amp; Timelines
                    </label>
                    <textarea
                      id="corp-requirements"
                      className="w-full rounded-xl services-form-input border border-white/20 p-4 text-white text-sm placeholder-slate-400 outline-none transition-all"
                      placeholder="Specify delivery zones (Dubai, Abu Dhabi, Sharjah), temperature needs, or custom schedules..."
                      rows="3"
                    ></textarea>
                  </div>
                  <button
                    className="w-full rounded-full py-4 bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-brand-gold/30 flex items-center justify-center gap-2 active:scale-95"
                    type="submit"
                  >
                    <span>Submit Fleet Inquiry</span>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Bottom CTA Banner */}
      <CtaBanner />
    </>
  )
}

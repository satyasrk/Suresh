import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'

const SKYLINE_GLOW_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCoEYMYna1KvJyWVfYaDanLyuQ53jatjNKUccDHCHwNyNE7JVcAk69W8NywS8ZS2m8ZqqoVI3024_GVGIvgfViScJWeutd-aQ3D9Z2S8yPvRTHVXlBN9uduY1CMVl9ENvLjT0c06JGxPHMXnpnjCPSWUyFWdScaj52VDJ1QcSfL0CkbEeVzv89RToLfxfoXVt2I22ivQmsHEpYa_XPcoeswRMWW98cwK7xRlTHAnq44xOa5g9mJxBI'

const CONTACT_CARDS = [
  {
    icon: 'phone_in_talk',
    badge: 'AVAILABLE 24/7',
    badgeAccent: true,
    title: 'Hotline & Urgent Dispatch',
    text: 'Immediate roadside dispatch, courier escalation, and live transit assistance.',
    footerType: 'phone',
  },
  {
    icon: 'mark_email_read',
    badge: 'CORPORATE INBOX',
    badgeAccent: false,
    title: 'Corporate Email',
    text: 'Formal contracts, partnership inquiries, and operational invoices.',
    footerType: 'email',
  },
  {
    icon: 'warehouse',
    badge: 'HEADQUARTERS & HUB',
    badgeAccent: false,
    title: 'Operations & Garage',
    text: 'Dubai Industrial Area / Al Quoz logistics corridor with full vehicle maintenance bays.',
    footerType: 'location',
  },
  {
    icon: 'schedule',
    badge: 'NON-STOP UPTIME',
    badgeAccent: true,
    title: 'Operational Hours',
    text: '24/7 Dispatch Control & Continuous On-Road Technical Support across emirates.',
    footerType: 'hours',
  },
]

// Service options per the approved DOCX content (Business Enquiry — "Service Required")
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

// TODO (backend integration): wire this handler to a real API endpoint when
// available. The original static site only showed an alert on submit; no
// backend endpoint exists. Behavior preserved: client-side validation via
// required fields + success alert.
function handleInquirySubmit(event) {
  event.preventDefault()
  alert('Inquiry submitted to Ultra Miles Operations Center. A fleet coordinator will contact you shortly.')
}

export default function Contact() {
  const [service, setService] = useState('')

  return (
    <>
      {/* Hero Banner (Clean Light Style) */}
      <section className="relative contact-hero border-b border-slate-800 overflow-hidden py-14 md:py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C2038] via-transparent to-transparent opacity-80 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-4 tracking-wide uppercase" aria-label="Breadcrumb">
            <Link className="hover:text-brand-gold transition-colors" to="/">Home</Link>
            <span className="text-slate-600">/</span>
            <span className="text-brand-gold">Contact</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
              <span>24/7 Dispatch Command Center</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase mb-4">Get in Touch with Ultra Miles</h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Reach Our Operations Center &amp; Dispatch Team for Bookings, Fleet Leasing, or Enterprise Inquiries across the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Contact Information Cards (Bento Grid) */}
      <section className="py-14 bg-[#F4F7FB] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 relative group hover:shadow-xl hover:border-brand-gold/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]" aria-hidden="true">{card.icon}</span>
                  </div>
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider ${
                      card.badgeAccent ? 'bg-brand-gold/10 text-brand-gold' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {card.badgeAccent && <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping"></span>}
                    <span>{card.badge}</span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy">{card.title}</h3>
                  <p className="text-sm text-slate-600">{card.text}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200">
                  {card.footerType === 'phone' && (
                    <a className="text-brand-gold font-bold text-base hover:text-brand-gold-hover flex items-center gap-1 transition-colors" href="tel:+971547788501">
                      +971 54 778 8501
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
                    </a>
                  )}
                  {card.footerType === 'email' && (
                    <a className="text-slate-800 font-semibold text-sm hover:text-brand-gold transition-colors block" href="mailto:Operations@ultramiles.ae">
                      Operations@ultramiles.ae
                    </a>
                  )}
                  {card.footerType === 'location' && <span className="text-slate-700 font-medium text-sm block">Dubai, United Arab Emirates</span>}
                  {card.footerType === 'hours' && (
                    <div className="flex items-center justify-between">
                      <span className="text-brand-navy font-bold text-sm">365 Days Active</span>
                      <span className="font-mono text-xs font-semibold text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-md">00:00 - 24:00</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Business Enquiry Form (fields per approved DOCX content) */}
      <section className="py-16 lg:py-20 bg-white relative border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contextual Left Rail */}
            <div className="lg:col-span-4 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-wider">
                <span>Fleet &amp; Contract Inquiries</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight uppercase leading-tight">Business Enquiry</h2>
              <p className="text-slate-600 text-base leading-relaxed">Tell us about your delivery requirements.</p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[22px]" aria-hidden="true">verified_user</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm">RTA &amp; UAE Compliant</h4>
                    <p className="text-xs text-slate-500 mt-0.5">All couriers, bikes, and vans meet national logistics licensing benchmarks.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[22px]" aria-hidden="true">speed</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm">Rapid Deployment</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Scale rider capacity from 5 to 200+ units within 48 operational hours.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Canvas */}
            <div className="lg:col-span-8 bg-[#F4F7FB] rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-xl relative">
              <form className="space-y-6" onSubmit={handleInquirySubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700" htmlFor="contact-name">
                      Full Name <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      id="contact-name"
                      className="w-full h-12 bg-white border border-slate-200 rounded-xl px-4 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                      placeholder="Tariq Mansoor"
                      required
                      type="text"
                    />
                  </div>
                  {/* Company Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700" htmlFor="contact-company">
                      Company Name
                    </label>
                    <input
                      id="contact-company"
                      className="w-full h-12 bg-white border border-slate-200 rounded-xl px-4 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                      placeholder="Apex Logistics LLC"
                      type="text"
                    />
                  </div>
                  {/* Business Email */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700" htmlFor="contact-email">
                      Business Email <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      id="contact-email"
                      className="w-full h-12 bg-white border border-slate-200 rounded-xl px-4 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                      placeholder="name@company.ae"
                      required
                      type="email"
                    />
                  </div>
                  {/* Contact Number */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700" htmlFor="contact-phone">
                      Contact Number <span className="text-brand-gold">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="contact-phone"
                        className="w-full h-12 bg-white border border-slate-200 rounded-xl px-4 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                        placeholder="+971 50 123 4567"
                        required
                        type="tel"
                      />
                    </div>
                  </div>
                  {/* Service Required */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700" htmlFor="contact-service">
                      Service Required <span className="text-brand-gold">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="contact-service"
                        className="w-full h-12 bg-white border border-slate-200 rounded-xl px-4 pr-10 text-slate-900 text-sm focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all appearance-none cursor-pointer"
                        required
                        value={service}
                        onChange={(event) => setService(event.target.value)}
                      >
                        <option disabled value="">
                          Select a service
                        </option>
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <span className="material-symbols-outlined text-slate-400 pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[20px]" aria-hidden="true">
                        expand_more
                      </span>
                    </div>
                  </div>
                  {/* Delivery Location */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700" htmlFor="contact-location">
                      Delivery Location
                    </label>
                    <input
                      id="contact-location"
                      className="w-full h-12 bg-white border border-slate-200 rounded-xl px-4 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                      type="text"
                    />
                  </div>
                  {/* Estimated Daily Delivery Volume */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700" htmlFor="contact-volume">
                      Estimated Daily Delivery Volume
                    </label>
                    <input
                      id="contact-volume"
                      className="w-full h-12 bg-white border border-slate-200 rounded-xl px-4 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                      type="text"
                    />
                  </div>
                  {/* Fleet Requirement */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700" htmlFor="contact-fleet">
                      Fleet Requirement
                    </label>
                    <input
                      id="contact-fleet"
                      className="w-full h-12 bg-white border border-slate-200 rounded-xl px-4 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                      type="text"
                    />
                  </div>
                </div>
                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    className="w-full bg-white border border-slate-200 rounded-xl p-4 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-all"
                    placeholder="Specify your delivery requirements..."
                    rows="4"
                  ></textarea>
                </div>
                {/* Submit Button & Security Note */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="material-symbols-outlined text-brand-gold text-[18px]" aria-hidden="true">lock</span>
                    <span>Enterprise Non-Disclosure Guaranteed</span>
                  </div>
                  <button
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-gold hover:bg-brand-gold-hover text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-brand-gold/30 transition-all duration-200 active:scale-95 text-sm"
                    type="submit"
                  >
                    <span>Submit Enquiry</span>
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Urgent Escalation Callout Banner */}
      <section className="relative contact-cta py-14 text-white overflow-hidden border-t border-slate-800" data-purpose="cta-contact-banner">
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <img alt="Skyline Glow" className="w-full h-full object-cover" src={SKYLINE_GLOW_IMG} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
            {/* Left Text Block */}
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-wider">
                <span>Urgent Escalation Line</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase leading-tight text-white">Need an Immediate Dispatch Response?</h2>
              <p className="text-slate-300 text-base max-w-xl">
                Connect directly with an operational manager on duty. Our dispatch specialists are standing by 24 hours a day across Dubai and the UAE.
              </p>
            </div>
            {/* Right Action Buttons */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-center lg:justify-end gap-4">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-white font-bold text-sm shadow-lg shadow-brand-gold/30 transition-all transform active:scale-95"
                href="tel:+971547788501"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"></path>
                </svg>
                <span>+971 54 778 8501</span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/60 hover:border-white text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all hover:bg-white/10"
                href="mailto:Operations@ultramiles.ae"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">mail</span>
                <span>Email Dispatch</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

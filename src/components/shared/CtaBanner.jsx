import './CtaBanner.css'

/**
 * CallToActionContactBanner — shared component used on the Home, Services,
 * Fleet and Contact pages. Extracted from index.html (approved styling).
 * The right-hand logo box varies slightly between pages; `logoVariant`
 * selects the exact SVG variant of the original page.
 */
export default function CtaBanner({ logoVariant = 'full' }) {
  return (
    <section className="relative cta-banner py-14 text-white overflow-hidden" data-purpose="cta-contact-banner" id="contact">
      {/* Center Skyline Silhouette Glow */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          alt="Skyline Glow"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoEYMYna1KvJyWVfYaDanLyuQ53jatjNKUccDHCHwNyNE7JVcAk69W8NywS8ZS2m8ZqqoVI3024_GVGIvgfViScJWeutd-aQ3D9Z2S8yPvRTHVXlBN9uduY1CMVl9ENvLjT0c06JGxPHMXnpnjCPSWUyFWdScaj52VDJ1QcSfL0CkbEeVzv89RToLfxfoXVt2I22ivQmsHEpYa_XPcoeswRMWW98cwK7xRlTHAnq44xOa5g9mJxBI"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Phone Contact Box */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white cta-phone-icon flex items-center justify-center shrink-0 shadow-lg">
              <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"></path>
              </svg>
            </div>
            <div>
              <span className="text-xs uppercase font-medium text-slate-300 block">Get in Touch Today</span>
              <a className="text-2xl sm:text-3xl font-black text-white hover:text-brand-gold transition-colors tracking-tight" href="tel:+971547788501">
                +971 54 778 8501
              </a>
              <span className="text-xs text-slate-400 block mt-0.5">For bookings, partnerships or any inquiries.</span>
            </div>
          </div>

          {/* Center: Cursive Script Accent */}
          <div className="text-center">
            <span className="font-script text-3xl sm:text-4xl text-brand-gold font-bold transform -rotate-3 inline-block leading-tight drop-shadow-sm">
              Delivering
              <br />
              Across Dubai
              <br />
              &amp; UAE
            </span>
          </div>

          {/* Right: Large Logo Box */}
          <div className="flex items-center justify-center md:justify-end">
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-brand-gold p-1 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="18.5" cy="17.5" r="3.5"></circle>
                    <circle cx="5.5" cy="17.5" r="3.5"></circle>
                    <circle cx="15" cy="5" r="1"></circle>
                    <path d="M12 17.5V14l-3-3 4-3 2 3h2"></path>
                    <path d="M7 6c2.5-1.5 6-1.5 8.5 0" stroke="#D9822B" strokeWidth="2.5"></path>
                  </svg>
                </div>
                <div className="text-left">
                  <span className="text-2xl font-black tracking-tight text-white block leading-none">ULTRA MILES</span>
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-brand-gold block mt-1">Delivery Services LLC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Our Services', to: '/our-services' },
  // { label: 'Partners', to: '/partners' },
  // { label: 'Our Fleet', to: '/fleet' },
  // { label: 'Contact', to: '/contact-us' },
]

/**
 * Approved Header — extracted verbatim from index.html (source of truth, RULE 3).
 * Active nav item is derived from the current route (Phase 9).
 * Mobile menu: hamburger + slide-down panel, keyboard accessible (Phase 13).
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link className="flex items-center gap-3 group" data-purpose="header-logo" to="/">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#003087] p-1 bg-white transition-transform group-hover:scale-105">
            {/* Stylized Winged Motorcycle Emblem */}
            <svg className="w-8 h-8 text-[#003087]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="18.5" cy="17.5" r="3.5"></circle>
              <circle cx="5.5" cy="17.5" r="3.5"></circle>
              <circle cx="15" cy="5" r="1"></circle>
              <path d="M12 17.5V14l-3-3 4-3 2 3h2"></path>
              <path d="M7 6c2.5-1.5 6-1.5 8.5 0" stroke="#FFB300" strokeWidth="2.5"></path>
              <path d="M5 8.5c3-2 8-2 11 0" stroke="#FFB300" strokeWidth="1.8"></path>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tight text-[#003087] leading-none">ULTRA MILES</span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#FFB300] mt-1">DELIVERY SERVICES LLC</span>
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8 font-semibold text-sm text-slate-700" data-purpose="desktop-nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                isActive
                  ? 'header-nav-link relative text-[#003087] font-bold py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#FFB300]'
                  : 'header-nav-link hover:text-[#D9822B] transition-colors py-1'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Phone CTA Button + Mobile menu toggle */}
        <div className="flex items-center gap-3">
          <a
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-white text-sm font-bold shadow-md transition-all transform hover:scale-105 active:scale-95 header-phone-cta"
            data-purpose="phone-cta"
            href="tel:+971547788501"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"></path>
            </svg>
            <span>+971 54 778 8501</span>
          </a>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-brand-gold transition-colors"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          data-purpose="mobile-nav"
          aria-label="Mobile navigation"
          className="md:hidden bg-white border-t border-slate-100 shadow-lg"
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  isActive
                    ? 'block px-4 py-2.5 rounded-lg text-sm font-bold text-[#003087] bg-brand-gold/10'
                    : 'block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-[#D9822B] hover:bg-slate-50 transition-colors'
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              className="sm:hidden mt-2 flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-full text-white text-sm font-bold shadow-md header-phone-cta"
              href="tel:+971547788501"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"></path>
              </svg>
              <span>+971 54 778 8501</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

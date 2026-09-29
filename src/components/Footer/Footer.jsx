import { Link } from 'react-router-dom'
import './Footer.css'

const FOOTER_LINKS = [
  { label: 'Privacy Policy', to: null },
  { label: 'Terms of Service', to: null },
  { label: 'Fleet Operations', to: '/fleet' },
  { label: 'Corporate Dispatch', to: '/our-services' },
  { label: 'Contact Support', to: '/contact-us' },
]

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    path: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z',
  },
  {
    label: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    label: 'LinkedIn',
    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
  {
    label: 'YouTube',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
]

/**
 * Approved Footer — extracted verbatim from index.html (source of truth, RULE 3).
 * Placeholder "#" links (Privacy Policy / Terms of Service) are preserved as-is:
 * no target pages exist in the approved site, so no routes were invented.
 */
export default function Footer() {
  return (
    <footer className="site-footer text-slate-400 py-12 text-xs" data-purpose="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <Link className="flex items-center gap-3" to="/">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#FFB300] p-1 bg-white/5">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="18.5" cy="17.5" r="3.5"></circle>
                <circle cx="5.5" cy="17.5" r="3.5"></circle>
                <circle cx="15" cy="5" r="1"></circle>
                <path d="M12 17.5V14l-3-3 4-3 2 3h2"></path>
                <path d="M7 6c2.5-1.5 6-1.5 8.5 0" stroke="#FFB300" strokeWidth="2.5"></path>
                <path d="M5 8.5c3-2 8-2 11 0" stroke="#FFB300" strokeWidth="1.8"></path>
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-lg font-black tracking-tight text-white leading-none">ULTRA MILES</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-[#FFB300] mt-1">DELIVERY SERVICES LLC</span>
            </div>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300 font-medium">
            {FOOTER_LINKS.map((link) =>
              link.to ? (
                <Link key={link.label} className="hover:text-[#FFB300] transition-colors" to={link.to}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} className="hover:text-[#FFB300] transition-colors" href="#">
                  {link.label}
                </a>
              ),
            )}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-400 font-medium mr-1 text-xs">Follow Us</span>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#FFB300] text-white flex items-center justify-center transition-colors"
                href="#"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d={social.path}></path>
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© 2026 Ultra Miles Delivery Services LLC. All Rights Reserved.</p>
          <p>Licensed &amp; Registered Delivery Operator in Dubai, UAE</p>
        </div>
      </div>
    </footer>
  )
}

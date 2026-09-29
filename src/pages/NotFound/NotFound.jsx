import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs uppercase font-bold tracking-widest text-brand-gold block mb-2">404</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight uppercase mb-4">Page Not Found</h1>
        <p className="text-slate-600 text-base mb-8">The page you are looking for does not exist or has been moved.</p>
        <Link
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-white font-semibold text-sm transition-all shadow-lg shadow-brand-gold/30"
          to="/"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}

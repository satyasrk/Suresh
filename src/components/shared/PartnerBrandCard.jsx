/**
 * PartnerBrandCard — one tile of the "Powering Your Deliveries" grid on Home.
 * `variant` matches the distinct visual treatments of the original six cards.
 */
export default function PartnerBrandCard({ variant }) {
  if (variant === 'noon') {
    return (
      <div className="h-20 bg-[#FFE600] rounded-xl flex items-center justify-center p-3 shadow-md">
        <span className="text-slate-900 font-extrabold text-xl tracking-tight flex items-center gap-1">
          <span>🟡</span> noon
        </span>
      </div>
    )
  }

  if (variant === 'deliveroo') {
    return (
      <div className="h-20 bg-white rounded-xl flex items-center justify-center p-3 shadow-md">
        <span className="text-[#00CDBC] font-extrabold text-lg flex items-center gap-1">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6z"></path>
          </svg>
          deliveroo
        </span>
      </div>
    )
  }

  if (variant === 'careem') {
    return (
      <div className="h-20 bg-white rounded-xl flex items-center justify-center p-3 shadow-md">
        <span className="text-[#00EA90] font-black text-xl tracking-tight">Careem</span>
      </div>
    )
  }

  if (variant === 'keeta') {
    return (
      <div className="h-20 bg-white rounded-xl flex items-center justify-center p-3 shadow-md">
        <span className="text-slate-900 font-black text-xl tracking-tight">Keeta</span>
      </div>
    )
  }

  if (variant === 'more') {
    return (
      <div className="h-20 bg-white rounded-xl flex items-center justify-center p-3 shadow-md gap-1.5 text-brand-gold">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9"></circle>
          <path d="M12 8v8M8 12h8" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <span className="text-xs sm:text-sm font-semibold text-slate-700">and more...</span>
      </div>
    )
  }

  // Default: amazon
  return (
    <div className="h-20 bg-white rounded-xl flex items-center justify-center p-3 shadow-md">
      <span className="text-slate-900 font-black text-xl tracking-tighter">amazon</span>
    </div>
  )
}

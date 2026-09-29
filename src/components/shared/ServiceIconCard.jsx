/**
 * ServiceIconCard — compact icon card for the Home "Fast & Flexible Delivery
 * Solutions" grid. Icons and labels are verbatim from index.html.
 */
export default function ServiceIconCard({ icon, label }) {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:border-brand-gold/20">
      <div className="w-14 h-14 rounded-full bg-[#F4F7FB] group-hover:bg-brand-gold/10 text-brand-navy group-hover:text-brand-gold flex items-center justify-center mb-4 transition-colors">
        {icon}
      </div>
      {/* label uses <br/> in source to control wrapping — preserved via lines */}
      <span className="text-sm font-bold text-slate-800 leading-snug text-center whitespace-pre-line">{label}</span>
    </div>
  )
}

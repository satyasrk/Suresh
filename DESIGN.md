# DESIGN.md — UltraMiles Design System

This document records the unified visual system after the consistency pass.
The legacy pages (fleet.html, partners.html, contactUs.html) each shipped their
own palette and fonts; those were consolidated into ONE system so every page
shares identical buttons, headings, and section backgrounds.

## Color tokens (single source of truth: `tailwind.config.js`)

| Token | Value | Usage |
|---|---|---|
| `brand-gold` | `#D9822B` | Primary accent: buttons, badges, links, icon accents |
| `brand-gold-hover` | `#C07122` | Hover state for all gold buttons |
| `brand-gold-light` | `#F5A623` | Bright gold accents (logo) |
| `brand-navy` | `#0C2038` | Headings on light sections; hero/section backgrounds |
| `brand-navy-dark` | `#071526` | Dark card surfaces on navy sections |
| `brand-blue` | `#0F2642` | Deep blue accents |
| `#003087` | — | CTA banner background (Home/Services/About/Fleet CTA) |
| `#F4F7FB` | — | Shared light-section background |

**Hard rule:** never introduce a second gold or navy. The legacy tokens
`fleet-gold` (#FFB300) and `partners-gold` (#feb300) still exist as class
names but are **remapped** to `#D9822B` — they are aliases, not alternates.

### Unified via remap
- Fleet page gold `#FFB300` → `#D9822B`
- Partners page gold `#feb300` / `goldLight #ffba38` → `#D9822B` / `#C07122`
- Section/hero navies `#001D59`, `#051838`, `#051424` → `#0C2038`
- Fleet/partners dark cards `#00174B`, `#051838` → `#071526`

## Typography (single type system)

| Role | Family | Weights |
|---|---|---|
| Everything (headings, body, UI) | **Inter** | 400/500/600/700/800/900 |
| Cursive accent | Caveat | 600/700 |
| Icons | Material Symbols Outlined | — |

- Headings on light sections: `font-extrabold text-brand-navy tracking-tight uppercase`
- Hero H1: `font-black` (900)
- The legacy `font-headline` / `font-body` / `font-display` / `font-mono`
  classes still exist but all resolve to Inter (aliases).

## Buttons

| Variant | Classes |
|---|---|
| Primary (gold) | `px-8 py-3.5 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-white font-bold text-sm shadow-lg shadow-brand-gold/30` — white text everywhere |
| Secondary (outline) | `px-8 py-3.5 rounded-full border border-white/60 hover:border-white text-white font-semibold text-sm hover:bg-white/10` |

## Section rhythm

- Hero sections: `bg-[#0C2038]` with image overlay
- Light sections: `bg-[#F4F7FB]` alternating with `bg-white`
- CTA banners: `bg-[#003087]`
- Footer: `rgb(5, 20, 36)`

## Do not

- Do not reintroduce `#FFB300`, `#feb300`, `#001D59`, `#051838`, `#051424` in new code.
- Do not add new font families.
- Do not use `font-bold` for section headings; headings use `font-extrabold`, heroes use `font-black`.
- Every hero H1 uses `font-black` (unified: About, Services, Fleet, Partners, Contact match Home).
- Hero accent text and badges use `*-gold` tokens only — raw `#FFB300` was removed from Header/Footer
  (logo tagline, phone CTA, hover states) in the second consistency pass.

# Migration Report — UltraMiles: Static HTML → React

## 1. Original Pages

All six static pages were inspected in full (Phase 0) and migrated:

| Original page | Migrated to | Notes |
|---|---|---|
| `index.html` | `src/pages/Home/` | Source of approved Header/Footer (RULE 3) |
| `aboutUs.html` | `src/pages/About/` | Dense single-line markup, fully expanded into JSX |
| `ourServices.html` | `src/pages/Services/` | Largest page (727 lines) incl. corporate proposal form |
| `fleet.html` | `src/pages/Fleet/` | Distinct gold `#FFB300` / navy `#003087` palette preserved |
| `partners.html` | `src/pages/Partners/` | Distinct palette + Space Grotesk / Hanken Grotesk fonts preserved |
| `contactUs.html` | `src/pages/Contact/` | Contact cards, inquiry form, live-map section, escalation banner |

Originals were **not deleted** — they were moved to `_legacy/` (Phase 17 safe-backup rule). The legacy `assets/` folder (`styles.css`, `tailwind.config.js`) was fully accounted for: its shared classes live in `src/styles/global.css`, and its Tailwind theme lives in `tailwind.config.js`.

## 2. React Routes

| Route | Page component | Old page |
|---|---|---|
| `/` | `Home` | `index.html` |
| `/about-us` | `About` | `aboutUs.html` |
| `/our-services` | `Services` | `ourServices.html` |
| `/fleet` | `Fleet` | `fleet.html` |
| `/partners` | `Partners` | `partners.html` |
| `/contact-us` | `Contact` | `contactUs.html` |
| `*` | `NotFound` | none (404 fallback added so unknown routes render inside the shared layout) |

Routing: `react-router-dom` v6 (BrowserRouter). Scroll-to-top / hash-anchor scrolling handled by a `ScrollToTop` component (preserves `#services`, `#garage`, `#corporate-quote`, `#fleet-management`, `#partner-form` anchor behavior from the static pages).

## 3. Reusable Components

| Component | Purpose |
|---|---|
| `src/components/Header/` | Approved header, used by every route |
| `src/components/Footer/` | Approved footer, used by every route |
| `src/components/shared/CtaBanner.jsx/.css` | "Delivering Across Dubai & UAE" contact banner (repeated on Home, Services, Fleet*, Contact) |
| `src/components/shared/PartnerBrandCard.jsx` | Brand tile in the Home "Powering Your Deliveries" grid (6 variants, as in source) |
| `src/components/shared/ServiceIconCard.jsx` | Compact icon card in the Home services grid |

`*` The Fleet page's CTA is a rounded-container variant unique to that page and was kept inline in `Fleet.jsx` to avoid over-abstracting. Practical boundaries only — no `<Text/>`/`<Wrapper/>` micro-components (Phase 6).

## 4. Header / Footer

Both were extracted **verbatim from `index.html`** (the declared source of truth) into shared React components and rendered once in `App.jsx` around every route. The header/footer variants inside `aboutUs.html`, `contactUs.html`, `fleet.html`, `ourServices.html`, and `partners.html` were **discarded**, per RULE 4.

- Active navigation item is derived from the current route via `NavLink` (Phase 9) — not hardcoded per page.
- The approved index header had no mobile menu; the hamburger pattern from the other legacy pages was adopted (icon-for-icon) so mobile navigation keeps working, with `aria-expanded`, `aria-controls`, labeled toggle, and route-change auto-close (Phase 13).
- Footer links now use router links where a page exists (Fleet Operations, Corporate Dispatch, Contact Support); `#` placeholders (Privacy Policy, Terms of Service) are preserved as-is — no invented routes.

## 5. CSS Migration

**Inline CSS removed** (all migrated to CSS files):
- Header phone CTA `style="background-color:#FFB300;color:#FFFFFF"` → `.header-phone-cta` (Header.css)
- Footer `style="background-color: rgb(5,20,36); border-color: rgba(255,255,255,0.08)"` → `.site-footer` (Footer.css)
- Home hero overlay gradient (inline `style` on a div) → `.home-hero-overlay` (Home.css)
- Home partners strip `style="background-color:#FFFFFF"` → `.home-partners-strip`
- Home partners section `style="background-color:#003087"` → `.home-partners-section`
- Contact map `style="background-image: url('...')"` → `.contact-map-bg` (Contact.css)
- Partners filled icons `style="font-variation-settings: 'FILL' 1"` → `.partner-icon-filled` (Partners.css)
- Various solid backgrounds carried by Tailwind arbitrary values in source were kept as Tailwind classes or page CSS classes (documented per file).

**Internal `<style>` blocks removed** (migrated to `src/styles/global.css`):
- `.material-symbols-outlined` font-variation settings (about/fleet/services/partners/contact)
- `.font-script` (Caveat)
- `.hero-gradient-overlay` (index/about), `.skyline-glow`, `.skyline-overlay` (contact), `.hero-light-gradient` (services), `.hero-dots` (partners)

**Page-specific CSS created:** `Home.css`, `About.css`, `Services.css`, `Fleet.css`, `Partners.css`, `Contact.css`, plus `Header.css`, `Footer.css`, `CtaBanner.css`.

**Shared CSS created:** `src/styles/global.css` (Tailwind layers + genuinely shared classes only).

No monolithic stylesheet was created (RULE 7).

## 6. Content Audit

Full comparison table: see **`CONTENT-AUDIT.md`**. Summary:

- **Confirmed matches** (DOCX wording = HTML wording): About page, Fleet page, Partners page — migrated verbatim.
- **Resolved per client decision (DOCX adopted):** phone number `+971 54 778 8501` (point 1), email `Operations@ultramiles.ae` (point 2), 8-service taxonomy on Services + both form dropdowns (point 4), copyright `© 2026` (point 5), Home hero headline/intro/CTAs (point 6), Business Enquiry form fields on Contact (point 9), removal of the Contact map section absent from the DOCX (point 14).
- **Preserved as HTML:** Services page hero + metrics (incl. the "160+" figure — internal inconsistency with "200+" still flagged), all other page content.
- **DOCX-only content not migrated** (would require approval): "Built to Deliver. Ready to Scale." grid, Our Vision / Our Mission / Our Values sections.
- No content was invented; no backend/API was fabricated (RULES 10, 11).

## 7. JavaScript Migration

Original interactivity inventory (Phase 7): the static site had **no external JS libraries** beyond the Tailwind CDN — all behavior was:
1. **Two inline `onsubmit` alert handlers** (contact form, services form) → converted to React `onSubmit` handlers with `preventDefault()` and identical alert text. Each contains a marked `TODO (backend integration)` configuration point where a real endpoint should be wired.
2. **Anchor links / sticky header** → preserved (sticky header class kept; hash scrolling via `ScrollToTop`).
3. **CSS-only animations** (`animate-pulse`, `animate-ping`, hover transitions) → preserved by class.
4. **Mobile navigation** → hamburger added per approved pattern (see §4).

Form validation is native HTML5 (`required`, `type="email"`, `type="tel"`), matching the original. Controlled `useState` added for the two `<select>`s per React rules — visual behavior unchanged.

## 8. Accessibility

- `class` → `className`, `for` → `htmlFor` throughout; all form controls now have explicit `<label>` associations (they were missing in source).
- Breadcrumbs wrapped in `<nav aria-label="Breadcrumb">` (were plain divs/navs without labels).
- Decorative icons marked `aria-hidden="true"`; social links keep `aria-label`.
- Mobile menu is a real `<button>` with `aria-expanded`/`aria-controls`, keyboard focusable, and closes on route change.
- Map background div got `role="img"` + `aria-label` (source had it as an unlabelled decorative div with `data-alt`).
- Semantic structure preserved: single `<h1>` per page, sections/headings in original order; header/footer/nav landmarks from the shared layout.
- The corrupted "Modern Operations" gear SVG path (invalid source markup that broke the icon) was repaired.

## 9. Performance

- Removed per-page duplicate Google Fonts requests: one combined `<link>` in `index.html` (Inter, Caveat, JetBrains Mono, Space Grotesk, Hanken Grotesk, Material Symbols).
- Replaced the runtime `cdn.tailwindcss.com` JIT script (≈110KB+ runtime, console warning) with build-time Tailwind → static 41.7KB CSS (7.9KB gzip).
- 6 duplicated header/footer implementations collapsed into 2 components.
- No image assets existed locally to dedupe (all imagery is remote Google-hosted, preserved as-is per RULE 13). `_legacy/` originals are excluded from the bundle by Vite.

## 10. Remaining TODOs

1. ~~Client verification of contact details~~ → **Resolved:** DOCX phone `+971 54 778 8501` and email `Operations@ultramiles.ae` adopted across all pages (client decision, 2026-09-29).
2. **Fleet-size wording** — reconcile "160+" (services hero/stats) vs "200+" in the approved copy.
3. **Backend integration** — both forms currently preserve the original alert-only behavior; wire the form submit handlers to a real endpoint (marked with `TODO (backend integration)`).
4. **Placeholder links** — Privacy Policy / Terms of Service point to `#` in the approved footer; create pages/routes if/when approved content exists.
5. **DOCX-only content** — Vision/Mission/Values sections need approval before any page/section is added.
6. **`_legacy/` cleanup** — delete the backup folder once the React version is signed off.
7. **Client-commented sections in `Services.jsx`** — "How We Work: 4-Step Pipeline" and "Corporate Service Request Form" are intentionally commented out per client instruction; their data arrays remain for re-enabling.

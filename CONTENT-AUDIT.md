# Content Audit — UltraMiles (HTML vs DOCX)

> **UPDATE (2026-09-29):** Per client decision, discrepancies at audit points **1, 2, 4, 5, 6, 9 and 14** were **resolved in favor of the DOCX**. All other points were resolved in favor of the live HTML (approved implementation). Details in the tables below.

Source documents compared:
- **HTML (6 pages):** `index.html`, `aboutUs.html`, `contactUs.html`, `fleet.html`, `ourServices.html`, `partners.html`
- **DOCX:** `Ultra_Miles_Complete_Website_Content (1).docx` ("Complete Website Content | 2026")

Resolution rule applied: live HTML is the approved implementation **except where explicitly overridden by the client decision noted above** (those points use the DOCX as the approved source).

## Cross-cutting discrepancies

| # | Item | HTML | DOCX | Status / Action |
|---|------|------|------|-----------------|
| 1 | Phone number | `+971 54 719 7534` on every page (header, CTAs, footer) | `+971 54 778 8501` | ✅ **RESOLVED — DOCX adopted** (client decision). All React pages/components now use `+971 54 778 8501` / `tel:+971547788501`. |
| 2 | Email addresses | `info@ultramiles.ae` + `dispatch@ultramiles.ae` (contactUs) | `Operations@ultramiles.ae` | ✅ **RESOLVED — DOCX adopted** (client decision). Contact page now shows only `Operations@ultramiles.ae`. |
| 3 | Fleet size | Mixed inside HTML: hero copy says **160+ bikes** (services hero, stats), all other sections say **200+** (fleet page, about, partners) | `200+ owned vehicles` consistently | **Internal HTML inconsistency** (160+ vs 200+). Home hero paragraph (160+) was replaced by DOCX intro text (see point 6); remaining "160+" instances live on the Services page (hero card + metrics) which retains its approved HTML hero. Flagged for client decision. |
| 4 | Services list | Services page had 6 services | 8 services (Last-Mile, E-Commerce, Food & Restaurant, Grocery & Retail, On-Demand, Dedicated Fleet, B2B, 3PL) | ✅ **RESOLVED — DOCX adopted** (client decision). Services page now renders the 8 DOCX services; contact + corporate form service dropdowns updated to match. |
| 5 | Copyright year | `© 2025` (all pages) | `© 2026` | ✅ **RESOLVED — DOCX adopted** (client decision). Footer now shows `© 2026`. |
| 6 | Home hero headline | "YOUR TRUSTED DELIVERY PARTNER IN DUBAI" | "Your Business. Our Fleet. Every Mile Delivered." | ✅ **RESOLVED — DOCX adopted** (client decision). Home hero now uses the DOCX headline + intro paragraph; CTA labels "Partner With Us" / "Explore Our Services" per DOCX. |
| 7 | Home sections | Hero, partners strip, metrics, about teaser, partners highlight, services grid, CTA banner | Home includes "Built to Deliver. Ready to Scale." 6-card capability grid (not in HTML) | **DOCX-only section.** Not added (would require new design/layout approval). Listed as DOCX surplus. |
| 8 | Vision / Mission / Values sections | Not present in any HTML page | Full sections in DOCX | **DOCX-only content.** Not migrated; flagged as candidate future sections pending approval. |
| 9 | Contact form fields | Full Name*, Company Name, Work Email*, UAE Phone*, Inquired Service*, Fleet Size/Volume, Detailed Message | Business Enquiry: Full Name, Company Name, Business Email, Contact Number, Service Required, Delivery Location, Estimated Daily Delivery Volume, Fleet Requirement, Message | ✅ **RESOLVED — DOCX adopted** (client decision). Contact form rebuilt with the DOCX "Business Enquiry" fields and labels. |
| 10 | Partners list | Amazon, Porter, Noon, Careem, Deliveroo, Talabat, InstaShop, Keeta | Same | ✅ **Match** — migrated as-is. |
| 11 | About page content | Company Overview, quote, Our Approach (5 pillars), stats, Why Ultra Miles (6 cards) | Same content, same wording | ✅ **Match** — DOCX confirms HTML wording. |
| 12 | Fleet page content | Hero verbatim, Our Own Garage, 8 fleet-management focus areas, tagline | Same content, same wording | ✅ **Match** — DOCX confirms HTML wording. |
| 13 | Footer | Three footer variants exist in HTML; index footer is approved | Footer with Quick Links incl. "Vision & Mission" | **Per RULE 3:** only `index.html` footer used for every React page. Other footers discarded. DOCX "Vision & Mission" link not added (no such page exists). |
| 14 | Contact page map section | "Dubai Central Hub & Network Nodes" map section with live-dispatch stats and coordinates | **Not in DOCX** | ✅ **RESOLVED — section removed** (client decision): not part of the approved DOCX content. Map background CSS class `.contact-map-bg` retained in Contact.css but unused. |
| 15 | Services page stats | 99.8% SLA, < 120 Min windows, 160+ Units, 24/7/365 | Not in DOCX in this form | Kept HTML verbatim (see item 3 regarding the 160+ figure). |
| 16 | Legal/footer links | Privacy Policy, Terms of Service → `href="#"` placeholders | Privacy Policy, Terms & Conditions | Kept HTML placeholders (no target pages exist; no invented routes). |

## Page-by-page summary

| Page | Sections found in HTML | DOCX status | Action |
|------|------------------------|-------------|--------|
| Home (index) | Hero, Top Partners strip, Key metrics (5), About teaser, Partners highlight (6 cards), Services grid (6 cards), CTA banner | Hero headline + CTAs resolved to DOCX (point 6) | Keep HTML structure; DOCX hero content |
| About | Inner hero, Company Overview + quote + 3 facility images, Our Approach (5), Stats bar (4), Why Ultra Miles (6), CTA banner | Match (confirms wording) | Keep HTML |
| Services | Hero, Metrics (4), 6 detailed service cards, 4-step pipeline, Corporate proposal form, CTA banner | 8-service taxonomy resolved to DOCX (point 4); pipeline + corporate form commented out by client in code | Keep structure; render 8 DOCX services |
| Fleet | Hero, Stats strip (4), Our Own Garage, Fleet Management (8 cards + tagline), CTA banner | Match (confirms wording) | Keep HTML |
| Partners | Hero + stats card, 8 partner cards, quote, 9 operational capabilities, concluding note | Match (confirms wording) | Keep HTML |
| Contact | Hero, 4 contact cards, inquiry form, map + live stats, escalation banner | Phone/email (points 1–2), form fields (point 9) resolved to DOCX; map section removed (point 14) | Keep structure; DOCX contact details + form |

## Items requiring client verification (do not resolve silently)

1. ~~**Phone number**~~ → **Resolved: DOCX value `+971 54 778 8501` adopted.**
2. ~~**Email**~~ → **Resolved: DOCX value `Operations@ultramiles.ae` adopted.**
3. **Fleet size wording:** 160+ (services hero + stats) vs 200+ (everywhere else) — both inside the approved HTML; still open for client decision.
4. **DOCX-only content not migrated:** "Built to Deliver. Ready to Scale." home grid; Our Vision / Our Mission / Our Values sections.

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Approved palette (single source of truth — from index.html)
        brand: {
          gold: '#D9822B',
          'gold-hover': '#C07122',
          'gold-light': '#F5A623',
          navy: '#0C2038',
          'navy-dark': '#071526',
          'navy-light': '#152E4D',
          blue: '#0F2642',
        },
        // Legacy fleet.html tokens — REMAPPED to the approved brand values so
        // Fleet page buttons/badges match the rest of the site exactly.
        // (was: gold #FFB300, gold-hover #E09E00, navy #003087)
        fleet: {
          gold: '#D9822B',
          'gold-hover': '#C07122',
          'gold-light': '#F5A623',
          navy: '#0C2038',
          'navy-dark': '#071526',
          'navy-deep': '#071526',
          'navy-light': '#152E4D',
        },
        // Legacy partners.html tokens — REMAPPED to the approved brand values
        // so Partners page accents match the rest of the site exactly.
        // (was: navy #001d59, blue #003087, gold #feb300, goldLight #ffba38)
        partners: {
          navy: '#0C2038',
          blue: '#003087',
          dark: '#071526',
          gold: '#D9822B',
          goldLight: '#C07122',
          goldSoft: '#F5A623',
          slate: '#0f172a',
          muted: '#475569',
          light: '#f8fafc',
          border: '#e2e8f0',
        },
      },
      fontFamily: {
        // Single site-wide type system (approved fonts from index.html).
        // Legacy display/mono families (Space Grotesk, Hanken Grotesk,
        // JetBrains Mono) are aliased to the approved families so the
        // Partners / Fleet pages render with the same typography.
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        script: ['Caveat', 'Brush Script MT', 'cursive'],
        mono: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        headline: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

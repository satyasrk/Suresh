/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Approved palette from index.html (source of truth)
        brand: {
          gold: '#D9822B',
          'gold-hover': '#C07122',
          'gold-light': '#F5A623',
          navy: '#0C2038',
          'navy-dark': '#071526',
          'navy-light': '#152E4D',
          blue: '#0F2642',
        },
        // Palette used by fleet.html / partners.html (kept so migrated
        // page-specific styling from those pages stays pixel-accurate)
        fleet: {
          gold: '#FFB300',
          'gold-hover': '#E09E00',
          'gold-light': '#FFDEAC',
          navy: '#003087',
          'navy-dark': '#001D59',
          'navy-deep': '#00174B',
          'navy-light': '#1C4197',
        },
        partners: {
          navy: '#001d59',
          blue: '#003087',
          dark: '#051838',
          gold: '#feb300',
          goldLight: '#ffba38',
          goldSoft: '#fff8e7',
          slate: '#0f172a',
          muted: '#475569',
          light: '#f8fafc',
          border: '#e2e8f0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        script: ['Caveat', 'Brush Script MT', 'cursive'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
        headline: ['Space Grotesk', 'sans-serif'],
        body: ['Hanken Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B1021', // Midnight Blue
        primary: '#00D1FF',
        accent: '#FFB800',
        text: '#E2E8F0',
        muted: '#94A3B8',
        card: '#151C33',
        cardBorder: '#232D4E',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #232D4E 1px, transparent 1px), linear-gradient(to bottom, #232D4E 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}

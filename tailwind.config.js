/** @type {import('tailwindcss').Config} */
const tokens = {
  bef500: '#0B7A44',
  bef600: '#0A6B3D',
  gold: '#C9A52B',
  bg: '#F7F7F8',
  text: '#0F172A',
  muted: '#6B7280'
}
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        bef: { 500: tokens.bef500, 600: tokens.bef600, gold: tokens.gold },
        bg: tokens.bg,
        text: tokens.text,
        muted: tokens.muted
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      },
      borderRadius: { 'lg': '12px' }
    }
  },
  plugins: []
}

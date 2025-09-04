/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lapis: '#0F4C75',
        ruby: '#D32F2F',
        emerald: '#2E8B57',
        sand: '#F4E4BC',
        stone: '#A9A9A9',
        brown: '#8B4513',
        gold: '#FFD700',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  safelist: [
    'from-gold-400',
    'to-gold-400',
    'from-emerald-400',
    'to-emerald-400',
    'from-ruby-400',
    'to-ruby-400',
    'from-lapis-400',
    'to-lapis-400',
  ],
}

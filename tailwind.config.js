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
        lapis: {
          DEFAULT: '#0F4C75',
          light: '#3282B8',
          dark: '#1B262C',
        },
        charcoal: '#121212',
        sunrise: '#FFD700',
        snow: '#FFFFFF',
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'sunrise-gradient': 'linear-gradient(to right, #0F4C75, #FFD700)',
      }
    },
  },
  plugins: [],
}

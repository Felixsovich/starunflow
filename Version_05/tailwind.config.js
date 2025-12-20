/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Unbounded', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'base-dark': '#0a0a0a',
        'base-card': '#121212',
        'trend-purple': '#5e17eb',
        'trend-lime': '#dbf246',
        'trend-gray': '#b6bac5',
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        },
      },
    },
  },
  plugins: [],
}
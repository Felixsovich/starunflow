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
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'base-cream': '#F0EFEA',
        'base-dark': '#1C1B1A',
        'trend-purple': '#5e17eb',
        'trend-lime': '#dbf246',
        'trend-brown': '#4a3b32',
        'trend-lilac': '#c4b5fd',
      },
      backgroundImage: {
        'gradient-fashion': 'linear-gradient(135deg, #F0EFEA 0%, #E6E2DD 100%)',
      },
      animation: {
        'breathe': 'breathe 10s ease-in-out infinite alternate',
      },
      keyframes: {
        breathe: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.1) translate(-20px, 20px)' },
        }
      }
    },
  },
  plugins: [],
}
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
        mono: ['Space Mono', 'monospace'], // Added Space Mono if available, fallback to system
      },
      colors: {
        'base-cream': '#F0EFEA', // Keep for contrast if needed, but we focus on dark
        'base-dark': '#0a0a0a', // Deeper black like Igloo
        'base-card': '#121212',
        'trend-purple': '#5e17eb',
        'trend-lime': '#dbf246',
        'trend-gray': '#b6bac5', // Igloo primary gray
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 100%)',
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
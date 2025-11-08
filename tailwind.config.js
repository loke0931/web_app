/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#6366F1', // Indigo 500
        'brand-secondary': '#EC4899', // Pink 500
        'brand-dark': '#111827', // Gray 900
        'brand-light': '#F9FAFB', // Gray 50
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

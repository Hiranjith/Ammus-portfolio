/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // enable dark mode by toggling the class
  theme: {
    extend: {
      colors: {
        darkBg: '#111111',
        darkCard: '#1a1a1a',
        darkText: '#e0e0e0',
        lightBg: '#fdfbf7',
        lightCard: '#f5f0e6',
        primary: '#a85a3c',
        primaryHover: '#8c4930',
        lightText: '#333333',
        grayText: '#777777',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        cursive: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
}

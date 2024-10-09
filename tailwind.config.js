/** @type {import('tailwindcss').Config} */
const scrollbarHide = require('tailwind-scrollbar-hide');
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#0c0c0c',
      },
    },
  },
  plugins: [scrollbarHide],
};

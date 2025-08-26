/** @type {import('tailwindcss').Config} */
const scrollbarHide = require('tailwind-scrollbar-hide');

module.exports = {
  darkMode: false,
  content: [
    './index.html', // <- tambahkan ini biar index.html ke-scan
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#0c0c0c',
      },
    },
    keyframes: {
      rain: {
        '0%': { transform: 'translateY(-100%)', opacity: '0' },
        '50%': { transform: 'translateY(50%)', opacity: '0.5' },
        '100%': { transform: 'translateY(100%)', opacity: '0' },
      },
    },
    animation: {
      rain: 'rain 2s linear infinite',
    },
  },
  plugins: [scrollbarHide],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation:{
        'fade-down':'fadeDown 2s'
      }
    },
  },
  plugins: [],
}
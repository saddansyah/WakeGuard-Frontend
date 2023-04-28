/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0F8494",
        "secondary": "#46BAB3",
        "accent": "#4676D2",
      },
      screens: {
        'xs': '387px',
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite NL Guides"', 'serif'], // আপনার ফন্টের নাম
      },
    },
  },
  plugins: [
    require('daisyui'),
  
  ],
}


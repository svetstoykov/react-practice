/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "aqua": "#3db4ac",
        "aqua-dark": "#147B74",
        "secondary-text": "#989898",
      },
      fontFamily: {
        commisioner: ['"Commissioner"', "sans-serif"],
      }
    },
  },
  plugins: [],
}


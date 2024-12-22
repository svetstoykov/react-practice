/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
      },
      colors: {
        "light-gray": "#9A97A7",
        "coral": "#F67464"
      },
    },
  },
  plugins: [],
};

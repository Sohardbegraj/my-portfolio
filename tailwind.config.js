/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        teal:"#635985",
        amber:"#18122B",
        silver:"#2b2b2b"
      }
    },
  },
  plugins: [],
}
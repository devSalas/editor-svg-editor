/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#e8e8e8"
      },
      boxShadow: {
        'circle': ' 0px 0px 150px 80px #000000'
      }
    },
  },
  plugins: [],
}


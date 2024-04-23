/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors:{
        orange:'#ffa94d',
        blueQuiz:'#1098ad',
        light:'#f1f3f5',
        gray:"#18212f",
        gray100:"#1f2937",
        gray_300:"#4b5563",
        gray_0:"#18212f",
        diableColor:"#374151",
        gray500:"#9ca3af"

      }
    },
  },
  plugins: [],
}


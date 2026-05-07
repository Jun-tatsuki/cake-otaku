/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        copper: [
          "Copperplate",
          "Copperplate Gothic Light",
          "Copperplate Gothic",
          "Palatino",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};

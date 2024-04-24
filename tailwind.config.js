/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#D5DAE1",
        },
        black: {
          DEFAULT: "#000",
          200: "#5D6D7E",
          300: "#2E4053",
          400: "#283747",
          500: "#1D2235",
        },
        blue: {
          500: "#2b77e7",
        },
        darkGreen: {
          900: "#0D1F23",
          700: "#132E35",
          500: "#2D4A53",
          300: "#68918D",
        },
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  // plugins: [],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};

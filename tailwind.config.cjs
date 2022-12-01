/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        space: "url('./src/assets/image/space.jpeg')",
      },
      colors: {
        primary: "#222831",
        secondary: "#1D222A",
        tertiary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        gray: "#393E46",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

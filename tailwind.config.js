/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#A1C4B7",
        secondary: "#65718C",
        tertiary: "#65718C",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "brown-100": "#666054",
      },
      boxShadow: {
        card: "0px 35px 70px -15px #211e35",
        def: '0px 4px 4px 0px rgba(0,0,0,0.5)'
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpg')",
      },
    },
  },
  plugins: [],
};

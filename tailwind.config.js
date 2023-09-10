/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      colors: {
        bg_header: "#FFFBF0",
        primary_color: "#363958",
        secendary_color: "#3E3E3E",
        yellow_color: "#FABE4C",
        menu_color: "#3C3C3C",
        penguin_color: "#A4BC46",
        button_start: "#A4BC46 ",
        button_end: "#85A019",
        jacket_bg: "#F1F1F1",
      },
      boxShadow: {
        card_shadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};

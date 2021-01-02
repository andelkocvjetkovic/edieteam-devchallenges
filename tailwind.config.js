const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ["Poppins", ...defaultTheme.fontFamily.serif],
        sans: ["Merriweather", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

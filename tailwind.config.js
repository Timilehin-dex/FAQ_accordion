/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        lightPink: "hsl(275, 100%, 97%)",
        grayishPurple: "hsl(292, 16%, 49%)",
        darkPurple: "hsl(292, 42%, 14%)",
      },
      fontSize: {
        s: ["0.95rem", "1.25rem"],
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.865, 0.14, 0.095, 0.87)",
      },
    },
  },
  plugins: [require("daisyui")],
};

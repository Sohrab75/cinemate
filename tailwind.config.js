/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'xsm': '360px', // Custom breakpoint for extra small mobile devices
        // You can also add or override the existing breakpoints if needed
      },
    },
  },
  plugins: [],
};

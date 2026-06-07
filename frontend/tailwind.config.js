/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#5aad4e",
        "green-dark": "#449a38",
        teal: "#2d8a9e",
        "teal-dark": "#1f6270",
        dark: "#1a1a2e",
      },
      fontFamily: {
        montserrat: ["Montserrat", "system-ui", "sans-serif"],
        opensans: ["Open Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
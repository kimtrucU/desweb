/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        green: "#5aad4e",
        teal: "#2d8a9e",
        dark: "#1a1a2e",
      },
      fontFamily: {
        montserrat: ["Montserrat", "system-ui"],
        opensans: ["Open Sans", "system-ui"],
      },
    },
  },
  plugins: [],
};

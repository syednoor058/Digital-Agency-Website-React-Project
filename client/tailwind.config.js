/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',           // Include index.html in root
    './src/**/*.{js,ts,jsx,tsx}', // All files in src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
        accentFont: ["Satisfy", "sans-serif"],
      },
      colors: {
        lightPrimary: "#ffffff",
        lightSecondary: "#85938b",
        darkPrimary: "#121212",
        darkSecondary: "#414141",
        accentColor: "#c8f31d",
      }
    },
  },
  plugins: [],
}
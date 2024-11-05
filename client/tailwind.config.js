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
      },
      colors: {
        lightPrimary: "#FFFFFF",
        lightSecondary: "#999999",
        darkPrimary: "#121212",
        darkSecondary: "#1B1B1B",
        accentColor: "#c8f31d",
        lightTitleText: "#FFFFFF",
        lightBodyText: "#999999",
        darkTitleText: "#121212",
        darkBodyText: "#212529",
      }
    },
  },
  plugins: [],
}
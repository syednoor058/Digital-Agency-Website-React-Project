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
        lightPrimary: "#F5F7FA",
        lightSecondary: "#E8EBEF",
        darkPrimary: "#2E2F36",
        darkSecondary: "#44454D",
        accentColor: "#c8f31d",
        lightTitleText: "#E1E3E7",
        lightBodyText: "#B9BABC",
        darkTitleText: "#33363D",
        darkBodyText: "#5A5D65",
      }
    },
  },
  plugins: [],
}
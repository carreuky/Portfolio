/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C1678", // Defines the primary color
        agani: "#1e1e1e",

      },
      backgroundColor: {
        primary: "#1C1678", // Uses the same color for background
        agani: "#1e1e1e",
      },
    },
  },
  plugins: [],
};
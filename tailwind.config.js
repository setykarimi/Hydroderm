/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      blue:  "#3156A4",
      white: "#fff",
      gray: "#3C3C3C"
    },
    boxShadow: {
      md: '0px 2px 6px 0px rgba(49, 86, 164, 0.50)'
    }
  },
  plugins: [],
}
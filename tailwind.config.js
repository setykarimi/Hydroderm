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
      gray: "#3C3C3C",
      transparent: "transparent"
    },
    boxShadow: {
      xs: '0px 1px 6px 0px #D3DCEE',
      sm: '0px 2px 4px 0px #BDCBE6',
      md: '0px 2px 6px 0px rgba(49, 86, 164, 0.50)'
    }
  },
  plugins: [],
}
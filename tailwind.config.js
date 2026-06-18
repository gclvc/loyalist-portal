/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-tint": "#6c26f6",
        "primary": "#4500ae",
        "mint-accelerator": "#61EE80",
        "pure-white": "#FFFFFF",
        "loyalist-purple": "#5F00EA",
        "background": "#050505",
        "stark-black": "#0E0E0E",
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

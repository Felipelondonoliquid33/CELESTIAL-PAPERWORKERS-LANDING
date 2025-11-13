/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'celestial-blue': '#003366',
        'celestial-teal': '#4F97A3',
        'celestial-gray': '#434F85',
        'celestial-light': '#BBC6CC',
        'celestial-bg': '#E0E5EC',
      },
    },
  },
  plugins: [],
}
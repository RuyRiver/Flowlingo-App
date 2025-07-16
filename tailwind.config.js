/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "flowlingo-green": "#02D87E",
        "flowlingo-green-dark": "#58CC02",
        "flowlingo-purple": "#CE82FF",
        "flowlingo-teal": "#00CD9C",
        "flowlingo-orange": "#F59E0B",
        "flowlingo-yellow": "#FFC800",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

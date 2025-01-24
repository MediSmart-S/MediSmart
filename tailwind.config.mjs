/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      colors: {
        primary: {
          50: "#effefb",
          100: "#cafdf7",
          200: "#95faf1",
          300: "#58f0e7",
          400: "#25dcd7",
          500: "#0cb8b6",
          600: "#07999a",
          700: "#0a797b",
          800: "#0d6062",
          900: "#105051",
          950: "#022d31",
        },
      },
      backgroundImage: {
        hero: "url('/images/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};

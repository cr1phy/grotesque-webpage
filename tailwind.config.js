/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["PlayfairDisplay", "serif"],
        playfairItalic: ["PlayfairDisplay-Italic", "serif"],
        marxiana: ["TTMarxiana-Antiqua", "serif"],
        marxianaItalic: ["TTMarxiana-AntiquaItalic", "serif"],
        marxianaElzevir: ["TTMarxiana-Elzevir", "serif"],
        southern: ["Southern", "serif"],
      },
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-right": "slideRight 0.7s ease-out",
        "slide-left": "slideLeft 0.7s ease-out",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': "375px",
      'md': "768px",
      'lg': "1440px"
    },
    extend: {
      colors: {
        stone100: "hsl(30, 54%, 90%)",
        stone150: "hsl(30, 18%, 87%)",
        stone600: "hsl(30, 10%, 34%)",
        stone900: "hsl(24, 5%, 18%)",
        brown800: "hsl(14, 45%, 36%)",
        rose800:  "hsl(332, 51%, 32%)",
        rose50:   "hsl(330, 100%, 98%)",
        lightBrown: "rgb(239, 224, 206)"
      }
    },
    fontFamily: {
        YoungSerif: ['"Young Serif"'],
        Outfit: ['Outfit']
    }
  },
  plugins: [],
}


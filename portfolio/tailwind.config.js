/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: () => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
      animation: {
        'border-move': 'border-move 12s linear infinite forwards',
        'bounce-slow': 'bounce 5s linear infinite'
      },
      keyframes: {
        'border-move': {
          '0%': {
            'border-radius': '51% 49% 34% 66% / 39% 66% 34% 61%'
          },
          '10%': {
            'border-radius': '39% 61% 38% 62% / 53% 54% 46% 47%'
          },
          '20%': {
            'border-radius': '56% 44% 52% 48% / 57% 35% 65% 43%'
          },
          '30%': {
            'border-radius': '41% 59% 45% 55% / 33% 56% 44% 67%'
          },
          '40%': {
            'border-radius': '46% 54% 60% 40% / 55% 74% 26% 45%'
          },
          '50%': {
            'border-radius': '44% 56% 22% 78% / 31% 74% 26% 69%'
          },
          '60%': {
            'border-radius': '31% 69% 32% 68% / 31% 71% 29% 69%'
          },
          '70%': {
            'border-radius': '44% 56% 60% 40% / 63% 36% 64% 37%'
          },
          '80%': {
            'border-radius': '46% 54% 38% 62% / 44% 48% 52% 56%'
          },
          '90%': {
            'border-radius': '66% 34% 57% 43% / 49% 51% 49% 51%'
          },
          '100%': {
            'border-radius': '51% 49% 34% 66% / 39% 66% 34% 61%'
          },
        }
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}


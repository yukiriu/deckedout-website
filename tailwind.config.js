module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
        '11xl': '9rem',
        '12xl': '10rem',
        '13xl': '11rem',

      },
      rotate: {
        '20': '20deg',
        '25': '25deg',
        '35': '35deg',
        '-20': '-20deg',
        '-25': '-25deg',
        '-35': '-35deg'
      },
      spacing: {
        '36' : '9rem',
        '40' : '10rem',
        '44' : '11rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem'
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
        breathe: "breathe 5s ease-out infinite normal",
        hover: "hover 5s ease-in-out infinite normal",
        ySpin: "ySpin 1s linear 5 normal"

      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        breathe: {
          "0%": { transform: "scale(0.9), translateY(10)", },
          "25%": { transform: "scale(1)" },
          "60%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(0.9)" },
        },
        hover: {
          "0%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(0,-10%)" },
          "100%": { transform: "translate(0,0)" }
        },
        ySpin: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" }
        }
      },
    },
    variants: {},
    plugins: [],
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 576px) { ... }

      'md': '680px',
      // => @media (min-width: 960px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      backgroundImage: {
        'footer-texture': "url('..IMAGES/stars.35821529.svg')",
      }
    },
  },
  plugins: [],
}


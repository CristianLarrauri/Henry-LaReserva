/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        appear: 'appear 1s ease-in-out forwards',
      },
      keyframes: {
        appear: {
          from: {opacity: 0},
          to: {opacity: 1}
        }
      }
    },
  },
  plugins: [],
};

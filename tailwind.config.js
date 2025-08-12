/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montreal: ['NeueMontreal', 'sans-serif'],
        grotesk: ['FoundersGrotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      spacing: {
        18: '4.5rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}

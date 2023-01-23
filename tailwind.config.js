/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      formButton: '#EF6B4A',
      formOutline: "#6251DD",
      formRegister: "#6251DD",
      formInputBackground: "#F4F4FF",
      formText: "#090937"
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

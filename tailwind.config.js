/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        buttonBackground: "#E60000",
      },
      textColor: {
        errorText: "#E60000",
      },
    },
  },
  plugins: [],
};

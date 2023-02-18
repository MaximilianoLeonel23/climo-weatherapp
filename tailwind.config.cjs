/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "0.75rem",
        sm: "0.75rem",
        lg: "2rem",
      },
      
    },
    extend: {
      colors: {
        "primary-yellow": "#FCD307",
        "primary-pink": "#EE4266",
        "primary-blue": "#170B60",
      },
      minWidth: {
        "40": "10rem"
      }
    },
  },
  plugins: [],
};

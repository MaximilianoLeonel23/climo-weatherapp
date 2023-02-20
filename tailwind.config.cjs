/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1rem",
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
      }, 
      width: {
        "101": "25rem"
      }, 
     
    },
  },
  plugins: [],
};

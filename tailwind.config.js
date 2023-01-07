/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
      md: { max: "767px" },
    },
    extend: {
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      fontWeight: {
        "w-regular": 400,
        "w-bold": 700,
      },
      colors: {
        "very-dark-desaturated-blue": "hsl(238, 29%, 16%)",
        "soft-red": "hsl(14, 88%, 65%)",
        "soft-violet": "hsl(273, 75%, 66%)",
        "soft-blue": "hsl(240, 73%, 65%)",
        "very-dark-grayish-blue": "hsl(237, 12%, 33%)",
        "dark-grayish-blue": "hsl(240, 6%, 50%)",
      },
    },
  },
  plugins: [],
};

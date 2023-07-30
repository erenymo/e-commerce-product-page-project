/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        black: "hsl(0, 0%, 0%)",
      },

      fontFamily: {
        primary: "Kumbh Sans",
      },

      width: {
        128: "68.75rem",
        108: "35rem",
        mobile: "56rem",
        86: "22rem",
      },
      height: {
        128: "68.75rem",
        110: "35rem",
      },

      maxWidth: {
        128: "68.75rem",
      },

      translate: {
        100: "100%",
        200: "200%",
        300: "300%",
        400: "400%",
      },
    },
  },
  plugins: [],
};

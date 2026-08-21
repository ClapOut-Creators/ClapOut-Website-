/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#EC612C",
          yellow: "#FFC93C",
          dark: "#111111",
          greyDark: "#90EE90",
          footer: "#0C0C0C",
        },
        text: {
          body: "#464646",
        },
        border: {
          hairline: "#DDDDDD",
          button: "#CFCFCF",
        },
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        sfpro: ["-apple-system", "SF Pro Text", "Helvetica Neue", "sans-serif"],
      },
      borderRadius: {
        pill: "58px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#EC612C",
          yellow: "#FFC93C",
          dark: "#111111",
          greyDark: "#4C4C4C",
          footer: "#0C0C0C",
        },
        text: {
          body: "#464646",
        },
        border: {
          hairline: "#DDDDDD",
          button: "#CFCFCF",
        },
        dark: {
          bg: "#0C0C0C",
          surface: "#161616",
          border: "rgba(255,255,255,0.08)",
          body: "#A3A3A3",
        },
      },
      fontFamily: {
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

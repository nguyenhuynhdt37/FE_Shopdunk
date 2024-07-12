/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        item: "2px 1px 28px 0px rgb(0 0 0 / 12%)",
        button_color: "inset 1px 1px 2px rgb(0 0 0 / 10%);",
      },
      spacing: {
        4.5: "2rem",
      },
      fontSize: {
        "2.5xl": "1.8rem",
        "1.5xl": "1.4rem",
      },
      borderWidth: {
        1: "1px",
      },
      padding: {
        "reduce-2": "2px",
      },
      width: {
        43: "10rem",
      },
      height: {
        42: "9.1rem",
      },
      padding: {
        4.5: "1.5rem",
        3.5: "0.8rem",
      },
      colors: {
        primary1: "#0066CC",
        "color-old": "#999",
      },
    },
  },
  plugins: [],
};

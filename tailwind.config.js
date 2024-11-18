/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        toledo: ["Toledo-Bold", "serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#222",
            "h1, h2, h3": {
              fontWeight: "700",
              letterSpacing: "-0.02em",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

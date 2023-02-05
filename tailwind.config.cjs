/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-range": {
          0: "#00FF00",
          1: "#33ff00",
          2: "#66ff00",
          3: "#99ff00",
          4: "#ccff00",
          5: "#ffff00",
          6: "#ffcc00",
          7: "#ff9900",
          8: "#ff6600",
          9: "#ff3300",
          10: "#ff0000",
        }
      },
    },
  },
  plugins: [],
});

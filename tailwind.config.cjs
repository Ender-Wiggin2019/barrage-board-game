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
  // safeList : [
  //   'bg-red-700',
  //   'bg-orange-700',
  //   'bg-amber-700',
  //   'bg-yellow-600',
  //   'bg-amber-700',
  //   'bg-lime-600',
  //   'bg-lime-800',
  //   'bg-green-700',
  //   'bg-gray-500',
  //   'bg-gray-700',
  //   'bg-gray-800',
  //   'bg-gray-900',
  // ],
  plugins: [],
});

const plugins = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{jsx,js,tx,tsx}"],
  theme: {
    backgroundImage: {
      "f1-pic": "url('./components/media/f1bg.jpg')",
      "log-in": "url('./components/media/rbbg.jpg')",
    },
    extend: {},
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/aspect-ratio"),
    ],
  },
};

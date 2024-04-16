// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#4391E5",
          default: "#002854",
          dark: "#157EB5",
        },
        gray: {
          faintgrey:"#E1E1E2"
        },
      },
    },
  },
  plugins: [],
};

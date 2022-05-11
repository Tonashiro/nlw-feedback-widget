module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#996DFF",
          500: "#8257e6"
        },
        darkMode: {
          bg: "#27272A",
          component: "#3F3F46",
          hover: "#18181B"
        },
        lightMode: {
          bg: "#F4F4F5",
          component: "#F4F4F5",
          text: "#27272A",
        }
      },
      borderRadius: {
        md: "4px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
};

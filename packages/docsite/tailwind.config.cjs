/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Rubik Variable", "sans-serif"],
    },
    extend: {
      colors: {
        background: {
          light: "#F6F6F8",
        },
        "rich-black": "#181225",
        violet: "#584774",
        border: "#edeaf0",
        "violet-light": "#79628C",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

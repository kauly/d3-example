/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".axis": {
          fontSize: "18px",
          shapeRendering: "geometricPrecision",
        },
        ".bar-labels": {
          fontSize: "18px",
          textAnchor: "middle",
        },
        ".mean-line": {
          stroke: "#d62828",
          strokeDasharray: 6,
          strokeWidth: 2,
        },
      });
    }),
  ],
};

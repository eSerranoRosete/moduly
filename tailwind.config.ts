import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          "50": "#EDEEF0",
          "100": "#B0B4BA",
          "200": "#777B84",
          "300": "#696E77",
          "400": "#5A6169",
          "500": "#43484E",
          "600": "#363A3F",
          "700": "#2E3135",
          "800": "#272A2D",
          "900": "#212225",
          "950": "#18191B",
          full: "#111113",
        },
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.2s ease-in-out",
        "fade-out": "fadeOut 0.2s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;

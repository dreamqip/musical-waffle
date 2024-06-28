import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        DEFAULT: "1120px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Raleway Variable", fontFamily.sans],
      },
      fontSize: {
        xs: ["12px", "125%"],
        sm: ["14px", "125%"],
      },
      colors: {
        stromboli: {
          50: "#f1f5fd",
          100: "#dfe8fa",
          200: "#c6d6f7",
          300: "#9fbcf1",
          400: "#7298e8",
          500: "#5175e0",
          600: "#3c59d4",
          700: "#3346c2",
          800: "#2f3b9e",
          900: "#2e3a87",
          950: "#1e234d",
        },
        reef: {
          50: "#efffee",
          100: "#d8ffd8",
          200: "#a5ffa3",
          300: "#79fd78",
          400: "#37f236",
          500: "#0ddb0c",
          600: "#04b603",
          700: "#078e07",
          800: "#0b700b",
          900: "#0c5b0e",
          950: "#003302",
        },
        sun: {
          50: "hsl(48, 100%, 96%)",
          100: "hsl(50, 93%, 89%)",
          200: "hsl(49, 93%, 77%)",
          300: "hsl(48, 93%, 65%)",
          400: "hsl(45, 94%, 56%)",
          500: "hsl(39, 89%, 52%)",
          600: "hsl(33, 92%, 44%)",
          700: "hsl(27, 87%, 37%)",
          800: "hsl(24, 80%, 31%)",
          900: "hsl(23, 75%, 26%)",
          950: "hsl(22, 89%, 14%)",
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
};

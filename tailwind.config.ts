import type { Config } from "tailwindcss";
const { heroui } = require("@heroui/theme");

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            background: "#0f0f0f",
            foreground: "#f5f5f0",
            primary: { DEFAULT: "#cac829", foreground: "#0f0f0f" },
            content1: "#1a1a1a",
            content2: "#1a1a1a",
            default: { 500: "#8a8a7a" },
          },
        },
      },
    }),
  ],
};
export default config;

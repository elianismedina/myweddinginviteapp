import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#FFFEFC",
          100: "#FFFDFA",
          200: "#FFFBF5",
          300: "#FFF8F0",
          400: "#FFEEE3",
          500: "#FFD4C5",
          600: "#E6BEAE",
          700: "#BF8B78",
          800: "#995E4D",
          900: "#733B2C",
          950: "#4A1D12",
        },
      },
    },
  },
  plugins: [],
};
export default config;

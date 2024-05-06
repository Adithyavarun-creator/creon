import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshibold: ["Satoshi Bold", ...defaultTheme.fontFamily.sans],
        satoshiregular: ["Satoshi Regular", ...defaultTheme.fontFamily.sans],
        satoshimedium: ["Satoshi Medium", ...defaultTheme.fontFamily.sans],
        monument: [
          "Monument Extended Regular",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
    screens: {
      sm: "576px",
      md: "960px",
      lg: "1440px",
    },
  },
  plugins: [],
};
export default config;

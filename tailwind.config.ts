import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Satoshi-Bold", "sans-serif"],
        // satoshibold: ["Satoshi-Bold", "sans-serif"],
        satoshiregular: ["Satoshi-Regular", "sans-serif"],
        satoshimedium: ["Satoshi-Medium", "sans-serif"],
        monument: ["Monument Extended Bold", "sans-serif"],
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

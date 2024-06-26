import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "text-col": "#d4d4d4",
        "bg-col": "#67e8f9",
      },
      screens: {
        xxs: "320px",
        xs: "425px",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F4E9D7",
        ink: "#2B1F16",
        accent: {
          400: "#C9A227",
          500: "#A9791C",
          600: "#8A6216",
        },
        brass: {
          400: "#A24E42",
          500: "#7C3B32",
          600: "#5E2C25",
        },
        mist: "#7A6A58",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "grain-gradient":
          "radial-gradient(circle at 20% 20%, rgba(169,121,28,0.12), transparent 40%), radial-gradient(circle at 80% 0%, rgba(124,59,50,0.08), transparent 45%), radial-gradient(circle at 50% 100%, rgba(169,121,28,0.08), transparent 50%)",
      },
    },
  },
  plugins: [],
};
export default config;

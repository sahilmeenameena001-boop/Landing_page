import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0B0F",
        slate: {
          950: "#101116",
          900: "#171921",
        },
        accent: {
          400: "#E3C589",
          500: "#C9A227",
          600: "#9C7A1D",
        },
        brass: {
          400: "#6E8AA3",
          500: "#4A6580",
          600: "#35485C",
        },
        ivory: "#F3EFE6",
        mist: "#9B968F",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "grain-gradient":
          "radial-gradient(circle at 20% 20%, rgba(201,162,39,0.10), transparent 40%), radial-gradient(circle at 80% 0%, rgba(74,101,128,0.09), transparent 45%), radial-gradient(circle at 50% 100%, rgba(201,162,39,0.06), transparent 50%)",
      },
    },
  },
  plugins: [],
};
export default config;

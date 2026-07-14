import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0D10",
        slate: {
          950: "#0F1215",
          900: "#151A1F",
        },
        accent: {
          400: "#7C93A8",
          500: "#5D7A94",
          600: "#48607A",
        },
        brass: {
          400: "#B79A6B",
          500: "#A08655",
          600: "#8A7146",
        },
        ivory: "#EDEBE4",
        mist: "#93999E",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "grain-gradient":
          "radial-gradient(circle at 20% 20%, rgba(93,122,148,0.09), transparent 40%), radial-gradient(circle at 80% 0%, rgba(160,134,85,0.08), transparent 45%), radial-gradient(circle at 50% 100%, rgba(93,122,148,0.07), transparent 50%)",
      },
    },
  },
  plugins: [],
};
export default config;

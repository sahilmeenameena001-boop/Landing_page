import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0E14",
        slate: {
          950: "#0D1219",
          900: "#121824",
        },
        jade: {
          400: "#3FCBA6",
          500: "#22A98A",
          600: "#17836B",
        },
        plum: {
          400: "#8C7BE0",
          500: "#6E5CC9",
          600: "#54459E",
        },
        ivory: "#EFEDE6",
        mist: "#9AA7B5",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "grain-gradient":
          "radial-gradient(circle at 20% 20%, rgba(63,203,166,0.10), transparent 40%), radial-gradient(circle at 80% 0%, rgba(110,92,201,0.12), transparent 45%), radial-gradient(circle at 50% 100%, rgba(63,203,166,0.08), transparent 50%)",
      },
    },
  },
  plugins: [],
};
export default config;

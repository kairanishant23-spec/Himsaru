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
        forest: "#1b3a20",
        forest2: "#264d2b",
        moss: "#3d6b42",
        fern: "#5e9464",
        sage: "#8fbf94",
        cream: "#fbf7f0",
        warm: "#f5efe4",
        mist: "#ebe4d8",
        gold: "#c4890a",
        amber: "#e0a020",
        honey: "#f5b942",
        earth: "#7a4f2a",
        bark: "#5c3a1c",
        stone: "#8a7a68",
        ltxt: "#6b5c4a",
        text: "#2c2218",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(27, 58, 32, 0.08)",
        cardLg: "0 12px 48px rgba(27, 58, 32, 0.14)",
      },
    },
  },
  plugins: [],
};
export default config;

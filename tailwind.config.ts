import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#E15EF2",
        complementary: "#af5db9",
        card: "#262326",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;

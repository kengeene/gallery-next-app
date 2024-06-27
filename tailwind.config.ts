import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: "#3F3F3F",
        accent: "#606060",
        secondary: "#D927C7",
        light: "#FFFFFF",
        background: "#212121",
      },
    },
  },
  plugins: [],
} satisfies Config;

import { fontFamily } from "tailwindcss/defaultTheme";
import { withUt } from "uploadthing/tw";

export default withUt({
  content: ["./src/**/*.{ts,tsx,mdx}"],
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
      borderRadius: {
        lg: "20px",
      },
      fontSize: {
        xs: "14px",
        sm: "16px",
      },
    },
  },
  plugins: [],
});
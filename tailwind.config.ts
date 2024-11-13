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
        Indigo: "#1E3D59",
        GrayishBlue: "#F9FAFB",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },

    container: {
      center: true, // This centers the container
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        sm: "100%", // Full width on small screens
        md: "1024px",
        lg: "1200px", // Max width of 768px on medium screens
        xl: "1480px", // Max width of 1024px on large screens
        xxl: "1680px", // Max width of 1280px on extra-large screens
      },
    },
  },
  plugins: [],
};
export default config;

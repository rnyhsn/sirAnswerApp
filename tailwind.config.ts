import type { Config } from "tailwindcss";

export default {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgDarkPrimary: "#2f3640",
        bgDarkSecondary: "#353b48",
        bgLightPrimary: "#dfe4ea",
        bgLightSecondary: "#f1f2f6",
        txtPrimary: "#2f3640",
        txtSecondary: "#353b48",
        txtDarkPrimary: "#ffffff",
        txtDarkSecondary: "#bdc3c7",
        btnPrimary: "#d35400",
        btnLink: "#1e90ff",
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#060c1a",
        "bg-secondary": "#0e1421",
        "bg-accent": "#742bec",
        "text-primary": "#fff",
        "text-secondary": "#676B73"
      }
    },
  },
  plugins: [],
} satisfies Config;


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
        background: "var(--background)",
        'main-text': 'var(--main-text)',
        'secondary-text': 'var(--secondary-text)',
        accent: 'var(--accent-color)',
        hover: 'var(--hover-button)',
        borders: 'var(--borders-color)'
      },
    },
  },
  plugins: [],
} satisfies Config;

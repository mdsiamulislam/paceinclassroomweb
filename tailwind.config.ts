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
        'dark-blue-900': '#0a2540',
      },
      backgroundImage: {
        'hero': "url('https://science.nasa.gov/wp-content/uploads/2023/06/pace-spacecraft-beauty2-jpg.webp?w=1024')",
      },
    },
  },
  plugins: [],
};
export default config;

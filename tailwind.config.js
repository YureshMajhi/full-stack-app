/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      "@layer base": {
        "*": {
          margin: "0",
          padding: "0",
          "box-sizing": "border-box",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-bg": "#0d0c22",
        "custom-text": "white",
        "custom-soft-bg": "#2d2b42",
        "custom-soft-text": "#e5e5e5",
        "custom-btn": "#3673fd",
      },
    },
  },
  plugins: [],
};

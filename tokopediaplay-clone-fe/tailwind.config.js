/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tokopedia: "hsl(120,100%,37.5%)",
      },
    },
  },
  plugins: [require("daisyui")],
}


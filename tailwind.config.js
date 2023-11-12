/** @type {import('tailwindcss').Config} */
export default {
  variants: {
    extend: {
      scale: ['group-hover'],
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


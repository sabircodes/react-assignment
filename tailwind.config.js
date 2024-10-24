/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          dark: '#27272a',
          light: '#f1efe5',
          gray: '#78838e',
        },
        accent: {
          green: '#74866D',
          orange: '#F04C24',
        },
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
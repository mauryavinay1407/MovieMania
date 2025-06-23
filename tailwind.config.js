/** @type {import('tailwindcss').Config} */
export default {
   content: [
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
      colors: {
        'movie-dark': '#0a0a0f',
        'movie-gray': '#1f1f2e',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
		'sand-light': 'hsl(45, 95%, 85%)',
    	'teal-dark': 'hsl(175, 95%, 22%)',

        sand: {
          light: '#FDE68A',
          dark: '#FBBF24',
        },
        blue: {
          light: '#60A5FA',
          dark: '#2563EB',
        },
        hero: {
          title: '#1D4ED8',
          sub: '#2563EB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

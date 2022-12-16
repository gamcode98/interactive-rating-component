/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      orange: 'hsl(25, 97%, 53%)',
      white: 'hsl(0, 0%, 100%)',
      'light-grey': 'hsl(217, 12%, 63%)',
      'medium-grey': 'hsl(216, 12%, 54%)',
      'hard-grey': 'hsl(200, 19%, 18%)',
      'dark-blue': 'hsl(215, 20%, 17%)',
      'very-dark-blue': 'hsl(216, 12%, 8%)'
    },
    extend: {
      fontFamily: {
        overpass: ['Overpass']
      }
    }
  },
  plugins: []
}

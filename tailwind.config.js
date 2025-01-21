/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/views/**/*.{ejs,html}',
    './public/scripts/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        highlight: '#0C0C0C'
      }
    },
  },
  plugins: [],
}


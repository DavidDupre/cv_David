/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx,vue,html}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A2E66',
        secondary: '#4A4A4A',
        tertiary: '#1C1C1C',
        quaternary: '#1F4D3B',
        quinary: '#800020'
      },
    },
  },
  plugins: [],
}
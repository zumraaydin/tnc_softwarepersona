/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1C1B1A',
        canvas: '#FAF7F2',
        moss: '#2F5233',
        mossLight: '#E4ECE2',
        clay: '#B5533C',
        line: '#DFD9CC',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

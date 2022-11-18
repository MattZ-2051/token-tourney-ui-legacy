/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['HelveticaNowDisplay', ...defaultTheme.fontFamily.sans],
        'helvetica-bold': [
          'HelveticaNowDisplayBold',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      fontSize: {
        '3xl': ['32px', '110%'],
      },
      padding: {
        8: '30px',
        16: '60px',
      },
    },
  },
  plugins: [],
};

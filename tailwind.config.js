/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        helvetica: ['HelveticaNowDisplay', ...defaultTheme.fontFamily.sans],
        'helvetica-bold': [
          'HelveticaNowDisplayBold',
          ...defaultTheme.fontFamily.sans,
        ],
        'sonne-bold': ['SohneSchmal-Fett', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        11: ['11px', '16px'],
        13: ['13px', '19px'],
        22: ['22px', '120%'],
        '3xl': ['32px', '110%'],
        34: ['34px', '115%'],
        46: ['46px', '110%'],
        70: ['70px', '100%'],
        120: ['120px', '90%'],
        '10xl': ['160px', 1],
      },
      padding: {
        3.25: '12.5px',
        4.25: '17.5px',
        8: '30px',
        16: '60px',
        18: '70px',
      },
      margin: {
        13: '50px',
        18: '70px',
      },
    },
  },
  plugins: [],
};

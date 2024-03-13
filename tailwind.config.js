/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        blue: '#00a6fb',
        black: '#000',
        greyGround: '#343A40',
        blackCards: '#212529',
        grey: {
          100: '#E9ECEF',
          200: '#DEE2E6',
          300: '#CED4DA',
          400: '#ADB5BD',
          500: '#495057'
        },
        white: '#F8F9FA',
        cyanLogo: '#66fbf0'
      },
      boxShadow: {
        headerDesktopBtns: 'inset -15px 0px 10px -14px #00a6fb',
        headerMobileBtns: 'inset 0px 15px 10px -14px #00a6fb'
      }
    }
  },
  plugins: []
}

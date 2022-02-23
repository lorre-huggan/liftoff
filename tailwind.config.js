const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Roboto'", ...defaultTheme.fontFamily.sans],
        mono: ["'Roboto Mono'", ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: {
        endless: "url('/image/endless.svg')",
      },
      colors: {
        tpurple: {
          50: '#f4f3f5',
          100: '#e8e7ea',
          200: '#c6c3cc',
          300: '#a39fad',
          400: '#5f576f',
          500: '#1A0F31',
          600: '#170e2c',
          700: '#140b25',
          800: '#10091d',
          900: '#0d0718',
        },
        tpink: {
          50: '#fff6f9',
          100: '#ffeef3',
          200: '#ffd4e0',
          300: '#ffbacd',
          400: '#ff86a8',
          500: '#FF5283',
          600: '#e64a76',
          700: '#bf3e62',
          800: '#99314f',
          900: '#7d2840',
        },
      },
    },
  },
  plugins: [],
};

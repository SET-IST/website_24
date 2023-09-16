/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './core/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      zIndex: {
        12000: '12000',
      },
      fontFamily: {
        sans: ['Montserrat', 'Poppins', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins'],
      },
      spacing: {
        15: '70px',
        16: '100px',
      },
      colors: {
        primary: {
          100: '#0083C433',
          300: '#00578366',
          500: '#0091da',
          600: '#0083C4',
          800: '#005783',
        },
        secondary: {
          100: '#ebbc65',
          300: '#e8b24e',
          400: '#e5a838',
          500: '#e29e21',
          600: '#cf8f1b',
          700: '#b88018',
          800: '#a17015',
        },
        tertiary: {
          100: '#5f6b86',
          300: '#545f77',
          400: '#4a5368',
          500: '#3f4759',
          600: '#343b4a',
          700: '#2a2f3b',
          800: '#1f232c',
        },
        white: '#fafafa',
        whiteTransparent: '#FFFFFF33',
        grey: {
          100: '#D1D1D1',
          300: '#C4C4C4',
          500: '#AFAFAF',
        },
        event: {
          100: '#93c571',
          200: '#ff6e4a',
          300: '#5b89bc',
          400: '#d69d3a',
        }
      },
      animation: {
        'fade-down': 'fade-down 0.4s ease-out',
        fade: 'fade 0.2s ease-in-out',
        'fade-in': 'fade-in 0.3s',
      },
      keyframes: {
        'fade-down': {
          from: { opacity: '0', transform: 'translate3d(0, 100%, 0)' },
          to: { opacity: '1', transform: 'none' },
        },
        fade: {
          from: { opacity: '0', height: '0' },
          to: { opacity: '1', height: 'auto' },
        },
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}

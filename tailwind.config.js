/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1a1a1a',
          darker: '#0a0a0a',
        },
        neutral: {
          light: '#fafafa',
          lighter: '#ffffff',
        },
        accent: {
          teal: '#0d9488',
          'teal-light': '#14b8a6',
        },
        gold: {
          50: '#fef9ec',
          100: '#fcefc7',
          200: '#f9dc8a',
          300: '#f6c44d',
          400: '#f3aa24',
          500: '#d98910',
          600: '#be690b',
          700: '#98490d',
          800: '#7d3a11',
          900: '#693011',
        },
      },
      fontFamily: {
        heading: ['Butler', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f6c44d 0%, #d98910 50%, #be690b 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
      },
    },
  },
  plugins: [],
};

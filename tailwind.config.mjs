/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brutalist monochrome palette
        primary: {
          DEFAULT: '#FF0000', // Brutal red accent
          50: '#FFE5E5',
          100: '#FFCCCC',
          200: '#FF9999',
          300: '#FF6666',
          400: '#FF3333',
          500: '#FF0000',
          600: '#CC0000',
          700: '#990000',
          800: '#660000',
          900: '#330000',
        },
        // Pure monochrome
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sc)', 'var(--font-sans)', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['var(--font-mono)', 'Courier', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(4rem, 12vw, 10rem)',
        'display': 'clamp(3rem, 8vw, 6rem)',
        'heading': 'clamp(2rem, 5vw, 4rem)',
        'subheading': 'clamp(1.5rem, 3vw, 2.5rem)',
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
        '8': '8px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      animation: {
        'none': 'none',
      },
    },
  },
  plugins: [],
};

export default config;

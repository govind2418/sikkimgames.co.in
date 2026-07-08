import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#ffffff',
          100: '#f7faf8',
          200: '#eef2ef',
          300: '#e1e8e3',
        },
        night: {
          950: '#07100d',
          900: '#0c1713',
          800: '#101f1a',
          700: '#172a23',
          600: '#20372f',
        },
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          900: '#064e3b',
        },
        gold: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(16,185,129,0.3), 0 8px 30px -8px rgba(16,185,129,0.45)',
        card: '0 2px 10px -2px rgba(15,35,28,0.08)',
        'card-dark': '0 8px 30px -8px rgba(0,0,0,0.5)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out both',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;

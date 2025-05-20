/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFC0CB',
        'primary-light': '#FFE4E8',
        'primary-dark': '#FF9AA2',
        rose: '#FDF1F3',
        blush: '#FFE4E6',
        cream: '#FFFBF5',
        sage: '#F1F5F2',
      },
      fontFamily: {
        assistant: ['Assistant', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
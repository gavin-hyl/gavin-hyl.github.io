/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'fade-in-delay': 'fadeIn 1s ease-in 0.5s forwards',
        'fade-in-delay-2': 'fadeIn 1s ease-in 1s forwards',
      },
    },
  },
  plugins: [],
};
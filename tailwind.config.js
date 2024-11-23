/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 'media' or 'class' for dark mode
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(222.2, 47.4%, 11.2%)',
        secondary: 'hsl(210, 40%, 96.1%)',
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(222.2, 84%, 4.9%)',
        border: 'hsl(214.3, 31.8%, 91.4%)', // Ensure border is included
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
    },
  },
  plugins: [],
};

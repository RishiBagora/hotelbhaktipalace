// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this matches your project structure
  ],
  theme: {
    extend: {
      // --- 1. Add Custom Fonts ---
      fontFamily: {
        // 'sans' will be your default body font (Inter)
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        // 'serif' will be your heading font (Playfair Display)
        'serif': ['Playfair Display', ...defaultTheme.fontFamily.serif],
      },
      // --- 2. Add Custom Colors ---
      colors: {
        accent: '#c49a6c',
         accent: '#c49a6c',
      dark: '#1a1a1a',
      textSecondary: '#c9c9c9',
        muted: '#faf9f6',
        'brand-primary': '#1c1c1c',
        'brand-secondary': '#6c6c6c',
        'brand-accent': '#c49a6c',
      }
    },
  },
  plugins: [],
}
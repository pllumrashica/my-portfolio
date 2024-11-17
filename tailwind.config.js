/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],  
  theme: {
    extend: {
      colors: {
        // Corrected Custom Colors
        primary: '#48bcec', // Fixed the extra hash
        secondary: '#1a1a1a',
      },
      fontFamily: {
        // Custom Fonts
        sans: ['Syne', 'sans-serif'], // Replace 'Syne' with your desired font
        heading: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};

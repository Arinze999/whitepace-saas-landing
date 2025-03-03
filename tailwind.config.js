/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        myBlue: '#043873',
        myWhite: '#FFFFFF',
        dullYellow: '#FFE492',
        faintBlue: '#4F9CF9',
      },
      screens: {
        mlg: '1024px',
        lg: '1152px', // Matches @media (min-width: 1152px)
        xl: '1440px', // Matches @media (min-width: 1440px)
        '2xl': '1920px', // Matches @media (min-width: 1920px)
      },
    },
  },
  plugins: [],
};

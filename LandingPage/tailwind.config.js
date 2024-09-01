
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // This includes all JS, JSX, TS, and TSX files in the src directory
    './public/index.html',          // If you have an index.html file in the public directory
  ],
  theme: {
    extend: 
    {
      colors: {
        primary: 'text-pink-600',
        secondary: '#ffed4a',
        accent: '#e3342f',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      backgroundImage: {
        'custom-gradient-image': 'linear-gradient(260.31deg, rgba(36, 0, 255, 0.5) 0%, rgba(248, 26, 132, 0.3) 100%), url("../assets/images/background.png")',
        'color2-finale': 'var(--Color2-finale, #F81A84)',
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
      spacing: {
        '45px': '45px',
        '100px': '100px',
        '74px': '74px',
        '321px': '321px',
        '1240px': '1240px',
        '271px': '271px',
        '1440px': '1440px',
      },
      borderRadius: {
        '10px': '10px',
      },
    },
  },
  plugins: [],
};

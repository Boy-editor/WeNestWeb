module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003334',       // landing page green
        secondary: '#e6b653',     // dark yellow accent
        darkgray: '#1F1F1F',      // main text
        lightgray: '#F5F5F5',     // background
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
      },
      animation: {
        'slide-down': 'slideDown 0.3s ease-out',
        'fade-slide-down': 'fade-slide-down 0.8s ease-out forwards',
        'fade-slide-up': 'fade-slide-up 0.8s ease-out forwards',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-10%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
    keyframes: {
    'fade-slide-down': {
        '0%': { opacity: '0', transform: 'translateY(-30px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      'fade-slide-up': {
        '0%': { opacity: '0', transform: 'translateY(40px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      }
    },
  },
  plugins: [],
};

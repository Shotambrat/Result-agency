/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  important: "#root",
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px'
    },

    extend: {
      animation: {
        pulseText: 'pulseText 0.3s ease-in-out',
      },
      colors: {
        'gradient-start': '#8A66F0A8',
        'gradient-end': '#4A81EBA8',
        "header-text": 'rgba(25, 19, 89)',
        "button-color": '#7B72EB',
        "uslugi-text": "#191359",
        "footer-icon": "#7B72EB",
        "rectangle": "#B6B3E8",
      },
      fontFamily: {
        'roboto-flex': ['"Roboto Flex"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


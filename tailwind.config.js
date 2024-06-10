/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  important: "#root",
  theme: {
    screens: {
      'm': '352px',
      'l': '402px',
      's': '444px',
      'xs': '480px',
      'xxs': '550px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1600px'
    },

    extend: {
      animation: {
        pulseText: 'pulseText 0.3s ease-in-out',
      },
      colors: {
        'keys_item-bg': "rgba(123, 114, 235, 0.80)",
        'cases-text': "#4A448E",
        'purpleText': '#4E4A83',
        'gradient-start': '#8A66F0A8',
        'gradient-end': '#4A81EBA8',
        "header-text": 'rgba(25, 19, 89)',
        "button-color": '#7B72EB',
        "uslugi-text": "#191359",
        "footer-icon": "#7B72EB",
        "rectangle": "#B6B3E8",
        "headings-color": "#191359",
        "how-we-work-color": "#4A448E",
        "blog-themeBg": "#7B72EB",
        "vivodBorder": "#b5aff5",
        "cases-border": "#d3d2e4",
        "howWeWork-border": "#e6e8fa"
      },
      fontFamily: {
        'roboto-flex': ['"Roboto Flex"', 'sans-serif'],
        'abel': ['"Abel"', "sans-serif"]
      },
    },
  },
  plugins: [],
}


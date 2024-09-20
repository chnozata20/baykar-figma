/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      }, 
      borderRadius: {
        'custom-radius-20': '20px',
        'custom-radius-30': '30px',
      },
      boxShadow: {
        'custom-shadow': '0px 25px 50px -12px rgba(0, 0, 0, 0.25), 0px 0px 15px rgba(0, 0, 0, 0.07)',
        'custom-shadow-2': '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 0px 10px rgba(0, 0, 0, 0.07)',
        'custom-shadow-3': "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 0px 6px rgba(0, 0, 0, 0.07)",
        'custom-shadow-4': "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 0px 4px rgba(0, 0, 0, 0.07)"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #FFFBEB 0%, #FFFFFF 89.63%)',
      },
      spacing: {
        'custom-chart-left': 'calc(50% - 1049px/2 + 0.5px)',
        'custom-chart-top': 'calc(50% - 633px/2)',
        'custom-ellipses-left': 'calc(50% - 1049px/2 + 210px)',
        'custom-ellipses-top': 'calc(50% - 633px/2 + 67px)',
        'custom-badge-left': 'calc(50% - 1049px/2 - 10px)',
        'custom-badge-top': 'calc(50% - 633px/2 - 50px)',
      },
    },
  },
  plugins: [],
}
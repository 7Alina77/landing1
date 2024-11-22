/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        'white': '#FCFBFA',
        'black': '#27272A',
        'lavender': '#7E3AF2',
        'darkGrey': '#696969',
        'lightGrey': '#E5E7EB',
        'red': '#E02424',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'h1': ['60px', { lineHeight: '1.5' }],
        'h2': ['32px', { lineHeight: '1.5' }],
        'h3': ['24px', { lineHeight: '1.5' }],
        'text20': ['20px', { lineHeight: '1.5' }],
        'text16': ['16px', { lineHeight: '1.5' }],
      },
      boxShadow: {
        'bottom': '0px 4px 4px #E5E7EB', // Тень только снизу
      },
      padding: {
        '25': '25px',
        '13': '13px',
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      clipPath: {
        full: 'inset(0)',
      },
      screens: {
        'custom-desktop': '1365px',
        'custom-tablet': '1000px',
        'custom-mobile': '560px',
      },
      colors: {
        'white': '#FCFBFA',
        'black': '#27272A',
        'lavender': '#7E3AF2',
        'darkGrey': '#696969',
        'lightGrey': '#E5E7EB',
        'red': '#E02424',
        'buttonHover': '#6C2BD9',
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
        '9': '9px',
        '13': '13px',
        '15': '15px',
        '16': '16px',
        '25': '25px',
        '39': '39px',
        '85': '85px',
      },
      borderRadius: {
        '50': '50px',
        'rounded-lg': '15px',
      },
      margin: {
        '10': '10px',
        '24': '24px',
        '27': '27px',
        '36': '36px',
        '38': '38px',
        '44': '44px',
        '48': '48px',
        '60': '60px',
        '65': '65px',
        '92': '92px',
        '100': '100px',
        '162': '162px',
      },
      width: {
        '25': '25px',
        '44': '44px',
        '90': '90px',
        '290': '290px',
      },
      height: {
        '44': '44px',
        '290': '290px',
        '345': '345px',
        '440': '440px',
        '485': '485px',
        '640': '640px',
        '670': '670px',
      },
      backgroundImage: {
        'gradient': "url('../images/gradient.svg')",
      },
      clipPath: {
        triangle: 'polygon(50% 0%, 100% 100%, 0% 100%)',
      },
    },
  },
  plugins: [],
}

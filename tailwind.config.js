module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    width: {
      '196': '50rem',
      '598': '37.375rem',
      '370': '23.125rem',
      '10': '40px',
      '90': '90px',
      '64': '64px',
      '305': '19.063rem',
      '223': '13.938rem',
      '709': '44.313rem',
      '1095': '68.438rem',
      '345': '21.563rem',
      '108': '6.75rem',
      '1480': '92.5rem'
    },
    height: {
     '455': '28.438',
      '370': '23.125rem',
      '10': '40px',
      '14': '1rem',
      '36': '36px',
      '900': '900px'
    },
    padding: {
      '47': '2.938rem',
      '9': '0.563rem',
      '16': '1rem',
      '14': '1rem'
    },
    margin: {
      '190': '12.25rem',
      '47': '2.938rem',
      '122': '7.625rem',
      '170': '10.625rem',
      '115': '7.188rem',
      '327': '20.438rem',
      '215': '13.438rem',
      '31': '1.938rem',
      '6': '1.8rem',
      '253': '15.813rem',
      '476': '29.75rem',
      '147': '9.1875rem',
      '14': '3.5rem',
      '1': '1rem',
      '20': '1.25rem',
      '36': '2.25rem',
      '8': '0.5rem'
    },
    colors: {
      'regal-blue': '#003367',
      'silver': '#95A2A7',
      'rdgBlack': 'rgba(0, 0, 0, 0.87)',
      'white': '#fff',
      'red': '#AF2727'
    },
    fontSize: {
      '40': ['2.5rem', {
        lineHeight: '32px',
      }],
      '23': ['1.5rem', {
        lineHeight: '32px',
      }],
      '14': ['0.875rem', {
        lineHeight: '20px'
      }],
      '12': ['1rem', {
        lineHeight: '15px'
      }]
    },
    fontFamily: {
      'montserrat': ['Montserrat'],
      'roboto': ['Roboto']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

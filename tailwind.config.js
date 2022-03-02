module.exports = {
  content: ["./index.html", "./project.html"],//./src/**/*.{html,js}
  theme: {
    colors: {
      'background' : '#3c3c3c', //opacity 70%
      'light-gray' : '#eee7e7',
      'green' : '#09b626',
      'darkgreen' : '#2c7e55',
      'light-green' : '#d1f7e4',
      'dark' : '#2b2a2a',
      'light-dark' :'#313030',
      'white' :'#fcf8f8',
      'blue' : '#251af1',
      'dark-blue' : '#2b3031',
      'dark-orange' : '#e35c0a',
      'yellow' : '#fbe106',
      'light-blue' : '#33474b',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      orbitron: ['Orbitron', 'sans-serif'],
    },
    maxWidth: {
      '1/2': '1209px',
    },
    screens: {
      '938' : {'max': '938px'},
      
      '2xl': {'max': '755px'},
      // => @media (max-width: 1535px) { ... }

      'tabletL': {'max': '729px'},
      // => @media (max-width: 729px) { ... }

      'tabletM': {'max': '562px'},
      // => @media (max-width: 562px) { ... }

      'mobileL': {'max': '531px'},
      // => @media (max-width: 531px) { ... }

      'mobile': {'max': '500px'},
      // => @media (max-width: 500px) { ... }

      'mobileMin': {'min': '501px'},
      // => @media (max-width: 500px) { ... }
    },
    extend: {
      width: {
        '128': '90%',
        '170' : '170px'
      },
      height:{
        '170' : '170px'
      },
      padding:{
        '91px' : '91px',
      },
      margin:{
        'left' : '67px',
        'right' : '67px',
        // '36' : '36px'
      },
      dropShadow: {
        'md': '0 4px 6px rgba(0,255,0, 0.25)',
      },
      keyframes: {
        wiggle: {
          'from': { top: '-100%' },
          'to': { top: '0' },
        },
        dot: {
          'from': { right: '-100%' },
          'to': { right: '0' },
        },
        circle1:{
           'from' : {right: '-100%'},
           'to' : {right: '30%'}
        },
        circle1Mobile:{
          'from' : {right: '-100%'},
          'to' : {right: '37%'}
        },
        circle2:{
          'from' : {left: '-100%'},
          'to' : {left: '10%'}
        },
        triangle2:{
          'from' : {right: '-100%'},
          'to' : {right: '20%'}
        },
        content:{
          'from' : {opacity: '0'},
          'to' : {opacity: '100%'}
        }
      },
    },
  },
  plugins: [],
}

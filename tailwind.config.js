/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      '<md':{'max':'768px'},
      '<lg':{'max':'1246px'}
    },
    boxShadow:{
      'wwd':'0px 0px 16px 0px rgba(255, 51, 102, 0.50)',
      'letschat':'0px 0px 16px 0px #FF336680'
    },

    colors: {
      'colour-1' : '#33FFF3',
      'global-white': '#F5F5F5',
      'white-2' : '#FFFFFF',
      'r2-colour-1': '#0405068f',
      'r2-colour-2':'#04050666',
      'r2-colour-3':'#040506a3',
      'input-border' : '#f5f5f53d',
      'input-bg' : '#0e1015',
      'label-colour-1' : '#999d9f',
      'wwd-text-colour': '#cccccc',
      'fade-colour-1': '#01010100',
      'fade-colour-2': '#010101'
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'montserrat-regular' : ['Montserrat-Regular', 'sans-serif'],
      'montserrat-medium' : ['Montserrat-Medium', 'sans-serif'],
      'montserrat-semibold' : ['Montserrat-SemiBold', 'sans-serif'],
      'montserrat-bold' : ['Montserrat-Bold', 'sans-serif'],
      'montserrat-extrabold': ['Montserrat-ExtraBold', 'sans-serif']
    },
    extend: {
      boxShadow: {
        'customBoxShadow' : '0px 4px 24px -1px rgba(0, 0, 0, 0.25)'
      },
      backdropBlur: {
        'xxsm' : '10px'
      }
    },
  },
  plugins: [],
}


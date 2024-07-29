/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],  theme: {
    colors: {
      
      'mainGray': 'rgba(74, 77, 82, 1)',
      'secondGray': 'rgba(240, 239, 239, 0.8)',
      'textGray': 'rgba(109, 107, 107, 1)',
      'selectRed': 'rgba(225, 186, 189, 1)',
      'textRed': 'rgba(140, 40, 42, 1)',
      'mainRed': 'rgba(189, 50, 50, 1)',
      'mainBlack': 'rgba(21, 22, 22, 1)',
      'dailyColor': 'rgba(90, 89, 94, 0.7)',
      'dailyStatus': 'rgba(74, 77, 82, 1)',
      'mainGreen': 'rgba(90, 89, 94, 0.7)',
      "white": '#ffff'
    },
    extend: {},
    fontFamily: {
      interBold: ['Inter-Bold', "Sans-serif"],
      interRegular: ['Inter-Regular', "Sans-serif"],
      InterSemiBold: ['Inter-SemiBold', "Sans-serif"],
      InterThin: ['Inter-Thin', "Sans-serif"],
      InterMedium: ['Inter-Medium', "Sans-serif"],
      interBlack: ['Inter-Black', "Sans-serif"],
      
    }
  },
  plugins: [],
}


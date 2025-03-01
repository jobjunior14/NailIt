/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    colors: {
      mainGray: "rgba(74, 77, 82, 1)",
      secondGray: "rgba(240, 239, 239, 0.8)",
      textGray: "rgba(109, 107, 107, 1)",
      selectRed: "rgba(225, 186, 189, 1)",
      textRed: "rgba(140, 40, 42, 1)",
      mainRed: "rgba(189, 50, 50, 1)",
      mainBlack: "rgba(21, 22, 22, 1)",
      dailyColor: "rgba(90, 89, 94, 0.7)",
      dailyStatus: "rgba(74, 77, 82, 1)",
      mainGreen: "rgba(90, 89, 94, 0.7)",
      transparentBlack: "rgba(0,0,0,0.7)",
      transparentBlack1: "rgba(0,0,0,0.6)",
      transpGray: "rgba(238,238,238, 1)",
      banqueSpaceBg: "rgb(249,247,247)",
      basketBg: "rgb(240,240,240)",
      white: "#ffff",
      green: "#2BAD7F",
    },
    fontFamily: {
      interBold: ["Inter-Bold", "Sans-serif"],
      interRegular: ["Inter-Regular", "Sans-serif"],
      InterSemiBold: ["Inter-SemiBold", "Sans-serif"],
      InterThin: ["Inter-Thin", "Sans-serif"],
      InterMedium: ["Inter-Medium", "Sans-serif"],
      interBlack: ["Inter-Black", "Sans-serif"],
    },
  },
  plugins: [],
};

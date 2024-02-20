/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'VeryDarkGrey': '#18171F',
        'DarkGrey': '#24232C',
        'Grey': '#817D92',
        'AlmostWhite': '#E6E5EA',
        'NeonGreen': '#A4FFAF',
        "Yellow": '#F8CD65',
        'Orange': 'FB7C58',
        'Red': 'F64A4A'
      }
    },
  },
  plugins: [],
}


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
      },
      fontSize: {
        '32px': '32px',
        '18px': '18px',
        '16px': '16px',
        '30px': '30px'
      },
      width: {
        '540px': '540px',
        '10px': '10px',
      }
    },
  },
  plugins: [],
}


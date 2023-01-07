/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    colors: {
      'grey': '#434545',
      'primary': '#f3bc6e',
      'orange': '#ff6d00',
      'dark-yellow': '#ff9e00',
      'yellow': '#fdcd30',
      'blue': '#2f88ff',
      'red': '#FF3D00',
      'green': '#83ce00',
      'light-blue': '#f4f8f9',
      'brown': '#4e4545'
  },
  screens: {
      ms: '900px',
      mf: '1300px',
      lf: '1700px'
  }
  },
  },
  plugins: [],
}

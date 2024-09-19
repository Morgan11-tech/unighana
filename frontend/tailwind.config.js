/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'purple': '#5A076E',
        'purple-hover': '#9B06BF',
        'blue': '#468EC3',
        'green': '#108A32',
        'yellow': '#FFC107',
        'secondary': '#9F4942',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
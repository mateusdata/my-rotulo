/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {

  plugins: [
      require('flowbite/plugin')
  ],
  content: [
    // ...
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
]
}


// tailwind.config.js

module.exports = {
    theme: {
      extend: {
        colors: {
          'dark-gray': '#333',
          'dark-gray-darker': '#222',
          'dark-gray-darkest': '#111',
          'dark-gray-lighter': '#444',
          'dark-gray-lightest': '#555'
        }
      }
    },
    variants: {},
    plugins: [
      function({ addUtilities }) {
        const newUtilities = {
          '.bg-dark-gray': {
            'background-color': '#333'
          },
          '.bg-dark-gray-darker': {
            'background-color': '#222'
          },
          '.bg-dark-gray-darkest': {
            'background-color': '#111'
          },
          '.bg-dark-gray-lighter': {
            'background-color': '#444'
          },
          '.bg-dark-gray-lightest': {
            'background-color': '#555'
          }
        }
        addUtilities(newUtilities)
      }
    ]
  }
  
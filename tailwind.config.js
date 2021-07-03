module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'select-caret': "url('/caret.svg')",
      },
      backgroundPosition: {
        'custom-right': 'center right 1rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      const customClassName = {
        '.label': {
          transform: 'translateY(-50%)',
        },
        '.float-label': {
          transform: 'translateY(-100%)',
        },
        '.label-trans': {
          transition: 'all 0.2s ease-in-out',
        },
      }

      addComponents(customClassName)
    },
  ],
}

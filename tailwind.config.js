module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
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
        '.floatLabel': {
          transform: 'translateY(-100%)',
        },
        '.labelTrans': {
          transition: 'all 0.2s ease-in-out',
        },
      }

      addComponents(customClassName)
    },
  ],
}

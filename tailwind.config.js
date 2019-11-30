module.exports = {
  important: true,
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Be Vietnam', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#ff1744',
      },
    },
    spinner: (theme) => ({
      default: {
        color: '#ff1744', // color you want to make the spinner
        size: '1em', // size of the spinner (used for both width and height)
        border: '2px', // border-width of the spinner (shouldn't be bigger than half the spinner's size)
        speed: '500ms', // the speed at which the spinner should rotate
      },
    }),
  },
  variants: { // all the following default to ['responsive']
    spinner: ['responsive'],
  },

  plugins: [
    require('tailwindcss-spinner')(), // no options to configure
  ],
}

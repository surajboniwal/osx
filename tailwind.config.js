module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: theme => ({
        'macos-bg': "url('images/bg.jpg')",
        'safari-bg': "url('images/safari-bg.jpeg')"
      }),
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

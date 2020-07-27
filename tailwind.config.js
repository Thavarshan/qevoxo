module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
        colors: {
          blue: {
            100: '#E6F0FB',
            200: '#C0D9F5',
            300: '#9AC2EF',
            400: '#4F94E2',
            500: '#0366D6',
            600: '#035CC1',
            700: '#023D80',
            800: '#012E60',
            900: '#011F40',
          },
        }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}

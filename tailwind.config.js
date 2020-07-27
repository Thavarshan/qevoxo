module.exports = {
  theme: {
    customForms: theme => ({
      default: {
        input: {
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.100'),
          '&:focus': {
            backgroundColor: theme('colors.white'),
          }
        },
        textarea: {
            borderRadius: theme('borderRadius.md'),
            backgroundColor: theme('colors.gray.100'),
            '&:focus': {
              backgroundColor: theme('colors.white'),
            }
        },
        select: {
          borderRadius: theme('borderRadius.md'),
          boxShadow: theme('boxShadow.none'),
          backgroundColor: theme('colors.gray.100'),
          '&:focus': {
            backgroundColor: theme('colors.white'),
          }
        },
        checkbox: {
          backgroundColor: theme('colors.gray.100'),
          width: theme('spacing.6'),
          height: theme('spacing.6'),
        },
        radio: {
          backgroundColor: theme('colors.gray.100'),
          width: theme('spacing.6'),
          height: theme('spacing.6'),
        },
      },
    }),
    typography: theme => ({
        default: {
          css: {
            color: theme('colors.gray.600'),
            a: {
              color: '#0366D6',
              '&:hover': {
                color: '#035CC1',
              },
            },
          },
        },
    }),
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

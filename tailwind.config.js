/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-bg': '#F0E8F3',
        'dark-bg': '#0B1D26',
        'primary': {
          300: '#FFC000',
          700: '#FD9300',
          800: '#FC7800'
        },
      },
      zIndex: {
        '60': '60',
        '80': '80',
        '100': '100',
      },
      flexGrow: {
        2: '2'
      }, keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }, animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
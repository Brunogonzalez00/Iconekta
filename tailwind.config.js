/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
      animations
  ],
}


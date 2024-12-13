/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    extend: {
      fontFamily: {
        custom: ['Revelstoke', 'Heaven']
      },
      animation: {
        'infinite-scroll-right': 'infinite-scroll-right 25s linear infinite',
        'infinite-scroll-left': 'infinite-scroll-left 25s linear infinite',

      },
      keyframes: {
        'infinite-scroll-right': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-left': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0%)' },
        }
      },
      plugins: [
        require('daisyui'),
      ],
    }
  },
  darkMode: 'selector',
  // plugins: [
  //   require('tailwindcss-animated')
  // ],
  animate : 'selector',
}
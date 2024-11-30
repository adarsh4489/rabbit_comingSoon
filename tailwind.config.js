/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      imageRendering: {
        'crisp-edges': 'crisp-edges',
      },
      fontFamily: {
        custom: ['Revelstoke', 'Heaven']
      },
    },
  },
  plugins: [],
}
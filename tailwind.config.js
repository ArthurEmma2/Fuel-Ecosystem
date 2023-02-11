/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: 'true',
      padding: '0.9rem',
    },
    extend: {
      colors: {
        'buttonColor': '#1DE9B6',
        'CardColor':'#ECF8F5',
      },

      letterSpacing: {
        normal: '0.08rem',
        wide: '.025em',
        wider: '.05em',
        widest: '3px',
      },
    },
  },
  plugins: [],
}

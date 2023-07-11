/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        'delayed-fade-in': {
          '0%': { opacity: '0', animationTimingFunction: 'ease-in' },
          '50%': { opacity: '0', animationTimingFunction: 'ease-in' },
          '100%': { opacity: '1', animationTimingFunction: 'ease-in' },
        },
      },
      animation: {
        'delayed-fade-in': 'delayed-fade-in 3s 1s forwards',
      },  
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js}', './src/input.css'],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        primary: "#0872BF",
        background:"#141A1A"
      },
      fontFamily: {
        sans: ['Bungee', 'Helvetica', 'Arial', 'sans-serif'],
      },
      dropShadow: {
        '3xl': '0 4px 20px rgba(93, 173, 236, 0.23)',
      },
      keyframes: {
        neonGlow: {
          '0%, 100%': {
            textShadow:
              '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF, 0 0 20px #00FFFF',
          },
          '50%': {
            textShadow:
              '0 0 10px #3498DB, 0 0 20px #3498DB, 0 0 30px #3498DB, 0 0 40px #3498DB',
          },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0.2' },
        },
      },
      animation: {
        neonGlow: 'neonGlow 1.5s ease-in-out infinite alternate',
        blink:    'blink 1s step-start infinite',
      },
      boxShadow: {
        neon: '0 0 15px rgba(255,0,255,0.7), 0 0 30px rgba(0,255,255,0.7)',
      },
    },
  },
  plugins: [],
}


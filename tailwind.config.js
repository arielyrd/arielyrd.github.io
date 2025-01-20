/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#1a1b26',
          100: '#16161e',
          200: '#13131a',
          300: '#0f0f15',
          400: '#0c0c10',
          500: '#09090c',
          600: '#060607',
          700: '#030303',
          800: '#000000',
        },
        accent: {
          primary: '#7c3aed',
          secondary: '#3b82f6',
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}
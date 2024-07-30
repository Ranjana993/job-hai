/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        backgroundImage: {
          'custom-gradient': 'linear-gradient(90deg, rgba(241,225,238,1) 0%, rgba(226,217,247,1) 57%, rgba(241,223,255,1) 79%)',
        }
      }
    },
    fontFamily: {
      'bodoni-moda-sc': ['"Bodoni Moda SC"', 'serif'],
    },
    fontWeight: {
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
      900: '900',
    },
  },
  plugins: [],
}
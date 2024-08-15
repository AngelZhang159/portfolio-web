/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
				background: "#0f0f0f",
				primary: "#b7ddd7",
				secondary: "#d1c8b9"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Poppins', 'serif']
      }
    }
  },
  plugins: []
}

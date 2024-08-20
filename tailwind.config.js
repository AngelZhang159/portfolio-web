/** @type {import('tailwindcss').Config} */
import aspectRatio from '@tailwindcss/aspect-ratio'

export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				background: {
					light: '#ffffff',
					dark: '#0f0f0f'
				},
				primary: "#b7ddd7",
				secondary: "#d1c8b9"
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				serif: ['Poppins', 'serif']
			}
		}
	},
	variants: {
		extend: {
			backgroundColor: ['dark'],
			textColor: ['dark'],
		}
	},
	plugins: [
		aspectRatio
	]
}

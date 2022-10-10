/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx}'],
	theme: {
		extend: {
			gap: {
				sm: '0.8rem',
				DEFAULT: '1.6rem',
				xl: '2rem',
			},

			padding: {
				xs: '0.8rem',
				sm: '1.6rem',
				DEFAULT: '2rem',
				md: '2.4rem',
			},
			fontSize: {
				xs: '1.2rem',
				sm: '1.4rem',
				DEFAULT: '1.4rem',
				md: '2rem',
				lg: '2.4rem',
				xl: '3.2rem',
			},
			colors: {
				font: '#13211F',
				white: '#FFFFFF',
			},
		},
	},
	plugins: [],
};

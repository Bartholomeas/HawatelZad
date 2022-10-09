/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'my_bg_big' : "url('./Images/big.png')",
			}, 
		},
		fontFamily: {
			'abc' : ['Fjalla One', "sans-serif"]
		}
	},
	plugins: [],
};

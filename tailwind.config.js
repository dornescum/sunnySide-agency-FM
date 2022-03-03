module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				softRed: "#fe7867",
				yellow: "#fad400",
				graphicDesignText:"#25564b",
				photographyText:"#19536b",
				footerGreen:"#458c7e",
				greyOne:"#a7abae",
				greyTwo:"#a7abae",
				greyThree:"#5a636c",
				greyFour:"#23303e",
			},
			fontFamily:{
				'barlow': ['"Barlow"', 'sans-serif'],
				'fraunces': ['"Fraunces"', 'serif']
			}
		},
	},
	plugins: [],
};

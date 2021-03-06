module.exports = {
	purge: [],
	theme: {
		extend: {
			colors: {
				body: {
					default: '#15202b',
				},
				primary: {
					default: '#1da1f2',
				},
				like: {
					default: '#e0245e',
				},
				retweet: {
					default: '#17bf63',
				},
				gray: {
					900: '#253341',
					800: 'rgba(29,161,242,0.1)',
					600: '#38444d',
					400: 'hsl(204,13.6%,56.9%)',
					500: '#192734',
				},
			},
			borderRadius: {
				xl: '1.5rem',
			},
		},
	},
	variants: {
		backgroundColor: ['hover', 'focus', 'group-hover'],
	},
	plugins: [],
};

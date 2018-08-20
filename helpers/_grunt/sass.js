const sass = require('node-sass');

module.exports = {
	options: {
		implementation: sass,
		outputStyle: 'nested',
		sourceMap: true
	},
	dev: {
		files: {
			'<%= paths.dev %>/css/styles.css': '<%= paths.src %>/scss/styles.tmp.scss'
		}
	},
	universal: {
		files: {
			'<%= paths.dev %>/css/universal.css': '<%= paths.src %>/scss/universal.scss'
		}
	}
};
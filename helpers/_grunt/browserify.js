var libs = [ 
	'jquery',
	'jquery-easing',
	'slick-carousel'
];

module.exports = {
	options: {
		transform: [
			[
				'babelify', {
					'presets': [
						'babel-preset-env'
					]
				}
			]
		]
	},
	vendor: {
		src: ['.'],
		dest: '<%= paths.dev %>/js/vendor/libs.js',
		options: {
			debug: false,
			alias: libs,
			external:  null  // Reset this here because it's not needed 
		}
	},
	dev: {
		options: {
			external: libs,
			browserifyOptions: {
				debug: true
			},
			watch: true
		},
		files: {
			'<%= paths.dev %>/js/main.js': '<%= paths.src %>/js/main.js'
		}
	},
	dist: {
		files: {
			'<%= paths.dev %>/js/main.js': '<%= paths.src %>/js/main.js'
		}
	}
};
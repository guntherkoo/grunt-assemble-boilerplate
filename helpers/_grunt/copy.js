module.exports = { 
	dev : {
		files: [{
			expand: true,
			cwd: '<%= paths.src %>/bower-components',
			src: ['**/*'],
			dest: '<%= paths.dev %>/bower-components'
 		},{
			expand: true,
			cwd: '<%= paths.src %>/templates/data',
			src: ['**/*'],
			dest: '<%= paths.dev %>/data'
 		}]
	},

	dist: {
		files: [{
			cwd: '<%= paths.dev %>/',
			dest: '<%= paths.dist %>',
			expand: true,
			src: ['**']
 		}]
	}
};
module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			my_target: {
				files: {
					'js/scripts.min.js': ['<%= pkg.js %>']
				}
			}
		},

		cssmin: {
			combine: {
				files: {
					'css/styles.min.css': ['<%= pkg.css %>']
				}
			}
		},

		shell: {
			jekyll: {
				command: 'jekyll serve -w'
			},

			sass: {
				command: 'sass css/style.scss:css/style.css'
			}			
		},

		watch: {			

			js:{
				files: ['<%= pkg.js %>'],
				tasks: ['uglify']
			},

			sass:{
				files: ['css/style.scss'],
				tasks: ['shell:sass']					
			},

			css:{
				files: ['<%= pkg.css %>'],
				tasks: ['cssmin']				
			}

			// reload:{
			// 	options: {	livereload: true },
			// 	files: ['css/styles.min.css', 'index.html']
			// }						
			// 
			// put this above the </body> tag in default.html
			// <script src="http://localhost:35729/livereload.js"></script>
		}					
		   	
	});	

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', [ 'shell']);

	grunt.registerTask('w', [ 'watch']);
};


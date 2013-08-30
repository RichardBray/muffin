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

		bgShell: {

			_defaults: {
				bg: true
			},

			watchJekyll: {
				cmd: 'jekyll serve -w'
			},

			watchSASS: {
				cmd: 'sass --watch css/style.scss:css/style.css',
				bg: false
			}			
		},

		watch: {			

			js:{
				files: ['<%= pkg.js %>'],
				tasks: ['uglify']
			},

			css:{
				files: ['<%= pkg.css %>'],
				tasks: ['cssmin']				
			},

			// reload:{
			// 	options: {	livereload: true },
			// 	files: ['css/styles.min.css', 'index.html']
			// }						
			// 
			// put this above the </body> tag in default.html
			// <script src="http://localhost:35729/livereload.js"></script>
		}					
		   	
	});	

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-bg-shell');
	grunt.registerTask('default', ['bgShell']);
};


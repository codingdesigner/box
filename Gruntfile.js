/* global module:false */
module.exports = function(grunt) {
	var port = grunt.option('port') || 8000;
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
			banner:
				'/*!\n' +
				' * reveal.js <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd, HH:MM") %>)\n' +
				' * http://lab.hakim.se/reveal-js\n' +
				' * MIT licensed\n' +
				' *\n' +
				' * Copyright (C) 2014 Hakim El Hattab, http://hakim.se\n' +
				' */'
		},

		qunit: {
			files: [ 'test/*.html' ]
		},

		uglify: {
			options: {
				banner: '<%= meta.banner %>\n'
			},
			build: {
				src: 'js/reveal.js',
				dest: 'js/reveal.min.js'
			}
		},

		cssmin: {
			compress: {
				files: {
					'css/reveal.min.css': [ 'css/reveal.css' ]
				}
			}
		},

		sass: {
			main: {
				files: ['sass/{,**/}*.scss'],
				tasks: ['compass'],
				options: {
					livereload: false
				}
			}
		},

		jshint: {
			options: {
				curly: false,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				eqnull: true,
				browser: true,
				expr: true,
				globals: {
					head: false,
					module: false,
					console: false,
					unescape: false
				}
			},
			files: [ 'Gruntfile.js', 'js/reveal.js' ]
		},

		connect: {
			server: {
				options: {
					port: port,
					base: '.'
				}
			}
		},

		zip: {
			'reveal-js-presentation.zip': [
				'index.html',
				'css/**',
				'js/**',
				'lib/**',
				'images/**',
				'plugin/**'
			]
		},

		watch: {
			main: {
				files: [ 'Gruntfile.js', 'js/reveal.js', 'css/reveal.css' ],
				tasks: 'default'
			},
			theme: {
				files: [ 'css/theme/source/*.scss', 'css/theme/template/*.scss' ],
				tasks: 'themes'
			},
			sass: {
				files: ['sass/{,**/}*.scss'],
				tasks: ['compass:dev']
			},
			css: {
				files: ['css/{,**/}*.css'],
				tasks: ['copy:dev']
			},
			images: {
				files: ['images/**']
			},
			js: {
				files: [
					'js/{,**/}*.js',
					'!js/{,**/}*.js'
				],
				tasks: ['jshint', 'uglify:dev']
			}
		},

		compass: {
			options: {
				config: 'config.rb',
				bundleExec: true
			},
			dev: {
				options: {
					environment: 'development'
				}
			},
			dist: {
				options: {
					environment: 'production',
					imagesDir: 'images-min',
					force: true
				}
			}
		},

		copy: {
			dev: {
				files: [
					{
						expand: true,
						src: 'css/*',
						dest: '../box-patternlab/patternlab/source/',
						filter: 'isFile'
					},
					{
						expand: true,
						src: 'js/*',
						dest: '../box-patternlab/patternlab/source/',
						filter: 'isFile'
					},
					{
						expand: true,
						src: 'images/**',
						dest: '../box-patternlab/patternlab/source/',
						filter: 'isFile'
					}
				]
			},
			dist: {
				files: [
					{
						expand: true,
						cwd: 'images',
						src: ['**', '!**/*.svg', '!**/*.png', '!**/*.jpg'],
						dest: 'images-min'
					}
				]
			}
		}

	});


	//grunt.event.on('watch', function(action, filepath) {
	//	grunt.config([
	//		'compass'
	//	], filepath);
	//});



	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-qunit' );
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-compass');
	grunt.loadNpmTasks( 'grunt-contrib-connect' );
	grunt.loadNpmTasks( 'grunt-zip' );
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Default task
	grunt.registerTask( 'default', [ 'jshint', 'cssmin', 'uglify', 'qunit' ] );

	// Theme task
	grunt.registerTask( 'themes', [ 'sass' ] );

	// Package presentation to archive
	grunt.registerTask( 'package', [ 'default', 'zip' ] );

	// Serve presentation locally
	grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

	// Run tests
	grunt.registerTask( 'test', [ 'jshint', 'qunit' ] );

};

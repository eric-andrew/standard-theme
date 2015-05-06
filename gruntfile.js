module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    noCache: true
                },
                files: {
                    'assets/css/style.css': 'scss/main.scss',
                }
            }
        },

        uglify: {
            options: {
                preserveComments: false,
            },
            dist: {
                files: {
                  'assets/js/modernizr.min.js': ['js/modernizr/modernizr.js'],
                  'js/tmp/custom.min.js': ['js/custom.js'],
                  'js/tmp/jquery.sticky.min.js': ['js/jquery-sticky/jquery.sticky.js'],
                }
            }
        },

        concat: {
            options: {
                separator: '\n\n\n',
                preserveComments: false,
                beautify: true
            },

            dist: {
                src: [
                    'assets/js/jquery/dist/jquery.min.js',
                    'js/tmp/jquery.sticky.min.js',
                    'js/tmp/custom.min.js'
                ],
                dest: 'assets/js/app.js',
            },

            test: {
                src: [
                    'assets/js/jquery/dist/jquery.min.js',
                    'js/tmp/jquery.sticky.min.js',
                    'js/tmp/custom.min.js'
                ],
                dest: 'assets/js/app.js',
            },
        },


        watch: {
            options: {
                //livereload: true,
            },

            grunt: { files: ['Gruntfile.js'] },

            styles: {
                files: ['scss/**/*.scss'], // which files to watch
                tasks: ['sass'],
                options: {
                    spawn: true
                }
            },
            js: {
                files: 'js/**/*.js',
                tasks: [ 'uglify', 'concat:dist']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('test', ['sass', 'concat:test']);
    grunt.registerTask('build', ['sass', 'uglify', 'concat:dist']);
    grunt.registerTask('default', ['sass', 'watch']);
}

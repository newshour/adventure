/*global module:false*/
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jst');
    
    grunt.initConfig({
        concat: {
            adventure: {
                src: [
                    'src/adventure/**/*.js'
                ],
                dest: 'dist/adventure.js'
            },
            adventureCss: {
                src: [
                    'src/adventure/adventure.css'
                ],
                dest: 'dist/adventure.css'
            },
            generator: {
                src: [
                    'src/generator/**/*.js'
                ],
                dest: 'dist/generator.js'
            },
            generatorCss: {
                src: [
                    'src/generator/generator.css'
                ],
                dest: 'dist/generator.css'
            }
        },
        jst: {
            adventure: {
                options: {
                    namespace: "JSTA",
                    processName: function(filename) {
                        return filename.substring(filename.lastIndexOf('/') + 1);
                    },
                    templateSettings: {
                        variable: "obj"
                    }
                },
                files: {
                    'dist/adventure.jst.js': ['src/adventure/templates/**/*.html']
                }
            },
            generator: {
                options: {
                    namespace: "JSTG",
                    processName: function(filename) {
                        return filename.substring(filename.lastIndexOf('/') + 1);
                    },
                    templateSettings: {
                        variable: "obj"
                    }
                },
                files: {
                    'dist/generator.jst.js': ['src/generator/templates/**/*.html']
                }
            }
        },
        min: {
            adventure: {
                src: ['dist/adventure.jst.js', '<config:concat.adventure.dest>'],
                dest: 'dist/adventure.min.js'
            },
            generator: {
                src: ['dist/generator.jst.js', '<config:concat.generator.dest>'],
                dest: 'dist/generator.min.js'
            }
        },
        lint: {
            files: [
                'grunt.js',
                'src/**/*.js'
            ]
        },
        watch: {
            files: '<config:lint.files>',
            tasks: 'lint'
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true,
                loopfunc: true
            }
        },
        uglify: {}
    });

    // Default task.
    grunt.registerTask('default', 'lint concat jst min');
}; 
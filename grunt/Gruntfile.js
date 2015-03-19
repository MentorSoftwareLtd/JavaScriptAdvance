'use strict';


module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-express-server');


    grunt.initConfig({
        simplemocha: {
            options: {
                globals: ['should'],
                timeout: 3000,
                ignoreLeaks: false,
                ui: 'bdd'
            },

            all: { src: ['tests/server/**/*.js'] }
        },
        jshint: {
            files: [
                //'files/**/*.js',
                'tests/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        express: {
            options: {
                // Override defaults here
            },
            test: {
                options: {
                    port: 9999,
                    script: './bin/www'
                }
            }
        },
        protractor: {
            e2e: {
                options: {
                    configFile: 'tests/client/protractor.conf.js',
                    args: {} // Target-specific arguments
                }
            }
        }


});

    // Add a default task. This is optional, of course :)
    grunt.registerTask('default', 'jshint');
    grunt.registerTask('e2e',['express','protractor']);

};

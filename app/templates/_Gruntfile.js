// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';
var moment = require('moment');

var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        watch: {
            options: {
                nospawn: true,
                livereload: LIVERELOAD_PORT
            },
            app: {
                files: [
                    'index.html',
                    'app/**/*.js',
                    'app/**/*.html'
                ]
            },
            styles: {
                files: [
                    'style/*.less'
                ],
                tasks: [
                    'less:dev'
                ]
            }
        },
        connect: {
            options: {
                port: 3000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.')
                        ];
                    }
                }
            },
            build: {
                options: {
                    open: true,
                    base: './build',
                    livereload: false,
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, './build')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%%= connect.options.port %>'
            }
        },
        less: {
            dev: {
                options: {
                    yuicompress: false
                },
                files: {
                    "style/app.css": "style/app.less"
                }
            },
            build: {
                options: {
                    yuicompress: true
                },
                files: {
                    "build/style/app.css": "style/app.less"
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "./build/",
                    mainConfigFile: "app/main.js",
                    name: "app/main.js",
                    out: "build/app/main.js",
                    optimize: "uglify2",
                    removeCombined: true
                }
            }
        },
        copy: {
            build: {
                files: [
                    // includes files within path
                    {src: ['app/**/*'], dest: 'build/'},
                    {src: ['style/**/*'], dest: 'build/'},
                    {src: ['bower_components/**/*'], dest: 'build/'},
                    {src: ['index.html'], dest: 'build/index.html'}
                ]
            }
        }
    });

    grunt.registerTask('serve', ['less:dev', 'connect:livereload', 'open', 'watch']);
    grunt.registerTask('build', ['copy:build', 'less:build', 'requirejs:compile']);
    grunt.registerTask('preview', ['build', 'connect:build:keepalive']);
};
'use strict';
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');


gulp.task('jshint', function() {
    return gulp.src('public/javascripts/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('start', function () {
    nodemon({
        script: 'bin/www',
        ext: 'js ejs',
        env: { 'NODE_ENV': 'development' }
    });
});

gulp.task('default',['jshint','start'], function() {
    // place code for your default task here
    console.log('Gulp task');
});
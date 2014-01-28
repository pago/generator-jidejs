var gulp = require('gulp'),
	less = require('gulp-less'),
	express = require('express'),
<% if(useBower) { %>
	requirejs = require('gulp-requirejs');
<% } else { %>
	browserify = require('gulp-browserify');
<% } %>

gulp.task('browserify', function() {
	gulp.src('./app/main.js')
		.pipe(browserify({
			transform: ['browserify-jide-template', 'deamdify']
		}))
		.pipe(gulp.dest('./app/app.build.js'));
});

gulp.task('less', function() {
	gulp.src('./style/app.less')
		.pipe(less())
		.pipe(gulp.dest('./style/'))
});

gulp.task('watch', function() {
	gulp.watch(['./app/**/*', './style/*.less'], function(event) {
		gulp.run('less', 'browserify');
	});
});
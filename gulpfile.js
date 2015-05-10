var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var webpack = require("gulp-webpack");
var webpackConfig = require('./webpack.config');
var path = require('path');
gulp.task("webpack", function() {
    return gulp.src('./').pipe(webpack(webpackConfig)).pipe(gulp.dest('./build'));
});
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(['./**/*.jsx', './**/*.less', '!./build/*.js'], ['webpack']);
});
gulp.task('default', ['webpack', 'watch']);
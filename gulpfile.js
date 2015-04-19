var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var path = require('path');


gulp.task('css', function() {
    return gulp.src(['./page/**/*.less'])
        .pipe(plumber({
            errorHandler: function(error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(less({
            paths: [path.join(__dirname)],
            sourceMap: true,
            relativeUrls: true
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./page/'));
});

gulp.task('default', ['css']);

gulp.task('watch', function () {
    isBuild = false;
    gulp.watch([
        'src/**/*.less'
    ], ['css']);
});
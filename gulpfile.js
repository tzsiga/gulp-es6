var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var del = require('del');

gulp.task('clean', function (cb) {
  return del(['./build'], cb);
});

gulp.task('default', ['clean'], function () {
  return gulp.src('./src/**/*.js')
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('build'));
});
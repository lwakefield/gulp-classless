var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    classless = require('./index');

gulp.task('case1', function () {
    return gulp.src('./test/examples/case1.html')
        .pipe(classless())
        .pipe(gulp.dest('./test/tmp'));
});

gulp.task('test', ['case1'], function () {
    return gulp.src('./test/*.js')
        .pipe(mocha());
});

gulp.task('default', ['test']);

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    size = require('gulp-size'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    debug = require('gulp-debug');


var filePath = {
    appjsminify: { src: ['pre.js','mpost-worker.js','post.js'], dest: 'dist/' },
};

gulp.task('build', function () {
    gulp.src(filePath.appjsminify.src)
        .pipe(debug())
        .pipe(concat('mpost-worker.js'))
        .pipe(size())
        .pipe(gulp.dest(filePath.appjsminify.dest));
});

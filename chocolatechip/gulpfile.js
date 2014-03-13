var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	prefix = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

gulp.task('styles', function () {
    gulp.src('css/dev/*.scss')
        .pipe(sass())
        .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
        .pipe(minifyCSS())
        .pipe(gulp.dest('css'))
});

gulp.task('scripts', function () {
	gulp.src('js/dev/*.js')
		.pipe(concat("scripts.js"))
		.pipe(uglify())
		.pipe(gulp.dest('js'))
});

gulp.task('watch', function () {
	gulp.watch('css/dev/*.scss', ['styles']);
	gulp.watch('js/dev/*.js', ['scripts']);
});


gulp.task('default', ['watch']);	
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-ruby-sass'),
	prefix = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	webserver = require('gulp-webserver'),
	uglify = require('gulp-uglify');

gulp.task('webserver', function() {
	gulp.src('.')
	.pipe(webserver({
		//livereload: true,
		livereload: {
			enable: true,
			filter: function (filename) {
				if (filename.match(/dev/)) { return false; }
				else { return true; }
			}
		},
		port: '8080'
	}));
});

gulp.task('styles', function () {
    gulp.src('assets/css/dev/*.scss')
        .pipe(sass())
		.on('error', function (err) { console.log(err.message); })
        .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
        .pipe(minifyCSS())
        .pipe(gulp.dest('assets/css'))
});

gulp.task('scripts', function () {
	gulp.src('js/dev/*.js')
		.pipe(concat("vendor/scripts.js"))
		.pipe(uglify())
		.pipe(gulp.dest('js'))
});


gulp.task('watch', function () {
	gulp.watch('assets/css/dev/*.scss', ['styles']);
	gulp.watch('vendor/*.js', ['scripts']);
});


gulp.task('default', ['webserver','watch']);

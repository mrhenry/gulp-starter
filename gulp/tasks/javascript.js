const gulp          = require('gulp');
const config        = require('../config').js;
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

gulp.task('javascript', () => {
	return browserify(config.src, {
		debug: true
	}).transform(babelify, {
		presets: ['es2015']
	}).bundle()
	  .pipe(source(config.src))
	  .pipe(buffer())
	  .pipe(rename(config.bundleName))
	  .pipe(gulp.dest(config.dest))
	  .pipe(uglify())
	  .pipe(rename(config.bundleName.replace('.js', '.min.js')))
	  .pipe(gulp.dest(config.dest));
});
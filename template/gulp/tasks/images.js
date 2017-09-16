const gulp = require('gulp');
const config = require('../config').images;
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');

gulp.task('images', () => gulp
		.src(config.src)
		.pipe(changed(config.dest))
		.pipe(imagemin())
		.pipe(gulp.dest(config.dest)));

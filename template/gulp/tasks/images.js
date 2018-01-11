const gulp = require('gulp');
const config = require('../config').images;
const imagemin = require('gulp-imagemin');

const images = () => gulp
	.src(config.src, { since: gulp.lastRun(images) })
	.pipe(imagemin())
	.pipe(gulp.dest(config.dest));

module.exports = images;

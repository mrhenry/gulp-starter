const gulp = require('gulp');
const config = require('../config').fonts;

const fonts = () => gulp
	.src(config.src, { since: gulp.lastRun(fonts) })
	.pipe(gulp.dest(config.dest));

module.exports = fonts;

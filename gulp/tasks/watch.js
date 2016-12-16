const gulp = require('gulp');
const config = require('../config');
const watch = require('gulp-watch');

gulp.task(
	'watch',
	['fonts', 'images', 'css', 'javascript'],
	() => {
		watch(config.css.watch, () => gulp.start('css'));
		watch(config.images.src, () => gulp.start('images'));
		watch(config.fonts.src, () => gulp.start('fonts'));
		watch(config.js.watch, () => gulp.start('javascript'));
	}
);
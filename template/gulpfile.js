const gulp = require('gulp');
const config = require('./gulp/config');

const css = require('./gulp/tasks/css');
const fonts = require('./gulp/tasks/fonts');
const icons = require('./gulp/tasks/icons');
const images = require('./gulp/tasks/images');
const { es6, babel, javascript } = require('./gulp/tasks/javascript');

exports.css = css;
exports.fonts = fonts;
exports.images = images;

gulp.task('javascript:es6', es6);
gulp.task('javascript:babel', babel);
exports.javascript = javascript;

gulp.task('default', gulp.parallel(css, fonts, icons, images, javascript));

const watch = () => {
	gulp.watch(config.css.watch, css);
	gulp.watch(config.images.src, images);
	gulp.watch(config.fonts.src, fonts);
	gulp.watch(config.js.watch, javascript);
};

gulp.task('watch', gulp.series('default', watch));

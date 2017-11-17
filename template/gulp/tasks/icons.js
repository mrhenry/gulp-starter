const gulp = require('gulp');
const config = require('../config').icons;
const cheerio = require('gulp-cheerio');
const imagemin = require('gulp-imagemin');
const svgstore = require('gulp-svgstore');
const rename = require('gulp-rename');

gulp.task('icons', () => {
	const svgoSettings = {
		plugins: [
			{ cleanupAttrs: true },
			{ removeViewbox: false },
			{ removeRasterImages: true },
			{ removeDoctype: true },
			{ removeComments: true },
			{
				cleanupNumericValues: {
					floatPrecision: 2,
				},
			},
		],
	};

	return gulp
		.src(config.src)
		.pipe(rename({ prefix: 'icon-' }))
		.pipe(imagemin([
			imagemin.svgo(svgoSettings),
		]))
		.pipe(svgstore({
			inlineSvg: true,
			fileName: config.filename,
		}))
		.pipe(cheerio({
			run: ($) => {
				$('svg').attr('style', 'display:none');
			},
			parserOptions: {
				xmlMode: true,
			},
		}))
		.pipe(gulp.dest(config.dest));
});

const gulp     = require('gulp');
const config   = require('../config').icons;
const changed  = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const svgstore = require('gulp-svgstore');
const rename = require('gulp-rename');

gulp.task('icons', () => {
	return gulp
		.src(config.src)
		.pipe(rename({ prefix: 'icon-' }))
		.pipe(imagemin([
			imagemin.svgo({
				plugins: [
					{ cleanupAttrs: true },
					{ removeViewbox: false },
					{ removeRasterImages: true },
					{ removeDoctype: true },
					{ removeComments: true},
					{ 
						cleanupNumericValues: {
							floatPrecision: 2
						}
					}
				]
			})
		]))
		.pipe(svgstore({
			inlineSvg: true,
			fileName: config.filename,
        }))
		.pipe(gulp.dest(config.dest));
});
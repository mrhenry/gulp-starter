const gulp          = require('gulp');
const config        = require('../config').css;
const postcss       = require('gulp-postcss');
const mqPacker      = require('css-mqpacker');
const cssnano       = require('cssnano');
const cssnext       = require('postcss-cssnext');
const inlineImports = require('postcss-import');
const nested        = require('postcss-nested');

gulp.task('css', () => {
	// cssnext also includes autoprefixer
	const processors = [
		inlineImports({ path: config.src }),
		cssnext({ browsers: config.browsers }),
		nested(),
		mqPacker(),
		cssnano({ autoprefixer: false })
	];

	return gulp
		.src(config.src)
		.pipe(postcss(processors))
		.pipe(gulp.dest(config.dest));
});
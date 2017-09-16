const gulp = require('gulp');
const config = require('../config').js;
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const rollup = require('rollup-stream');
const resolve = require('rollup-plugin-node-resolve');
const babili = require('gulp-babel-minify');

gulp.task('javascript:es6', () => {
	const build = () => {
		const rollupSettings = {
			input: config.src,
			format: 'es',
			plugins: [resolve()],
		};

		return rollup(rollupSettings)
			.pipe(source(config.bundleName.replace('.js', '.es6.js')))
			.pipe(buffer());
	};

	return build()
		.pipe(gulp.dest(config.dest))
		.pipe(babili())
		.pipe(rename(config.bundleName.replace('.js', '.es6.min.js')))
		.pipe(gulp.dest(config.dest));
});

gulp.task('javascript:babel', () => {
	const build = () => {
		return browserify(config.src, { debug: true })
			.transform(babelify, { presets: ['es2015'] })
			.bundle()
			.pipe(source(config.bundleName))
			.pipe(buffer());
	};

	return build()
		.pipe(gulp.dest(config.dest))
		.pipe(uglify())
		.pipe(rename(config.bundleName.replace('.js', '.min.js')))
		.pipe(gulp.dest(config.dest));
});

gulp.task('javascript', [
	'javascript:es6',
	'javascript:babel',
]);

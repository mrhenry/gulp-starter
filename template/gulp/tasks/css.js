const gulp = require('gulp');
const config = require('../config').css;
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const cssnext = require('postcss-cssnext');
const inlineImports = require('postcss-import');
const nested = require('postcss-nested');
const rename = require('gulp-rename');

const processors = [
	inlineImports({ path: config.src }),
	nested(),
	cssnext({ browsers: config.browsers }),
];

const css = () => gulp
	.src(config.src)
	.pipe(postcss(processors))
	.pipe(gulp.dest(config.dest))
	.pipe(postcss([cssnano()]))
	.pipe(rename({ suffix: '.min' }))
	.pipe(gulp.dest(config.dest));

module.exports = css;

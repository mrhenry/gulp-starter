const gulp     = require('gulp');
const config   = require('../config').fonts;
const changed  = require('gulp-changed');

gulp.task('fonts', () => {
	return gulp
		.src(config.src)
		.pipe(changed(config.dest))
		.pipe(gulp.dest(config.dest));
});
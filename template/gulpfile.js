const gulp = require('gulp');
const MrHenry = require('gulp-registry-mrhenry');
const config = require('./gulp/config');

const tasks = new MrHenry(config);

gulp.registry(tasks);

const gulp = require('gulp');
const del  = require('del');

gulp.task('clean', () => {
    return del([
        './topics/*/*.js',
        './playground/*/*.js'
    ]);
});
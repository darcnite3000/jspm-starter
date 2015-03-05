var gulp        = require('gulp'),
    vinylPaths  = require('vinyl-paths'),
    del         = require('del'),
    paths       = require('../paths');

gulp.task('clean', function() {
  return gulp.src([paths.output])
    .pipe(vinylPaths(del));
});
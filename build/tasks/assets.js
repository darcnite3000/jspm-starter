var gulp          = require('gulp'),
    changed       = require('gulp-changed')
    paths         = require('../paths');

gulp.task('assets', function() {
  return gulp.src(paths.assets.globs)
    .pipe(changed(paths.assets.output))
    .pipe(gulp.dest(paths.assets.output));
})
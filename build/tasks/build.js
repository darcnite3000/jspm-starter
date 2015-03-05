var gulp          = require('gulp'),
    runSequence   = require('run-sequence');

gulp.task('build.clean', function(cb) {
  return runSequence(
    'clean',
    'build',
    cb
    );
});

gulp.task('build',['scripts','html','styles','assets']);
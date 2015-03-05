var gulp = require('gulp'),
    reload = require('browser-sync').reload,
    paths = require('../paths');

gulp.task('watch',['serve'], function() {
  gulp.watch(paths.scripts.source, ['scripts']);
  gulp.watch(paths.html.source, ['html']);
  gulp.watch(paths.styles.globs, ['styles']);

  gulp.watch(paths.output+"**/*.*").on('change', reload);
  gulp.watch(paths.serverRoot+"index.html").on('change', reload);
});
var gulp          = require('gulp'),
    changed       = require('gulp-changed'),
    paths         = require('../paths');


gulp.task('html', function() {
  return gulp.src(paths.html.source)
    .pipe(changed(paths.html.output,{extension: '.html'}))
    .pipe(gulp.dest(paths.html.output));
});

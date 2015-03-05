var gulp          = require('gulp'),
    changed       = require('gulp-changed'),
    sass          = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    autoprefixer  = require('gulp-autoprefixer'),
    paths         = require('../paths');

module.exports = gulp.task('styles', function() {
  return gulp.src(paths.styles.globs)
    .pipe(changed(paths.styles.output,{extension: '.css'}))
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sass({
        includePaths: require('node-neat').includePaths
      }))
      .pipe(autoprefixer())
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/'+paths.root}))
    .pipe(gulp.dest(paths.styles.output));
})
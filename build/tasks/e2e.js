var gulp              = require('gulp'),
    paths             = require('../paths'),
    babel             = require('gulp-babel'),
    plumber           = require('gulp-plumber'),
    webdriver_update  = require('gulp-protractor').webdriver_update,
    protractor        = require('gulp-protractor').protractor;

gulp.task('webdriver_update', webdriver_update);

gulp.task('build-e2e', function() {
  return gulp.src(paths.e2e.source)
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest(paths.e2e.output));
});

gulp.task('e2e',['webdriver_update', 'build-e2e'], function() {
  return gulp.src(paths.e2e.output+"*.js")
    .pipe(protractor({
      configFile: paths.e2e.config,
      args: ['--baseUrl', 'http://127.0.0.1:9000']
    }))
    .on('error', function(e) {
      throw e;
    });
});
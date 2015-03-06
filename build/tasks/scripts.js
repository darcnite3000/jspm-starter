var gulp            = require('gulp'),
    changed         = require('gulp-changed'),
    sourcemaps      = require('gulp-sourcemaps'),
    plumber         = require('gulp-plumber'),
    babel           = require('gulp-babel'),
    shell           = require('gulp-shell'),
    paths           = require('../paths'),
    babelOptions    = require('../babel-options'),
    assign          = Object.assign || require('object.assign');

gulp.task('scripts', function() {
  return gulp.src(paths.scripts.source)
    .pipe(plumber())
    .pipe(changed(paths.scripts.output,{extension: '.js'}))
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(babel(assign({},babelOptions,{modules: 'common'})))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/'+paths.root}))
    .pipe(gulp.dest(paths.scripts.output));
});


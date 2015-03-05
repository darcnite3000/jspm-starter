var gulp            = require('gulp'),
    changed         = require('gulp-changed'),
    sourcemaps      = require('gulp-sourcemaps'),
    plumber         = require('gulp-plumber'),
    babel           = require('gulp-babel'),
    shell           = require('gulp-shell'),
    runSequence     = require('run-sequence'),
    paths           = require('../paths'),
    babelOptions    = require('../babel-options'),
    bundles         = require('../jspm-bundles'),
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

function bundleCommands() {
  var bundleCommands = [];
  for (bundle in bundles) {
    if (bundles.hasOwnProperty(bundle)) {
      var modules = bundles[bundle].includes.join(' + ');
      if(bundles[bundle].excludes.length > 0){
        modules =modules+" - "+bundles[bundle].excludes.join(' - ');
      }
      bundleCommands.push("jspm bundle "+modules+" "+bundle+".js --inject");
    }
  }
  return bundleCommands;
}

gulp.task('build-bundle', shell.task(bundleCommands()));
gulp.task('unbundle', shell.task(['jspm unbundle']));
gulp.task('bundle', function(cb) {
  runSequence(
    'scripts',
    'build-bundle',
    cb
  );
});
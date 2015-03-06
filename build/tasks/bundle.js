var gulp            = require('gulp'),
    shell           = require('gulp-shell'),
    runSequence     = require('run-sequence'),
    paths           = require('../paths'),
    bundles         = require('../jspm-bundles');

gulp.task('build-bundle', shell.task(bundleCommands()));
gulp.task('unbundle', shell.task(['jspm unbundle']));
gulp.task('bundle', function(cb) {
  runSequence(
    'scripts',
    'build-bundle',
    cb
  );
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

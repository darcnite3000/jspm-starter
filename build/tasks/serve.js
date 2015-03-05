var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    paths = require('../paths');

gulp.task('serve', ['build.clean'], function(done) {
  browserSync({
    open: false,
    port: 9000,
    server: {
      baseDir: paths.serverRoot,
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});
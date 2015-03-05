var gulp      = require('gulp'),
    karma     = require('karma').server,
    path = require('path');
    paths = require('../paths.js');

var configPath = path.join(__dirname,'..','..',paths.test.config);

gulp.task('test', function(done) {
  karma.start({
    configFile: configPath,
    singleRun: true
  },function(e) {
    done();
  });
});

gulp.task('test.watch', function(done) {
  karma.start({
    configFile: configPath
  },function(e) {
    done();
  });
});
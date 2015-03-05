var path = require('path');

var appRoot = 'src/',
    destRoot = 'dist/',
    testRoot = 'test/',
    serverRoot = './';

module.exports = {
  root: appRoot,
  output: destRoot,
  serverRoot: serverRoot,
  scripts: {
    source: appRoot+'**/*.js',
    output: destRoot
  },
  html: {
    source: appRoot+'**/*.html',
    output: destRoot
  },
  styles: {
    source: appRoot+'assets/styles/**/*.scss',
    output: destRoot+'assets/styles/',
    globs: [appRoot+'assets/styles/**/*.scss','!**/_*.scss']
  },
  assets: {
    source: appRoot+'assets/**/*.*',
    output: appRoot+'assets/',
    globs: [appRoot+'assets/**/*.*','!**/*.scss']
  },
  jspm: {
    config: 'system.conf.js'
  },
  test: {
    source: testRoot+'unit/**/*.js',
    config: 'karma.conf.js'
  },
  e2e: {
    source: testRoot+'e2e/src/*.js',
    output: testRoot+'e2e/dist/',
    config: 'protractor.conf.js'
  }
};
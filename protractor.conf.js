exports.config = {
  directConnect: true,
  capabilities: {
    'browserName': 'chrome'
  },
  seleniumServerJar: './node_modules/gulp-protractor/node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',
  specs: ['test/e2e/dist/*.js'],
  plugins: [],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
}
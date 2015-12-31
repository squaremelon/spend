
// Karma configuration
// Generated on Wed Dec 23 2015 14:16:12 GMT+1100 (AEDT)

module.exports = function(config) {
  config.set({
    basePath: '',
    plugins: [
      'karma-jasmine',
      'karma-firefox-launcher',
      'karma-super-dots-reporter',
      'karma-coverage'
    ],
    frameworks: [
      'jasmine',
    ],
    files: [
      {pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true},
      {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/angular2.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/router.dev.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true},
      {pattern: 'node_modules/es6-shim/es6-shim.js', included: true, watched: true},
      {pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true},
      {pattern: 'tests/karma-test-shim.js', included: true, watched: true},
      {pattern: 'static/js/system-config.js', included: true, watched: true},
      {pattern: 'app/**/*.js', included: false, watched: true},
      {pattern: 'static/**/*.js', included: false, watched: true},
      {pattern: 'static/**/*.less', included: false, watched: true},
      {pattern: 'tests/specs/**/*.spec.js', included: false, watched: true}
    ],
    proxies: {
      "/app/": "/base/app/"
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: true,
    browsers: ['Firefox'],
    singleRun: true,
    concurrency: 1,
  })
}

// Karma configuration
// Generated on Mon Aug 24 2015 20:35:08 GMT-0700 (Pacific Daylight Time)
//require('mocha-sinon');
var path = require('path');

var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};


var initMochaSinon = function(files) {
  files.unshift(createPattern(path.dirname(require.resolve('mocha')) + '/mocha-sinon.js'));
};

initMochaSinon.$inject = ['config.files'];

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'app/',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha','phantomjs-shim','requirejs','sinon','chai-as-promised','chai',{"framework:mocha-sinon": ['factory', initMochaSinon]}],

    // list of files / patterns to load in the browser
    files: [
      {
        pattern: './**/*.js',
        included: false
      },
      'main-test.js'
    ],

    // list of files to exclude
    exclude: [
      'main.js',
      'config.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome','PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    client : {
      mocha : {
        ignoreLeaks : false
      }
    }
  })
};

var allTestFiles = [];
var TEST_REGEXP = /^((?!main).)*test\.js$/i; // Should include all files that end in "-test.js", but NOT "main-test.js"

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
    allTestFiles.push(normalizedTestModule);
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  // dynamically load all test files
  deps: allTestFiles,

  // Bad chaining to ensure proper loading of all dependencies I want available in my tests
  shim: {
    lodash : {
      exports : '_'
    },
    angular : {
      exports : 'angular',
      deps : ['sinon-ng']
    },
    "sinon-ng" : {
      deps   : ['the-real-angular'],
      exports: 'sinon'
    },
    'the-real-angular' : {
      exports : 'angular'
    }
  }
  ,

  paths: {
    lodash: './bower_components/lodash/lodash',
    modernizer: './bower_components/modernizer/modernizr',
    angular : './bower_components/angular-mocks/angular-mocks',
    "sinon-ng": './bower_components/sinon-ng/sinon-ng',
    "the-real-angular": './bower_components/angular/angular',
    "env-config": './config/env-test-config'
  },

  // we have to kickoff mocha, as it is asynchronous
  callback: window.__karma__.start
});

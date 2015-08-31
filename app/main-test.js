var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

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
      exports : 'angular'
    },
    "sinon-ng" : {
      deps : ['angular']
    },
    "angular-mocks" : {
      deps:['sinon-ng'],
      exports: 'angular.mocks'
    }
  },

  paths: {
    requirejs: 'bower_components/requirejs/require',
    angular: 'bower_components/angular/angular',
    lodash: 'bower_components/lodash/lodash',
    modernizer: 'bower_components/modernizer/modernizr',
    "sinon-ng": 'bower_components/sinon-ng/sinon-ng',
    "angular-mocks": 'bower_components/angular-mocks/angular-mocks'
  },

  // we have to kickoff mocha, as it is asynchronous
  callback: window.__karma__.start
});

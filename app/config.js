require.config({
  shim: {
    lodash: {
      exports: '_'
    },
    angular: {
      exports: 'angular'
    }
  },
  paths: {
    requirejs: 'bower_components/requirejs/require',
    angular: 'bower_components/angular/angular',
    lodash: 'bower_components/lodash/lodash',
    modernizer: 'bower_components/modernizer/modernizr'
  },
  packages: [

  ]
});

require(['main']);

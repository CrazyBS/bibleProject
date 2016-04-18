define(['angular','lodash','module/bible/factory/referenceFactory'], function (angular, _) {
  var module = angular.module('bibleApp.explorerController',['bibleApp.referenceFactory']);

  module.controller('bibleExplorer', ['$scope','versionFactory', function ($scope, versionFactory) {

  }]);
});
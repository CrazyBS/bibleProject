define(['angular'], function (angular) {
  var module = angular.module('bibleApp.editorController', []);

  module.controller('bibleEditor', ['$scope', function ($scope) {
    $scope.test = {foo:'bar'};
  }]);
});

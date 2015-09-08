define(['module/bible/controller/explorer'], function () {
  describe('Bible Module Tests', function () {
    describe('Explorer Controller Tests', function () {
      beforeEach(module('bibleApp'));

      beforeEach(inject(function ($controller, $rootScope) {
        this.explorerController = $controller('bibleExplorer', {'$scope': $rootScope});
        this.$scope = $rootScope;
      }));
    });
  });
});

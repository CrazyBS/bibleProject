define(['module/bible/controller/editor'], function () {
  describe('Bible Module Tests', function () {
    describe('Editor Controller Tests', function () {
      beforeEach(module('bibleApp'));

      beforeEach(inject(function ($controller, $rootScope) {
        this.editorController = $controller('bibleEditor', {'$scope': $rootScope});
        this.$scope = $rootScope;
      }));
    });
  });
});
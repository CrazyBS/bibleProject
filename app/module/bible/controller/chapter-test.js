define(['module/bible/controller/chapter'], function () {
  describe('Bible Module Tests', function () {
    describe('Chapter Controller Tests', function () {
      beforeEach(module('bibleApp'));

      beforeEach(inject(function ($controller, $rootScope) {
        this.chapterController = $controller('bibleChapter', {'$scope': $rootScope});
        this.$scope = $rootScope;
      }));

      it('testing everything is happy', function () {
        expect(true).toEqual(true);
      })
    });
  });
});

define(['module/bibleModule','angular-mocks'], function () {
  describe("Bible Module Tests", function () {
    it("tests nothing", function () {
      expect("asdf").to.equal("asdf");
    });

    it('should not worry and be happy', inject(function($http) {
      var foo = {
            bar: function() {
              return $http.post('somewhere', {stuff: 'things'});
            }
          },
          res = {data: 'other stuff'};

      this.sinon.stub(foo, 'bar').fulfills(res);

      return expect(foo.bar()).to.eventually.equal(res);
    }));

  });
});
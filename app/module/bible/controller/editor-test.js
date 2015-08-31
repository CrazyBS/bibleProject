define(['module/bible/controller/editor'], function (editor) {
  describe('Bible Module Tests', function () {
    describe('Editor Controller Tests', function () {
      it('tests nothing', function testsNothing () {
        var stub = this.sinon.stub();
        stub.returns(5);

        expect(stub()).to.equal(5);
      })
    });
  });
});
define(['module/bibleModule'], function () {
    describe("Bible Module Tests", function () {
        beforeEach(module('bibleApp'));
        it('should not worry and be happy', function (done) {
            inject(function ($http, $httpBackend) {
                var foo = {
                    bar: function () {
                        return $http.post('somewhere', {stuff: 'things'});
                    }
                };
                var res = {data: 'other stuff'};

                this.sinon.spy(foo, 'bar');

                $httpBackend.when('POST', 'somewhere').respond(res);

                var promise = foo.bar();

                promise.then(function (resp) {
                    expect(resp.data).toEqual(res);
                    done();
                });

                $httpBackend.flush();
            });
        });
    });
});
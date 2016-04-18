define(['module/bible/factory/referenceFactory', 'env-config'], function (referenceFactory, env_config) {
    describe('Bible Module Tests', function () {
        describe('Reference Factory Tests', function () {
            var versionFactory, httpBackend;

            beforeEach(module('bibleApp'));

            beforeEach(inject(function (_versionFactory_, $httpBackend) {
                versionFactory = _versionFactory_;
                httpBackend = $httpBackend;
            }));

            describe('getAllVersions', function () {
                var URL = env_config.services.ref + '/versions.js';
                var responseData = getResponseData();
                var expectedData = {};

                beforeEach(function () {
                    httpBackend.when('GET', URL).respond(responseData);
                });

                it('should call a GET on the reference service endpoint', function () {
                    httpBackend.expectGET(URL);
                    versionFactory.getVersions();
                    httpBackend.flush();
                });

                it('should return only a simplified response', function (done) {
                    var promise = versionFactory.getVersions();
                    promise.then(function (data) {
                        expect(data).toEqual(expectedData);
                        done();
                    });
                    httpBackend.flush();
                });
            })
        });
    });
});

var getResponseData = function () {
    return {
        response: {
            versions: [
                {
                    "auditid": "0",
                    "display_abbreviation": "NASB",
                    "version": "eng-NASB",
                    "id": "eng-NASB",
                    "name": "New American Standard Bible",
                    "short_desc": null,
                    "description": null,
                    "active": 1,
                    "active_api": 1,
                    "listed": 1,
                    "orderindex": "99",
                    "lang": "eng-US",
                    "lang_code": "ISO 639-3",
                    "copyright": "\n      New American Standard Bible, Copyright  1960,1962,1963,1968,1971,1972,1973,1975,1977,1995 by The Lockman Foundation.  Used by permission.\n    ",
                    "contact_url": "http:\/\/www.lockman.org",
                    "audio": "NONE",
                    "sections": [{
                        "version_id": "eng-NASB",
                        "id": "OT",
                        "name": "Old Testament"
                    }, {
                        "version_id": "eng-NASB", 
                        "id": "NT",
                        "name": "New Testament"
                    }]
                }
            ],
            meta: {}
        }
    }
};
/**
 * Created by CrazyBS on 4/17/2016.
 */

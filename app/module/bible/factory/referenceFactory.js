define(['angular', 'lodash', 'env-config'], function (angular, _, config) {
    var module = angular.module('bibleApp.referenceFactory', []);

    module.factory('versionFactory', ['$http', '$log', function ($http, $log) {
        var versionFactory = {};

        versionFactory.getVersions = function getAllVersions() {
            return $http.get(config.services.ref + '/versions.js').then(
                /**
                 *  Return
                 * @returns {Object} data from the
                 */
                function getAllVersionsSuccess(response) {
                    var versionData = response.data;
                    return versionData;
                },
                function getAllVersionsError(response) {
                    $log.error("Unable to getAllVersions()");
                    $log.error(response);
                    return response;
                }
            );
        };

        return versionFactory;
    }]);

});

'use strict';

/**
 * @ngdoc service
 * @name visageNgCommon.StaticData
 * @description
 * # StaticData
 * Factory in the visageNgCommon.
 */
angular.module('visageNgCommon')
  .factory('StaticData', function ($q, $http, localApi) {
    var calls = [
      $http.get(localApi.countries),
      $http.get(localApi.jobRoles),
      $http.get(localApi.employmentType),
      $http.get(localApi.employmentStatus),
      $http.get(localApi.industries),
      $http.get(localApi.salaryRange),
      $http.get(localApi.jobStatus),
      $http.get(localApi.areas),
      $http.get(localApi.availability)
    ];

    // Public API here
    return {
      init: function () {
        return $q.all(calls);
      },
      getReviewReasons : function () {
        return $http.get(localApi.candidateReviewReasons);
      }
    };
  });

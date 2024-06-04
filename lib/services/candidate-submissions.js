'use strict';

/**
 * @ngdoc service
 * @name visageNgCommon.JobOffer
 * @description
 * # JobOffer
 * Factory in the visageNgCommon.
 */
angular.module('visageNgCommon')
  .factory('CandidateSubmission', function (cachedResource, endpointsApi, ENV) {

    var path = ENV.apiEndpoint +
      '/:path/:jobId' +
      endpointsApi.candidates +
      '/:_id';

    var CandidateSubmission = cachedResource(path,
      {_id: '@_id'}, {
        queryByJob: {
          method: 'GET',
          params: {
            path: 'job-offers',
            jobId: '@jobId'
          },
          isArray: true
        },
        queryByJobCount: {
          method: 'GET',
          url : path + '/count',
          params: {
            path: 'job-offers',
            jobId: '@jobId'
          },
          isArray: false
        },
        generateReportSign: {
          method: 'GET',
          url : path + '/signing',
          params: {
            path: 'job-offers',
            jobId: '@jobId'
          },
          isArray: false
        }
      });

    return CandidateSubmission;
  });

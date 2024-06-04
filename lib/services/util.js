'use strict';

/**
 * @ngdoc service
 * @name visageNgCommon.util
 * @description
 * # util
 * Factory in the visageNgCommon.
 */
angular.module('visageNgCommon')
  .factory('Util', function (ENV, endpointsApi) {

    return {
      getDownloadUrl: function (identifier, originalFilename, mediaType) {
        return ENV.apiEndpoint +
          endpointsApi.media +
          '/download/' +
          mediaType +
          '/' +
          identifier +
          '?filename=' +
          encodeURIComponent(originalFilename);
      },
      getRelativeDownloadUrl: function (identifier, originalFilename, mediaType) {
        return ENV.apiEndpoint +
          endpointsApi.media +
          '/download/' +
          mediaType +
          '/' +
          identifier +
          '?filename=' +
          originalFilename;
      },
      isObject: function (val) {
        if (val === null) {
          return false;
        }
        return ( (typeof val === 'function') || (typeof val === 'object') );
      }
    };
  });

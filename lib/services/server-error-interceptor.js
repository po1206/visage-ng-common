'use strict';

/**
 * @ngdoc service
 * @name visageNgCommon.ServerErrorInterceptor
 * @description
 * # ServerErrorInterceptor
 * Factory in the visageNgCommon.
 */
angular.module('visageNgCommon')
  .factory('ServerErrorInterceptor', function ($q, $injector) {

        function isOutdated(response) {
      return !!response.data.error && response.data.error.name === 'VersionError';
    }

    return {
      // optional method
      'responseError': function (rejection) {
        // do something on error
        if (isOutdated(rejection)) {
          //FIXME ugly,
          // circular dependency if not injected at runtime, but I do not want global events everywhere....
          // http://www.thoughtdelimited.org/thoughts/post.cfm/angular-material-design-mdtoast-and-httpinterceptors
          var ErrorHandler = $injector.get('ErrorHandler');

          ErrorHandler.objectIsOutdated();
          //$timeout($route.reload(),3000);
        }
        return $q.reject(rejection);
      }
    };
  });

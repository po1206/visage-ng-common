'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:indicators
 * @description
 * # indicators
 */
angular.module('visageNgCommon')
  .directive('indicators', function () {
    return {
      templateUrl: 'views/templates/indicators.tmpl.html',
      restrict: 'E',
      scope: {
        indicators:'='
      }
    };
  });

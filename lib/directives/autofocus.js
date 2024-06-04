'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:autoFocus
 * @description
 * # autoFocus
 */
angular.module('visageNgCommon')
  .directive('autoFocus', function ($timeout) {
    return {
      restrict: 'AC',
      link: function (_scope, _element) {
        $timeout(function () {
          _element[0].focus();
        }, 0);
      }
    };
  });

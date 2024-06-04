'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:announcement
 * @description
 * # announcement
 */
angular.module('visageNgCommon')
  .directive('notice', function () {
    return {
      templateUrl: 'views/templates/notice.tmpl.html',
      transclude:true,
      replace:true,
      restrict: 'E'
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:jobRequirements
 * @description
 * # jobRequirements
 */
angular.module('visageNgCommon')
  .directive('jobRequirements', function () {
    return {
      templateUrl: 'views/templates/job-requirements.tmpl.html',
      restrict: 'E',
      scope: {
        requirements : '='
      },
      link: function postLink(scope) {
        scope.readonly = true;
      }
    };
  });

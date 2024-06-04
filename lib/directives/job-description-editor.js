'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:jobDescriptionEditor
 * @description
 * # jobDescriptionEditor
 */
angular.module('visageNgCommon')
  .directive('jobDescriptionEditor', function () {
    return {
      templateUrl: 'views/templates/job-description-editor.tmpl.html',
      restrict: 'E',
      scope: {
        description : '=',
        updateDescription : '&onChange',
        disabled : '=ngDisabled'
      },
      link: function (scope) {
        scope.$watch('description', function (newDesc) {
          if(newDesc) {
            scope.updateDescription();
          }
        },true);
      }
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:candidatesList
 * @description
 * # candidatesList
 */
angular.module('visageNgCommon')
  .directive('candidatesList', function () {
    return {
      templateUrl: 'views/templates/candidates-list.tmpl.html',
      restrict: 'E',
      scope: {
        candidatesSubmissions : '=',
        selectedCandidateSubmission:'='
      },
      link: function postLink(scope) {

        scope.loadSubmission = function (candidateSubmission) {
          scope.selectedCandidateSubmission.selected = candidateSubmission;
        };

      }
    };
  });

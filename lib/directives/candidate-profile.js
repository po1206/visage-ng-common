'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:candidateProfile
 * @description
 * # candidateProfile
 */
angular.module('visageNgCommon')
  .directive('candidateProfile', function (Util, $window) {
    return {
      templateUrl: 'views/templates/candidate-profile.tmpl.html',
      restrict: 'E',
      scope : {
        candidateSubmission : '='
      },
      link: function postLink(scope, element, attrs) {

        scope.$watch('candidateSubmission', function (candidateSubmission) {
          if(candidateSubmission) {
            var candidate = candidateSubmission.candidate;
            scope.urlPreviewCV =
              Util.getDownloadUrl(candidate.candidate.cv.identifier,
                candidate.candidate.cv.originalFilename,
                'CV');
          }
        });

        scope.downloadCV = function () {
          $window.open(scope.urlPreviewCV, '_blank');
        };

      }
    };
  });

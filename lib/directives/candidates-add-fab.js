'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:candidatesAddFab
 * @description
 * # candidatesAddFab
 */
angular.module('visageNgCommon')
  .directive('candidatesAddFab', function ($mdMedia,
    $mdDialog) {
    return {
      templateUrl: 'views/templates/candidates-add-fab.tmpl.html',
      restrict: 'E',
      scope: {
        job: '=',
        referredBy: '=',
        selectedCandidateSubmission: '=',
        indicators: '=',
        doneAdding: '&onDoneAdding'
      },
      link: function postLink(scope) {
        scope.showReferCandidateDialog = function (ev) {
          var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && scope.customFullscreen;
          $mdDialog.show({
              controller: 'SubmitCandidateDialogCtrl',
              templateUrl: 'views/submit-candidate-dialog.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose: false,
              fullscreen: useFullScreen,
              locals: {
                job: scope.job,
                indicators: scope.indicators,
                referrer: scope.referredBy
              }
            })
            .then(function (modified) {
              if(modified) {
                scope.doneAdding();
              }
            })
            .catch(function (err) {
              console.error('Unable to submit this candidate');
              console.error(err);
            });

          scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
          }, function (wantsFullScreen) {
            scope.customFullscreen = (wantsFullScreen === true);
          });
        };
      }
    };
  });

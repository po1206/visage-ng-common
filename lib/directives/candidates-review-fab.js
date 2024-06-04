'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:candidatesReviewFab
 * @description
 * # candidatesReviewFab
 */
angular.module('visageNgCommon')
  .directive('candidatesReviewFab', function ($mdMedia,
    $mdDialog,
    candidateRating) {
    return {
      templateUrl: 'views/templates/candidates-review-fab.tmpl.html',
      restrict: 'E',
      scope: {
        operations: "=",
        job:"=",
        reviewBy:"=",
        selectedCandidateSubmission:"=",
        doneReviewing : '&onDoneReviewing'
      },
      link: function postLink(scope) {
        function reviewCandidate(ev, rating) {
          var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
          $mdDialog.show({
              controller: 'CandidateReviewDialogCtrl',
              templateUrl: 'views/candidate-review-dialog.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose: true,
              locals: {
                rating: rating,
                candidateSubmission: scope.selectedCandidateSubmission.selected,
                reviewer: scope.reviewBy,
                operations: scope.operations
              },
              fullscreen: useFullScreen
            })
            .then(function () {
              scope.doneReviewing();
            });
          scope.$watch(function () {
            return $mdMedia('xs') || $mdMedia('sm');
          }, function (wantsFullScreen) {
            scope.customFullscreen = (wantsFullScreen === true);
          });
        }

        scope.qualify = function (ev) {
          reviewCandidate(ev, candidateRating.qualified);
        };

        scope.disqualify = function (ev) {
          reviewCandidate(ev, candidateRating.disqualified);
        };

        scope.outstanding = function (ev) {
          reviewCandidate(ev, candidateRating.outstanding);
        };

        scope.shortlist = function (ev) {
          reviewCandidate(ev, candidateRating.shortlisted);
        };

        scope.viewRequirements = function (ev) {
          var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
          $mdDialog.show({
            controller: 'ReviewRequirementsDialogCtrl',
            templateUrl: 'views/review-requirements-dialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            locals: {
              requirements: scope.job.requirements
            },
            fullscreen: useFullScreen
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

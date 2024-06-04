'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:candidateReview
 * @description
 * # candidateReview
 */
angular.module('visageNgCommon')
  .directive('candidateReview', function (StaticData) {
    return {
      templateUrl: 'views/templates/candidate-review.tmpl.html',
      restrict: 'E',
      scope : {
        review: '=',
        operations: '=',
        doneReviewing: '&onDoneReviewing',
        pendingReview: '='
      },
      link: function postLink(scope) {
        scope.pendingReview = 'indeterminate';
        StaticData.getReviewReasons()
          .then(function (result) {
            scope.reasons = result.data;
          })
          .finally(function () {
            scope.pendingReview = null;
          });

        scope.disQualifyReasonDescriptionShouldBeShown = function(disQualifyReasonValue) {
          return (scope.review.reason === 'UNFIT_EXP' && disQualifyReasonValue === 'UNFIT_EXP') ||
            (scope.review.reason === 'NO_QUALIF' && disQualifyReasonValue === 'NO_QUALIF');
        };
        scope.getReasonDescriptionPlaceHolder = function() {
          if (scope.review.reason === 'UNFIT_EXP') {
            return 'What kind of experience is the candidate lacking?';
          } else if (scope.review.reason === 'NO_QUALIF') {
            return 'What kind of qualification is the candidate lacking?';
          }
          return null;
        };
        scope.changeRating = function (rating) {
          scope.review = { rating :rating, reason : null, description: null };
        };
        scope.close = function() {
          scope.doneReviewing();
        };
      }
    };
  });

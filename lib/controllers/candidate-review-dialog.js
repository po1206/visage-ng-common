'use strict';

/**
 * @ngdoc function
 * @name visageNgCommon.controller:EmployerReviewCvDialogCtrl
 * @description
 * # EmployerReviewCvDialogCtrl
 * Controller of the visageNgCommon
 */
angular.module('visageNgCommon')
  .controller('CandidateReviewDialogCtrl',
    function ($scope, $mdDialog, rating, candidateSubmission, reviewer, operations) {

      $scope.review = {rating :rating, reason :null};
      $scope.operations = operations;

      $scope.hide = function () {
        $mdDialog.hide();
      };
      $scope.cancel = function () {
        $mdDialog.cancel();
      };

      $scope.updateSubmission = function (rating, reason, description) {
        if(rating) {
          $scope.pendingReview = 'indeterminate';
          candidateSubmission.review = candidateSubmission.review || {};
          if(rating === 'QUALIFIED' || rating === 'OUTSTANDING') {
            candidateSubmission.status = 'Approved';
            if(rating === 'OUTSTANDING') {
              candidateSubmission.review.outstanding = true;
            }
          } else if(rating ==='DISQUALIFIED') {
            candidateSubmission.status = 'Disqualified';
            if (description) {
              candidateSubmission.review.description = description;
            }
          }
          else if(rating ==='SHORTLISTED') {
            candidateSubmission.status = 'Shortlisted';
          }

          if(reason) {
            candidateSubmission.review.reason = reason;
          }
          candidateSubmission.review.reviewedBy = reviewer._id;
          candidateSubmission.$update({path:'job-offers',jobId: candidateSubmission.job})
            .then($scope.hide);
        }
        else {
          $scope.cancel();
        }
      };

    });

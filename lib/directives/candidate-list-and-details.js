'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:candidateListAndDetails
 * @description
 * # candidateListAndDetails
 */
angular.module('visageNgCommon')
  .directive('candidateListAndDetails', function (StaticData, Util, apiSettings) {
    return {
      templateUrl: 'views/templates/candidate-list-and-details.tmpl.html',
      restrict: 'E',
      scope: {
        candidateSubmissions: '=',
        candidateSubmissionsCount: '=',
        job: '=',
        indicators: '=',
        selectedCandidateSubmission: '=',
        detailsClick: '&onDetailsClick',
        downloadUrl: '='
      },
      link: function postLink(scope) {
        function bindListeners() {
          scope.$watch('candidateSubmissions', function (candidateSubmissions) {
            if (candidateSubmissions) {

              if (Object.keys(candidateSubmissions).indexOf('Sourced') !== -1) {
                scope.selectedStatus = 'Sourced';
              }
              else if (Object.keys(candidateSubmissions).indexOf('Approved') !== -1) {
                scope.selectedStatus = 'Approved';
              }
              else if (Object.keys(candidateSubmissions).indexOf('Shortlisted') !== -1) {
                scope.selectedStatus = 'Shortlisted';
              }
              else {
                scope.selectedStatus = 'Disqualified';
              }
              scope.selectedCandidateSubmission.selected =
                scope.candidateSubmissions[scope.selectedStatus][0];

            }
          });

          scope.$watch(function () {
            return scope.selectedCandidateSubmission.selected;
          }, function (newCandidateSelected) {
            if (newCandidateSelected && newCandidateSelected.status === 'Disqualified') {
              reviewReasonsPromise.then(function (response) {
                scope.reviewMessage = response.data.DISQUALIFY[newCandidateSelected.review.reason];
              });
              scope.reviewDescription = newCandidateSelected.review.description;
            }
            else {
              scope.reviewMessage = null;
              scope.reviewDescription = null;
            }
          });
        }

        scope.openMenu = function ($mdOpenMenu, ev) {
          originatorEv = ev;
          $mdOpenMenu(ev);
        };

        //We have to create a list of status with the right order because javasvript can't order
        // the candidate Submissions object
        scope.orderStatuses = ['Sourced', 'Shortlisted', 'Approved' , 'Disqualified'];

        var originatorEv;
        var reviewReasonsPromise = StaticData.getReviewReasons();
        scope.candidatesReviewLimit = apiSettings.candidatesReviewLimit;
        bindListeners();
      }
    };
  });

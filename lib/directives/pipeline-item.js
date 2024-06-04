'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:pipelineItem
 * @description
 * # pipelineItem
 */
angular.module('visageNgCommon')
  .directive('pipelineItem',
    function (CandidateSubmission, $window, $interval, $location) {
      return {
        templateUrl: 'views/templates/pipeline-item.tmpl.html',
        restrict: 'E',
        scope: {
          status: '@',
          label: '@',
          downloadable: '@',
          jobId: '=',
          refreshRate: '@',
          viewCandidatesPath: '=',
          disabled:'=ngDisabled'
        },
        link: function postLink(scope, element) {
          function refreshData() {
            return CandidateSubmission.queryByJobCount(query).$promise
              .then(function (result) {
                scope.count = result.count;
              })
              .catch(function (err) {
                console.error(err);
              });
          }

          scope.viewCandidates = function () {
            if(!scope.disabled){
              $location.path(scope.viewCandidatesPath);
            }
          };

          scope.downloadCSV = function (ev) {
            if(!scope.disabled && scope.downloadable){
              CandidateSubmission.generateReportSign(query)
                .$promise
                .then(function (urlObject) {
                  $window.open(urlObject.signedUrl, '_blank');
                });
            }
            ev.stopImmediatePropagation();
          };

          var query = {
            jobId: scope.jobId
          };
          //if(scope.startDate){
          //  params.start = scope.startDate;
          //}
          //if(scope.endDate){
          //  params.end = scope.endDate;
          //}
          if (scope.status) {
            query.status = scope.status;
          }

          refreshData();

          var stop = $interval(refreshData, scope.refreshRate);

          scope.label = scope.label || scope.status;

          element.on('$destroy', function () {
            if (angular.isDefined(stop)) {
              $interval.cancel(stop);
              stop = undefined;
            }
          });
        }
      };
    });

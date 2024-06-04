/**
 * @ngdoc directive
 * @name visageNgCommon.directive:candidateRequirements
 * @description
 * # candidateRequirements
 */
angular.module('visageNgCommon')
  .directive('jobEditor', function (StaticData,
    $timeout,
    CustomerService,
    $mdMedia,
    $location,
    $window) {

    return {
      templateUrl: 'views/templates/job-editor.tmpl.html',
      restrict: 'E',
      scope: {
        terms: '@',
        job: '=',
        jobSaved: '&onJobSaved',
        disabled: '=ngDisabled'
      },
      link: function postLink(scope) {

        function bindListeners() {

          // I hold the current location, once it has changed successfully.
          scope.currentLocation = $location.url();
          // When the location is changed, update the view-model to make the demo
          // UI a bit more intuitive.
          scope.$on(
            '$locationChangeSuccess',
            function handleLocationChangeSuccessEvent() {
              scope.currentLocation = $location.url();
            }
          );

          var stopWatchingLocation = null;

          function handleLocationChangeStartEvent(event) {
            if (scope.jobForm.$dirty) {
              event.preventDefault();
              var targetPath = $location.path();
              var targetSearch = $location.search();
              var targetHash = $location.hash();

              $timeout(function () {
                if ($window.confirm(
                    'You are about to leave this page, your unsaved modifications will be lost.')) {
                  $location
                    .path(targetPath)
                    .search(targetSearch)
                    .hash(targetHash)
                  ;
                  stopWatchingLocation();
                }
              }, 0);
            }
            else if(scope.job.status ==='Draft') {
              event.preventDefault();
              var targetPath = $location.path();
              var targetSearch = $location.search();
              var targetHash = $location.hash();

              $timeout(function () {
                if ($window.confirm(
                    'You haven\'t approved this job yet. It will be saved as a draft until you do so.')) {
                  $location
                    .path(targetPath)
                    .search(targetSearch)
                    .hash(targetHash)
                  ;
                  stopWatchingLocation();
                }
              }, 0);
            }
            else {
              stopWatchingLocation();
            }
          }

          stopWatchingLocation = scope.$on('$locationChangeStart', handleLocationChangeStartEvent);
          scope.$watch('job', function (newJob) {
            if (newJob) {
              scope.existingJob = !!newJob._id;
            }
          })
        }

        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
          var lowercaseQuery = angular.lowercase(query);
          return function filterFn(location) {
            var cnty = angular.lowercase(location);
            return (cnty.indexOf(lowercaseQuery) !== -1);
          };
        }

        scope.approveJob = function () {
          scope.jobForm.$setSubmitted();
          if (scope.jobForm.$valid) {
            scope.job.status = 'Approved';
            scope.saveJob();
          }
        };

        scope.saveJob = function () {
          scope.pending = 'indeterminate';
          if (scope.existingJob) {
            scope.job.$update().then(function () {
              scope.jobForm.$dirty = false;
              scope.jobSaved();
            }, function (err) {
              console.error('There was an error when trying to update the job');
              console.error(err);
            }).finally(function () {
              scope.pending = null;
            });
          }
          else {
            scope.job.$save().then(function () {
              scope.jobForm.$dirty = false;
              scope.jobSaved();
            }, function (err) {
              console.error('There was an error when trying to create the job');
              console.error(err);
            }).finally(function () {
              scope.pending = null;
            });
          }

        };

        scope.removeJob = function () {
          if ($window.confirm(
              'Do you really want to delete this job ? (Can\'t be undone)')) {
            scope.pending = 'indeterminate';
            //TODO SECURE THIS
            scope.job.$delete().then(function () {
              $location.path('/employer/jobs');
            }, function (err) {
              console.error('There was an error when trying to delete the job');
              console.error(err);
            }).finally(function () {
              scope.pending = null;
            });
          }
        };

        scope.back = function () {
          $location.path('/employer/jobs');
        };

        scope.querySearch = function (query) {
          var results = query ? scope.jobLocations.filter(createFilterFor(query)) : [];
          return results;
        };

        scope.searchTextLocation = null;

        StaticData.init()
          .then(function (result) {
              scope.jobLocations = result[0].data.geonames.map(function (location) {
                return location.countryName;
              });
              scope.salaryRange = [];
              result[5].data.forEach(function (category) {
                scope.salaryRange = scope.salaryRange.concat(category.ranges);
              });

              scope.jobStatus = result[6].data;
              scope.jobRoles = result[1].data;
              scope.industries = result[4].data;
            },
            function (err) {
              console.error(err);
            }).finally(function () {

        });

        bindListeners();
        scope.screenIsSmall = $mdMedia('xs') || $mdMedia('sm');

      }
    };
  });

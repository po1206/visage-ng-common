'use strict';

/**
 * @ngdoc function
 * @name visageNgCommon.controller:SubmitCandidateDialogCtrl
 * @description
 * # SubmitCandidateDialogCtrl
 * Controller of the visageNgCommon
 */
angular.module('visageNgCommon')
  .controller('SubmitCandidateDialogCtrl',
    function ($scope,
      $mdDialog,
      $window,
      endpointsApi,
      ENV,
      $http,
      Upload,
      x2js,
      CandidateSubmission,
      referrer,
      $mdToast,
      StaticData,
      indicators,
      job,
      $timeout,
      Util) {

      function checkDuplicate(result) {
        $scope.modeProgress = "query";
        return $http.get(ENV.apiEndpoint + endpointsApi.cvValidation, {
          params: {
            jobId: job._id,
            cvMd5: result.md5
          }
        })
      }

      function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(location) {
          var cnty = angular.lowercase(location);
          return (cnty.indexOf(lowercaseQuery) !== -1);
        };
      }

      function userAlreadySourced() {
        initNewCandidate();
        $scope.submissionForm.$setValidity('existing', false);
      }

      function maximumSubmissionsReached() {
        initNewCandidate();
        $scope.submissionForm.$setValidity('maximumSubmissions', false);
      }

      function emailValidationFailed(error) {
        $scope.submissionForm.$setValidity('emailValidation', false);
        $scope.emailValidationMessage = 'Email validation failed: ' + error.description;
      }

      function bindListeners() {
        $scope.$watch('file', function () {
          $scope.uploadFile($scope.file);
        });
      }

      function initNewCandidate() {
        $scope.searchTextLocation = null;
        $scope.searchTextNationality = null;
        $scope.candidateSubmission = new CandidateSubmission();
        $scope.candidateSubmission.status = 'Sourced';
        $scope.candidateSubmission.candidate = {candidate: {}};
        $scope.job = job;
        if (referrer) {
          $scope.referrer = referrer;
          $scope.candidateSubmission.recruiter = referrer._id;
        }
        if (indicators) {
          $scope.indicators = indicators;
        }
      }

      function checkError(data) {
        if (data && data.error) {
          if (data.error.code === '004') {
            emailValidationFailed(data.error);
          } else {
            if (data.error.code === '002') {
              userAlreadySourced();
            } else if (data.error.code === '003') {
              maximumSubmissionsReached();
            }
            $scope.file = null;
            $scope.modeProgress = "determinate";
          }
        } else {
          console.error(data);
        }
      }

      $scope.dropEnabled = true;
      $scope.hide = function () {
        $mdDialog.hide($scope.modified);
      };
      $scope.cancel = function () {
        $mdDialog.cancel();
      };

      $scope.emailChanged = function () {
        $scope.submissionForm.$setValidity('existing', true);
        $scope.submissionForm.$setValidity('emailValidation', true);
        $scope.emailValidationMessage = '';
      };

      $scope.uploadFile = function (file, errFiles) {
        if (file) {
          $scope.f = file;
          $scope.errFile = errFiles && errFiles[0];
          file.progress = 1;
          $http.post(ENV.apiEndpoint + endpointsApi.media + '/signing', {
              filename: file.name,
              type: file.type,
              mediaType: 'CV'
            })
            .success(function (result) {
              file.upload = Upload.upload({
                url: result.url, //s3Url
                transformRequest: function (data, headersGetter) {
                  var headers = headersGetter();
                  delete headers.Authorization;
                  delete headers.authorization;
                  return data;
                },
                skipAuthorization: true,
                fields: result.fields, //credentials
                method: 'POST',
                file: file
              });

              file.upload.success(function (response) {
                  var data = x2js.xml_str2json(response);
                  return $scope.uploadSucceeded({
                      identifier: data.PostResponse.Key,
                      originalFilename: file.name,
                      md5: data.PostResponse.ETag
                    })
                    .finally(function () {
                      $scope.modeProgress = "determinate";
                      $scope.file.progress = undefined;
                    });
                })
                .error(function (response) {
                  checkError(response.data);
                })
                .progress(function (evt) {
                  file.progress = Math.min(100, parseInt(100.0 *
                    evt.loaded / evt.total));
                });

            })
            //.error(function (data, status, headers, config) {
            .error(function () {

              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
        }

      };

      $scope.uploadSucceeded = function (result) {
        return checkDuplicate(result)
          .then(function () {
            $scope.candidateSubmission.candidate.candidate.cv = result;
            $scope.submissionForm.$setValidity('existing', true);
          })
          .catch(function (resp) {
            checkError(resp.data);
          });

      };

      $scope.download = function (file) {
        $window.open(Util.getDownloadUrl(file.identifier, file.originalFilename, 'CV'),
          '_blank');
      };

      $scope.removeFileDesc = function (file) {
        $scope.pendingDeletion = 'indeterminate';
        $http.delete(ENV.apiEndpoint + endpointsApi.media + '/CV/' + file.identifier)
          .then(function () {
            $scope.candidateSubmission.candidate.candidate.cv = null;
          })
          .catch(function (err) {
            console.error(err);
          })
          .finally(function () {
            $scope.pendingDeletion = null;
          });
      };

      $scope.querySearch = function (query) {
        var results = query ?
          $scope.jobLocations.filter(createFilterFor(query)) :
          [];
        return results;
      };

      $scope.doneSubmitting = function () {
        $scope.checkingSubmission = 'indeterminate';
        var path = 'public-job-offers';
        if (referrer) {
          path = 'job-offers';
        }
        $scope.candidateSubmission.$save({
            jobId: job._id,
            path: path
          })
          .then(function () {
            $scope.modified = true;
            return !!$scope.referrer;
          })
          .then(function (results) {
            if (results) {
              $mdToast.show(
                $mdToast.simple()
                  .textContent('Candidate submitted')
                  .position('top right')
                  .hideDelay(3000)
              );
              $scope.previousSubmission = angular.merge({}, $scope.candidateSubmission);

              initNewCandidate();
              $scope.submissionForm.$setUntouched();
              $scope.submissionForm.$setPristine();
              $timeout(function () {
                document.querySelector('#candidate-submitted-success').scrollIntoView();
              }, 0);
            }
            else {
              $scope.hide();
            }
          })
          .catch(function (resp) {
            checkError(resp.data);
          })
          .finally(function () {
            $scope.checkingSubmission = null;
          });

      };

      $scope.modeProgress = "determinate";
      $scope.emailValidationMessage = '';
      initNewCandidate();

      StaticData.init()
        .then(function (result) {
          $scope.industries = result[4].data;
          $scope.jobLocations =
            result[0].data.geonames.map(function (location) {
              return location.countryName;
            });
        });

      bindListeners();
    });

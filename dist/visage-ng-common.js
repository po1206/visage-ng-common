"use strict";

 angular.module('visageNgCommon.config', [])

.constant('ENV', {development:true,apiEndpoint:'http://localhost:3000',pdfViewerEndpoint:'http://localhost:9011/viewer.html#/'})

.constant('ThirdParties', {checkout:{jsLib:'https://sandbox.checkout.com/js/v1/checkout.js',endpoint:'http://localhost:2222',apiKey:'pk_test_dd1c0c5a-2669-475a-952a-f203f08fdb73'},zappier:{updateLead:'https://zapier.com/hooks/catch/230zsq/'},intercom:{appId:'qgdnsb89'},auth0:{clientID:'bQ1LbVxzegv8oUew3SO7eHa8bemGgcu0',domain:'visage.auth0.com'}})

;
'use strict';

/**
 * @ngdoc overview
 * @name visageNgCommon
 * @description
 * # visageNgCommon
 *
 * Common module of visage back and front office.
 */

angular
  .module('visageNgCommon', [
    'ngAnimate',
    'ngResource',
    'ngMaterial',
    'ngFileUpload',
    'visageNgCommon.config',
    'ngWig'
  ])
  .config(['ngWigToolbarProvider', function (ngWigToolbarProvider) {
    ngWigToolbarProvider.setButtons(['formats', 'list1', 'list2', 'bold', 'italic', 'link']);
  }])
  .constant('endpointsApi', {
    jobOffers: '/job-offers',
    publicJobOffers : '/public-job-offers',
    extJobOffers: '/ext-job-offers',
    users: '/users',
    recruiters: '/recruiters',
    experts: '/experts',
    preferences: '/preferences',
    candidates: '/candidates',
    checkout: '/checkout.php',
    verify: '/verify.php',
    media: '/media',
    mail: '/services/mail',
    invitations: '/invitations',
    assignments: '/assignments',
    expertAssignments :'/expert-assignments',
    recruiterAssignments : '/recruiter-assignments',
    secretPaymentToken: '/services/secret-payment-token',
    extRecruiters: '/ext-recruiters',
    search : '/search',
    cvValidation: '/media/validation/cv'
  })
  .constant('localApi', {
    countries: 'data/countries.json',
    jobRoles: 'data/job-roles.json',
    industries: 'data/industries.json',
    employmentType: 'data/employment-type.json',
    employmentStatus: 'data/employment-status.json',
    salaryRange: 'data/salary-range.json',
    jobStatus: 'data/job-status.json',
    availability: 'data/availability.json',
    areas: 'data/areas.json',
    candidateReviewReasons:'data/candidate-review-reasons.json'
  })
  .constant('candidateRating', {
    qualified: 'QUALIFIED',
    disqualified: 'DISQUALIFIED',
    outstanding: 'OUTSTANDING',
    shortlisted: 'SHORTLISTED'
  })
  .constant('auth0constants', {
    domain: 'visage.auth0.com'
  })
  .constant('apiSettings', {
    candidatesReviewLimit : 60
  })
  .run(["$templateCache", function ($templateCache) {
    //cache some images
    $templateCache.put('/images/icons/ic_nationality.svg',
      '<svg id="svg2" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" height="71.833" viewBox="0 0 71.837503 71.833122" width="71.838" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><g id="g10" transform="matrix(1.25 0 0 -1.25 -469.97 531.85)"><g id="g270" fill="#757575" transform="translate(425.49 380.74)"><path id="path272" d="m0 0c-2.936 0.699-6.067 1.226-9.335 1.577 0.925 4.273 1.406 8.693 1.433 13.183h13.308c-0.256-5.348-2.139-10.52-5.406-14.76m-12.594-8.915c1.086 2.617 1.981 5.311 2.689 8.046 2.807-0.291 5.507-0.714 8.063-1.268-2.968-3.109-6.679-5.442-10.752-6.778m-13.305-0.808c-1.309 2.883-2.378 5.877-3.201 8.93 5.807 0.494 11.397 0.539 16.672 0.136-0.822-3.08-1.9-6.109-3.24-9.067-3.329-0.664-6.891-0.665-10.231 0.001m-13.784 7.541c1.754 0.326 4.561 0.789 8.062 1.168 0.705-2.696 1.589-5.348 2.65-7.902-4.052 1.329-7.75 3.646-10.712 6.734m-7.289 16.942h13.309c0.027-4.57 0.52-9.039 1.465-13.328-4.626-0.512-7.977-1.151-9.358-1.438-3.271 4.242-5.159 9.414-5.416 14.766m5.411 17.26c1.399-0.291 4.832-0.946 9.575-1.455-0.97-4.441-1.525-8.905-1.651-13.312h-13.335c0.257 5.352 2.14 10.526 5.411 14.767m12.64 8.927c-0.703-1.815-1.648-4.533-2.511-7.933-3.591 0.377-6.467 0.849-8.251 1.181 2.974 3.1 6.688 5.424 10.762 6.752m13.26 0.788c0.586-1.343 1.886-4.566 3.047-9.084-5.167-0.382-10.633-0.333-16.299 0.145 1.164 4.483 2.444 7.648 3.006 8.939 3.338 0.669 6.9 0.67 10.246 0m13.816-7.582c-2.634-0.57-5.396-1.003-8.249-1.294-0.867 3.462-1.833 6.24-2.55 8.088 4.09-1.333 7.819-3.673 10.799-6.794m-29.298-16.9c0.129 4.333 0.683 8.723 1.657 13.089 3.352-0.293 6.649-0.462 9.852-0.462 2.593 0 5.119 0.115 7.589 0.307 0.952-4.289 1.494-8.626 1.622-12.934h-20.72zm19.309-15.451c-5.641 0.456-11.637 0.41-17.866-0.14-0.95 4.207-1.443 8.6-1.471 13.098h20.776c-0.027-4.419-0.508-8.765-1.439-12.958m17.24 15.451h-13.335c-0.124 4.382-0.667 8.794-1.616 13.157 3.315 0.351 6.515 0.886 9.539 1.602 3.269-4.24 5.155-9.409 5.412-14.759m-3.971 16.973-0.386 0.455h-0.006c-4.017 4.718-9.521 8.036-15.555 9.37-4.062 0.917-8.482 0.916-12.536 0.001-6.039-1.334-11.542-4.653-15.561-9.371l-0.392-0.455c-4.202-5.118-6.517-11.588-6.517-18.219s2.315-13.101 6.517-18.22l0.386-0.455h0.006c4.019-4.718 9.522-8.037 15.555-9.369 2.031-0.459 4.141-0.691 6.271-0.691 2.131 0 4.24 0.232 6.265 0.689 6.04 1.335 11.544 4.653 15.561 9.371l0.392 0.455c4.203 5.119 6.517 11.589 6.517 18.22s-2.314 13.101-6.517 18.219" fill="#757575"/></g></g></svg>'
    );


  }]);

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
    ["$scope", "$mdDialog", "rating", "candidateSubmission", "reviewer", "operations", function ($scope, $mdDialog, rating, candidateSubmission, reviewer, operations) {

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

    }]);

'use strict';

/**
 * @ngdoc function
 * @name visageNgCommon.controller:PreviewCVCtrl
 * @description
 * # PreviewCVCtrl
 * Controller of the visageNgCommon
 */

angular.module('visageNgCommon')
  .controller('PreviewCVModalCtrl', ['$scope', '$mdDialog', 'candidateSub', 'Util',
    function ($scope, $mdDialog, candidateSub, Util) {
      $scope.cvUrl = Util.getDownloadUrl(candidateSub.candidate.candidate.cv.identifier,
        candidateSub.candidate.candidate.cv.originalFilename, 'CV');

      $scope.hide = function () {
        $mdDialog.hide();
      };
      $scope.cancel = function () {
        $mdDialog.cancel();
      };
    }]);

'use strict';

/**
 * @ngdoc function
 * @name visageNgCommon.controller:EmployerReviewCvDialogCtrl
 * @description
 * # EmployerReviewCvDialogCtrl
 * Controller of the visageNgCommon
 */
angular.module('visageNgCommon')
  .controller('ReviewRequirementsDialogCtrl',
    ["$scope", "$mdDialog", "$timeout", "Util", "requirements", function ($scope, $mdDialog, $timeout, Util, requirements) {

      $scope.requirements = requirements;

      $scope.hide = function () {
        $mdDialog.hide();
      };
      $scope.cancel = function () {
        $mdDialog.cancel();
      };

    }]);

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
    ["$scope", "$mdDialog", "$window", "endpointsApi", "ENV", "$http", "Upload", "x2js", "CandidateSubmission", "referrer", "$mdToast", "StaticData", "indicators", "job", "$timeout", "Util", function ($scope,
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
    }]);

'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:accessibleForm
 * @description
 * # accessibleForm
 */
angular.module('visageNgCommon')
  .directive('accessibleForm', function () {
    return {
      restrict: 'A',
      link: function (scope, elem) {

        // set up event handler on the form element
        elem.on('submit', function () {
          // find the first invalid element
          var firstInvalid = elem[0].querySelector('.ng-invalid');
          var firstErrorMsg = elem[0].querySelector('.field-error');
          // if we find one, set focus
          if (firstInvalid) {
            firstInvalid.scrollIntoView();
          }
          else if (firstErrorMsg) {
            firstErrorMsg.scrollIntoView();
          }
        });
      }
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:announcement
 * @description
 * # announcement
 */
angular.module('visageNgCommon')
  .directive('announcement', function () {
    return {
      templateUrl: 'views/templates/announcement.tmpl.html',
      transclude:true,
      replace:true,
      restrict: 'E',
      link: function postLink() {
      }
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:autoFocus
 * @description
 * # autoFocus
 */
angular.module('visageNgCommon')
  .directive('autoFocus', ["$timeout", function ($timeout) {
    return {
      restrict: 'AC',
      link: function (_scope, _element) {
        $timeout(function () {
          _element[0].focus();
        }, 0);
      }
    };
  }]);

'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:candidateListAndDetails
 * @description
 * # candidateListAndDetails
 */
angular.module('visageNgCommon')
  .directive('candidateListAndDetails', ["StaticData", "Util", "apiSettings", function (StaticData, Util, apiSettings) {
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
  }]);

'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:candidateProfile
 * @description
 * # candidateProfile
 */
angular.module('visageNgCommon')
  .directive('candidateProfile', ["Util", "$window", function (Util, $window) {
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
  }]);

'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:candidateReview
 * @description
 * # candidateReview
 */
angular.module('visageNgCommon')
  .directive('candidateReview', ["StaticData", function (StaticData) {
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
  }]);

'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:candidatesAddFab
 * @description
 * # candidatesAddFab
 */
angular.module('visageNgCommon')
  .directive('candidatesAddFab', ["$mdMedia", "$mdDialog", function ($mdMedia,
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
  }]);

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

'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:candidatesReviewFab
 * @description
 * # candidatesReviewFab
 */
angular.module('visageNgCommon')
  .directive('candidatesReviewFab', ["$mdMedia", "$mdDialog", "candidateRating", function ($mdMedia,
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
  }]);

'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:indicators
 * @description
 * # indicators
 */
angular.module('visageNgCommon')
  .directive('indicators', function () {
    return {
      templateUrl: 'views/templates/indicators.tmpl.html',
      restrict: 'E',
      scope: {
        indicators:'='
      }
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:jobDescriptionEditor
 * @description
 * # jobDescriptionEditor
 */
angular.module('visageNgCommon')
  .directive('jobDescriptionEditor', function () {
    return {
      templateUrl: 'views/templates/job-description-editor.tmpl.html',
      restrict: 'E',
      scope: {
        description : '=',
        updateDescription : '&onChange',
        disabled : '=ngDisabled'
      },
      link: function (scope) {
        scope.$watch('description', function (newDesc) {
          if(newDesc) {
            scope.updateDescription();
          }
        },true);
      }
    };
  });

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:candidateRequirements
 * @description
 * # candidateRequirements
 */
angular.module('visageNgCommon')
  .directive('jobEditor', ["StaticData", "$timeout", "CustomerService", "$mdMedia", "$location", "$window", function (StaticData,
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
  }]);

'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:jobRequirements
 * @description
 * # jobRequirements
 */
angular.module('visageNgCommon')
  .directive('jobRequirements', function () {
    return {
      templateUrl: 'views/templates/job-requirements.tmpl.html',
      restrict: 'E',
      scope: {
        requirements : '='
      },
      link: function postLink(scope) {
        scope.readonly = true;
      }
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:announcement
 * @description
 * # announcement
 */
angular.module('visageNgCommon')
  .directive('notice', function () {
    return {
      templateUrl: 'views/templates/notice.tmpl.html',
      transclude:true,
      replace:true,
      restrict: 'E'
    };
  });

'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:pipelineItem
 * @description
 * # pipelineItem
 */
angular.module('visageNgCommon')
  .directive('pipelineItem',
    ["CandidateSubmission", "$window", "$interval", "$location", function (CandidateSubmission, $window, $interval, $location) {
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
    }]);

'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:previewCv
 * @description
 * # previewCv
 */
angular.module('visageNgCommon')
  .directive('previewCv', ["$timeout", "$location", "ENV", function ($timeout, $location,ENV) {
    return {
      templateUrl: 'views/templates/preview-cv.tmpl.html',
      restrict: 'E',
      scope: {
        cvUrl: '='
      },
      link: function postLink(scope,element) {
        function cvChanged(urlCV) {
          iframe.contentWindow.postMessage(JSON.stringify({ urlCV : urlCV}), ENV.pdfViewerEndpoint);
        }

        var iframeLoaded = false;
        var iframe = element.find('iframe')[0];
        iframe.onload = function () {
          iframeLoaded = true;
          $timeout(function () {
            iFrameResize({
              resizedCallback: function () {
                scope.$apply(function () {
                  scope.pendingCV = null;
                });
              }
            });
            cvChanged(scope.cvUrl);
          }, 0);
        };


        scope.$watch('cvUrl', function (newCVURL) {
          if(newCVURL) {
            cvChanged(newCVURL);
          }
        });

        scope.pdfViewerEndpoint = ENV.pdfViewerEndpoint;
        scope.pendingCV = 'indeterminate';
      }
    };
  }]);

'use strict';

/**
 * @ngdoc service
 * @name visageNgCommon.cachedResource
 * @description
 * # cachedResource
 * Factory in the visageNgCommon.
 */
angular.module('visageNgCommon')
  .factory('cachedResource', ["$resource", "$cacheFactory", function ($resource, $cacheFactory) {
    var cache = $cacheFactory('resourceCache');

    var interceptor = {
      response: function (response) {
        cache.remove(response.config.url);
        if (response.config.method === 'POST') {
          if (response.data._id) {
            cache.remove(response.config.url + '/' + response.data._id);
          }
        }
        if (response.config.method === 'PUT' || response.config.method === 'DELETE') {
          var removeGetCache = response.config.url.split('/').slice(0, -1).join('/') + '/';
          cache.remove(removeGetCache);
        }
        return response;
      }
    };

    return function (url, paramDefaults, actions, options) {
      actions = angular.merge({}, {/* default options get, query, etc. */}, actions);

      actions = angular.merge({}, {
        'get': {method: 'GET', cache: cache},
        'query': {method: 'GET', cache: cache, isArray: true},
        'save': {method: 'POST', interceptor: interceptor},
        'update': {method: 'PUT', interceptor: interceptor},
        'remove': {method: 'DELETE', interceptor: interceptor},
        'delete': {method: 'DELETE', interceptor: interceptor}
      }, actions);

      return $resource(url, paramDefaults, actions, options);
    };
  }]);

'use strict';

/**
 * @ngdoc service
 * @name visageNgCommon.JobOffer
 * @description
 * # JobOffer
 * Factory in the visageNgCommon.
 */
angular.module('visageNgCommon')
  .factory('CandidateSubmission', ["cachedResource", "endpointsApi", "ENV", function (cachedResource, endpointsApi, ENV) {

    var path = ENV.apiEndpoint +
      '/:path/:jobId' +
      endpointsApi.candidates +
      '/:_id';

    var CandidateSubmission = cachedResource(path,
      {_id: '@_id'}, {
        queryByJob: {
          method: 'GET',
          params: {
            path: 'job-offers',
            jobId: '@jobId'
          },
          isArray: true
        },
        queryByJobCount: {
          method: 'GET',
          url : path + '/count',
          params: {
            path: 'job-offers',
            jobId: '@jobId'
          },
          isArray: false
        },
        generateReportSign: {
          method: 'GET',
          url : path + '/signing',
          params: {
            path: 'job-offers',
            jobId: '@jobId'
          },
          isArray: false
        }
      });

    return CandidateSubmission;
  }]);

'use strict';

/**
 * @ngdoc service
 * @name visageNgCommon.errorHandler
 * @description
 * # errorHandler
 * Factory in the visageNgCommon.
 */
angular.module('visageNgCommon')
  .factory('ErrorHandler', ["$mdDialog", function ($mdDialog) {

    function ErrorDialogCtrl($scope, $mdDialog,message) {
      $scope.cancel = function () {
        $mdDialog.cancel();
      };

      $scope.message = message;
    }
    ErrorDialogCtrl.$inject = ["$scope", "$mdDialog", "message"];

    function displayError(message) {
      return $mdDialog.show({
          controller: ErrorDialogCtrl,
          templateUrl: 'views/error-dialog.html',
          parent: angular.element(document.body),
          clickOutsideToClose: true,
          locals: {
            message: message
          },
          fullscreen: true
        });
    }


    // Public API here
    return {
      objectIsOutdated: function () {
        return displayError('You tried to update an object that has been updated in the meantime, save your modifications and reload the page before trying again.')
      }
    };
  }]);

'use strict';

/**
 * @ngdoc service
 * @name visageNgCommon.ServerErrorInterceptor
 * @description
 * # ServerErrorInterceptor
 * Factory in the visageNgCommon.
 */
angular.module('visageNgCommon')
  .factory('ServerErrorInterceptor', ["$q", "$injector", function ($q, $injector) {

        function isOutdated(response) {
      return !!response.data.error && response.data.error.name === 'VersionError';
    }

    return {
      // optional method
      'responseError': function (rejection) {
        // do something on error
        if (isOutdated(rejection)) {
          //FIXME ugly,
          // circular dependency if not injected at runtime, but I do not want global events everywhere....
          // http://www.thoughtdelimited.org/thoughts/post.cfm/angular-material-design-mdtoast-and-httpinterceptors
          var ErrorHandler = $injector.get('ErrorHandler');

          ErrorHandler.objectIsOutdated();
          //$timeout($route.reload(),3000);
        }
        return $q.reject(rejection);
      }
    };
  }]);

'use strict';

/**
 * @ngdoc service
 * @name visageNgCommon.StaticData
 * @description
 * # StaticData
 * Factory in the visageNgCommon.
 */
angular.module('visageNgCommon')
  .factory('StaticData', ["$q", "$http", "localApi", function ($q, $http, localApi) {
    var calls = [
      $http.get(localApi.countries),
      $http.get(localApi.jobRoles),
      $http.get(localApi.employmentType),
      $http.get(localApi.employmentStatus),
      $http.get(localApi.industries),
      $http.get(localApi.salaryRange),
      $http.get(localApi.jobStatus),
      $http.get(localApi.areas),
      $http.get(localApi.availability)
    ];

    // Public API here
    return {
      init: function () {
        return $q.all(calls);
      },
      getReviewReasons : function () {
        return $http.get(localApi.candidateReviewReasons);
      }
    };
  }]);

'use strict';

/**
 * @ngdoc service
 * @name visageNgCommon.util
 * @description
 * # util
 * Factory in the visageNgCommon.
 */
angular.module('visageNgCommon')
  .factory('Util', ["ENV", "endpointsApi", function (ENV, endpointsApi) {

    return {
      getDownloadUrl: function (identifier, originalFilename, mediaType) {
        return ENV.apiEndpoint +
          endpointsApi.media +
          '/download/' +
          mediaType +
          '/' +
          identifier +
          '?filename=' +
          encodeURIComponent(originalFilename);
      },
      getRelativeDownloadUrl: function (identifier, originalFilename, mediaType) {
        return ENV.apiEndpoint +
          endpointsApi.media +
          '/download/' +
          mediaType +
          '/' +
          identifier +
          '?filename=' +
          originalFilename;
      },
      isObject: function (val) {
        if (val === null) {
          return false;
        }
        return ( (typeof val === 'function') || (typeof val === 'object') );
      }
    };
  }]);

angular.module('visageNgCommon').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/candidate-review-dialog.html',
    "<md-dialog aria-label=\"Candidate review\" style=\"width: 800px\" ng-cloak> <md-dialog-content class=\"md-padding\"> <candidate-review on-done-reviewing=\"updateSubmission(rating, reason, description)\" pending-review=\"pendingReview\" review=\"review\" operations=\"operations\"></candidate-review> </md-dialog-content> </md-dialog>"
  );


  $templateCache.put('views/error-dialog.html',
    "<md-dialog aria-label=\"Error\" style=\"width: 800px\" ng-cloak> <form> <md-toolbar> <div class=\"md-toolbar-tools\"> <h2>Error</h2> <span flex></span> <md-button class=\"md-icon-button\" ng-click=\"cancel()\"> <md-icon aria-label=\"Close dialog\">close</md-icon> </md-button> </div> </md-toolbar> <md-dialog-content class=\"md-padding\"> <p class=\"md-body-1\">{{message}}</p> </md-dialog-content> <md-dialog-actions layout=\"row\"> <md-button ng-click=\"cancel()\"> Close </md-button> </md-dialog-actions> </form> </md-dialog>"
  );


  $templateCache.put('views/review-requirements-dialog.html',
    "<md-dialog aria-label=\"Review requirements\" style=\"width: 800px\" ng-cloak> <form> <md-toolbar> <div class=\"md-toolbar-tools\"> <h2>Requirements</h2> <span flex></span> <md-button class=\"md-icon-button\" ng-click=\"cancel()\"> <md-icon aria-label=\"Close dialog\">close</md-icon> </md-button> </div> </md-toolbar> <md-dialog-content class=\"md-padding\"> <job-requirements requirements=\"requirements\"></job-requirements> </md-dialog-content> </form> </md-dialog>"
  );


  $templateCache.put('views/submit-candidate-dialog.html',
    "<md-dialog aria-label=\"Refer candidate\" style=\"width: 800px\" ng-cloak> <form accessible-form name=\"submissionForm\" ng-submit=\"submissionForm.$valid && doneSubmitting()\"> <md-toolbar> <div class=\"md-toolbar-tools\"> <h2 ng-if=\"referrer\">Refer a candidate</h2> <h2 ng-if=\"!referrer\">Apply to this job</h2> <span flex></span> <md-button class=\"md-icon-button\" ng-click=\"hide()\"> <md-icon aria-label=\"Close dialog\">close</md-icon> </md-button> </div> </md-toolbar> <md-dialog-content> <div class=\"md-dialog-content\"> <announcement id=\"candidate-submitted-success\" ng-show=\"previousSubmission\"> Your candidate {{previousSubmission.candidateEmail}} has been submitted. His profile will be reviewed and you will get paid next week if he is validated </announcement> <div ng-show=\"indicators.slots>0 || !referrer\" layout=\"column\"> <div layout=\"column\" layout-align=\"start center\" layout-align-gt-md=\"start start\" layout-gt-md=\"row\"> <h2 class=\"md-headline\" flex-order=\"3\" flex-order-gt-md=\"1\"> {{job.title}}</h2> <span flex-gt-md flex-order-gt-md=\"2\"></span> <div ng-if=\"assignment\" layout=\"column\" flex-order=\"1\" flex-order-gt-md=\"3\"> <div layout=\"row\" layout-align=\"end end\"> <span class=\"md-body-1\"> Bounty </span> <span style=\"margin-left:10px\" class=\"md-headline cv-approved\">$ {{assignment.bounty}}</span> </div> <p style=\"text-align: right\" class=\"md-caption\">(per profile approved)</p> </div> </div> <ol ng-if=\"assignment\"> <li class=\"md-body-1\">Only candidates that match the requirements will be approved.</li> <li class=\"md-body-1\">Submitting a wrong email address on purpose will result in a permanent ban. </li> </ol> <div ng-hide=\"candidateSubmission.candidate.candidate.cv\" flex> <p class=\"md-subhead\">Upload CV</p> <md-progress-linear ng-show=\"file.progress!==undefined\" md-mode=\"{{modeProgress}}\" value=\"{{file.progress}}\"></md-progress-linear> <div ng-message=\"existing\" ng-show=\"submissionForm.$error.existing\" class=\"field-error\"> This candidate has already been submitted for this vacancy </div> <div ng-message=\"maximumSubmissions\" ng-show=\"submissionForm.$error.maximumSubmissions\" class=\"field-error\">Maximum submissions number reached for this vacancy </div> <div ng-disabled=\"file.progress\" ngf-drop ngf-select ng-model=\"file\" class=\"upload-zone\" layout-fill=\"\" ngf-drag-over-class=\"'dragover'\" ngf-multiple=\"false\" ngf-allow-dir=\"false\" accept=\".pdf\" ngf-pattern=\"'.pdf'\" ngf-max-files=\"1\" ngf-max-size=\"10MB\" ng-required=\"true\"> <div layout=\"column\" layout-align-gt-sm=\"center center\"> <p class=\"md-body-1\">Drop your file here</p> <p class=\"md-body-1\">OR</p> <md-button class=\"md-raised md-primary\">upload</md-button> </div> </div> <div ngf-no-file-drop>File Drag/Drop is not supported for this browser</div> <div ng-show=\"submissionForm.$submitted\"> <div ng-message=\"required\" ng-hide=\"candidateSubmission.candidate.candidate.cv\" class=\"field-error\">Upload a CV before submitting the candidate </div> </div> <div layout=\"row\"> <span class=\"md-caption\">Max size: 10MB</span> <span flex></span> <span class=\"md-caption\">Format: PDF</span> </div> </div> <div ng-if=\"candidateSubmission.candidate.candidate.cv\"> <div layout=\"row\" class=\"uploaded\"> <span class=\"md-body-1 md-padding\"> Uploaded : <a href=\"\" ng-click=\"download(candidateSubmission.candidate.candidate.cv)\"> {{candidateSubmission.candidate.candidate.cv.originalFilename}} </a></span> <span flex></span> <md-progress-circular ng-show=\"pendingDeletion\" md-mode=\"indeterminate\"></md-progress-circular> <md-button class=\"md-warn\" ng-click=\"removeFileDesc(candidateSubmission.candidate.candidate.cv)\"> Remove </md-button> </div> <div layout=\"row\"> <md-input-container flex> <label for=\"email\">Candidate email</label> <input ng-required=\"true\" type=\"email\" name=\"email\" ng-change=\"emailChanged()\" ng-model=\"candidateSubmission.candidate.candidate.email\" id=\"email\"> <div ng-show=\"submissionForm.$submitted || submissionForm.email.$touched\"> <div ng-message=\"required\" ng-show=\"submissionForm.email.$error.required\">This field is mandatory </div> <div ng-message=\"email\" ng-show=\"submissionForm.email.$error.email\">Invalid format </div> <div ng-message=\"emailValidation\" ng-show=\"submissionForm.$error.emailValidation\" class=\"field-error\">{{emailValidationMessage}} </div> </div> </md-input-container> </div> <div layout=\"row\"> <md-input-container flex-gt-sm> <label for=\"name\">Name</label> <input ng-model=\"candidateSubmission.candidate.candidate.name\" id=\"name\" name=\"name\" ng-required=\"true\" type=\"text\"> <div ng-show=\"submissionForm.$submitted || submissionForm.name.$touched\"> <div ng-message=\"required\" ng-show=\"submissionForm.name.$error.required\">This field is mandatory </div> </div> </md-input-container> <md-autocomplete ng-if=\"referrer\" flex-gt-sm class=\"md-block\" ng-required=\"true\" md-input-name=\"nationality\" md-selected-item=\"candidateSubmission.candidate.candidate.nationality\" md-search-text=\"searchTextNationality\" md-items=\"nationality in querySearch(searchTextNationality)\" md-item-text=\"nationality\" md-floating-label=\"Nationality\" md-autocomplete-required> <md-item-template> <span md-highlight-text=\"searchTextNationality\">{{nationality}}</span> </md-item-template> <md-not-found> No matching location. </md-not-found> <div ng-show=\"submissionForm.$submitted || submissionForm.nationality.$touched\"> <div ng-message=\"selectedItem\" ng-show=\"submissionForm.nationality.$error.selectedItem\">Invalid nationality selected </div> <div ng-message=\"required\" ng-show=\"submissionForm.nationality.$error.required\"> This field is mandatory </div> </div> </md-autocomplete> </div> <div layout-gt-sm=\"row\"> <md-input-container class=\"md-block\" flex-gt-sm> <label for=\"jobTitle\">Current job title</label> <input ng-required=\"true\" ng-model=\"candidateSubmission.candidate.candidate.jobTitle\" name=\"jobTitle\" id=\"jobTitle\" type=\"text\"> <div ng-show=\"submissionForm.$submitted || submissionForm.jobTitle.$touched\"> <div ng-message=\"required\" ng-show=\"submissionForm.jobTitle.$error.required\">This field is mandatory </div> </div> </md-input-container> <md-input-container class=\"md-block\" flex-gt-sm> <label for=\"employer\">Current employer</label> <input ng-required=\"true\" ng-model=\"candidateSubmission.candidate.candidate.employer\" name=\"employer\" id=\"employer\" type=\"text\"> <div ng-show=\"submissionForm.$submitted || submissionForm.employer.$touched\"> <div ng-message=\"required\" ng-show=\"submissionForm.employer.$error.required\">This field is mandatory </div> </div> </md-input-container> </div> <div layout=\"row\"> <md-autocomplete class=\"md-block\" ng-required=\"true\" flex-gt-sm md-input-name=\"location\" md-selected-item=\"candidateSubmission.candidate.candidate.location\" md-search-text=\"searchTextLocation\" md-items=\"location in querySearch(searchTextLocation)\" md-item-text=\"location\" md-floating-label=\"Country of residence\" md-autocomplete-required> <md-item-template> <span md-highlight-text=\"searchTextLocation\">{{location}}</span> </md-item-template> <md-not-found> No matching location. </md-not-found> <div ng-show=\"submissionForm.$submitted || submissionForm.location.$touched\"> <div ng-message=\"selectedItem\" ng-show=\"submissionForm.location.$error.selectedItem\">Invalid location selected </div> <div ng-message=\"required\" ng-show=\"submissionForm.location.$error.required\">This field is mandatory </div> </div> </md-autocomplete> <md-input-container> <label for=\"city\">City</label> <input ng-model=\"candidateSubmission.candidate.candidate.city\" id=\"city\" type=\"text\"> </md-input-container> </div> </div> </div> <div ng-if=\"indicators.slots<=0\" layout=\"column\"> <p class=\"md-body-1\"> <md-icon>info_outline</md-icon> You can't submit any more candidates for this vacancy. Wait for your CVs to be evaluated. </p> </div> </div> </md-dialog-content> <md-dialog-actions layout=\"row\"> <md-progress-circular class=\"md-padding center-block\" ng-show=\"checkingSubmission\" md-mode=\"indeterminate\"></md-progress-circular> <!--<md-button href=\"http://en.wikipedia.org/wiki/Mango\" target=\"_blank\" md-autofocus>--> <!--<md-icon>help</md-icon>--> <!--<span style=\"margin-left: 10px;\">Job requirements</span>--> <!--</md-button>--> <md-button ng-click=\"hide()\"> Close </md-button> <md-button ng-disabled=\"file.progress || checkingSubmission || indicators.slots<=0\" class=\"md-primary\" type=\"submit\" style=\"margin-right:20px\"> Submit </md-button> </md-dialog-actions> </form> </md-dialog>"
  );


  $templateCache.put('views/templates/add-candidate-shortlist.tmpl.html',
    "<md-dialog aria-label=\"Refer candidate\" style=\"width: 800px\" ng-cloak> <form name=\"submissionForm\" ng-submit=\"submissionForm.$valid && doneSubmitting()\"> <md-toolbar> <div class=\"md-toolbar-tools\"> <h2>Add to shortlist</h2> <span flex></span> <md-button class=\"md-icon-button\" ng-click=\"cancel()\"> <md-icon aria-label=\"Close dialog\">close</md-icon> </md-button> </div> </md-toolbar> <md-dialog-content> <div class=\"md-dialog-content\"> <div layout=\"column\"> <div layout=\"row\" layout-align=\"start start\"> <h2 class=\"md-headline\">Add a candidate to the shortlist</h2> <span flex></span> <div ng-if=\"pendingProfilePictureUpload || candidateSubmission.candidate.candidate.picture\" style=\"width: 100px;height: 100px; background: url('{{getURLProfilePic()}}') no-repeat center center; background-size:contain\"> <md-progress-circular ng-show=\"pendingProfilePictureUpload\" md-mode=\"indeterminate\"></md-progress-circular> </div> </div> <div layout=\"row\"> <md-button flex class=\"md-raised md-primary\" type=\"file\" ngf-select=\"uploadProfilePicture($file, $invalidFiles)\" accept=\"image/*\" ngf-max-height=\"800\" ngf-max-width=\"800\" ngf-max-size=\"1MB\"> Upload profile picture </md-button> </div> <div layout=\"row\"> <span class=\"md-caption\">Max size: 1MB 600x600px</span> <span flex></span> <span class=\"md-caption\">Format: JPG, PNG, GIF</span> </div> <div layout=\"row\"> <md-input-container flex-gt-sm> <label for=\"name\">Name</label> <input ng-model=\"candidateSubmission.candidate.candidate.name\" id=\"name\" type=\"text\"> </md-input-container> <md-autocomplete flex-gt-sm class=\"md-block\" md-input-name=\"nationality\" ng-required=\"true\" md-selected-item=\"candidateSubmission.candidate.candidate.nationality\" md-search-text=\"searchTextNationality\" md-items=\"nationality in querySearch(searchTextNationality)\" md-item-text=\"nationality\" md-floating-label=\"Nationality\"> <md-item-template> <span md-highlight-text=\"searchTextLocation\">{{nationality}}</span> </md-item-template> <md-not-found> No matching location. </md-not-found> <div ng-show=\"submissionForm.$submitted || submissionForm.nationality.$touched\"> <div ng-message=\"selectedItem\" ng-show=\"submissionForm.nationality.$error.selectedItem\">Invalid nationality selected </div> <div ng-message=\"required\" ng-show=\"submissionForm.nationality.$error.required\"> This field is mandatory </div> </div> </md-autocomplete> </div> <div layout-gt-sm=\"row\"> <md-input-container class=\"md-block\" flex-gt-sm> <label for=\"jobTitle\">Current job title</label> <input ng-model=\"candidateSubmission.candidate.candidate.jobTitle\" id=\"jobTitle\" type=\"text\"> </md-input-container> <md-input-container class=\"md-block\" flex-gt-sm> <label>Industry</label> <md-select name=\"industry\" ng-model=\"candidateSubmission.candidate.candidate.industry\"> <md-option ng-repeat=\"industry in industries\" value=\"{{industry}}\"> {{industry}} </md-option> </md-select> </md-input-container> </div> <div layout=\"row\"> <md-autocomplete class=\"md-block\" flex-gt-sm md-input-name=\"location\" ng-required=\"true\" md-selected-item=\"candidateSubmission.candidate.candidate.location\" md-search-text=\"searchTextLocation\" md-items=\"location in querySearch(searchTextLocation)\" md-item-text=\"location\" md-floating-label=\"Location\"> <md-item-template> <span md-highlight-text=\"searchTextLocation\">{{location}}</span> </md-item-template> <md-not-found> No matching location. </md-not-found> <div ng-show=\"submissionForm.$submitted || submissionForm.location.$touched\"> <div ng-message=\"selectedItem\" ng-show=\"submissionForm.location.$error.selectedItem\">Invalid location selected </div> <div ng-message=\"required\" ng-show=\"submissionForm.location.$error.required\">This field is mandatory </div> </div> </md-autocomplete> <md-input-container> <label for=\"city\">City</label> <input ng-model=\"candidateSubmission.candidate.candidate.city\" id=\"city\" type=\"text\"> </md-input-container> </div> <div layout=\"row\"> <md-input-container flex-gt-sm> <label for=\"email\">Email</label> <input ng-model=\"candidateSubmission.candidate.candidate.email\" id=\"email\" type=\"text\"> </md-input-container> <md-input-container flex-gt-sm> <label for=\"video\">Video CV</label> <input ng-model=\"candidateSubmission.candidate.candidate.video\" id=\"video\" type=\"text\"> </md-input-container> </div> <md-input-container class=\"md-block\"> <label>Cover letter</label> <textarea ng-model=\"candidateSubmission.candidate.candidate.coverLetter\" rows=\"5\" md-select-on-focus></textarea> </md-input-container> <div ngf-drop ngf-select ng-model=\"file\" class=\"upload-zone\" layout-fill=\"\" ngf-drag-over-class=\"'dragover'\" ngf-multiple=\"false\" ngf-allow-dir=\"false\" accept=\".pdf\" ngf-pattern=\"'.pdf'\" ngf-max-files=\"1\" ngf-max-size=\"10MB\"> <div layout=\"column\" layout-align-gt-sm=\"center center\"> <p class=\"md-body-1\">Drop the CV here</p> <p class=\"md-body-1\">OR</p> <md-button class=\"md-raised md-primary\">upload CV</md-button> </div> </div> <div ngf-no-file-drop>File Drag/Drop is not supported for this browser</div> <md-progress-linear ng-show=\"file.progress!==undefined\" md-mode=\"determinate\" value=\"{{file.progress}}\"></md-progress-linear> <div class=\"uploaded\" ng-show=\"candidateSubmission.candidate.candidate.cv\" layout=\"row\"> <p class=\"md-body-1\"> <span>Uploaded : </span> <a href=\"\" ng-click=\"download(candidateSubmission.candidate.candidate.cv, 'CV')\"><span>{{candidateSubmission.candidate.candidate.cv.originalFilename}}</span></a> </p> <span flex></span> <md-progress-circular ng-show=\"pendingDeletion\" md-mode=\"indeterminate\"></md-progress-circular> <md-button class=\"md-warn\" ng-click=\"removeFileDesc(candidateSubmission.candidate.candidate.cv, 'CV')\">Remove </md-button> </div> <div layout=\"row\"> <span class=\"md-caption\">Max size: 10MB</span> <span flex></span> <span class=\"md-caption\">Format: PDF</span> </div> </div> </div> </md-dialog-content> <md-dialog-actions layout=\"row\"> <span flex><md-progress-circular ng-show=\"pendingSubmission\" md-mode=\"indeterminate\"></md-progress-circular></span> <md-button ng-click=\"cancel()\"> Cancel </md-button> <md-button class=\"md-primary\" type=\"submit\" style=\"margin-right:20px\"> Add </md-button> </md-dialog-actions> </form> </md-dialog>"
  );


  $templateCache.put('views/templates/announcement.tmpl.html',
    "<md-content layout=\"row\" layout-align=\"start center\" class=\"announcement md-padding md-whiteframe-z2\"> <div class=\"announcement-image\" hide show-gt-md> <md-icon>info_outline</md-icon> </div> <div class=\"announcement-details\" layout=\"column\"> <ng-transclude></ng-transclude> </div> </md-content>"
  );


  $templateCache.put('views/templates/candidate-list-and-details.tmpl.html',
    "<div layout=\"column\"> <div layout=\"row\"> <div class=\"list-wrapper\"> <div class=\"list-filter md-whiteframe-z2\"> <md-content style=\"height:100%\"> <md-tabs ng-if=\"job\" md-selected=\"selectedTab\" md-border-bottom class=\"tabs-candidate\"> <md-tab ng-repeat=\"status in orderStatuses\" ng-if=\"candidateSubmissions[status].length > 0\" md-on-select=\"selectedStatus=status\"> <md-tab-label> <span ng-if=\"status === 'Sourced'\"> <md-icon class=\"pending\">hourglass_empty</md-icon> <span class=\"pending\">({{candidateSubmissionsCount[status]}})</span> </span> <span ng-if=\"status === 'Approved'\"> <md-icon class=\"qualified\">thumb_up</md-icon> <span class=\"qualified\">({{candidateSubmissionsCount[status]}})</span> </span> <span ng-if=\"status === 'Disqualified'\"> <md-icon class=\"disqualified\">thumb_down</md-icon> <span class=\"disqualified\">({{candidateSubmissionsCount[status]}})</span> </span> <span ng-if=\"status === 'Shortlisted'\"> <md-icon class=\"qualified\">people</md-icon> <span class=\"qualified\">({{candidateSubmissionsCount[status]}})</span> </span> </md-tab-label> <md-tab-body> <notice ng-if=\"candidateSubmissionsCount[status] > candidatesReviewLimit\"> Only displaying the first {{candidatesReviewLimit}} profiles </notice> <candidates-list candidates-submissions=\"candidateSubmissions[status]\" selected-candidate-submission=\"selectedCandidateSubmission\"></candidates-list> </md-tab-body> </md-tab> </md-tabs> </md-content> </div> </div> <div flex class=\"details-filter\" layout=\"column\"> <div layout=\"column\" ng-if=\"job\"> <div layout=\"row\" layout-align=\"end center\"> <h2 class=\"md-display-1\" ng-if=\"job\">{{job.title}}</h2> <span flex></span> <md-menu md-position-mode=\"target-right target\" ng-if=\"detailsClick || downloadUrl\"> <md-button aria-label=\"Details\" class=\"md-icon-button\" ng-click=\"openMenu($mdOpenMenu, $event)\"> <md-icon md-menu-origin>more_vert</md-icon> </md-button> <md-menu-content width=\"4\"> <md-menu-item ng-if=\"detailsClick\"> <md-button ng-click=\"detailsClick()\"> <md-icon md-menu-align-target>description</md-icon> Job details </md-button> </md-menu-item> <md-menu-item ng-if=\"downloadUrl\"> <a class=\"md-button\" ng-href=\"{{downloadUrl}}\" target=\"_blank\"> <md-icon md-menu-align-target>file_download</md-icon> <span> CSV Download </span> <div class=\"md-ripple-container\"></div> </a> </md-menu-item> </md-menu-content> </md-menu> </div> <indicators ng-if=\"!job.pre1dot8 && indicators\" indicators=\"indicators\"></indicators> <br> <announcement ng-if=\"reviewMessage\"> {{reviewMessage}}<span ng-if=\"reviewDescription\">: {{reviewDescription}}</span> </announcement> </div> <div ng-if=\"selectedCandidateSubmission.selected\"> <announcement ng-if=\"['Approved', 'Shortlisted'].indexOf(selectedCandidateSubmission.selected.status)!==-1\"> <span ng-if=\"selectedCandidateSubmission.selected.status === 'Approved'\"> This candidate was selected as suitable but we don't have his commitment yet. <br> <span class=\"md-body-2\">If you prefer, you can reach out to him/her at {{selectedCandidateSubmission.selected.candidate.candidate.email}}</span> </span> <span ng-if=\"selectedCandidateSubmission.selected.status === 'Shortlisted'\"> This candidate was selected as suitable and is interested in your job opening. <br> <span class=\"md-body-2\">You can reach out to him/her at {{selectedCandidateSubmission.selected.candidate.candidate.email}}</span> </span> </announcement> <div class=\"md-whiteframe-z1\"> <md-toolbar class=\"md-primary list-candidates-header\"> <div class=\"md-toolbar-tools\"> <h2 class=\"md-flex\">Profile</h2> </div> </md-toolbar> <candidate-profile flex candidate-submission=\"selectedCandidateSubmission.selected\"> </candidate-profile> </div> </div> </div> </div> </div>"
  );


  $templateCache.put('views/templates/candidate-profile.tmpl.html',
    "<md-content class=\"md-padding\"> <div layout=\"column\" layout-gt-md=\"row\" layout-align=\"start start\"> <div class=\"candidate-social-photo-container\" ng-if=\"candidateSubmission.candidate.candidate.socialPhotoUrl\" layout=\"column\"> <img ng-src=\"{{candidateSubmission.candidate.candidate.socialPhotoUrl}}\" height=\"232\" width=\"auto\"> </div> <div flex layout=\"column\"> <h2 class=\"md-headline\"> {{candidateSubmission.candidate.candidate.name}} <span ng-repeat=\"socialProfile in candidateSubmission.candidate.candidate.socialProfiles\"> <span ng-switch=\"socialProfile.type\"> <span ng-switch-when=\"facebook\" class=\"social-icon\"> <a ng-href=\"{{socialProfile.url}}\" target=\"_blank\"> <md-icon md-svg-src=\"/images/icons/ic_facebook_box.svg\" aria-label=\"{{socialProfile.typeName}}\"></md-icon> </a> </span> <span ng-switch-when=\"twitter\" class=\"social-icon\"> <a ng-href=\"{{socialProfile.url}}\" target=\"_blank\"> <md-icon md-svg-src=\"/images/icons/ic_twitter_box.svg\" aria-label=\"{{socialProfile.typeName}}\"></md-icon> </a> </span> <span ng-switch-when=\"linkedin\" class=\"social-icon\"> <a ng-href=\"{{socialProfile.url}}\" target=\"_blank\"> <md-icon md-svg-src=\"/images/icons/ic_linkedin_box.svg\" aria-label=\"{{socialProfile.typeName}}\"></md-icon> </a> </span> <span ng-switch-when=\"google\" class=\"social-icon\"> <a ng-href=\"{{socialProfile.url}}\" target=\"_blank\"> <md-icon md-svg-src=\"/images/icons/ic_google_box.svg\" aria-label=\"{{socialProfile.typeName}}\"></md-icon> </a> </span> <span ng-switch-when=\"github\" class=\"social-icon\"> <a ng-href=\"{{socialProfile.url}}\" target=\"_blank\"> <md-icon md-svg-src=\"/images/icons/ic_github_box.svg\" aria-label=\"{{socialProfile.typeName}}\"></md-icon> </a> </span> </span> </span> </h2> <h3 class=\"md-subhead\">{{candidateSubmission.candidate.candidate.jobTitle}} <span ng-if=\"candidateSubmission.candidate.candidate.employer\"> - {{candidateSubmission.candidate.candidate.employer}}</span> </h3> <div layout=\"column\" layout-gt-md=\"row\"> <div flex class=\"job-feature\" layout=\"column\" layout-align=\"center center\"> <md-tooltip md-direction=\"bottom\"> Nationality </md-tooltip> <md-icon md-svg-src=\"/images/icons/ic_nationality.svg\" aria-label=\"android \"></md-icon> <span class=\"md-body-1\">{{candidateSubmission.candidate.candidate.nationality}}</span> </div> <div flex class=\"job-feature\" layout=\"column\" layout-align=\"center center\"> <md-tooltip md-direction=\"bottom\"> Residence </md-tooltip> <md-icon>location_on</md-icon> <span class=\"md-body-1\"><span ng-if=\"candidateSubmission.candidate.candidate.city\">{{candidateSubmission.candidate.candidate.city}} - </span>{{candidateSubmission.candidate.candidate.location}}</span> </div> </div> </div> </div> <div layout=\"row\"> <h3 class=\"md-head\">Candidate CV</h3> <span flex></span> <a ng-href=\"{{urlPreviewCV}}\" target=\"_blank\"> <span class=\"top-margin\" aria-label=\"Download CV\"> <md-tooltip md-direction=\"bottom\"> Download CV </md-tooltip> <md-icon>file_download</md-icon> </span> </a> </div> <preview-cv ng-if=\"urlPreviewCV\" cv-url=\"urlPreviewCV\"></preview-cv> </md-content>"
  );


  $templateCache.put('views/templates/candidate-review.tmpl.html',
    "<md-content> <form name=\"candidateReviewForm\" ng-submit=\"candidateReviewForm.$valid && doneReviewing({rating: review.rating, reason: review.reason, description: review.description})\"> <md-tabs md-dynamic-height md-border-bottom> <md-tab ng-if=\"!operations || operations.disqualify\" md-active=\"review.rating==='DISQUALIFIED'\" md-on-select=\"changeRating('DISQUALIFIED')\"> <md-tab-label> <md-icon class=\"disqualified\">thumb_down</md-icon> <span class=\"disqualified\">No</span> </md-tab-label> <md-tab-body> <md-content class=\"md-padding\"> <md-radio-group name=\"reasonDisqualify\" ng-if=\"review.rating==='DISQUALIFIED'\" ng-required=\"true\" ng-model=\"review.reason\" class=\"md-primary\"> <div ng-repeat=\"(disQualifyReasonValue, disQualifyReasonLabel) in reasons.DISQUALIFY\"> <md-radio-button ng-value=\"disQualifyReasonValue\"> {{ disQualifyReasonLabel }} </md-radio-button> <div ng-if=\"disQualifyReasonDescriptionShouldBeShown(disQualifyReasonValue)\"> <md-input-container class=\"reason-description\"> <label>Description</label> <input type=\"text\" name=\"reasonDescription\" ng-model=\"review.description\" placeholder=\"{{getReasonDescriptionPlaceHolder()}}\" required md-maxlength=\"250\"> </md-input-container> <div ng-show=\"candidateReviewForm.$submitted\"> <div class=\"field-error\" ng-message=\"required\" ng-show=\"candidateReviewForm.reasonDescription.$error.required\"> This field is mandatory </div> </div> </div> </div> </md-radio-group> <div ng-show=\"candidateReviewForm.$submitted\"> <div class=\"field-error\" ng-message=\"required\" ng-show=\"candidateReviewForm.reasonDisqualify.$error.required\"> This field is mandatory </div> </div> </md-content> </md-tab-body> </md-tab> <md-tab ng-if=\"!operations || operations.qualify\" md-active=\"review.rating==='QUALIFIED'\" md-on-select=\"changeRating('QUALIFIED')\"> <md-tab-label> <md-icon class=\"qualified\">thumb_up</md-icon> <span class=\"qualified\">Yes</span> </md-tab-label> <md-tab-body> <md-content class=\"md-padding\"> </md-content> </md-tab-body> </md-tab> <md-tab ng-if=\"!operations || operations.outstanding\" md-active=\"review.rating==='OUTSTANDING'\" md-on-select=\"changeRating('OUTSTANDING')\"> <md-tab-label> <md-icon class=\"outstanding\">whatshot</md-icon> <span class=\"outstanding\">Definitely</span> </md-tab-label> <md-tab-body> <md-content class=\"md-padding\"> </md-content> </md-tab-body> </md-tab> <md-tab ng-if=\"operations.shortlist\" md-active=\"review.rating==='SHORTLISTED'\" md-on-select=\"changeRating('SHORTLISTED')\"> <md-tab-label> <md-icon class=\"outstanding\">people</md-icon> <span class=\"outstanding\">Shortlist</span> </md-tab-label> <md-tab-body> <md-content class=\"md-padding\"> </md-content> </md-tab-body> </md-tab> </md-tabs> <div layout=\"row\"> <span class=\"md-body-2\"><md-icon>warning</md-icon>You won't be able to change your evaluation once submitted</span> <span flex></span> <md-progress-circular class=\"md-padding center-block\" ng-show=\"pendingReview\" md-mode=\"indeterminate\"></md-progress-circular> <!--<md-button href=\"http://en.wikipedia.org/wiki/Mango\" target=\"_blank\" md-autofocus>--> <!--<md-icon>help</md-icon>--> <!--<span style=\"margin-left: 10px;\">Job requirements</span>--> <!--</md-button>--> <md-button ng-disabled=\"pendingReview\" ng-click=\"close()\"> Close </md-button> <md-button ng-disabled=\"pendingReview\" class=\"md-primary\" type=\"submit\" style=\"margin-right:20px\"> Submit </md-button> </div> </form> </md-content>"
  );


  $templateCache.put('views/templates/candidates-add-fab.tmpl.html',
    "<md-button class=\"md-fab\" ng-click=\"showReferCandidateDialog()\" id=\"refer-candidate-button\" aria-label=\"Add a job offer\"> <md-icon>group_add</md-icon> </md-button>"
  );


  $templateCache.put('views/templates/candidates-list.tmpl.html',
    "<md-list class=\"scroll-container\"> <md-list-item class=\"md-3-line\" ng-repeat=\"candidateSubmission in candidatesSubmissions track by candidateSubmission._id\" ng-click=\"loadSubmission(candidateSubmission)\" ng-class=\"{ 'nav-active': candidateSubmission === selectedCandidateSubmission.selected }\"> <div class=\"md-list-item-text\" style=\"min-width:0\" layout=\"row\"> <div flex layout=\"column\"> <h3> {{candidateSubmission.candidate.candidate.name}} </h3> <h4>{{candidateSubmission.candidate.candidate.jobTitle}} <span ng-if=\"candidateSubmission.candidate.candidate.employer\"> - {{candidateSubmission.candidate.candidate.employer}}</span> </h4> <p> {{candidateSubmission.status}} on {{candidateSubmission.at | date:'medium' }} </p> </div> <md-icon class=\"md-primary md-hue-2\" ng-if=\"candidateSubmission.status==='Approved'\">thumb_up </md-icon> </div> </md-list-item> </md-list>"
  );


  $templateCache.put('views/templates/candidates-review-fab.tmpl.html',
    "<md-fab-speed-dial md-open=\"isOpen\" md-direction=\"left\" class=\"md-scale\" id=\"rate-candidate-button\"> <md-fab-trigger> <md-button aria-label=\"menu\" class=\"md-fab md-accent\"> <md-tooltip md-direction=\"bottom\"> Rate candidate </md-tooltip> <md-icon>thumbs_up_down</md-icon> </md-button> </md-fab-trigger> <md-fab-actions> <md-button aria-label=\"Requirements\" class=\"md-fab md-raised md-mini\" ng-if=\"!operations || operations.viewRequirements\" ng-click=\"viewRequirements($event)\"> <md-tooltip md-direction=\"bottom\"> View requirements </md-tooltip> <md-icon>info_outline</md-icon> </md-button> <md-button aria-label=\"Outstanding\" class=\"md-fab md-accent md-mini\" ng-if=\"!operations || operations.outstanding\" ng-click=\"outstanding()\"> <md-tooltip md-direction=\"bottom\"> Definitely </md-tooltip> <md-icon class=\"\">whatshot</md-icon> </md-button> <md-button aria-label=\"Qualify\" class=\"md-fab md-primary md-mini\" ng-if=\"!operations || operations.qualify\" ng-click=\"qualify($event)\"> <md-tooltip md-direction=\"bottom\"> Yes </md-tooltip> <md-icon class=\"\">thumb_up</md-icon> </md-button> <md-button aria-label=\"Disqualify\" class=\"md-fab md-warn md-mini\" ng-if=\"!operations || operations.disqualify\" ng-click=\"disqualify()\"> <md-tooltip md-direction=\"bottom\"> No </md-tooltip> <md-icon class=\"\">thumb_down</md-icon> </md-button> <md-button aria-label=\"Shortlist\" class=\"md-fab md-accent md-mini\" ng-if=\"operations.shortlist\" ng-click=\"shortlist()\"> <md-tooltip md-direction=\"bottom\"> Shortlist </md-tooltip> <md-icon class=\"\">people</md-icon> </md-button> </md-fab-actions> </md-fab-speed-dial>"
  );


  $templateCache.put('views/templates/indicators.tmpl.html',
    "<div layout=\"row\" layout-align=\"center center\" id=\"recruiter-kpis\" class=\"md-padding\"> <div flex layout=\"column\" layout-align=\"center start\"> <h2 class=\"cv-pending\"> <md-icon class=\"md-accent\">hourglass_empty</md-icon> {{indicators.pendingCVs}} </h2> </div> <div flex layout=\"column\" layout-align=\"center end\" ng-if=\"!indicators.slotsLeft && !indicators.slots\"> <h2 class=\"cv-approved\"> <md-icon class=\"md-primary\">thumb_up</md-icon> {{indicators.approvedCVs}} </h2> </div> <div flex layout=\"column\" layout-align=\"center center\" ng-if=\"indicators.slotsLeft || indicators.slots\"> <h2 class=\"cv-approved\"> <md-icon class=\"md-primary\">thumb_up</md-icon> {{indicators.approvedCVs}} </h2> </div> <div flex layout=\"column\" layout-align=\"center end\" ng-if=\"indicators.slotsLeft || indicators.slots\"> <h2 class=\"cv-slots\"> <md-icon class=\"md-primary md-hue-3\">person_add</md-icon> {{indicators.slotsLeft || indicators.slots}} </h2> </div> </div>"
  );


  $templateCache.put('views/templates/job-description-editor.tmpl.html',
    "<md-input-container class=\"md-block\"> <label>Job description</label> <ng-wig ng-model=\"description\" ng-disabled=\"disabled\"></ng-wig> </md-input-container>"
  );


  $templateCache.put('views/templates/job-editor.tmpl.html',
    "<md-content class=\"md-padding\"> <form accessible-form name=\"jobForm\" class=\"job-form\" novalidate ng-submit=\"jobForm.$valid && saveJob()\"> <div layout=\"column\"> <h3 class=\"md-title\"> Job details </h3> <md-input-container class=\"md-block\" flex-gt-sm id=\"input-container-title\"> <label>Job Title *</label> <input auto-focus name=\"uJobTitle\" ng-required=\"true\" ng-disabled=\"disabled\" ng-model=\"job.title\"> <div ng-show=\"jobForm.$submitted || jobForm.uJobTitle.$touched\"> <div ng-message=\"required\" ng-show=\"jobForm.uJobTitle.$error.required\">This field is mandatory </div> </div> </md-input-container> <div layout-gt-sm=\"row\"> <md-input-container class=\"md-block\" flex-gt-sm md-is-error=\"jobForm.jobRole.$error.required\"> <label>Job role *</label> <md-select ng-disabled=\"pending || disabled\" name=\"jobRole\" ng-required=\"true\" ng-model=\"job.role\"> <md-option ng-repeat=\"jobRole in jobRoles\" value=\"{{jobRole}}\"> {{jobRole}} </md-option> </md-select> <div ng-show=\"jobForm.$submitted || jobForm.jobRole.$touched\"> <div ng-message=\"required\" ng-show=\"jobForm.jobRole.$error.required\">This field is mandatory </div> </div> </md-input-container> <md-input-container class=\"md-block\" flex-gt-sm md-is-error=\"jobForm.jobRole.$error.required\"> <label>Industry *</label> <md-select ng-disabled=\"pending || disabled\" name=\"industry\" ng-required=\"true\" ng-model=\"job.industry\"> <md-option ng-repeat=\"industry in industries\" value=\"{{industry}}\"> {{industry}} </md-option> </md-select> <div ng-show=\"jobForm.$submitted || jobForm.industry.$touched\"> <div ng-message=\"required\" ng-show=\"jobForm.industry.$error.required\">This field is mandatory </div> </div> </md-input-container> </div> <div layout-gt-sm=\"row\"> <md-input-container class=\"md-block\" flex-gt-sm md-is-error=\"jobForm.jobRole.$error.required\"> <label>Salary range (monthly) *</label> <md-select name=\"salaryRange\" ng-disabled=\"pending || disabled\" ng-required=\"true\" ng-model=\"job.salaryRange\"> <md-option ng-repeat=\"salRa in salaryRange\" value=\"{{salRa}}\"> {{salRa}} </md-option> </md-select> <div ng-show=\"jobForm.$submitted || jobForm.salaryRange.$touched\"> <div ng-message=\"required\" ng-show=\"jobForm.salaryRange.$error.required\">This field is mandatory </div> </div> </md-input-container> <md-autocomplete class=\"md-block\" flex-gt-sm md-input-name=\"jobLocation\" ng-required=\"true\" ng-disabled=\"pending || disabled\" md-selected-item=\"job.location\" md-search-text=\"searchTextLocation\" md-items=\"jobLocation in querySearch(searchTextLocation)\" md-item-text=\"jobLocation\" md-floating-label=\"Job Location *\" md-autocomplete-required> <md-item-template> <span md-highlight-text=\"searchTextLocation\">{{jobLocation}}</span> </md-item-template> <md-not-found> No matching location. </md-not-found> <div ng-show=\"jobForm.$submitted || jobForm.jobLocation.$touched\"> <div ng-message=\"selectedItem\" ng-show=\"jobForm.jobLocation.$error.selectedItem\">Invalid location selected </div> <div ng-message=\"required\" ng-show=\"jobForm.jobLocation.$error.required\">This field is mandatory </div> </div> </md-autocomplete> <md-input-container class=\"md-block\" flex-gt-sm> <label>City</label> <input name=\"uJobCity\" ng-disabled=\"pending || disabled\" ng-model=\"job.city\"> </md-input-container> </div> <job-description-editor ng-disabled=\"pending || disabled\" description=\"job.description\" name=\"description\" ng-if=\"!screenIsSmall\" placeholder=\"Description of the position\" ng-required=\"true\"> </job-description-editor> <md-input-container ng-if=\"screenIsSmall\" class=\"md-block\"> <label>Description of the position *</label> <textarea ng-required=\"true\" ng-disabled=\"pending || disabled\" ng-model=\"job.description\" name=\"description\" columns=\"1\" rows=\"5\"></textarea> </md-input-container> <div ng-show=\"jobForm.$submitted || jobForm.description.$touched\"> <div ng-message=\"required\" ng-show=\"jobForm.description.$error.required\">This field is mandatory </div> </div> <h3 class=\"md-title\"> Candidates requirements </h3> <md-input-container class=\"md-block\"> <label>Describe the ideal candidate *</label> <textarea ng-required=\"true\" ng-disabled=\"pending || disabled\" ng-model=\"job.requirements.candidateDescription\" name=\"candidateDescription\" columns=\"1\" rows=\"5\"></textarea> <div ng-show=\"jobForm.$submitted || jobForm.candidateDescription.$touched\"> <div ng-message=\"required\" ng-show=\"jobForm.candidateDescription.$error.required\">This field is mandatory </div> </div> </md-input-container> <!--<md-chips class=\"custom-chips\"--> <!--ng-model=\"job.requirements.skills\"--> <!--placeholder=\"Enter a skill\"--> <!--delete-button-label=\"Remove Skill\"--> <!--delete-hint=\"Press delete to remove skill\"--> <!--secondary-placeholder=\"+Skill\">--> <!--</md-chips>--> <md-input-container class=\"md-block\" flex-gt-sm> <label>Which locations would you like us to source from ? *</label> <input ng-disabled=\"pending || disabled\" ng-required=\"true\" name=\"resLocation\" ng-model=\"job.requirements.resLocation\"> <div ng-show=\"jobForm.$submitted || jobForm.resLocation.$touched\"> <div ng-message=\"required\" ng-show=\"jobForm.resLocation.$error.required\">This field is mandatory </div> </div> </md-input-container> <md-input-container class=\"md-block\" flex-gt-sm> <label>What job titles should candidates have from their work history ?</label> <input ng-disabled=\"pending || disabled\" name=\"jobTitle\" ng-model=\"job.requirements.jobTitle\"> </md-input-container> <md-input-container class=\"md-block\" flex-gt-sm> <label>How many years of work experience should candidates have ?</label> <input ng-disabled=\"pending || disabled\" name=\"yearsExp\" ng-model=\"job.requirements.yearsExp\"> </md-input-container> <md-input-container class=\"md-block\" flex-gt-sm> <label>Which companies would you like the candidate to have worked for or be working for?</label> <input ng-disabled=\"pending || disabled\" name=\"employer\" ng-model=\"job.requirements.employer\"> </md-input-container> <md-input-container class=\"md-block\" flex-gt-sm> <label>What level of education should candidates have ?</label> <input ng-disabled=\"pending || disabled\" name=\"degree\" ng-model=\"job.requirements.degree\"> </md-input-container> <md-input-container class=\"md-block\" flex-gt-sm> <label>Should candidates have any post-graduate certifications ?</label> <input ng-disabled=\"pending || disabled\" name=\"degree\" ng-model=\"job.requirements.certifications\"> </md-input-container> <md-input-container class=\"md-block\"> <label>Anything else we need to know ?</label> <textarea ng-disabled=\"pending || disabled\" ng-model=\"job.requirements.miscellaneous\" name=\"miscellaneous\" columns=\"1\" rows=\"5\"></textarea> </md-input-container> <br> * Required fields </div> <md-input-container ng-if=\"terms\"> <md-checkbox name=\"tandc\" ng-disabled=\"pending || disabled\" ng-model=\"job.tandc\" ng-required=\"true\" aria-label=\"T & C\" class=\"md-primary md-hue-2\"> <div class=\"md-body-1 tac\">I have read and I agree to <a href=\"https://visage.jobs/terms-conditions.html\" target=\"_blank\"> the terms and conditions</a> </div> </md-checkbox> <div ng-messages=\"jobForm.tandc.$error\" ng-show=\"jobForm.tandc.$error.required\"> <div ng-message=\"required\">You must accept the terms and conditions.</div> </div> </md-input-container> <div layout=\"row\" layout-align=\"start start\"> <md-progress-circular ng-show=\"pending\" md-mode=\"indeterminate\"></md-progress-circular> <md-button ng-disabled=\"pending || disabled\" ng-show=\"existingJob\" ng-click=\"removeJob(job)\" class=\"md-raised md-warn md\" flex-xs=\"100\">Remove </md-button> <span flex></span> <md-button ng-disabled=\"pending || disabled\" ng-show=\"!existingJob\" ng-click=\"back()\" class=\"md-raised md\" flex-xs=\"100\"> Cancel </md-button> <md-button ng-disabled=\"pending || disabled\" ng-show=\"!existingJob\" type=\"submit\" class=\"md-raised md-primary md\" flex-xs=\"100\">Add </md-button> <md-button ng-disabled=\"pending || disabled\" ng-show=\" existingJob\" type=\"submit\" class=\"md-raised md-primary md\" flex-xs=\"100\">Save Updates </md-button> <md-button ng-disabled=\"pending || disabled\" ng-show=\"existingJob && job.status ==='Draft'\" ng-click=\"approveJob()\" class=\"md-raised md-primary md-accent\" flex-xs=\"100\"> <md-icon>check</md-icon>Approve Job </md-button> </div> </form> </md-content>"
  );


  $templateCache.put('views/templates/job-requirements.tmpl.html',
    "<h2 class=\"md-title\"> Candidate requirements</h2> <span class=\"md-subhead\">The candidate will have to match the following description :</span> <p class=\"md-body-2\">What is the ideal candidate ?</p> <p class=\"md-body-1\">{{requirements.candidateDescription}}</p> <br> <br> <span ng-if=\"requirements.skills && requirements.skills.length>0\"> <span class=\"md-body-2\">Which skills should the candidate have ?</span> <br> <md-chips ng-model=\"requirements.skills\" readonly=\"readonly\"></md-chips> <br> <br> </span> <span ng-if=\"requirements.resLocation\"> <span class=\"md-body-2\">Which locations would you like us to source from ?</span> <br> <span class=\"md-body-1\">{{requirements.resLocation}}</span> <br> <br> </span> <span ng-if=\"requirements.jobTitle\"> <span class=\"md-body-2\">What job titles should candidates have from their work history ?</span> <br> <span class=\"md-body-1\">{{requirements.jobTitle}}</span> <br> <br> </span> <span ng-if=\"requirements.yearsExp\"> <span class=\"md-body-2\">How many years of work experience should candidates have ?</span> <br> <span class=\"md-body-1\">{{requirements.yearsExp}}</span> <br> <br> </span> <span ng-if=\"requirements.employer\"> <span class=\"md-body-2\">Which companies would you like the candidate to have worked for or be working for ?</span> <br> <span class=\"md-body-1\">{{requirements.employer}}</span> <br> <br> </span> <span ng-if=\"requirements.degree\"> <span class=\"md-body-2\">What level of education should candidates have ?</span> <br> <span class=\"md-body-1\">{{requirements.degree}}</span> <br> <br> </span> <span ng-if=\"requirements.certifications\"> <span class=\"md-body-2\">Should candidates have any post-graduate certifications ?</span> <br> <span class=\"md-body-1\">{{requirements.certifications}}</span> <br> <br> </span> <span ng-if=\"requirements.miscellaneous\"> <span class=\"md-body-2\">Anything else to know ?</span> <br> <span class=\"md-body-1\">{{requirements.miscellaneous}}</span> <br> </span> <span ng-if=\"requirements.gender\"> <span class=\"md-body-2\">Gender</span> <br> <span class=\"md-body-1\">{{requirements.gender}}</span> <br> <br> </span> <span ng-if=\"requirements.nationality\"> <span class=\"md-body-2\">Nationality</span> <br> <span class=\"md-body-1\">{{requirements.nationality}}</span> <br> <br> </span> <span ng-if=\"requirements.language\"> <span class=\"md-body-2\">Language</span> <br> <span class=\"md-body-1\">{{requirements.language}}</span> <br> <br> </span> <span ng-if=\"requirements.workExp\"> <span class=\"md-body-2\">Work Experience</span> <br> <span class=\"md-body-1\">{{requirements.workExp}}</span> <br> <br> </span> <span ng-if=\"requirements.location\"> <span class=\"md-body-2\">Location</span> <br> <span class=\"md-body-1\">{{requirements.location}}</span> <br> <br> </span> <span ng-if=\"requirements.major\"> <span class=\"md-body-2\">Major</span> <br> <span class=\"md-body-1\">{{requirements.major}}</span> <br> <br> </span>"
  );


  $templateCache.put('views/templates/message-candidate.tmpl.html',
    "<md-dialog aria-label=\"Message candidate\" style=\"width: 800px\" ng-cloak> <form> <md-toolbar> <div class=\"md-toolbar-tools\"> <h2>Message {{candidateSub.candidate.name}}</h2> <span flex></span> <md-button class=\"md-icon-button\" ng-click=\"cancel()\"> <md-icon aria-label=\"Close dialog\">close</md-icon> </md-button> </div> </md-toolbar> <md-dialog-content> <div class=\"md-dialog-content\"> <div layout=\"column\"> <div layout=\"row\" layout-align=\"start start\"> <h2 class=\"md-headline\">Send a message to {{candidateSub.candidate.name}}</h2> <span flex></span> <div style=\"width: 100px;height: 100px; background: url('{{getURLProfilePic()}}') no-repeat center center; background-size:contain\"> </div> </div> <md-input-container> <label for=\"clientEmail\">Your email</label> <input ng-model=\"originEmail\" id=\"clientEmail\" type=\"text\"> </md-input-container> <md-input-container class=\"md-block\"> <label>Message to {{candidateSub.candidate.name}}</label> <textarea ng-model=\"messageContent\" rows=\"5\" md-select-on-focus></textarea> </md-input-container> </div> </div> </md-dialog-content> <md-dialog-actions layout=\"row\"> <span flex><md-progress-circular ng-show=\"pendingSend\" md-mode=\"indeterminate\"></md-progress-circular></span> <md-button ng-click=\"cancel()\"> Cancel </md-button> <md-button class=\"md-primary\" ng-click=\"sendMessage()\" style=\"margin-right:20px\"> Send </md-button> </md-dialog-actions> </form> </md-dialog>"
  );


  $templateCache.put('views/templates/notice.tmpl.html',
    "<md-content layout=\"row\" layout-align=\"center center\" class=\"notice md-whiteframe-z1\"> <div class=\"notice-details\" layout=\"column\"> <ng-transclude></ng-transclude> </div> </md-content>"
  );


  $templateCache.put('views/templates/pipeline-item.tmpl.html',
    "<div class=\"pipeline-item\" flex layout=\"column\" layout-align=\"center center\" ng-click=\"viewCandidates()\" ng-class=\"{ 'disabled' : disabled}\"> <span class=\"md-display-3\">{{count}}</span> <span class=\"md-body-1\">{{label}}</span> <md-button ng-disabled=\"disabled\" ng-if=\"downloadable\" class=\"md-primary\" ng-click=\"downloadCSV($event)\">Download</md-button> </div>"
  );


  $templateCache.put('views/templates/preview-cv-modal.tmpl.html',
    "<md-dialog aria-label=\"Preview CV\" style=\"width: 800px\" ng-cloak> <form> <md-toolbar> <div class=\"md-toolbar-tools\"> <h2>Preview CV</h2> <span flex></span> <md-button class=\"md-icon-button\" ng-click=\"cancel()\"> <md-icon aria-label=\"Close dialog\">close</md-icon> </md-button> </div> </md-toolbar> <md-dialog-content> <preview-cv cv-url=\"cvUrl\"></preview-cv> </md-dialog-content> </form> </md-dialog> <script src=\"../lib/iframeResizer.contentWindow.min.js\"></script>"
  );


  $templateCache.put('views/templates/preview-cv.tmpl.html',
    "<div layout=\"column\"> <div ng-show=\"pendingCV\" layout=\"column\" layout-align=\"center center\"> <p class=\"md-body-2\">Loading pdf viewer...</p> <md-progress-circular ng-show=\"pendingCV\" md-mode=\"indeterminate\"></md-progress-circular> </div> <iframe ng-show=\"!pendingCV\" ng-src=\"{{pdfViewerEndpoint}}\" frameborder=\"0\"></iframe> </div> <script src=\"../lib/iframeResizer.contentWindow.min.js\"></script>"
  );

}]);

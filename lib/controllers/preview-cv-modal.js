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

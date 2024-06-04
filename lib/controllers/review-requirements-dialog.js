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
    function ($scope, $mdDialog, $timeout, Util, requirements) {

      $scope.requirements = requirements;

      $scope.hide = function () {
        $mdDialog.hide();
      };
      $scope.cancel = function () {
        $mdDialog.cancel();
      };

    });

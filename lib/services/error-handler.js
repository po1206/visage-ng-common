'use strict';

/**
 * @ngdoc service
 * @name visageNgCommon.errorHandler
 * @description
 * # errorHandler
 * Factory in the visageNgCommon.
 */
angular.module('visageNgCommon')
  .factory('ErrorHandler', function ($mdDialog) {

    function ErrorDialogCtrl($scope, $mdDialog,message) {
      $scope.cancel = function () {
        $mdDialog.cancel();
      };

      $scope.message = message;
    }

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
  });

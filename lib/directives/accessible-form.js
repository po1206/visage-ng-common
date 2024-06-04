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

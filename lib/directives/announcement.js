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

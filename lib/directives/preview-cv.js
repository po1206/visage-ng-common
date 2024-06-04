'use strict';

/**
 * @ngdoc directive
 * @name visageNgCommon.directive:previewCv
 * @description
 * # previewCv
 */
angular.module('visageNgCommon')
  .directive('previewCv', function ($timeout, $location,ENV) {
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
  });

'use strict';

describe('Directive: candidateRating', function () {

  // load the directive's module
  beforeEach(module('visageNgCommon'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<candidate-rating></candidate-rating>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the candidateRating directive');
  }));
});

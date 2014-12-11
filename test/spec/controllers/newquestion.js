'use strict';

describe('Controller: NewquestionCtrl', function () {

  // load the controller's module
  beforeEach(module('quizApp'));

  var NewquestionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewquestionCtrl = $controller('NewquestionCtrl', {
      $scope: scope
    });
  }));

  xit('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuestionCtrl', function ($scope) {

    $scope.submit = function() {
      if(this.question.input === this.question.answer) {
        $scope.$emit('scoreChanged', 5);
      }
    };


  });

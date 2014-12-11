'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:NewquestionCtrl
 * @description
 * # NewquestionCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('NewquestionCtrl', function ($scope) {

    $scope.qOptions = [{ id: 1,
      isChecked: true }];

    $scope.addQuestion = function() {

      var newQuestion = {},
      optionArray = [];

      newQuestion.q = this.txtNewQuestion;

      newQuestion.options = $scope.qOptions;

      console.log(newQuestion.options);
      //newQuestion.answer = this.option.isChecked;

      newQuestion.difficulty = this.difficultyInput;

      $scope.$emit('addQuestion', newQuestion);

    };

    $scope.addOption = function() {
      var id = $scope.qOptions.length +1;
      $scope.qOptions.push({ id: id, isChecked: false});

    };



  });

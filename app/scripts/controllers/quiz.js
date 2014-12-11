'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuizCtrl',  function ($scope, $timeout, $interval) {

    $scope.quiz = [
      {
        "q": "Who is the best ping pong player at FSA?",
        'options': [{ 'value': "Mike"} , { 'value': "Eddie"} , {'value' : "Nimit"} , { 'value': "Patrick"}],
        'answer': "Nimit",
        "difficulty" : 3
      },
      { "q": "Which robot name was chanted during Lego Mindstorms?",
      'options':[{ 'value': 'infiniteLoop'} , { 'value': 'noHope.js'} , {'value' : 'johnny5'} , { 'value': 'none of the above'}],
      'answer':'noHope.js',
      "difficulty" : 1
      },
      {
        'q': "Out of the following frontend frameworks, which framework is most rails-like",
        'options':[{ 'value': 'Ember.js'} ,{ 'value': 'Angular.js'} , {'value' : 'Backbone.js'} , { 'value': 'Meteor.js'}],
        'answer':'Ember.js',
        "difficulty" : 4
      },
      {
        'q': "Which project used a local data store?",
        'options':[{ 'value': 'TripPlanner'} ,{ 'value': 'Twitter.js'} , {'value' : 'WikiWalker'} , { 'value': 'WikiStack'}],
        'answer':'Twitter.js',
        "difficulty" : 2
      }
    ];


    $scope.score = 0;
    $scope.timer = 15;

    var interval;
    var setTimer = function(interval) {
      interval = $interval(function() {
        $scope.timer --;

      }, 1000);
    };

    $scope.$watch('timer', function(newvalue, oldvalue){
      // if (newvalue === 0) {
      //   $scope.gameStarted = false;
      //   $interval.cancel(interval);
      //
      // }
    });


    $scope.$on('scoreChanged', function(event, data){
      $scope.score += data;
    });

    $scope.$on('addQuestion', function(event, data){
      $scope.quiz.push(data);
    });



      $scope.gameStarted = false;
    $scope.start= function() {
      $scope.score = 0;

      $scope.gameStarted = true;
       setTimer();
    }


  });

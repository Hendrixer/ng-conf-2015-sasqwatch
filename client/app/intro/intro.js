angular.module('app.intro', [])
.config(function($stateProvider){
  $stateProvider.state('app.intro', {
    url: '/intro',
    templateUrl: 'app/intro/intro.html',
    controller: 'IntroController'
  });
})
.controller('IntroController', function($scope, Mock) {

  $scope.nums = Mock.each(10); // Array [1..10]
  
  $scope.splice = function(index){
    $scope.nums.splice(index, 1);
  };
});

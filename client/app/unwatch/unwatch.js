angular.module('app.unwatch', [])
.config(function($stateProvider){
  $stateProvider.state('app.unwatch', {
    url: '/unwatch',
    templateUrl: 'app/unwatch/unwatch.html',
    controller: 'UnwatchController'
  });
})
.controller('UnwatchController', function($scope, Mock, $timeout, Toast) {
  
  $scope.number = 0;
  
  var cancel = $scope.$watch('number', function(fresh, stale){
    if (fresh !== stale && fresh > 10) {
      Toast.show('updated', 800, 'toasted');
      cancel();
    }
  });
  
  $scope.random = function(){
    $scope.number = _.random(0, 12);
  };
  
});

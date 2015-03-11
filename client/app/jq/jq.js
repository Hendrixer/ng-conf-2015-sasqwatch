angular.module('app.jq', [])
.config(function($stateProvider){
  $stateProvider.state('app.jq', {
    url: '/jq',
    templateUrl: 'app/jq/jq.html',
    controller: 'JqController'
  });
})
.controller('JqController', function($scope, Mock, $timeout, Toast) {
  $scope.cards = Mock.each(9);
  
  $scope.onMouseEnter = function(e, even) {
    if (even) {
      Toast.show('even', 500, 'toasted');
    }
  };

})
.directive('onMouseEnter', function(){
  return {
    restrict: 'A',
    link: function(scope, ele, attr) {
      // no $digest here, just some jq
      ele.on('mouseenter', function(){
        if (scope.$even) {
          // does not trigger $digest
          // if we're modifying the scope
          // then we can wrap in $apply
          scope.$eval(attr.onMouseEnter);
        }
      });
    }
  };
});

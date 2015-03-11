angular.module('app', [
  'angularStats',
  'ui.router',
  'app.intro',
  'app.form',
  'app.jq',
  'app.unwatch'
])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/intro');
  
  $stateProvider.state('app', {
    abstract: true,
    url: '',
    templateUrl: 'app/app.html',
    controller: 'AppController'
  });
  
})
.factory('Toast', function(){
  return {
    show: function(msg, l, style){
      toast(msg, l || 1000, style);
    }
  }
})
.factory('Mock', function(){
  return {
    each: function each(to, data) {
      var arr = [];
      if (typeof to === 'number' ) {
        for (var i = 0; i < to; i++) {
          if (data) {
            data.num = i;
          }
          arr.push(data || {title : 'Title ' + i, num: i});
        }
        return arr;
      }
    }
  };
})
.filter('longFilter', function(filterWait) {
  function longFilter(input) {
    var now = new Date();
    while(new Date() - now < filterWait.waitTime) {
      // keep waiting...
    }
    return 'Item ' + input + ' waited ' + (new Date() - now) + 'ms';
  }
  longFilter.$stateful = true; // makes it not cache the result based on the input
  return longFilter;
})
.controller('AppController', function($scope) {
});

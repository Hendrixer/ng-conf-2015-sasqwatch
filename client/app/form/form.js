angular.module('app.form', [])
.config(function($stateProvider){
  $stateProvider.state('app.form', {
    url: '/form',
    templateUrl: 'app/form/form.html',
    controller: 'FormController'
  })
})
.controller('FormController', function($scope) {
  $scope.editMode = false;
  $scope.desc = 'Today\'s message is this:';
});

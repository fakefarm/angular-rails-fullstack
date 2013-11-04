angular.module('myApp', ['ngRoute', 'myApp.controller', 'myApp.services'])
  .config(function($routeProvider){
    $routeProvider.when('/user', {
    templateUrl: '/templates/dashboard.html',
    controller: 'HomeController'
  })
    .otherwise({redirectTo: '/'});
});

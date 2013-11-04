angular.module('myApp', ['ngRoute', 'myApp.controller', 'myApp.services'])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: '/templates/dashboard.html',
        controller: 'HomeController'
      })
      .otherwise({redirectTo: '/'});
});

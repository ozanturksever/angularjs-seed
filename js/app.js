var app = angular.module('app', ['config']);

app.config(function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl:"html/main.html"
        }).
        when('/about', {
            templateUrl:"html/about.html"
        }).
        otherwise({redirectTo:'/'})
});

function AppCtrl($rootScope, $scope, $location, $http, REST_URL) {
    $scope.hello_world = 'Hello World';
    $scope.rest_url = REST_URL;
}

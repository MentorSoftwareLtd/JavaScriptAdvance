'use strict';

var app=angular.module('ngTutorial',['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider.when('/people',{
       templateUrl : '/javascripts/ng/templates/people.html',
       controller: 'PeopleCtrl'
    }).when('/',{
        templateUrl : '/javascripts/ng/templates/main.html',
        controller: 'MainCtrl'
    }).when('/person',{
        templateUrl : '/javascripts/ng/templates/person.html',
        controller: 'PersonCtrl'
    }).otherwise({
       redirectTo: '/'
    });
});

app.controller('MainCtrl', function($scope) {
});

app.controller('PersonCtrl', function($scope, $http, $location) {
    $scope.person = {};
    $scope.save = function(form) {
        if (form.$valid) {
            $http.post('/api/add',$scope.person)
                .success(function() {
                    console.log('Data saved', $location.url());
                    $location.url('/people');
                });
        }
    };
});


app.controller('PeopleCtrl', function($scope, $http) {
    $scope.load = function() {
        $http.get('/api/people').then(
            function(resp) {
                $scope.people = resp.data;
            }
        );
    };

});
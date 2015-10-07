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

app.controller('MainCtrl', function($scope, AppVersion, PeopleService) {
    $scope.version = AppVersion;
    $scope.value = "Directive";
    console.log(PeopleService);
});

app.controller('PersonCtrl', function($scope, PeopleService) {
    $scope.person = {};
    $scope.save = function(form) {
        if (form.$valid) {
            PeopleService.save($scope.person);
        }
    };
});


app.controller('PeopleCtrl', function($scope, PeopleService, $rootScope) {
    $rootScope.$on('upwards', function(event,b) {
        console.log('up', event, b);

    });
    $scope.$on('downwards', function(event,b) {
        console.log('down', event , b);

    });


    $scope.load = function() {

        PeopleService.load(function(data) {
                $scope.people = data;

            }
        );
    };

});

//Services
app.value('AppVersion','1.0');

app.service('PeopleService', function($http, $location, $rootScope) {
    console.log('Create');

    this.save = function(person) {
        $http.post('/api/add',person)
            .success(function() {
                $location.url('/people');
            });
    };


    this.load = function(callback) {

        $http.get('/api/people').then(
            function(resp) {
                $rootScope.$emit('upwards',123);
                $rootScope.$broadcast('downwards',123);

                callback(resp.data);
            }
        );

    };
});

app.directive('cMenu', function($location, $rootScope) {
    return {
        templateUrl: '/javascripts/ng/directives/cmenu.html',
        restrict: 'EA',
        scope: {
            menuText: '@text',
            location: "@"
        },
        link: function(scope, elem, attr) {
            console.log("Link: ",$location.url());
            if (scope.location.replace('#','')===$location.url()) {
                elem.addClass('current');
            } else {
                elem.removeClass('current');
            }
            //if (scope.location === location.url())
        }
        /*compile: function(elem, attr) {
            console.log("Compile: ",$location.url());
            //if (scope.location === location.url())
        }*/
    };
});
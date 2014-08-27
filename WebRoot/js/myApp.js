var myApp= angular.module('myApp', ['BlogCtrl','BlogService','BlogFilter','BlogDirective','ngRoute','ngAnimate']);

myApp.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl : 'templates/list.html',
        controller : 'ListCtrl'
    }).when('/add',{
        templateUrl : 'templates/add.html',
        controller : 'AddCtrl'
    }).when('/edit/:blogId',{
        templateUrl : 'templates/edit.html',
        controller : 'EditCtrl'
    }).otherwise({
        redirectTo: '/'
    });
});
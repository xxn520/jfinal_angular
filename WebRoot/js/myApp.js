var myApp= angular.module('myApp', ['BlogCtrl','BlogService','BlogFilter','BlogDirective','ngRoute','ngAnimate']);

myApp.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl : 'template/list.html',
        controller : 'ListCtrl'
    }).when('/add',{
        templateUrl : 'template/add.html',
        controller : 'AddCtrl'
    }).when('/edit/:blogId',{
        templateUrl : 'template/edit.html',
        controller : 'EditCtrl'
    }).otherwise({
        redirectTo: '/'
    });
});
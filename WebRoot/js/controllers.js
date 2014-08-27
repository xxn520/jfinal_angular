var BlogCtrl=angular.module('BlogCtrl',['BlogService']);

BlogCtrl.controller('ListCtrl',['$scope','$http',function($scope,$http){
	$http.get('/getlist').success(function(data){
		$scope.blogs=data;
	}).error(function(){
		alert('加载失败');
	});
	
    $scope.deleteblog=function(index){
    	var id=$scope.blogs[index].id;
    	$http.get('/delete/'+id).success(function(data){
    		$scope.blogs=data;
    	}).error(function(){
    		alert('加载失败');
    	});
    };
}]);

BlogCtrl.controller('AddCtrl',['$scope',function($scope){
    $scope.blog={};
}]);

BlogCtrl.controller('EditCtrl',['$scope','$location','$http',function($scope,$location,$http){
	var path=$location.path();
	$http.get(path).success(function(data){
		$scope.blog=data;
	}).error(function(){
		alert('加载失败');
	});
}]);
var BlogCtrl=angular.module('BlogCtrl',['BlogService','ui.bootstrap.pagination']);

BlogCtrl.controller('ListCtrl',['$scope','$http',function($scope,$http){
	$scope.maxSize = 5;
	$scope.currentPage = 1;
    $scope.$watch(
    "currentPage",
    function(newValue, oldvalue) {
    	if (newValue)
        doPaging(newValue);
    }
    );
    
    function doPaging(pageIndex) {
        var url = "/getlist/" + pageIndex;
        $http.get(url).success(function (data) {
            $scope.blogs = data.list;
            var number = new Number(data.pageNumber);
            $scope.currentPage=data.pageNumber;
            var number = new Number(data.totalRow);
            $scope.TotalItems = number;
            var number = new Number(data.totalPage);
            $scope.totalPage = number;
        });
    }
    
    $scope.deleteblog=function(index){
    	var id=$scope.blogs[index].id;
    	$http.get('/delete/'+id+'-'+$scope.currentPage).success(function(data){
    		$scope.blogs=data.list;
            $scope.blogs = data.list;
            var number = new Number(data.pageNumber);
            $scope.currentPage=data.pageNumber;
            var number = new Number(data.totalRow);
            $scope.TotalItems = number;
            var number = new Number(data.totalPage);
            $scope.totalPage = number;
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
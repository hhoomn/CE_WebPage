/**
angular.module("app", ["chart.js"]).controller("LineCtrl", function ($scope) {

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
});
      /*/ 
angular.module("app", ["chart.js"]).controller("LineCtrl", function ($scope) {
	  $scope.labels = [0,1,2,3];
	  $scope.series = ['word'];
	  $scope.data = [[0,0,0,0]];
	  $scope.inc=function(){
	  	$scope.data=$scope.data.map(function(data){return data.map(function(y){return y+1})})
		return true
	  };
});
          
/**/

/**
 * Create a namespace and make your variable protected by name space
 */

var myApp = angular.module('myApp',[]);

myApp.controller('MyController',function MyController( $scope ){
	$scope.author = {
		'name' : 'ABC',
		'title' : 'Learning Angular',
		'company' : 'No company'
	}
});
var app=angular.module('myApp', []);

app.controller('myController', 
	['$scope',
	'customerServices',
	'myProvider',
	'CustomerFactory',
	'AppName',
	'Version',
	 function($scope,customerServices,myProvider,CustomerFactory,AppName,Version){

		console.log("My Controller- ProviderServices :" + myProvider.name)
		console.log("My Controller- Service :" + customerServices.getcustomerDetails())
		$scope.proName=myProvider.name;
		$scope.name=myProvider.getName();
		$scope.customerMessage=customerServices.getcustomerDetails();
		$scope.customerFactoryMessage=CustomerFactory
		$scope.constant=AppName
		$scope.ver=Version
	
}])
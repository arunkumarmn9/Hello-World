app.config(["$routeProvider",function($routeProvider){
 			$routeProvider
 			.when("/profile/",
 			{

 				templateUrl:"employee/employee.html",  
 				controller:"employeecontroller"
 			})

 			.when("/dashboard/",
 			{

 				templateUrl:"dashboard/dashboard.html",  
 				controller:"dashboardcontroller"
 			});



 		}]);









 
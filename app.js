(function(){
  var app = angular.module("calc", [ ]);

  app.controller("expenseCtrl", ['$scope',
   function($scope) {
  	$scope.expenses = [
  	                    // { 'gasto':'Luz',
  	                    // 	'año': 12500,
  	                    // 	'mes': 1250,
                        //   'dia': 125,
                        //   'ejemplo': false
                        // },
                        // { 'gasto':'Telefono',
  	                    // 	'año': 12500,
  	                    // 	'mes': 1250,
                        //   'dia': 125,
                        //   'ejemplo': false
                        // }
  	                  ];


  	$scope.addRow = function(){
  		$scope.expenses.push({ 'gasto':$scope.gasto, 'año': $scope.año, 'mes':$scope.mes, 'dia':$scope.dia });

      $scope.gasto='';
  		$scope.mes='';
  	};

  }]);

})();


// var app = angular.module("calc", [ ]);
//
// app.controller("expenseCtrl", ['$scope',
//  function($scope) {
// 	$scope.expenses = [
// 	                    { 'gasto':'Luz',
// 	                    	'año': 12500,
// 	                    	'mes': 1250,
//                         'dia': 125
//                       },
//                       { 'gasto':'Luz',
// 	                    	'año': 12500,
// 	                    	'mes': 1250,
//                         'dia': 125
//                       }
// 	                  ];
//
//
// 	$scope.addRow = function(){
// 		$scope.expenses.push({ 'gasto':$scope.gasto, 'año': $scope.año, 'mes':$scope.mes, 'dia':$scope.dia });
//
//     $scope.gasto='';
// 		$scope.año='';
// 		$scope.mes='';
// 		$scope.dia='';
// 	};
//
// }]);

/*$this->load->module('module_name');
$this->module_name->getName();*/
// 模型、控制器互相调用
var myModule =angular.module('HelloAngular',[]);
myModule.controller("helloAngular",['$scope',
    function HelloAngular($scope){
        $scope.greeting={
            text:'Hello'
        };
    }
]);


// var myModule = angular.module('HelloAngular',[]);
// myModule.controller('helloAngular',['$scope',
//     function helloAngular($scope){
//         $scope.greeting={
//             text:'Hello'
//         };
//     }

// ]);
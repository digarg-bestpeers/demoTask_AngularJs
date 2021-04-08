var app = angular.module("app", ['ngRoute'])

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        template: "<strong>Welcome to Contact Book App..</strong>"
    })
    .when('/contact', {
        templateUrl: 'contact.html',
        controller: 'contactBookController'
    })
    .otherwise({
        template: "Content not available..Click on left pannel to get content"
    })
}])


app.controller('contactBookController', ['$scope', function($scope){
    $scope.id = null
    $scope.name = ''
    $scope.phoneNumber = ''

    $scope.book = []

    $scope.doAdd = function(){
        $scope.book.push({id:$scope.id++, name:$scope.name, phoneNumber:$scope.phoneNumber})
        $scope.name = ''
        $scope.phoneNumber = ''
    }

    $scope.doDelete = function(id){
        console.log("btn clicked ", id)
        $scope.book.splice(id,1)
    }

}])
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
        console.log($scope.book)
    }

    $scope.doDelete = function(contact){
        if($scope.book[$scope.book.indexOf(contact)].id == contact.id){
            $scope.book.splice($scope.book.indexOf(contact),1)
        }
    }

    $scope.doEdit = function(contact){
        if($scope.book[$scope.book.indexOf(contact)].id == contact.id){
            $scope.name = contact.name
            $scope.phoneNumber = contact.phoneNumber
            $scope.tempid = $scope.id 
            $scope.id = contact.id
        }
    }

    $scope.doSave = function(){
        console.log("btn clicked", $scope.id)
    }

}])
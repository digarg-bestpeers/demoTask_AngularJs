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
        if($scope.id != null){
            $scope.book[$scope.id].name = $scope.name
            $scope.book[$scope.id].phoneNumber = $scope.phoneNumber
            $scope.id = null
            $scope.name = ''
            $scope.phoneNumber = ''
        } else {
            $scope.book.push({name:$scope.name, phoneNumber:$scope.phoneNumber})
            $scope.name = ''
            $scope.phoneNumber = ''
        }
    }

    $scope.doDelete = function(contact){
        $scope.book.splice($scope.book.indexOf(contact),1)    
    }

    $scope.doEdit = function(contact){
        $scope.name = contact.name
        $scope.phoneNumber = contact.phoneNumber
        $scope.id = $scope.book.indexOf(contact)
    }

}])
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

    var myContactBook = localStorage['contactList']

    if(myContactBook !== undefined){
        $scope.book = JSON.parse(myContactBook)
    }

    $scope.doAdd = function(){
        if($scope.id != null){
            $scope.book[$scope.id].name = $scope.name
            $scope.book[$scope.id].phoneNumber = $scope.phoneNumber
            localStorage['contactList'] = JSON.stringify($scope.book)
            $scope.id = null
            $scope.name = ''
            $scope.phoneNumber = ''
        } else {
            $scope.book.push({name:$scope.name, phoneNumber:$scope.phoneNumber})
            $scope.name = ''
            $scope.phoneNumber = ''
            localStorage['contactList'] = JSON.stringify($scope.book)
        }
    }

    $scope.doDelete = function(contact){
        $scope.book.splice($scope.book.indexOf(contact),1)
        localStorage['contactList'] = JSON.stringify($scope.book)   
    }

    $scope.doEdit = function(contact){
        $scope.name = contact.name
        $scope.phoneNumber = contact.phoneNumber
        $scope.id = $scope.book.indexOf(contact)
    }

}])
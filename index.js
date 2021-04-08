var app = angular.module('app', [])

app.controller('contactBook', ['$scope', function($scope){
    $scope.name = '';
    $scope.phoneNumber = ''
    $scope.id = null

    $scope.book = []

    $scope.doAdd = function(){
        if($scope.id != null){
            $scope.book[$scope.id].name = $scope.name
            $scope.book[$scope.id].phoneNumber = $scope.phoneNumber
            $scope.name = ''
            $scope.phoneNumber = ''
            $scope.id = null
        }
        else{
            $scope.book.push({name:$scope.name, phoneNumber:$scope.phoneNumber})
            $scope.name = '';
            $scope.phoneNumber = '';
        }
    }

    $scope.doDelete = function(contact){
        var index = $scope.book.indexOf(contact)
        $scope.book.splice(index, 1)
    }

    $scope.doEdit = function(contact){
        $scope.name = contact.name
        $scope.phoneNumber = contact.phoneNumber
        $scope.id = $scope.book.indexOf(contact)
    }

}])
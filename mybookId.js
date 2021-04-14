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
    .when('/users',{
        templateUrl: 'users.html',
        controller: 'userController'
    })
    .otherwise({
        template: "Content not available..Click on left pannel to get content"
    })
}])


app.controller('contactBookController', ['$scope', function($scope){
    $scope.id = null
    $scope.name = ''
    $scope.phoneNumber = ''
    $scope.isEdit = false

    $scope.books = []

    var myContactBook = localStorage['contactList']

    if(myContactBook !== undefined){
        $scope.books = JSON.parse(myContactBook)
    }

    $scope.doAdd = function(){
        $scope.books.push({id:Math.floor((Math.random() * 10) + 1), name:$scope.name, phoneNumber:$scope.phoneNumber})
        localStorage['contactList'] = JSON.stringify($scope.books)
        $scope.name = ''
        $scope.phoneNumber = ''
    }

    // $scope.doDelete = function(id){
    //     $scope.books.find(function(contact){
    //         if(contact.id == id){
    //             $scope.books.splice(contact,1)
    //             localStorage['contactList'] = JSON.stringify($scope.books)
    //         }
    //     })
    // }

    $scope.doDelete = function(id){
        $scope.books = $scope.books.filter((contact) => contact.id != id )
        localStorage['contactList'] = JSON.stringify($scope.books)
    }

    $scope.doEdit = function(id){
        // $scope.books.find(function(contact){
        //     if(contact.id == id){
        //         $scope.name = contact.name
        //         $scope.phoneNumber = contact.phoneNumber
        //         $scope.id = contact.id
        //         $scope.isEdit = true
        //     }
        // })
        const book = $scope.books.find((book) => book.id === id)
        $scope.name =  book.name;
    }

    $scope.doUpdate = function(){
        $scope.books.map( (contact) => contact.id == $scope.id ? (
            contact.name = $scope.name,
            contact.phoneNumber = $scope.phoneNumber,
            localStorage['contactList'] = JSON.stringify($scope.books),
            $scope.name = '',
            $scope.phoneNumber = '',
            $scope.isEdit = false
        ) : null)
    }

}])



app.controller('userController', ['$scope','userService', function($scope,userService){

    userService.userList().then(function(response){
        $scope.users = response.data
    }, function(error){
        $scope.error = error.data
    })
    
}])
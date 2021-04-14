app.config(['userServiceProvider', function(userServiceProvider){
    userServiceProvider.config('https://jsonplaceholder.typicode.com')
}])


app.provider('userService', function(){

    var bseUrl = '';
    this.config = function(url){
        baseUrl = url
    }

    this.$get = ['$http', function($http){

        var oUserService = {}

        oUserService.userList = function(){
            return $http({
                url: baseUrl + '/users',
                method: 'GET'
            })
        }
        return oUserService;
    }]
})
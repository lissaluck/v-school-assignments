var app = angular.module("myApp", []);

app.controller("MainController", ["$scope", "$http", "httpService", function ($scope, $http, httpService) {

    $scope.todoList = []

    $scope.addTodo = function (todo) {
        httpService.addTodo(todo).then(function (response) {
            $scope.todoList.push(response.data)
        })
    }


    httpService.getTodo().then(function (response) {
        $scope.todoList = response.data;
    })

    $scope.toggleComplete = function (todo, index) {
        httpService.editTodo().then(function () {})
    }


    $scope.updateList = function (todo, index) {
        httpService.updateList(todo, index);
        $scope.todoList[index] = httpService.todoList[index];
        }
    
    $scope.deleteItem = function(id, index){
        $scope.todoList.splice(index, 1);
        httpService.deleteItem(id, index);
    }
    
}]);
var app = angular.module("myApp", []);

app.controller("MainController", ["$scope", "$http", function ($scope, $http) {

    $scope.toggleEditing = function () {
        $scope.editing = !$scope.editing;
    };

    $http.get("http://api.vschool.io/melissa/todo").then(function (response) {
        $scope.todoList = response.data;
    });

    $scope.addTodo = function (todoItem) {
        $http.post("http://api.vschool.io/melissa/todo", todoItem).then(function (response) {
            $scope.todoList.push(todoItem);
            $scope.todo = {};
        });
    };

    $scope.deleteItem = function (id, index) {
        $http.delete("http://api.vschool.io/melissa/todo/" + id).then(function () {
            $scope.todoList.splice(index, 1);
        });
    };



    $scope.updateTodo = function (todoObj) {
        delete todoObj.editing;
        $http.put("http://api.vschool.io/melissa/todo/" + todoObj._id, todoObj)
            .then(function (response) {
                alert("It worked!");
            }, function (response) {
                todoObj.editing = true;
                console.log(response);
                alert("There was a problem");
            })
    }
}]);
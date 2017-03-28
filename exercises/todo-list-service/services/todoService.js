angular.module("myApp")

.service("httpService", ["$http", function ($http) {

    this.addTodo = function (todo) {
        return $http.post("http://api.vschool.io/melissa/todo", todo)
    
    }

    this.getTodo = function () {
        return $http.get("http://api.vschool.io/melissa/todo");
    }
    
    this.editTodo = function (editedTodo, index){
        return $http.put("http://api.vschool.io/melissa/todo/" + editedTodo._id, {completed: !editedTodo.completed})
    }
    
    this.updateList = function (todo, index) {
        return $http.put(`http://api.vschool.io/melissa/todo/${todo._id}`, todo)
            .then(function(response) {
            this.serviceTodoList[index] = response.data;
        })
    }
    
    this.deleteItem = function (id) {
       $http.delete(`http://api.vschool.io/melissa/todo/${id}`).then(function() {
       })
    }
}])
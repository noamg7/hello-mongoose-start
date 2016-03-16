angular.module('todoApp', [

]); //this is the setter syntax, you are creating an application using this one


angular.module('todoApp') //this is the getter syntax, we can use this so we don't have to make a variable to store our angular application; YAYYY no globals
      .controller('TodoController', TodoController);

TodoController.$inject = ['$scope', '$http', 'TodoService'];

function TodoController($scope, $http, TodoService){
  TodoService.read();
    .then(function(response){
      $scope.todos = response;
    });
  $scope.isEditing = false;

  $scope.saveTodo = function(){
    $http.post('/api/todos', $scope.newTodo)
    .then(function(response){
      $scope.newTodo = {};
    })
    .catch(function(err){
      console.err(err);
    });
}
  $scope.editTodo = function(todo){
    $scope.isEditing = !$scope.isEditing;
    $scope.editingTodo = todo;
  }
  $scope.updateTodo = function(todo){
    $http.put('/api/todos/'+todo._id, todo)
    .then(function(response){
      $scope.isEditing = false;
    })
    .catch(function(err){
      console.log(err);
    });
  }

  $scope.deleteTodo = function(todo){
    var id = todo._id;
    $http.delete('/api/todos/'+id)
    .then(function(response){
    })
    .catch(function(err){
      console.err(err);
    });
  }
}

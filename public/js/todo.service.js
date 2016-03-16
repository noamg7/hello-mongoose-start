angular.module('todoApp')
      .factory("TodoService", TodoService);
// .service and .factory do the same thing
TodoService.$inject = ['$http'];

function TodoService($http){
  return {
    read: getAllTodos,
    create: createTodo,
    update: updateTodo,
    delete: deleteTodo,
  }

  function getAllTodos(){
    return $http.get('/api/todos')
        .then(function(response){
         return response.data;
       });

  }
  function createTodo(todoObj){}
  function updateTodo(id, todoObj){}
  function deleteTodo(id){}

}

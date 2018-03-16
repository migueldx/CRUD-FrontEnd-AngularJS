'use strict';
 
App.factory('AlunoService', ['$http', '$q', function($http, $q){
 
    return {
         
    listarTodos: function() {
            return $http.get('http://192.168.0.5:8081/aluno/')
            .then(
                    function(response){
                        return response.data;
                    }, 
                    function(errResponse){
                        console.error('Error while fetching users');
                        return $q.reject(errResponse);
                    }
            );
        },
     
    salvar: function(aluno){
            return $http.post('http://192.168.0.5:8081/aluno/', aluno)
            .then(
                    function(response){
                        return response.data;
                    }, 
                    function(errResponse){
                        console.error('Error while creating user');
                        return $q.reject(errResponse);
                    }
            );
        },
     
     atualizarAluno: function(aluno){
             return $http.put('http://192.168.0.5:8081/aluno/', aluno)
             .then(
                     function(response){
                         return response.data;
                     }, 
                     function(errResponse){
                         console.error('Error while updating user');
                         return $q.reject(errResponse);
                     }
             );
         },
     
    deletarAluno: function(id){
             return $http.delete('http://192.168.0.5:8081/aluno/'+id)
             .then(
                     function(response){
                         return response.data;
                     }, 
                     function(errResponse){
                         console.error('Error while deleting user');
                         return $q.reject(errResponse);
                     }
             );
         }
         
    };
 
}]);
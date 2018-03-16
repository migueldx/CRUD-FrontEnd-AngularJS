'use strict';
 
App.controller('AlunoController', ['$scope', 'AlunoService', function($scope, AlunoService) {
          var self = this;
          self.aluno={id:null,nome:''};
          self.alunos=[];
               
          self.listarTodos = function(){
              AlunoService.listarTodos()
                  .then(
                               function(d) {
                                    self.alunos = d;
                               },
                                function(errResponse){
                                    console.error('Erro ao listar alunos');
                                }
                       );
          };
            
          self.salvar = function(aluno){
              AlunoService.salvar(aluno)
                      .then(
                      self.listarTodos, 
                              function(errResponse){
                                   console.error('Erro ao salvar aluno');
                              } 
                  );
          };
 
          self.atualizarAluno = function(aluno){
               AlunoService.atualizarAluno(aluno)
                       .then(
                               self.listarTodos, 
                               function(errResponse){
                                    console.error('Error while updating User.');
                               } 
                   );
           };
 
          self.deletarAluno = function(id){
               AlunoService.deletarAluno(id)
                       .then(
                               self.listarTodos, 
                               function(errResponse){
                                    console.error('Error while deleting User.');
                               } 
                   );
           };
 
          self.listarTodos();
 
          self.submit = function() {
              if(self.aluno.id===null){
                  console.log('Salvando novo aluno', self.aluno);    
                  self.salvar(self.aluno);
              }else{
                  self.atualizarAluno(self.aluno);
                  console.log('Aluno atualizado com novo ID ', self.aluno.id);
              }
              self.limpar();
          };
               
           self.editar = function(id){
               for(var i = 0; i < self.alunos.length; i++){
                   if(self.alunos[i].id === id) {
                      self.aluno = angular.copy(self.alunos[i]);
                      break;
                   }
               }
           }
               
        //   self.remove = function(id){
        //       console.log('id to be deleted', id);
        //       if(self.user.id === id) {//clean the form if the user to be deleted is shown there.
        //           self.reset();
        //       }
        //       self.deleteUser(id);
        //   }
 
          self.limpar = function(){
              self.aluno={id:null,username:'',address:'',email:''};
              $scope.myForm.$setPristine(); //reset Form
          }
 
      }]);
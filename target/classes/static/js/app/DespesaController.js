'use strict';
 
angular.module('controleDespesas').controller('DespesaController',
    ['DespesaService', '$scope',  function( DespesaService, $scope) {
    	
        var self = this;
        self.despesa = {};
        self.despesas =[];
 
        self.submit = submit;
        self.getAllDespesas = getAllDespesas;
        self.createDespesa = createDespesa;
        self.removeDespesa = removeDespesa;
        self.reset = reset;
 
        self.successMessage = '';
        self.errorMessage = '';
        self.done = false;
 
        self.onlyIntegers = /^\d+$/;
        self.onlyNumbers = /^\d+([,.]\d+)?$/;
        
        $scope.labels = ["Receitas", "Despesas"];

        
        var test = DespesaService.getAllDespesas();
        var vReceitas = 0;
        var vDespesas = 0;
        for(var i = 0; i < test.length; i++){
        	if(test[i].tipo){
        		vReceitas += test[i].valor;
        	} else {
        		vDespesas += test[i].valor;
        	}
        }
        $scope.data = [vReceitas,vDespesas];
        
        function defineDataChart(){
        	 var test = DespesaService.getAllDespesas();
             var vReceitas = 0;
             var vDespesas = 0;
             for(var i = 0; i < test.length; i++){
             	if(test[i].tipo){
             		vReceitas += test[i].valor;
             	} else {
             		vDespesas += test[i].valor;
             	}
             }
             $scope.data = [vReceitas,vDespesas];
        }
        
        $scope.isVisible = false;
        $scope.showHide = function () {
            $scope.isVisible = $scope.isVisible ? false : true;
        }
        $scope.getClass = function(tipo) {
            if (tipo) {
                return 'receita';
            } else {
            	return 'despesa';
            }
        }
        
        function submit() {
            console.log('Submitting');
            if (self.despesa.id === undefined || self.despesa.id === null) {
                createDespesa(self.despesa);
            } 
        }
 
        function createDespesa(despesa) {
            DespesaService.createDespesa(despesa)
                .then(
                    function (response) {
                        self.successMessage = 'Registro lançado com sucesso';
                        self.errorMessage='';
                        self.done = true;
                        self.despesa={};
                        $scope.myForm.$setPristine();
                    },
                    function (errResponse) {
                        self.errorMessage = 'Erro ao lançar registro ' + errResponse.data.errorMessage;
                        self.successMessage='';
                    }
                );
        }
 
 
 
        function removeDespesa(id){
            DespesaService.removeDespesa(id)
                .then(
                    function(){
                    },
                    function(errResponse){
                        console.error('Erro ao remover um registro '+id +', Error :'+errResponse.data);
                    }
                );
        }
 
 
        function getAllDespesas(){
            return DespesaService.getAllDespesas();
        }
        

        function reset(){
            self.successMessage='';
            self.errorMessage='';
            self.despesa={};
            $scope.myForm.$setPristine(); //reset Form
        }
    }
    ]).filter("dateOnly", function(){
    	return function(input){
        	return input.split('T')[0];
        };
    }).filter('sumByColumn', function () {
        return function (collection, column, typeOf, scope) {
            var total = 0;

            collection.forEach(function (item) {
            	if(item["tipo"] == typeOf){
            		total += parseInt(item[column]);
            	}
            });
            
            return total;
          };
     });


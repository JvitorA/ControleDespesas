'use strict';
 
angular.module('controleDespesas').factory('DespesaService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {
 
            var factory = {
                loadAllDespesas: loadAllDespesas,
                getAllDespesas: getAllDespesas,
                createDespesa: createDespesa,
                removeDespesa: removeDespesa
            };
 
            return factory;
 
            function loadAllDespesas() {
                console.log('Fetching all Despesas');
                var deferred = $q.defer();
                $http.get(urls.DESPESAS_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all Despesas');
                            $localStorage.despesas = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function getAllDespesas(){
                return $localStorage.despesas;
            }
 
 
            function createDespesa(despesa) {
                var deferred = $q.defer();
                $http.post(urls.DESPESAS_SERVICE_API, despesa)
                    .then(
                        function (response) {
                        	loadAllDespesas();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                           console.error('Error ao criar lançamento : '+errResponse.data.errorMessage);
                           deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
            function removeDespesa(id) {
                var deferred = $q.defer();
                $http.delete(urls.DESPESAS_SERVICE_API + id)
                    .then(
                        function (response) {
                        	loadAllDespesas();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Erro ao remover registro:'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }
 
        }
    ]);
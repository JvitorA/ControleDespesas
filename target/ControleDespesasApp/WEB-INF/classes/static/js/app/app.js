var app = angular.module('controleDespesas',['ui.router','ngStorage', 'chart.js']);
 
app.constant('urls', {
    BASE: 'http://localhost:8080/ControleDespesasApp',
    DESPESAS_SERVICE_API : 'http://localhost:8080/ControleDespesasApp/api/despesa/'
});
 
app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
 
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'partials/list',
                controller:'DespesaController',
                controllerAs:'ctrl',
                resolve: {
                    despesas: function ($q, DespesaService) {
                        console.log('Carrega Despesas');
                        var deferred = $q.defer();
                        DespesaService.loadAllDespesas().then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    }]);
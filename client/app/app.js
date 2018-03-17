(function(){
'use strict';

angular.module('yogaAcademy', ['ui.router', 'ngAnimate'])
.config(AppConfig);

AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function AppConfig($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('inicio');

	$stateProvider
		.state('inicio', {
			url: '/inicio',
			templateUrl: './app/components/inicio/inicio.template.html',
			controller: 'inicioController as ctrl'
		})
		.state('catalogo', {
			url: '/catalogo',
			templateUrl: './app/components/catalogo/catalogo.template.html',
			controller: 'catalogoController as ctrl'
		})
		.state('cursos', {
			url: '/cursos/{courseId}',
			templateUrl: './app/components/cursos/cursos.template.html',
			controller: 'cursosController as ctrl',
			resolve: { 
				courseId: ['$stateParams', function($stateParams){ return $stateParams.courseId } ]
			}
		})
		.state('login', {
			url: '/login',
			templateUrl: './app/components/login/login.template.html',
			controller: 'loginController as ctrl'
		});
};

})();

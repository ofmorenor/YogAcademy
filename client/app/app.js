(function(){
'use strict';

angular.module('yogaAcademy', ['ui.router', 'ngAnimate'])
.config(AppConfig)
.controller('mainMenuController', MainMenuController);

AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function AppConfig($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('inicio');

	$stateProvider
		.state('inicio',{
			url: '/inicio',
			templateUrl: '/.app/components/inicio/inicio.template.html',
			controller: 'inicioController as ctrl'
		})
		.state('cursos',{
			url: '/cursos',
			templateUrl: './app/components/cursos/cursos.template.html',
			controller: 'cursosController as ctrl'
		})
		.state('cursos.detalle',{
			url: '/:id',
			templateUrl: './app/components/cursos/cursos-detalle.template.html',
			controller: 'cursosDetalleController as ctrl'
		})
		.state('login',{
			url: '/login',
			templateUrl: './app/components/login/login.template.html',
			controller: 'loginController as ctrl'
		});
};

})();

(function(){
	'use strict';
	angular.module('yogaAcademy')
	.controller('cursosController', CursosController);

	CursosController.$inject = []; // para protejer de minification
	function CursosController(){
		const ctrl = this;
		
		// Esta funcion se ejecuta al iniciar el controlador
		// Aqui es donde se llama al servidor para traer
		// los datos que se van a mostrar
		ctrl.$onInit = function(){
			ctrl.courses = getFakeCoursesData();
		}

		function getFakeCoursesData(){
			return [
				{
					id: 1,
					name: 'Curso 1',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
					duration: '4 semanas'
				},
				{
					id: 2,
					name: 'Curso 2',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
					duration: '4 semanas'
				},
				{
					id: 3,
					name: 'Curso 3',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
					duration: '4 semanas'
				},
				{
					id: 4,
					name: 'Curso 4',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
					duration: '4 semanas'
				}
			];
		}
	}
})();

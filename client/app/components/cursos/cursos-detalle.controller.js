(function(){
	'use strict';
	angular.module('yogaAcademy')
	.controller('cursosDetalleController', CursosDetalleController);

	CursosDetalleController.$inject = [];
	function CursosDetalleController(){
		const ctrl = this;

		ctrl.$onInit = function(){
			ctrl.course = getFakeCourseData(id);
		}

		function getFakeCourseData(id){
			return {
				id: id,
				name: 'Curso ' + id,
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
				duration: '4 semanas'
			};
		}

	}
})();

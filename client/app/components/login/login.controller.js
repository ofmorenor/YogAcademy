(function(){
	'use strict';
	angular.module('yogaAcademy')
	.controller('loginController', LoginController);

	LoginController.$inject = []; // para protejer de minification
	function LoginController(){
		const ctrl = this;

		ctrl.login = function(){
			if (!ctrl.userData.user || !ctrl.userData.password) return;
			console.log('hacer post en /api/login con: ', ctrl.userData);	
		}
	}
})();

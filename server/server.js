(function(){
	'use strict';
	const express = require('express');
	const bodyParser = require('body-parser');
	const morgan = require('morgan');
	
	const app = express();
	app.use(morgan('tiny'));
	app.use(bodyParser.json());
	app.use(express.static(__dirname + '/../client'));

	// Aqui quedaria el apiRest del proyecto
	app.get('/api', (req, res) => 
		res.status(200).send('welcome yoga course api')
	);

	// Run server
	app.listen(3000, () => console.log('listening in port 3000'));
	
})();

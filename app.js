const lugar = require('./lugar/lugar');

const argv = require('yargs').options({
	direccion: {
		alias: 'd',
		desc: 'direccion de la ciudad para obtener el clima',
		demand: true
	}
}).argv;


lugar.getRole(argv.direccion)
	 .then( resp => {
	 	console.log(JSON.stringify(resp,undefined,2));
	 })
	 .catch( e => console.log(e) );


const fs = require('fs'); // importar libreria
const { crearArchivo } = require('./helpers/multiplicar');
const  argv  = require('./config/yargs');


console.clear();

 crearArchivo( argv.b,argv.l )
 .then(msg => console.log( msg ) )
 .catch(error  => console.log( error ) );

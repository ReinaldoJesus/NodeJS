const argv = require('yargs')
    .option( 'b', {
          alias: 'base',
          type: 'number',
          demandOption : true,
          describe: 'Numero de tabla X'
    } )
    .option( 'l', {
        alias: 'Listar',
        type: 'boolean',
        default : false,
        describe: 'Mostrar Tabla'
  } )
  .option( 'h', {
    alias: 'Hasta',
    type: 'number',
    default : 10,
    describe: 'Hasta que numero'
} )    
.check( ( argv, options ) => {
    if( isNaN(argv.b)){
        throw 'El valor no es numerico'.red
    }else if( isNaN(argv.h)){
        throw 'El valor no es numerico'.red
    } 
    return true;
} )
.argv;

    module.exports = argv;
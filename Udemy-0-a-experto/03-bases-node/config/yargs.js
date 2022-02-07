const argv = require('yargs')
    .option( 'b', {
          alias: 'base',
          type: 'number',
          demandOption : true,
    } )
    .check( ( argv, options ) => {
        if( isNaN(argv.b )){
            throw 'El valor no es numerico'
        }
        return true;
    } )
    .option( 'l', {
        alias: 'Listar',
        type: 'boolean',
        default : false,
  } )
    .argv;

    module.exports = argv;
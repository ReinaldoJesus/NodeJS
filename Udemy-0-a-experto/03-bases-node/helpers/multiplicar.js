const fs = require('fs'); // importar libreria
const { Module } = require('module');

const crearArchivo = async (base = 5, listar ) => {
let salida = '';
try {
    for( let i = 1 ; i <= 10; i++){
        salida += `${ base } X ${ i } = ${ base * i }\n`;
       }
       if ( listar ){ 
        console.log('====================================');
        console.log('Tabla de multiplicar del: ', base);
        console.log('====================================');           
       console.log(salida);
        }
        fs.writeFileSync(`tabla-${ base }.txt`,salida );
        return `tabla-${ base }.txt creada`;
} catch (error) {
    throw error;
}

/*fs.writeFile(`tabla-${ base }.txt`,salida, (err) => {
    if (err) throw err;
    console.log('Se creo el archivo');
} );*/

}
module.exports = {
    crearArchivo
}
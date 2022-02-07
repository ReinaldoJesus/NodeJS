const fs = require('fs'); // importar libreria
const colors = require('colors')
const { Module } = require('module');

const crearArchivo = async (base = 5, listar,hasta ) => {
let salida = '';
try {
    for( let i = 1 ; i <= hasta; i++){
        salida += `${ base } X ${ i } = ${ base * i }\n`;
       }
       if ( listar ){ 
        console.log('===================================='.red);
        console.log('Tabla de multiplicar del: '.green, base);
        console.log('===================================='.red);           
        console.log(salida.rainbow);
        }
        fs.writeFileSync(`./salida/tabla-${ base }.txt.`, salida );
        return `tabla-${ base }.txt creada`.green;
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
require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');
console.clear();

const main = async() => {
    console.log('Hola pete');
    mostrarMenu();
    
    pausa();
}

main();
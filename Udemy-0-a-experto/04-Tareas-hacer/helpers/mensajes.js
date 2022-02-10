//const { resolve } = require('path');
require ('colors');


const mostrarMenu = () => {

    return new Promise (resolve => { 
        console.clear();
        console.log('===================================='.green);
        console.log('Seleccione una opcion'.green);
        console.log('===================================='.green);
        
        console.log(`${'1.'.yellow } Crear Tarea`);
        console.log(`${'2.'.yellow } Listar Tarea`);
        console.log(`${'3.'.yellow } Listar Tarea Completadas`);
        console.log(`${'4.'.yellow } Listar Tarea Pendientes`);
        console.log(`${'5.'.yellow } Completar Tareas`);
        console.log(`${'6.'.yellow } Borrar Tarea`);
        console.log(`${'0.'.yellow } Salir\n`);
        
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question('Seleccione uina opcion: '.green,(opt) => {
            readline.close();
            resolve(opt);
        });
    });
}

const pausa = () => {
    return new Promise (resolve => {    
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question(`\n Precione ${'ENTER'.yellow } para continuar \n `,(opt) =>{
        readline.close();
        resolve();
    });
});
 }   


module.exports = {
     mostrarMenu,
     pausa
}
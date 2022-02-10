const inquirer = require('inquirer');
require ('colors');

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: 'Que desea hacer',
    choices: [
        {
            value: '1', 
            name: `${'1.'.yellow } Crear Tarea`,
        },
        {
            value: '2', 
            name:  `${'2.'.yellow } Listar Tarea`,
        },
        {
            value: '3', 
            name: `${'3.'.yellow } Listar Tarea Completadas`,
        },
        {
            value: '4', 
            name: `${'4.'.yellow } Listar Tarea Pendientes`,
        },
        {
            value: '5', 
            name:  `${'5.'.yellow } Completar Tareas`,
        },
        {
            value: '6', 
            name: `${'6.'.yellow } Borrar Tarea`,
        },
        {
            value: '0', 
            name: `${'0.'.yellow } Salir`,
        }
    ]
}]

const stop = [{
    type: 'input',
    name: 'parar',
    message: `Presione ${'ENTER'.yellow } Para Continuar`,
    /*choices: [{
            value: 'Enter', 
            name:  `Presione ${'ENTER'.yellow } Para Continuar`,
        }]*/
}];

const inquirerMenu = async()  => {
    console.clear();
    console.log('===================================='.green);
    console.log('Seleccione una opcion'.green);
    console.log('===================================='.green);

    const  opt = await inquirer.prompt( preguntas );
    //console.log(opt);
    return opt;


} 

const pausa = async () => {
    console.log(`\n`);
    const  opt = await inquirer.prompt( stop );
    return opt;
 }

module.exports = {
    inquirerMenu,
    pausa
}
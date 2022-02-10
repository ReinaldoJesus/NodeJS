require('colors');
//const { mostrarMenu, pausa } = require('./helpers/mensajes');
const { inquirerMenu,pausa } = require('./helpers/inquirer');
const { Tareas } = require('./models/tareas')
console.clear();

const main = async() => {
    let opt = '';
    const tareas = new Tareas();
    do {
        opt = await inquirerMenu();
        console.log(opt)
        await pausa();
    }while( opt !== '0')
   
}

main();
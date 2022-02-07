console.log('Inicio de Programa');

setTimeout( () => {
    console.log('primer timeout');
}, 3000);

setTimeout( () => {
    console.log('Segundo timeout');
}, 0);

setTimeout( () => {
    console.log('tercero timeout');
}, 0);


console.log('fin de Programa');

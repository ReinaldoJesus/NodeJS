const id = 3;
const empleados = [
{id: 1, nombre : 'Rey'},
{id: 2,nombre : 'Iveth'},
{id: 3,nombre : 'SinSueldo'} 
];
const salarios = [ 
    {id: 1,salario : 1000},
    {id: 2,salario : 2000 }
]; 
//Empleado
const getEmpleado =  ( id, callback ) => {
    const empleado = empleados.find( e => e.id === id )
    if ( empleado ) {
        callback( null, empleado.nombre);
    } else {
        callback( `empleado con el id ${ id } no existe` )
    }
}

//Salario
const getSalario = (id , callback ) => {
    const salario = salarios.find( s => s.id === id )?.salario
    if ( salario ) {
        callback( null, salario);
    } else {
        callback( `Salario para el id ${ id } no existe` )
    }
}

getEmpleado( id, ( err, empleado )  => {
    if ( err ){
        console.log('Error');
        return console.log(err);
    }
    console.log('Exito');
//    console.log(empleado);

    getSalario( id, ( err, salario )  => {
    
        if ( err ){
         console.log('Error');
           return console.log(err, 'nombre:',empleado);
        }
        console.log( 'El empleado ', empleado, 'tiene salario de: ', salario);
    } );
} );



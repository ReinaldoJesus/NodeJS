const id = 3;
const empleados = [
{id: 1,nombre : 'Rey'},
{id: 2,nombre : 'Iveth'},
{id: 3,nombre : 'SinSueldo'} 
];
const salarios = [ 
    {id: 1,salario : 1000},
    {id: 2,salario : 2000 }
]; 

//Empleado
const getEmpleado =  ( id ) => {
    return new Promise( ( resolve,reject ) => {
        const empleado = empleados.find( e => e.id === id )?.nombre;
       /* if (empleado){
            resolve( empleado.nombre )
        } else {
            reject( 'error')
        }*/
        (empleado) // esto es un if
            ? resolve( empleado ) //if
            : reject('error id: ' + id + ' no existe'  );//else
    })
}
const getSalario =  ( id ) => {
    return new Promise( ( resolve,reject ) => {
        const salario = salarios.find( e => e.id === id )?.salario;
        (salario) // esto es un if
            ? resolve( salario ) //if
            : reject('error id: ' + id + ' no tiene salario'  );//else
    })
}   
/*
getEmpleado(id)
    .then( empleado => console.log( empleado ) )
    .catch(err => console.log( err )  );

    getSalario(id)
    .then( salario => console.log( salario ) )
    .catch(err => console.log( err )  );

    getEmpleado(id)
    .then ( empleado => {
            getSalario( id ) 
             .then( salario  => {
                console.log( 'El empleado: ', empleado, 'tiene salario: ', salario  );
             })
             .catch(err => console.log( err )  );
    })
    .catch(err => console.log( err )  );*/
// empleado    
let nombre;
getEmpleado(id)
    .then( empleado => {
        nombre = empleado; 
        return getSalario(id) 
    })
    .then( salario => console.log( 'El empleado: ', nombre, 'tiene salario: ', salario ) )
    .catch(err => console.log( err )  );   
const id = 2;
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

const getInfoUsuario = async( id ) => {
    try {
        const empleado = await getEmpleado( id );
        const salario = await getSalario( id );
        return `empleado con el id ${ empleado } tiene un sueldo de ${ salario }`;
    } catch (error) {
        throw error;
    }
}

getInfoUsuario(id)
.then(msg => console.log( msg ) )
.catch(error  => console.log( error ) );
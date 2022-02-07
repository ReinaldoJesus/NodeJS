
setTimeout(  () => {
    console.log('hola');
} , 1000);

const GetUserById = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Rey'
    }


    setTimeout( () => {
        callback( usuario );
    } )
}

GetUserById( 10, ( usuario ) => {
    console.log(usuario.id);
    console.log(usuario.nombre);
} );

const deadpool = {
nombre : 'Wade',
apellido : 'Winston',
poder : 'Regeneracion',
edad : 27,
getNombre(){
    return `${ this.nombre, this.apellido, this.poder}`;
}
}

function imprimirHeroes(nombre,apellido,poder,edad = 0 ){
  //  const {nombre,apellido,poder,edad = 0} = deadpool;
    console.log(nombre,apellido,poder,edad);
}

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [,,h3] = heroes;

console.log(h3);



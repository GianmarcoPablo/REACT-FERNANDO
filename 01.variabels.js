// VARIABLES Y CONSTANTES

// si nunca vas a cambiar el valor de la variable, se usa const
const nombre = 'Fernando';
const apellido = 'Herrera';

// si vas a cambiar el valor de la variable, se usa let
let valorDado = 5;
valorDado = 4; // para reasignar el valor de la variable no es necesario usar let otra vez
console.log(nombre, apellido, valorDado);

if(true){
    let valorDado = 6;
    console.log(valorDado);
}

console.log(valorDado);
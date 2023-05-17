const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log(personajes[0]); // Goku
// console.log(personajes[1]); // Vegeta
// console.log(personajes[2]); // Trunks

const [ , p2] = personajes;
console.log(p2); // Goku

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

//TAREA

const useState = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre,setNombre] = useState('goku');

console.log(nombre);
setNombre();
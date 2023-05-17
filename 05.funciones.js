const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => `Hola, ${nombre}`;

console.log(saludar('Goku'));

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}

console.log(getUser())

// Tarea

// function getSuuarioActivo(nombre) {
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// }

// const usuarioActivo = getSuuarioActivo("fernando")
// console.log(usuarioActivo)

const getUsuarioActivo = (nombre) => 
    ({
        uid: "ABC567",
        username: nombre
    })

console.log(getUsuarioActivo("gianmarco"))
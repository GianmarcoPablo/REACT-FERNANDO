// Objeto literal
const persona = {
    nombre: 'Tony', // llave: valor
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};

const persona2 = {...persona}; // clonar el objeto persona

console.log(persona)
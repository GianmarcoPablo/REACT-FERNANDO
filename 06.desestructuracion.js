const persona = {
    nombre: "tony",
    edad: 45,
    clave: "iron man"
}
// const {nombre,edad,clave} = persona
// console.log(nombre)

const useContext = ({clave,nombre,edad,ramgo="campitan"}) => {
    // console.log(nombre,edad,ramgo)
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const {nombreClave,anios,latlng:{lat,lng}} = useContext(persona)
console.log(nombreClave,anios)
console.log(lat,lng)


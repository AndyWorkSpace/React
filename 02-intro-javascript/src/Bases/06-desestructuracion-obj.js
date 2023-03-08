// Desestructuracion
// asignacion desestructuracion

const persona ={
    nombre: 'tony',
    edad: 45,
    clave: 'iron',
    rango: 'soldado'
}

const { nombre,edad,clave} =persona;  // extrae lo que pongo entre las llaves del objeto persona
// console.log( persona.nombre);
// console.log( persona.edad);
// console.log( persona.clave);

console.log(nombre);
console.log(edad);
console.log(clave);

// const retornaPersona =
//     (usuario) => {
//         console.log(usuario);
//     }

// const retornaPersona =
//     (usuario) => {
//         const {nombre,edad,clave} = usuario;

//         console.log(nombre,edad,clave);
//     }

const contexto = ({ nombre, clave, edad, rango = 'capitan' })=>{
    // console.log(nombre,clave,rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:12.231,
            lng:12.323,
        }
    }
}


const {nombreClave, anios,latlng: {lat,lng}} = contexto(persona);
console.log(nombreClave,anios);
console.log(lat,lng);
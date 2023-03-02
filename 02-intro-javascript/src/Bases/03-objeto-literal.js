// objetos literales
// las llaves en consola siempre es un objeto

const persona = {
    nombre: 'tony',
    apellido: 'ramirez',
    edad: 23,
    direccion:{
        ciudad: 'cusco',
        lat: 13.4213,
        lng: 12.4242,
    }
};

//console.table(persona);
console.log(persona);

// PARA CLONAR UN OBJETO

// esta tecnica nunca utilizarlo

//const persona2 = persona;
//persona2.nombre = 'peter';

//console.log(persona2);

// como recomendacion para clonar es copiar todas las propiedades para el nuevo objeto

// utilizaremos esto para clonar un objeto sin guardar su referencia
const persona3 = {...persona}
persona3.nombre = 'peter';

console.log(persona);
//console.log(persona2);
console.log(persona3);
// FUNCIONES 


// no es recomendable ya que se puede modificar muy facil
// function saludar(nombre){
//     return `hola ${nombre}`;
// }

// saludar = 30;

// RECOMENDADA
const saludar = function(nombre){
    return `hola, ${nombre}`;
}

// funciones de flecha
const saludar2 = (nombre)=>{
    return `hola, ${nombre}`;
}

const saludar3 = (nombre)=>`hola, ${nombre}`;

// es importante usar el los parentesis si queremos devolver un valor sin especificar el return
const getUser = () => (
    {
        uid: 'ABC123',
        username: 'Elcapo',
    }
)
// console.log(saludar("juan"));
 
console.log(saludar('goku'));
console.log(saludar2('vegeta'));
console.log(saludar3('trons'));

const user = getUser();
console.log(user);

//Tarea
/* 
1. transformar a una funcion flecha
2. tiene que retornar un objero implicito
3. pruebas
*/
function getUsuarioActivo(nombre){
    return{
        uid: 'abc567',
        username: nombre,
    }
}

const getUsuarioActivo2 = (nombre)=>(
    {
        uid: 'abc567',
        username: nombre,
    }
)
const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

const usuarioActivo2 = getUsuarioActivo2('fernanda');
console.log(usuarioActivo2);
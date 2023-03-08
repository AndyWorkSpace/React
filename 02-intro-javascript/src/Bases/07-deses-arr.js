// desestructuracion de arreglos

const personajes = ['gokku','vegeta','trunks'];

// console.log(personajes[0]);

const [ /*indica que omitira el primer valor */,/*indica que omitira el segundo valor */ ,p2] = personajes;
console.log(p2);


const retornaArreglo = () =>{
    return['abc',123];
}

const [letras,numeros] = retornaArreglo();
console.log(letras,numeros);

// tarea

const State = (valor) =>{
    return [ valor, ()=>{console.log('hola mundo')}];
}

const [nombre,setNombre] = State('goku');

console.log(nombre);
setNombre();


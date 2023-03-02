///////////// TEMPLATE STRINGS ///////////////

const nombre = 'fernando';
const apellido = 'juarez';

//const nombreCompleto = nombre +" "+apellido;
const nombreCompleto = `
${nombre} 
${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre)
{
    return `hola ${nombre}`;
}

console.log(`Este es un saludo: ${getSaludo(nombre)}`);
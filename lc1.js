/* 
  Live Coding 1 - AE2
*/

// 1. Declaración de variables
console.log('--- 1. VARIABLES: let, const y var ---');

// 1.1 var es la forma antigua de declarar variables
// tiene alcance de función o global, lo que podría causar errores inesperados

var nombre = 'Estudiante'; // Variable global
console.log('Variable con var:', nombre);

function saludar() {
  var saludo = 'Hola';
  console.log(saludo);
}
saludar();

// Var no existe fuera de la función
// console.log(saludo); // ReferenceError: saludo is not defined

// Dentro del bloque, var funciona como global
if (1 > 0) {
  var saludo = 'Holi';
}

saludo = 'Buenas';
console.log(saludo);

// 1.2 let es la forma moderna. Permite reasignación de valor.
// La usaremos cuando sepamos que el valor va a cambiar
let edad = 25;
// Concatenando con strings
console.log('Edad inicial (con let): ' + edad);

edad = 26; // Reasignando valor
console.log('Edad actualizada (con let): ' + edad);

console.log('Edad con incremento postfijo: ' + edad++);
console.log('Edad, ahora si? ' + edad); // actualiza valor después del postfijo

function despedirse() {
  let despedir = 'Chao'; // let tiene alcance de bloque!
  console.log(despedir);
}
despedirse();
// console.log(despedir); // ReferenceError: despedir is not defined

// if es un bloque! let existo solo existe dentro del bloque
if (1 > 0) {
  let existo = true;
}

// console.log(existo); // ReferenceError: existo is not defined

// *** Let no permite re-declarar variables ***
// let apellido = 'Perez';
// let apellido = 'López';

// 1.3 const es para valores constantes
// no se puede reasignar, es la opción por defecto mas segura

const curso = 'Front end 011-1';
console.log(`Curso actual: ${curso}`);

/* 
  Concatenación de Strings
*/
console.log('--- 2. CONCATENACIÓN DE STRINGS ---');

let hola = 'Hola';
let persona = 'Juan';

// Método 1: con operador '+' (concatenacion tradicional)
let mensajeTradicional = hola + ' ' + persona;
console.log(mensajeTradicional);

// Método 2: con .concat
// argumenos dentro del () pueden ser tantas palabras, frases o variables como queramos
let mensajeConcat = hola.concat(' ', persona, '. Tu no eres ', nombre);
console.log(mensajeConcat);

// Método 3: template literals (comillas invertidas ``)
let mensajeModerno = `${hola}, tu nombre es ${persona}`;
console.log(mensajeModerno);

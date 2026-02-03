/* 
  Live Coding 2 - AE2
*/
// --------------------------------------------------------
// 1. Evaluación de edad para votar (if / else if / else)
// --------------------------------------------------------

// paso 1. definir una variable para simular la edad de alguien
let edad = 18;

// paso 2. Estructura básica de control
console.log('--- Inicio de evaluación de edad ---');

if (edad >= 18) {
  // Solo si se cumple la condición entraremos a este bloque
  console.log('Tienes la edad suficiente para votar.');
} else if (edad === 17) {
  // Solo si se cumple esta segunda condición entraremos a este bloque
  console.log('Aún no puedes votar, pero pronto...');
} else {
  // Caso por defecto, se ejecuta este bloque si ninguna de las condiciones anteriores se cumplió
  console.log('Eres menor de edad, no puedes votar.');
}

// --------------------------------------------------------
// 2. Uso de operadores lógicos para complejizar
// --------------------------------------------------------
let tieneLicencia = true;

console.log('\n--- Inicio de evaluación de edad ---');

// Usar operador && (AND) para exigir que ambas condiciones sean True
if (edad >= 18 && tieneLicencia) {
  console.log('Puedes manejar, tienes la edad y la licencia');
} else {
  console.log('No puedes manejar.');
}

// --------------------------------------------------------
// 3. Operadores ternarios
// --------------------------------------------------------
console.log('\n--- Inicio de operadores ternarios ---');

let resultado = edad >= 18 ? 'Puedes votar' : 'No puedes votar';
console.log(resultado);

// --------------------------------------------------------
// 4. Condición de borde: División por 0
// --------------------------------------------------------
console.log('\n--- Inicio de condición de borde: División por 0 ---');

let totalVotos = 100;
let mesasEscrutadas = 10;

if (mesasEscrutadas === 0) {
  console.log(
    'Advertencia: No se pueden calcular promedios sin mesas escrutadas',
  );
} else {
  let promedio = totalVotos / mesasEscrutadas;
  console.log(`Promedio de votos por mesa: ${promedio}`);
}

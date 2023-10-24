/* Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”. */

// Crear una variable con el resultado
// Crear una variable con el texto
// Crear una variable con acceso al elemento de DOM
// Crear una función para imprimir el resultado

const result = 3 + 5
const text = `La suma de 3 + 5 es ${result}`
const mathStringDiv = document.getElementById('math_string')

function printString() {
    mathStringDiv.innerHTML = /* html */ `
        <p>${text}</p>
    `
}

printString()
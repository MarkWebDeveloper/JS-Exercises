// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro

//Acceder al formulario.
//Crear varios condicionales if con % por cada de los numeros.
//Quitar el formulario y poner la primera condicion que se cumpla.

function app() {
    getForm()
    submitListener()
}

function getNumber() {
    let numberInput = document.getElementById('number').value
    return numberInput
}

function getForm() {
    let form = document.getElementById('form')
    return form
}

function checkIfDivisible() {
    if (getNumber() % 2 == 0) {
        return 'Your number is divisible by 2'
    } else if (getNumber() % 3 == 0) {
        return 'Your number is divisible by 3'
    } else if (getNumber() % 5 == 0) {
        return 'Your number is divisible by 5'
    } else if (getNumber() % 7 == 0) {
        return 'Your number is divisible by 7'
    } else {
        return 'Your number is not divisible by 2, 3, 5 or 7'
    }
}

function onSubmit(event) {
    event.preventDefault();
    getNumber()
    checkIfDivisible()
    form.innerHTML = /* html */ `
    <h1>${checkIfDivisible()}</h1>
    <h2>Por cierto, ¿no lo podías calcular tú mismo?</h2>
    `
}

function submitListener() {
    form.addEventListener('submit', onSubmit)
}

app()
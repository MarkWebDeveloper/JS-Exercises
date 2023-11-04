// Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

//Acceder al formulario.
//Ahora cada condicional tiene que devolver una variable. Luego las vamos a la hora de innerHTML.
//Como una opción podemos organizar los divisores en un array

function app() {
    getForm()
    submitListener()
}

let numbersArray = []
let stringArray = []
let numbersString = ''
let divider1 = ''
let divider2 = ''
let divider3 = ''
let divider4 = ''

function getNumber() {
    let numberInput = document.getElementById('number').value
    return numberInput
}

function getForm() {
    let form = document.getElementById('form')
    return form
}

function checkIfDivisible() {
    divider1 = getNumber() % 2 == 0 ? 2 : ''
    divider2 = getNumber() % 3 == 0 ? 3 : ''
    divider3 = getNumber() % 5 == 0 ? 5 : ''
    divider4 = getNumber() % 7 == 0 ? 7 : ''
}

function addToArray() {
    numbersArray.push(divider1, divider2, divider3, divider4)
}

function composeStringFromArray() {
    for (let index = 0; index < numbersArray.length; index++) {
        const element = numbersArray[index];
        if (element !== '') {
            stringArray.push(element, ", ")
        }
    }

    if (stringArray[stringArray.length - 1] === ', ') {
        stringArray.pop()
    }

    if (stringArray.length > 2) {
        const yLetter = " y "
        stringArray[stringArray.length - 2] = yLetter
    }

    numbersString = stringArray.join('')
}

function onSubmit(event) {
    event.preventDefault();
    getNumber()
    checkIfDivisible()
    addToArray()
    composeStringFromArray()

    if (stringArray.length === 0) {
        form.innerHTML = /* html */ `
        <h1>No es divisible por ninguno</h1>
        `
    } else {
        form.innerHTML = /* html */ `
        <h1>Su número es divisible por ${numbersString}</h1>
        <h2>Por cierto, ¿no lo podías calcular tú mismo?</h2>
        `
    }
}

function submitListener() {
    form.addEventListener('submit', onSubmit)
}

app()
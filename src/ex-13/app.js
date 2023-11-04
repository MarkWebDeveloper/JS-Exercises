// Escribir un programa que escriba en pantalla los divisores de un número dado

//Acceder al formulario.
//Usar bucle for con un index < numero

function app() {
    getForm()
    submitListener()
}

let numberInput = document.getElementById('number').value
let divisorsArray = []
let stringArray = []
let numbersString = ''


function getNumber() {
    let numberInput = document.getElementById('number').value
    return numberInput
}

function getForm() {
    let form = document.getElementById('form')
    return form
}

function findDivisors() {
    for (let index = 0; index <= getNumber(); index++) {
        if (getNumber() % index == 0)
        divisorsArray.push(index)
    }
}

function composeStringFromArray() {
    for (let index = 0; index < divisorsArray.length; index++) {
        const element = divisorsArray[index];
        stringArray.push(element, ", ")
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
    findDivisors()
    composeStringFromArray()

    if (stringArray.length === 0) {
        form.innerHTML = /* html */ `
        <h1>No es divisible por ninguno</h1>
        `
    } else {
        form.innerHTML = /* html */ `
        <h1>Su número es divisible por ${numbersString}</h1>
        <h2>Así que soy un programa muy útil</h2>
        `
    }
}

function submitListener() {
    form.addEventListener('submit', onSubmit)
}

app()
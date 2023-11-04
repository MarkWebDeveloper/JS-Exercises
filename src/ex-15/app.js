// Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

// Aquí tiene que ser más fácil. También hacemos una lista con los divisores.
// Ahora si en la lista hay solo dos elementos, el mismo numero y 1, entonces el numero es primo. En el caso contrario, no lo es.

function app() {
    getForm()
    submitListener()
}

let divisorsArray = []

function getForm() {
    let form = document.getElementById('form')
    return form
}

function getNumber() {
    let numberInput = document.getElementById('number').value
    return numberInput
}

function findDivisors(num) {
    for (let index = 0; index <= num; index++) {
        if (num % index == 0)
        divisorsArray.push(index)
    }
}

function checkIfPrime() {
    if (divisorsArray.length === 2) {
        return true
    } else {
        return false
    }
}

function onSubmit(event) {
    event.preventDefault();
    getNumber()
    findDivisors(getNumber())
    checkIfPrime()

    if (checkIfPrime() === true) {
        form.innerHTML = /* html */ `
        <h1>Sí, el número ${getNumber()} es primo</h1>
        <h2>¿Estás contento?</h2>
        `

    } else {
        form.innerHTML = /* html */ `
        <h1>No, el número ${getNumber()} no es primo</h1>
        <h2>Y aquí empieza a sonar la música triste</h2>
        `
    }
}

function submitListener() {
    form.addEventListener('submit', onSubmit)
}

app()
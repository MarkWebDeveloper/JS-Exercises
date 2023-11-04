// Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

// Como en el ejercicio anterior, calcular los divisores de cada numero
// Añadir todos los divisores a una lista
// Filtrar la lista para dejar solo los divisores comunes
// Crear una funcion para eliminar los duplicados
// Imprimirlo todo en la pantalla

function app() {
    getForm()
    submitListener()
}

let number1 = document.getElementById('number1').value
let number2 = document.getElementById('number2').value
let divisorsArray = []
let stringArray = []
let numbersString = ''

function getForm() {
    let form = document.getElementById('form')
    return form
}

function findDivisors(num) {
    for (let index = 0; index <= num; index++) {
        if (num % index == 0)
        divisorsArray.push(index)
    }
}

function getNotUnique() {
    map = new Map()
    divisorsArray.forEach(a => map.set(a, (map.get(a) || 0) + 1))
    return divisorsArray.filter(a => map.get(a) > 1);
}

function deleteDuplicates() {
    return [...new Set(getNotUnique())]
}

function composeStringFromArray() {
    for (let index = 0; index < deleteDuplicates().length; index++) {
        const element = deleteDuplicates()[index];
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
    let number1 = document.getElementById('number1').value
    let number2 = document.getElementById('number2').value
    findDivisors(number1)
    findDivisors(number2)
    getNotUnique()
    deleteDuplicates()
    composeStringFromArray()

    if (stringArray.length === 0) {
        form.innerHTML = /* html */ `
        <h1>Los números introducidos no tienen divisores comunes</h1>
        `
    } else {
        form.innerHTML = /* html */ `
        <h1>Los divisores comunes de ${number1} y ${number2} son ${numbersString}</h1>
        <h2>Así que soy un programa muy útil</h2>
        `
    }
}

function submitListener() {
    form.addEventListener('submit', onSubmit)
}

app()
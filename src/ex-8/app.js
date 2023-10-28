// Escribe un programa que pida una frase y escriba las vocales que aparecen

//Acceder al formulario
//Hacer una funcion de conteo de las letras
//Quitar el formulario y poner la cantidad de las vocales

function app() {
    getForm()
    eventListener()
}

function getText() {
    let textInput = document.getElementById('text').value
    return textInput
}

function getForm() {
    let form = document.getElementById('form')
    return form
}

function getVowels() {
    let vowCount = getText().match(/[aeiou]/gi)
    return vowCount === null ? 0 : vowCount.length
}

function onSubmit(event) {
    event.preventDefault();
    getText()
    getVowels()
    form.innerHTML = /* html */ `
    <h1>El número de las vocales en su frase es ${getVowels()}</h1>
    <h2>Pues, eso... Ahora lo sabes.</h2>
    `
}

function eventListener() {
    form.addEventListener('submit', onSubmit)
}

app()

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

    
// })

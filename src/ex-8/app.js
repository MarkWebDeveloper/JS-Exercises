// Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales

//Acceder al formulario
//Hacer una funcion de conteo de las letras
//Quitar el formulario y poner la cantidad de las vocales

function app() {
    getForm()
    submitListener()
}

function getText() {
    let textInput = document.getElementById('text').value
    return textInput
}

function getForm() {
    let form = document.getElementById('form')
    return form
}

function showVowels() {
    let vowCount = getText().match(/[aeiou]/gi)

    if (vowCount === null) {
        return "Ay-yay. No hay vocales allí"
    } else {
        let aCheck = getText().match(/[a]/gi)
        
    let aCount = aCheck === null ? 0 : aCheck.length 
    let eCheck = getText().match(/[e]/gi)
    let eCount = eCheck === null ? 0 : eCheck.length
    let iCheck = getText().match(/[i]/gi)
    let iCount = iCheck === null ? 0 : iCheck.length
    let oCheck = getText().match(/[o]/gi) 
    let oCount = oCheck === null ? 0 : oCheck.length
    let uCheck = getText().match(/[u]/gi)
    let uCount = uCheck === null ? 0 : uCheck.length

    if (aCount >= 1) {
        a = 'a'
    } else {
        a = ""
    }
    
    if (eCount >= 1) {
        e = 'e'
    } else {
        e = ""
    }
    
    if (iCount >= 1) {
        i = 'i'
    } else {
        i = ""
    }
    
    if (oCount >= 1) {
        o = 'o'
    } else {
        o = ""
    }

    if (uCount >= 1) {
        u = 'u'
    } else {
        u = ""
    }

    uniqueVowels = `${a} ${e} ${i} ${o} ${u}`

    return `Las vocales únicas en su frase son: ${uniqueVowels}`
    }
}

function onSubmit(event) {
    event.preventDefault();
    getText()
    showVowels()
    form.innerHTML = /* html */ `
    <h1>${showVowels()}</h1>
    <h2>¿Pensabas que no lo íba a saber?</h2>
    `
}

function submitListener() {
    form.addEventListener('submit', onSubmit)
}

app()
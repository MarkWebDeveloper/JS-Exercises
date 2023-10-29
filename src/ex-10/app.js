// Escribe un programa que pida una frase y escriba las vocales que aparecen

//Acceder al formulario.
//Modificar un poco el ejericio 8. La función tiene que ser casi la misma.
//Quitar el formulario y poner la cantidad de cada una de las vocales.

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

function showVowelsAnd() {
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
        a = `a(${aCount}) `
    } else {
        a = ''
    }
    
    if (eCount >= 1) {
        e = `e(${eCount}) `
    } else {
        e = ''
    }
    
    if (iCount >= 1) {
        i = `i(${iCount}) `
    } else {
        i = ''
    }
    
    if (oCount >= 1) {
        o = `o(${oCount}) `
    } else {
        o = ''
    }

    if (uCount >= 1) {
        u = `u(${uCount}) `
    } else {
        u = ''
    }

    return `Las vocales que aparecen en su frase son: ${a}${e}${i}${o}${u}`
    }
}

function onSubmit(event) {
    event.preventDefault();
    getText()
    showVowelsAnd()
    form.innerHTML = /* html */ `
    <h1>${showVowelsAnd()}</h1>
    <h2>Ahora puedes dormir tranquilo</h2>
    `
}

function submitListener() {
    form.addEventListener('submit', onSubmit)
}

app()
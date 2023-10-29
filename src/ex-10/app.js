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

function showVowelsAndNumb() {
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

    let a = aCount >= 1 ? `a(${aCount}) ` : ''
    let e = eCount >= 1 ? `e(${eCount}) ` : ''
    let i = iCount >= 1 ? `i(${iCount}) ` : ''
    let o = oCount >= 1 ? `o(${oCount}) ` : ''
    let u = uCount >= 1 ? `u(${uCount}) ` : ''

    return `Las vocales que aparecen en su frase son: ${a}${e}${i}${o}${u}`
    }
}

function onSubmit(event) {
    event.preventDefault();
    getText()
    showVowelsAndNumb()
    form.innerHTML = /* html */ `
    <h1>${showVowelsAndNumb()}</h1>
    <h2>Ahora puedes dormir tranquilo</h2>
    `
}

function submitListener() {
    form.addEventListener('submit', onSubmit)
}

app()
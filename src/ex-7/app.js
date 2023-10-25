// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

//Acceder al formulario
//Hacer una funcion de conteo de las letras
//Quitar el formulario y poner la cantidad de las letras "a"

let form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let textInput = document.getElementById('text').value

    function countA(text) {

        let regex = /[a]/g; 

        return (text.match(regex).length);
    }

    form.innerHTML = /* html */ `
    <h1>El número de las letras "a" en su frase es ${countA(textInput)}</h1>
    <h2>Ahora tiene que pensar qué es lo que va a hacer con este conocimiento</h2>
    `
})

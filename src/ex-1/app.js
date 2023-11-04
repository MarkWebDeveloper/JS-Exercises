// Escribe un programa que escriba en la pantalla un texto de tipo <h1> que diga “Hello Javascript”.

// Acceder al elemento title
// Añadir codigo html

const title = "Hello Javascript"
const titleSection = document.getElementById('title')

function printTitle() {
    titleSection.innerHTML = /* html */ `
        <h1>${title}</h1>
    `
}

printTitle()
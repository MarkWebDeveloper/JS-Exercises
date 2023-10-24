const title = "Hello Javascript"
const titleSection = document.getElementById('title')

function printTitle() {
    titleSection.innerHTML = /* html */ `
        <h1>${title}</h1>
    `
}

printTitle()
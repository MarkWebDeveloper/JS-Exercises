/* Escribe un programa que pida el nombre del usuario con un input y escriba un texto que diga “Hola <nombre-de-usuario>” */

//Crear variable con el nombre del usuario
//Acceder al DOM
//Crear una funcion para anadir el h1


let usernameField = document.getElementById("name_field");
let form = document.getElementById("form");
let formDiv = document.getElementById("form-control");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    formDiv.innerHTML = /* html */ `
    <h1>Hola ${usernameField.value}</h1>
    `;
})
        


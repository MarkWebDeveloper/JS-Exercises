// Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”.

//Crear variables para cada numero
//Acceder al DOM
//Hacer una funcion de calculo
//Quitar el formulario y poner el resultado


let number1 = document.getElementById("number1")
let number2 = document.getElementById("number2")
let form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    function sum() {
        let sumResult = Number(number1.value) + Number(number2.value)
        return sumResult
    }

    form.innerHTML = /* html */ `
    <h1>“La suma de ${number1.value} con ${number2.value} es ${sum()}”</h1>
    `;
})
        


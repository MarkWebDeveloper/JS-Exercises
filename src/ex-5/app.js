// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

//Crear variables para cada numero
//Acceder al DOM
//Hacer una funcion de comparacion
//Quitar el formulario y poner el resultado

let number1 = document.getElementById("number1")
let number2 = document.getElementById("number2")
let form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    function compare() {
        if (Number(number1.value) === Number(number2.value)) {
            return "Los números son iguales"
        }
    
        if (Number(number1.value) > Number(number2.value)) {
            return `${number1.value} es mayor que ${number2.value}`
        }

        if (Number(number1.value) < Number(number2.value)) {
            return `${number2.value} es mayor que ${number1.value}`
        } 
    }

    compare()

    console.log(number1)
    console.log(typeof number1) 

    form.innerHTML = /* html */ `
    <h1>${compare()}</h1>
    `;
})
        


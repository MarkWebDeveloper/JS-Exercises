// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

//Acceder al formulario
//Crear variables para cada numero
//Hacer una funcion de comparacion
//Quitar el formulario y poner el resultado

let form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var number1 = document.getElementById("number1").value
    var number2 = document.getElementById("number2").value
    let number3 = document.getElementById("number3").value

    let numbersList = [number1, number2, number3]

    function biggestNumber(list) {
        return Math.max(...list);
    };

    form.innerHTML = /* html */ `
    <h1>El número mayor es ${biggestNumber(numbersList)}</h1>
    `
})

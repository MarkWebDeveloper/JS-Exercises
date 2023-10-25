// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

//Acceder al formulario
//Hacer una funcion de conteo de las letras
//Quitar el formulario y poner la cantidad de las letras "a"

let form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var number1 = document.getElementById('number1').value
    var number2 = document.getElementById('number2').value
    let number3 = document.getElementById('number3').value

    let numbersList = [number1, number2, number3]

    function biggestNumber(list) {
        return Math.max(...list);
    };

    form.innerHTML = /* html */ `
    <h1>El número mayor es ${biggestNumber(numbersList)}</h1>
    `
})

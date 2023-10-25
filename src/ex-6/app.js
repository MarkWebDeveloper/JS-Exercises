// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.


let number1 = document.getElementById("number1")
let number2 = document.getElementById("number2")
let form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    function compare() {
        if (Number(number1.value) === Number(number2.value)) {
            return "The numbers are equal"
        }
    
        if (Number(number1.value) > Number(number2.value)) {
            return `${number1.value} is greater than ${number2.value}`
        }

        if (Number(number1.value) < Number(number2.value)) {
            return `${number2.value} is greater than ${number1.value}`
        } 
    }

    compare()

    console.log(number1)
    console.log(typeof number1) 

    form.innerHTML = /* html */ `
    <h1>${compare()}</h1>
    `;
})
        


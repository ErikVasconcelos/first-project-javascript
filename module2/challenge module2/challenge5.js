/* [ 5 ] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual 
número é maior */

const numbers = (number1, number2) => {
    if (number1 > number2) {
        console.log(`O primeiro número é maior que o segundo`)
    } 

    else if (number1 === number2) {
        console.log(`Os números são iguais`)
    }

    else {
        console.log(`O segundo número é maior que o primeiro`)
    }

return numbers

}

numbers(6,8)



/* [ 4 ] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor. */

const firstNumber = 5
const secondNumber = 25
const thirdNumber = 10

if(firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log(firstNumber + ": O primeiro número é maior")
}

else if(secondNumber > thirdNumber && secondNumber > firstNumber) {
    console.log(secondNumber + ": O segundo número é o maior")
}

else {
    console.log(thirdNumber + ": O terceiro número é o maior")
}
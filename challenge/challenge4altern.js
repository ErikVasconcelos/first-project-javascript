/* [ 4 ] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor. */

// (Alternative resolution)

const firstNumber = 5
const secondNumber = 25
const thirdNumber = 10

if(firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log(firstNumber + ": O primeiro número é maior")
} if(firstNumber < secondNumber && firstNumber < thirdNumber) {
    console.log(firstNumber + ": O primeiro número é o menor")
}

if(secondNumber > firstNumber && secondNumber > thirdNumber) {
    console.log(secondNumber + ": O segundo número é maior")
} if(secondNumber < firstNumber && secondNumber < thirdNumber) {
    console.log(secondNumber + ": O segundo número é o menor")
}

if(thirdNumber > firstNumber && thirdNumber > secondNumber) {
    console.log(thirdNumber + ": O terceiro número é maior")
} if(thirdNumber < firstNumber && thirdNumber < secondNumber) {
    console.log(thirdNumber + ": O terceiro número é o menor")
}

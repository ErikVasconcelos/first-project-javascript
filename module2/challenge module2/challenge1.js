/* [ 1 ] Escreva um programa onde, você chame uma função enviando um número, a função deve imprime na tela os números:
de 1 até o número que você enviou */

const numbers = (number) => {
    for (i = 1; i < number; i++) {
        console.log(`Contando o`, i)
    }
}

numbers(80)
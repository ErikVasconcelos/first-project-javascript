/* function - anônima 

Podemos utilizar as funções "sem nome - anônima". Elas geralmente são armazenadas dentro de uma variável, aceitando
parâmetros, argumentos e retornando da mesma forma que a função normal.

*/

const sum = function (number1, number2) { // function armazenada dentro de uma variável
    
    return number1 + number2 // irá retornar o argumento assim que a função for chamada
        /*  ou 
            const result = number1 + number2
            return result */
}

const firstNumber = 20
const secondNumber = 53

console.log(`O primeiro número é ${firstNumber}`)
console.log(`O primeiro número é ${secondNumber}`)
console.log(`A soma de ambos é ${sum(firstNumber, secondNumber)}`) // o sum está chamando a função return

sum(firstNumber, secondNumber) // ou números (20, 53)
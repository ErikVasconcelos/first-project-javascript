/* function - return

A estrutura simples de uma função é:

    function nomedafunction(parâmetros) {

    }

    function (argumentos)

Acima vemos a primeira etapa como estrutura da function e a segunda etapa "chamando/invocando" a function

Podemos "enviar" para as funções tanto os números, como também as variáveis.

Toda função retorna alguma coisa, mas pra ela retornar precisamos utilizar o (return), caso não utilizarmos, podemos
considerar a função como (void), caracterizada por não retornar nada.

Após executar o return a função para imediatamente.

*/

function sum(number1, number2) {
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
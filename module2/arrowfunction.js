/* arrow function

Nos permite elaborarmos funções de uma forma mais resumida, econimizando códigos/linhas etc.

function sum(number1, number2) { // function normal
    return number1 + number2
}
    ou

const sum = function (number1, number2) { // function anônima - armazenada dentro de uma variável
    return number1 + number2
}

Algumas formas de escrever uma função:

(1) const newArray = numbers.map( function(number) {
    return number * 2
})

(2) const newArray = numbers.map( (number) => {
    return number * 2
})

(3) const newArray = numbers.map( number => number * 3 ) Na mesma linha ele automaticamente insere um return


*/
                              
const sum = (number1, number2) => number1 + number2 // (=>) é uma arrow function, após a seta ela já retorna.
// Obs: apenas um parâmetro, não precisamos de chaves/parênteses, com nenhum ou mais de um, é necessário utilizar.

const firstNumber = 20
const secondNumber = 53

console.log(`O primeiro número é ${firstNumber}`)
console.log(`O primeiro número é ${secondNumber}`)
console.log(`A soma de ambos é ${sum(firstNumber, secondNumber)}`) // o sum está chamando a função return

sum(firstNumber, secondNumber) // ou números (20, 53)
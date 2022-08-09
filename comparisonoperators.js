/* Operadores de Comparação 

== -> Igual - Ele compara o valor, mas não compara o tipo do valor
=== ->  Totalmente igual - Ele verifica todo o tipo do dado

!= -> Diferente - Ele compara o valor, mas não compara o tipo do valor
!== -> Totalmente diferente - Ele verifica o tipo do dado

*/

const firstPerson = 'João'
const secondPerson = 'Maria'

const firstNumber = "23"
const secondNumber = 23


console.log(firstNumber == secondNumber) // Compara o valor mas não o tipo, neste caso ele identifica o número 23, mas não que é um texto/string ("")

const thirdNumber = "23"
const fourthNumber = 23

console.log(thirdNumber === fourthNumber) // Compara o valor e também o tipo, neste caso ele identifica o número 23 e também que é um texto/string ("")

const fifthNumber = '46'
const sixthNumber = 46

console.log(fifthNumber !== sixthNumber) // Da mesma forma funciona para as funções (diferente != e totalmente diferente !==)


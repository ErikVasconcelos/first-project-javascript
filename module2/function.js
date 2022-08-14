/* function - Funções 

É o principal do JavaScript, ela possibilita a existência de controle do que necessitamos fazer, como iremos, e 
quando iremos fazer.

Elas só irão realizar determinadas ações, caso forem "chamadas/solicitadas", quando colocamos o nome dela em algum
lugar etc.

Dentro dela temos inúmeros argumentos e parâmetros. Diferente das demais funções, na function os parâmetros e argumentos
só "existem" dentro dela, não funcionam da mesma forma como utilizamos nos outros elementos, que usamos apenas o
console.log pra aparecer.

A estrutura simples de uma função é:

    function nomedafunction(parâmetros) {

    }

    function (argumentos)

Acima vemos a primeira etapa como estrutura da function e a segunda etapa "chamando/invocando" a function.

*/

function sum(number1, number2) {
    console.log((number1 + number2) * (number1 * number2))
}

sum(2,3)


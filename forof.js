/* Estruturas de repetição - for of 

É uma versão mais inteligente do for, que na maioria dos casos não precisamos determinar tais comandos para que
ele realize a sua função. Por exemplo, ao utilizar uma string como variável, o for irá reconhecer caractere por
caractere, vejamos abaixo:

*/

let myName = 'Erik'
let allNames = ['Alana', 'Erik', 'Lara']

for(let letter of myName) { // Ele irá executar letra por letra, até finalizar a string selecionada
    console.log(letter)
}

for(let name of allNames) { // Ele irá executar e automaticamente parar quando finalizar os arrays
    console.log(name)
}
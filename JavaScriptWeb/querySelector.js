// Quando abrir o live server e entrar no console, não confundir o HTML Collection com Array, mesmo estando dentro
// de colchetes. 

const element = document.querySelector('#main-text') // Seleciona um elemento, o primeiro que encontrar

console.log(element)

// (. = class)
// (# = id)

// querySelectorAll = Irá selecionar todos os elementos que encontrar (NodeList)

const element2 = document.querySelectorAll('p') // Irá selecionar todos os elementos que encontrar (NodeList)

console.log(element2)


// querySelectorAll irá tratar o elemento dentro da NodeList, local que podemos interar um array etc.
// Já o queryselector, getElement etc... trata o elemento com HTML Collection, não permitindo interar array's
// dentro de funções e afins.
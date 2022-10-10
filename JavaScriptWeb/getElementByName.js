// Quando abrir o live server e entrar no console, não confundir o HTML Collection com Array, mesmo estando dentro
// de colchetes. 

const element = document.getElementsByName('my-input') // Seleciona o elemento pelo seu nome

console.log(element)

// É um elemento (NodeList), se tiver vários elementos com o mesmo nome, ele irá retornar todos
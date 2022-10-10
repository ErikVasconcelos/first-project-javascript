const element = document.querySelector('h1')

console.log(element.innerHTML = 'Hello World <p>my paragraph</p>')

// console.log(element.textContent = 'Hello World <p>my paragraph</p>')

// console.log(element.innerText = 'Hello World <p>my paragraph</p>')


// textContent = Coloca literalmente o que está dentro do elemento
// innerText = Coloca literalmente o que está dentro do elemento
// innerHTML = Age diferente, ele entende o que está dentro das tag's, conseguindo inserir conteúdo HTML pelo Javascript
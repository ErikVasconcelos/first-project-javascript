// Os eventos são inúmeras ações que realizamos dentro de uma página, por exemplo, passar o mouse em cima de
// algo, realizar um click em um determinado local, entre outros.

// Inserido dentro de uma determinada tag, ao escrevermos as iniciais (on), já irão aparecer inúmeras funcionalidades.


// <button onclick="myFunction()">Aperte aqui</button>
// Desta forma estamos chamando a função pelo HTML

const element = document.querySelector('button')

const myFunction = () => {
    alert('Fui pressionado')
}


// const element = document.querySelector('button') - chamando apenas pelo JavaScript

// element.onclick = () => {
//     alert('Fui pressionado')
// }
/* [ 10 ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. 
Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false. */

const joao = {
    name: 'João',
    age: 26,
    height: 1.79,
    weight: 88,
    course: 'Engenharia Industrial',
}

const maria = {
    name: 'Maria',
    age: 27,
    height: 1.62,
    weight: 82,
    course: 'Logística',
}

console.log(maria.name === joao.name)

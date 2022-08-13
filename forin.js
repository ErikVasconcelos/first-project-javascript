/* Estruturas de repetição - for in

O for in, bem parecido com o for of, só que irá tratar diretamente os objetos.

*/

const student = {
    name: "Erik",
    age: 26,
    height: 1.79,
    genre: "male",
    weight: 90,
}

for(let property in student) { // Ex: podemos utilizar: student["name"] ou student.name
    console.log(`${property}: ${student[property]}`) // property = propriedade
}
/* map - parecido com o forEach só que mais poderoso e com mais funcionalidades.

- Cria um novo array a partir do array percorrido (array original)
- Cria um novo array com a mesma quantidade do array original
- Aceita 3 parâmetros:
    item do array
    index
    array completo

Formas de escrever uma função:

(1) const newArray = numbers.map( function(number) {
    return number * 2
})

(2) const newArray = numbers.map( (number) => {
    return number * 2
})

(3) const newArray = numbers.map( number => number * 3 ) Na mesma linha ele automaticamente insere um return

*/

const numbers = [1,2,3,4]
const students = [
    { name: "Erik", age: 26 },
    { name: "Alana", age: 27 },
    { name: "Lara", age: 6 },
    { name: "Ryan", age: 18 },
    { name: "Edvan", age: 57 },
    { name: "Vânia", age: 48 },
];

// const newArray = numbers.map((number) => {
//     return number * 2
// })

// console.log(newArray)

const newStudents = students.map((student) => {
    const newStudent = {
        name: student.name + ' da Silva',
        age: student.age - 5
    }
    return newStudent
})

console.log(newStudents)
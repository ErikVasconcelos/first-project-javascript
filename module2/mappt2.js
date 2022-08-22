/* map - parecido com o forEach só que mais poderoso e com mais funcionalidades.

- Cria um novo array a partir do array percorrido (array original)
- Cria um novo array com a mesma quantidade do array original
- Aceita 3 parâmetros:
    item do array
    index
    array completo

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

const double = number => number * 6
const addiction = number => number + 50
const divide = number => number / 2

const newarray = numbers.map(double).map(addiction).map(divide)

console.log(newarray)
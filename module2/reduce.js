/* Reduce

    Retorna um valor (pode ser um novo array, objeto, string, number, etc.)
    Aceita 4 parâmetros:
        Acumulador
        Valor atual
        Index
        Array completo

*/

const list = [1, 2, 3, 4];                       // current começa com o primeiro valor

const sum = list.reduce((acc, current) => {
    return acc * current                        // return, a cada passagem aqui, ele irá guardar no acc (acumulador)

}, 10)                                                   // valor inicial do acumulador, nesse caso = 0

console.log(sum)

/* Pode ser dessa forma também:

const myReduce = (acc, current) => acc * current
const sum = list.reduce (myReduce, 0)

console.log(myReduce)

*/



const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', founded: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satia Nadella', founded: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Bryan Krzanich', founded: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', founded: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', founded: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', founded: 1976 },
];
/* foreach

é o for mais poderoso e importante, servindo para interar e percorrer arrays. Ele recebe até 3 argumentos e lembre-se
de utilizar os nomes que façam jus as variáveis para ficar mais fácil de manusear e identificar.

1º argumento = item (ele irá percorrer os elementos do primeiro argumento, tudo que estiver na primeira posição do
    argumentos irá assumir o valor que o forEach está enviando).

2º argumento = 

*/

const students = [
    { name: "Erik", age: 26 },
    { name: "Alana", age: 27 },
    { name: "Lara", age: 6 },
    { name: "Ryan", age: 18 },
    { name: "Edvan", age: 57 },
    { name: "Vânia", age: 48 },
]; // ex. qual a idade média dos nossos alunos?

let allStudentsAge = 0

students.forEach((student, index) => { //index é a posição do item que está dentro do array
    allStudentsAge += student.age
    console.log(`O aluno chama-se ${student.name}, tem ${student.age} anos e está na posição ${index} do array`)

})

const averageAge = allStudentsAge / students.length

console.log(`A média dos alunos é de ${averageAge.toFixed()}`)

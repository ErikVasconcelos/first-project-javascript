/* Array - Método 

push - seleciona um item do array - students.push()
length - conta quantidades do array - students.length
sort - organiza em ordem alfabética - students.sort()
delete - deleta algum elemento - delete students[posição]


                                splice(posição escolhida, posição a retirar, elemento que será adicionado)
splice - unir / ligar - students.splice(1,2...)

slice - tirar itens do array - slice(posição a retirar, até qual posição) - ele não modifica o array original, é necessário
criar outro array.

pop - retira o último item do array

shift - retira o primeiro item do array


*/

const students = ['Erik', 'Alana', 'Lara', 'Vânia', 'Edvan']

const newstudents = students.slice(1,3)

console.log(newstudents)
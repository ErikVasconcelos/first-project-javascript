/* Estruturas de repetição - for

4 + 4 + 4 + 4 = 16
4 * 4 = 16

no for utilizamos muito o (i) abreviação de (index)

for(let i = 0; i <= 10; i++) { Esse exemplo irá somar +1 na variável i até que ela chegue no número 10

    console.log(i)

}

*/

const students = ['Bruna', 'Ana', 'Erik', 'Alana', 'Lara']

for(let i = 0; i < students.length; i++) {

    console.log(`${students[i]} está presente a aula`)

}
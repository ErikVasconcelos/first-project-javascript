/* Filter

    - Cria um novo array a partir do array percorrido (original)
    - Cria um novo array apenas com elementos (filtrados)
    - Aceita 3 parâmetros
        Item do array
        Index
        Array completo

*/

// Filter com os estudantes que são vip's

const list = [
    { name: "Erik", vip: true },
    { name: "Alana", vip: false },
    { name: "Lara", vip: true },
    { name: "Ryan", vip: true },
    { name: "Vânia", vip: false },
    { name: "Edvan", vip: true },
    { name: "José", vip: false },
];

const justVips = list.filter( client => {
    return client.vip

})

console.log(justVips)



// Filter com apenas os estudantes que tiraram nota maior ou igual a 7

const testList = [
    { name: "Erik", testGrade: 9 },
    { name: "Alana", testGrade: 10 },
    { name: "Lara", testGrade: 8 },
    { name: "Ryan", testGrade: 7 },
    { name: "Vânia", testGrade: 6.5 },
    { name: "Edvan", testGrade: 5 },
    { name: "José", testGrade: 4 },
];

const newTestList = testList.filter( studentsApproved => {
    return studentsApproved.testGrade >= 7

})

console.log(newTestList)
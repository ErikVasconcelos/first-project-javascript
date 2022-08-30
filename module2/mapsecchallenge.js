/* map seconde challenge

Precisamos identificar as pessoas que foram aprovadas ou não.

*/

const firstExercise = [
    { name: "Erik", testGrade: 9 },
    { name: "Alana", testGrade: 10 },
    { name: "Lara", testGrade: 8 },
    { name: "Ryan", testGrade: 7 },
    { name: "Vânia", testGrade: 6.5 },
    { name: "Edvan", testGrade: 5 },
    { name: "José", testGrade: 4 },
];

const newStudents = firstExercise.map((students) => {
    let approvedOrNot
        if (students.testGrade >=7) {approvedOrNot = "Approved"}
        else {approvedOrNot = "Disapproved"}

        const newStudents = {
        name: students.name,
        testGrade: students.testGrade,
        finalResult: approvedOrNot
    
    }

    return newStudents

})

console.log(newStudents)
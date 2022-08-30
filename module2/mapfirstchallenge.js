/* map first challenge

Precisamos identificar as pessoas que são vip's como Black's, e as que não são como Green's. 

*/

const firstExercise = [
    { name: "Erik", vip: true },
    { name: "Alana", vip: false },
    { name: "Lara", vip: true },
    { name: "Ryan", vip: true },
    { name: "Vânia", vip: false },
    { name: "Edvan", vip: true },
    { name: "José", vip: false },
];


const newList = firstExercise.map((client) => {
    const newList = {
        name: client.name,
        vip: client.vip,
        sector: client.vip ? 'Black' : 'Green' // ? e : são operadores ternários
    }

    return newList

})

console.log(newList)
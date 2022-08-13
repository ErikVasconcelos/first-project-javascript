/* [ 5 ] Crie 5 objetos nesse formato { nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" } Ao rodar o programa,
deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser
aprovada. */

const firstPerson = {
    name: "Erik", age: 26, sex: "male", occupation: "Industrial Assistant", country: "Italian" }

const secondPerson = {
    name: "Alana", age: 27, sex: "female", occupation: "Industrial Auxiliary", country: "American" }

const thirdPerson = {
    name: "Ryan", age: 23, sex: "male", occupation: "Intern", country: "Brazilian" }

const fourthPerson = {
    name: "Lara", age: 20, sex: "female", occupation: "Doctor", country: "Brazilian" }

const fifthPerson = {
    name: "Vânia", age: 48, sex: "female", occupation: "Automotive Technician", country: "Bulgarian" }



if (firstPerson.age >= 18 && firstPerson.country === "Brazilian") {
    console.log(firstPerson.name + " você foi aprovado(a) no processo seletivo")
} 

else {
    console.log(firstPerson.name + " você não atendeu aos requisitos do processo seletivo")
}

if (firstPerson.age >= 18 && secondPerson.country === "Brazilian") {
    console.log(secondPerson.name + " você foi aprovado(a) no processo seletivo")
}

else {
    console.log(secondPerson.name + " você não atendeu aos requisitos do processo seletivo")
}

if (firstPerson.age >= 18 && thirdPerson.country === "Brazilian") {
    console.log(thirdPerson.name + " você foi aprovado(a) no processo seletivo")
}

else {
    console.log(thirdPerson.name + " você não atendeu aos requisitos do processo seletivo")
}

if (firstPerson.age >= 18 && fourthPerson.country === "Brazilian") {
    console.log(fourthPerson.name + " você foi aprovado(a) no processo seletivo")
}

else {
    console.log(fourthPerson.name + " você não atendeu aos requisitos do processo seletivo")
}

if (firstPerson.age >= 18 && fifthPerson.country === "Brazilian") {
    console.log(fifthPerson.name + " você foi aprovado(a) no processo seletivo")
}

else {
    console.log(fifthPerson.name + " você não atendeu aos requisitos do processo seletivo")
}
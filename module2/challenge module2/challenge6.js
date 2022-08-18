/* [ 6 ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número 
de filhos. A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário;
O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função! */


const people = [ 
    {name: "Erik", age: 26, sex: "male", occupation: "Industrial Assistant", numberOfChildren: 1, salary: 2698},

    {name: "Alana", age: 27, sex: "female", occupation: "Industrial Auxiliary", numberOfChildren: 1,  salary: 1903},

    {name: "Lara", age: 6, sex: "female", occupation: "Student", numberOfChildren: 0,  salary: 100},

    {name: "Ryan", age: 18, sex: "male", occupation: "Intern", numberOfChildren: 0,  salary: 300},

    {name: "Edvan", age: 57, sex: "male", occupation: "Truck Driver", numberOfChildren: 4,  salary: 5000},

    {name: "Vânia", age: 48, sex: "female", occupation: "autonomous", numberOfChildren: 2,  salary: -200},

    ]

function findaverageOfSalaryChildrensAndMajorSalary (peoplestatistics) {

    let averageSalary = 0
    let averagenumberOfChildren = 0
    let highestsalary = 0

    for (let i = 0; i < peoplestatistics.length; i++) {
        const salary = peoplestatistics[i].salary
        const children = peoplestatistics[i].numberOfChildren

        if (salary > highestsalary) highestsalary = salary

        if (salary < 0) {
            console.log(`Média de salário R$${(averageSalary / i).toFixed(0)}`)
            console.log(`Média de filhos ${(averagenumberOfChildren / i).toFixed(0)}`)
            console.log(`Maior salário R$${(highestsalary)}`)
            break
        }

        else {
            averageSalary = averageSalary + salary;
            averagenumberOfChildren += children
        }
    }

}

findaverageOfSalaryChildrensAndMajorSalary(people)
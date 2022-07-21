/* Object - Temos vários objetos existentes em nossas vidas e cada um deles possuem uma determinada propriedade e características, por exemplo:
nossa televisão, ela possui:

propriedade : valor
marca: Samsung
cor: preta
tamanho: 50"

nome: Erik
idade: 26
altura: 1.79
peso: 88

const name = 'Erik'
const age = '26'
const heigth = '1.79'
const weight = '88'

Ficaria complexo criar diversas variáveis, para isso que o object tem sua funcionalidade. As propriedades não precisam de aspas, por ex: name, age etc.
Lembrar da vírgula após cada propriedade. */

const person = {
    name: "Erik",
    age: 26,
    sex: "male",
    height: 1.79,
    weight: 88,
    address: {
        street: "1 de Maio",
        number: 138,
        country: "Brasil"
    }
}

console.log(person) /* Caso necessitar de uma propriedade específica dentro do object, colocar (person.nomeDaPropriedade.nomeDaSubPropriedade) etc.
Atenção a hierarquia, cada ponto final inserido, irá "entrar" um nível a mais no gênero, ao colocar duas propriedades da mesma hierarquia/nível, ele
irá aparecer como (undefined). */

const home = [
    {
    name: "Erik",
    age: 26,
    sex: "male",
    height: 1.79,
    weight: 88,
    address: "1 de Maio"
    },
    {
    name: "Alana",
    age: 27,
    sex: "female",
    height: 1.63,
    weight: 88,
    address: "1 de Maio"
    },
    {
    name: "Vânia",
    age: 48,
    sex: "female",
    height: 1.65,
    weight: 68,
    address: "R.Maria Gonzales"
    },
]
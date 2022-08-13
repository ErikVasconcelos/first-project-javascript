/* [ 6 ] Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 
10. Cada nota deve conter uma mensagem diferente. */

const score = Math.floor(Math.random() * (10 - 1) + 1)

switch (score) {

    case 0: console.log(score + ": sua nota está baixíssima, quase zerou a prova")
        break;
    case 1: console.log(score + ": sua nota está baixíssima, estude mais")
        break;
    case 2: console.log(score + ": sua nota está baixa, faça os exercícios")
        break;
    case 3: console.log(score + ": sua nota está baixa, pode melhorar")
        break;
    case 4: console.log(score + ": sua nota está baixa")
        break;
    case 5: console.log(score + ": sua nota está média, ainda em reprovação")
        break;
    case 6: console.log(score + ": sua nota está média, atenção as aulas")
        break;
    case 7: console.log(score + ": sua nota está boa, continue assim")
        break;
    case 8: console.log(score + ": sua nota está excelente, parabéns!")
        break;
    case 9: console.log(score + ": parabéns, você é um exemplo, nota excelente!")
        break;
    case 10: console.log(score + ": nota máxima, pode se inscrever para para ser o próximo mentor da sala, parabéns!")
        break;
}
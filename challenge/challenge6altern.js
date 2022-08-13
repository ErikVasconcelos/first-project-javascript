/* [ 6 ] Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 
10. Cada nota deve conter uma mensagem diferente. */

// Alternative resolution - Not recommended

const number = Math.floor(Math.random() * (10 - 1) + 1)

if(number > 0.1 && number < 1) {
    console.log(number + " - sua nota está baixíssima, quase zerou a prova") }

if(number >= 1 && number < 2) {
    console.log(number + " - sua nota está baixíssima, estude mais") }

if(number >= 2 && number < 3) {
    console.log(number + " - sua nota está baixa, faça os exercícios") }

if(number >= 3 && number < 4) {
    console.log(number + " - sua nota está baixa, pode melhorar") }

if(number >= 4 && number < 5) {
    console.log(number + " - sua nota está baixa") }

if(number >= 5 && number < 6) {
    console.log(number + " - sua nota está média, ainda em reprovação") }

if(number >= 6 && number < 7) {
    console.log(number + " - - sua nota está média, atenção as aulas") }

if(number >= 7 && number < 8) {
    console.log(number + " - sua nota está boa, continue assim") }

if(number >= 8 && number < 9) {
    console.log(number + " - sua nota está excelente, parabéns!") }

if (number >= 9 && number <= 10) {
    console.log(number + " - parabéns, você é um exemplo, nota excelente!") }
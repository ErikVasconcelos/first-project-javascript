/* Operadores ternários 

?  = se
: = se não

*/

const rain = true

                 //  se     // true        se não     // false
const umbrella = rain ? 'levar guarda-chuva' : 'deixar guarda-chuva'


console.log(umbrella)


const balance = true
const isNotBlocked = true
const accountExist = true

const transferOk = balance && isNotBlocked && accountExist ? 'Transferência realizada' : 'Transferência negada'

console.log(transferOk)
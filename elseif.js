/* Controle de Fluxo

Condicionais

if = Se
else = Se não
else if = mais se ...


*/

const temperatura = 35

if(temperatura >= 36 && temperatura <= 38) {
    console.log('Você está saudável') }

    else if(temperatura >= 39) {
        console.log('Você está com febre')
    }

    else {
        console.log('Você está com a temperatura muito baixa')
    }
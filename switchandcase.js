/* Switch / Case - É uma função que irá "chamar" apenas o case do determinado elemento identificado no pró
prio Switch, quando não utilizamos o valor exato do switch, podemos usar o default no lugar do case, por 
exemplo: Estamos com várias temperaturas citadas abaixo, mas apenas queremos a temperatura 36°, então podemos 
colocar: */

const temperatura = 36

switch (temperatura) {
    case 30:
        console.log('Você está com a temperatura muito abaixo do normal')
    break /* Após a execução do switch, o break serve para o switch não prosseguir para os demais cases */

    case 33:
        console.log('Você está com a temperatura abaixo do normal')
    break

    case 36:
        console.log('Você está com a temperatura normal')
    break

    default: /* Caso não utilizarmos no const algum valor que não seja igual dos outros cases, ele virá para o default */
        console.log('Sua temperatura não foi encontrada')
    break
    
    }
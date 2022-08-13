/*[ 3 ] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele 
também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado,
mostra o prêmio, se não ganhou, mostra outra mensagem. */

// (Alternative resolution)

const myNumber = (Math.floor(Math.random() * 10))

console.log("O número sorteado foi: " + myNumber)

if(myNumber >= 8) {
    console.log('Voce é o vencedor do prêmio de uma vaga de desenvolvedor jr. na nossa startup')
} else {
    console.log('Infelizmente não foi dessa vez, fique atento ao sorteio da próxima semana, boa sorte!')
}
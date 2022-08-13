const randomNumber = Math.floor(Math.random() * (10 - 1) + 1)
const winnerNumber = Math.floor(Math.random() * (10 - 1) + 1)

const letter = " e"

if(randomNumber === winnerNumber) {
    console.log(winnerNumber + ": Você é o vencedor da vaga dev.jr em nossa startup!")
}

else {
    console.log(randomNumber + letter, winnerNumber + ": Infelizmente não foi dessa vez, tente novamente e boa sorte!")
}

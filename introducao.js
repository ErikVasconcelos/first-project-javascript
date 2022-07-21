/* Variáveis: Utilizadas para "guardar" um elemento, para realizar uma determinada ação

 Algumas principais delas são as variáveis:

 var - O variable statement declara uma variável, opcionalmente é possível atribuir à ela um valor em sua inicialização;

 let - Permite a declaração de variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. Isso é inverso da keyword
 var, que define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco.

 const - cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a
 variável constante não pode ser alterada ou retribuída.

 Permitido: 
 - Iniciar com $ ou _
 - Colocar acentos
 - Iniciar com letras
 - Letras maiúsculas e minúsculas

 Não permitido:

 - Iniciar com números
 - Colocar espaços

 Ideal:

 - Camel case - primeira letra minúscula eAsDemaisPalavrasComAPrimeiraLetraMaiúscula (camel = camelo)
 - Snake case - sempre_utilizar_uma_underline_entre_as_palavras (snake = cobra)
 - Sempre em inglês
 - Nomes que fazem sentido

 Se for texto, utilizar aspas duplas ("nome do texto") ex: console.log("texto") */


var number1 = 1 // Não usem o var, antigamente não existia o let nem o const, agora que existe, iremos concentrar neles
let number2 = 2
const number3 = 3 // A função const, declara que é uma constante, neste caso o valor não irá alterar com o exemplo abaixo, utilizando number 3 = 30.

number1 = 10
number2 = 20
number3 = 30

console.log(number1) 
console.log(number2)
console.log(number3)


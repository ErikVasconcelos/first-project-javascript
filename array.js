/* Array - é um vetor ou uma lista, utilizando colchetes [e cada variável, será separada, por vírgulas], podendo guardar diversos elementos dentro
de uma determinada lista.
 
Imaginamos várias lojas e cada uma delas possui diversos usuários e cada um desses usuários são variáveis, seria difícil de criar uma propriedade
para cada pessoa. Por isso, utilizamos o (array) para abranger vários elementos simultaneamente.

const numbers = [10, 5, 234, , 234]
Nos arrays começamos pela posição zero, neste caso oa utilizarmos a posição zero é o numero 10, posição um é o número 5 e assim por diante.
console.log(numbers[0]) */

/* Dentro dos arrays podemos ter diversos tipos de elementos, no caso, primeira posição um número, segunda posição um texto e assim por diante. Vejamos
o exemplo abaixo: */
                
/* A estrtura array abaixo está: nº, string, {object}, nº, string, nº - lembrando que strings são tipos de textos utilizando ("", '' ou `` ) */

const numbers = [10, "Olá", {
    name: "Erik",
    age: 26,
    sex: "male",
    height: 1.79,
    weight: 88,
    address: "1 de Maio",
    number: 138,
    country: "Brasil"
    }
    , 234, "Encontramos o local", 2500
]

console.log(numbers)
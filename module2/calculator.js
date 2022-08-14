/* Criação de uma calculadora básica */

const calculate = (number1, number2, operation) => {
    let result

    switch (operation) {
        
        case "+": result = number1 + number2

            break;

        case "-": result = number1 - number2

            break;

        case "*": result = number1 * number2

            break;

        case "/": result = number1 / number2

            break;

        default:
            return result = 
            console.log("Por favor, insira abaixo os dados corretamente = (número1,número2,'operação desejada'")
            break;

    }
    return result
}

console.log(calculate(12,4,'*'))
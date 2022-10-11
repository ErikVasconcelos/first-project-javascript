const input = document.querySelector('input')
const select = document.querySelector('select')
const button = document.querySelector('button')


                       // ------------------ Pode ser criado desta forma ------------------- //

// const clickButton = () => {
//     alert('O botão foi clicado meu amigo')  
// }

// button.addEventListener('click', clickButton)


                        // ------------------ Ou conforme abaixo ------------------- //

input.addEventListener('focus', () => {
    console.log('Dei um foco')
})

select.addEventListener('change', () => {
    console.log(select.value)
})

button.addEventListener('click', () => {
    alert('O botão foi clicado')
})


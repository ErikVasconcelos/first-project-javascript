/* [ 2 ] Faça um programa que verifica se uma pessoa é brasileira ou não. " DEVE SER UM OBJETO " */

const myPerson = {
    name: 'Erik',
    age: 26,
    genre: 'Male',
    weight: 90,
    height: 1.79,
    country: 'Brazilian'
}

if(myPerson.country === 'Brazilian') {
    console.log('Ele(a) é brasileiro(a)')
}

else {
    console.log('Ele(a) é estrangeiro(a)')
}


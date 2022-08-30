/* Filter challenges */

// Apenas os números pares e divisíveis por 5

const list = [20,3,234,12,17,541,6,87,275,1000];

const newList = list.filter(number =>{
    if(number % 2 !== 0) return false
    if(number % 5 !==0) return false
    
    return true
})

console.log(newList)



// Lista de companias que foram fundadas a partir de 1975 e com valor de mercado maior que 200 milhões

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', founded: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satia Nadella', founded: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Bryan Krzanich', founded: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', founded: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', founded: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', founded: 1976 },
];

const newCompanies = companies.filter(company => {
    if (company.founded <= 1975) return false
    if (company.marketValue < 200) return false
    
    return true

})

console.log(newCompanies)

// ou

/* const newCompanies = companies.filter(company => {
    if (company.founded > 1975 && company.marketValue > 200) return true
    else return false
})

*/
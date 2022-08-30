/* Desafio realizado / map - reduce e filter aninhados */


const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', founded: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satia Nadella', founded: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Bryan Krzanich', founded: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', founded: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', founded: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', founded: 1976 },
];


const add10Percent = company => { // 1º desafio
    company.marketValue = company.marketValue + company.marketValue / 10
    
    return company
    
}

const oldCompanies = company => company.founded < 2000 // 2º desafio

const oldMarketValueCompanies = (acc, company) => (acc + company.marketValue) // 3º desafio

    const myBestCompanies = companies
    .map(add10Percent)
    .filter(oldCompanies)
    .reduce(oldMarketValueCompanies, 0)

    console.log(myBestCompanies)

/* map - reduce e filter */

const list = [20,3,234,12,17,541,6,87,275,1000];

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', founded: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satia Nadella', founded: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Bryan Krzanich', founded: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', founded: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', founded: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', founded: 1976 },
];

// O 1º exercício poderia ser feito dessa forma pelo map:

/* const 10PercentAdd = company => {
    company.marketValue = company.marketValue + company.marketValue / 10 ou * 0.1
    return company
    }

    const sumValue = companies.map(10PercentAdd)
    console.log(sumValue)

*/


const sumValue = companies.reduce((acc, current) => acc + (current.marketValue + current.marketValue * 0.1), 0)
console.log(`O valor de todas as empresas com 10% de acréscimo é de $`, sumValue)



const oldCompanies = companies.filter(agedCompanies => agedCompanies.founded < 2000)
console.log(oldCompanies)

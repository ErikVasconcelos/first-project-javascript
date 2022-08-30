/* Reduce - Somar o valor de todas as empresas utilizando o reduce */


const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', founded: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satia Nadella', founded: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Bryan Krzanich', founded: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', founded: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', founded: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', founded: 1976 },
];

const sumCompanies = companies.reduce(((acc, current) => acc + current.marketValue), 0)

console.log(sumCompanies)
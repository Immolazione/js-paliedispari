console.log('JS OK');

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// CHIEDO ALL'UTENTE DI SCRIVERE UNA PAROLA
const word = prompt('Inserisci una parola').trim();

let result = '';
for (let i = word.length; i >=0; i--) {
    let current = word.charAt(i);
    result += current
}

console.log(result);
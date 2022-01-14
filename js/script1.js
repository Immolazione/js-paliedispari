console.log('JS OK');

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// RECUPERO GLI ELEMENTI
const wordField = document.getElementById('wordField');
const resultField = document.getElementById('resultField');

// PORTO I RISULTATI DENTRO AGLI ELEMENTI HTML
wordField.innerHTML = '';
resultField.innerText = '';

// CHIEDO ALL'UTENTE DI SCRIVERE UNA PAROLA
const word = prompt('Inserisci una parola').trim();

reverse(word);

function reverse(word) {
    let result = '';
    for (let i = word.length; i >=0; i--) {
        let current = word.charAt(i);
        result += current
    }
    if (result === word) {
        
    }
}
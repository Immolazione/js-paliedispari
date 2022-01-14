console.log('JS OK');

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// RECUPERO GLI ELEMENTI
const wordField = document.getElementById('wordField');
const resultField = document.getElementById('resultField');

// CHIEDO ALL'UTENTE DI SCRIVERE UNA PAROLA
const word = prompt('Inserisci una parola').trim();

let result = '';
let finalMessage;

// INVOCAZIONE
isPalindrome(word);

function isPalindrome(word) {
    // REVERSE PAROLA
    for (let i = word.length; i >=0; i--) {
        let current = word.charAt(i);
        result += current
    }
    
    // CONFRONTO PER VEDERE SE LA PAROLA è PALINDROMA
    if (result === word) {
        finalMessage = `è Palindromo/a!`
    } else {
        finalMessage = `non è Palindromo/a!`
    }
}
    


// PORTO I RISULTATI DENTRO AGLI ELEMENTI HTML
wordField.innerHTML = word;
resultField.innerText = finalMessage;
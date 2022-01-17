console.log('JS OK');

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// #1 CHIEDO ALL'UTENTE

let userChoice = prompt('Scegli Pari o Dispari').toLowerCase().trim();

// VALIDAZIONE
while (userChoice !== 'pari' && userChoice !== 'dispari') {
    userChoice = prompt('Scegli Pari o Dispari').toLowerCase().trim();
}

let userNumber = parseInt(prompt('Scegli un numero da 1 a 5').trim());
while (!userNumber || userNumber < 1 || userNumber > 5) {
    userNumber = parseInt(prompt('Scegli un numero da 1 a 5').trim());
}

console.log(userChoice);
console.log(userNumber);

// #2 COSTANTE PER LA FUNZIONE

const pcNumber = rndNumber(1, 5);

// #3 FUNZIONE

function rndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// console.log(rndNumber(1, 5)); QUESTA NON VA MA NON SO PERCHè 
console.log(pcNumber); 

// #4 STABILISCO SOMMA

let sum = userNumber + pcNumber;
console.log(sum);

// #5 VERIFICO SOMMA PARI O DISPARI

let oddEven = result(sum);

function result(sum) {
    if (sum % 2 == 0) {
        return "pari";
    } else {
        return "dispari";
    }
}
console.log(oddEven);

// CONFRONTO USERCHOICE E SOMMA

if (oddEven == userChoice) {
    console.log(`Ha vinto l'Utente`)
} else {
    console.log(`Ha vinto il PC`)
}

// -----------------------------------------------------------------------------

// ! ESERCIZIO COMPLICATO CHE FARò POI 

// RECUPERO ELEMENTI
// const choiceField = document.getElementById('choice');
// const numberField = document.getElementById('number');
// const playButton = document.getElementById('play');
// const winnerField = document.getElementById('winner');

// let userNumber = numberField.value;
// let userChoice = choiceField.value;

// console.log(userNumber);
// console.log(userChoice);

// let result;

// playButton.addEventListener('click', function () {




//     // RICHIAMO NUMERO PC
//     const pcNumber = rndNumber(1, 5);

//     // FUNCTION PER NUMERO PC
//     function rndNumber(min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//     console.log(rndNumber);
    
//     // SOMMA
//     let sum = userNumber + pcNumber;
//     console.log(sum);
    
//     // FUNCTION PER PARI O DISPARI
//     function oddEven(sum) {
//         if (sum % 2 == 0)
//           return "pari";
//         else
//           return "dispari";
//     }
//     result = oddEven(sum);
    
//     // STAMPO IN PAGINA VINCITORE
//     winnerField.innerHTML = `La somma è: ${sum}`;
// })

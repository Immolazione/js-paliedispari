console.log('JS OK');

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



const userNumber = prompt('Scegli pari o dispari').trim();
const userChoice = parseInt(prompt('Scegli un numero da 1 a 5').trim());

console.log(userNumber);
console.log(userChoice);

const pcNumber = rndNumber(1, 5);


function rndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(rndNumber(1, 5));








































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

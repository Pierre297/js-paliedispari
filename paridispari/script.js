// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// fai scegliere all'utente tra pari o dispari
const pariDispari = prompt("Scegli tra pari o dispari?");

// fai scegliere all'utente un numero da uno a 5
const userNumber = prompt("Scegli un numero da 1 a 5");

let risultato = evenOdd(userNumber)

function evenOdd(numberImput){
    // fai scegliere randomicamente un numero al computer tra 1 e 5
    var randomNum = Math.floor(Math.random()* 5) + 1;
    console.log("il computer ha scelto" + "" + randomNum);

    // somma i due numeri
    let result = (randomNum + numberImput);

    // determina se vince pari o dispari
    if(result % 2 === 0){
        console.log("Ha vinto Pari!");
    }else {
        console.log("HA vinto Dispari!");
    }
    return result;
}



